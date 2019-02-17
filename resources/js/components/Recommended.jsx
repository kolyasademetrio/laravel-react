import React, {Component} from 'react';
import ProductSingle from '../components/products/ProductSingle';
import recomendedProducts from './database/recomended-products-data';
import Slider from 'react-slick';

class Recommended extends Component {

    state = {
        products: recomendedProducts,
    }

    render(){

        return (
            <div className="recommended">
                <div className="container recommendedTitle__container">
                    <div className="row recommendedTitle__row">
                        <div className="col-xs-12 recommendedTitle__col">
                            <div className="recommendedTitle__inner">
                                <h3 className="recommended__title home__sectionTitle home__sectionTitleAfter">
                                    Мы рекомендуем </h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container recommended__container">
                    <div className="row recommended__row">
                        <div className="recommended__col col-xs-12">
                            <div className="recommended__inner">
                                <div className="recommended__cats">
                                    <ul className="recommended__categoryList">
                                        <li className="recommended__categoryItem">
                                            <a href="/" className="recommended__categoryItemLink">Хит продаж</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="recommended__products">
                                    <div className="recommended__categoryWrapper">
                                        <Slider {...settings}>
                                        {
                                            this.state.products.map( ( productData ) => (
                                                <ProductSingle key={productData.id} {...productData} />
                                            ))
                                        }
                                        </Slider>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container recommended__container">
                    <div className="row recommended__row">
                        <div className="recommended__col col-xs-12">
                            <div className="recommended__btnWrap rayBtn__wrap">
                                <a href="/shop" className="reccomended__btnLink homepage__rayBtn">Просмотреть все товары</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const settings = {
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    prevArrow: <SamplePrevArrow/>,
    nextArrow: <SampleNextArrow/>,
    centerMode: true,
    focusOnSelect: false,
    autoplay: false,
    centerPadding: 0,
    swipe: false,
    responsive: [
        {
            breakpoint: 2400,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
            }
        },
    ],
};

function SampleNextArrow(props) {
    const { style, onClick } = props;
    return (
        <div type="button"
             data-role="none"
             className="slick-next slick-arrow"
             aria-label="Next"
             role="button"
             onClick={onClick}
             style={{ ...style, display: "block" }}
        />
    );
}

function SamplePrevArrow(props) {
    const { style, onClick } = props;
    return (
        <div type="button"
             data-role="none"
             className="slick-prev slick-arrow"
             aria-label="Previous"
             role="button"
             onClick={onClick}
             style={{ ...style, display: "block" }}
        />
    );
}

export default Recommended;