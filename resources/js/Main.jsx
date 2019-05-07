import React, {Component} from 'react';

import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Ancorup from './components/Ancorup';

import { Route, Switch } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import ShopPage from './containers/pages/ShopPage';
import ProductSinglePage from './containers/pages/ProductSinglePage/ProductSinglePage';
import VideotipPage from './containers/pages/VideotipsPage/VideotipPage';
import VideotipSinglePage from './containers/pages/VideotipsPage/VideotipSinglePage';
import StockPage from './containers/pages/StockPage/StockPage';
import StockSinglePage from './components/pages/StockPage/StockSinglePage';
import DoyouknowPage from './components/pages/DoyouknowPage/DoyouknowPage';
import DoyouknowSinglePage from './components/pages/DoyouknowPage/DoyouknowSinglePage';
import ContactsPage from './components/pages/ContactsPage';
import ErrorPage from './components/pages/ErrorPage';
import ShippingPage from './components/pages/ShippingPage';
import TermsCooperationPage from './components/pages/TermsCooperationPage';

class Main extends Component {
    render() {
        return (
            <div>
                <div className="content__main test">
                    <Header/>
                    <div id="main" className="site__main">
                        <Switch>
                            <Route exact path="/" component={HomePage} />
                            <Route exact path="/about-cosmetics" component={AboutPage} />
                            <Route exact path="/shop" component={ShopPage} />
                            <Route exact path={`/shop/:product`} component={ProductSinglePage} />
                            <Route exact path="/videotips" component={VideotipPage} />
                            <Route exact path={`/videotips/:videotip`} component={VideotipSinglePage} />
                            <Route exact path="/stocks" component={StockPage }/>
                            <Route exact path="/stocks/:slug" component={StockSinglePage} />
                            <Route exact path="/doyouknow" component={DoyouknowPage} />
                            <Route exact path="/doyouknow/:slug" component={DoyouknowSinglePage} />
                            <Route exact path="/contacts" component={ContactsPage} />
                            <Route exact path="/shipping" component={ShippingPage} />
                            <Route exact path="/terms-cooperation" component={TermsCooperationPage} />
                            <Route component={ErrorPage} />
                        </Switch>
                    </div>
                </div>
                <Footer/>
                <Ancorup/>
            </div>
        );
    }
}

export default Main;
