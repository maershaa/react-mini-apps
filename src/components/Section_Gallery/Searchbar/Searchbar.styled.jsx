import styled from '@emotion/styled';

const SearchForm = styled.form`
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
  gap: 16px;

  button {
    font-weight: 600;
    border: none;

    min-width: 100px;
    width: 100%;
    padding: 12px;
    border-radius: 12px;
    font-size: 14px;
    color: white;
    opacity: 1;
    background: linear-gradient(135deg, #6be585, #36d1dc);
  }

  button:disabled {
    color: white;
    cursor: not-allowed;
    opacity: 0.6;
    transform: none;
    box-shadow: none;
  }
`;

const InputWrapper = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: left;
  min-width: 220px;
  max-width: 400px;
  margin: 0 auto 20px auto;

  svg {
    position: absolute;
    left: 12px;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.text.placeholder};
    pointer-events: none;
  }

  input {
    width: 100%;
    padding: 10px 12px 10px 38px;
    border-radius: 12px;
    font-size: 14px;
    border: 1px solid ${({ theme }) => theme.colors.border.light};
  }

  input:focus {
    outline: none;
    border-color: #6a5cff;
  }
`;

export { SearchForm, InputWrapper };
