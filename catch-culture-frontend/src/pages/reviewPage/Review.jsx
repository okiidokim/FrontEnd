import * as S from './style.jsx';
import { useEffect, useState } from 'react';

import Backitem from '../../components/Backitem.jsx';
import UploadBox from '../../components/uploadImg/UploadBox.jsx';

import SetRating from './setRating/SetRating.jsx';

// api
import axios from '../../api/axios';

function Review ( params ) {
    console.log(params);
    let title = "test"; // params.data.title
    let eventId = "10"; //params.data.eventId
    
    const [description, setDescription] = useState();

    const onClickbutton = () => {
        if(description == null) {
            return;
        }

        try {
            const response= axiot.post(
                `cultural-event/${parseInt(EventId)}/like`,
            );

        } catch (e) {
            console.log(e);
        }
    }

    return (
        <S.Wrapper>
            <Backitem />
            
            <S.Content>
                {/* 행사 제목 */}
                <S.TitleArea>
                    {title}
                </S.TitleArea>

                <SetRating />

                <UploadBox />
                {/* 텍스트 입력 박스 */}
                <S.ButtonSection>           
                    <button onClick={onClickbutton} disabled={description} style={ description == null ? {backgroundColor: '#A7A7A7'} : {backgroundColor: '#018C0D'}}>
                        방문 인증 요청
                    </button>
                </S.ButtonSection>
            </S.Content>
        </S.Wrapper> 
    );
}

export default Review;