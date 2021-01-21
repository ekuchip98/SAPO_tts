import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CategoryItem from '../CategoryItem';
import CategoryDetail from '../CategoryDetail';
import Pagination from '../Pagination';
import Selection from '../Selection';

function CategoryList() {

    const [categories, setCategories] = useState([]);
    const [categoryDetail, setCategoryDetail] = useState({});
    const [detailStatus, setDetailStatus] = useState(false);

    const [pagination, setPagination] = useState({
        page: 1,
        limit: 3,
        totalPage: 0,
    });

    const [success, setSuccess] = useState(false);

    function handleShowCate(category) {
        setCategoryDetail(category);
        setDetailStatus(true);
    }

    function handlePage(e) {
        setPagination({
            ...pagination,
            page: Number(e.target.innerHTML),
        })
    }

    function handleSelect() {
        var select = document.getElementById('sl-limit');
        var e = select.value;
        setPagination({
            ...pagination,
            limit: Number(e),
            page: 1,
        });
    }

    function handlePrevious() {
        if (pagination.page >= 1) {
            setPagination({
                ...pagination,
                page: pagination.page - 1
            })
        }
    }

    function handleNext() {
        if (pagination.page < pagination.totalPage) {
            setPagination({
                ...pagination,
                page: pagination.page + 1
            })
        }
    }


    const getAPICategory = async () => {
        await axios
            .get("/admin/categories?page=" + pagination.page + "&limit=" + pagination.limit + "")
            .then(response => {
                setCategories(response.data.listResult);
                setPagination({
                    ...pagination,
                    totalPage: response.data.totalPage,
                });
            })
            .catch(err => console.log(err));
    }

    async function handleDelete(id) {
        await axios
            .delete('/admin/categories/' + id)
            .then(res => {
                if (res.status === 204) {
                    alert('Xóa thành công !');
                    setSuccess(true);
                    setDetailStatus(false);
                }
            })
            .catch(error => {
                alert('Xóa thất bại !');
            });
    }

    useEffect(() => {
        getAPICategory();
    }, []);

    useEffect(() => {
        getAPICategory();
    }, [pagination.page, pagination.limit, success]);

    let categoryItem = categories.map((category) => {
        return <CategoryItem
            key={category.id}
            name={category.name}
            onClickShow={() => handleShowCate(category)}
        />
    });

    let boxDetail;
    if (detailStatus) {
        var detail = categoryDetail;
        boxDetail = (<CategoryDetail
            key={detail.id}
            id={detail.id}
            categoryCode={detail.categoryCode}
            name={detail.name}
            description={detail.description}
            createdDate={detail.createdDate}
            modifiedDate={detail.modifiedDate}
            onClickDelete={() => handleDelete(detail.id)}
        />);
    } else {
        boxDetail = <div></div>
    }

    return (
        <div>
            <div className="hello mt-4">
                <div className="add-cate" style={{ textAlign: 'center' }}>
                    <Link to='/category-list/edit' className="btn btn-primary">Thêm mới</Link>
                </div>
            </div>
            <div className="mycontent">
                <div className="list-cate">
                    <Selection
                        onChangeSelect={handleSelect}
                    />
                    <div className="item-cate">
                        <ul className="item-ul">
                            {categoryItem}
                        </ul>
                    </div>
                    <Pagination
                        pagination={pagination}
                        onClickPage={handlePage}
                        onClickPrevious={handlePrevious}
                        onClickNext={handleNext}
                    />
                </div>
                {boxDetail}
            </div>
        </div>
    );
}

export default CategoryList;