import React, {Component}  from "react";
import Slider from 'react-slick';
import {settings, setSliderVisibility} from "./recommendedSliderSettings";
import ProductSingle from '../products/ProductSingle';
import Preloader from '../../helpers/preloader';

class RecommendedList extends Component {
    componentDidMount() {
        const {setAllProducts} = this.props;
        setAllProducts();
    }

    render(){
        const {productsRecommended, isProductsReady, isProductsLoading} = this.props;

        if (isProductsLoading && !isProductsReady) {
            return <Preloader />
        }

        if (!isProductsReady) {
            return null;
        }

        const showSlider = setSliderVisibility( productsRecommended.length, window.innerWidth );

        const productsRecommendedList = productsRecommended.map(product => (
            <div key={product.id} className={'good__item'}>
                <ProductSingle {...product} matchPath={'shop'} />
            </div>
        ));

        return (
            <div className="recommended__products">
                {showSlider ? (
                    <Slider {...settings} className={'recommended__categoryWrapper active'}>
                        {productsRecommendedList}
                    </Slider>
                ) : (
                    <div className="recommended__categoryWrapper active no_slider">
                        {productsRecommendedList}
                    </div>
                )
                }
            </div>
        );
    }
};

export default RecommendedList;

