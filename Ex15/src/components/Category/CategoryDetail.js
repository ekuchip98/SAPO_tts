import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CategoryDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataStatus: 1,
            alert: false,
        }
    }

    handleDelete = async () => {
        console.log(this.props.id)
        await axios
            .delete('/admin/categories/' + this.props.id)
            .then(res => {
                if (res.status === 204) {
                    this.setState({ alert: true });
                    alert('Xóa thành công !');
                    window.location.reload();
                }
            })
            .catch(error => {
                this.setState({ alert: true });
                console.log(error);
            });
    }

    render() {

        let showDetail;
        if (this.props.id !== undefined) {
            showDetail = <tr style={{ lineHeight: '40px' }}>
                <td style={{ border: 'none', width: '50px' }}>
                    <Link to={'/category-list/edit/' + this.props.id} className="btn btn-warning">Xem chi tiết danh mục</Link>
                </td>
                <td style={{ border: 'none' }}>
                    <button onClick={this.handleDelete} className="btn btn-danger">Xóa danh mục</button>
                </td>
            </tr>
        }
        return <table className="mytable" id="show-detail">
            <tbody>
                <tr>
                    <th>ID:</th>
                    <td className="text-center">{this.props.id}</td>
                </tr>
                <tr>
                    <th>Mã danh mục:</th>
                    <td className="text-center">{this.props.categoryCode}</td>
                </tr>
                <tr>
                    <th>Tên danh mục:</th>
                    <td className="text-center">{this.props.name}</td>
                </tr>
                <tr>
                    <th>Mô tả:</th>
                    <td className="text-center">{this.props.description}</td>
                </tr>
                <tr>
                    <th>Ngày tạo:</th>
                    <td className="text-center">{this.props.createdDate}</td>
                </tr>
                <tr>
                    <th>Ngày sửa:</th>
                    <td className="text-center">{this.props.modifiedDate}</td>
                </tr>
                {showDetail}
            </tbody>
        </table>
    }
}
export default CategoryDetail