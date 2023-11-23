import React, { useMemo, useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import * as S from './VisitAuthStyle';
import Backitem from '../../components/Backitem';

function VisitAuth() {
    const onClickBackButton = () => {
        navigate(-1);
    }

    return (
        <S.Wrapper>
                <Backitem/>
            {/* <S.InfoArea>

            </S.InfoArea> */}
        </S.Wrapper>
    )
}
export default VisitAuth;