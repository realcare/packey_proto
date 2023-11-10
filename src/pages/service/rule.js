import { useLocation, useNavigate } from 'react-router-dom';
import ServiceLayout from '../../components/service/serviceLayout';
import { useEffect } from 'react';
import ButtonsLayout from '../../components/service/buttonsLayout';
import '../../css/pages/service/rule.css';

const Rule = () => {
    const navigate = useNavigate();
    const { state } = useLocation();

    useEffect(() => {
        if (!state || !state.email) {
            alert('비정상적인 접근입니다.');
            navigate('/service', { replace: true });
        }
    }, [navigate, state]);

    const prev = () => {
        navigate('/service', { state: { email: state.email }, replace: true });
    };

    const next = () => {
        navigate('/service/upload', {
            state: { email: state.email },
        });
    };

    return (
        <ServiceLayout step={2}>
            <div className="ruleContainer">
                <div className="ruleInfoBox">
                    <div className="ruleInfoTitle">
                        <p>손글씨 준비하기</p>
                    </div>
                    <div className="ruleInfoSub">
                        <p>양식을 다운로드 받고</p>
                        <p>손글씨를 직접 작성하여</p>
                        <p>촬영 후 업로드 해주세요.</p>
                        <p>(반드시 손글씨 양식을 사용해야 합니다.)</p>
                    </div>
                </div>
                <div className="ruleImageContainer">
                    <div className="ruleImageBox">
                        <img src="../rule1.png" alt="rule1" />
                        <p>1. 양식안에 단 한 글자만!</p>
                    </div>
                    <div className="ruleImageBox">
                        <img src="../rule2.png" alt="rule2" />
                        <p>2. 사진을 찍어요!</p>
                    </div>
                    <div className="ruleImageBox">
                        <img src="../rule3.png" alt="rule3" />
                        <p>3. 업로드를 하면 끝!</p>
                    </div>
                </div>
            </div>

            <div className="ruleBtnBox">
                <button className="formBtn">손글씨 양식 다운로드</button>
                <ButtonsLayout prev={prev} next={next} />
            </div>
        </ServiceLayout>
    );
};

export default Rule;
