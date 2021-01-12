import React, { Component } from 'react';

class Header extends Component{

    render(){   
        return(
            <header>
            <div className="top-header">
            <div className="container">
                <div className="row">
                <div className="col-lg-6">
                    <div className="contact d-flex justify-content-start">
                    <div className="contact-text">
                        <p>Chào mừng bạn đến với <a href="a">Citybike</a></p>
                    </div>
                    <div className="contact-phone">
                        <p>Hottline <a href="a">:0934 55 88 90</a></p>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="account d-flex justify-content-end">
                    <div className="account-register">
                        <a href="a">Đăng ký</a>
                    </div>
                    <div className="account-login">
                        <a href="a">Đăng nhập</a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="content-header">
            <div className="container">
                <div className="row">
                <div className="col-lg-3">
                    <div className="logo">
                        <img src="./images/logo/logo1.png" alt="logo" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="search d-flex flex-row">
                    <div className="search-cate ">
                        <select>
                            <option value="">Danh mục </option>
                        </select>
                    </div>
                    <div className="search-text d-flex flex-row">
                        <input type="text" placeholder="Nhập thông tin tìm kiếm" />
                        <div className="search-buttom">
                        <button type="submit" className="icon-fallback-text">
                            <span className="fa fa-search" />      
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 cols-cart">
                    <div className="cart d-flex justify-content-end">
                    <div className="logo-cart">
                        <div className="cart-img">
                        <img src="./images/logo/bag.png" alt="cart" />
                        <div className="number-cart">
                            <span>0</span>
                        </div>
                        </div>
                    </div>
                    <div className="name-cart">
                        <p>giỏ hàng</p>
                        <span>(0) sản phẩm</span>
                    </div>
                    <div className="hover-cart">
                        <div className="list-item cus-scroll">
                        <div className="item-cart d-flex flex-row">
                            <div className="icon-exit">
                            <a href="a"><i className="fas fa-times-circle" /></a>
                            </div>
                            <div className="item-image">
                            <img src="./images/product/product1.jpg" alt="" />
                            </div>
                            <div className="item-info">
                            <div className="product-name">
                                <h3><a href="a">Cannon ESO  60D</a></h3>
                            </div>
                            <div className="product-price">
                                <p className="price">4.099.000 <span>đ</span></p>
                                <p className="old-price">5.099.000 <span>đ</span></p>
                            </div>
                            <div className="quantity">
                                <input className="form-control" min={1} type="number" defaultValue={1} />
                            </div>
                            </div>
                        </div>
                        <div className="item-cart d-flex flex-row">
                            <div className="icon-exit">
                            <a href="a"><i className="fas fa-times-circle" /></a>
                            </div>
                            <div className="item-image">
                            <img src="./images/product/product1.jpg" alt="" />
                            </div>
                            <div className="item-info">
                            <div className="product-name">
                                <h3><a href="a">Cannon ESO  60D</a></h3>
                            </div>
                            <div className="product-price">
                                <p className="price">4.099.000 <span>đ</span></p>
                                <p className="old-price">5.099.000 <span>đ</span></p>
                            </div>
                            <div className="quantity">
                                <input className="form-control" min={1} type="number" defaultValue={1} />
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="total-price d-flex justify-content-between">
                        <div className="thanh-tien">
                            <h4>Thành tiền: </h4>
                        </div>
                        <div className="total-price-1">
                            <p>4.099.000 <span>đ</span></p>
                        </div>
                        </div>
                        <div className="btn-cart d-flex justify-content-between">
                        <button className="btn-cart" type="submit">Giỏ hàng</button>
                        <button className="btn-checkout" type="submit">Thanh toán</button>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </header>
        );
    }
}
export default Header;
