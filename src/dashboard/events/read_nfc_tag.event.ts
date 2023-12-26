import NfcManager, {NfcTech} from "react-native-nfc-manager";

export const readNFCTag = async (): Promise<void> => {
    try {
      // register for the NFC tag with NDEF in it
      await NfcManager.requestTechnology(NfcTech.Ndef);
      // the resolved tag object will contain `ndefMessage` property
      const tag = await NfcManager.getTag();

      console.warn('Tag found', tag?.ndefMessage[0]?.payload);
    } catch (ex) {
      console.warn('Oops!', ex);
    } finally {
      // stop the nfc scanning
      NfcManager.cancelTechnologyRequest();
    }
};
