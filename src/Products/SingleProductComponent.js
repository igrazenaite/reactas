import React from 'react';

var SingleProductComponent = (props)=>{
    var product = props.singleProduct;
    return <span>Name: {product.name}<br/>
                Price: {product.price} $<br/>
                Quantity: {product.quantity}<br/>
                Description: {product.description}
    </span>

}

export default SingleProductComponent;