import NfcManager from "react-native-nfc-manager";

export const validateNFCSupport = async (): Promise<boolean> => {
    return await NfcManager.isSupported();
};

export const convertByteArrayPayload = (payload: Uint8Array): string => {
    let resultString = "";
    for (let i = 0; i < payload.length; i++) {
        resultString += String.fromCharCode(payload[i]);
    }
    return resultString;
}