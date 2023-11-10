// import { useLocation } from 'react-router-dom';
import ServiceLayout from '../../components/service/serviceLayout';
import '../../css/pages/service/result.css';

const Result = () => {
    // const { state } = useLocation();

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
                    </div>
                </div>
            </div>
        </ServiceLayout>
    );
};

export default Result;
