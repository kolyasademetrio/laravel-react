import React from 'react';

const GridVideoWrap = ({thumbnail, atachment, date, time}) => {
    return (
        <a href={atachment} className="offers__imageWrap has__video">
            <span className="offers_date">
                <span>{date}</span>
                <span>{time}</span>
            </span>
            <img src={`/imagecache/original/${thumbnail}`} alt="dewr"/>
        </a>
    );
};

export default GridVideoWrap;