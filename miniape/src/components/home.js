import React from 'react';
import Gif from "../images/preview.gif"
import "../styles/home.css";
import one from "../images/1.png"
import two from "../images/2.png"
import three from "../images/3.png"
import {BsDiscord} from "react-icons/bs"
import {BsTwitter} from "react-icons/bs"

function Home(){
return(
<div className="home">
  <div className="gif_div">
    <div className='gif_div1'>
    <img src={Gif}/>
    </div>
    <div className='gif_div2'>
    <h1>Mischievous Mini Ape Club</h1>
    <p>3333 Unique Mini Apes roaming Solana Island. 🏝</p>
    </div>
  </div>
  <div className='lore'>
  <h1>LORE</h1>
  <p>
  Dr Enny was searching for the wonders of life and a new experiment to embark on. One day, his intuitive and destructive urges would compel him to venture into a dangerous experiment that would soon reveal secrets of a strange and uncanny dimension.</p>

<p>Dr Enny had constructed a portal that led to a strange place, a world which he had no knowledge about but still tried to explore from the comfort of his lab. To find out more about this mysterious portal, Dr Enny grabbed one of his test subjects from his bunker: A helpless, average ape. He threw the ape in the portal and to his surprise… The ape came back out of the portal but something strange had happened. The ape was doused in strange clothing and had changed mannerism and size. He did it again and again and again, each monkey more bizarre and unique than the last. Getting carried away with his experiment, 
Dr Enny had become so fixated by his evolved creation that he did not notice the army of apes he had created. On test subject 3,333, the apes rallied to overtake Dr Enny then fled using the portal back to the strange dimension…</p>

<p>The apes renamed their new found land “Solana Island”, now free from the clutches of the man that experimented on them, these apes seek to create a new prospering and aspiring land that would help their race excel and grow.

  </p>
  </div>
  <div className='roadmap'>
  <h1>ROADMAP</h1>
  <div className='roadmap1'>
    <div className='phase'>
    <div className='phase_div'>
    <h2>Phase 1</h2>
    </div></div>
    <div className='phase1'>
    <div className='phase_div1'>
    <p>After a Successful Mint, we will list on major marketplace exchanges 
    (Magic Eden/Alpha art) -Hosting regular Giveaways / Collaborations with multiple projects</p>
    </div>
    </div>
  </div>
  <div className='roadmap1'>
    <div className='phase'>
    <div className='phase_div'>
    <h2>Phase 2</h2>
    </div></div>
    <div className='phase1'>
    <div className='phase_div1'>
    <p>We will be making a DAO community and set money aside for the DAO. Buybacks will
     happen periodically and bought apes will be burned or used for airdrops/giveaways</p>
    </div>
    </div>
  </div>
  <div className='roadmap1'>
    <div className='phase'>
    <div className='phase_div'>
    <h2>Phase 3</h2>
    </div></div>
    <div className='phase1'>
    <div className='phase_div1'>
    <p>We will also be donating money to charities, focusing on the protection of apes in the wild,
     however if the community decides for something else, we will obviously not let them down.</p>
    </div>
    </div>
  </div>
  <div className='roadmap1'>
    <div className='phase'>
    <div className='phase_div'>
    <h2>Phase 4</h2>
    </div></div>
    <div className='phase1'>
    <div className='phase_div1'>
    <p>Mini Ape Tree House Launch - a snapshot will be taken on a random date & all holders who have
     their Mini Ape Delisted will be airdropped a token to mint a Mini Ape Tree House.</p>
    </div>
    </div>
  </div>
  <div className='roadmap1'>
    <div className='phase'>
    <div className='phase_div'>
    <h2>Phase 5</h2>
    </div></div>
    <div className='phase1'>
    <div className='phase_div1'>
    <p>$MAPE Utility Token & Staking $MAPE is the native utility token of the Mini Ape Metaverse and will be used to customize Mini Apes, Treehouses, and for future DAO voting rights.
     Tree Houses on Solana Island generate “income” in the form of $MAPE tokens when staked.</p>
    </div>
    </div>
  </div>
  </div>
  <div className='team'>
  <h1>TEAM</h1>
    <div className='team_imgs'>
      <div className='team_img'>
      <img src={one}/>
      <p>General Ape</p>
      </div>
      <div className='team_img'>
      <img src={two}/>
      <p>Khaleesi</p>
      </div>
      <div className='team_img'>
      <img src={three}/>
      <p>Marcuss</p>
      </div>
    </div>
  </div>
  <div className='footer'>
  <div className='socials'>
  <div className='twitter'>
    <BsTwitter/></div>
  <div className='discord'>
    <BsDiscord/></div>
    </div>
    <hr></hr>
    <p>Copyright © 2022 Mischievous Mini Ape Club. All Right Reserved</p>
  </div>
</div>

)
}
export default Home;
