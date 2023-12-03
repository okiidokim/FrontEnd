import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as S from './VisitAuthStyle';
import Backitem from '../../components/Backitem';

import axios from '../../api/axios';

function VisitAuth() {
    const params = useParams();
    const navigate = useNavigate();
    const eventId = params.id;

    const [title, setTitle] = useState();
    const [imageSrc1, setImageSrc1] = useState();
    const [imageSrc2, setImageSrc2] = useState();
    const [imageSrc3, setImageSrc3] = useState();
    const [imagefiles, setImagefiles] = useState();

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

    const handleImgFile = (file) => {
        setImagefiles(file);
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
            const requestBody = new FormData();
            
            requestBody.append('eventId', eventId);
            requestBody.append('fileList', imagefiles);
            //  for (var key of requestBody.entries()) {
            //      console.log(key[0] + ', ' + key[1]);
            //  }

            try {
                const request = await axios({
                    method: "POST",
                    url: `cultural-event/visit-auth`,
                    mode: "cors",
                    headers: {
                        'Content-Type': 'multipart/form-data',     
                    },
                    data: requestBody,
                }).then(
                    console.log(requestBody),
                    navigate(`/event/${eventId}`)
                )

            } catch (e) {
                console.log(e);
            }
    }

    const ImgSvg = (size) => (
        <svg xmlns="http://www.w3.org/2000/svg" width={size.size} height={size.size} viewBox="0 0 38 38" fill="none">
            <g clipPath="url(#clip0_1_1302)">
                <path d="M33.25 30.0833V7.91667C33.25 6.175 31.825 4.75 30.0833 4.75H7.91667C6.175 4.75 4.75 6.175 4.75 7.91667V30.0833C4.75 31.825 6.175 33.25 7.91667 33.25H30.0833C31.825 33.25 33.25 31.825 33.25 30.0833ZM13.4583 21.375L17.4167 26.1408L22.9583 19L30.0833 28.5H7.91667L13.4583 21.375Z" fill="#A7A7A7"/>
            </g>
            <defs>
                <clipPath id="clip0_1_1302">
                    <rect width="38" height="38" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    );

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
        
        switch(file.length) {
            case 3: reader3.readAsDataURL(file[2]);
                    handleImgFile(file[2], 2);
            case 2: reader2.readAsDataURL(file[1]);
                    handleImgFile(file[1], 1);
            case 1: reader1.readAsDataURL(file[0]);
                    handleImgFile(file[0], 0); 
                    break;
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