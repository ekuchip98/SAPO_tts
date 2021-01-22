import React, { useState, useContext } from 'react';
import { authContext } from '../utils/AuthContext';
import axios from 'axios';
import { Link } from 'react-router-dom';

interface Props {
    history: any
}

function Login(props: Props) {
    const [account, setAccount] = useState({
        username: '',
        password: '',
    });


    const { setAuthData }: any = useContext(authContext);

    function handleChange(event: any) {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        setAccount({
            ...account,
            [name]: value,
        });
    }

    async function callApiLogin() {
        const data = account;
        await axios
            .post('/api/login', data)
            .then(res => {
                setAuthData(data.username, res.data.accessToken);
                if (res.status === 200) {
                    props.history.push('/category-list');
                }
            })
            .catch(err => {
                alert("Đăng nhập thất bại ! " + err.response.statusText);
            });
    }

    function handleLogin(event: any) {
        callApiLogin();
        event.preventDefault();
    }
    return (
        <section className="section-login">
            <div className="container">
                <div className="section-link">
                    <span className="home"><Link to="/">Trang chủ</Link></span>
                    <span className="login"><Link to="/login">Đăng nhập</Link></span>
                </div>
                <div className="login-form">
                    <h3>Đăng nhập</h3>
                    <form action="" method='post'>
                        <div className="form-group">
                            <label >Tài khoản <span>*</span></label>
                            <input type="text" className="form-control" required name="username" onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label >Mật khẩu <span>*</span></label>
                            <input type="password" name="password" required onChange={handleChange} className="form-control" />
                        </div>
                        <div className="btn-ok">
                            <button type="button" onClick={handleLogin} className="login">Đăng nhập</button>
                            <button type="button" className="ql"><Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Quay lại</Link></button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Login;