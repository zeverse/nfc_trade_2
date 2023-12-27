import NfcManager, { NfcTech } from "react-native-nfc-manager";
import { convertByteArrayPayload } from "../utils/nfc.utils";

export const readNFCTag = async (): Promise<string | null> => {
    try {
        // register for the NFC tag with NDEF in it
        await NfcManager.requestTechnology(NfcTech.Ndef);
        // the resolved tag object will contain `ndefMessage` property
        const tag = await NfcManager.getTag();

        const tagPayload = tag?.ndefMessage[0]?.payload;
        return convertByteArrayPayload(tagPayload as unknown as Uint8Array);
    } catch (ex) {
        console.warn("Oops!", ex);
        return null;
    }
};
