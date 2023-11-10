import { useEffect, useState } from 'react';
import Flow from '../../components/service/flow';
import Layout from '../../components/layout';
import '../../css/components/service/serviceLayout.css';

const ServiceLayout = (props) => {
    const [step, setStep] = useState(1);

    useEffect(() => {
        if (props && props.step) {
            setStep(props.step);
        }
    }, [props]);

    return (
        <Layout>
            <div className="serviceContainer">
                <Flow step={step} />
                {props.children}
            </div>
        </Layout>
    );
};

export default ServiceLayout;
