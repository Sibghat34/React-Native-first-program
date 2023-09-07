import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View , Button , Image , Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function App() {
  return (
    <View style = {{flex :1}}>

      <View style = {{flex :0.30 , justifyContent: "center" , alignItems: "center"}}>
      <Image
        style={{width:100 , height:100}}
        source={require("./logo.jpeg")}
      />
      <Text style = {styles.text1}>Leather Store</Text>
   </View>

   <View style = {{flex :0.40 , justifyContent: "center" , alignItems: "center"  , borderRadius: 30}}>

      <TextInput style = {{width: 250, height:40 , backgroundColor: "white" , margin: 10 , borderWidth: 1 , borderRadius: 10 , padding: 5}}
        placeholder='Enter Email Address'
      />
       <TextInput style = {{width: 250, height:40 , backgroundColor: "white" , margin: 10, borderWidth: 1 , borderRadius: 10 , padding: 5}}
        placeholder='Enter Password'
      />
       <TextInput style = {{width: 250, height:40 , backgroundColor: "white" , margin: 10, borderWidth: 1 , borderRadius: 10 , padding: 5}}
        placeholder='Confirm Password'
      />

   </View>

    <View style = {{flex :0.30 , alignItems: 'center'}}>
    <LinearGradient
      colors={['#cc2b5e', '#753a88', '#2974FA']}
      style={styles.gradient}>
      <Text style={styles.text}  onPress={() => Alert.alert('Sign Up Button pressed')}>Sign Up</Text>
    </LinearGradient>
    <LinearGradient
      colors={['#cc2b5e', '#753a88', '#2974FA']}
      style={styles.gradient}>
      <Text style={styles.text}  onPress={() => Alert.alert('Login Button pressed')}>Login</Text>
    </LinearGradient>
   </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradient: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    width:80,
    margin: 5
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
  text1: {
    color: 'black',
    fontSize: 18,
  },
});

