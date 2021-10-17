import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import MaterialTable from 'material-table';
import axios from 'axios';
import Select from 'react-select';
import { Center, CenterOne, CenterTwo } from './styles/BeerList';

const BeerList = () => {
  const [beer, setBeer] = useState([]);
  const [filteredBeer, setFilteredBeer] = useState([]);
  const data = useSelector((state) => state);
  const [filterOne, setFilterOne] = useState([]);
  const [filterTwo, setFilterTwo] = useState([]);
  const [filterThree, setFilterThree] = useState([]);

  const filtering = [
    {value: 1,label: '1-10'},
    {value: 2,label: '11-20'},
    {value: 3,label: '21+'},
  ]

  const getFilters = () => {
    let beerOne = [];
    let beerTwo = [];
    let beerThree = [];

    for (var i = 0; i < beer.length; i++) {
      if (beer[i].abv <= 10) {
        beerOne.push(beer[i])
      } else if (beer[i].abv > 10 && beer[i].abv <= 20) {
        beerTwo.push(beer[i]);
      } else {
        beerThree.push(beer[i]);
      }
    }
    setFilterOne(beerOne)
    setFilterTwo(beerTwo)
    setFilterThree(beerThree)
  }

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

  useEffect(() => {
    getFilters();
  }, [beer]);

  const abvFiltering = (e) => {
    let beerFiltered = [];

    for (var i = 0; i < e.length; i++) {
      if (e[i].value === 1) {
        beerFiltered.push(...filterOne)
      } else if (e[i].value === 2) {
        beerFiltered.push(...filterTwo)
      } else {
        beerFiltered.push(...filterThree)
      }
    }

    console.log(beerFiltered);

    setFilteredBeer(beerFiltered)
  }

  if (filteredBeer.length === 0) {
    return (
      <Center>
        <CenterOne>
          <Select isMulti options={filtering} onChange={abvFiltering}></Select>
        </CenterOne>

        <CenterTwo>
          <MaterialTable title="Beer List" data={beer} columns={data.allColumn.products} />
        </CenterTwo>
      </Center>
    )
  } else {
    return (
      <Center>
        <CenterOne>
          <Select isMulti options={filtering} onChange={abvFiltering}></Select>
        </CenterOne>

        <CenterTwo>
          <MaterialTable title="Beer List" data={filteredBeer} columns={data.allColumn.products} />
        </CenterTwo>
      </Center>
    )
  }
}

export default BeerList;
