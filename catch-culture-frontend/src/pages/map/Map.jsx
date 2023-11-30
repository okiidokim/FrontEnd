import React, { useEffect, useState } from 'react';
import * as S from './style';
import { useLocation } from 'react-router-dom';

import axios from '../../api/axios'
import CategorySelector from '../../components/categorySelector/CategorySelector';
import MapOverlay from '../../components/mapOverlay/MapOverlay';

const { kakao } = window;

function Map() {
  const [map, setMap] = useState();
  const [markers, setMarkers] = useState([]);

  const [eventData, setEventData] = useState();
  const { state } = useLocation();
  // state 값 유무에 따른 초기값 설정

  const category = state && state.category;
  const initialCategories = category ? category : [];
  const [selectedCategories, setSelectedCategories] = useState(initialCategories);


  useEffect(() => {
    initMap();
    fetchMapData();
  }, [])

  const initMap = () => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(37.558288, 127.000173),
      level: 4
    };
    setMap(new kakao.maps.Map(container, options));
  }

  const fetchMapData = async() => {
    try {
      const response = await axios.get(
        `cultural-event/map`
      )
      handleEventData(response.data)
    } catch(e) {

    }
  }

  const handleEventData = (data) => {
    setEventData(data)
  }

  useEffect(() => {
    makeMarker(eventData);
  }, [eventData, selectedCategories])

  const makeMarker = (data) => {
    clearMarker();
    if(!data) {
      return;
    }

    // 마커 생성
    for(var i = 0; i < data.length; i++) {
      if(selectedCategories.includes(data[i].category)) {
        var marker = new kakao.maps.Marker({
          position: new kakao.maps.LatLng(data[i].latitude, data[i].longitude), // 마커의 위치
          clickable: true
        });
        
        // 마커에 표시할 인포윈도우 설정
        var infowindow = new kakao.maps.InfoWindow({
          content: data[i].title, // 인포윈도우에 표시할 내용
          removable : true
        });

        kakao.maps.event.addListener(marker, 'click', makeOverListener(map, marker, infowindow));

        marker.setMap(map);

        markers.push(marker);
      }
    }
  }

  function clearMarker() {
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    } 
    // 마커 배열 초기화
    markers.splice(0);
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
    <>
      
      <S.Map id="map" style={{width:'100%', height:'100%'}}>
      <MapOverlay/>
      </S.Map>
      <CategorySelector
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
      />
    </>
  );
}

export default Map;
