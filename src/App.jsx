import React, { Component } from 'react';

import { Header, Hero, Footer } from '@/components';

import {
  Section,
  FeedbackOptions,
  Statistics,
  Notification,
} from '@/components';

import {
  ContactForm,
  Filter,
  ContactList,
  PhonebookArticle,
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
      {
        id: 'id-1',
        name: 'Rosie ',
        surname: 'Simpson',
        gender: 'female',
        phoneNumber: '459-12-56',
      },
      {
        id: 'id-2',
        name: 'Hermione ',
        surname: 'Kline',
        gender: 'female',
        phoneNumber: '443-89-12',
      },
      {
        id: 'id-3',
        name: 'Eden ',
        gender: 'male',
        surname: 'Clements',
        phoneNumber: '645-17-79',
      },
      {
        id: 'id-4',
        name: 'Annie ',
        surname: 'Copeland',
        phoneNumber: '227-91-26',
      },
    ],
    filter: '',
    favorites: [],
  };

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
      const isFavourite = prevState.favorites.some(el => el.id === id);
      if (isFavourite)
        // удалить из favorites
        return {
          favorites: prevState.favorites.filter(el => el.id !== id),
        };
      else {
        // добавить в favorites
        const newFavoriteContact = prevState.contacts.find(el => el.id === id);
        return {
          favorites: [...prevState.favorites, newFavoriteContact],
        };
      }
    });
  };

  render() {
    const { good, neutral, bad, contacts, filter, favorites } = this.state;

    const totalFeedback = countTotalFeedback(good, neutral, bad);

    const PositiveFeedbackPercentage = countPositiveFeedbackPercentage(
      good,
      neutral,
      bad
    );

    const hasFeedback = good > 0 || neutral > 0 || bad > 0;

    const visibleContacts = this.getFilteredContacts();

    return (
      <>
        <Header></Header>
        <main>
          <Section title="Feedback Widget & Phonebook" id="hero">
            <Hero></Hero>
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
                positivePercentage={PositiveFeedbackPercentage}
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
                {contacts.length === 0 ? (
                  <Notification message="There is no contacts yet" />
                ) : (
                  <>
                    <Filter value={filter} onChange={this.changeFilter} />{' '}
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
        </main>
        <Footer></Footer>
      </>
    );
  }
}

export default App;
