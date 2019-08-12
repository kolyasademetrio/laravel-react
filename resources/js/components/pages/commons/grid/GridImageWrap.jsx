import React from 'react';
import {Link} from "react-router-dom";

const GridImageWrap = ({thumbnail, path, date, time}) => {
    return (
        <Link to={{pathname: path}} className="offers__imageWrap">
            <span className="offers_date">
                <span>{date}</span>
                <span>{time}</span>
            </span>
            <img src={`/imagecache/original/${thumbnail}`} alt="dewr"/>
        </Link>
    );
};

export default GridImageWrap;