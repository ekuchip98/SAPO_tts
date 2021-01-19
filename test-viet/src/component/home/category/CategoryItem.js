import React from 'react';

const CategoryItem = (props) => {
    return (
        <li className="nav-item-1">
            <a className="nav-link" href="">{props.data.name}</a>
        </li>
    );
}

export default CategoryItem;