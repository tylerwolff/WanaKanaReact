import React, { useState } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { FieldToKana } from '../src';

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
      <FieldToKana name="greeting" value={greeting} onChange={handleChange} />
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

storiesOf('FieldToKana', module)
  .add('default uncontrolled', () => (
    <FieldToKana
      onChange={e => console.log(e.target.value)}
      placeholder="type romaji"
    />
  ))
  .add('with initial value', () => (
    <FieldToKana
      value="konnnichiwa"
      onChange={e => console.log(e.target.value)}
      placeholder="type romaji"
    />
  ))
  .add('as a textarea', () => (
    <FieldToKana
      component="textarea"
      onChange={e => console.log(e.target.value)}
      placeholder="type romaji"
    />
  ))
  .add('as custom component', () => (
    <FieldToKana
      component={CustomInput}
      onChange={e => console.log(e.target.value)}
      placeholder="type something"
    />
  ))
  .add('controlled in form', () => <RomajiForm />);
