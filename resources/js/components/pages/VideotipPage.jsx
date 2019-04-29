import React, { Component } from 'react';
import {setAllVideotips} from '../../actions/videotips';

import {connect} from 'react-redux';

class Videotip extends Component {
    
    componentDidMount(){
        const {setAllVideotips} = this.props;
        setAllVideotips();
    }
    
    render(){
        const {videotipsList, isVideotipsLoading, isVideotipsReady, videotipsError} = this.props;
        
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
                                        {isVideotipsReady && videotipsList.map(v => {
                                            return (
                                                <div className="videotip__item col-lg-3 col-md-3 col-sm-4 col-xs-6">
                                                    <a href={v.video}
                                                       title={v.title}
                                                       className="videotip__itemInner"
                                                    >
                                                        <img src={v.image}
                                                             alt="" className="videotip__itemImg"
                                                        />
                                                        <span className="videotip__play"></span>
                                                    </a>
                                                    <a
                                                        href="/videotip/%d1%81%d0%be%d0%b2%d0%b5%d1%82-5/"
                                                        className="videotip__title"
                                                    >
                                                        {v.title}
                                                    </a>
                                                </div>
                                            );
                                        })}
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

const mapStateToProps = ({videotips}) => {
    const {videotipsList, isVideotipsLoading, isVideotipsReady, videotipsError} = videotips;
    return {
        videotipsList,
        isVideotipsLoading,
        isVideotipsReady,
        videotipsError,
    }
};

const mapDispatchToProps = dispatch => ({
    setAllVideotips: videotips => dispatch(setAllVideotips(videotips)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Videotip);