import React, {Component, Fragment} from 'react';
import {Route} from 'react-router-dom';
import ErrorPage from '../ErrorPage';
import Preloader from '../../../helpers/preloader';
import doyouknowSinglePageMagnificPopupInit from "../DoyouknowPage/doyouknowSinglePageMagnificPopupInit";
import SinglePage from "../commons/SinglePage/SinglePage";
import {Breadcrumbs, BreadcrumbsItem, getPageNameSlug} from "../../../helpers/Breadcrumbs";

class DoyouknowSinglePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            slug: this.props.match.params.slug,
        };
    }

    componentDidMount(){
        const {setSingleDoyouknow} = this.props;
        const {slug} = this.state;
        setSingleDoyouknow(slug);
    }

    render(){
        const {isDoyouknowSingleLoading, isDoyouknowSingleReady, stockSingleErrors, item, attachments} = this.props;
        const {matchPath, pageName} = getPageNameSlug(this, this.props.isPagesReady, this.props.pages);

        if (stockSingleErrors === 404) {
            return <Route component={ErrorPage} />
        }

        if (isDoyouknowSingleLoading && !isDoyouknowSingleReady) {
            return <Preloader />
        }

        if (!isDoyouknowSingleReady) {
            return null;
        }

        return (
            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <Breadcrumbs>
                                <BreadcrumbsItem title="Главная" path="/" />
                                <BreadcrumbsItem title={pageName} path={matchPath} />
                                <BreadcrumbsItem title={item.title} path="" />
                            </Breadcrumbs>
                        </div>
                    </div>
                </div>

                <SinglePage
                    item={item}
                    attachments={attachments}
                    initPopup={doyouknowSinglePageMagnificPopupInit}
                />
            </Fragment>
        );
    }
}

export default DoyouknowSinglePage;