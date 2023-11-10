import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../../css/pages/service/email.css';
import ServiceLayout from '../../components/service/serviceLayout';
import ButtonsLayout from '../../components/service/buttonsLayout';

const ServiceEmail = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [isClickedNext, setIsClickedNext] = useState(false);

    useEffect(() => {
        if (state && state.email) {
            setEmail(state.email);
        }
    }, [state]);

    const checkIsValidEmail = (email) => {
        return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
    };

    const handleChangeEmail = (event) => {
        if (isClickedNext) {
            if (checkIsValidEmail(event.target.value)) {
                setIsValidEmail(true);
            }
        }
        setEmail(event.target.value);
    };

    const next = (email) => {
        setIsClickedNext(true);
        if (!checkIsValidEmail(email)) {
            setIsValidEmail(false);
            return;
        }
        navigate('/service/rule', { state: { email: email } });
    };

    return (
        <ServiceLayout>
            <div className="emailContainer">
                <div className="emailInfoBox">
                    <div className="emailInfoTitle">
                        <p>사용자 정보 입력</p>
                    </div>
                    <div className="emailInfoSub">
                        <p>해당 메일로 하루 뒤에 폰트를</p>
                        <p>생성해서 보내드립니다.</p>
                    </div>
                </div>
                <div className="emailInputBox">
                    <div className="emailInputTitle">
                        <p>Email</p>
                    </div>
                    <input
                        className="emailInput"
                        value={email}
                        onChange={handleChangeEmail}
                        type="text"
                    />
                    {isClickedNext && !isValidEmail && (
                        <div className="emailAlert">
                            이메일 형식에 맞지 않습니다.
                        </div>
                    )}
                </div>
            </div>
            <div className="emailButtonsBox">
                <ButtonsLayout next={() => next(email)} />
            </div>
        </ServiceLayout>
    );
};

export default ServiceEmail;
