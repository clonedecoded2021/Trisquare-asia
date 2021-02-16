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
import EmailVerifi from './Components/EmailVerification'
import { useEffect, useState } from "react";
import Axios from 'axios'
import ResetPassword from "./Components/ResetPassword";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    Axios.get("https://trisquare.asia/api/product_data").then(res => setProducts(res.data))
  }, [])
  return (
    <BrowserRouter>
      <div className="App">
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
          <Route exact path="/buyer/modal" >
            <OrderModal />
          </Route>
          <Route exact path="/buyer/admin" >
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
      </div>
    </BrowserRouter>
  );
}
export default App;
