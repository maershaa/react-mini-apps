import styled from '@emotion/styled';

export const FeedbackOptionsWrapper = styled.div`
  text-align: center;

  ul {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 16px;
    margin-top: 20px;
    padding: 0;
    list-style: none;
  }

  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 12px;

    padding: 12px 24px;
    border-radius: 16px;
    border: none;
    cursor: pointer;

    font-weight: 600;
    font-size: 16px;
    color: white;

    transition:
      transform 0.2s,
      box-shadow 0.2s,
      background 0.2s;

    /* базовая тень и градиент задаются через классы */
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);

    &:hover {
      transform: scale(1.05);
      box-shadow:
        0 12px 20px rgba(0, 0, 0, 0.25),
        0 0 10px rgba(255, 255, 255, 0.1);
    }

    &:active {
      transform: translateY(2px);
      box-shadow:
        0 4px 8px rgba(0, 0, 0, 0.2),
        inset 0 2px 4px rgba(255, 255, 255, 0.2);
    }

    svg {
      width: 28px;
      height: 28px;
      color: white;
    }

    span {
      font-weight: 600;
      font-size: 16px;
      color: white;
    }
  }

  .btn-good {
    background: ${({ theme }) => theme.colors.accent.green};
  }

  .btn-neutral {
    background: ${({ theme }) => theme.colors.accent.orange};
  }

  .btn-bad {
    background: ${({ theme }) => theme.colors.accent.red};
  }
`;
