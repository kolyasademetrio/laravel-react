import React from 'react';

const StockSingle = () => {
    return (
        <div className="offers__item">
            <a href="#" className="offers__imageWrap">
                <span className="offers_date">
                    <span>2018-10-24</span>
                    <span>19:00:00</span>
                </span>
                <img src="/uploads/2018/10/400x200.jpg" alt="dewr"/>
            </a>
            <div className="offers__content">
                <h2>
                    <a href="/offers" className="offers__itemTitle">
                        Тестовая акция 3 с картинками
                    </a>
                </h2>
                <div className="offers__itemExcerpt">
                    Скидка 20% на весь ассортимент продукции представленной на сайте,
                    при оформлении заказа до 07.10.2018. Акционные цены приурочены ко
                    всемирному дню учителя. Приятных покупок. Будьте красивыми. <br/><br/>
                    Скидка 20% на весь ассортимент продукции представленной на
                    сайте, при оформлении заказа до 07.10.2018. Акционные цены
                    приурочены ко всемирному дню учителя. Приятных покупок. Будьте
                    красивыми.
                </div>
                <a href="/offers" className="offers__itemReadMore">Читать далее</a>
            </div>
        </div>
    );
};

export default StockSingle;