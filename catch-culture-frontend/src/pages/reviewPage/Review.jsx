import * as S from './style.jsx';
import { useEffect, useState } from 'react';

import Backitem from '../../components/Backitem.jsx';
import UploadBox from '../../components/uploadImg/UploadBox.jsx';

import SetRating from './setRating/SetRating.jsx';

// api
import axios from '../../api/axios';
import { useNavigate, useParams } from 'react-router-dom';

function Review () {
    const navigate = useNavigate();
    const params = useParams();
    const eventId = params.id;
    
    const [title, setTitle] = useState("title");
    const [rating, setRating] = useState(0);
    const [imageData, setImageData] = useState();
    const [description, setDescription] = useState("");

    const [isMoreTitle, setIsMoreTitle] = useState(false); // 행사 제목 더보기 스위치

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async() => {
        try{
            const response = await axios.get(
                `cultural-event/${params.id}/title`
            )

            setTitle(response.data);
        } catch(e) {
            if(e.response.data.code === "LOGIN_FAIL") {
                alert('로그인 만료! 다시 로그인 해주세요.');
                navigate(`/`);
            }
            if(e.response.data.code === "INVALID_EVENT_ID") {
                alert("존재하지 않는 문화 행사 ID 입니다.");
                navigate(`/main`);
            }
        }
    }   

    const handleRating = (rating) => {
        setRating(rating);
    }

    const handleImgFile = (file) => {
        setImageData(file);
    }

    const handleDescription = ({ target: {value}}) => {
        setDescription(value);
    }
    
    const handleSubmit = async() => {
        if(description.length < 30 || imageData == null || rating == 0) {
            console.log(" ");
        } else {
            try {
                if(imageData !== null) {
                    let data = {
                        description: description,
                        rating: rating
                    }

                    const requestBody = new FormData();
                    
                    requestBody.append('fileList', imageData);
                    requestBody.append('reviewDetail', new Blob([JSON.stringify(data)], { type: "application/json" }));
                    
                    await axios({
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
                if(e.response.data.code === "ALREADY_REVIEW") {
                    alert("이미 리뷰를 작성한 문화 행사 입니다.");
                }
                else if(e.response.data.code === "LOGIN_FAIL") {
                    alert('로그인 만료! 다시 로그인 해주세요.');
                    navigate(`/`);
                }
                else if(e.response.data.code === "INVALID_EVENT_ID") {
                    alert("존재하지 않는 문화 행사 ID 입니다.");
                    navigate(`/main`);
                }
                else if(e.response.data.code === "INVALID_REVIEW_RATING") {
                    alert("리뷰 평점을 선택해 주세요.");
                }
                else if(e.response.data.code === "INVALID_VISIT_AUTH_ID" || e.response.data.code === "NOT_AUTHENTICATED") {
                    alert("리뷰 작성을 위해 방문 인증을 해주세요");
                    navigate(`/event/${eventId}/visit`);
                }
            }
        }
    }

    return (
        <S.Wrapper>
            <Backitem />
            
            <S.Content onSubmit={handleSubmit}>
                {/* 행사 제목 */}
                <S.TitleArea>
                    {
                        title && title.length < 14 ? 
                        title 
                        :
                        <div 
                            onClick={() => setIsMoreTitle(!isMoreTitle)}
                            onKeyDown={() => setIsMoreTitle(!isMoreTitle)}
                        >
                            {!isMoreTitle && `${title.slice(0, 14)}...`}
                            {isMoreTitle && title}
                        </div>
                    }
                </S.TitleArea>

                <SetRating setRating={handleRating} required/>

                <S.SubTitle>사진 등록</S.SubTitle>
                <UploadBox setFile={handleImgFile} required/>

                <S.SubTitle>리뷰 등록</S.SubTitle>
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