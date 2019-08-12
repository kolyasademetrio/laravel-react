import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import {Link} from 'react-router-dom';
import GridImageWrap from './GridImageWrap';
import GridVideoWrap from './GridVideoWrap';


const GridItem = ({item, attachments, matchPath}) => {
    const wrapClassName = !attachments ? 'has_no_attachments' : '';
    let attachment, date, time;

    if (attachments) {
        const attachmentsList = attachments && attachments.filter(a => {
            return a.use_as_featured === true;
        } );

        attachment = attachmentsList.length && attachmentsList[0];

        const dateTime = attachment && attachment['updated_at'].split(' ', 2);

        date = dateTime[0];
        time = dateTime[1];

        console.log( date );
        console.log( time );
    }

    return (
        <div className={`offers__item ${wrapClassName}`}>
            {attachments && (
                attachment.type === 'video' ? (
                    <GridVideoWrap
                        thumbnail={attachment.thumbnail}
                        atachment={attachment.attachment}
                        date={date}
                        time={time}
                    />
                ) : (
                    <GridImageWrap
                        thumbnail={attachment.thumbnail}
                        path={`${matchPath}/${item.slug}`}
                        date={date}
                        time={time}
                    />
                )
            )}
            <div className="offers__content">
                <h2>
                    <Link to={{pathname: `${matchPath}/${item.slug}`}} className="offers__itemTitle">
                        {ReactHtmlParser(item.title)}
                    </Link>
                </h2>
                <div className="offers__itemExcerpt">
                    {ReactHtmlParser(item.excerpt)}
                </div>
                <Link to={{pathname: `${matchPath}/${item.slug}`}} className="offers__itemReadMore">
                    Читать далее
                </Link>
            </div>
        </div>
    );
};

export default GridItem;