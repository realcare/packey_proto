import { json, useLocation, useNavigate } from 'react-router-dom';
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
    const [loading, setLoading] = useState(false);
    const [loadingText, setLoadingText] = useState("Loading");
    const [id, setID] = useState("");
    const [intervalId, setIntervalId] = useState("");

    useEffect(()=> {
        console.log(loadingText)
        if(loadingText == "Complete") {
            setTimeout(() => {
                clearInterval(intervalId)
                setLoading(false)
                navigate('/service/result', {
                    state: { email: state.email, uuid: id},
                });
            }, 3000)
            
        }
    }, [loadingText])

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

        setLoading(true)

        const form = new FormData();
        form.append('email', state.email);
        form.append('image_file', image, image.name);
        
        const url = "http://localhost:5432"

        // const res = await axios.post(`${url}/request`, form, { header: {
        //     'accept': 'application/json',
        //     'Content-Type': 'multipart/form-data',
        // },}).then((res)=> JSON.parse(res.data));

        // const {status, uuid} = res;
        
        // if (status != "success") {
        //    alert("이미지 업로드에 실패하였습니다.")
        //    setLoading(false)
        //     return
        // }

        const uuid = '12312412124'

        setID(uuid)

        const loadingMessage = await getStatus(url,uuid).then((res)=> res)
        console.log("message" ,loadingMessage)
        if(loadingMessage === "processing") {
            console.log("프로세싱중")
        }
        const id = setInterval(() => getStatus(url,uuid), 3000)
        setIntervalId(id)
        // setLoading(false)
        // navigate('/service/result', {
        //     state: { email: state.email},
        // });
       
    };

    const getStatus = async (url,uuid) => {
        // const loadingTextRes = await axios.get(`${url}/status/${uuid}`).then((res)=> JSON.parse(res.data))
        
        // const {message} = loadingTextRes;

        // setLoadingText(message);

        const message = ["processing", "processing","processing","processing","processing","processing", "Complete"]

        const num = parseInt(Math.random() * message.length)
    
        setLoadingText(message[num])
        console.log(message[num])
        return message[num]
    }

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
            {loading == true ?  <Loading text={loadingText == "" ? "loading" : loadingText} /> : <></> }
           
        </>
    );
};

export default Upload;
