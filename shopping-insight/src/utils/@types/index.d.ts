import { Dayjs } from 'dayjs';
import { ReactNode } from 'react';
import { RangeValue } from 'rc-picker/lib/interface';
export type TimeUnit = 'date' | 'week' | 'month';
export type Device = '' | 'pc' | 'mo';
export type Gender = '' | 'm' | 'f';
export type Ages = '10' | '20' | '30' | '40' | '50' | '60';
export type Category =
  | '50000000' // 생활/건강
  | '50000001' // 패션잡화
  | '50000002' // 화장품/미용
  | '50000003' // 디지털/가전
  | '50000004' // 가구/인테리어
  | '50000005' // 출산/육아
  | '50000006' // 식품
  | '50000007' // 스포츠/레저
  | '50000008' // 패션의류
  | '50000009' // 여가/생활편의
  | '50000010' // 면세점
  | '50005542'; // 도서

export interface LayoutDefaultProps {
  children?: ReactNode;
}

export interface RangePickerComponentProps {
  value?: RangeValue<Dayjs>;
  onChange: (values: RangeValue<Dayjs>) => void;
}

export interface SelectCategoryProps {
  onChange?: (value: string | string[]) => void;
  options: SelectOption[];
  options: { key: string; label: string }[];
  placeholder: string;
  isMultiple: boolean;
}

export interface RadioButtonProps {
  options: { key: string; label: string }[];
  onChange: (e: string) => void;
}

export interface InputProps {
  value?: string;
  onChange?: (value: string) => void;
}

export interface SubmitProps {
  onSubmit: () => void;
}

export interface ShoppingState {
  value: {
    datePicker: RangeValue<Dayjs> | undefined;
    category: string | undefined;
    input: string | undefined;
    timeunit: string | undefined;
    age: Ages[] | undefined;
    gender: string | undefined;
    device: string | undefined;
  };
  responseData: ResponseData | null;
}

export interface ResultData {
  period: string;
  ratio: number;
  group: string;
}

export interface ResponseData {
  startDate: string;
  endDate: string;
  timeUnit: string;
  results: {
    data: ResultData[];
    keyword: string[];
    title: string;
  }[];
}

type Metric = { [key: string]: number | string };
interface RenderData {
  category: Category | null;
  metrics: Metric[];
  groups: Ages[];
}
