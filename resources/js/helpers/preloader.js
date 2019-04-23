import React from 'react';

const Preloader = ({height, content}) => {
    return (
        <div className="preloader">{content ? content : 'Загрузка...'}</div>
    );
};

export default Preloader;
