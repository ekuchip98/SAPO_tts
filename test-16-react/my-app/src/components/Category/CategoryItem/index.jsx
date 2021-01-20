import React from 'react';

function CategoryItem(props) {
    return <li className="item-li" onClick={this.props.onClickShow}>{this.props.name}</li>
}

export default CategoryItem;