import * as S from './style.jsx';
import { useEffect, useState } from 'react';

function SetRating () {
    const [rating, setRating] = useState([false, false, false, false, false]);

    const array = [0, 1, 2, 3, 4]

    const handleClickRating = (index) => {
        let clickStates = [...rating];
        for (let i = 0; i < 5; i++) {
            clickStates[i] = i <= index ? true : false;
        }
        setRating(clickStates);
    };
    
    return (
        <S.Wrapper>
            {array.map((el, idx) =>{
                <S.ActiveStar
                    key={idx}
                    onClick={() => handleClickRating(el)}
                    className={clicked[el] && 'https://velog.io/@whoyoung90/TIL-35-WECODE-%EB%B3%84%EC%A0%90-%EA%B8%B0%EB%8A%A5-%EA%B5%AC%ED%98%84'}
                />
            })}
        </S.Wrapper>
    );
}

export default SetRating;