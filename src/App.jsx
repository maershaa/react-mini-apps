import React, { Component } from 'react';

import { Header } from '@/components/Header/Header';
import { Hero } from '@/components/Hero/Hero';
import { Footer } from '@/components/Footer/Footer';

import { Section } from '@/components/Section/Section';
import { FeedbackOptions } from '@/components/FeedbackOptions/FeedbackOptions';
import { Statistics } from '@/components/Statistics/Statistics';
import { Notification } from '@/components/Notification/Notification';

import { ContactForm } from '@/components/ContactForm/ContactForm';
import { Filter } from '@/components/Filter/Filter';
import { ContactList } from '@/components/ContactList/ContactList';
import { PhonebookArticle } from '@/components/PhonebookArticle/PhonebookArticle';
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
    // name: '',
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

  addContactToPhonebook = contactInfo =>
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contactInfo],
    }));

  changeFilter = evt => {
    const currentValue = evt.currentTarget.value;
    console.log('🚀 ~ Filter ~ currentValue:', currentValue);
    this.setState({ filter: currentValue });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase().trim();

    return contacts.filter(c => {
      if (c.name.toLowerCase().trim().includes(normalizedFilter)) return c;

      if (c.surname.toLowerCase().trim().includes(normalizedFilter)) return c;

      if (c.phoneNumber.trim().includes(normalizedFilter)) return c;
    });
  };

  render() {
    const { good, neutral, bad, contacts, filter } = this.state;

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
              options={this.state}
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
                <ContactForm
                  addContact={this.addContactToPhonebook}
                  contacts={contacts}
                />
              </PhonebookArticle>

              <PhonebookArticle subtitle={'Contacts'}>
                {contacts.length === 0 ? (
                  <Notification message="There is no contacts yet" />
                ) : (
                  <>
                    <Filter value={filter} onChange={this.changeFilter} />{' '}
                    <ContactList contacts={visibleContacts} />
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
