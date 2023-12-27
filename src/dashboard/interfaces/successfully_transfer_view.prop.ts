import { CryptoCurrency } from "../constants/currency.enum";

export interface SuccessfullyTransferViewProp {
    quantity: number;
    currency: CryptoCurrency;
    visible: boolean;
    onDismiss: () => void;
}
