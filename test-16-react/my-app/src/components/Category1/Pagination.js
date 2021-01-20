import React, { Component } from "react";

class Pagination extends Component {
    render() {
        var pageNumber = [];
        for (let i = 1; i <= this.props.totalPage; i++) {
            if (Number(this.props.page) === i) {
                pageNumber[i] = (
                    <li className="page-item active" key={i} >
                        <span className="page-link" onClick={this.props.onClickPage}>
                            {i}
                        </span>
                    </li>
                );
            } else {
                pageNumber[i] = (
                    <li className="page-item" key={i} >
                        <span className="page-link" onClick={this.props.onClickPage}>
                            {i}
                        </span>
                    </li>
                );
            }
        }
        return (
            <nav aria-label="Page navigation example" className="ex1" >
                <ul className="pagination">
                    <li className={Number(this.props.page) === 1 ? "page-item  disabled" : "page-item"} onClick={this.props.onClickPrevious}><span className="page-link">Previous</span></li>
                    {pageNumber}
                    <li className={Number(this.props.page) === this.props.totalPage ? "page-item  disabled" : "page-item"} onClick={this.props.onClickNext}><span className="page-link">Next</span></li>
                </ul>
            </nav >
        );
    }
}

export default Pagination;
