import { useDispatch } from "react-redux";
import { useAuth } from "../hooks/useAuth";
import { getUserFromStorage } from "../utils/helpers/auth.helpers";
import AdminStack from "./Stack/adminStack";
import AuthStack from "./Stack/authStack";
import { useEffect } from "react";
import { useActions } from "../hooks/useActions";

export const RootNavigation = () => {
  const IsAuthentication = useAuth();
  const { saveUser } = useActions();

  console.log(IsAuthentication);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUserFromStorage();
      if (user) {
        dispatch(saveUser(user));
      }
    };

    fetchUser();
  }, [dispatch]);

  if (!IsAuthentication) {
    return <AuthStack />;
  }

  switch (IsAuthentication?.role) {
    case "ADMIN":
      return <AdminStack />;
  }
};
