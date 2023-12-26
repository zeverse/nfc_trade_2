import { View } from "react-native";
import { TouchableRipple, Text } from "react-native-paper";

export const NotSupportedView = () => {
    return (
        <View style={{
            flex: 1
        }}>
            <TouchableRipple
                style={{
                    width: "100%",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center"
                }}
                onPress={() => {}}
                rippleColor="rgba(0, 0, 0, .32)"
            >
                <Text>Not Supported</Text>
            </TouchableRipple>
        </View>
    );
};