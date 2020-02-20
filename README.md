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
