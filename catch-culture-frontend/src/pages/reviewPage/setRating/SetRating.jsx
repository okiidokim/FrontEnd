import * as S from './style.jsx';
import { useEffect, useState } from 'react';
import { AiFillStar } from 'react-icons/ai';

function SetRating (props) {
    const [rating, setRating] = useState([false, false, false, false, false]);

    const array = [0, 1, 2, 3, 4]

    const handleClickRating = (index) => {
        let clickStates = [...rating];
        for (let i = 0; i < 5; i++) {
            clickStates[i] = (i <= index);
        }
        setRating(clickStates);
    };

    useEffect(() => {
        sendReview();
    }, [rating]);
    
    const sendReview = () => {
        let score = rating.filter(Boolean).length;        
        props.setRating(score);
    };

    return (
        <S.Stars>
            {array.map((el) =>{
                return(
                    <AiFillStar
                        key={el.index}
                        onClick={() => handleClickRating(el)}
                        className={rating[el] && 'activeStar'}
                    />
                );
            })}
        </S.Stars>
    );
}

export default SetRating;