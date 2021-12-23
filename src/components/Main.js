import React, { useEffect, useState } from "react";
import "./Main.css";
import { BsInstagram, BsTwitter, BsThreeDots } from "react-icons/bs";

function Main({ selectedNft, nftListData }) {
  const [activeNft, setActiveNft] = useState(nftListData[0]);
  useEffect(() => {
    setActiveNft(nftListData[selectedNft]);
  }, [selectedNft, nftListData]);
  return (
    <div className="main">
      <div className="mainContent">
        <div className="nftHighlight">
          <div className="nftContainer">
            <img className="selectedNft" src={activeNft.image_original_url} />
          </div>
        </div>
        <div className="nftDetailContainer">
          <div className="nftDetails">
            <div className="title">{activeNft.name}</div>
            <span className="itemNumber">.#{activeNft.token_id}</span>
          </div>
          <div className="owner">
            <div className="ownerImageContainer">
              <img
                className="ownerImage"
                src={activeNft.owner.profile_img_url}
              />
            </div>
            <div className="ownerdetails">
              <div className="ownerNameAndHandle">
                <div>{activeNft.owner.address}</div>
                <div className="ownerHandle">@immortalartist</div>
              </div>
              {/* <div className="social">
                {" "}
                <div className="ownerSocial">
                  <BsInstagram />
                </div>
                <div className="ownerSocial">
                  <BsTwitter />
                </div>
                <div className="ownerSocial">
                  <BsThreeDots />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
