# WanaKanaReact

React wrapper for WanaKana.js

## To use in a form

```jsx
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
