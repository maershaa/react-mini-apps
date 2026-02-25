import PropTypes from 'prop-types';
import { SectionWrapper } from '@/components/Section/Section.styled';
const Section = ({ id, title, children }) => {
  return (
    <SectionWrapper id={id}>
      {title && <h2>{title}</h2>}
      {children}
    </SectionWrapper>
  );
};

Section.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  children: PropTypes.node.isRequired, //node — это всё, что React может отрендерить:строка, число, JSX, компонент, массив JSX, fragment
};

export { Section };
