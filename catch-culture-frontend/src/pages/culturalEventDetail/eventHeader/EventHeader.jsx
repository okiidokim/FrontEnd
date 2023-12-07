import { useState } from 'react';
import * as S from './style.jsx';
import { RiFileList2Line } from 'react-icons/ri';
import { LiaCommentsSolid } from 'react-icons/lia';
import PropTypes from 'prop-types';

import Backitem from '../../../components/Backitem.jsx';

function EventHeader({onSelectorChange}) {
  EventHeader.propTypes = {
    onSelectorChange: PropTypes.func,
  };

  const [select,setSelect] = useState(false);

  const onClickInfoButton = () => {
    setSelect(false);
    onSelectorChange(0);
  };

  const onClickReviewButton = () => {
    setSelect(true);
    onSelectorChange(1);
  };

    return (
        <S.Header>
            <Backitem />
            <S.PageChangeArea>
                <S.DetailInfoButton
                    onClick={onClickInfoButton}
                    className={!select && 'active'} >
                    <RiFileList2Line /> 
                    <b>상세정보</b>
                </S.DetailInfoButton>
                <S.EventReviewButton
                    onClick={onClickReviewButton}
                    className={select && 'active'} >
                    <LiaCommentsSolid /> 
                    <b>리뷰</b>
                </S.EventReviewButton>
            </S.PageChangeArea>
        </S.Header>
    );
}

export default EventHeader;
