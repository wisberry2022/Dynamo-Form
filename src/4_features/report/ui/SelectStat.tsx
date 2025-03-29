import { FC } from "react";
import { SelectStatView } from "../model/types";
import { CategoryScale, Chart, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";
import styles from "./styles/stat-common.module.css";

type SelectStatProps = {
  stat: SelectStatView;
};

export const SelectStat: FC<SelectStatProps> = (props) => {
  const { stat } = props;

  return (
    <div className={styles.statContainer}>
      <h3>{stat.question}</h3>
      <div className={styles.chart}>
        <Bar
          data={{
            labels: stat.answers.map((answer) => answer.question),
            datasets: [
              {
                categoryPercentage: 0.5,
                barPercentage: 0.4,
                // maxBarThickness: 30,
                label: "해당 응답을 선택한 수",
                data: stat.answers.map((answer) => answer.count),
                borderWidth: 1,
              },
            ],
          }}
          options={{
            indexAxis: "y",
            scales: {
              x: {
                min: 0,
                max: Math.max(...stat.answers.map((answer) => answer.count)),
              },
              y: {
                beginAtZero: true,
                ticks: {
                  color: "black",
                  font: {
                    size: 12,
                  },
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
};
