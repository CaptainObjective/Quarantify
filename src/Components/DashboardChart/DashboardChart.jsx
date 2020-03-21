import React from 'react';
import { useHistory } from 'react-router-dom';
import { styles } from './styles';
import { Card } from 'semantic-ui-react';
import { CartesianGrid, Line, LineChart, ReferenceLine, YAxis } from 'recharts';

const data = [
  {
    name: '1',
    points: 0
  },
  {
    name: '1',
    points: 4
  },
  {
    name: '2',
    points: 9
  },
  {
    name: '3',
    points: 13
  },
  {
    name: '4',
    points: 17
  },
  {
    name: '5',
    points: 17
  },
  {
    name: '6',
    points: 20
  },
  {
    name: '7',
    points: 23
  },
  {
    name: '8',
    points: 25
  },
  {
    name: '9',
    points: 26
  },
  {
    name: '7',
    points: 29
  },
  {
    name: '8',
    points: 29
  },
  {
    name: '9',
    points: 30
  }
];

const DashboardChart = () => {
  const history = useHistory();

  return (
    <div style={styles.container}>
      <div style={styles.header}>Statistics of your activities</div>
      <Card style={styles.chart}>
        <LineChart width={300} height={150} data={data} margin={0} style={{ padding: 0 }}>
          <YAxis ticks={[0, 10, 20, 30]} stroke="#54C6BE" strokeWidth={0} padding={0} width={30} />
          <Line type="linear" dataKey="points" stroke="#4267B2" dot={false} strokeWidth={2} />
          <ReferenceLine y={30} stroke="#CCCCCC" />
          <ReferenceLine y={20} stroke="#CCCCCC" />
          <ReferenceLine y={10} stroke="#CCCCCC" />
          <ReferenceLine y={0} stroke="#CCCCCC" strokeDasharray="3 3" />
        </LineChart>
      </Card>
      <div style={styles.seeAll} onClick={() => history.push('/activity')}>
        See All
      </div>
    </div>
  );
};

export default DashboardChart;
