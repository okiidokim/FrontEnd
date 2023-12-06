import * as S from './style.jsx';
import { RiFileList2Line } from 'react-icons/ri';
import { LiaCommentsSolid } from 'react-icons/lia';

import Backitem from '../../../components/Backitem.jsx';

function EventHeader(onSelectorChange) {
  const onClickInfoButton = () => {
    setSelect(0);
    onSelectorChange(0);
  };

  const onClickReviewButton = () => {
    setSelect(1);
    onSelectorChange(1);
  };

    const onClickInfoButton = () => {
        setSelect(0);
        onSelectorChange(0);
    }

    const onClickReviewButton = () => {
        setSelect(1);
        onSelectorChange(1)
    }

    return (
        <S.Header>
            <Backitem />
            <S.PageChangeArea>
                <S.DetailInfoButton
                    onClick={onClickInfoButton}
                    className={select == 0 && 'active'} >
                    <RiFileList2Line /> 
                    <b>상세정보</b>
                </S.DetailInfoButton>
                <S.EventReviewButton
                    onClick={onClickReviewButton}
                    className={select == 1 && 'active'} >
                    <LiaCommentsSolid /> 
                    <b>리뷰</b>
                </S.EventReviewButton>
            </S.PageChangeArea>
        </S.Header>
    );
}

export default EventHeader;
