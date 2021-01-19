import { useEffect, useState } from "react";

const SignUpForm = (props) => {

    const [form,setForm] = useState({
        name: "", 
        email:"",
        phone:"",
        website:"",
        pass:"",
        confirmPass:""
    });

    useEffect(() => {
        const passwordMessage = 'Mật khẩu cần ít nhất 6 kí tự bao gồm chữ cái viết hoa, viết thường và số ';
        const phoneMessage = 'Số điện thoại không hợp lệ';
        document.getElementById('pass').oninvalid = (e) =>  e.target.setCustomValidity(passwordMessage);
        document.getElementById('phone').oninvalid = (e) =>  e.target.setCustomValidity(phoneMessage);
    }, [])

    function handleChange(e) {
        const { name, value } = e.target;
        setForm(form => ({
            ...form,
            [name]: value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (form.confirmPass === form.pass)
            props.onSubmit(form)
        else 
            alert("Mật khẩu không khớp !")
    }
  
    return (
        <>
         <form acceptCharset="utf-8" action="" id="customer_register" onSubmit={handleSubmit}>
            <h1 className="title-head">Thông tin cá nhân</h1>
            <div className="page-login">
                <div id="login">
                    <div className="form-signup clearfix">
                        <div className="row">
                            <div className="col-lg-6">
                                <fieldset className="form-group">
                                    <label>Họ và tên: <span className="required">* </span></label>
                                    <input type="text" className="form-control form-control-lg" name="name" value={form.name}
                                        id="name" placeholder="" required onChange={handleChange} />
                                </fieldset>
                            </div>
                            <div className="col-lg-6">
                                <fieldset className="form-group">
                                    <label>Email: <span className="required">*</span></label>
                                    <input type="email" pattern="^[A-Za-z0-9_.]{4,32}@([a-zA-Z0-9]{2,12})(.[a-zA-Z]{2,12})+$"
                                        title = "Email không hợp lệ"
                                        className="form-control form-control-lg" value={form.email} name="email" id="email"
                                        placeholder="" required onChange={handleChange}/>
                                </fieldset>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <fieldset className="form-group">
                                    <label>Phone: <span className="required">*</span></label>
                                    <input type="text" className="form-control form-control-lg" name="phone"
                                        pattern="((09|03|07|08|05)+([0-9]{8})\b)"
                                        id="phone" placeholder="" required value={form.phone}
                                        onChange={handleChange} />
                                </fieldset>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                <fieldset className="form-group">
                                    <label>Website</label>
                                    <input type="text" placeholder="" name="website" id="website"
                                        className="form-control form-control-lg" value={form.website}
                                        onChange={handleChange} />
                                </fieldset>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="email-checkbox">
                <div className="row">
                    <div className="col-12">
                        <input type="checkbox" id="email-contact" name="email-contact" />
                        <label for="email-contact"> Đăng kí nhận tin tức qua email</label><br />
                    </div>
                </div>
            </div>
            <h1 className="title-head">Thông tin đăng nhập</h1>
            <div className="page-login">
                <div id="login">
                    <div className="form-signup clearfix">
                        <div className="row">

                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                <fieldset className="form-group">
                                    <label>Mật khẩu <span className="required">*</span></label>
                                    <input type="password" placeholder="" name="pass" id="pass"
                                        pattern = "^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{6,}$"
                                        className="form-control form-control-lg" value={form.pass}
                                        onChange={handleChange}/>
                                </fieldset>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                <fieldset className="form-group">
                                    <label>Nhập lại mật khẩu <span className="required">*</span></label>
                                    <input type="password" placeholder="" name="confirmPass" id="confirm-pass"
                                        className="form-control form-control-lg" required  value={form.confirmPass}
                                        onChange={handleChange}/>
                                </fieldset>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div style={{ marginTop: 15, padding: 0 }}>
                <button value="Quay lại" className="btn btn-primary bt1" style={{ marginRight: 10 }}><a href="/">Quay
                            lại</a></button>
                <button type="summit" value="Đăng ký" className="btn btn-primary bt2">Đăng ký</button>
            </div>
            </form>
        </>
    );
}

export default SignUpForm;