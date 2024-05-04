import styled from 'styled-components';

export default function EmptyResult() {
  return (
    <EmptyResultContainer>
      <EmptyResultText>
        데이터가 없어요!
        <br />
        다른 검색어를 입력하는 것이 어떨까요?
      </EmptyResultText>
    </EmptyResultContainer>
  );
}

const EmptyResultContainer = styled.div`
  width: 1000px;
  height: 800px;
  display: flex;
  font-size: 16px;
  text-align: center;
  padding: 20px;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    background-color: #f0f0f0;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  }

  transition:
    background-color 0.3s,
    box-shadow 0.3s;
`;

const EmptyResultText = styled.div`
  font-size: 24px;
  color: #333;
  font-weight: bold;
  line-height: 1.5;
  transition: font-size 0.3s;

  ${EmptyResultContainer}:hover & {
    font-size: 28px;
  }
`;
