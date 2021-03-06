import React, {Component} from 'react';
import Breadcrumbs from '../../../helpers/Breadcrumbs/Breadcrumbs';
import Preloader from '../../../helpers/preloader';
import {Route} from 'react-router-dom';
import ErrorPage from '../ErrorPage';
import VideotipPopupWrapper from './VideotipPopupWrapper';
import {ReactHtmlParser} from 'react-html-parser';
import {BreadcrumbsItem, getPageNameSlug} from "../../../helpers/Breadcrumbs";


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
    }

    render(){
        const {
            videotipSingle: {title, video, image},
            isVideotipSingleLoading,
            isVideotipSingleReady,
            videotipSingleError
        } = this.props;

        const {matchPath, pageName} = getPageNameSlug(this, this.props.isPagesReady, this.props.pages);

        if (videotipSingleError === 404) {
            return <Route component={ErrorPage} />
        }

        if (isVideotipSingleLoading && !isVideotipSingleReady) {
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
                            <Breadcrumbs>
                                <BreadcrumbsItem title="Главная" path="/" />
                                <BreadcrumbsItem title={pageName} path={matchPath} />
                                <BreadcrumbsItem title={title} path="" />
                            </Breadcrumbs>
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
                            <VideotipPopupWrapper data={{title, video, image}} />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default VideotipSinglePage;