import Footer from "../Footer";
import Header from "../Header";
import '../../css/register.css'
import React, { useState } from "react";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
import { Link } from "react-router-dom";
import { login, signup } from "../../endpoint/User";
import { useAuth } from "../../context/auth";
import { getCookie, setCookie } from "../../context/cookie";


const SignIn = (props) => {
    const [isLogin, setIsLogin] = useState(props.isLogin)
    const { setAuthentication } = useAuth();

    const handleLogin = async (name, pass) => {
        let res = await login(name, pass);
        if (res != null && res.status === 200) {
            setAuthentication({
                token: getCookie("token"),
                name: getCookie("name")
            })
            // setCookie("token", res.data.token, 7)
            // setCookie("name", res.data.name, 7)
        }
        else alert("Đăng nhập thất bại!")
    }

    const handleSignUp = async (form) => {
        let res = await signup(form);
        if (res != null && res.status === 200) {
            alert("Đăng ký thành công !")
        }
        else alert("Đăng ký thất bại")
    }



    let titlePage, form, loginTab, singupTab;
    if (isLogin) {
        titlePage = "Đăng nhập"
        form = <LoginForm onSubmit={handleLogin} />
        singupTab = (
            <li >
                <span className="mr_lr">&nbsp;<i className="fa">/</i>&nbsp;</span>
                <Link onClick={() => setIsLogin(false)} to="/register"><strong><span>Đăng ký</span></strong></Link>
            </li>
        )
        loginTab = (
            <li><span>Đăng nhập</span></li>
        )
    } else {
        titlePage = "Đăng kí tài khoản"
        form = <SignUpForm onSubmit={handleSignUp} />
        loginTab = (
            <li className="Đăng nhập">
                <Link onClick={() => setIsLogin(true)} to="/login"><strong><span>Đăng nhập</span></strong></Link>
                <span className="mr_lr">&nbsp;<i className="fa">/</i>&nbsp;</span>
            </li>
        )
        singupTab = (
            <li><span>Đăng ký</span></li>
        )
    }
    return (
        <>
            <Header />
            <div className="breadcrumb_background">
                <div className="title_full">
                    <div className="container a-center">
                        <span className="title_page">{titlePage}</span>
                    </div>
                </div>
            </div>
            <section className="bread-crumb">
                <span className="crumb-border"></span>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="breadcrumb">
                                {loginTab}
                                {singupTab}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container">
                <div className="wrap_background ">
                    {form}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default SignIn;