import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ICategory } from '../../../utils/Type';

CategoryDetail.propTypes = {
    categoryDetail: PropTypes.object.isRequired,
    onClickDelete: PropTypes.func,
};

CategoryDetail.defaultProps = {
    onClickDelete: null,
}
interface Props {
    onClickDelete: any,
    categoryDetail: ICategory,
}
function CategoryDetail(props: Props) {

    const { onClickDelete, categoryDetail } = props;
    function handleDelete() {
        if (onClickDelete) {
            onClickDelete();
        }
    }

    let showDetail;
    if (categoryDetail.id !== undefined) {
        showDetail = <tr style={{ lineHeight: '40px' }}>
            <td style={{ border: 'none', width: '50px' }}>
                <Link to={'/category-list/edit/' + categoryDetail.id} className="btn btn-warning">Xem chi tiết danh mục</Link>
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
                    <td className="text-center">{categoryDetail.id}</td>
                </tr>
                <tr>
                    <th>Mã danh mục:</th>
                    <td className="text-center">{categoryDetail.categoryCode}</td>
                </tr>
                <tr>
                    <th>Tên danh mục:</th>
                    <td className="text-center">{categoryDetail.name}</td>
                </tr>
                <tr>
                    <th>Mô tả:</th>
                    <td className="text-center">{categoryDetail.description}</td>
                </tr>
                <tr>
                    <th>Ngày tạo:</th>
                    <td className="text-center">{categoryDetail.createdDate}</td>
                </tr>
                <tr>
                    <th>Ngày sửa:</th>
                    <td className="text-center">{categoryDetail.modifiedDate}</td>
                </tr>
                {showDetail}
            </tbody>
        </table>
    );
}

export default CategoryDetail;