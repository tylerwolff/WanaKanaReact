import React, { useState, useRef } from 'react';
import { toKana } from 'wanakana';

// Need IMEMode option to handle single kana characters like ん and い
function romajiToKana(string) {
  return toKana(string, { IMEMode: true });
}

const RomajiInput = ({ value, onChange, ...props }) => {
  const inputRef = useRef(null);
  const [parsedValue, setValue] = useState(romajiToKana(value));
  const handleChange = e => {
    const kana = romajiToKana(e.target.value);
    setValue(kana);
    inputRef.current.value = kana;
    onChange(e);
  };

  return (
    <input
      ref={inputRef}
      value={parsedValue}
      onChange={handleChange}
      {...props}
    />
  );
};

RomajiInput.defaultProps = {
  type: 'text',
  value: '',
  onChange: e => e,
};

export default RomajiInput;
