import * as S from './style.jsx';
import { IoIosArrowBack } from 'react-icons/io';
import { RiFileList2Line } from 'react-icons/ri';
import { LiaCommentsSolid } from 'react-icons/lia';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function EventHeader ( {onSelectorChange} ) {
    console.log(onSelectorChange);
    const navigate = useNavigate();

    let [select,setSelect] = useState(0);
    // 페이지 뒤로가기
    const onClickBackButton = () => {
        navigate(-1);
    }

    const onClickInfoButton = () => {
        setSelect(0);
        onSelectorChange(select);
    }

    const onClickReviewButton = () => {
        setSelect(1);
        onSelectorChange(select)
    }



    return (
        <S.Header>
            <S.BackButton onClick={onClickBackButton}> 
                <IoIosArrowBack />
            </S.BackButton>
            <S.PageChangeArea>
                <S.DetailInfoButton
                    onClick={onClickInfoButton}
                    className={!select? 'active' : ''} >
                    <RiFileList2Line /> 
                    <b>상세정보</b>
                </S.DetailInfoButton>
                <S.EventReviewButton
                    onClick={onClickReviewButton}
                    className={select? 'active' : ''} >
                    <LiaCommentsSolid /> 
                    <b>리뷰</b>
                </S.EventReviewButton>
            </S.PageChangeArea>
        </S.Header>
    );
}

export default EventHeader;