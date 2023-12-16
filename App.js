import { Provider } from "react-redux";
import { store } from "./store";
import { ToastProvider } from "react-native-toast-notifications";
import { RootNavigation } from "./navigations";

export default function App() {
  return (
    <Provider store={store}>
      <ToastProvider>
        <RootNavigation />
      </ToastProvider>
    </Provider>
  );
}
