import Layout from '../components/layout';
import '../css/pages/aboutUs.css';

const AboutUs = () => {
    return (
        <Layout>
            <div className="aboutUsContainer">
                <div className="title">About us</div>
                <div className="subTitle">
                    당신의 손글씨로 폰트를 제작해드립니다.
                </div>
                <div className="teamContainer">
                    <div className="teamBox">
                        <img src="WongukJung.png" alt="WongukJung.png" />
                        <div className="name">
                            <p>Wonguk Jung</p>
                        </div>
                        <div className="info">
                            <p>Team Lead & ML</p>
                            <ul>
                                <li>Konkuk univ</li>
                                <li>Naver Boost Camp</li>
                                <li>Github</li>
                            </ul>
                        </div>
                    </div>
                    <div className="teamBox">
                        <img src="YeongSeopSong.png" alt="YeongSeopSong.png" />
                        <div className="name">
                            <p>YeongSeop Song</p>
                        </div>
                        <div className="info">
                            <p>ML Engineer</p>
                            <ul>
                                <li>Busan univ</li>
                                <li>Naver Boost Camp</li>
                                <li>Github</li>
                            </ul>
                        </div>
                    </div>
                    <div className="teamBox">
                        <img src="HoJunShin.png" alt="HoJunShin.png" />
                        <div className="name">
                            <p>HoJun Shin</p>
                        </div>
                        <div className="info">
                            <p>ML Engineer</p>
                            <ul>
                                <li>Yonsei univ</li>
                                <li>CV Engineer</li>
                                <li>Github</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default AboutUs;
