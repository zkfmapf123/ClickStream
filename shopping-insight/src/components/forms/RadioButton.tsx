import React, { useState } from 'react';
import { Radio, RadioChangeEvent } from 'antd';
import { RadioButtonProps } from '../../utils/@types';

export default function RadioButton({ options, onChange }: RadioButtonProps) {
  const [value, setValue] = useState(options[0].key);

  const onHandleChangeRadioButton = (e: RadioChangeEvent) => {
    const value = e.target.value;
    onChange(value);
    setValue(value);
  };

  const radioOptions = options.map(option => ({
    label: option.label,
    value: option.key,
  }));

  return (
    <Radio.Group
      options={radioOptions}
      onChange={onHandleChangeRadioButton}
      value={value}
      optionType="button"
    />
  );
}
