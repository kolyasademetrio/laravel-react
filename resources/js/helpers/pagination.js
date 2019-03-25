import React, {Component} from 'react';

export const getPager = (totalItems, currentPage, pageSize) => {
    // default to first page
    currentPage = currentPage || 1;

    // default page size is 10
    pageSize = pageSize || 10;

    // calculate total pages
    var totalPages = Math.ceil(totalItems / pageSize);

    var startPage, endPage;
    if (totalPages <= 10) {
        // less than 10 total pages so show all
        startPage = 1;
        endPage = totalPages;
    } else {
        // more than 10 total pages so calculate start and end pages
        if (currentPage <= 6) {
            startPage = 1;
            endPage = 10;
        } else if (currentPage + 4 >= totalPages) {
            startPage = totalPages - 9;
            endPage = totalPages;
        } else {
            startPage = currentPage - 5;
            endPage = currentPage + 4;
        }
    }

    // calculate start and end item indexes
    var startIndex = (currentPage - 1) * pageSize;
    var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    // create an array of pages to ng-repeat in the pager control
    var pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);

    if (totalItems && endIndex === endIndex) {
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }

}

export class Pagination extends Component {

    constructor(props) {
        super(props);
        this.setPage = this.props.setPagination.bind(this);
    }

    state = {
        showLastPrev: false
    }

    render(){
        const {pager, setPagination: setPage} = this.props;

        if (!pager.pages || pager.pages.length <= 1) {
            return null;
        } else {
            return (<nav className="pagination">
                <ul className="page-numbers">
                    {this.state.showLastPrev && (
                        <li className={pager.currentPage === 1 ? 'disabled' : ''}>
                            <span onClick={() => this.setPage(1)}>First</span>
                        </li>
                    )}
                    <li className={pager.currentPage === 1 ? 'disabled' : ''}>
                        <span onClick={() => this.setPage(pager.currentPage - 1)}>←</span>
                    </li>
                    {
                        pager.pages.map(p => (
                            <li className={pager.currentPage === p ? 'active' : ''} key={p}>
                                <span onClick={() => this.setPage(p)}>{p}</span>
                            </li>
                        ))
                    }
                    <li className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
                        <span onClick={() => this.setPage(pager.currentPage + 1)}>→</span>
                    </li>

                    {this.state.showLastPrev && (
                        <li className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
                            <span onClick={() => this.setPage(pager.totalPages)}>Last</span>
                        </li>
                    )}
                </ul>
            </nav>)
        }
    }
    

}