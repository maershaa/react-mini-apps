import { FooterWrapper } from '@/components/Footer/Footer.styled';

const Footer = props => {
  return (
    <FooterWrapper>
      <div className="footer-container">
        <p>
          © 2026&nbsp;
          <a
            href="https://www.linkedin.com/in/valeriiayefremova/"
            target="_blank"
            rel="noopener noreferrer"
          >
            by @maershaa
          </a>
        </p>

        <p>Made with ❤️&nbsp; using HTML, CSS, JS & React</p>
      </div>
    </FooterWrapper>
  );
};

export { Footer };
