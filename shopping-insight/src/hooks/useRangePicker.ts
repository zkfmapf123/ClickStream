import { useDispatch, useSelector } from 'react-redux';
import { Dayjs } from 'dayjs';
import { RangeValue } from 'rc-picker/lib/interface';
import { RootState } from '../redux/reducers';
import { setRangePickerValue } from '../redux/slices/shoppingslice';

export function useRangePicker() {
  const rangePickerValue = useSelector(
    (state: RootState) => state.shopping.value.datePicker,
  );
  const dispatch = useDispatch();
  const setRangePicker = (values: RangeValue<Dayjs>) => {
    dispatch(setRangePickerValue(values));
  };

  return {
    rangePickerValue,
    setRangePicker,
  };
}
