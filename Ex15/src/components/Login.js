import React, { Component } from 'react';
import { authContext } from '../utils/AuthContext';
class Login extends Component {

    static contextType = authContext;
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: '',
            status: 1
        };
        this.handleLogin = this.handleLogin.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
    }

    handleLogin(event) {
        if (this.state.email === 'admin') {
            if (this.state.password === '123') {
                this.context.setAuthData(this.state.email, "OK");
                this.props.history.replace('/category-list');
            } else {
                alert('Sai Password !');
            }
        } else {
            alert("Sai email or password !");
        }
        event.preventDefault();
    }

    render() {
        return (
            <section className="section-login">
                <div className="container">
                    <div className="section-link">
                        <span className="home"><a href="/">Trang chủ</a></span>
                        <span className="login"><a href="/login">Đăng nhập</a></span>
                    </div>
                    <div className="login-form">
                        <h3>Đăng nhập</h3>
                        <form action="" method='post'>
                            <div className="form-group">
                                <label >Địa chỉ email <span>*</span></label>
                                <input type="text" className="form-control" required name="email" onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label >Password <span>*</span></label>
                                <input type="password" name="password" required onChange={this.handleChange} className="form-control" />
                            </div>
                            <div className="btn-ok">
                                <button type="submit" onClick={this.handleLogin} className="login">Đăng nhập</button>
                                <button type="button" className="ql">Quay lại</button>
                            </div>
                            {/* <span id="error" style={{ color: 'red' }}>{this.state.error}</span> */}
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}
Login.contextType = authContext;
export default Login;