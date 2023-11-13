import { useLocation, useNavigate } from 'react-router-dom';
import ServiceLayout from '../../components/service/serviceLayout';
import ButtonsLayout from '../../components/service/buttonsLayout';
import { useEffect, useState } from 'react';
import '../../css/pages/service/upload.css';
import axios from 'axios';
import Loading from '../../components/service/loading';

const Upload = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const [isActive, setActive] = useState(false);
    const [image, setImage] = useState();
    const [preview, setPreview] = useState();

    useEffect(() => {
        if (!state || !state.email) {
            alert('비정상적인 접근입니다.');
            navigate('/service', { replace: true });
        }
    }, [navigate, state]);

    const prev = () => {
        navigate('/service/rule', {
            replace: true,
            state: { email: state.email },
        });
    };

    const next = async () => {
        if (!image) {
            alert('이미지를 업로드 해주시길 바랍니다.');
            return;
        }
        console.log(state.email, image);

        // const data = { email: state.email, image_file: image };
        const form = new FormData();

        form.append('email', state.email);
        form.append('image_file', image, image.name);
        const res = axios(
            {
                url: 'http://localhost:5432/request',
                method: 'POST',
                header: {
                    Accept: 'application/json',
                    'Content-Type': 'multipart/form-data',
                },
            },
            form
        );

        console.log(res);

        // if (res) {
        //     navigate('/service/result', {
        //         state: { email: state.email, image: image },
        //     });
        // }
        // console.log(res);
    };

    const handleDragStart = () => {
        setActive(true);
    };

    const handleDragEnd = () => {
        setActive(false);
    };

    const handleDrop = (event) => {
        event.preventDefault();

        const reader = new FileReader();

        const file = event.dataTransfer.files[0];
        if (file) {
            reader.readAsDataURL(file);
            setImage(file);

            reader.onload = (e) => {
                setPreview(e.target.result);
            };
        }

        setActive(false);
    };

    const handleDropOver = (event) => {
        event.preventDefault();
    };

    const handleImageChangle = (event) => {
        event.preventDefault();

        const reader = new FileReader();

        const file = event.target.files[0];
        if (file) {
            reader.readAsDataURL(file);
            setImage(file);

            reader.onload = (e) => {
                setPreview(e.target.result);
            };
        }
    };

    return (
        <>
            <ServiceLayout step={3}>
                <div className="uploadContainer">
                    <div className="uploadInfoBox">
                        <div className="uploadInfoTitle">
                            <p>이미지 업로드하기</p>
                        </div>
                        <div className="uploadInfoSub">
                            <p>
                                <span>반드시</span> 양식에 맞게 작성된 손글씨를
                            </p>
                            <p>촬영 후 업로드 해주세요.</p>
                        </div>
                    </div>
                    <label
                        className={`uploadImageContainer${
                            isActive ? ' active' : ''
                        }`}
                        onDragEnter={handleDragStart}
                        onDragLeave={handleDragEnd}
                        onDrop={handleDrop}
                        onDragOver={handleDropOver}
                        onChange={handleImageChangle}
                    >
                        {!preview ? (
                            <>
                                <input
                                    type="file"
                                    accept=".jpg, .png, .jpeg"
                                    className="uploadInput"
                                />
                                <div className="uploadBox">
                                    <img src="../upload.png" alt="upload" />
                                    <p>업로드 하기</p>
                                </div>
                            </>
                        ) : (
                            <img
                                className="preview"
                                src={preview}
                                alt="preview"
                            />
                        )}
                    </label>
                </div>
                <div className="uploadBtnBox">
                    <ButtonsLayout prev={prev} next={next} />
                </div>
            </ServiceLayout>
            {/* <Loading /> */}
        </>
    );
};

export default Upload;
