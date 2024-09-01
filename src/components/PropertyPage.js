// PropertyPage.js
import React from 'react';
import PropertyListing from './PropertyListing';

const PropertyPage = () => {
  return (
    <div>
      <h1 className="text-4xl text-center my-8">All Properties</h1>
      <PropertyListing />
    </div>
  );
};

export default PropertyPage;
