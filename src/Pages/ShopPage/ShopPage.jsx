import React, { useEffect, useState, useContext } from "react";
import CollectionsPreview from "../../Components/CollectionsPreview/CollectionsPreview";
import WithSpinner from "../../Components/WithSpinner/WithSpinner";
import { Route } from "react-router-dom";
import CollectionsContext from "../../contexts/collections/collections.context";

const ShopPage = () => {
  const collections = useContext(CollectionsContext);

  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionsProps }) => (
        <CollectionsPreview key={id} {...otherCollectionsProps} />
      ))}
    </div>
  );
};

export default ShopPage;
