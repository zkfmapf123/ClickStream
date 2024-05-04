import { Select } from 'antd';
import styled from 'styled-components';
import { SelectCategoryProps } from '../../utils/@types';

export default function SelectCategory({
  onChange,
  options,
  placeholder,
  isMultiple,
}: SelectCategoryProps) {
  const handleSelectChange = (value: string | string[]) => {
    if (onChange) {
      onChange(value);
    }
  };
  return (
    <StyledSelectWrapper>
      <Select
        style={{ width: '100%' }}
        onChange={handleSelectChange}
        placeholder={placeholder}
        mode={isMultiple ? 'multiple' : undefined}
      >
        {options.map(option => (
          <Select.Option key={option.key} value={option.key}>
            {option.label}
          </Select.Option>
        ))}
      </Select>
    </StyledSelectWrapper>
  );
}

const StyledSelectWrapper = styled.div`
  width: 200px;
`;
