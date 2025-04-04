import { FC } from "react";
import { RatingStatView } from "../model/types";
import styles from "./styles/stat-common.module.css";
import { Bar } from "react-chartjs-2";

type RatingStatProps = {
  stat: RatingStatView;
};

export const RatingStat: FC<RatingStatProps> = (props) => {
  const { stat } = props;
  return (
    <div className={styles.statContainer}>
      <h3>{stat.question}</h3>
      <div className={styles.chart}>
        <Bar
          data={{
            labels: ["점수"],
            datasets: [
              {
                categoryPercentage: 0.5,
                barPercentage: 0.4,
                label: "평균 점수",
                data: [stat.average],
                borderWidth: 1,
              },
            ],
          }}
          options={{
            maintainAspectRatio: false,
            indexAxis: "y",
            scales: {
              x: {
                min: stat.min,
                max: stat.max,
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
