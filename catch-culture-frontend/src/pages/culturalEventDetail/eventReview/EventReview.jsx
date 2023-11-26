import * as S from './style.jsx';
import { useEffect, useState } from 'react';
import { TbMessageOff } from 'react-icons/tb';

import ReviewCard from '../../../components/ReviewCard/ReviewCard';
import SortSelector from '../../../components/sortSelector/SortSelector.jsx';

import axios from '../../../api/axios'
import { useNavigate } from 'react-router-dom';

function EventReview ( params ) {

    const [myData, setMyData] = useState();
    const [starCount, setStarCount] = useState([0, 0, 0, 0, 0]);
    const [starAvg, setStarAvg] = useState(0.0);

    let countReviewList = 10;
    const [reviewList, setReviewList] = useState([]);
    const navigate = useNavigate();

    // 정렬 상태
    const [selectedSort, setSelectedSort] = useState(0);

    // 정렬 옵션
    const options = [
        { value: 1, label: 'RECENT', name: '최신순' },
        { value: 2, label: 'VIEW_COUNT', name: '조회순' },
        { value: 3, label: 'LIKE', name: '좋아요순' },
    ];

    useEffect(() => {
        fetchData();
        getStar();
        fetchReviewList();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(
                `review/${parseInt(params.data.EventId)}/my-review`
            )
                
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
                });
            }
        } catch (e) {
            console.log(e);
        }
    }

    const getStar = async () => {
        try {
            const response = await axios.get(
                `review/${parseInt(params.data.EventId)}/rating`
            );
            setStarCount([response.data.countOne, response.data.countTwo, response.data.countThree, response.data.countFour, response.data.countFive]);
            setStarAvg(response.data.avgRating);
        } catch (e) {
            console.log(e);
        }
    }

    const fetchReviewList = async () => {
        try {
            const response = await axios.get(
                `review/${parseInt(params.data.EventId)}/list?lastId=${countReviewList}`
            );
            setReviewList(response.data);
        } catch (e) {
            console.log(e);
        }
    }

    // 카테고리 한글로 변환
    const printCategory = (category) => {
        switch(category) {
            case "POPUP-STORE" : return "팝업 스토어";
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

    const printAvgStar = (starAvg) => {
        return(
            <>
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
                <S.StarCountArea>
                    <S.InActiveStar style={{width:"30px", height:"30px"}}/>
                    <S.AvgStar rating={starAvg-5}/>
                </S.StarCountArea>

                <S.printRating>
                    {starAvg} / 5.0
                </S.printRating>
            </>
        )
    };

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

    const onClickReviewButton = () => {
        navigate(`/event/${params.data.EventId}/review`)
    }

    return (
        <S.EventInfo>
            {/* 행사 제목 */}
            <S.TitleArea>
                {params.data.title}
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
                    <ReviewCard data = {myData} />
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
                            return(
                                info.storedFileUrl == null ? "" : <S.RvImg src={info.storedFileUrl} />
                            )
                        })
                    }
                </S.PictureArea>
            </S.MiddleContent>

            <S.SelectorWrapper>
                <SortSelector
                    options={options}
                    selectedSort={selectedSort}
                    setSelectedSort={setSelectedSort}
                />
            </S.SelectorWrapper>

            {
                reviewList.map((info) => {
                    return (
                        <ReviewCard key={info.id} data={{
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
                            "isMyReview": false,
                        }}/>
                    )
                })
            }

        </S.EventInfo>
    );
}

export default EventReview;