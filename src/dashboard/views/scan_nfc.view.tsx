import {
    Avatar,
    Divider,
    HelperText,
    Modal,
    Portal,
    SegmentedButtons,
    Text,
    TextInput,
} from "react-native-paper";
import { ScanNFCViewProp } from "../interfaces/scan_nfc_view.prop";
import { DEFAULT_MODAL_STYLE } from "../config/default_modal.config";
import { Image, View } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { CryptoCurrency } from "../constants/currency.enum";

export const ScanNFCView = (props: ScanNFCViewProp) => {
    return (
        <Portal>
            <Modal
                visible={props.visible}
                contentContainerStyle={DEFAULT_MODAL_STYLE}
                onDismiss={props.onDismiss}
            >
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        paddingHorizontal: 10,
                    }}
                >
                    <SegmentedButtons
                        style={{ marginBottom: 30 }}
                        value={props.mode}
                        buttons={[
                            {
                                value: "nfc",
                                icon: "cards",
                                label: "NFC",
                            },
                            {
                                value: "qr",
                                icon: "qrcode-scan",
                                label: "QR Scan",
                            },
                        ]}
                        onValueChange={(mode: string) => {
                            props.onModeChange(mode);
                        }}
                    />

                    <Divider style={{ marginVertical: 10 }} />

                    <View
                        style={{
                            // flex: 1,
                            marginBottom: 50,
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        {props.mode === "nfc" ? (
                            <>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        width: "100%",
                                    }}
                                >
                                    <View style={{ width: "60%" }}>
                                        <TextInput
                                            label="Amount"
                                            keyboardType="numeric"
                                            value={props.transactionAmount}
                                            onChangeText={(value) =>
                                                props.onTransactionAmountChange(
                                                    value,
                                                )
                                            }
                                        />
                                        <HelperText
                                            type="error"
                                            visible={
                                                Number.parseInt(
                                                    props.transactionAmount,
                                                ) <= 0
                                            }
                                        >
                                            Enter an amount that larger than 0
                                        </HelperText>
                                    </View>

                                    <View style={{ width: "40%" }}>
                                        <RNPickerSelect
                                            value={props.currency}
                                            items={[
                                                {
                                                    label: "$ USDT",
                                                    value: CryptoCurrency.USDT,
                                                },

                                                {
                                                    label: "ETH",
                                                    value: CryptoCurrency.ETH,
                                                },

                                                {
                                                    label: "VIC Viction",
                                                    value: CryptoCurrency.VICTION,
                                                },
                                            ]}
                                            onValueChange={(
                                                value: CryptoCurrency,
                                            ) => {
                                                props.onCurrencyChange(value);
                                            }}
                                        />
                                    </View>
                                </View>

                                <Text variant="headlineMedium">
                                    Ready To Scan
                                </Text>
                                <Avatar.Icon
                                    icon={{
                                        uri: "https://i.imgur.com/5qQflnn.png",
                                    }}
                                />
                                <Text>Please tap NFC Tags</Text>
                            </>
                        ) : (
                            <Image
                                source={{
                                    uri: "https://i.imgur.com/mhP9vOz.png",
                                }}
                                style={{ height: 222, width: 222 }}
                            />
                        )}
                    </View>
                </View>
            </Modal>
        </Portal>
    );
};
