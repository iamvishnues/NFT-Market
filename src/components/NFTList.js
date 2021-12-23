import React from "react";
import CollectionCard from "./CollectionCard";
import "./NFTList.css";
function NFTList({ nftListData, setSelectedNft }) {
  return (
    <div className="nftList">
      {nftListData.map((item) => (
        <div onClick={() => setSelectedNft(item.token_id)}>
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
