import React, {useState, useRef, useEffect} from "react";
import {useHistory} from "react-router-dom";

import {getSceneInfo, nftId, prettyfyId, tileImgUri, tileDataUri} from "../components/contractHelpers.js";

////////////////////////////////////////////////////////////////////////////////

const Home = (props) => {  
  
  let history = useHistory();
  const [numScenes, setNumScenes] = useState(0);
  const [loading, setLoading] = useState(true);

  //////////////////////////////////////////////////////////////////////////////

  if (loading && props.user && props.estile) {
    props.estile.sceneCount()
      .then((count) => { 
        setNumScenes(count);
        setLoading(false);
      });
  }

  //////////////////////////////////////////////////////////////////////////////

  const gotoScene = (sid, pid) => {
    history.push("/scene/" + sid + "/puzzle/" + (pid+1));
  }

  //////////////////////////////////////////////////////////////////////////////

  return (
    <div className="Home-main">
      {loading && 
        <div>Talking to the contract ...</div>
      }
      {!loading && 
        <>
          <h3>EtherScapes</h3>
          <div onClick={()=>{gotoScene(1, 0)}}>Explore Scene 1</div>
          <div onClick={()=>{history.push("/packs")}}>Purchase tiles today!</div>
        </>
      }
    </div>
  );
}

export default Home;
  