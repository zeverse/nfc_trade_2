import { BalanceProp } from "../interfaces/balance.prop";
import { View } from "react-native";
import { Text } from "react-native-paper";

export const BalanceStatistic = (props: BalanceProp) => {
    return (
        <View style={{ flexDirection: "column" }}>
            <Text>Current Value:</Text>

            <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                    <Text variant="displayLarge" style={{ fontWeight: "bold" }}>
                        {props.currency || "$"}
                    </Text>
                </View>


                <View style={{ flex: 9 }}>
                    <Text variant="displayLarge" style={{ fontWeight: "bold" }}>
                        {props.value || 0}
                    </Text>
                </View>
            </View>
        </View>
    );
};