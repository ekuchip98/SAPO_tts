import React, {Component} from 'react';
class CategoryData extends Component{
 
    render(){
        
        return <li className="item-li" onClick={this.props.onClickShow}>{this.props.name}</li>
    }
}
export default CategoryData