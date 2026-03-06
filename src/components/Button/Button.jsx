import { Component } from 'react';
import { ButtonEl } from './Button.styled';
class Button extends Component {
  render() {
    const { text, onClick, ...rest } = this.props;
    // В ...rest у нас передается название класса
    return (
      <ButtonEl type="button" onClick={onClick} {...rest}>
        {text.trim()}
      </ButtonEl>
    );
  }
}

export { Button };
