import {Select} from '@shopify/polaris';
import {useState, useCallback, useEffect} from 'react';
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


export const SelectDropdown=({subMsg, vals, onChange})=> {
  const [selected, setSelected] = useState('');
  const handleDropDownChange=(value)=>{
    onChange(value)
    setSelected(value)
  }
  const handleSelectChange = useCallback(
    (value) =>  handleDropDownChange(value),
    [],
    );
  


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