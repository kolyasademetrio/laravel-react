import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import {Link} from 'react-router-dom';
import StockImageWrap from './StockImageWrap';
import StockVideoWrap from './StockVideoWrap';


const StockSingle = ({stock, attachments, matchPath}) => {
    const attachmentsList = attachments.filter(a => a.use_as_featured === 1 );
    const attachment = attachmentsList[0];
    const dateTime = attachment['updated_at'].split(' ', 2);
    const date = dateTime[0];
    const time = dateTime[1];

    return (
        <div className="offers__item">
            {attachment.type === 'video' ? (
                <StockVideoWrap
                    thumbnail={attachment.thumbnail}
                    atachment={attachment.attachment}
                    date={date}
                    time={time}
                />
                ) : (
                <StockImageWrap
                    thumbnail={attachment.thumbnail}
                    path={`${matchPath}/${stock.slug}`}
                    date={date}
                    time={time}
                />
            )}
            <div className="offers__content">
                <h2>
                    <Link to={{pathname: `${matchPath}/${stock.slug}`}} className="offers__itemTitle">
                        {ReactHtmlParser(stock.title)}
                    </Link>
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