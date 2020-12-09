import * as React from "react";
import Paper from "@material-ui/core/Paper";
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
  LineSeries,
  ZoomAndPan,
} from "@devexpress/dx-react-chart-material-ui";
import { Animation } from "@devexpress/dx-react-chart";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from '@material-ui/core/CardHeader';

const generateData = (n) => {
  const ret = [];
  let y = 0;
  for (let i = 0; i < n; i += 1) {
    y += Math.round(Math.random() * 10 - 5);
    ret.push({ x: i, y });
  }
  return ret;
};
const data1 = generateData(100);

const data2 = [
  { year: "2/2/2020", population: 50 },
  { year: "3/2/2020", population: 60 },
  { year: "4/2/2020", population: 75 },
  { year: "5/2/2020", population: 65 },
  { year: "6/2/2020", population: 80 },
  { year: "7/2/2020", population: 85 },
  { year: "8/2/2020", population: 90 },
];

export default class ChartDemo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data1,
      data2,
    };
  }

  render() {
    console.log(data1);
    const { data1: chartData1, data2: chartData2 } = this.state;

    return (
      <Card>
        <h1 style={{marginLeft:"50px",marginTop:"10px"}}>Thống kê cá nhân</h1>
        <div style={{ width: "1200px", margin: "auto" }}>
          <div>
            <CardContent>
              <Paper>
                <Chart data={chartData1}>
                  <ArgumentAxis />
                  <Title text="Tần suất luyện tập theo thời gian" />
                  <ValueAxis />

                  <LineSeries valueField="y" argumentField="x" />
                  <ZoomAndPan />
                </Chart>
              </Paper>
            </CardContent>
          </div>
          <div>
            <CardContent>
              <Paper>
                <Chart data={chartData2}>
                  <ArgumentAxis />
                  <ValueAxis max={7} />

                  <BarSeries valueField="population" argumentField="year" />
                  <Title text="Theo dõi điểm số" />
                  <Animation />
                </Chart>
              </Paper>
            </CardContent>
          </div>
        </div>
      </Card>
    );
  }
}
