import { HeroWrapper } from '@/components/Hero/Hero.styled';
const Hero = ({ openModal }) => {
  return (
    <HeroWrapper>
      <p className="subtitle">Собираем отзывы и управляем контактами</p>
      <p className="description">
        Мини-проекты для практики React: Feedback Widget и Phonebook.
      </p>
      <ul className="hero-actions">
        <li>
          <a href="#feedback" className="btn btn-feedback">
            Перейти к Feedback Widget
          </a>
        </li>
        <li>
          <a href="#phonebook" className="btn btn-phonebook">
            Перейти к Phonebook
          </a>
        </li>
      </ul>

      <button className="DiscoverMoreBtn" type="button" onClick={openModal}>
        Discover more
      </button>
    </HeroWrapper>
  );
};

export { Hero };
