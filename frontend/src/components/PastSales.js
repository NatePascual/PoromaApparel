import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPastSales } from '../redux/pastSalesSlice';

const PastSales = () => {
  const dispatch = useDispatch();
  const pastSales = useSelector((state) => state.pastSales.list);

  useEffect(() => {
    dispatch(fetchPastSales());
  }, [dispatch]);

  return (
    <div className="past-sales-container">
      <h1>Past Sales Gallery</h1>
      <div className="sales-list">
        {pastSales.map((sale) => (
          <div key={sale._id} className="sale-card">
            <img src={sale.imageUrl} alt={sale.title} />
            <h3>{sale.title}</h3>
            <p>{sale.description}</p>
            <p>Sold at: {new Date(sale.soldAt).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PastSales;
