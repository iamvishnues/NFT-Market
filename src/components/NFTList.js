import React from "react";
import CollectionCard from "./CollectionCard";
import "./NFTList.css";
function NFTList({ nftListData }) {
  return (
    <div className="nftList">
      {nftListData.map((item) => (
        <div>
          <CollectionCard
            key={item.token_id}
            id={item.token_id}
            name={item.name}
            traits={item.traits}
            image={item.image_original_url}
          />
        </div>
      ))}
    </div>
  );
}

export default NFTList;
