import React, { Component } from 'react';
import Preloader from '../../../helpers/preloader';
import VideotipSingle from './VideotipSingle';
import videotipsPopupInit from './videotipsPageMagnificPopupInit';
import {Breadcrumbs, BreadcrumbsItem, getPageNameSlug} from "../../../helpers/Breadcrumbs";
import $ from 'jquery';


const NoVideotipsMessage = () =>  <p className="woocommerce-noreviews" style={{minHeight: 100}}>Видеотзывов пока нет.</p>;

class VideotipsPage extends Component {
    componentDidMount(){
        const {setAllVideotips} = this.props;
        setAllVideotips();

        this.$el = $('.videotip__items');
        videotipsPopupInit(this.$el);
    }
    
    render(){
        const {videotipsList, isVideotipsLoading, isVideotipsReady, videotipsError} = this.props;
        const {matchPath, pageName} = getPageNameSlug(this, this.props.isPagesReady, this.props.pages);

        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <Breadcrumbs>
                                <BreadcrumbsItem title="Главная" path="/" />
                                <BreadcrumbsItem title={pageName} path="" />
                            </Breadcrumbs>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="col__inner">

                                <div className="row">
                                    <div className="videotip__items">
                                        {isVideotipsLoading && !isVideotipsReady && <Preloader />}
                                        {isVideotipsReady && (
                                            videotipsList.length ? (
                                                videotipsList.map(v => <VideotipSingle videotip={v} matchPath={matchPath} key={v.id} />)
                                            ) : (
                                                <NoVideotipsMessage />
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default VideotipsPage;