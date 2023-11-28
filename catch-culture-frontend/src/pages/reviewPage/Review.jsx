import * as S from './style.jsx';
import { useEffect, useState } from 'react';

import Backitem from '../../components/Backitem.jsx';
import UploadBox from '../../components/uploadImg/UploadBox.jsx';

import SetRating from './setRating/SetRating.jsx';

// api
import axios from '../../api/axios';
import { TbRating18Plus } from 'react-icons/tb';
import { useNavigate, useParams } from 'react-router-dom';

function Review ( ) {
    const params = useParams();
    let title = "test";
    const eventId = params.id;

    const [disabled, setDisabled] = useState(false);
    
    const [rating, setRating] = useState();
    const [formData, setFormData] = useState();
    const [description, setDescription] = useState("");

    const navigate = useNavigate();

    const handleRating = (rating) => {
        setRating(rating);
    }

    const handleImgFile = (file) => {
        setFormData(file);
    }

    const handleDescription = ({ target: {value}}) => {
        setDescription(value);
    }
    
    const handleSubmit = async(event) => {
        setDisabled(true);
        event.preventDefault();

        if(description.length < 30 || formData == null || rating == 0) {

        } else {
            try {
                console.log(formData)
                if(!(formData.get('file') === null)) {
                    const requestBody = new FormData();
                    
                    let data = {
                        description: description,
                        rating: rating
                    }
                    

                    requestBody.append('file', formData.get('file'));
                    requestBody.append('reviewDetail', new Blob([JSON.stringify(data)], { type: "application/json" }));
                    //  for (var key of requestBody.entries()) {
                    //      console.log(key[0] + ', ' + key[1]);
                    //  }
                    
                    const request = await axios({
                        method: "POST",
                        url: `review/${eventId}/my-review`,
                        mode: "cors",
                        headers: {
                            'Content-Type': 'multipart/form-data',     
                        },
                        data: requestBody,
                    }).then(
                        navigate(`/event/${eventId}`)
                    )
                    
                }
            } catch (e) {
                console.log(e);
            }
        }
        setDisabled(false);
    }

    return (
        <S.Wrapper>
            <Backitem />
            
            <S.Content onSubmit={handleSubmit}>
                {/* 행사 제목 */}
                <S.TitleArea>
                    {title}
                </S.TitleArea>

                <SetRating setRating={handleRating} required/>

                <S.SubTitle>사진 등록 *</S.SubTitle>
                <UploadBox setFile={handleImgFile} required/>

                <S.SubTitle>리뷰 등록 *</S.SubTitle>
                <S.ReviewTextAreaWrap>
                    <S.ReviewTextArea
                        placeholder="리뷰를 작성 해주세요. (최소 30자 이상)"
                        minLength={30}
                        value={description}
                        onChange={handleDescription}
                        required
                    />
                </S.ReviewTextAreaWrap>

                <S.ButtonSection>           
                    <button type='submit' style={ description.length < 30 || formData == null || rating == 0 ? {backgroundColor: '#A7A7A7'} : {backgroundColor: '#018C0D'}}>
                        리뷰 등록
                    </button>
                </S.ButtonSection>
            </S.Content>
        </S.Wrapper> 
    );
}

export default Review;