import React, { Component } from 'react';
import Preloader from '../../../helpers/preloader';
import VideotipSingle from './VideotipSingle';
import Breadcrumbs from '../../../helpers/breadcrumbs';
import videotipsPopupInit from './videotipsPageMagnificPopupInit';
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
        const matchPath = this.props.match.path;

        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            {<Breadcrumbs />}
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="col__inner">

                                <div className="row">
                                    <div className="videotip__items">
                                        {isVideotipsLoading && <Preloader />}
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