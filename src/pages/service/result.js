import { useLocation } from 'react-router-dom';
import ServiceLayout from '../../components/service/serviceLayout';
import '../../css/pages/service/result.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as reqularFaStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as solidFaStar } from '@fortawesome/free-solid-svg-icons';

const Result = () => {
    const { state } = useLocation();
    const { uuid} = state;
    
    const [image, setImage] = useState();
    const [hovered, setHovered] = useState(null);
    const [clickedNum, setClickedNum] = useState(null);
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        const getImage = async () => {
            const imageData = await axios.get(`http://localhost:5432/example_image/${uuid}`).then(res=> res)
            const {status, image_path} = imageData
            if ( status == "success") {
                setImage(image_path)
                console.log(image_path)
            }
            

        }

        getImage()
    }, [])


    useEffect(()=> {
        console.log(clickedNum)
    }, [clickedNum])

    const handleMouseEnter = (el) => {
        if (!clicked) {
            setHovered(el)
        } 
    }

    const handleMouseLeave = () => {
        if (!clicked) {
            setHovered(null)
        }
    }

    const goToFetch = async(el) => {
        if (clicked) return

        setClickedNum(el);
        setClicked(true)
        console.log(el)
        const res = await axios.put(`http://localhost:5432/feedback/${uuid}`,
                                    {feedback : String(el)}, 
                                    { header: {
                                        'accept': 'application/json',
                                        'Content-Type': 'application/x-www-form-urlencoded'
                                    }}).then((res)=> res.data)
        console.log(res)
      };

    return (
        <ServiceLayout step={4}>
            <div className="resultContainer">
                <p className="resultTitle">
                    24시간 뒤에 메일을 확인해보세요. 입력하신 메일로 폰트 파일을
                    보내드립니다.
                </p>
                <div className="resultItemContainer">
                    <div className="resultItemBox">
                        <p className="resultItemTitle">폰트 예시 이미지 1</p>
                        <div className="resultItem">
                            <div className="resultItemTime">
                                <p>Inference Time </p>
                                <p>1.2s</p>
                            </div>
                            <img src="../preview.png" alt="preview" />
                        </div>
                        <div className="resultItemBtnBox">
                            <button>Download</button>
                        </div>
                        <div className="ratingContainer">
                            <p>사용자 평점 :</p>
                            <div className="starBox"> {[1, 2, 3, 4, 5].map(el => (
                                        <div  id={el}
                                        onMouseEnter={() => handleMouseEnter(el)}
                                        onMouseLeave={() => handleMouseLeave()}
                                        onClick={()=>goToFetch(el)}
                                        key={el}>
                                            {(clicked >= el) | (hovered >= el) ? <FontAwesomeIcon icon={solidFaStar} size='2xl' color={"#f2eb1c"} />: <FontAwesomeIcon icon={reqularFaStar} size='2xl'/>}
                                            </div>
                                    ))}</div>
                        </div>
                    </div>
                    {/* <div className="resultItemBox">
                        <p className="resultItemTitle">폰트 예시 이미지 1</p>
                        <div className="resultItem">
                            <div className="resultItemTime">
                                <p>Inference Time </p>
                                <p>1.2s</p>
                            </div>
                            <img src="../preview.png" alt="preview" />
                        </div>
                        <div className="resultItemBtnBox">
                            <button>Download</button>
                        </div>
                    </div>
                    <div className="resultItemBox">
                        <p className="resultItemTitle">폰트 예시 이미지 1</p>
                        <div className="resultItem">
                            <div className="resultItemTime">
                                <p>Inference Time </p>
                                <p>1.2s</p>
                            </div>
                            <img src="../preview.png" alt="preview" />
                        </div>
                        <div className="resultItemBtnBox">
                            <button>Download</button>
                        </div>
                    </div> */}
                </div>
            </div>
        </ServiceLayout>
    );
};

export default Result;
