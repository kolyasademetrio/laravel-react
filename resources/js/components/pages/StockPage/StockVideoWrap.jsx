import React from 'react';


const StockVideoWrap = ({thumbnail, atachment, date, time}) => {
    return (
        <a href={atachment} className="offers__imageWrap has__video">
            <span className="offers_date">
                <span>{date}</span>
                <span>{time}</span>
            </span>
            <img src={thumbnail} alt="dewr"/>
        </a>
    );
};

export default StockVideoWrap;