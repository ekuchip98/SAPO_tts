import React ,{Component} from 'react';
import '../App.css';
class CategoryItem extends Component{

  render() {
      return <li onClick={this.props.onClick} className="list-group-item">{this.props.name}</li>
  }
}

export default CategoryItem;
