import React, { Component } from 'react';
import Breadcrumbs from '../../../helpers/breadcrumbs';
import StockSingle from './StockSingle';

import {connect} from 'react-redux';

class StockPage extends Component {
    componentDidMount(){

    }

    render(){
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <Breadcrumbs />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="col__inner">
                                <div className="row">
                                    <div className="offers__items">
                                        <StockSingle />
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

const mapStateToProps = (state) => {


    return state;
};

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(StockPage);