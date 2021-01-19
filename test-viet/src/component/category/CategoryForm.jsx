import { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { confirmInsert, confirmUpdate } from "../message/Message";
import "./css/form.css"
const CategoryForm = (props) => {

    const location = useLocation();
    const { authentication } = useAuth();
    const token = authentication.token;
    const entity = "category";
    const history = useHistory();
    const [form, setForm] = useState(
        location.category ?
            {   
                name: location.category.name,
                code: location.category.code,
                description: location.category.description,
                created_date: location.category.created_date,
                modified_date: location.category.modified_date

            } : {
                name: "",
                code: "",
                description: ""
            }
    );

    const { type } = props;

    function handleChange(e) {
        const { name, value } = e.target;
        setForm(form => ({
            ...form,
            [name]: value
        }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        if (type === "edit")
            await confirmUpdate(token, entity, form, location.category.id)
        else
            await confirmInsert(token, entity, form)
        history.push("/categories")
    }

    const fields = (listFieldNames) => {
        return listFieldNames.map(name => {
            let title, disable = false;
            switch (name) {
                case "code":
                    title = "Mã danh mục"
                    break;
                case "name":
                    title = "Tên danh mục"
                    break;
                case "description":
                    title = "Mô tả"
                    break;
                case "created_date":
                    title = "Ngày tạo"
                    disable = true;
                    break;
                case "modified_date":
                    title = "Ngày cập nhật"
                    disable = true;
                    break;
            }
            return (
                <div className="row">
                    <div className="col-lg-12 ">
                        <fieldset className="form-group">
                            <label>{title} </label>
                            <input type="text" className="form-control form-control-lg" name={name} value={form[name]}
                                id={name} placeholder="" required onChange={handleChange} disabled={disable} />
                        </fieldset>
                    </div>
                </div>
            )
        })
    }


    let titleText, submitText, formFields;
    if (type === "edit") {
        titleText = "Cập nhật danh mục"
        submitText = "Cập nhật"
        formFields = fields(["code","name","description","created_date","modified_date"])
    }
    else {
        titleText = "Tạo mới danh mục"
        submitText = "Tạo"
        formFields = fields(["code","name","description"])
    }

    return (
        <div className="container">
            <div className="col-lg-6 offset-lg-3">
                <form acceptCharset="utf-8" action="" id="customer_register" onSubmit={handleSubmit}>
                    <h1 className="title-head text-center">{titleText}</h1>
                    <div className="page-login">
                        <div id="login">
                            <div className="form-signup clearfix">
                                {formFields}                           
                            </div>
                        </div>
                    </div>
                    <div style={{ marginTop: 15, padding: 0 }}>
                        <Link to="/categories"><button id="back" value="Quay lại" className="btn btn-primary bt1" style={{ marginRight: 10 }}>Quay
                            lại</button></Link>

                        <button type="summit" value="Tạo" className="btn btn-primary bt2">{submitText}</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CategoryForm;