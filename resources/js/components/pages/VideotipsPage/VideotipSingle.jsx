import React from 'react';
import {Link} from 'react-router-dom';

const VideotipSingle = ({v, matchPath}) => {
    return (
        <div className="videotip__item col-lg-3 col-md-3 col-sm-4 col-xs-6">
            <a href={v.video} title={v.title} className="videotip__itemInner">
                <img src={v.image} alt={v.title} className="videotip__itemImg" />
                <span className="videotip__play"></span>
            </a>
            <Link to={{pathname: `${matchPath}/${v.slug}`}} className="videotip__title">
                {v.title}
            </Link>
        </div>
    );
};

export default VideotipSingle;