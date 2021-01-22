import React, { useState } from 'react';
import CategoryDetail from './CategoryDetail';
import CategoryItem from './CategoryItem';

const CategoryList: React.FC = () => {

  const [categoryDetail, setCategoryDetail] = useState({});
  const categories = [
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
  ];

  const onClickShowDetail = (category: object) => {
    var document: any = document.getElementById('show');
    document.setAttribute('style', 'display:block');
    return () => {
      setCategoryDetail(category);
    }
  }
  let categoryItem = categories.map((category) => {
    return <CategoryItem
      key={category.id}
      name={category.name}
      onClick={onClickShowDetail(category)}
    />
  })
  return (
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
            categoryDetail={categoryDetail}
          />
        </tbody>
      </table>
    </div>
  );
}

export default CategoryList;