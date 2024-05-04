import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/reducers';
import { setAge } from '../redux/slices/shoppingslice';
import { Ages } from '../utils/@types';

export function useGroupsValue() {
  const groupsValue = useSelector(
    (state: RootState) => state.shopping.value.age,
  );

  const dispatch = useDispatch();
  const setGroupsValue = (value: Ages[]) => {
    dispatch(setAge(value));
  };

  return {
    groupsValue,
    setGroupsValue,
  };
}
