import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import * as S from './CulturalEventDetailStyle';

import EventHeader from './eventHeader/EventHeader'
import EventInfo from './eventInfo/EventInfo'

// api
import axios from '../../api/axios';

function culturalEventDetail() {

    const params = useParams();
    const culturalEventId = params.id;

    const [selector, setSelector] = useState(0);

    const selectorHandler = (select) => {
        setSelector(select);
    }

    return (
        <S.Wrapper>
            {/* 헤더 영역 (상단 고정) */}        
            <EventHeader onSelectorChange={selectorHandler}/>

            {/* 정보 영역 */}
            <EventInfo EventId={culturalEventId}/>
            
            
        </S.Wrapper> 
    );
};

export default culturalEventDetail;