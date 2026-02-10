import styled from '@emotion/styled';

const FooterWrapper = styled.footer`
  width: 100%;
  margin: 0 auto;
  max-width: 1200px;

  padding: 0 ${props => props.theme.spacing.lg};

  background: ${({ theme }) => theme.colors.background.transparent};
  backdrop-filter: blur(30px);

  border-radius: ${props => props.theme.radii.medium};

  color: #5700c9;
  text-align: center;

  p {
    margin: 8px 0;
  }

  a {
    font-weight: 600;
  }
`;

export { FooterWrapper };
