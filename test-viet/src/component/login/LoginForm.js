import { useState } from "react";

const LoginForm = (props) => {
    const [name, setName] = useState("");
    const [pass, setPass] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        props.onSubmit(name, pass);
    }
    return (
        <>
            <form acceptCharset="utf-8" action="" id="customer_register" onSubmit={handleSubmit}>
                <h1 className="title-head">Thông tin đăng nhập</h1>
                <div className="page-login">
                    <div id="login">
                        <div className="form-signup clearfix">
                            <div className="row">
                                <div className="col-lg-6">
                                    <fieldset className="form-group">
                                        <label>Tên đăng nhập </label>
                                        <input type="text" className="form-control form-control-lg" name="name" value={name}
                                            id="name" placeholder="" required onChange={(e) => setName(e.target.value)} />
                                    </fieldset>
                                </div>
                                <div className="col-lg-6">
                                    <fieldset className="form-group">
                                        <label>Mật khẩu</label>
                                        <input type="password" placeholder="" name="pass" id="pass" required value={pass}
                                            className="form-control form-control-lg" onChange={(e) => setPass(e.target.value)} />
                                    </fieldset>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div style={{ marginTop: 15, padding: 0 }}>
                    <button value="Đăng nhập" className="btn btn-primary bt1" type="submit">Đăng nhập</button>
                </div>
            </form>
        </>
    );
}

export default LoginForm;