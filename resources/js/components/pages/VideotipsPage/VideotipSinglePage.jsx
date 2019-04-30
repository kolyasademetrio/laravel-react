import React, {Component} from 'react';
import Breadcrumbs from '../../../helpers/breadcrumbs';
import Preloader from '../../../helpers/preloader';
import {Route} from 'react-router-dom';
import ErrorPage from '../ErrorPage';
import videotipSinglePagePopupInit from './videotipSinglePageMagnificPopupInit';
import $ from 'jquery';



class VideotipSinglePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            videotipSlug: this.props.match.params.videotip,
        };
    }

    componentDidMount() {
        const {setSingleVideotip} = this.props;
        const {videotipSlug} = this.state;
        setSingleVideotip(videotipSlug);

        this.$el = $('.movietiphome_single__inner');
        videotipSinglePagePopupInit(this.$el);
    }

    render(){

        console.log( 'this.$el inside of render', this.$el );

        const {videotipSingle: {title, video, image}, isVideotipSingleLoading, isVideotipSingleReady, videotipSingleError} = this.props;

        if (videotipSingleError === 404) {
            return <Route component={ErrorPage} />
        }

        if (isVideotipSingleLoading) {
            return <Preloader />
        }

        if (!isVideotipSingleReady) {
            return null;
        }

        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <Breadcrumbs />
                        </div>
                    </div>
                </div>
                <div className="movietiphome_single">
                    <div className="container movietiphome_single__titleContainer">
                        <div className="row movietiphome_single__titleRow">
                            <div className="col-xs-12 movietiphome_single__titleCol">
                                <div className="movietiphome_single__title home__sectionTitle">
                                    {title}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container movietiphome_single__container">
                    <div className="row movietiphome_single__row">
                        <div className="col-xs-12 movietiphome_single__col">
                            <div className="movietiphome_single__inner">
                                <div className="movietiphome_single__item">
                                    <a href={video} title={title} className="movietiphome_single__link">
                                        <img src={image} alt={title} className="movietiphome_single__img" />
                                        <span className="movietiphome_single__play"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default VideotipSinglePage;