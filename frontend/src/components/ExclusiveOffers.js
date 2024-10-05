import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchExclusiveOffers } from '../redux/offersSlice';

const ExclusiveOffers = () => {
  const dispatch = useDispatch();
  const offers = useSelector((state) => state.offers.list);

  useEffect(() => {
    dispatch(fetchExclusiveOffers());
  }, [dispatch]);

  return (
    <div className="offers-container">
      <h1>Exclusive Offers</h1>
      <div className="offers-list">
        {offers.map((offer) => (
          <div key={offer._id} className="offer-card">
            <img src={offer.imageUrl} alt={offer.title} />
            <h3>{offer.title}</h3>
            <p>{offer.description}</p>
            <p>Price: ${offer.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExclusiveOffers;
