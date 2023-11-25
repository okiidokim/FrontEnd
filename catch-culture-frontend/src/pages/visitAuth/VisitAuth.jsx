import React, { useMemo, useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import * as S from './VisitAuthStyle';
import Backitem from '../../components/Backitem';
import UploadBox from '../../components/uploadImg/UploadBox'

import axios from '../../api/axios';

function VisitAuth( params ) {

    const [disabled, setDisabled] = useState(false);
    const formData = new FormData();

    const handleImgUrl = (file) => {
        console.log(file);
        formData.append('Blob', file);
        // for (var key of imageData.entries()) {
        //     console.log(key[0] + ', ' + key[1]);
        // }f
    }

    const handleSubmit = (event) => {
        setDisabled(true);

        event.preventDefault();
        try {
            // const response= axios.post(
            //     `cultural-event/${parseInt(eventId)}/like`,
            // );

            const response = axios.post(
                `gcs/uploadImage`,
                formData,
                {
                    headers: {
                      'Content-Type': 'multipart/form-data', 
                    },
                }
            );
        } catch (e) {
            console.log(e);
        }

        setDisabled(false);
    }

    return (
        <S.Wrapper>
            <Backitem/>

            <S.Container onSubmit={handleSubmit}>
                <S.TitleArea>
                    더 크림 갤러리
                </S.TitleArea>
                <S.SubTitle>
                    사진 등록 (최대 3개)
                </S.SubTitle>
                
                <UploadBox setUrl={handleImgUrl}/>
                <UploadBox setUrl={handleImgUrl}/>
                <UploadBox setUrl={handleImgUrl}/>

                <S.ButtonSection>           
                    <button type='submit' disabled={disabled && formData==null} style={ formData == null ? {backgroundColor: '#A7A7A7'} : {backgroundColor: '#018C0D'}}>
                        방문 인증 요청
                    </button>
                </S.ButtonSection>
            </S.Container>  
        </S.Wrapper>
    )
}
export default VisitAuth;