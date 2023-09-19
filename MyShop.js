import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import App from './src/component/App';
import { SafeAreaView } from 'react-native-safe-area-context';
 
const MyShop = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <App></App>
    </SafeAreaView>
  );
}
export default MyShop;

