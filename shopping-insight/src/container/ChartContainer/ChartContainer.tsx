import styled from 'styled-components';
import SimpleLineChart from '../../components/lineCharts/SimpleLineChart';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { useGroupsValue } from '../../hooks/useGroupsValue';
import EmptyResult from '../../components/lineCharts/EmptyResult';

export default function ChartContainer() {
  const { groupsValue } = useGroupsValue();

  const chartData = useSelector((state: RootState) => {
    if (!state.shopping.responseData?.results) {
      return [];
    }

    const chartDataArray = state.shopping.responseData.results[0].data.reduce(
      (acc, { period, ratio, group }) => {
        const existingDataIndex = acc.findIndex(item => item.period === period);

        if (existingDataIndex !== -1) {
          acc[existingDataIndex][group] = ratio;
        } else {
          const newData = { period, [group]: ratio };
          acc.push(newData);
        }

        return acc;
      },
      [],
    );

    return chartDataArray;
  });

  return (
    <StyledChartContainer>
      {chartData.length ? (
        <SimpleLineChart
          metrics={chartData}
          groups={groupsValue}
          groupName="대"
          xAxisDataKey="period"
        />
      ) : (
        <EmptyResult />
      )}
    </StyledChartContainer>
  );
}

export const StyledChartContainer = styled.div`
  display: flex;
  margin-top: 3rem;
  justify-content: center;
`;
