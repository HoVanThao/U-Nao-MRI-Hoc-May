import Job from './Job';
import Wrapper from '../assets/wrappers/JobsContainer';
import { useAllJobsContext } from '../pages/History';
import PageBtnContainer from './PageBtnContainer';

const JobsContainer = () => {
    const { data } = useAllJobsContext();
    const { nhandiens, totalNhanDiens, numOfPages } = data;
    if (nhandiens.length === 0) {
        return (
            <Wrapper>
                <h2>Không có lịch sử hiển thị...</h2>
            </Wrapper>
        );
    }

    return (
        <Wrapper>
            <h5>
                Số lượng hiển thị:  {totalNhanDiens}
            </h5>
            <div className='jobs'>
                {nhandiens.map((nhandien) => {
                    return <Job key={nhandien._id} {...nhandien} />;
                })}
            </div>
            {numOfPages > 1 && <PageBtnContainer />}
        </Wrapper>
    );
};

export default JobsContainer;