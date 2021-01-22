import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

CategoryDetail.propTypes = {
    onClickDelete: PropTypes.func,
};

CategoryDetail.defaultProps = {
    onClickDelete: null,
}
function CategoryDetail(props) {

    const { onClickDelete } = props;
    function handleDelete() {
        if (onClickDelete) {
            onClickDelete();
        }
    }

    let showDetail;
    if (props.id !== undefined) {
        showDetail = <tr style={{ lineHeight: '40px' }}>
            <td style={{ border: 'none', width: '50px' }}>
                <Link to={'/category-list/edit/' + props.id} className="btn btn-warning">Xem chi tiết danh mục</Link>
            </td>
            <td style={{ border: 'none' }}>
                <button onClick={handleDelete} className="btn btn-danger">Xóa danh mục</button>
            </td>
        </tr>
    }

    return (
        <table className="mytable" id="show-detail">
            <tbody>
                <tr>
                    <th>ID:</th>
                    <td className="text-center">{props.id}</td>
                </tr>
                <tr>
                    <th>Mã danh mục:</th>
                    <td className="text-center">{props.categoryCode}</td>
                </tr>
                <tr>
                    <th>Tên danh mục:</th>
                    <td className="text-center">{props.name}</td>
                </tr>
                <tr>
                    <th>Mô tả:</th>
                    <td className="text-center">{props.description}</td>
                </tr>
                <tr>
                    <th>Ngày tạo:</th>
                    <td className="text-center">{props.createdDate}</td>
                </tr>
                <tr>
                    <th>Ngày sửa:</th>
                    <td className="text-center">{props.modifiedDate}</td>
                </tr>
                {showDetail}
            </tbody>
        </table>
    );
}

export default CategoryDetail;