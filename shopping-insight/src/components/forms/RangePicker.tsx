import { DatePicker } from 'antd';
import dayjs from 'dayjs';
import { RangeValue } from 'rc-picker/lib/interface';
import { RangePickerComponentProps } from '../../utils/@types';

const { RangePicker } = DatePicker;

export default function RangePickerComponent({
  value,
  onChange,
}: RangePickerComponentProps) {
  const handleRangePickerChange = (values: RangeValue<dayjs.Dayjs>) => {
    onChange(values);
  };
  return (
    <div>
      <RangePicker value={value} onChange={handleRangePickerChange} />
    </div>
  );
}
