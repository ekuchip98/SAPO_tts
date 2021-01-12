import React ,{Component} from 'react';
import CategoryDetail from './CategoryDetail';
import CategoryItem from './CategoryItem';
class CategoryList extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      categories: [
        {
          id: 1,
          code: "dien-thoai",
          name: "Điện thoại",
          description: "123",
          status: 1
        },
        {
          id: 2,
          code: "may-tinh",
          name: "Máy tính",
          description: "1235",
          status: 1
        },
        {
          id: 3,
          code: "o-to",
          name: "Ô tô",
          description: "123",
          status: 1
        },
        {
          id: 4,
          code: "xe-may",
          name: "Xe máy",
          description: "123",
          status: 1
        }
      ],
      categoryDetail: '',
    };
  };

  onClickShowDetail = (category)=>{
    return () =>{
      document.getElementById('show').setAttribute('style','display:block');
      this.setState({categoryDetail : category});
    }
  }
  render() {
    let categoryItem = this.state.categories.map((category)=>{
      return <CategoryItem 
              key = {category.id}
              name = {category.name}
              onClick = {this.onClickShowDetail(category)}
            />
    })
      return(
        <div className="showItem d-flex">
          <ul className="list-group menu">
            {categoryItem}
          </ul>
          <table className="table show" id="show">
            <thead>
              <tr>
                <th >#</th>
                <th >Code</th>
                <th >Name</th>
                <th >Description</th>
                <th >Status</th>
              </tr>
            </thead>
            <tbody>
                <CategoryDetail
                  key = {this.state.categoryDetail.id}
                  id = {this.state.categoryDetail.id}
                  code = {this.state.categoryDetail.code}
                  name = {this.state.categoryDetail.name}
                  description = {this.state.categoryDetail.description}
                  status = {this.state.categoryDetail.status}
                />
            </tbody>
          </table>
        </div>
      );
  }
}

export default CategoryList;
