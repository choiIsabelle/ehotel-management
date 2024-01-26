import {Select} from '@shopify/polaris';
import {useState, useCallback} from 'react';
import styled from 'styled-components'

const SubText = styled.span`
text-align: left;
font-size: var(--p-font-size-325);
margin-top: 1rem;
font-weight: 400;
`
const SelectDropdownContainer = styled.div`
margin-top: 0.5rem;
`


export const SelectDropdown=({subMsg, vals})=> {
  const [selected, setSelected] = useState('today');

  const handleSelectChange = useCallback(
    (value) => setSelected(value),
    [],
  );

//   const options = [
//     {label: 'Hyatt', value: 'hyatt'},
//     {label: 'Hilton', value: 'hilton'},
//     {label: 'Four Seasons', value: 'four seasons'},
//   ];

  return (
    <SelectDropdownContainer>
    <Select
      label={<SubText>{subMsg}</SubText>}
      options={vals}
      onChange={handleSelectChange}
      value={selected}
    />
    </SelectDropdownContainer>
  );
}