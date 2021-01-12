import React, {Component} from 'react';
import CategoryData from './CategoryData';
import Category from './Category';
import axios from 'axios';
class TableCategory extends Component{

    constructor(props) {
        super(props);
        this.state={
          categories: [],
          categoryDetail: '',
          page: 1,
          limit: 3,
          totalPage: 0,
          pageNumbers: []
        };
    }

    onClickPage = (pageNumber) =>{ 
        return()=>{
          this.setState({
            page: pageNumber,
          });
        };
    }
    
    onClickShowCate = (category)=>{
      return ()=>{
          this.setState({categoryDetail : category});
      }
    }

    onChangeSelect = ()=>{
      var select = document.getElementById('sl-limit');
      var e = select.value;
      return this.setState({limit : e});
    }

    onClickPrevious = ()=>{
      if(this.state.page >= 1){
        this.setState({page: this.state.page - 1})
      }
    }

    onClickNext = ()=>{
      if(this.state.page < this.state.totalPage){
        this.setState({page: this.state.page + 1})
      }
    }

    getAPICategory = ()=>{
      axios 
            .get("/admin/categories?page="+this.state.page+"&limit="+this.state.limit+"")
            .then(response => {
              const pageNumbers = [];
              for (let i = 1; i <= response.data.totalPage; i++) {
                pageNumbers.push(i);
              }
              this.setState({
                pageNumbers: pageNumbers,
                categories: response.data.listResult,
                totalPage: response.data.totalPage
              });
            })
          .catch(err => console.log(err));
    }

    componentDidMount() {
      this.getAPICategory();
    }
    componentDidUpdate(prevProps, prevState) {
      if (prevState.page !== this.state.page || prevState.limit !== this.state.limit) {
        this.getAPICategory();
      }
    }
    
    render() {  
      let categoryData = this.state.categories.map((category)=>{
          return <CategoryData 
                    key ={category.id}
                    name = {category.name}
                    onClickShow = {this.onClickShowCate(category)}
                  />
      });

      let pages = this.state.pageNumbers.map((index) =>{
        if(this.state.page === index){
          return <li className="page-item active" key={index}><span className="page-link"  onClick={this.onClickPage(index)} >{index}</span></li>
        }else{
          return <li className="page-item" key={index}><span className="page-link"  onClick={this.onClickPage(index)} >{index}</span></li>
        }
      });
      
      return <div className="mycontent">
                <div className="list-cate">
                <select className="sl-limit" id="sl-limit" onChange={this.onChangeSelect}>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="6">6</option>
                    <option value="8">8</option>
                  </select>
                  <div className="item-cate">
                      <ul className="item-ul">
                        {categoryData}
                      </ul>
                  </div>
                  <nav aria-label="Page navigation example" className="ex1">
                      <ul className="pagination">
                        <li  className={this.state.page === 1 ? "page-item  disabled" : "page-item"}  onClick={this.onClickPrevious}><span className="page-link">Previous</span></li>
                        {pages}
                        <li  className={this.state.page === this.state.totalPage ? "page-item  disabled" : "page-item"}  onClick={this.onClickNext}><span className="page-link">Next</span></li>
                      </ul>
                  </nav>
              </div>
              <Category
                      key = {this.state.categoryDetail.id}
                      id  = {this.state.categoryDetail.id}
                      categoryCode = {this.state.categoryDetail.categoryCode}
                      name = {this.state.categoryDetail.name}
                      description = {this.state.categoryDetail.description}
                      createdDate = {this.state.categoryDetail.createdDate}
                      modifiedDate = {this.state.categoryDetail.modifiedDate}
                  />
            </div>
    }
}
export default TableCategory