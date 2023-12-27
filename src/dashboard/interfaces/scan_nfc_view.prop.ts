import { CryptoCurrency } from "../constants/currency.enum";

export interface ScanNFCViewProp {
    visible: boolean;
    mode: string;
    onModeChange: (mode: string) => void;
    onDismiss: () => void;
    transactionAmount: string;
    onTransactionAmountChange: (value: string) => void;
    currency: CryptoCurrency;
    onCurrencyChange: (value: CryptoCurrency) => void;
}
