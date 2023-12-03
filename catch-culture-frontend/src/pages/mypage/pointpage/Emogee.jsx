import React from 'react';
import Backitem from '../../../components/Backitem';
import Level0 from '../../../assets/pointimg/level0.png';
import Level1 from '../../../assets/pointimg/level1.png';
import Level2 from '../../../assets/pointimg/level2.png';
import Level3 from '../../../assets/pointimg/level3.png';
import { TbCoin } from 'react-icons/tb';
import './Emogee.css';

export default function Emogee() {
  return (
    <div className="emogeewrap">
      <Backitem />
      <div className="emogeebody">
        <div className="thumbnailheader">
          <div class="emogeetextinfo">캐치티콘 상세 정보</div>
          <img className="thumbnailimg" src={Level0} />
          <div className="emogeename">캐치티콘</div>
          <div className="emogeepoint">
            <TbCoin size="18" />
            <p>3000p</p>
          </div>
        </div>
        <hr />
        <div className="emogeelist">
          <div className="row">
            <img className="emogeeeimg" src={Level0} />
            <img className="emogeeeimg" src={Level0} />
            <img className="emogeeeimg" src={Level0} />
          </div>
          <div className="row">
            <img className="emogeeeimg" src={Level1} />
            <img className="emogeeeimg" src={Level1} />
            <img className="emogeeeimg" src={Level1} />
          </div>
          <div className="row">
            <img className="emogeeeimg" src={Level2} />
            <img className="emogeeeimg" src={Level2} />
            <img className="emogeeeimg" src={Level2} />
          </div>
          <div className="row">
            <img className="emogeeeimg" src={Level3} />
            <img className="emogeeeimg" src={Level3} />
            <img className="emogeeeimg" src={Level3} />
          </div>
          <div className="row">
            <img className="emogeeeimg" src={Level0} />
            <img className="emogeeeimg" src={Level1} />
            <img className="emogeeeimg" src={Level2} />
          </div>
          <div className="row">
            <img className="emogeeeimg" src={Level0} />
            <img className="emogeeeimg" src={Level1} />
            <img className="emogeeeimg" src={Level2} />
          </div>
        </div>
      </div>
    </div>
  );
}
