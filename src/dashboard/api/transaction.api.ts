import { TransactionData } from "../models/transaction.model";

export const getDummyTransactionData = async (): Promise<TransactionData> => {
    return Promise.resolve(
        new TransactionData(
            ["January", "February", "March", "April", "May", "June", "July"],
            [65, 59, 80, 81, 56, 55, 40]
        )
    );
};