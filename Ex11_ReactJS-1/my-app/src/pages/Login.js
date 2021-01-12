import React, {Component} from 'react';

class Login extends Component{

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            status: 1
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name] : value
        });
    }

    handleSubmit(event){
        if(this.state.email === 'admin'){
            if(this.state.password === 'admin'){
                console.log('OK');
                this.setState({status: 0});
                console.log(this.state.status);
            }else{
                alert('Sai Password !');
                this.setState({status: 1});
                console.log(this.state.status);
            }
        }else{
            alert("Sai email or password !");
            this.setState({status: 1});
            console.log(this.state.status);
        }
        event.preventDefault();
    }

    render(){
        if(this.state.status === 1){
            return(
                <section className="section-login">
                    <div className="container">
                    <div className="section-link">
                        <span className="home"><a href="a">Trang chủ</a></span>
                        <span className="login"><a href="a">Đăng nhập</a></span>
                    </div>
                    <div className="login-form">
                        <h3>Đăng nhập</h3>
                        <form action="" onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label >Địa chỉ email <span>*</span></label>
                                <input type="text" className="form-control" name = "email" onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label >Password <span>*</span></label>
                                <input type="password" name="password" onChange={this.handleChange} className="form-control"/>
                            </div>
                            <div className="btn-ok">
                                <button type="submit" className="login">Đăng nhập</button>
                                <button type="button" className="ql">Quay lại</button>
                            </div>
                        </form>
                    </div>
                    </div>
                </section>
            );
        }else{
            return(
                <div className="dashboard">
                    <h1>Xin chào {this.state.email}</h1>
                </div>
            );
        }
        
    }
}
export default Login;