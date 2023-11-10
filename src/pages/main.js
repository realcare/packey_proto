import '../css/pages/main.css';
import Layout from '../components/layout';
import { useNavigate } from 'react-router-dom';

function Main() {
    const navigate = useNavigate();
    const serviceStart = () => {
        navigate('/service');
    };
    return (
        <Layout>
            <div className="container">
                <div className="section">
                    <div className="left infoTextBox">
                        <div className="info">
                            <p>
                                <span>Diffusion AI</span>를 통해
                            </p>
                            <p>
                                단 <span>한개</span>의 글자 만으로
                            </p>
                            <p>폰트를 만드려 드립니다.</p>
                        </div>
                        <div className="sub">
                            <p>
                                단 한글자로 나만의 글씨체 폰트를 만들 수 있어요.
                            </p>
                            <p> (메일로 하루 뒤에 폰트 파일을 보내드립니다.)</p>
                        </div>
                    </div>
                    <div>
                        <img
                            className="writeTextImage"
                            src="writeText.png"
                            alt="writeText"
                        />
                    </div>
                </div>
                <div className="section">
                    <iframe
                        src="https://www.youtube.com/embed/6wJepYuiznU"
                        title="YouTube video player"
                        className="youtubePlayer"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    ></iframe>
                    <div className="right infoTextBox">
                        <div className="info">
                            <p>서비스 이용해보기</p>
                        </div>
                        <div className="sub">
                            <p>나만의 글씨체 폰트를 쉽게 만들고</p>
                            <p>해당 폰트를 사용하여 샘플 시를 확인해 보세요.</p>
                        </div>
                        <div className="serviceBtnBox">
                            <button
                                className="serviceBtn"
                                onClick={serviceStart}
                            >
                                서비스 시작하기
                            </button>
                        </div>
                    </div>
                </div>
                <div className="section lowBottom">
                    <div className="left infoTextBox">
                        <div className="info">
                            <p>기술소개영상</p>
                        </div>
                    </div>
                    <iframe
                        src="https://www.youtube.com/embed/6wJepYuiznU"
                        title="YouTube video player2"
                        className="youtubePlayer"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    ></iframe>
                </div>
            </div>
        </Layout>
    );
}

export default Main;
