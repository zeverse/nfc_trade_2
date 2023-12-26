import { LineChart } from "react-native-chart-kit";
import { TransactionChartProp } from "../interfaces/transaction_chart.prop";
import { mapDataChart } from "../mapper/chart_data.mapper";
import { DefaultTransactionChartConfig } from "../config/transaction_chart.config";
import { Text } from "react-native-paper";
import { Dimensions } from "react-native";


export const TransactionChart = (props: TransactionChartProp) => {
    return (
        props.data ?
            <LineChart
                bezier
                data={mapDataChart(props.data)}
                width={Dimensions.get("window").width}
                height={Dimensions.get("window").height/3}
                chartConfig={DefaultTransactionChartConfig}
            /> : <Text>No Chart</Text>

    );
};