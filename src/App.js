import "./App.css";
import CollectionCard from "./components/CollectionCard";
import Header from "./components/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import NFTList from "./components/NFTList";
import Main from "./components/Main";

function App() {
  const [collections, setCollections] = useState([]);
  const [selectedNft, setSelectedNft] = useState(0);
  useEffect(() => {
    const getNfts = async () => {
      const openseaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0x4428Ff1a7a512Dc6675cF20Ad68bEDCFfbc7482F&order_direction=asc"
      );
      setCollections(openseaData.data.assets);
    };
    return getNfts();
  }, []);
  return (
    <div className="app">
      <Header />
      {collections.length > 0 && (
        <>
          <Main nftListData={collections} selectedNft={selectedNft} />
          <NFTList setSelectedNft={setSelectedNft} nftListData={collections} />
        </>
      )}
    </div>
  );
}

export default App;
