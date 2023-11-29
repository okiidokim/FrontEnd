import React, { useEffect } from 'react';
import * as S from './style';

const { kakao } = window;

function Map() {

  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(37.558288, 127.000173),
      level: 3
    };
    var map = new kakao.maps.Map(container, options);
  }, [])

  return (
    <S.Map id="map" style={{width:'100%', height:'100%'}}>

    </S.Map>
  );
}

export default Map;
