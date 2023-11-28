import React, { useMemo, useState } from 'react';
import * as S from './style';

/********************************************************
 * @param {                                             *
 *    부모 컴포넌트 선언                                 *
 *    const [imageData, setImageData] = useState();     *
 *    handleImageFile = () => {                         *
 *      setImageData(file);                             *
 *    }                                                 *
 *                                                      *
 *  호출 형식                                           *
 *  <UploadBox setFile={handleImageFile}/>              *
 *  setFile은 고정                                      *
 *  handleImageFile은 값 추가하는 함수                   *
 * }                                                    *
 ********************************************************/

const UploadBox = params => {
  const [imageSrc, setImageSrc] = useState(null);

  const ImgSvg = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="38"
      height="38"
      viewBox="0 0 38 38"
      fill="none"
    >
      <g clipPath="url(#clip0_1_1302)">
        <path
          d="M33.25 30.0833V7.91667C33.25 6.175 31.825 4.75 30.0833 4.75H7.91667C6.175 4.75 4.75 6.175 4.75 7.91667V30.0833C4.75 31.825 6.175 33.25 7.91667 33.25H30.0833C31.825 33.25 33.25 31.825 33.25 30.0833ZM13.4583 21.375L17.4167 26.1408L22.9583 19L30.0833 28.5H7.91667L13.4583 21.375Z"
          fill="#A7A7A7"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_1302">
          <rect width="38" height="38" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );

  const onUpload = e => {
    // 부모 컴포넌트 전송용
    params.setFile(e.target.files[0]);

    // 사진 출력용
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    return new Promise(resolve => {
      reader.onload = () => {
        setImageSrc(reader.result || null);
        resolve();
      };
    });
  };

  const showImage = useMemo(() => {
    if (imageSrc) {
      return (
        <img
          src={imageSrc}
          style={{ Width: '100%', maxHeight: '200px', borderRadius: '8px' }}
        />
      );
    } else {
      return (
        <>
          <ImgSvg />
          <S.InfoText>이미지 업로드</S.InfoText>
        </>
      );
    }
  }, [imageSrc]);

  return (
    <div>
      <S.Label>
        <S.Input
          accept="image/*"
          type="file"
          multiple
          onChange={e => onUpload(e)}
        ></S.Input>
        {showImage}
      </S.Label>
    </div>
  );
};

export default UploadBox;
