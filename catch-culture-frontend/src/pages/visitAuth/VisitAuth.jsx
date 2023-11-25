import React, { useMemo, useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import * as S from './VisitAuthStyle';
import Backitem from '../../components/Backitem';
import UploadBox from '../../components/uploadImg/UploadBox'

function VisitAuth( params ) {

    const [disabled, setDisabled] = useState(false);
    const [imageUrl, setImageUrl] = useState();

    const handleImgUrl = (url) => {
        setImageUrl(url);
    }

    const handleSubmit = (event) => {
        setDisabled(true);

        event.preventDefault();
        try {
            // const response= axios.post(
            //     `cultural-event/${parseInt(eventId)}/like`,
            // );
            console.log(imageUrl);

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
                    <button type='submit' disabled={disabled && imageUrl==null} style={ imageUrl == null ? {backgroundColor: '#A7A7A7'} : {backgroundColor: '#018C0D'}}>
                        방문 인증 요청
                    </button>
                </S.ButtonSection>
            </S.Container>  
        </S.Wrapper>
    )
}
export default VisitAuth;