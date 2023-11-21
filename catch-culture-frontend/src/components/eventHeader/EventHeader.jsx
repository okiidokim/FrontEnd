import * as S from './style.jsx';
import { IoIosArrowBack } from 'react-icons/io';
import { RiFileList2Line } from 'react-icons/ri';
import { LiaCommentsSolid } from 'react-icons/lia';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

function EventHeader ( {onSelectorChange} ) {
    console.log(onSelectorChange);
    const navigate = useNavigate();

    let selector = 0;
    // 페이지 뒤로가기
    const onClickBackButton = () => {
        navigate(-1);
    }

    const onClickInfoButton = () => {
        selector = 0
        console.log(selector);
        onSelectorChange(selector);
    }

    const onClickReviewButton = () => {
        selector = 1
        console.log(selector);
        onSelectorChange(selector)
    }

    return (
        <S.Header>
            <S.BackButton onClick={onClickBackButton}> 
                <IoIosArrowBack />
            </S.BackButton>
            <S.PageChangeArea>
                <S.DetailInfoButton onClick={onClickInfoButton} active="active">
                    <RiFileList2Line /> 
                    <b>상세정보</b>
                </S.DetailInfoButton>
                <S.EventReviewButton onClick={onClickReviewButton} active={ selector == 1 ? 'true': 'false'}>
                    <LiaCommentsSolid /> 
                    <b>리뷰</b>
                </S.EventReviewButton>
            </S.PageChangeArea>
        </S.Header>
    );
}

export default EventHeader;