import '../../css/components/service/buttonsLayout.css';

const ButtonsLayout = (props) => {
    return (
        <div className="buttonsBox">
            <button
                className={`prev ${!props.prev && 'noneEvent'}`}
                onClick={props.prev}
            >
                이전
            </button>
            <button className="next" onClick={props.next}>
                다음
            </button>
        </div>
    );
};

export default ButtonsLayout;
