import dayjs, { Dayjs } from 'dayjs';
import { RangeValue } from 'rc-picker/lib/interface';
import { ShoppingState } from '../utils/@types';
import { useFormValidation } from './useFormValidation';
import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import { setResponseData } from '../redux/slices/shoppingslice';
import { getEnv } from '../utils/getEnv';

export const useFormSubmit = async (
  shoppingValue: ShoppingState['value'],
  rangePickerValue: RangeValue<Dayjs> | undefined,
  dispatch: Dispatch,
) => {
  const isValid = useFormValidation(shoppingValue);
  if (!isValid) {
    return;
  }
  const { age, category, device, gender, input, timeunit } = shoppingValue;

  const todayUnix = dayjs(new Date()).unix();
  const [startDate, endDate] = rangePickerValue?.map(
    it => it?.format('YYYY-MM-DD'),
  ) as string[];

  if (endDate && dayjs(endDate).isAfter(dayjs(), 'day')) {
    alert('종료일이 오늘 날짜보다 뒤일 수 없습니다.');
    return;
  }

  if (
    [startDate, endDate]
      .map(it => dayjs(it).unix())
      .every(it => it >= todayUnix)
  ) {
    alert('시간 범위가 올바르지 않습니다.');
    return;
  }

  try {
    const response = await axios.post(
      getEnv().REACT_APP_SHOPPING_URL,
      {
        startDate: startDate,
        endDate: endDate,
        timeUnit: timeunit,
        category,
        keyword: input,
        device,
        gender,
        ages: age,
      },
      {
        headers: {
          'Content-Type': `application/json`,
        },
      },
    );

    dispatch(setResponseData(JSON.parse(response.data.body)));
  } catch (error) {
    console.error(error);
  }
};
