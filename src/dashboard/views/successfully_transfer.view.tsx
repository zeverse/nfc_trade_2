import { Avatar, Modal, Portal, Text } from "react-native-paper";
import { DEFAULT_MODAL_STYLE } from "../config/default_modal.config";
import { View } from "react-native";
import { SuccessfullyTransferViewProp } from "../interfaces/successfully_transfer_view.prop";

export const SuccessfullyTransferView = (
    props: SuccessfullyTransferViewProp,
) => {
    return (
        <Portal>
            <Modal
                visible={props.visible}
                onDismiss={props.onDismiss}
                contentContainerStyle={DEFAULT_MODAL_STYLE}
            >
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Text variant="headlineMedium">Successful</Text>
                    <Avatar.Icon
                        style={{ marginVertical: 10 }}
                        icon="check-bold"
                    />
                    <Text>
                        Transferred {props.quantity}{" "}
                        {props.currency === 0
                            ? "USDT"
                            : props.currency === 1
                              ? "ETH"
                              : "Viction"}
                    </Text>
                </View>
            </Modal>
        </Portal>
    );
};
