import React ,{useState} from 'react'
import './Order.css';

const CountryList = () => {
  const [countries, setCountries] = useState([
    'Türkiye', 'Almanya', 'İran', 'Rusya', 'Çin', 'Suriye', 'Yunanistan'
  ]);

  const orderByCountries = () => {
    const sortedCountries = [...countries].sort();
    setCountries(sortedCountries);
  };

  const clearCountries = () => {
    setCountries([]);
  };

  return (
    <div className="container">
    <div className="buttons">
      <button onClick={orderByCountries} className="btn order-btn">Order By</button>
      <button onClick={clearCountries} className="btn clear-btn">Clear</button>
    </div>
    <div className="info">
      <p>Length: {countries.length}</p>
      <div className="country-list">
        {countries.map((country, index) => (
          <div key={index} className="country-item">{country}</div>
        ))}
      </div>
    </div>
    
  </div>
);
};



export default CountryList;
