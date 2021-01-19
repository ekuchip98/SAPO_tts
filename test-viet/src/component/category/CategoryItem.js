import React from 'react';

const CategoryItem = (props) => {

    
    let buttonDel = <button onClick={props.onDelete} className="btn btn-outline-danger float-right btn-sm"><i className="far fa-trash-alt"></i></button>

    return (
        <tr className="nav-item-1" onClick={props.clickItem}>
            <td className="align-middle " >{props.data.name}{buttonDel}</td>
        </tr>
    );
}

export default CategoryItem;