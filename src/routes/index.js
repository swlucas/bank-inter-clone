import SigninScreen from "../screen/Signin";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const LoginNavigation = createStackNavigator(
  {
    Signin: { screen: SigninScreen, navigationOptions: { header: null } }
  },
  {
    initialRouteName: "Signin"
  }
);

const App = createAppContainer(LoginNavigation);

export default App;
