import styled from '@emotion/styled';

const Form = styled.form`
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;

  .input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
  }

  svg {
    position: absolute;
    left: 12px;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.text.placeholder};
    pointer-events: none;
  }

  input {
    width: 100%;
    padding: 10px 12px 10px 38px; /* отступ слева под иконку */
    border-radius: 12px;
    font-size: 14px;
    border: 1px solid ${({ theme }) => theme.colors.border.light};
  }

  input:focus {
    outline: none;
    border-color: #6a5cff;
  }

  input[type='submit'] {
    background: linear-gradient(135deg, #6be585, #36d1dc);
    font-weight: 600;
    border: none;
  }
`;

const GenderGroup = styled.fieldset`
  border: none;
  padding: 0;
  display: flex;
  gap: 16px;
`;

const RadioOption = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text.primary};

  input[type='radio'] {
    padding: 10px;
    appearance: none;
    width: 18px;
    height: 18px;
    border: 2px solid ${({ theme }) => theme.colors.border.light};
    border-radius: 4px;
    cursor: pointer;
    outline: none;
    transition:
      border 0.2s,
      background 0.2s;
  }

  input[type='radio']:checked {
    background-color: #6a5cff;
    border-color: #6a5cff;
  }

  &:hover input[type='radio'] {
    border-color: #6a5cff;
  }
`;

export { Form, GenderGroup, RadioOption };
