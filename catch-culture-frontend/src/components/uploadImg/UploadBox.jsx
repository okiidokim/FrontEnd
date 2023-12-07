import React, { useMemo, useState } from 'react';
import * as S from './style';

import ImgSvg from '../imgSvg/ImgSvg';

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
          <ImgSvg size={38}/>
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
