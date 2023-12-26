import NfcManager from "react-native-nfc-manager";

export const validateNFCSupport = async (): Promise<boolean> => {
    return await NfcManager.isSupported();
};