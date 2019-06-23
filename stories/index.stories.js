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

storiesOf('FieldToKana', module)
  .add('default uncontrolled', () => (
    <FieldToKana onChange={e => console.log(e.target.value)} />
  ))
  .add('with initial value', () => (
    <FieldToKana
      value="konnnichiwa"
      onChange={e => console.log(e.target.value)}
    />
  ))
  .add('controlled in form', () => <RomajiForm />);
