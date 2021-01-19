import React, { useEffect, useState } from 'react';
import CategoryItem from './CategoryItem';
import { getListCategories } from '../../../endpoint/Category';

const CategoryList = () => {

    const [listCategories,setListCategories] = useState({categories:[]});

    useEffect(() => {
        const fetchCategories = async() => {
            let categories = await getListCategories();
            setListCategories(categories)
        }
        fetchCategories();
    },[]);

    let renderList = listCategories.categories.map(x => <CategoryItem data={x} key={x.id} />)
    return (
        <aside className="side-bar-category">
            <div className="aside-article">
                <h2 className="h2">
                    <a href="">Danh mục sản phẩm</a>
                </h2>
            </div>
            <div className="aside-content">
                <nav className="nav-category">
                    <ul className="navbar-pills">
                        {renderList}
                    </ul>
                </nav>
            </div>
        </aside>
    );
}

export default CategoryList;