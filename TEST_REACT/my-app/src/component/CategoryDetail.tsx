
import React from 'react';

function CategoryDetail(props: any) {

  const { categoryDetail } = props;
  return <tr>
    <td>{categoryDetail.id}</td>
    <td>{categoryDetail.code}</td>
    <td>{categoryDetail.name}</td>
    <td>{categoryDetail.description}</td>
    <td>{categoryDetail.status}</td>
  </tr>
}

export default CategoryDetail;
