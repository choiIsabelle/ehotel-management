import * as c from './CustomComponents';
import { useRef, useState } from 'react';

const labelStyle = {
  marginTop: '0.5rem',
  textAlign: 'left',
};

export function RadioButton({ radioTitle, options, radioCheck }) {
  const radioButtonRefs = options.map(() => useRef(null));
  const [selectedValue, setSelectedValue] = useState(null);

  const handleRadioClick = (index) => {
    const value = radioButtonRefs[index].current.value;
    setSelectedValue(value);
    radioCheck(value);
  };

  return (
    <c.BasicContainer>
      <c.SubTitle>{radioTitle}</c.SubTitle>
      {options.map((o, index) => (
        <RadioButtonOption
          key={o}
          option={o}
          radioTitle={radioTitle}
          onClick={() => handleRadioClick(index)}
          radioButtonRef={radioButtonRefs[index]}
        />
      ))}
    </c.BasicContainer>
  );
}

const RadioButtonOption = ({ option, radioTitle, onClick, radioButtonRef }) => {
  return (
    <label style={labelStyle} htmlFor={option}>
      <input
        onClick={onClick}
        type="radio"
        value={option}
        name={radioTitle}
        data-id={option}
        ref={radioButtonRef}
      />
      {option}
    </label>
  );
};
