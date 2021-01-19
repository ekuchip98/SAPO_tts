import React, { useEffect, useState } from 'react';
import CategoryDetail from './CategoryDetail';
import CategoryList from './ListCategories';
import { getCategoryById } from '../../endpoint/Category';
import "./css/index.css"

const Categories = () => {

    const [cateDetailId, setCateDetailId] = useState();
    const [cateDetail, setCateDetail] = useState();
    
    function showCategoryDetail(id) {
        setCateDetailId(id)
    }

    useEffect(() => {
        const fetchCategory = async() => {
            let category = await getCategoryById(cateDetailId)
            setCateDetail(category)
        }
        fetchCategory()
    },[cateDetailId]);

    return (
        <div className = "pg-cate">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 ">
                        <div className="row">                           
                            <div className="col-lg-12">
                                <CategoryList showCategoryDetail={showCategoryDetail} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <CategoryDetail detail={cateDetail}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Categories;