# Rodar o projeto

```
docker start gobarber mongobarber redisbarber
cd ~/dev/cursos/rocketseat/rocketseat-gobarber
yarn dev
adb devices
react-native run-android
react-native start --reset-cache
```

# Commit: Rotas de autenticação

## React Navigation

1. Instalação do react navigation, [fonte](https://reactnavigation.org/docs/en/4.x/getting-started.html):

```
yarn add react-navigation
yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
```

2. Adicione as duas dependências abaixo em _android/app/build.gradle_ dentro de _dependecies_:

```
implementation 'androidx.appcompat:appcompat:1.1.0-rc01'
implementation 'androidx.swiperefreshlayout:swiperefreshlayout:1.1.0-alpha02'
```

3. Faça as alterações abaixo dentro de _android/app/src/main/java/MainActivity.java_:

```
package com.reactnavigation.example;

import com.facebook.react.ReactActivity;
+ import com.facebook.react.ReactActivityDelegate;
+ import com.facebook.react.ReactRootView;
+ import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

public class MainActivity extends ReactActivity {

  @Override
  protected String getMainComponentName() {
    return "Example";
  }

+  @Override
+  protected ReactActivityDelegate createReactActivityDelegate() {
+    return new ReactActivityDelegate(this, getMainComponentName()) {
+      @Override
+      protected ReactRootView createRootView() {
+        return new RNGestureHandlerEnabledRootView(MainActivity.this);
+      }
+    };
+  }
}
```

# Commit: Configurando background

```
yarn add react-native-linear-gradient
yarn add styled-components
```

# Commit: Input & Button

```
yarn add prop-types
yarn add react-native-vector-icons
```

## React-native-vector-icons

Para definirmos qual fonte queremos usar precisamos ir até [aqui](https://github.com/oblador/react-native-vector-icons#android) e copiar e colar o seguinte trecho antes do último apply do arquivo _android/app/build.gradle_ (Removemos _'EvilIcons.ttf'_, pois queremos usar apenas o MaterialIcons):

```
project.ext.vectoricons = [
    iconFontNames: [ 'MaterialIcons.ttf' ] // Name of the font files you want to copy
]

apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```

Após isso rodar:

```
react-native run-android
```

# Commit: Reactotron

```
yarn add reactotron-react-native reactotron-redux reactotron-redux-saga
yarn add redux redux-saga react-redux
```

# Commit: Configurando redux

```
yarn add redux-persist immer
yarn add @react-native-community/async-storage
yarn add axios
```

# Commit: Rota inicial

```
yarn add react-navigation-tabs
```

# Commit: Agendamentos da API

```
yarn add date-fns@next
```

# Commit: Rotas de agendamento

```
yarn add react-navigation-stack
```

Usado para empilhar as páginas de uma navegação, guardando o estado das mesmas.

# Commit: Selecionando horário

Por que usamos RectButton no lugar do TouchableOpacity?

1. RectButton tem o efeito de click no botão;
2. RectButton aceita a propriedade enable, que desabilita o botão (coisa que o TouchableOpacity não faz).

# Commit: Load de agendamentos

1. Para _resetar_ a pilha de páginas na tabBar fazemos o seguinte:

No arquivo routes.js colocamos a propriedade resetOnBlur: true.

```javascript
{
 resetOnBlur: true,
 tabBarOptions: {
   keyboardHidesTabBar: true,
   activeTintColor: '#FFF',
   inactiveTintColor: 'rgba(255,255,255,0.6)',
   style: {
     backgroundColor: '#8d41a8',
   },
 },
}
```

2. Como carregar os agendamentos quando uma tela for carregada pelo redirecionamento de rotas?

   1. Primeiro importamos withNavigationFocus:
      ```javascript
      import { withNavigationFocus } from 'react-navigation';
      ```
   2. Remover o _export default_ da função e passar como parâmetro isFocused. Usar o useEffect:

      ```javascript
      function Dashboard({ isFocused }) {
        const [appointments, setAppointments] = useState([]);

        async function loadAppointments() {
          const response = await api.get('appointments');

          setAppointments(response.data);
        }

        useEffect(() => {
          if (isFocused) {
            loadAppointments();
          }
        }, [isFocused]);
        ...
      }
      ```

   3. Ao final, export a função:
      ```javascript
      export default withNavigationFocus(Dashboard);
      ```
