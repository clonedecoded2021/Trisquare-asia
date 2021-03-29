import React, { useEffect, useState } from 'react';
import '../css/ProductPage.css';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import ProductDescription from './ProductDescription';
import Links from './Links';
import { connect } from 'react-redux';
import axios from 'axios';


function ProductPage(props) {
    const { productId } = props
    const [productDetails, setProductDetails] = useState()
    const [pId, setPId] = useState(productId)
    useEffect(() => {
        const id = props.match.params.id
        axios.get(`https://trisquare.asia/api/product_desc/${id}`).then(res => setProductDetails(res.data))
        setPId(productId);
    }, [])
    if (productDetails) {
        return (
            <div className="productPage">
                <div className="productPage__searchBar">
                    <div className="lockIcons">
                        {props.userIn ? <LockOpenOutlinedIcon /> : <LockOutlinedIcon />}
                    </div>
                    <h1 className="productPage__category">{productDetails[0].productCategory}</h1>
                </div>
                <div className="productPage__mainSection">
                    <div className="product__leftDiv">
                        <img className="productpage__image" src={`https://trisquare.asia/buyer/uploads/${productDetails[0].product_image_name}`} alt="" />
                        <Links className="productPage__links" />
                    </div>
                    <div className="product__rightDiv">
                        <ProductDescription
                            product={productDetails[0]}
                            pId={pId}
                            quantities={productDetails[0].productQuantity}
                            solds={productDetails[0].soldProducts}
                        />
                    </div>
                </div>
            </div>
        )
    } return (
        <div className="container">
            <div className="loader">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        productId: state.productId,
        loginInfo: state.login,
        userIn: state.userIn
    }
}
export default connect(mapStateToProps)(ProductPage);
