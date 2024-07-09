import { Keyboard, View } from "react-native";
import Input from "./Input";

function ExpenseForm() {
  function amountChnageHandler() {}
  return (
    <View>
      <Input
        label="Amount"
        textInputConfig={{
          keyboardType: "decimal-pad",
          onChangeText: amountChnageHandler,
        }}
      />
      <Input
        label="Date"
        textInputConfig={{
          placeholder: "YYYY-MM-DD",
          maxLength: 10,
          onChangeText: () => {},
        }}
      />
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
        }}
      />
    </View>
  );
}

export default ExpenseForm;
