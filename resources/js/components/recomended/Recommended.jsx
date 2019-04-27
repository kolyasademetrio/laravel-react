import React from 'react';
import {Link} from 'react-router-dom';
import CatsListFilterHome from '../../containers/CatsListFilterHome';
import RecommendedList from '../../containers/recommended/RecommendedList';

const Recommended = ({categories, isProductsLoading, isProductsReady}) => {
    return (
        <div className="recommended">
            <div className="container recommendedTitle__container">
                <div className="row recommendedTitle__row">
                    <div className="col-xs-12 recommendedTitle__col">
                        <div className="recommendedTitle__inner">
                            <h3 className="recommended__title home__sectionTitle home__sectionTitleAfter">
                                Мы рекомендуем
                            </h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container recommended__container">
                <div className="row recommended__row">
                    <div className="recommended__col col-xs-12">
                        <div className="recommended__inner">
                            {isProductsReady &&  <CatsListFilterHome categories={categories} />}

                            <RecommendedList />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container recommended__container">
                <div className="row recommended__row">
                    <div className="recommended__col col-xs-12">
                        <div className="recommended__btnWrap rayBtn__wrap">
                            <Link to={'/shop'} className={'reccomended__btnLink homepage__rayBtn'}>
                                Просмотреть все товары
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Recommended;