# WanaKanaReact

[![npm package][npm-badge]][npm]

React wrapper for WanaKana.js

## Currently available

`RomajiInput` - uses `toKana` behind the scenes to update an input's value from romaji to hiragana/katakana

## To do

- [ ] Add ability to use a custom component (input, textarea, CustomInput)
- [ ] Implement `toHiragana` input
- [ ] Implement `toKatakana` input
- [ ] Implement `toRomaji` input

## To use in a form

```jsx
import RomajiForm from 'react-wanakana';

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
      <RomajiInput name="greeting" value={greeting} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};
```

## To develop in storybook

`npm run storybook`

[npm-badge]: https://img.shields.io/npm/v/react-wanakana.svg
[npm]: https://www.npmjs.org/package/react-wanakana
