import React, { Component } from 'react';
import Preloader from '../../../helpers/preloader';
import VideotipSingle from './VideotipSingle';


class VideotipPage extends Component {
    componentDidMount(){
        const {setAllVideotips} = this.props;
        setAllVideotips();
    }
    
    render(){
        const {videotipsList, isVideotipsLoading, isVideotipsReady, videotipsError} = this.props;
        const matchPath = this.props.match.path;

        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="kama_breadcrumbs" itemScope="" itemType="http://schema.org/BreadcrumbList">
                                <span itemProp="itemListElement" itemScope="" itemType="http://schema.org/ListItem">
                                    <a href="/" itemProp="item">
                                        <span itemProp="name">Главная</span>
                                    </a>
                                </span>
                                <span className="kb_sep"> / </span>Видеосоветы
                            </div>
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
                                            videotipsList.map(v => <VideotipSingle v={v} matchPath={matchPath} key={v.id} />)
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

export default VideotipPage;