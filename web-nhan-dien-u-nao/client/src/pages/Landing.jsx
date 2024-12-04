import main from '../assets/images/main.svg';
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/LandingPage';
import Logo from '../components/Logo';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        {/* info */}
        <div className='info'>
          <h1>
            Nhận Diện <span>MRI</span>
          </h1>
          <p>
            Xin chào và chào mừng bạn đến với Tbicry, công cụ hỗ trợ nhận diện u não qua ảnh MRI, giúp bạn nhanh chóng và chính xác trong chẩn đoán.
            Với Tbicry, việc phân tích hình ảnh y tế trở nên đơn giản, hiệu quả và đáng tin cậy, đồng hành cùng bạn trong việc bảo vệ sức khỏe và cải thiện chất lượng cuộc sống.
          </p>
          <Link to='/register' className='btn register-link'>
            Đăng ký
          </Link>
          <Link to='/login' className='btn'>
            Đăng nhập
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
};


export default Landing;