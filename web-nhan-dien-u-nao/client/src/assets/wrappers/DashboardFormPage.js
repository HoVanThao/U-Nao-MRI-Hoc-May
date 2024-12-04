import styled from 'styled-components';

const Wrapper = styled.section`
  border-radius: var(--border-radius);
  width: 100%;
  background: var(--background-secondary-color);
  padding: 3rem 2rem 4rem;
  .form-title {
    margin-bottom: 2rem;
  }
  .form {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    width: 100%;
  }
  .form-row {
    margin-bottom: 0;
  }
  .form-center {
    display: grid;
    row-gap: 1rem;
  }
  .form-btn {
    align-self: end;
    margin-top: 1rem;
    display: grid;
    place-items: center;
  }

  .upload-section {
    margin-bottom: 1rem;
    display: flex;
    gap: 10rem;
  }

  .upload-item {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .upload-icon {
    width: 16rem;
    height: auto;
    border-radius: 10px; /* Bo tròn ảnh */
    object-fit: cover; /* Đảm bảo ảnh không bị méo */
    border: 2px solid var(--primary-color); /* Tùy chỉnh viền nếu cần */
    cursor: pointer;
  }


  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }
  }
  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;

export default Wrapper;
