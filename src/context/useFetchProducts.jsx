import { useEffect, useState } from 'react';

const useFecthProducts = (data) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [categorizedProducts, setCategorizedProducts] = useState({});

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const categorizedProducts = (data) => {
      const categories = {};
      data.forEach((product) => {
        const categoryId = product.category;
        if (!categories[categoryId]) {
          categories[categoryId] = [];
        }
        categories[categoryId].push(product);
      });
      console.log(categories);
      return categories;
    };
    //create a function to fetch products data

    const fecthProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products', {
          signal,
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
        const categorized = categorizedProducts(data);
        setCategorizedProducts(categorized);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };
    fecthProducts();
    return () => {
      controller.abort();
    };
  }, []);
  console.log(categorizedProducts);
  return { products, loading, error, categorizedProducts };
};
export default useFecthProducts;
