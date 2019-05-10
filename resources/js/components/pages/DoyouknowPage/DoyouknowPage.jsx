import React, { Component } from 'react';
import doyouknowPageMagnificPopupInit from "../DoyouknowPage/doyouknowPageMagnificPopupInit";
import GridList from "../commons/grid/GridList";
import {Breadcrumbs, BreadcrumbsItem, getPageNameSlug} from '../../../helpers/Breadcrumbs';


class DoyouknowPage extends Component {
    componentDidMount(){
        const {setAllDoyouknows} = this.props;
        setAllDoyouknows();
    }

    render(){
        const {
            isDoyouknowsReady,
            isDoyouknowsLoading,
            doyouknowsErrors,
            doyouknowsList,
            doyouknowsAttachment,
        } = this.props;

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

                <GridList
                    isLoading={isDoyouknowsLoading}
                    isReady={isDoyouknowsReady}
                    errors={doyouknowsErrors}
                    list={doyouknowsList}
                    attachment={doyouknowsAttachment}
                    matchPath={matchPath}
                    noMessage='Новостей пока нет.'
                    popupInit={doyouknowPageMagnificPopupInit}
                />
            </React.Fragment>
        );
    }
}

export default DoyouknowPage;