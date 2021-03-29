import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer1 from "./Components/Footer1";
import Login from './Components/Login';
import Signup from './Components/Signup';
import Sell from './Components/Sell';
import CartPage from "./Components/CartPage";
import ProductPage from "./Components/ProductPage";
import OrderModal from "./Components/OrderModal";
import ForgotPage from "./Components/ForgotPage";
import Admin from './Components/Admin';
import AdminPreOrder from './Components/AdminPreOrder';
import AdminPurchases from './Components/AdminPurchases';
import AdminRequests from './Components/AdminRequests';
import AdminVerifyUser from './Components/AdminVerifyUser';
import SellPage from './Components/SellPage';
<<<<<<< HEAD
// import EmailVerification from './Components/EmailVerification'
import EmailVerification from './Components/EmailVerification'
import { useEffect, useState } from "react";
import Axios from 'axios'
import ResetPassword from "./Components/ResetPassword";
import { propTypes } from "react-bootstrap/esm/Image";
import AdminSellers from "./Components/AdminSellers";
import AdminBuyers from "./Components/AdminBuyers";
=======
import EmailVerifi from './Components/EmailVerification'
import { useEffect, useState } from "react";
import Axios from 'axios'
import ResetPassword from "./Components/ResetPassword";
>>>>>>> a85fb8ab7f2ce7c020c083a6bd4c74167c3b4a7d

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    Axios.get("https://trisquare.asia/api/product_data").then(res => setProducts(res.data))
  }, [])
  return (
    <BrowserRouter>
      <div className="App">
<<<<<<< HEAD
        <Switch>
          <Route exact path="/buyer" >
            <Header />
            <Home />
            <Footer1 />
          </Route>
          <Route exact path="/buyer/login" >
            <Header />
            <Login />
            <Footer1 />
          </Route>
          <Route exact path="/buyer/signup" >
            <Header />
            <Signup />
            <Footer1 />
          </Route>
          <Route exact path="/buyer/sell" >
            <Header />
            <Sell />
            <Footer1 />
          </Route>
          <Route exact path="/buyer/sellPage" >
            <Header />
            <SellPage />
            <Footer1 />
          </Route>
          <Route exact path="/buyer/cartPage" >
            <Header />
            <CartPage />
            <Footer1 />
          </Route>
          {/* <Route exact path="/buyer/garbage" >
            <Header />
            <EmailVerification/>
            <Footer1 />
          </Route> */}
          <Route exact path="/buyer/product/:id" render={(props) => {
            return (
              <>
                <Header />
                <ProductPage {...props} />
                <Footer1 />
              </>
            )
          }} />
=======
        <Header />
        <Switch>
          <Route exact path="/buyer" component={Home} />
          <Route exact path="/buyer/login" component={Login} />
          <Route exact path="/buyer/signup" >
            <Signup />
          </Route>
          <Route exact path="/buyer/sell" >
            <Sell />
          </Route>
          <Route exact path="/buyer/sellPage" >
            <SellPage />
          </Route>
          <Route exact path="/buyer/cartPage" >
            <CartPage />
          </Route>
          <Route exact path="/buyer/product/:id" component={ProductPage} />
>>>>>>> a85fb8ab7f2ce7c020c083a6bd4c74167c3b4a7d
          <Route exact path="/buyer/modal" >
            <OrderModal />
          </Route>
          <Route exact path="/buyer/admin" >
<<<<<<< HEAD
            <Header />
            <Admin products={products} />
            <Footer1 />
          </Route>
          <Route exact path="/buyer/admin/preorders" >
            <Header />
            <AdminPreOrder products={products} />
            <Footer1 />
          </Route>
          <Route exact path="/buyer/admin/purchases" >
            <Header />
            <AdminPurchases products={products} />
            <Footer1 />
          </Route>
          <Route exact path="/buyer/admin/requests" >
            <Header />
            <AdminRequests products={products} />
            <Footer1 />
          </Route>
          <Route exact path="/buyer/admin/verifyUser" >
            <Header />
            <AdminVerifyUser products={products} />
            <Footer1 />
          </Route>
          <Route exact path="/buyer/admin/buyers" >
            <Header />
            <AdminBuyers products={products} />
            <Footer1 />
          </Route>
          <Route exact path="/buyer/admin/sellers" >
            <Header />
            <AdminSellers products={products} />
            <Footer1 />
          </Route>
          <Route exact path="/buyer/forgotPassword" >
            <Header />
            <ForgotPage />
            <Footer1 />
          </Route>
          <Route exact path="/buyer/activate/:email/:id" component={EmailVerification} />
          <Route exact path="/buyer/forgot_Password/:email" component={ResetPassword} />
        </Switch>
=======
            <Admin products={products} />
          </Route>
          <Route exact path="/buyer/admin/preorders" >
            <AdminPreOrder products={products} />
          </Route>
          <Route exact path="/buyer/admin/purchases" >
            <AdminPurchases products={products} />
          </Route>
          <Route exact path="/buyer/admin/requests" >
            <AdminRequests products={products} />
          </Route>
          <Route exact path="/buyer/admin/verifyUser" >
            <AdminVerifyUser products={products} />
          </Route>
          <Route exact path="/buyer/forgotPassword" >
            <ForgotPage />
          </Route>
          {/* <Route exact path="/buyer/activate/:email/:id" component={EmailVerifi} /> */}
          <Route exact path="/api/forgot_Password/:email">
            <ResetPassword />
          </Route>
        </Switch>
        {/* <Footer /> */}
        <Footer1 />
>>>>>>> a85fb8ab7f2ce7c020c083a6bd4c74167c3b4a7d
      </div>
    </BrowserRouter>
  );
}
export default App;
