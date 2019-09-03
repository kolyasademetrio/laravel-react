import React from 'react';
import {Link} from 'react-router-dom';

const VideotipSingle = ({videotip: {title, video, image, slug}, matchPath}) => {
    return (
        <div className="videotip__item col-lg-3 col-md-3 col-sm-4 col-xs-6">
            <a href={video} title={title} className="videotip__itemInner">
                <img src={`/imagecache/small-290/${image}`} alt={title} className="videotip__itemImg" />
                <span className="videotip__play"></span>
            </a>
            <Link to={{pathname: `${matchPath}/${slug}`}} className="videotip__title">
                {title}
            </Link>
        </div>
    );
};

export default VideotipSingle;