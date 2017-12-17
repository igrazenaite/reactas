import React from 'react';
import P1 from '../ProductCard/ProductCard';

class ProductListComponent extends React.Component{
    constructor(props){
        super(props);
    }
    //goProducts = () => this.props.router.push("products");

    render(){
        console.log(this.props);
        return(
            <div>
                <div className="container">
                    <div className="row1">
                        <div className="col-sm-4 col-md-4">
                            <P1 product={this.props.products[0]}/>
                        </div>
                        <div className="col-sm-4 col-md-4">
                            <P1 product={this.props.products[1]}/>
                        </div>
                        <div className="col-sm-4 col-md-4">
                            <P1 product={this.props.products[2]}/>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row2">
                        <div className="col-sm-4 col-md-4">
                            <P1 product={this.props.products[3]}/>
                        </div>
                    </div>
                </div>
               {/*  <p><button onClick={this.goProducts}
                    className="btn btn-primary"
                    role="button">
                    Go to products</button></p> */}
            </div>
        );
    }
};

export var PList=ProductListComponent;
export default ProductListComponent;