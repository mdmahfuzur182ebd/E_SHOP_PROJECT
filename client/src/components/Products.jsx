import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import {popularProducts} from "../data";
import Product from './Product';
import axios from 'axios';



const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;


const Products = ({cat, filters, sort}) => {

  const [products, setProducts] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products?category=coat");
        console.log(res);
      } catch (err) {
        
      }
    }; 
    getProducts()
  }, [cat]);

  return (
    <Container>
         {popularProducts.map((item) => (
            <Product item={item} key={item.id}/>
         ))}
    </Container>
  );
};

export default Products;