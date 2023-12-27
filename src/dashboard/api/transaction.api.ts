import { TransactionData } from "../models/transaction.model";

export const getDummyTransactionData = async (): Promise<TransactionData> => {
    return Promise.resolve(
        new TransactionData(
            ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            [65, 59, 80, 81, 56, 55, 40],
        ),
    );
};

export const getTransactionHistory = async (): Promise<TransactionData> => {
    return Promise.resolve(new TransactionData([], []));
};
