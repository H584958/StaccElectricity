import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import styles from './Chart.module.css';

function Chart({ data }) {
  return (
      <div className={styles.line_chart}>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="5 5" />
            <XAxis dataKey="hour" label="Kl." />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="cost"
              stroke="#8884d8"
              strokeWidth={2}
              name="Cost"
            />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#82ca9d"
              strokeWidth={2}
              name="Price"
            />
            <Line
              type="monotone"
              dataKey="consumption"
              stroke="#ffc658"
              strokeWidth={2}
              name="Consumption"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
  );
}

export default Chart;
