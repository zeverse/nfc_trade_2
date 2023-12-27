import { Modal, Portal, Text } from "react-native-paper";
import { ScanNFCViewProp } from "../interfaces/scan_nfc_view.prop";
import { DEFAULT_MODAL_STYLE } from "../config/default_modal.config";

export const ScanNFCView = (props: ScanNFCViewProp) => {
    return (
        <Portal>
            <Modal
                visible={props.visible}
                contentContainerStyle={DEFAULT_MODAL_STYLE}
                onDismiss={props.onDismiss}

            >
                <Text>Example Modal. Click outside this area to dismiss.</Text>
            </Modal>
        </Portal>

    );
};
