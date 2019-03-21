import React from 'react';

const CatsFilterShop = ({categoriesToShow: categories, categoriesRelationship, filterBy, setFilter}) => {

    return (
        <div className="products__categories">
            <div className="products__categoryHeader">
                <div className="products__categoryTitle">Ассортимент продуктов</div>
                <a href="#products__categoryList" className="products__categoryMenuBtn"></a>
            </div>

            <ul className="products__categoryList" id="products__categoryList">
                <li className="products__categoryItem">
                    <span
                        className={"products__categoryItemLink all__categories"+(filterBy == "all" ? " active" : "")}
                        onClick={setFilter.bind(this, 'all')}
                    >
                        Весь ассортимент
                    </span>
                </li>

                {categories.map((catItem) => (
                    <li key={catItem.category_id} className="products__categoryItem">
                        <span
                            className={"products__categoryItemLink"+(filterBy == catItem.category_filter_by ? " active" : "")}
                            onClick={setFilter.bind(this, catItem.category_filter_by)}
                        >
                            {catItem.category_name}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CatsFilterShop;