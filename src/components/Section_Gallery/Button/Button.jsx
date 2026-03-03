import { Component } from 'react';

class Button extends Component {
  render() {
    const { text, onClick } = this.props;
    return (
      <button type="button" onClick={onClick}>
        {text}
      </button>
    );
  }
}

export { Button };

// При нажатии на кнопку Load more должна догружаться следующая порция изображений и рендериться вместе с предыдущими. Кнопка должна рендерится только тогда, когда есть какие-то загруженные изобаржения. Если массив изображений пуст, кнопка не рендерится.
