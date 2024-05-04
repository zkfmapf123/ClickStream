import { Input } from 'antd';
import React from 'react';
import { KEYWORD } from '../../utils/constants';
import { InputProps } from '../../utils/@types';

export default function InputBox({ value, onChange }: InputProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (onChange) {
      onChange(inputValue);
    }
  };

  return (
    <div>
      <Input placeholder={KEYWORD} value={value} onChange={handleInputChange} />
    </div>
  );
}
