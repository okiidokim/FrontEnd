import React, { useMemo, useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import * as S from './VisitAuthStyle';
import Backitem from '../../components/Backitem';
import UploadBox from '../../components/uploadImg/UploadBox'

function VisitAuth() {

    const [isAuthenticated, setIsAuth] = useState();

    const onClickBackButton = () => {
        navigate(-1);
    }

    return (
        <S.Wrapper>

            <Backitem/>

            <S.Container>
                <S.TitleArea>
                    더 크림 갤러리
                </S.TitleArea>
                <S.SubTitle>
                    사진 등록 (최대 3개)
                </S.SubTitle>
                <UploadBox/>
            </S.Container>

            <S.ButtonSection>           
                <button onClick={''} disabled={isAuthenticated} style={ isAuthenticated ? {backgroundColor: '#A7A7A7'} : {backgroundColor: '#018C0D'}}>
                    방문 인증 요청
                </button>
            </S.ButtonSection>
        </S.Wrapper>
    )
}
export default VisitAuth;