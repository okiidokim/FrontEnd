import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

import * as S from './CulturalEventDetailStyle';

import EventHeader from './eventHeader/EventHeader'
import EventInfo from './eventInfo/EventInfo'
import EventReview from './eventReview/EventReview';

// api
import axios from '../../api/axios';

let data = "sample";

function culturalEventDetail() {
    const params = useParams();
    const culturalEventId = params.id;
    
    const [_isInit, setInit] = useState(false);

    // 최초 로딩시 값 불러오기
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(
                `cultural-event/${parseInt(culturalEventId)}`
            )
            setInit(true);

            data = {
                'EventId' : culturalEventId,
                'storedFileUrl' : response.data.culturalEventDetail.storedFileUrl,
                'startDate' : response.data.culturalEventDetail.startDate,
                'endDate' : response.data.culturalEventDetail.endDate,
                'title' : response.data.culturalEventDetail.title,
                'place' : response.data.culturalEventDetail.place,
                'category' : response.data.culturalEventDetail.category,
                'description' : response.data.culturalEventDetail.description ? response.data.culturalEventDetail.description: "null",
                'wayToCome' : response.data.culturalEventDetail.wayToCome,
                'sns' : response.data.culturalEventDetail.sns,
                'telephone' : response.data.culturalEventDetail.telephone,
                'isFree' : response.data.culturalEventDetail.isFree,
                'reservationLink' : response.data.culturalEventDetail.reservationLink,
                'isAuthenticated' : response.data.culturalEventDetail.isAuthenticated,
                'likeCount' : response.data.likeCount,
                'bookmarkCount' : response.data.bookmarkCount,
                'liked' : response.data.liked,
                'bookmarked' : response.data.bookmarked,
            };
            selectorHandler(0);
            
        } catch (e) {
            console.log(e);
        }
    }

    const [selector, setSelector] = useState();

    const selectorHandler = (select) => {
        setSelector(select);
    }

    const selectedInfo = useMemo(() => {
        if(!_isInit) {
            return;
        }

        if(selector == 0)
            return <EventInfo data={data}/>;
        else
            return <EventReview data={data}/>;
    }, [selector]);

    

    return (
        <S.Wrapper>
            {/* 헤더 영역 (상단 고정) */}        
            <EventHeader onSelectorChange={selectorHandler}/>

            {/* 정보 영역 */}
            {selectedInfo}
            
        </S.Wrapper> 
    );
};

export default culturalEventDetail;