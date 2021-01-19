import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth";
import { delete_cookie } from "../context/cookie";

const TopHeader = () => {
    const { authentication, setAuthentication } = useAuth();
    const [listAccountMenu, setListAccountMenu] = useState([])

    const handleLogout = () => {
        localStorage.clear()
        delete_cookie("token")
        setAuthentication("")
    }


    const setListMenu = () => {
        if (authentication.token) {
            return (
                <>
                    <li className="dropdown-item"><a href="#">Giỏ hàng của tôi</a></li>
                    <li className="dropdown-divider"></li>
                    <li className="dropdown-item"><a href="#">Tài khoản của tôi</a></li>
                    <li className="dropdown-divider"></li>
                    <li className="dropdown-item" onClick={handleLogout}>Đăng xuất</li>
                </>
            )
        } else return (
            <>
                <li className="dropdown-item"><Link to="/register">Đăng kí</Link></li>
                <li className="dropdown-divider"></li>
                <li className="dropdown-item"><Link to="/login">Đăng nhập</Link></li>

            </>
        )
    }

    useEffect(() => {
        setListAccountMenu(setListMenu)
    }, [authentication])

    return (
        <div className="section-top">
            <div className="top-bar">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-6  d-none d-lg-block ">
                            <span>
                                Chào mừng {authentication ? authentication.name : "bạn"} đến với BigFood!
                                </span>
                        </div>
                        <div className="col-lg-9 col-md-9 col-sm-12 col-12  d-flex flex-row-reverse">
                            <div className="dropdown">
                                <div className="menu-item dropdown-toggle " data-toggle="dropdown"><span>Tài khoản</span></div>
                                <ul className="dropdown-menu dropdown-menu-right">
                                    {listAccountMenu}
                                </ul>
                            </div>
                            <div className="menu-item d-none d-sm-block"><a href="#"><span>Đơn hàng</span></a></div>
                            <div className="menu-item d-none d-sm-block"><a href="#"><span>Khuyến mãi</span></a></div>
                            <div className="menu-item d-none d-sm-block"><a href="#"><span>Hướng dẫn</span></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopHeader;