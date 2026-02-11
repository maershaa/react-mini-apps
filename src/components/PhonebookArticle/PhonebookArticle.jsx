import PropTypes from 'prop-types';
import { Article } from '@/components/PhonebookArticle/PhonebookArticle.styled';

const PhonebookArticle = ({ subtitle, children }) => {
  return (
    <Article>
      <h3>{subtitle}</h3>
      {children}
    </Article>
  );
};

export { PhonebookArticle };
