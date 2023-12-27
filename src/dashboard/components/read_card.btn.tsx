import { Button } from "react-native-paper";
import { ReadCardBtnProp } from "../interfaces/read_card_btn.prop";
import { useEffect, useState } from "react";
import { validateNFCSupport } from "../utils/nfc.utils";
import { ScanNFCView } from "../views/scan_nfc.view";
import { NotSupportedView } from "../views/not_supported.view";
import { readNFCTag } from "../events/read_nfc_tag.event";
import NfcManager from "react-native-nfc-manager";
import { CryptoCurrency } from "../constants/currency.enum";
import { SuccessfullyTransferView } from "../views/successfully_transfer.view";

export const ReadCardBtn = (props: ReadCardBtnProp) => {
    const [mode, setMode] = useState<string>("nfc");
    const [isSupported, setSupported] = useState<boolean>(false);
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [transactionAmount, setTransactionAmount] = useState<string>("0");
    const [currency, setCurrency] = useState<CryptoCurrency>(
        CryptoCurrency.USDT,
    );
    const [isTransferredSuccessfully, setTransferSuccessfully] =
        useState<boolean>(false);

    useEffect(() => {
        validateNFCSupport().then((value) => setSupported(value));
    }, []);
    return (
        <>
            <Button
                icon="bank-transfer-out"
                mode="contained"
                onPress={() => {
                    setModalVisible(true);
                    if (mode === "nfc") {
                        readNFCTag().then((value) => {
                            if (value) props.onTranslate(value);
                            NfcManager.cancelTechnologyRequest().then(() => {
                                setModalVisible(false);
                                setTransferSuccessfully(true);
                            });
                        });
                    } else {
                        NfcManager.cancelTechnologyRequest();
                    }
                }}
            >
                Transfer
            </Button>

            {isSupported ? (
                <ScanNFCView
                    visible={modalVisible}
                    transactionAmount={transactionAmount}
                    currency={currency}
                    onCurrencyChange={(currency: CryptoCurrency) =>
                        setCurrency(currency)
                    }
                    onTransactionAmountChange={(value: string) => {
                        setTransactionAmount(value);
                    }}
                    onDismiss={() => {
                        setModalVisible(false);
                        NfcManager.cancelTechnologyRequest();
                    }}
                    mode={mode}
                    onModeChange={(mode) => setMode(mode)}
                />
            ) : (
                <NotSupportedView
                    visible={modalVisible}
                    onDismiss={() => setModalVisible(false)}
                />
            )}

            <SuccessfullyTransferView
                quantity={Number.parseInt(transactionAmount)}
                currency={currency}
                visible={isTransferredSuccessfully}
                onDismiss={() => {
                    setTransactionAmount("0");
                    setCurrency(CryptoCurrency.USDT);
                    setTransferSuccessfully(false);
                }}
            />
        </>
    );
};
