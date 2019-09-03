import React, {Fragment} from 'react';
import ReactHtmlParser from "react-html-parser";
import SinglePagePopupWrapper from "../../../pages/commons/SinglePagePopupWrapper";

const SinglePage = ({item: {title, content}, attachments, initPopup}) => {
    const hasAttachments = attachments.length > 0;

    return (
        <Fragment>
            <div className="offers_single">
                <div className="container offers_single__titleContainer">
                    <div className="row offers_single__titleRow">
                        <div className="col-xs-12 offers_single__titleCol">
                            <div className="offers_single__title">
                                {ReactHtmlParser(title)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container offers_single__container">
                <div className="row offers_single__row">
                    <div className="col-xs-12 offers_single__col">
                        <div className="offers_single__inner">
                            <div className="offers_single__item">
                                {hasAttachments && (
                                    <SinglePagePopupWrapper attachments={attachments} initPopup={initPopup} />
                                )}

                                <div className="offers_single__content">
                                    {ReactHtmlParser(content)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default SinglePage;