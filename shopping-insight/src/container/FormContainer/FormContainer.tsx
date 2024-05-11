import InputBox from "../../components/forms/InputBox";
import SelectCategory from "../../components/forms/SelectCategory";
import SubmitButton from "../../components/forms/SubmitButton";
import RangePickerComponent from "../../components/forms/RangePicker";
import RadioButton from "../../components/forms/RadioButton";
import {
  StyledFormContainer,
  StyledSelectWrapper,
} from "./StyledFormContainer";
import {
  AGE_OPTIONS,
  CATEGORY,
  CATEGORY_LIST,
  DEFAULT_AGE,
  DEVICE_OPTIONS,
  GENDER_OPTIONS,
  TIME_UNIT_OPTIONS,
} from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import { useRangePicker } from "../../hooks/useRangePicker";
import { useSelectCategory } from "../../hooks/useSelectCategory";
import {
  setDevice,
  setGender,
  setInput,
  setTimeUnit,
} from "../../redux/slices/shoppingslice";

import { useFormSubmit } from "../../hooks/useFormSubmit";
import { useGroupsValue } from "../../hooks/useGroupsValue";
import { useEffect } from "react";
import { useClickEvent } from "../../hooks/useClickEvent";

export default function FormContainer() {
  const { rangePickerValue, setRangePicker } = useRangePicker();
  const { setCategoryValue } = useSelectCategory();
  const { setGroupsValue } = useGroupsValue();
  const dispatch = useDispatch();

  const shoppingValue = useSelector((state: RootState) => state.shopping.value);
  const HandleSubmit = async () => {
    await EventEntryPoint("submit");
    useFormSubmit(shoppingValue, rangePickerValue, dispatch);
  };

  const EventEntryPoint = async (clickEvent: string) => {
    const userId = JSON.parse(sessionStorage.getItem("userId"));
    await useClickEvent({
      clickEvent,
      userId: userId,
      userAgent: navigator.userAgent,
      language: navigator.language,
      platform: navigator.platform,
    });
  };

  useEffect(() => {
    EventEntryPoint("visit");
  }, []);

  return (
    <StyledFormContainer>
      <StyledSelectWrapper>
        <RangePickerComponent
          value={rangePickerValue}
          onChange={setRangePicker}
        />
        <SelectCategory
          onChange={setCategoryValue}
          options={CATEGORY_LIST}
          placeholder={CATEGORY}
          isMultiple={false}
        />
        <InputBox
          value={shoppingValue.input}
          onChange={(values) => dispatch(setInput(values))}
        />
        <RadioButton
          options={TIME_UNIT_OPTIONS}
          onChange={(value) => dispatch(setTimeUnit(value))}
        />
      </StyledSelectWrapper>
      <StyledSelectWrapper>
        <SelectCategory
          onChange={setGroupsValue}
          options={AGE_OPTIONS}
          placeholder={DEFAULT_AGE}
          isMultiple={true}
        />
        <RadioButton
          options={GENDER_OPTIONS}
          onChange={(value) => dispatch(setGender(value))}
        />
        <RadioButton
          options={DEVICE_OPTIONS}
          onChange={(value) => dispatch(setDevice(value))}
        />
        <SubmitButton onSubmit={HandleSubmit} />
      </StyledSelectWrapper>
    </StyledFormContainer>
  );
}
