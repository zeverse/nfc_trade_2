import { TransactionData } from "../models/transaction.model";
import { LineChartData } from "react-native-chart-kit/dist/line-chart/LineChart";

export const mapDataChart = (data: TransactionData): LineChartData => {
    return {
        labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
            {
                data: [20, 45, 28, 30, 44, 43, 54],
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                strokeWidth: 2, // optional
            },
        ],
    };
};
