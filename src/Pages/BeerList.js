import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import MaterialTable from 'material-table';
import axios from 'axios';

const BeerList = () => {
  const [beer, setBeer] = useState();
  const data = useSelector((state) => state);

  const fetchProducts = async() => {
    const response = await axios
    .get('https://api.punkapi.com/v2/beers')
    .catch((err) => {
      console.log('error', err);
    });
    setBeer(response.data);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <MaterialTable title="Beer List" data={beer} columns={data.allColumn.products} />
    </div>
  )
}

export default BeerList;
