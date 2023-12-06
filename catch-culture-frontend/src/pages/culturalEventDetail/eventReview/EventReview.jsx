import * as S from './style.jsx';
import { useEffect, useState, useMemo } from 'react';
import { TbMessageOff } from 'react-icons/tb';

import ReviewCard from '../../../components/ReviewCard/ReviewCard';

import axios from '../../../api/axios'
import { useNavigate } from 'react-router-dom';

function EventReview ( params ) {
    const navigate = useNavigate();

    const [myData, setMyData] = useState();
    const [starCount, setStarCount] = useState([0, 0, 0, 0, 0]);
    const [starAvg, setStarAvg] = useState(0.0);
    const [isLoading, setIsLoading] = useState(false);
    const [reviewList, setReviewList] = useState([]);

    const [isShowMoreTitle, setIsShowMoreTitle] = useState(false); // 행사 설명 더보기 스위치

    // 리뷰 더 있는지 판별
    let countReviewList = 0;
    let isLast = false;

    // 글자 수 제한
    const titleLimit = 14;
    const showMoreTitleContent = isShowMoreTitle ? '' : ' ...';

    useEffect(() => {
        fetchMyReview();
        fetchStar();
        fetchReviewList();
        window.addEventListener('scroll', handleScroll, {capture:true});
        return () => {
            window.removeEventListener('scroll', handleScroll); //clean up
        };
    }, []);

    const fetchMyReview = async () => {
        setMyData(null);
        try {
            const response = await axios.get(
                `review/${parseInt(params.data.EventId)}/my-review`
            )

            if(response.status === 200) {
                if(response.data != "") {
                    setMyData({
                        "id": params.data.EventId,
                        "nickname": response.data.nickname,
                        "description": response.data.description,
                        "storedFileUrl": response.data.storedFileUrl,
                        "rating": response.data.rating,
                        "createdAt": response.data.createdAt,
                        "eventImgUrl" : null,
                        "eventTitle": null,
                        "isMyReview": true,
                        "reviewId": response.data.id,
                    });
                }
            }
        } catch (error) {
            if(e.response.data.code === "LOGIN_FAIL") {
                alert('로그인 만료! 다시 로그인 해주세요.');
                navigate(`/`);
            }
            if(e.response.data.code === "ALREADY_LIKE" || e.response.data.code === "NOT_LIKE") {
                alert('좋아요 오류 발생! 페이지를 다시 로딩합니다.');
                navigate(0);
            }
        }
    }

    const fetchStar = async () => {
        try {
            const response = await axios.get(
                `review/${parseInt(params.data.EventId)}/rating`
            );
            setStarCount([response.data.countOne, response.data.countTwo, response.data.countThree, response.data.countFour, response.data.countFive]);
            setStarAvg(response.data.avgRating);
        } catch (e) {
            if(e.response.data.code === "LOGIN_FAIL") {
                alert('로그인 만료! 다시 로그인 해주세요.');
                navigate(`/`);
            }
        }
    }

    const fetchReviewList = async () => {
        try {
            
            const response = await axios.get(
                `review/${parseInt(params.data.EventId)}/list?lastId=${countReviewList}`
            )
            

            if(response.status === 200) {
                
                if(!response.data.empty) {
                    // response.data 값이 [{},{},{}] 형식으로 되어있음
                    // -> []를 지운 값을 추가
                    
                    for(let i = 0; i < response.data.content.length; i++) {
                        reviewList.push(response.data.content[i]);
                    }
                    
                    isLast = response.data.last;
                    
                    countReviewList = reviewList[reviewList.length-1].id;
                }
            }
        } catch (e) {
            console.log(e);
            if(e.response.data.code === "LOGIN_FAIL") {
                alert('로그인 만료! 다시 로그인 해주세요.');
                navigate(`/`);
            }
        } 
        setIsLoading(false);
    }

    const handleMoreReview = () => {
        setIsLoading(true);
        fetchReviewList();
    }

    // 글자 자르기
    const getTitle = useMemo(() => {
        if (params.data.title.length > titleLimit) {
            if (isShowMoreTitle)
                return params.data.title;
            else
                return params.data.title.slice(0, titleLimit);
        }
        return params.data.title;
    }, [isShowMoreTitle]);

    // 카테고리 한글로 변환
    const printCategory = (category) => {
        switch(category) {
            case "POPUP_STORE" : return "팝업 스토어";
            case "FESTIVAL" : return "축제";
            case "TRADITIONAL_MUSIC" : return "국악";
            case "ORCHESTRA_CLASSIC" : return "오케스트라 / 클래식";
            case "RECITAL" : return "독주 / 독창회";
            case "DANCE" : return "무용";
            case "CONCERT" : return "콘서트";
            case "MOVIE" : return "영화";
            case "THEATER" : return "연극";
            case "MUSICAL_OPERA" : return "오페라 / 뮤지컬";
            case "EDUCATION_EXPERIENCE" : return "교육 / 체험";
            case "EXHIBITION_ART" : return "전시 / 미술";
            default : return "기타";
        }
    }

    // 별점 평균 출력
    const printAvgStar = (starAvg) => {
        return(
            <>
                <S.StarCountArea>
                    <S.InActiveStar style={{width:"30px", height:"30px"}}/>
                    <S.AvgStar rating={starAvg-0}/>
                </S.StarCountArea>
                <S.StarCountArea>
                    <S.InActiveStar style={{width:"30px", height:"30px"}}/>
                    <S.AvgStar rating={starAvg-1}/>
                </S.StarCountArea>
                <S.StarCountArea>
                    <S.InActiveStar style={{width:"30px", height:"30px"}}/>
                    <S.AvgStar rating={starAvg-2}/>
                </S.StarCountArea>
                <S.StarCountArea>
                    <S.InActiveStar style={{width:"30px", height:"30px"}}/>
                    <S.AvgStar rating={starAvg-3}/>
                </S.StarCountArea>
                <S.StarCountArea>
                    <S.InActiveStar style={{width:"30px", height:"30px"}}/>
                    <S.AvgStar rating={starAvg-4}/>
                </S.StarCountArea>

                <S.printRating>
                    {starAvg} / 5.0
                </S.printRating>
            </>
        )
    };

    // 별점 갯수 출력
    const printStar = (rating) => {
        switch (rating) {
          case 0:
            return (
              <div>
                <S.InActiveStar />
                <S.InActiveStar />
                <S.InActiveStar />
                <S.InActiveStar />
                <S.InActiveStar />
              </div>
            );
          case 1:
            return (
              <div>
                <S.ActiveStar />
                <S.InActiveStar />
                <S.InActiveStar />
                <S.InActiveStar />
                <S.InActiveStar />
              </div>
            );
          case 2:
            return (
              <div>
                <S.ActiveStar />
                <S.ActiveStar />
                <S.InActiveStar />
                <S.InActiveStar />
                <S.InActiveStar />
              </div>
            );
          case 3:
            return (
              <div>
                <S.ActiveStar />
                <S.ActiveStar />
                <S.ActiveStar />
                <S.InActiveStar />
                <S.InActiveStar />
              </div>
            );
          case 4:
            return (
              <div>
                <S.ActiveStar />
                <S.ActiveStar />
                <S.ActiveStar />
                <S.ActiveStar />
                <S.InActiveStar />
              </div>
            );
          case 5:
            return (
              <div>
                <S.ActiveStar />
                <S.ActiveStar />
                <S.ActiveStar />
                <S.ActiveStar />
                <S.ActiveStar />
              </div>
            );
        }
    };

    // 리뷰하기 버튼 클릭
    const onClickReviewButton = () => {
        navigate(`/event/${params.data.EventId}/review`)
    }

    // 스크롤 판별
    const handleScroll = () => {
        if(window.innerHeight + document.documentElement.scrollTop <= document.documentElement.offsetHeight-1 || isLoading || isLast) {
            return;
        }
        handleMoreReview();
    };

    return (
        <S.EventInfo>
            {/* 행사 제목 */}
            <S.TitleArea onClick={() => setIsShowMoreTitle(!isShowMoreTitle)}>
                { getTitle }
                {/* 더보기 버튼 */}
                <span style={{color:'grey'}}>
                    {params.data.title.length > titleLimit ? showMoreTitleContent : null}
                </span>
            </S.TitleArea>

            {/* 카테고리 영역 */}
            <S.CategoryArea>
                {printCategory(params.data.category)}
            </S.CategoryArea>

            {/* 방문인증 여부 */}
            <S.AuthArea style={ params.data.isAuthenticated ? {color: '#018C0D'} : {color: 'red'}}>
                {params.data.isAuthenticated ? '방문 인증 완료' : '방문 인증 미완료'}
            </S.AuthArea>
            
            <S.MyArea>
                <S.subTitle>내 리뷰</S.subTitle>
                {myData == undefined ? 
                    <>
                        <TbMessageOff size="80" color="018c0d" />
                        <S.NoResultTitle>리뷰 작성 내역이 없습니다.</S.NoResultTitle>
                    </>
                    : 
                    <ReviewCard data = {myData} fetchMyReview = {fetchMyReview} />
                }

                <S.ReviewButton 
                    disabled={!(params.data.isAuthenticated && myData == undefined)}
                    style={!(params.data.isAuthenticated && myData == undefined) ? {backgroundColor: '#A7A7A7'} : {backgroundColor: '#018C0D'}}
                    onClick={onClickReviewButton}
                >
                    리뷰 작성
                </S.ReviewButton>

                {!params.data.isAuthenticated && (
                    <S.authNotification>
                        *리뷰 작성을 위해 방문 인증이 필요합니다.
                    </S.authNotification>
                )}

            </S.MyArea>

            <S.AvgStarArea>
                {printAvgStar(starAvg)}
            </S.AvgStarArea>

            <S.MiddleContent>
                <S.StarArea>
                    <S.RateArea>
                        {printStar(5)}
                        {starCount[4]}
                    </S.RateArea>
                    <S.RateArea>
                        {printStar(4)}
                        {starCount[3]}
                    </S.RateArea>
                    <S.RateArea>
                        {printStar(3)}
                        {starCount[2]}
                    </S.RateArea>
                    <S.RateArea>
                        {printStar(2)}
                        {starCount[1]}
                    </S.RateArea>
                    <S.RateArea>
                        {printStar(1)}
                        {starCount[0]}
                    </S.RateArea>
                </S.StarArea>
                <S.PictureArea>
                    {
                        reviewList.map((info) => {
                            if (info.storedFileUrl == null) {
                                return null; // or any other default value if needed
                            }
                        
                            return (
                                <S.RvImg key={info.index} src={info.storedFileUrl} />
                            );
                        })
                    }
                </S.PictureArea>
            </S.MiddleContent>

            {
                reviewList.map((info) => {
                    return (
                        <ReviewCard key={info.index+"key"} data={{
                            "id": params.data.eventId,
                            "nickname": info.nickname,
                            "description": info.description,
                            "storedFileUrl": [
                                info.storedFileUrl,
                            ],
                            "rating": info.rating,
                            "createdAt": info.createdAt,
                            "eventImgUrl" : null,
                            "eventTitle": null,
                            "reviewId" : info.id,
                            "isMyReview": false,
                        }}/>
                    )
                })
            }

        </S.EventInfo>
    );
}

export default EventReview;