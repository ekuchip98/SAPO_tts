
import React ,{Component} from 'react';

class CategoryDetail extends Component{
  render() {
    
      return<tr>
                <td>{this.props.id}</td> 
                <td>{this.props.code}</td>
                <td>{this.props.name}</td>
                <td>{this.props.description}</td>
                <td>{this.props.status}</td>
            </tr>
  }
}

export default CategoryDetail;
