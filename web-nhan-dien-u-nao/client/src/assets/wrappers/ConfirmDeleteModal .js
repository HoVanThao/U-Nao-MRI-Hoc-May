import styled from 'styled-components';

const Wrapper = styled.div`
  .modal {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 500px;
  margin: auto;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.75);
}

.modal-buttons {
  display: flex;
  justify-content: space-between;
}

.btn {
  padding: 0.5rem 1rem;
  margin: 0.5rem;
}
`;

export default Wrapper;
