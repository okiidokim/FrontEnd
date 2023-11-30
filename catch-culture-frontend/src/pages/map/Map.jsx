import React, { useEffect } from 'react';
import * as S from './style';

import axios from '../../api/axios'

const { kakao } = window;

function Map() {
  var map;

  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(37.558288, 127.000173),
      level: 3
    };
    map = new kakao.maps.Map(container, options);
    fetchMapData();
  }, [])

  const fetchMapData = async() => {
    const response = await axios.get(
      `cultural-event/map`
    )

    console.log(response.data);

    // 마커 생성
    for(var i = 0; i < response.data.length; i++) {
      var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: new kakao.maps.LatLng(response.data[i].latitude, response.data[i].longitude) // 마커의 위치
      });

      // 마커에 표시할 인포윈도우 설정
      var infowindow = new kakao.maps.InfoWindow({
        content: response.data[i].title // 인포윈도우에 표시할 내용
      });

      kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
      kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
    }
  }

  // 인포윈도우를 표시하는 클로저를 만드는 함수입니다 
  function makeOverListener(map, marker, infowindow) {
      return function() {
          infowindow.open(map, marker);
      };
  }

  // 인포윈도우를 닫는 클로저를 만드는 함수입니다 
  function makeOutListener(infowindow) {
      return function() {
          infowindow.close();
      };
  }

  return (
    <S.Map id="map" style={{width:'100%', height:'100%'}}>

    </S.Map>
  );
}

export default Map;
