import { Button } from "react-native-paper";
import { ReadCardBtnProp } from "../interfaces/read_card_btn.prop";

export const ReadCardBtn = (props: ReadCardBtnProp) => {
    return (
        <Button
            icon="bank-transfer-out"
            mode="contained"
            onPress={props.onPress}
        >
            Transfer
        </Button>
    );
};