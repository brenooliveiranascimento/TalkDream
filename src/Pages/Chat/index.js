import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Header from '../../Components/Header/index'
import { useNavigation } from '@react-navigation/native';

export default function Chat() {
  const navigation = useNavigation();

 return (
   <View style={styles.container}>
     <Header/>
     <View style ={styles.container1}>
        <Text
        style={styles.Texto}
        >
          Em Breve
        </Text>
        <TouchableOpacity
        style={styles.btn}
        onPress={()=>navigation.navigate('Web')}
        >
          <Text style={{...styles.Texto, fontSize:16}}>
            entre em contato@
          </Text>
        </TouchableOpacity>
     </View>
   </View>
  );
}

export const styles = StyleSheet.create({
  container:{
    backgroundColor:'#000',
    flex: 1
  },
  Texto:{
    fontSize:30,
    color: "#fff",
    fontWeight:'900',
    fontStyle:'italic'
  },
  container1:{
    justifyContent:'center',
    alignItems:'center',
    flex: 1
  },
  btn:{
    marginTop:20,
    backgroundColor:"#131F2F",
    width: 150,
    height: 50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:8
  }
  
})