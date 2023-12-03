import React, { useEffect, useState } from 'react';
import * as S from './style';
import './style.css';
import { Navigate, useLocation } from 'react-router-dom';
import axios from '../../api/axios';
import CategorySelector from '../../components/categorySelector/CategorySelector';

import m1 from '../../assets/images/marker/m1.png';
import m2 from '../../assets/images/marker/m2.png';
import m3 from '../../assets/images/marker/m3.png';
import m4 from '../../assets/images/marker/m4.png';
import m5 from '../../assets/images/marker/m5.png';
import m6 from '../../assets/images/marker/m6.png';
import m7 from '../../assets/images/marker/m7.png';
import m8 from '../../assets/images/marker/m8.png';
import m9 from '../../assets/images/marker/m9.png';
import m10 from '../../assets/images/marker/m10.png';
import m11 from '../../assets/images/marker/m11.png';

const { kakao } = window;

function Map() {
  const [map, setMap] = useState();
  const [markers, setMarkers] = useState([]);
  const [overlays, setOverlays] = useState([]);

  const [eventData, setEventData] = useState();
  const { state } = useLocation();
  // state 값 유무에 따른 초기값 설정

  const category = state && state.category;
  const initialCategories = category ? category : [];
  const [selectedCategories, setSelectedCategories] =
    useState(initialCategories);

  const imageSize = new kakao.maps.Size(24, 32);
  const imageOption = {
    spriteOrigin: new kakao.maps.Point(0, 0),
    spriteSize: new kakao.maps.Size(24, 32),
  };

  useEffect(() => {
    initMap();
    fetchMapData();
  }, []);

  const initMap = () => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(37.558288, 127.000173),
      level: 4,
    };
    setMap(new kakao.maps.Map(container, options));
  };

  const fetchMapData = async () => {
    try {
      const response = await axios.get(`cultural-event/map`);
      handleEventData(response.data);
    } catch (e) {}
  };

  const handleEventData = data => {
    setEventData(data);
  };

  useEffect(() => {
    makeMarker(eventData);
  }, [eventData, selectedCategories]);

  const getTagColor = remainDay => {
    if (remainDay === 0) {
      return '#E00000';
    } else if (remainDay >= 1 && remainDay <= 3) {
      return '#EB6565';
    } else if (remainDay >= 4 && remainDay <= 9) {
      return '#E3C00C';
    } else {
      return '#018C0D';
    }
  };

  const makeMarker = data => {
    clearScreen();
    if (!data) {
      return;
    }

    data.forEach(data => {
      if (selectedCategories.includes(data.category)) {
        var markerImage = new kakao.maps.MarkerImage(
          getCategoryMarker(data.category),
          imageSize,
          imageOption
        );

        // 마커 생성
        var marker = new kakao.maps.Marker({
          position: new kakao.maps.LatLng(data.latitude, data.longitude), // 마커의 위치
          image: markerImage,
        });

        // 마커에 표시할 커스텀오버레이
        var overlay = new kakao.maps.CustomOverlay({
          position: marker.getPosition(),
        });

        // Overlay 정보 생성
        const overlayCard = document.createElement('div');
        overlayCard.classList.add('overlayCard');

        const overlayContent = document.createElement('div');
        overlayContent.onclick = function () {
          location.href = '/event/' + data.culturalEventId;
        };
        overlayContent.classList.add('overlayContent');
        overlayCard.appendChild(overlayContent);

        const closeBtn = document.createElement('div');
        closeBtn.classList.add('close');
        closeBtn.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
          </svg>
        `;
        closeBtn.onclick = function () {
          overlay.setMap(null);
        };
        overlayCard.appendChild(closeBtn);

        // image area 왼쪽 영역
        const imageArea = document.createElement('div');
        imageArea.classList.add('imageArea');
        overlayContent.appendChild(imageArea);

        // image
        const image = document.createElement('img');
        image.classList.add('image');
        image.setAttribute('src', data.storedFileUrl);
        image.setAttribute('alt', '행사 이미지');
        imageArea.appendChild(image);

        // 오른쪽 영역
        const textArea = document.createElement('div');
        textArea.classList.add('textArea');
        overlayContent.appendChild(textArea);

        // 남은 날짜
        const remainDayTag = document.createElement('div');
        remainDayTag.classList.add('remainDayTag');
        remainDayTag.style.color = getTagColor(data.remainDay);
        remainDayTag.textContent = `D-${
          data.remainDay === 0 ? 'Day' : data.remainDay
        }`;
        textArea.appendChild(remainDayTag);

        // overlayCardContentWrapper
        const overlayCardContentWrapper = document.createElement('div');
        overlayCardContentWrapper.classList.add('overlayCardContentWrapper');
        textArea.appendChild(overlayCardContentWrapper);

        // 행사 제목
        const overlayCardTitle = document.createElement('div');
        overlayCardTitle.classList.add('overlayCardTitle');
        overlayCardTitle.textContent =
          String(data.title).length < 10
            ? data.title
            : `${String(data.title).slice(0, 9)}...`;
        overlayCardContentWrapper.appendChild(overlayCardTitle);

        // 행사 위치
        const overlayCardLocation = document.createElement('div');
        overlayCardLocation.classList.add('overlayCardLocation');
        overlayCardLocation.textContent =
          String(data.place).length < 12
            ? data.place
            : `${String(data.place).slice(0, 11)}...`;
        overlayCardContentWrapper.appendChild(overlayCardLocation);

        // overlayCardDate
        const overlayCardDate = document.createElement('div');
        overlayCardDate.classList.add('overlayCardDate');
        overlayCardDate.textContent = `${data.startDate} ~ ${data.endDate}`;
        overlayCardContentWrapper.appendChild(overlayCardDate);

        // overlayCardInfo
        const overlayCardInfo = document.createElement('div');
        overlayCardInfo.classList.add('overlayCardInfo');
        overlayCardContentWrapper.appendChild(overlayCardInfo);

        // 조회 영역
        const overlayCardInfoViewWrapper = document.createElement('div');
        overlayCardInfoViewWrapper.classList.add('overlayCardInfoViewWrapper');
        overlayCardInfo.appendChild(overlayCardInfoViewWrapper);

        // 조회 아이콘
        const overlayCardInfoViewIcon = document.createElement('div');
        overlayCardInfoViewIcon.classList.add('overlayCardInfoViewIcon');
        overlayCardInfoViewIcon.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
          </svg>
        `;
        overlayCardInfoViewWrapper.appendChild(overlayCardInfoViewIcon);

        // 조회수
        const overlayCardInfoViewCnt = document.createElement('div');
        overlayCardInfoViewCnt.classList.add('overlayCardInfoViewCnt');
        overlayCardInfoViewCnt.textContent = data.viewCount;
        overlayCardInfoViewWrapper.appendChild(overlayCardInfoViewCnt);

        // 좋아요 area
        const overlayCardInfoHeartWrapper = document.createElement('div');
        overlayCardInfoHeartWrapper.classList.add(
          'overlayCardInfoHeartWrapper'
        );
        overlayCardInfo.appendChild(overlayCardInfoHeartWrapper);

        // 좋아요 아이콘
        const overlayCardInfoHeartIcon = document.createElement('div');
        overlayCardInfoHeartIcon.classList.add('overlayCardInfoHeartIcon');
        overlayCardInfoHeartIcon.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
          </svg>
        `;
        overlayCardInfoHeartWrapper.appendChild(overlayCardInfoHeartIcon);

        // 좋아요수
        const overlayCardInfoHeartCnt = document.createElement('div');
        overlayCardInfoHeartCnt.classList.add('overlayCardInfoHeartCnt');
        overlayCardInfoHeartCnt.textContent = data.likeCount;
        overlayCardInfoHeartWrapper.appendChild(overlayCardInfoHeartCnt);

        overlay.setContent(overlayCard);

        kakao.maps.event.addListener(marker, 'click', function () {
          overlay.setMap(map);
        });

        marker.setMap(map);

        overlays.push(overlay);
        markers.push(marker);
      }
    });
  };

  function clearScreen() {
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
      overlays[i].setMap(null);
    }
    // 마커 배열 초기화
    markers.splice(0);
    overlays.splice(0);
  }

  // 카테고리별 색 지정
  const getCategoryMarker = category => {
    switch (category) {
      case 'POPUP_STORE':
        return m1;
      case 'FESTIVAL':
        return m2;
      case 'TRADITIONAL_MUSIC':
        return m3;
      case 'ORCHESTRA_CLASSIC':
        return m4;
      case 'RECITAL':
        return m4;
      case 'DANCE':
        return m5;
      case 'CONCERT':
        return m6;
      case 'MOVIE':
        return m7;
      case 'THEATER':
        return m8;
      case 'MUSICAL_OPERA':
        return m9;
      case 'EDUCATION_EXPERIENCE':
        return m10;
      case 'EXHIBITION_ART':
        return m10;
      default:
        return m11;
    }
  };

  return (
    <>
      <S.Map id="map" style={{ width: '100%', height: '100%' }}></S.Map>
      <S.CategoryArea>
        <CategorySelector
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
        />
      </S.CategoryArea>
    </>
  );
}

export default Map;
