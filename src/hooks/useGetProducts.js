import { useEffect, useState } from 'react';
import axios from 'axios';

export const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);

  /*  useEffect(async () => {
    const response = await axios(API);
    setProducts(response.data);
  }, []); */

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(API);
      setProducts(result.data);
    };
    fetchData();
  }, [API]);

  return products;
};
