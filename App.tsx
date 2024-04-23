import React from "react";
import { View } from "react-native";
import VSBurgerCarrinho from "./src/VSBurgerCarrinho";
import VSBurgerCardapio from "./src/VSBurgerCardapio";
import CadastroProduto from "./src/screens/CadastroProduto";
import CadastroCliente from "./src/screens/CadastroCliente";
import VSBurgerListagem from "./src/VSBurgerListagem";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function App(): React.JSX.Element{
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='VSBurgerCardapio' component={VSBurgerCardapio}
        options={{headerShown: false}} />
      </Stack.Navigator>
      <Stack.Navigator>
        <Stack.Screen name='CadastroProduto' component={CadastroProduto}
        options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;