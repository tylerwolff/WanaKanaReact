import React, { useState } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import WanakanaInput from '../src';

const RomajiForm = () => {
  const [greeting, setGreeting] = useState('こんにちわ');
  const handleChange = e => {
    setGreeting(e.target.value);
  };

  return (
    <form
      onSubmit={(e, values) => {
        e.preventDefault();
        alert(greeting);
      }}
    >
      <WanakanaInput name="greeting" value={greeting} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

class CustomInput extends React.Component {
  render() {
    return (
      <input
        type="email"
        style={{
          fontSize: '1.5em',
          padding: '0.25em 0.5em',
          border: '2px solid #bae',
          borderRadius: '8px',
        }}
        {...this.props}
      />
    );
  }
}

storiesOf('To Kana', module)
  .add('default uncontrolled', () => (
    <WanakanaInput
      onChange={e => console.log(e.target.value)}
      placeholder="type romaji"
    />
  ))
  .add('with initial value', () => (
    <WanakanaInput
      value="konnnichiwa"
      onChange={e => console.log(e.target.value)}
      placeholder="type romaji"
    />
  ))
  .add('as a textarea', () => (
    <WanakanaInput
      component="textarea"
      onChange={e => console.log(e.target.value)}
      placeholder="type romaji"
    />
  ))
  .add('as custom component', () => (
    <WanakanaInput
      component={CustomInput}
      onChange={e => console.log(e.target.value)}
      placeholder="type something"
    />
  ))
  .add('controlled in form', () => <RomajiForm />);

storiesOf('To Romaji', module)
  .add('default uncontrolled', () => (
    <WanakanaInput
      to="romaji"
      onChange={e => console.log(e.target.value)}
      placeholder="type hiragana or katakana"
    />
  ))
  .add('with initial value', () => (
    <WanakanaInput
      to="romaji"
      value="こんにちわ"
      onChange={e => console.log(e.target.value)}
      placeholder="type hiragana or katakana"
    />
  ));

storiesOf('To Hiragana', module)
  .add('default uncontrolled', () => (
    <WanakanaInput
      to="hiragana"
      onChange={e => console.log(e.target.value)}
      placeholder="type romaji"
    />
  ))
  .add('with initial value', () => (
    <WanakanaInput
      to="hiragana"
      value="こんにちわ"
      onChange={e => console.log(e.target.value)}
      placeholder="type romaji"
    />
  ));

storiesOf('To Katakana', module)
  .add('default uncontrolled', () => (
    <WanakanaInput
      to="katakana"
      onChange={e => console.log(e.target.value)}
      placeholder="type romaji"
    />
  ))
  .add('with initial value', () => (
    <WanakanaInput
      to="katakana"
      value="レストラン"
      onChange={e => console.log(e.target.value)}
      placeholder="type romaji"
    />
  ));
