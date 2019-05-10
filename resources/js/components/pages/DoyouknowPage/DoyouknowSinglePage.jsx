import React, {Component, Fragment} from 'react';
import {Route} from 'react-router-dom';
import ErrorPage from '../ErrorPage';
import Preloader from '../../../helpers/preloader';
import Breadcrumbs from '../../../helpers/Breadcrumbs/Breadcrumbs';
import doyouknowSinglePageMagnificPopupInit from "../DoyouknowPage/doyouknowSinglePageMagnificPopupInit";
import SinglePage from "../commons/SinglePage/SinglePage";

class DoyouknowSinglePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            slug: this.props.match.params.slug,
            breadcrumbsItems: [
                {
                    title: 'Главная',
                    path: '/'
                },
            ],
        };
    }

    componentDidMount(){
        const {setSingleDoyouknow} = this.props;
        const {slug} = this.state;
        setSingleDoyouknow(slug);
    }

    render(){
        const {isDoyouknowSingleLoading, isDoyouknowSingleReady, stockSingleErrors, item, attachments} = this.props;

        if (stockSingleErrors === 404) {
            return <Route component={ErrorPage} />
        }

        if (isDoyouknowSingleLoading && !isDoyouknowSingleReady) {
            return <Preloader />
        }

        if (!isDoyouknowSingleReady) {
            return null;
        }

        console.log( 'this.props', this.props );
        console.log( 'this.state.slug', this.state.slug );

        return (
            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <Breadcrumbs items={this.state.breadcrumbsItems} />
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