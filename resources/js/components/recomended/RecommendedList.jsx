import React from "react";
import Slider from 'react-slick';
import {settings} from "./recommendedSliderSettings";
import ProductSingle from '../products/ProductSingle';

const RecommendedList = ({productsRecommended, categoriesRelationship, categories, filterBy}) => {
    
    console.log( categoriesRelationship );

    return (
        <div className="recommended__products">
            <div className="recommended__categoryWrapper">
                <Slider {...settings}>
                    {
                        productsRecommended && productsRecommended.map(productData => (
                            <ProductSingle key={productData.id} {...productData} />
                        ))
                    }
                </Slider>
            </div>
        </div>
    );
};

export default RecommendedList;

