import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import Dashboard from './pages/Dashboard';

// Retorna uma função que retorna o componente
// Se o usuário estiver logado, lista o conjunto de rotas App, cc, Sign
export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        // Rotas para quando o usuário não está logado na aplicação
        Sign: createSwitchNavigator({
          SignIn,
          SignUp,
        }),
        App: createBottomTabNavigator({
          Dashboard,
        }),
      },
      { initialRouteName: isSigned ? 'App' : 'Sign' }
    )
  );
