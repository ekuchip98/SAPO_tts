import React, { Component } from 'react';
import CategoryItem from './CategoryItem';
import CategoryDetail from './CategoryDetail';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { authContext } from '../../utils/AuthContext';
import Pagination from './Pagination';
import Selection1 from './Selection1';

class CategoryList extends Component {

  static contextType = authContext;
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      categoryDetail: {},
      detailStatus: false,

      page: 1,
      limit: 3,
      totalPage: 0,

      alert: false,
    };
  }


  onClickShowCate = (category) => {
    return () => {
      this.setState({
        categoryDetail: category,
        detailStatus: true,
      });
    }
  }

  handlePrevious = () => {
    if (this.state.page >= 1) {
      this.setState({ page: this.state.page - 1 })
    }
  }

  handleNext = () => {
    if (this.state.page < this.state.totalPage) {
      this.setState({ page: this.state.page + 1 })
    }
  }

  handleLogout = () => {
    this.context.setAuthData(null, null);
    this.props.history.push('/login');
  }

  getAPICategory = () => {
    axios
      .get("/admin/categories?page=" + this.state.page + "&limit=" + this.state.limit + "")
      .then(response => {
        this.setState({
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

  handlePage = (e) => {
    return this.setState({ page: e.target.innerHTML })
  }

  handleSelect = () => {
    var select = document.getElementById('sl-limit');
    var e = select.value;
    return this.setState({ limit: Number(e) });
  }

  render() {


    let categoryItem = this.state.categories.map((category) => {
      return <CategoryItem
        key={category.id}
        name={category.name}
        onClickShow={this.onClickShowCate(category)}
      />
    });

    let boxDetail;
    if (this.state.detailStatus) {
      var detail = this.state.categoryDetail;
      boxDetail = (<CategoryDetail
        key={detail.id}
        id={detail.id}
        categoryCode={detail.categoryCode}
        name={detail.name}
        description={detail.description}
        createdDate={detail.createdDate}
        modifiedDate={detail.modifiedDate}
      />);
    } else {
      boxDetail = <div></div>
    }
    return (
      <div>
        <div className="hello mt-4">
          <div className="add-cate" style={{ textAlign: 'center' }}>
            <Link to='/category-list/edit' className="btn btn-primary">Thêm mới</Link>
          </div>
        </div>
        <div className="mycontent">
          <div className="list-cate">
            <Selection1
              onChangeSelect={this.handleSelect}
            />
            <div className="item-cate">
              <ul className="item-ul">
                {categoryItem}
              </ul>
            </div>
            <Pagination
              totalPage={this.state.totalPage}
              page={this.state.page}
              limit={this.state.limit}
              onClickPage={this.handlePage}
              onClickPrevious={this.handlePrevious}
              onClickNext={this.handleNext}
            />
          </div>
          {boxDetail}
        </div>
      </div>
    );
  }
}
export default CategoryList;