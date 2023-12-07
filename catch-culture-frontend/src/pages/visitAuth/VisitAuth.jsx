import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as S from './VisitAuthStyle';
import Backitem from '../../components/Backitem';

import axios from '../../api/axios';
import ImgSvg from '../../components/imgSvg/ImgSvg';

function VisitAuth() {
    const params = useParams();
    const navigate = useNavigate();
    const eventId = params.id;

    const [title, setTitle] = useState("");
    const [imageSrc1, setImageSrc1] = useState();
    const [imageSrc2, setImageSrc2] = useState();
    const [imageSrc3, setImageSrc3] = useState();
    const [imagefiles, setImagefiles] = useState();

    const [isMoreTitle, setIsMoreTitle] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async() => {
        
        try{
            const response = await axios.get(
                `cultural-event/${parseInt(params.id)}/title`
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

    const handleImgFile = (file) => {
        setImagefiles(file);
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
            const requestBody = new FormData();
            
            requestBody.append('eventId', eventId);
            requestBody.append('fileList', imagefiles);

            try {
                await axios({
                    method: "POST",
                    url: `cultural-event/visit-auth`,
                    mode: "cors",
                    headers: {
                        'Content-Type': 'multipart/form-data',     
                    },
                    data: requestBody,
                }).then(
                    navigate(`/event/${eventId}`)
                )

            } catch (e) {
                if(e.response.data.code === "LOGIN_FAIL") {
                    alert('로그인 만료! 다시 로그인 해주세요.');
                    navigate(`/`);
                }
                if(e.response.data.code === "ALREADY_VISIT_AUTH_SUBMITTED") {
                    alert('이미 방문인증 요청을 했습니다.');
                    navigate(`/event/${eventId}`);
                }
            }
    }

    const onUpload = (e) => {
        // 사진 출력용
        const file = e.target.files;
        
        if(!file[0]) return;
        if ((file.length) > 3) {
            return alert('최대 3개 사진만 첨부할 수 있습니다.')
        }

        const reader1 = new FileReader();
        const reader2 = new FileReader();
        const reader3 = new FileReader();

        setImageSrc1(null);
        setImageSrc2(null);
        setImageSrc3(null);
        handleImgFile(null);
        
        if (file.length >= 1) {
            reader1.readAsDataURL(file[0]);
            handleImgFile(file[0]);
        }
        
        if (file.length >= 2) {
            reader2.readAsDataURL(file[1]);
            handleImgFile(file[1]);
        }
        
        if (file.length >= 3) {
            reader3.readAsDataURL(file[2]);
            handleImgFile(file[2]);
        }
        
        return new Promise((resolve) => {
            reader1.onload = () => {
                setImageSrc1(reader1.result);
            }
            reader2.onload = () => {
                setImageSrc2(reader2.result);
            }
            reader3.onload = () => {
                setImageSrc3(reader3.result);
            }
            resolve();
        });
    };

    return (
        <S.Wrapper>
            <Backitem/>

            <S.Container onSubmit={handleSubmit}>
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
                <S.SubTitle>
                    사진 등록 (최대 3개)
                </S.SubTitle>
                
                <S.ImageArea>
                    <S.Label>
                        <S.Input 
                            accept="image/*"
                            type="file"
                            multiple
                            onChange={e => onUpload(e)}>
                        </S.Input>
                        <ImgSvg size={38}/>
                        <S.InfoText>이미지 업로드</S.InfoText>
                    </S.Label>

                    <S.ThumbnailArea>
                        {imageSrc1 == null ? <ImgSvg size={100}/> : <img src={imageSrc1} style={{maxWidth:100, maxHeight:100, borderRadius:'8px'}} />}
                        {imageSrc2 == null ? <ImgSvg size={100}/> : <img src={imageSrc2} style={{maxWidth:100, maxHeight:100, borderRadius:'8px'}} />}
                        {imageSrc3 == null ? <ImgSvg size={100}/> : <img src={imageSrc3} style={{maxWidth:100, maxHeight:100, borderRadius:'8px'}} />}
                    </S.ThumbnailArea>
                </S.ImageArea>

                <S.ButtonArea>           
                    <button type='submit' disabled={imagefiles==null} style={ imagefiles == null ? {backgroundColor: '#A7A7A7'} : {backgroundColor: '#018C0D'}}>
                        방문 인증 요청
                    </button>
                </S.ButtonArea>
            </S.Container>  
        </S.Wrapper>
    )
}
export default VisitAuth;