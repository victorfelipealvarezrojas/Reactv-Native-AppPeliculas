
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigation/Navigation';
import { GradientProvider } from './src/context/GradientContext';

const AppState: React.FC = ({ children }) => {
  return (
    <GradientProvider>
      {children}
    </GradientProvider>
  )
}

const App = () => {
  

  return (
    <NavigationContainer >
      <AppState>
        <Navigation />
      </AppState>
    </NavigationContainer>
  );
};


export default App;
