import { View } from "react-native";
import { TouchableRipple, Text, PaperProvider, Portal, Modal } from "react-native-paper";
import { NotSupportedViewProp } from "../interfaces/not_supported_view.prop";
import { DEFAULT_MODAL_STYLE } from "../config/default_modal.config";

export const NotSupportedView = (props: NotSupportedViewProp) => {
    return (
        <Portal>
            <Modal
                visible={props.visible}
                onDismiss={props.onDismiss}
                contentContainerStyle={DEFAULT_MODAL_STYLE}
            >
                <View style={{
                    flex: 1,
                }}>
                    <TouchableRipple
                        style={{
                            width: "100%",
                            height: "100%",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                        onPress={() => {
                        }}
                        rippleColor="rgba(0, 0, 0, .32)"
                    >
                        <Text>Not Supported</Text>
                    </TouchableRipple>
                </View>
            </Modal>
        </Portal>

    );
};
