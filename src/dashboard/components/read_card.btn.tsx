import { Button, PaperProvider } from "react-native-paper";
import { ReadCardBtnProp } from "../interfaces/read_card_btn.prop";
import { useEffect, useState } from "react";
import { validateNFCSupport } from "../utils/nfc.utils";
import { ScanNFCView } from "../views/scan_nfc.view";
import { NotSupportedView } from "../views/not_supported.view";

export const ReadCardBtn = (props: ReadCardBtnProp) => {
    const [isSupported, setSupported] = useState<boolean>(false);
    const [modalVisible, setModalVisible] = useState<boolean>(false);

    useEffect(() => {
        validateNFCSupport().then(value => setSupported(value));
    }, []);
    return (
        <>
            <Button
                icon="bank-transfer-out"
                mode="contained"
                onPress={() => setModalVisible(true)}
            >
                Transfer
            </Button>

            {isSupported ?
                <ScanNFCView visible={modalVisible} onDismiss={() => setModalVisible(false)} /> :
                <NotSupportedView visible={modalVisible} onDismiss={() => setModalVisible(false)} />
            }
        </>
    );
};
