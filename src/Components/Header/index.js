import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Header() {
 return (
   <View style={styles.Container}>
       
    <Text
    style={styles.logo}
    >
        Talk <Text style={{
            backgroundColor:"#01A5B1",
            color:"#000"
        }}>
            Dream
        </Text>
    </Text>

   </View>
  );
}

export const styles = StyleSheet.create({
    Container:{
        width: "100%",
        height:50,
        backgroundColor:"#000",
        alignItems:'center',
        justifyContent:'center',
        borderBottomColor:"#01A5B1",
        borderBottomWidth:4,
        elevation:10,
        flexDirection:'row'
    },
    logo:{
        fontSize:25,
        fontWeight:'bold',
        fontStyle:'italic',
        color: '#fff'
    }
})
