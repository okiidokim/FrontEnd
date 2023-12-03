import * as S from './style.jsx';
import { useEffect, useState } from 'react';

import Backitem from '../../components/Backitem.jsx';
import UploadBox from '../../components/uploadImg/UploadBox.jsx';

import SetRating from './setRating/SetRating.jsx';

// api
import axios from '../../api/axios';
import { useNavigate, useParams } from 'react-router-dom';

function Review ( ) {
    const params = useParams();
    const eventId = params.id;
    
    const [title, setTitle] = useState("title");
    const [rating, setRating] = useState();
    const [imageData, setImageData] = useState();
    const [description, setDescription] = useState("");

    const [isMoreTitle, setIsMoreTitle] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async() => {
        
        const response = await axios.get(
            `cultural-event/${parseInt(params.id)}/title`
        )

        setTitle(response.data);
    }

    const navigate = useNavigate();

    const handleRating = (rating) => {
        setRating(rating);
    }

    const handleImgFile = (file) => {
        setImageData(file);
    }

    const handleDescription = ({ target: {value}}) => {
        setDescription(value);
    }
    
    const handleSubmit = async(event) => {
        if(description.length < 30 || imageData == null || rating == 0) {

        } else {
            try {
                if(!(imageData === null)) {
                    let data = {
                        description: description,
                        rating: rating
                    }

                    const requestBody = new FormData();
                    
                    requestBody.append('file', imageData);
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
                        console.log(requestBody),
                        navigate(`/event/${eventId}`)
                    )
                    
                }
            } catch (e) {
                console.log(e);
            }
        }
    }

    return (
        <S.Wrapper>
            <Backitem />
            
            <S.Content onSubmit={handleSubmit}>
                {/* 행사 제목 */}
                <S.TitleArea>
                    {title == null ? 
                        title
                        :
                        (
                            title.length < 14 ? 
                            title 
                            :
                            <div onClick={() => setIsMoreTitle(!isMoreTitle)}>
                                {!isMoreTitle && `${title.slice(0, 14)}...`}
                                {isMoreTitle && title}
                            </div>
                        )
                    }
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
                    <button type='submit' style={ description.length < 30 || imageData == null || rating == 0 ? {backgroundColor: '#A7A7A7'} : {backgroundColor: '#018C0D'}}>
                        리뷰 등록
                    </button>
                </S.ButtonSection>
            </S.Content>
        </S.Wrapper> 
    );
}

export default Review;