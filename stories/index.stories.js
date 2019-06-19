import React, { useState } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import RomajiInput from '../index';

const RomajiForm = () => {
  const [greeting, setGreeting] = useState('こんにちわ');
  const handleChange = e => {
    console.log(e.target.value);
  };

  return (
    <form
      onSubmit={(e, values) => {
        e.preventDefault();
        alert(greeting);
      }}
    >
      <RomajiInput
        name="greeting"
        initialValue="konnichiwa"
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

storiesOf('RomajiInput', module)
  .add('default', () => (
    <RomajiInput onChange={e => console.log(e.target.value)} />
  ))
  .add('with initial value', () => (
    <RomajiInput
      initialValue="konnichiwa"
      onChange={e => console.log(e.target.value)}
    />
  ))
  .add('in form', () => <RomajiForm />);
