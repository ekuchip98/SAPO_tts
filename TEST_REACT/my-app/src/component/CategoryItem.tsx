import React from 'react';
import '../App.css';
function CategoryItem(props: any) {
  return <li onClick={props.onClick} className="list-group-item">{props.name}</li>
}

export default CategoryItem;
