import React, {Component} from 'react';
import VideotipPopupWrapper from '../components/pages/VideotipsPage/VideotipPopupWrapper';
import Preloader from "../helpers/preloader";

class Movietiphome extends Component {
    componentDidMount() {
        const {setSingleVideotip} = this.props;
        const videotipSlug = 'showonhomepage';
        setSingleVideotip(videotipSlug);
    }

    render(){
        const {
            videotipSingle: {title, video, image},
            isVideotipSingleLoading, isVideotipSingleReady, videotipSingleError
        } = this.props;

        if (videotipSingleError) {
            return null;
        }

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
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Movietiphome;