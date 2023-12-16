import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AdminPage } from "../../pages/admin";

const Stack = createNativeStackNavigator();

export default function AdminStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="AdminPage"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="AdminPage" component={AdminPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
