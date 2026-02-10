import styled from '@emotion/styled';

export const StatisticsWrapper = styled.div`
  margin-top: 32px;
  background: #f9f8ff;
  border-radius: 20px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 16px;
    margin-bottom: 20px;
    padding: 0;
    list-style: none;
  }

  li {
    background: #ffffff;
    border-radius: 12px;
    padding: 12px 16px;
    text-align: center;
    transition:
      transform 0.2s,
      box-shadow 0.2s;
    cursor: default;

    span {
      display: block;
      font-weight: 700;
      font-size: 1.2rem;
      margin-top: 4px;
    }

    .stat-good {
      color: ${({ theme }) => theme.colors.accent.green};
    }

    .stat-neutral {
      color: ${({ theme }) => theme.colors.accent.orange};
    }

    .stat-bad {
      color: ${({ theme }) => theme.colors.accent.red};
    }
  }

  .summaryStats li {
    background: #ede9fe;
    cursor: default;
    transition: none;
    span {
      color: ${({ theme }) => theme.colors.text.primary};
    }
  }
`;
