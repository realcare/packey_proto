import { useEffect, useState } from 'react';
import '../../css/components/service/flow.css';

const Flow = (props) => {
    const [step, setStep] = useState(1);

    useEffect(() => {
        if (props && props.step) {
            setStep(props.step);
        }
    }, [props]);
    return (
        <div className="flowContainer">
            <div className="flowItemBox">
                <div className="circle applyStep">
                    <p>1</p>
                </div>
                <div className="flowTitle">
                    <p>사용자 정보 입력</p>
                </div>
            </div>
            <div className="flowItemBox">
                <div className={`circle ${step >= 2 ? 'applyStep' : ''}`}>
                    <p>2</p>
                </div>
                <div className="flowTitle">
                    <p>손글씨 이미지 준비</p>
                </div>
            </div>
            <div className="flowItemBox">
                <div className={`circle ${step >= 3 ? 'applyStep' : ''}`}>
                    <p>3</p>
                </div>
                <div className="flowTitle">
                    <p>이미지 업로드</p>
                </div>
            </div>
            <div className="flowItemBox">
                <div className={`circle ${step === 4 ? 'applyStep' : ''}`}>
                    <p>4</p>
                </div>
                <div className="flowTitle">
                    <p>샘플 확인</p>
                </div>
            </div>
            <div className="flowLineContainer">
                <div className="flowLineBox">
                    <div
                        className={`flowLine ${step >= 2 ? 'borderBlue' : ''}`}
                    />
                    <div
                        className={`flowLine ${step >= 3 ? 'borderBlue' : ''}`}
                    />
                    <div
                        className={`flowLine ${step === 4 ? 'borderBlue' : ''}`}
                    />
                </div>
            </div>
        </div>
    );
};

export default Flow;
