import { useNavigation } from 'react-router-dom';
const SubmitBtn = ({ formBtn, ten }) => {
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';
    return (
        <button
            type='submit'
            className={`btn btn-block ${formBtn && 'form-btn'}`}
            disabled={isSubmitting}
        >
            {isSubmitting ? `${ten}...` : `${ten}`}
        </button>
    );
};
export default SubmitBtn;