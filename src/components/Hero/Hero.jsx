import { HeroWrapper } from '@/components/Hero/Hero.styled';
import { Button } from '@/components';

const Hero = ({ openModal }) => {
  return (
    <HeroWrapper>
      <p className="subtitle">Собираем отзывы и управляем контактами</p>
      <p className="description">
        Мини-проекты для практики React: Feedback Widget и Phonebook.
      </p>
      <ul className="hero-actions">
        <li>
          <a href="#feedback" className="btn">
            Перейти к Feedback Widget
          </a>
        </li>
        <li>
          <a href="#phonebook" className="btn">
            Перейти к Phonebook
          </a>
        </li>
        <li>
          <a href="#gallery" className="btn">
            {' '}
            Перейти к Gallery
          </a>
        </li>
      </ul>
      <Button
        className="DiscoverMoreBtn"
        text="Discover more"
        onClick={openModal}
      />
    </HeroWrapper>
  );
};

export { Hero };
