import React, {Component} from 'react';

class Category extends Component{
    render(){
        
        return <table className="mytable">
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
                </tbody>
            </table>
    }
}
export default Category