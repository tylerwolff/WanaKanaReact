# WanaKanaReact

[![npm package][npm-badge]][npm]

React wrapper for [WanaKana.js](https://wanakana.com/)

## Currently available

`RomajiInput` - uses `toKana` behind the scenes to update an input's value from romaji to hiragana/katakana

Example demo: https://wanakanareact.netlify.com

## To do

- [ ] Add ability to use a custom component

## Different options

```jsx
// default - romaji to kana
<WanakanaInput value="konnnichiwa" />

// kana to romaji
<WanakanaInput to="romaji" value="こんにちわ" />

// romaji to hiragana
<WanakanaInput to="hiragana" value="konnnichiwa" />

// romaji to katakana
<WanakanaInput to="katakana" value="TABERU" />
```

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
