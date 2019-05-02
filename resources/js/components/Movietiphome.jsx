import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setSingleVideotip} from '../actions/videotips';
import VideotipPopupWrapper from '../components/pages/VideotipsPage/VideotipPopupWrapper';
import Preloader from "../helpers/preloader";

class Movietiphome extends Component {
    componentDidMount() {
        const {setSingleVideotip} = this.props;
        const videotipSlug = 'о-компании-alga-ph';
        setSingleVideotip('showonhomepage');
    }

    render(){
        const {videotipSingle: {title, video, image}, isVideotipSingleLoading, isVideotipSingleReady, videotipSingleError} = this.props;

        return (
            <div className="movietiphome" style={{background: 'url(/uploads/2018/08/movietiphome_bg.png) no-repeat center top',WebkitBackgroundSize: '100% 100%',backgroundSize: '100% 100%'}}>
                <div className="container movietiphome__titleContainer">
                    <div className="row movietiphome__titleRow">
                        <div className="col-xs-12 movietiphome__titleCol">
                            <div className="movietiphome__title home__sectionTitle">
                                Видеосоветы
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container movietiphome__container">
                    <div className="row movietiphome__row">
                        <div className="col-xs-12 movietiphome__col">
                            {isVideotipSingleLoading && <Preloader />}

                            {isVideotipSingleReady && <VideotipPopupWrapper data={{title, video, image}} />}


                            {/*<div className="movietiphome__inner">
                                <div className="movietiphome__slider">
                                    <div className="movietiphome__item">
                                        <a href="https://www.youtube.com/watch?v=hD5vxRg8P_I" className="movietiphome__link"
                                           title="О компании Alga Ph">
                                            <img src="/uploads/2018/08/video_014.jpg" alt="" className="movietiphome__img"/>
                                            <span className="movietiphome__play"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>*/}
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({videotips: {videotipSingle, isVideotipSingleLoading, isVideotipSingleReady, videotipSingleError}}) => ({
    videotipSingle,
    isVideotipSingleLoading,
    isVideotipSingleReady,
    videotipSingleError
});

const mapDispatchToProps = dispatch => ({
    setSingleVideotip: videotip => dispatch(setSingleVideotip(videotip)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Movietiphome);