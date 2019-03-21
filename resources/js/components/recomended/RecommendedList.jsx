import React  from "react";
import Slider from 'react-slick';
import {settings, setSliderVisibility} from "./recommendedSliderSettings";
import ProductSingle from '../products/ProductSingle';

const RecommendedList = ({productsRecommended}) => {

    const showSlider = setSliderVisibility( productsRecommended.length, window.innerWidth );

    const productsRecommendedList = productsRecommended.map(productData => (
                <ProductSingle key={productData.id} {...productData} />
    ));

    return (
        <div className="recommended__products">
            {showSlider ? (
                    <Slider {...settings} className={'recommended__categoryWrapper active'}>
                        { productsRecommendedList }
                    </Slider>
                ) : (
                    <div className="recommended__categoryWrapper active no_slider">
                        { productsRecommendedList }
                    </div>
                )
            }
        </div>
    );
};

export default RecommendedList;

