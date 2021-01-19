import { Link } from 'react-router-dom';
import '../css/style.css'
import logo from '../images/logo.jpg'
import TopHeader from './TopHeader';
const Header = () => {
    
    return (
        <>
            <TopHeader/>

            <header className="header">
                <div className="mid_header">
                    <div className="container">
                        <div className="row">

                            <div className="col-xl-3 col-lg-3 col-md-12">
                                <div className="logo">
                                    <img src={logo} alt="logo" />
                                </div>
                            </div>
                            <div className="col-lg-9 col-md-9 d-none d-sm-none d-md-none d-lg-block d-lg-flex flex-row-reverse">
                                <div className="static">
                                    <div className="static-icon ">
                                        <i className="fa fa-clock" aria-hidden="true"></i>
                                    </div>
                                    <div className="static-content">
                                        <span className="static-title">
                                            Open
                                </span>
                                        <span className="static-info">
                                            8:00 AM - 10:00 AM
                                </span>
                                    </div>
                                </div>
                                <div className="static d-flex">
                                    <div className="static-icon">
                                        <i className="fa fa-envelope" aria-hidden="true"></i>
                                    </div>
                                    <div className="static-content">
                                        <span className="static-title">
                                            Email
                                </span>
                                        <span className="static-info">
                                            support@bizweb.vn
                                </span>
                                    </div>
                                </div>
                                <div className="static d-flex">
                                    <div className="static-icon">
                                        <i className="fa fa-phone" aria-hidden="true"></i>
                                    </div>
                                    <div className="static-content">
                                        <span className="static-title">
                                            Hotline
                                </span>
                                        <span className="static-info">
                                            (04)95009600
                                </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="header-menu">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-10 col-lg-10 col-md-10 d-none d-sm-none d-md-none d-lg-block ">
                            <ul className="item-big ">
                                <li className="nav-item active ">
                                    <a href="/" title="Trang chủ">Trang chủ</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/" title="Trang chủ">Giới thiệu</a>
                                </li>
                                <li className="nav-item">
                                    <div className="dropdown">
                                        <div className="dropdown-toggle " data-toggle="dropdown"><a>Sản phẩm</a></div>
                                        <ul className="dropdown-menu">
                                            <li className="dropdown-item" href="#">Sản phẩm mới</li>
                                            <li className="dropdown-divider"></li>
                                            <li className="dropdown-item" href="#">Sản phẩm khuyến mãi</li>
                                            <li className="dropdown-divider"></li>
                                            <li className="dropdown-item" href="#">Sản phẩm nổi bật</li>
                                            <li className="dropdown-divider"></li>
                                            <li className="dropdown-item" href="#">Pizza</li>
                                            <li className="dropdown-divider"></li>
                                            <li className="dropdown-item" href="#">Bánh ngọt</li>
                                            <li className="dropdown-divider"></li>
                                            <li className="dropdown-item" href="#">Bánh kem</li>
                                            <li className="dropdown-divider"></li>
                                            <li className="dropdown-item" href="#">Đồ ăn nhẹ</li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a href="/" title="Trang chủ">Khuyến mãi</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/" title="Trang chủ">Tin tức</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/" title="Trang chủ">Liên hệ</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-12">
                            <div className="header-right d-flex flex-row-reverse">
                                <div className="top-cart">
                                    <i className="fa fa-shopping-basket"></i>
                                    <span className="count-item">0</span>
                                </div>
                                <div className="search-box">
                                    <i className="fa fa-search"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;