import { Balance } from "../models/balance.model";

export const getDummyBalance = async (): Promise<Balance> => {
    return Promise.resolve(
        new Balance(100, "$")
    );
};