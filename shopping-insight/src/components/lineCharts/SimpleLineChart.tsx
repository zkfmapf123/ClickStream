import React from 'react';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { Ages, Metric } from '../../utils/@types';
import styled from 'styled-components';

interface SimpleLineChartProps {
  metrics: Metric[];
  groups: Ages[];
  groupName: string;
  xAxisDataKey: string;
}

const ColorParams = {
  '20': '#FF5733', // 빨간색
  '50': '#4CAF50', // 초록색
  '10': '#3498DB', // 파란색
  '30': '#212121', // 검정색
  '40': '#808080', // 회색
  '60': '#2C3E50', // 다크 그레이
};

const SimpleLineChart: React.FC<SimpleLineChartProps> = ({
  metrics,
  groups,
  groupName,
  xAxisDataKey,
}: SimpleLineChartProps) => {
  return (
    <ResponsiveContainer>
      <LineChart
        width={1000}
        height={800}
        data={metrics}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={xAxisDataKey} />
        <YAxis />
        <Tooltip />
        <Legend
          layout="horizontal"
          verticalAlign="top"
          align="center"
          height={40}
          iconType="rect"
          iconSize={20}
        />
        {groups.map(group => (
          <Line
            name={`${group}${groupName}`}
            key={group}
            type="monotone"
            dataKey={group}
            stroke={ColorParams[group]}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SimpleLineChart;

const ResponsiveContainer = styled.div`
  @media screen and (max-width: 768px) {
    width: 500px%;
  }
`;
