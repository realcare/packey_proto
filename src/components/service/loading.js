import '../../css/components/service/loading.css';

const Loading = (props) => {
    const {text} = props
    return (
        <>
        <div className="loadingBackground"/>
        <div className="loadingContainer">
            <div className="loadingBox">
                <div className="lds-roller">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                </div>
                <div className="loadingText">{text}</div>
            </div>
        </div>
        
        </>
      
            
       
    );
};

export default Loading;
