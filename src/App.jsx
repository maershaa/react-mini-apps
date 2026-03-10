import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import {
  Header,
  Hero,
  Footer,
  Section,
  FeedbackOptions,
  Statistics,
  Notification,
  Modal,
  AboutAppModal,
  ImagePreviewModal,
  ContactForm,
  Filter,
  ContactList,
  PhonebookArticle,
  Searchbar,
  ImageGallery,
} from '@/components';

import {
  countTotalFeedback,
  countPositiveFeedbackPercentage,
} from '@/utils/helpers';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    contacts: [
      // {
      //   id: 'id-1',
      //   name: 'Rosie ',
      //   surname: 'Simpson',
      //   gender: 'female',
      //   phoneNumber: '459-12-56',
      // },
      // {
      //   id: 'id-2',
      //   name: 'Hermione ',
      //   surname: 'Kline',
      //   gender: 'female',
      //   phoneNumber: '443-89-12',
      // },
      // {
      //   id: 'id-3',
      //   name: 'Eden ',
      //   gender: 'male',
      //   surname: 'Clements',
      //   phoneNumber: '645-17-79',
      // },
      // {
      //   id: 'id-4',
      //   name: 'Annie ',
      //   surname: 'Copeland',
      //   phoneNumber: '227-91-26',
      // },
    ],
    filter: '',
    favorites: [],
    showModal: false,
    queryPhoto: '',

    showGalleryModal: false,
    modalGalleryData: null,
  };

  async componentDidMount() {
    // Считываем контакты из localStorage при монтировании компонента
    // Если данных нет, используем пустой массив
    const contactsFromStorage =
      JSON.parse(localStorage.getItem('contactsList')) || [];

    if (contactsFromStorage) {
      // Устанавливаем контакты в состояние, чтобы они отобразились в приложении
      this.setState({
        contacts: contactsFromStorage,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // Проверяем, изменились ли контакты по сравнению с предыдущим состоянием
    if (prevState.contacts !== this.state.contacts) {
      // Сохраняем/Удаляем новые контакты в localStorage
      localStorage.setItem('contactsList', JSON.stringify(this.state.contacts));
    }
  }

  leaveFeedback = evt => {
    const btn = evt.target.closest('button');
    if (!btn) return;

    if (btn.classList.contains('btn-good')) {
      this.setState(prev => ({ good: prev.good + 1 }));
    } else if (btn.classList.contains('btn-neutral')) {
      this.setState(prev => ({ neutral: prev.neutral + 1 }));
    } else if (btn.classList.contains('btn-bad')) {
      this.setState(prev => ({ bad: prev.bad + 1 }));
    }
  };

  addContactToPhonebook = newContact => {
    const isDuplicateNumber = this.state.contacts.some(
      c => c.phoneNumber.trim() === newContact.phoneNumber.trim()
    );
    const isDuplicateNameSurname = this.state.contacts.some(
      c =>
        c.name.trim() === newContact.name.trim() &&
        c.surname.trim() === newContact.surname.trim()
    );
    if (isDuplicateNumber) {
      alert(`Phone number: ${newContact.phoneNumber} is already in contacts`);
      return;
    }

    if (isDuplicateNameSurname) {
      alert(
        `Contact ${newContact.name} ${newContact.surname} is already in contacts`
      );
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  changeFilter = evt => {
    const currentValue = evt.currentTarget.value;
    this.setState({ filter: currentValue });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase().trim();

    // Если меньше 3 символов, возвращаем все контакты, но стоит ли?
    // if (normalizedFilter.length < 3) {
    //   return contacts;
    // }

    return contacts.filter(
      c =>
        c.name.toLowerCase().includes(normalizedFilter) ||
        c.surname.toLowerCase().includes(normalizedFilter) ||
        c.phoneNumber.includes(normalizedFilter)
    );
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => el.id !== id),
    }));
  };

  toggleFavourite = id => {
    this.setState(prevState => {
      const isFavourite = prevState.favorites.includes(id);

      if (isFavourite)
        // удалить из favorites
        return {
          favorites: prevState.favorites.filter(elId => elId !== id),
        };
      else {
        // добавить в favorites
        const newFavoriteContact = prevState.contacts.find(el => el.id === id);
        // console.log("🚀 ~ App ~ newFavoriteContact:", newFavoriteContact);
        return {
          favorites: [...prevState.favorites, newFavoriteContact.id],
        };
      }
    });
  };

  openModal = () => this.setState({ showModal: true });
  closeModal = () => this.setState({ showModal: false });

  openGalleryModal = data => {
    this.setState({
      showGalleryModal: true,
      modalGalleryData: data,
    });
  };

  closeGalleryModal = () =>
    this.setState({
      showGalleryModal: false,
      modalGalleryData: null,
    });

  handleSearchPhotosFormSubmit = value => {
    this.setState({
      queryPhoto: value,
    });
  };

  render() {
    const {
      good,
      neutral,
      bad,
      contacts,
      filter,
      favorites,
      showModal,

      queryPhoto,

      showGalleryModal,
      modalGalleryData,
    } = this.state;

    const totalFeedback = countTotalFeedback(good, neutral, bad);

    const positiveFeedbackPercentage = countPositiveFeedbackPercentage(
      good,
      neutral,
      bad
    );

    const hasFeedback = good > 0 || neutral > 0 || bad > 0;

    const visibleContacts = this.getFilteredContacts();

    const notify = () => toast('Wow so easy !');

    return (
      <>
        <Header />
        <main>
          <Section title="Feedback Widget & Phonebook" id="hero">
            <Hero openModal={this.openModal} />
          </Section>

          <Section title="Feedback Widget" id="feedback">
            <FeedbackOptions
              onLeaveFeedback={this.leaveFeedback}
            ></FeedbackOptions>

            {hasFeedback ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={totalFeedback}
                positivePercentage={positiveFeedbackPercentage}
              ></Statistics>
            ) : (
              <Notification message="There is no feedback yet"></Notification>
            )}
          </Section>

          <Section title="Phonebook-section" id="phonebook">
            <div className="phonebook-layout">
              <PhonebookArticle subtitle={'Phonebook'}>
                <ContactForm addContact={this.addContactToPhonebook} />
              </PhonebookArticle>

              <PhonebookArticle subtitle={'Contacts'}>
                {contacts.length === 0 && (
                  <Notification message="There are no contacts yet" />
                )}

                {contacts.length > 0 && (
                  <>
                    <Filter value={filter} onChange={this.changeFilter} />

                    <ContactList
                      contacts={visibleContacts}
                      favorites={favorites}
                      deleteContact={this.deleteContact}
                      toggleFavourite={this.toggleFavourite}
                    />
                  </>
                )}
              </PhonebookArticle>
            </div>
          </Section>

          <Section title="Gallery" id="gallery">
            <Searchbar onSubmit={this.handleSearchPhotosFormSubmit} />

            <ImageGallery
              queryPhoto={queryPhoto}
              openGalleryModal={this.openGalleryModal}
            />
            {showGalleryModal && (
              <Modal closeModal={this.closeGalleryModal}>
                <ImagePreviewModal
                  closeModal={this.closeGalleryModal}
                  modalGalleryData={modalGalleryData}
                />
              </Modal>
            )}
          </Section>
        </main>
        <Footer />
        {showModal && (
          <Modal closeModal={this.closeModal}>
            <AboutAppModal closeModal={this.closeModal} />
          </Modal>
        )}

        <ToastContainer
          position="top-right"
          autoClose={5000} // Время закрытия уведомления в мс
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          pauseOnHover
          draggable
          theme="dark"
        />
      </>
    );
  }
}

export default App;
