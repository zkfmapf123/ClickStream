import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/reducers';
import { setCategory } from '../redux/slices/shoppingslice';

export function useSelectCategory() {
  const categoryValue = useSelector(
    (state: RootState) => state.shopping.value.category,
  );

  const dispatch = useDispatch();

  const setCategoryValue = (value: string) => {
    dispatch(setCategory(value));
  };

  return {
    categoryValue,
    setCategoryValue,
  };
}
