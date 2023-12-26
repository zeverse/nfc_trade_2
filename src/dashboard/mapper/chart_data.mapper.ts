import { TransactionData } from "../models/transaction.model";
import { LineChartData } from "react-native-chart-kit/dist/line-chart/LineChart";

export const mapDataChart = (data: TransactionData): LineChartData => {

    // return {
    //     labels: data?.labels,
    //     datasets: data?.datasets
    // };
    return {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43],
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                strokeWidth: 2 // optional
            }
        ],
        legend: ["ETH"] // optional
    };
};