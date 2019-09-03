import React, {Component} from 'react';
import videotipSinglePagePopupInit from './videotipSinglePageMagnificPopupInit';
import $ from 'jquery';

class VideotipPopupWrapper extends Component {
    componentDidMount() {
        this.$el = $('.movietiphome_single__inner');
        videotipSinglePagePopupInit(this.$el);
    }
    
    render(){
        const {title, video, image} = this.props.data;
        return (
            <div className="movietiphome_single__inner">
                <div className="movietiphome_single__item">
                    <a href={video} title={title} className="movietiphome_single__link">
                        <img src={`/imagecache/original/${image}`} alt={title} className="movietiphome_single__img" />
                        <span className="movietiphome_single__play"></span>
                    </a>
                </div>
            </div>
        );
    }
}

export default VideotipPopupWrapper;