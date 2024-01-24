import { ChoiceList } from '@shopify/polaris';
import React, { useState, useCallback } from 'react';

function ChoicesList() {
  const [selected, setSelected] = useState(['hidden']);

  const handleChange = useCallback((value) => setSelected(value), []);

  return (
    <ChoiceList
      title="Company name"
      choices={[
        { label: 'Hidden', value: 'hidden' },
        { label: 'Optional', value: 'optional' },
        { label: 'Required', value: 'required' },
      ]}
      selected={selected}
      onChange={handleChange}
    />
  );
}

export default ChoicesList;
