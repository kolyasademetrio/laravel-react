import React from 'react';
import ReactHtmlParser from "react-html-parser";
import Tabs from './Tabs';
import ProductComments from './ProductComments';

const ProductTabs = ({tabBg, descr, ingredients, usage, commentsLength}) => {
    return (
        <Tabs tabBg={tabBg}>
            {descr && (
                <div title="Описание">
                    {ReactHtmlParser(descr)}
                </div>
            )}

            {ingredients && (
                <div title="Состав">
                    {ReactHtmlParser(ingredients)}
                </div>
            )}

            {usage && (
                <div title="Применение">
                    {ReactHtmlParser(usage)}
                </div>
            )}

            <div title={`Отзывы (${commentsLength})`}>
                <ProductComments />
            </div>
        </Tabs>
    );
}

export default ProductTabs;