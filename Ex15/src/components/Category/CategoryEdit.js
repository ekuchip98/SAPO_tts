import React, { Component } from 'react';
import axios from 'axios';
import { authContext } from '../../utils/AuthContext';
class CategoryEdit extends Component {

    static contextType = authContext;
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            categoryCode: '',
            description: '',
            alert: '',
            dataStatus: 1,
            success: false,
        }
    }

    handleChange = event => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
    }

    getAPICategory = () => {
        var id = this.props.match.params.id;
        if (id !== undefined) {
            axios
                .get("/admin/categories/" + id)
                .then(response => {
                    this.setState({
                        name: response.data.name,
                        categoryCode: response.data.categoryCode,
                        description: response.data.description,
                    });
                })
                .catch(err => console.log(err));
        } else {
            return null;
        }
    }

    componentDidMount() {
        this.getAPICategory();
    }

    handleSubmitUpdate = async event => {
        const data = this.state;
        const id = this.props.match.params.id;
        event.preventDefault();
        await axios
            .put('/admin/categories/' + id, data)
            .then(res => {
                if (res.status === 200) {
                    this.setState({
                        dataStatus: res.status,
                        alert: 'Sửa thành công !',
                    });
                    alert('Sửa thành công !')
                    this.props.history.goBack();
                }
            })
            .catch(error => {
                this.setState({
                    dataStatus: error.response.status,
                    alert: "Sửa thất bại ! " + error.response.statusText + "",
                });
            });
        this.setState({ success: true, });
    }

    handleSubmitCreate = async event => {
        const data = this.state;
        event.preventDefault();
        await axios
            .post('/admin/categories', data)
            .then(res => {
                if (res.status === 201) {
                    this.setState({
                        dataStatus: res.status,
                        alert: 'Thêm thành công !',
                    });
                    alert('Thêm thành công !')
                    this.props.history.goBack();
                }
            })
            .catch(error => {
                this.setState({
                    dataStatus: error.response.status,
                    alert: "Thêm thất bại ! " + error.response.statusText + "",
                });
            });
        this.setState({ success: true, });
    }

    handleBack = () => {
        this.props.history.goBack();
    }

    handleLogout = () => {
        this.context.setAuthData(null, null);
        this.props.history.push('/login');
    }

    render() {
        let alterCo;
        if (this.state.success) {
            alterCo = <div className={this.state.dataStatus === 200 ? "alert alert-success" : "alert alert-danger"} role="alert">
                {this.state.alert}
            </div>
        };
        return (
            <div className="card card-primary" style={{ width: '700px', margin: '20px auto', }}>
                <div className="card-header d-flex justify-content-between">
                    <h3 className="card-title">{this.props.match.params.id !== undefined ? 'Sửa loại danh mục' : 'Thêm loại danh mục'}</h3>
                    <input className="btn btn-danger" type="button" onClick={this.handleLogout} value="Logout" />
                </div>
                <div>{alterCo}</div>
                <form method='post' onSubmit={this.props.match.params.id !== undefined ? this.handleSubmitUpdate : this.handleSubmitCreate}>
                    <div className="card-body">
                        <div className="form-group">
                            <label htmlFor="exampleInputName">Tên danh mục</label>
                            <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.handleChange} id="exampleInputName" placeholder="Tên danh mục" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputCode">Mã danh mục</label>
                            <input type="text" className="form-control" value={this.state.categoryCode} name="categoryCode" onChange={this.handleChange} id="exampleInputCode" placeholder="Mã danh mục" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputDescription">Mô tả</label>
                            <input type="text" className="form-control" value={this.state.description} name="description" onChange={this.handleChange} id="exampleInputDescription" placeholder="Mô tả" />
                        </div>
                    </div>
                    <div className="card-footer">
                        <button type="submit" className="btn btn-primary">{this.props.match.params.id !== undefined ? 'Cập nhật' : 'Thêm mới'}</button>
                        <button type="button" onClick={this.handleBack} className="btn btn-danger ml-2">Quay lại</button>
                    </div>
                </form>
            </div>
        );
    }
}
export default CategoryEdit