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
// import EmailVerification from './Components/EmailVerification'
import EmailVerification from './Components/EmailVerification'
import { useEffect, useState } from "react";
import Axios from 'axios'
import ResetPassword from "./Components/ResetPassword";
import { propTypes } from "react-bootstrap/esm/Image";
import AdminSellers from "./Components/AdminSellers";
import AdminBuyers from "./Components/AdminBuyers";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    Axios.get("https://trisquare.asia/api/product_data").then(res => setProducts(res.data))
  }, [])
  return (
    <BrowserRouter>
      <div className="App">
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
          <Route exact path="/buyer/modal" >
            <OrderModal />
          </Route>
          <Route exact path="/buyer/admin" >
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
      </div>
    </BrowserRouter>
  );
}
export default App;
