import React from 'react';

const Pagination = (props) => {

    let page = props.page, size = props.size, total = props.total, listOptions = props.listOptions;
    let numPage = Math.ceil(total / size)
    let nextButton, previousButton, pageSizeOptions,
        next = <span className="page-link" onClick={()=>props.onChangePage(page + 1)}><i className="fa fa-chevron-right"></i></span>,
        previous = <span className="page-link" onClick={()=>props.onChangePage(page - 1)}><i className="fa fa-chevron-left"></i></span>;

    if (page == numPage) nextButton = (
        <li className="page-item disabled">{next}</li>
    ); else nextButton = (
        <li className="page-item">{next}</li>
    )

    if (page == 1) previousButton = (
        <li className="page-item disabled">{previous}</li>
    ); else previousButton = (
        <li className="page-item">{previous}</li>
    )

    pageSizeOptions = listOptions.map(x => <option value={x} key={x}>{x}</option>)

    const handleChangePage = (e) => {
        let page = e.target.getAttribute("value");
        props.onChangePage(page)
    }

    let pageItems = [];
    for (let i = 0; i < numPage; i++) {
        let pageItem = <span className="page-link" value={i + 1} key={i + 1} onClick={handleChangePage}>{i + 1}</span>
        if (page == i + 1)
            pageItems[i] = <li className="page-item active" key={i + 1} >{pageItem}</li>
        else
            pageItems[i] = <li className="page-item" key={i + 1} >{pageItem}</li>
    }

    return (
        <>
            <nav aria-label="Page navigation example" className="nav-pagination">
                <div className="col-lg-12 pag-page-size">
                    Hiển thị <select onChange={(e) => props.onChangeSize(e.target.value)}>
                        {pageSizeOptions}
                    </select> kết quả
            </div>
                <div>
                    <ul className="col-lg-12 pagination justify-content-end">
                        {previousButton}
                        {pageItems}
                        {nextButton}
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Pagination;