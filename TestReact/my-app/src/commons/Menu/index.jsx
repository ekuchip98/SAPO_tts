import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <nav>
            <div className="container">
                <div className="header-nav">
                    <ul className="item_big d-flex justify-content-start">
                        <li className="nav-item active ">
                            <Link to="/" title="Home"> <i className="fa fa-home" />Home</Link>
                        </li>
                        <li className="nav-item menu-product">
                            <a href="a" title="Sản phẩm">Sản phẩm<i className="fa fa-caret-down" /></a>
                        </li>
                        <li className="nav-item ">
                            <a href="a" title="Sản phẩm mới">Sản phẩm mới</a>
                        </li>
                        <li className="nav-item ">
                            <a href="a" title="Sản phẩm bán chạy">Sản phẩm bán chạy</a>
                        </li>
                        <li className="nav-item ">
                            <a href="a" title="Tin tức"> Tin tức</a>
                        </li>
                        <li className="nav-item ">
                            <a href="a" title="Bộ sưu tập">Bộ sưu tập</a>
                        </li>
                        <li className="nav-item ">
                            <a href="a" title="Liên hệ"> Liên hệ</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Menu;