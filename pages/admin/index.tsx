import { Text, TouchableOpacity, View } from "react-native";
import { useActions } from "../../hooks/useActions";

export const AdminPage = () => {
  const { logout } = useActions();
  const handlelogout = () => {
    logout();
  };
  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 500,
      }}
    >
      <Text>HELLO I AM ADMING PAGE</Text>
      <TouchableOpacity onPress={handlelogout}>
        <Text>LOGOUT</Text>
      </TouchableOpacity>
    </View>
  );
};
