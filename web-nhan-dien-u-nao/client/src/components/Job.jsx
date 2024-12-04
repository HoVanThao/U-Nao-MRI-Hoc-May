import { FaLocationArrow, FaBriefcase, FaCalendarAlt, FaPhoneAlt, FaAmericanSignLanguageInterpreting } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Job';
import JobInfo from './JobInfo';
import { Form } from 'react-router-dom';
import day from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import { MdEmail } from 'react-icons/md';
import { BsPhone } from 'react-icons/bs';

day.extend(advancedFormat);

const Job = ({
    _id,
    name,
    location,
    email,
    phone,
    result,
    image,
    createdAt,
}) => {

    const date = day(createdAt).format('MMM Do, YYYY');


    return (
        <Wrapper>
            <header>
                <div className='main-icon'>{name.charAt(0)}</div>
                <div className='info'>
                    <h5>{name}</h5>
                </div>
            </header>

            <img
                className="upload-icon"
                src={
                    image
                        ? image
                        : '/images/upload_area.png'
                }
                alt="Preview"
            />

            <div className='content'>

                <div className='content-center'>
                    <JobInfo icon={<MdEmail />} text={email} />
                    <JobInfo icon={<FaPhoneAlt />} text={phone} />
                    <JobInfo icon={<FaLocationArrow />} text={location} />
                    <JobInfo icon={<FaAmericanSignLanguageInterpreting />} text={result} />
                </div>

                <footer className='actions'>
                    <Link className='btn edit-btn' to={`../detail-history/${_id}`}>Chi tiết</Link>
                    <Form method='delete' action={`../delete-history/${_id}`}>
                        <button type='submit' className='btn delete-btn'>
                            Xóa
                        </button>
                    </Form>

                </footer>
            </div>

        </Wrapper>
    );
};

export default Job;