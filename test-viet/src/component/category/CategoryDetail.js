import React from 'react';
import { Link } from 'react-router-dom';

const CategoryDetail = (props) => {
    let category = props.detail;
    if (category)
        return (
            <div>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <td scope="row" width="150px">ID</td>
                            <td>{category.id}</td>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td scope="row" >Code</td>
                            <td>{category.code}</td>
                        </tr>
                        <tr>
                            <td scope="row" >Name</td>
                            <td>{category.name}</td>
                        </tr>
                        <tr>
                            <td scope="row" >Created Date</td>
                            <td>{category.created_date}</td>
                        </tr>
                        <tr>
                            <td scope="row" width="100px">Description</td>
                            <td>{category.description}</td>
                        </tr>
                        <tr>
                            <td scope="row" width="100px">Modified Date</td>
                            <td>{category.modified_date}</td>
                        </tr>
                    </tbody>
                </table>
                <Link to={{ pathname: "/categories/edit", category: category }} ><button className="btn btn-outline-info float-right" >Edit</button></Link>
            </div>
        );
    else return null;
}

export default CategoryDetail;