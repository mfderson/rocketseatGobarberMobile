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
