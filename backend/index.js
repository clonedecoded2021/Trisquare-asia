require("dotenv").config({ path: '.env' })
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const path = require("path")
const bodyParser = require('body-parser');
const multer = require('multer')
const { sendConfirmationEmail, sendForgotPasswordEmail } = require('./sendMail');

const bcrypt = require("bcrypt");
const saltRounds = 10;

const app = express();

const corsOptions = {
    origin: ["http://localhost:3000"],
    credentials: true,
    optionSuccessStatus: 200,
    methods: ["GET", "POST", "PUT", "DELETE"],
}
app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.json());

const db = mysql.createConnection({
    user: process.env.USER,
    host: process.env.HOST,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
});

const storage = multer.diskStorage({
    destination: "../uploads",
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({ storage: storage })

app.post("/api/user_create", (req, res) => {
    const { email, username, password, country, city, pin, business, mobile, first_name, last_name, user_type, approved, address } = req.body

    bcrypt.hash(password, saltRounds, (err, hashed) => {
        if (err) {
            console.log(err)
        }
        db.query("SELECT email FROM userdata WHERE email = '" + email + "'", (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log(result)
                if (result.length === 0) {
                    db.query(
                        "INSERT INTO userdata (email , username , password , country , city , pin , business , mobile , first_name , last_name , user_type , approved , address) VALUES (?,?,?,?,?,?,?,?,?,?,?,? ,?)",
                        [email, username, hashed, country, city, pin, business, mobile, first_name, last_name, user_type, approved, address],
                        (err, result) => {
                            if (err) {
                                console.log(err);
                            } else {
                                res.send(result);
                                sendConfirmationEmail({ userEmail: email, userId: result.insertId, userName: username })
                            }
                        }
                    );
                } else {
                    res.send({ message: "This email is already in use." })
                }
            }
        })
    })
});

app.post("/api/login", (req, res) => {
    const { email, password } = req.body

    db.query(
        "SELECT * FROM userdata WHERE email = ?",
        [email],
        (err, result) => {
            if (err) {
                console.log(err)
                res.send({ message: "Wrong username or password" })
            } else {
                if (result.length > 0) {
                    bcrypt.compare(password, result[0].password, (error, response) => {
                        if (error) {
                            console.log(error)
                        }
                        if (response) {
                            res.send(result)
                        } else {
                            res.send({ message: "Wrong email or password." })
                        }
                    })
                } else {
                    res.send({ message: "This Email does  not exist." })
                }
            }
        }
    )
})

app.post("/api/product_request", (req, res) => {
    const { email, request, username } = req.body
    db.query(
        "INSERT INTO product_requests (email , username ,request) VALUES (?,?,?)",
        [email, username, request],
        (err, result) => {
            if (err) {
                console.log(err);
                res.send(err);
            } else {
                res.send(result);
            }
        }
    );
})


app.post("/api/product_data", upload.single("avatar"), (req, res) => {
    console.log(req.file)

    const { email, mobile, businessName, productUrl, product, selectCategories, productLength, productWidth, productWeight, description, orderDeadline, unit1, unit2, unit3, unit4, quantity, usdprice1, usdprice2, usdprice3, usdprice4, pin, AsiaSP1, AfricaSP2, EuropeSP3, SouthAmericaSP4, NorthAmericaSP5, AntarcticaSP6, AustraliaSP7, country } = req.body;

    const file = req.file;
    const fileName = file.filename;
    const filePath = file.path;

    const sql = "INSERT INTO product_data (email , businessName , mobile , productUrl , productName , productCategory , productLength , productWidth , productWeight , description , productQuantity , orderDeadline , units1 , units2 , units3 , units4 , price1 , price2 , price3 , price4 , pin , country , AsiaShippingPrice , AustraliaShippingPrice , EuropeShippingPrice , SouthAmericaShippingPrice , NorthAmericaShippingPrice , AntarcticaShippingPrice , AfricaShippingPrice , product_image_name , image_path) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
    const Valuess = [email, businessName, mobile, productUrl, product, selectCategories, productLength, productWidth, productWeight, description, quantity, orderDeadline, unit1, unit2, unit3, unit4, usdprice1, usdprice2, usdprice3, usdprice4, pin, country, AsiaSP1, AustraliaSP7, EuropeSP3, SouthAmericaSP4, NorthAmericaSP5, AntarcticaSP6, AfricaSP2, fileName, filePath]

    db.query(sql, Valuess, function (err, result) {
        if (err) {
            console.log(err)
        }
        console.log(Valuess)
    });
})

app.post("/api/preorders_data", (req, res) => {
    const { ProductName, ProductImage, ProductQuantity, TargetPrice, UserEmail, FirstName, Mobile, ProductId } = req.body

    const sql = "INSERT INTO preorders (id, email, product_image , productName , mob , targetPrice , firstName , productQuantity) VALUES (?,?,?,?,?,?,?,?) "

    const Values = [ProductId, UserEmail, ProductImage, ProductName, Mobile, TargetPrice, FirstName, ProductQuantity]

    db.query(sql, Values, (err, results) => {
        if (err) {
            console.log(err)
        }
        res.send("Your will be notified when target price is getting hit.")
    })
})

app.post("/api/orderhistory", (req, res) => {
    const { ProductName, ProductQuantity, BuyerPaid, ShippingPrice, Address, PIN, Country, Contact, ProductImage, Email } = req.body


    const sql = "INSERT INTO orderhistory (productName , productQuantity , buyerPaid , shippingPrice , address , pin , country , contact , product_image , email) VALUES (?,?,?,?,?,?,?,?,?,?)"
    const Values = [ProductName, ProductQuantity, BuyerPaid, ShippingPrice, Address, PIN, Country, Contact, ProductImage, Email]

    db.query(sql, Values, (err, result) => {
        if (err) {
            console.log(err)
        }
        res.send(result)
    })
})
app.post("/api/forgotPassword", (req, res) => {
    const email = req.body.email

    console.log(email)
    sendForgotPasswordEmail({ userEmail: email }).then(() => console.log("Email has been sent"))
})


app.get("/api/", (req, res) => {
    res.send("You are not authorized.")
})

app.get("/api/product_data", (req, res) => {
    db.query("SELECT * FROM product_data", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.get("/api/product_desc/:id", (req, res) => {
    const id = req.params.id
    // console.log(req.params.id)
    const sql = "SELECT * FROM product_data WHERE id = ?"
    db.query(sql, id, (err, result) => {
        if (err) {
            console.log(err)
        }
        res.send(result)
    })
})

app.get("/api/preorders_data", (req, res) => {
    const sql = "SELECT * FROM preorders"

    db.query(sql, (err, result) => {
        if (err) {
            console.log(err)
        }
        res.send(result)
    })
})

app.get("/api/orders_history", (req, res) => {
    const sql = "SELECT * FROM orderhistory"

    db.query(sql, (err, result) => {
        if (err) {
            console.log(err)
        }
        res.send(result)
        // console.log(result)
    })
})

app.get("/api/request__orders", (req, res) => {
    const sql = "SELECT * FROM product_requests"

    db.query(sql, (err, result) => {
        if (err) { console.log(err) }
        res.send(result)
    })
})

app.get("/api/get_user_data", (req, res) => {
    const sql = "SELECT * FROM userdata"

    db.query(sql, (err, result) => {
        if (err) console.log(err)
        res.send(result)
    })
})
app.get("/api/activate/:email/:id", (req, res) => {
    const id = req.params.id
    const email = req.params.email

    console.log(id)

    db.query("SELECT * FROM userdata WHERE email = ?", email, (err, result) => {
        if (err) console.log(err)
        console.log(result[0].id)
        if (result[0].id == id) {
            db.query("UPDATE userdata SET emailVerified = ? WHERE id = ? ",
                [1, id], (err, result) => {
                    if (err) console.log(err)
                    res.send({ message: "Your Email Is Verified." })
                })
        } else {
            res.send({ message: "Email Not Verified." })
        }
    })
})
app.post("/api/email_verification/:email/:id", (req, res) => {
    const { email, id } = req.params
    const userName = req.body.userName
    console.log("running")

    sendConfirmationEmail({ userEmail: email, userId: id, userName: userName })
})

app.get("/api/forgot_Password/:email", (req, res) => {
    const email = req.params.email
    const password = req.body.password

    if (password) {
        bcrypt.hash(password, saltRounds, (err, hashed) => {
            db.query("UPDATE userdata SET password = ? WHERE email = ? ", [hashed, email], (error, result) => {
                if (error) console.log(err)
                res.send(result)
            })
        })
    }
})


app.put("/api/user_data/update", (req, res) => {
    const { id, approved } = req.body;
    console.log(id)
    console.log(approved)
    db.query("UPDATE userdata SET approved = ? WHERE id = ?", [approved, id], (err, result) => {
        if (err) console.log(err)
        res.send(result)
        console.log(result)
    })
})

app.put("/api/product_data/update", (req, res) => {
    const { id, soldProducts } = req.body

    db.query("UPDATE product_data SET soldProducts = ? WHERE id = ? ", [soldProducts, id], (err, result) => {
        if (err) console.log(err)
        res.send(result)
    })
})

app.put("/api/product_data/approval/update", (req, res) => {
    const { id, approval } = req.body

    db.query("UPDATE product_data SET approval = ? WHERE id = ? ", [approval, id], (err, result) => {
        if (err) console.log(err)
        res.send(result)
    })
})

app.put("/api/product_data/price/update" , (req, res) => {
    const {id , currentPrice} = req.body
})


app.delete("/api/user_data/delete/:id", (req, res) => {
    const id = req.params.id
    db.query("DELETE FROM userdata WHERE id = ?", id, (err, result) => {
        if (err) console.log(err)
        res.send(result)
    })
})

app.delete("/api/product_request/delete/:id", (req, res) => {
    const id = req.params.id
    db.query("DELETE FROM product_requests WHERE id = ?", id, (err, result) => {
        if (err) console.log(err)
        res.send(result)
    })

})
app.delete("/api/order_history/delete/:id", (req, res) => {
    const id = req.params.id
    db.query("DELETE FROM orderhistory WHERE id = ?", id, (err, result) => {
        if (err) console.log(err)
        res.send(result)
    })

})
app.delete("/api/preorders/delete/:id", (req, res) => {
    const id = req.params.id
    db.query("DELETE FROM preorders WHERE id = ?", id, (err, result) => {
        if (err) console.log(err)
        res.send(result)
    })

})
app.delete("/api/product_data/delete/:id", (req, res) => {
    const id = req.params.id
    db.query("DELETE FROM product_data WHERE id = ?", id, (err, result) => {
        if (err) console.log(err)
        res.send(result)
    })

})

app.listen(3001, () => {
    console.log("Yey, your server is running on port 3001");
});
