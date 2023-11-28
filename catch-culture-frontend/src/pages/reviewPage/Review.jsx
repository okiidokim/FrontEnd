import * as S from './style.jsx';
import { useEffect, useState } from 'react';

import Backitem from '../../components/Backitem.jsx';
import UploadBox from '../../components/uploadImg/UploadBox.jsx';

import SetRating from './setRating/SetRating.jsx';

// api
import axios from '../../api/axios';
import { TbRating18Plus } from 'react-icons/tb';

function Review ( params ) {
    let title = "test"; // params.data.title
    let eventId = "10"; //params.data.eventId

    const [disabled, setDisabled] = useState(false);
    
    const [rating, setRating] = useState();
    const [formData, setFormData] = useState();
    const [description, setDescription] = useState("");

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

                    const reviewDetail = new FormData();
                    let data = new Object();
                    // reviewDetail.append("description", description);
                    // reviewDetail.append("rating", rating);
                    data.description = description;
                    data.rating = rating;
                    
                    
                    let des = `description: ${description}`;
                    let rat = `rating: ${rating}`;
                    // formData.append("reviewDetail", new Blob([des, rat], { type: 'application/json' }));
                    formData.append("reviewDetail", JSON.stringify(data), );
                     for (var key of formData.entries()) {
                         console.log(key[0] + ', ' + key[1]);
                     }
                     console.log(JSON.stringify(data))
                     console.log(formData.get('reviewDetail'))
                     
                
                    const request = await axios.post(
                        `review/${parseInt(eventId)}/my-review`,
                        // {
                            formData,
                            // file: formData.get('file'),
                            // reviewDetail: reviewDetail.get('description')
                        // },
                        {
                            headers: [{
                                'Content-Type': 'multipart/form-data',
                            }],
                        }
                    )
                    console.log(request);
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