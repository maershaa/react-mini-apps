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

import {
  countTotalFeedback,
  countPositiveFeedbackPercentage,
} from '@/utils/helpers';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
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

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = countTotalFeedback(good, neutral, bad);
    const PositiveFeedbackPercentage = countPositiveFeedbackPercentage(
      good,
      neutral,
      bad
    );
    const hasFeedback = good > 0 || neutral > 0 || bad > 0;
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
            <div className="section-content">
              <h3>Phonebook</h3>
              <ContactForm />

              <h3>Contacts</h3>
              <Filter />
              <ContactList />
            </div>
          </Section>
        </main>
        <Footer></Footer>
      </>
    );
  }
}

export default App;
