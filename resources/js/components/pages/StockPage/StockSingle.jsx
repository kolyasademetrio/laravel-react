import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import {Link} from 'react-router-dom';

const StockSingle = ({stock, attachments, matchPath}) => {
    console.log( 'attachments', attachments );

    const attachment = attachments.filter(a => a.use_as_featured === 1 );
    
    const atachmentlink = (attachment[0].type === 'video') ? attachment[0].attachment : `${matchPath}/${stock.slug}`;
    
    return (
        <div className="offers__item">
            <a href={atachmentlink} className="offers__imageWrap">
                <span className="offers_date">
                    <span>2018-10-24</span>
                    <span>19:00:00</span>
                </span>
                <img src={attachment[0].thumbnail} alt="dewr"/>
            </a>
            <div className="offers__content">
                <h2>
                    <a href="/offers" className="offers__itemTitle">
                        {ReactHtmlParser(stock.title)}
                    </a>
                </h2>
                <div className="offers__itemExcerpt">
                    {ReactHtmlParser(stock.content)}
                </div>
                <Link to={{pathname: `${matchPath}/${stock.slug}`}} className="offers__itemReadMore">
                    Читать далее
                </Link>
            </div>
        </div>
    );
};

export default StockSingle;