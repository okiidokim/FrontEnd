import React, { useMemo, useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import * as S from './VisitAuthStyle';

function VisitAuth() {
    const onClickBackButton = () => {
        navigate(-1);
    }

    return (
        <S.Wrapper>
            <S.Header>
                <S.BackButton onClick={onClickBackButton}> 
                    <IoIosArrowBack />
                </S.BackButton>
                
            </S.Header>
            {/* <S.InfoArea>

            </S.InfoArea> */}
        </S.Wrapper>
    )
}
export default VisitAuth;