import "./shim";
import { View } from "react-native";
import { NFCTrade } from "./src";
import { PaperProvider } from "react-native-paper";

export default function App() {
    return (
        <PaperProvider>
            <View style={{ flex: 1 }}>
                <NFCTrade />
            </View>
        </PaperProvider>
    );
}
