import { ShoppingState } from '../utils/@types';

type Props = {
  [T in keyof ShoppingState['value']]: string;
};

const alertObj: Props = {
  datePicker: '날짜를 선택해주세요',
  category: '카테고리를 선택해주세요.',
  input: '키워드를 입력해주세요.',
  timeunit: '시간대를 선택해주세요.',
  age: '시간대를 선택해주세요',
  gender: '시간대를 선택해주세요.',
  device: '시간대를 선택해주세요.',
};

export const useFormValidation = (shoppingValue: ShoppingState['value']) => {
  for (const [key, item] of Object.entries(shoppingValue)
    .filter(([key, _]) => key !== 'gender')
    .filter(([key, _]) => key !== 'device')) {
    if (!item) {
      alert(alertObj[key]);
      return false;
    }
  }
  return true;
};
