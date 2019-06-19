import React, { useState } from 'react';
import { toKana } from 'wanakana';

// Need IMEMode option to handle single kana characters like ん and い
function romajiToKana(string) {
  return toKana(string, { IMEMode: true });
}

const RomajiInput = ({ initialValue, onChange, ...props }) => {
  const [value, setValue] = useState(romajiToKana(initialValue));
  const handleChange = e => {
    setValue(romajiToKana(e.target.value));
    onChange(e);
  };

  return <input {...props} value={value} onChange={handleChange} />;
};

RomajiInput.defaultProps = {
  type: 'text',
  initialValue: '',
  onChange: e => e,
};

export default RomajiInput;
