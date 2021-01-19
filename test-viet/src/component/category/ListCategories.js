import React, { useEffect, useState } from 'react';
import CategoryItem from './CategoryItem';
import { getListCategories } from '../../endpoint/Category';
import Pagination from '../Pagination';
import './css/category-list.css'
import './css/pagination.css'
import { confirmDelete } from '../message/Message';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/auth';

const CategoryList = (props) => {

    const [listCategories, setListCategories] = useState([]);
    const [pagination, setPagination] = useState({ page: 1, sizePage: 3, total: 0 })
    const [update, setUpdate] = useState(false)
    const { authentication } = useAuth();
    const token = authentication.token;

    const fetchCategories = async (pagination) => {
        let result = await getListCategories(pagination.page, pagination.sizePage);
        setListCategories(result.categories)
        setPagination({ ...pagination, total: result.total });
    }

    useEffect(() => {
        fetchCategories(pagination);
    }, [pagination.sizePage, pagination.page, update]);

    const handleDelete = async (id) => {
        let success = await confirmDelete(token, "category", id);
        if (success) {
            if (listCategories.length === 1)
                setPagination({ ...pagination, page: pagination.page - 1 })
            else
                setUpdate(!update)
        }

    }

    const handleChangePage = (page) => {
        setPagination(pagination => ({
            ...pagination,
            page: page
        }));
    }

    const handleChangeSize = (size) => {
        setPagination(pagination => ({
            ...pagination,
            sizePage: size,
            page: 1
        }));
    }


    return (
        <aside className="sidebar-cate">
            <div className="aside-article">
                <h2 className="h2">
                    <a href="">Danh mục</a>
                    <Link to="/categories/create" className="btn btn-outline-primary btn-sm float-right" ><i class="fas fa-plus"></i></Link>
                </h2>
            </div>
            <div className="aside-content">
                <table class="table">
                    <tbody>
                        {listCategories.map(x => <CategoryItem data={x} key={x.id} clickItem={() => props.showCategoryDetail(x.id)} onDelete={() => handleDelete(x.id)} />)}
                    </tbody>
                </table>
            </div>
            <Pagination total={pagination.total} page={pagination.page} size={pagination.sizePage} listOptions={[3, 5, 10, 15]}
                onChangePage={handleChangePage} onChangeSize={handleChangeSize} />
        </aside>
    );
}

export default CategoryList;