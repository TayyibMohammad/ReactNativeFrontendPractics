// Change from './src/...' to './src/...' (relative to root)
import { ScreenContent } from './src/components/ScreenContent'; 
import { StatusBar } from 'expo-status-bar';

import './src/global.css'; // Updated path
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function App() {
  return (
    <SafeAreaProvider>
      <ScreenContent title="Home" path="App.tsx"></ScreenContent>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
