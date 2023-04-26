import React from 'react'  
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid , Tooltip,  PieChart, Pie, Legend} from 'recharts';
import './Analytics.css'

function getIntroOfPage(label) {
  if (label === '2020-I') {
    return 'Total donation in 2020 phase 1 was :';
  } if (label === '2020-II') {
    return 'Total donation in 2020 phase 2 was :';
  } if (label === '2021-I') {
    return 'Total donation in 2021 phase 1 was :';
  } if (label === '2021-II') {
    return 'Total donation in 2021 phase 2 was :';
  } if (label === '2022-I') {
    return 'Total donation in 2022 phase 1 was :';
  } if (label === '2022-II') {
    return 'Total donation in 2022 phase 2 was :';
  } if (label === '2023-I') {
    return 'Total donation in 2023 phase 1 was :';
  }
}

function CustomTooltip({ payload, label, active }) {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="intro">{getIntroOfPage(label) }</p>
        <p className="label">{`${payload[0].value}`}</p>
        {/* <p className="desc">Anything you want can be displayed here.</p> */}
      </div>
    );
  }

  return null;
}

function Analytics() {

  const colors = ['#000000', '#ff8000', '#000000', '#ff8000'];

const data = [
  {
    name: '2020',
    uv: 1500,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '2021',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '2022',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '2023',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];



const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};


const dataPie = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="container">
      <div className="bar-chart">
        <BarChart width={700} height={550} data={data} margin={{ top: 20, right:0, left: 70}}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip />}/>
          <Bar dataKey="uv" fill="#8884d8" label={{ position: 'top' }}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </div>
      <div className="pie-charts">
      <div className="pie-chart-1">
        <PieChart width={400} height={400} >
          <Pie
            data={dataPie}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          >
            {dataPie.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </div>
      <div className="pie-chart-1">
        <PieChart width={400} height={400}>
          <Pie
            data={dataPie}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          >
            {dataPie.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </div>
      </div>
    </div>
  );
}


export default Analytics