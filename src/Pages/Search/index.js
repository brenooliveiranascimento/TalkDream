import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Container, ContainView, Input, List, ListView, AreaInput } from './styles';
import Icon from 'react-native-vector-icons/Feather'
import firestore from '@react-native-firebase/firestore';
import PostList from '../../Components/PostList';
import ListUser from './ListUser';

export default function Search() {
  const [ input, setInput] = useState('')
  const [users, setUsers]  = useState([]);

  useEffect(()=>{
    if(input === '' || input === undefined){
      setUsers([]);
      return;
    }

    const subscriber = firestore().collection('users')
    .where('name', '>=', input)
    .where('name', '<=', input + "\uf8ff")
    .onSnapshot(snapshot=>{
      const userlist = [];

      snapshot.forEach(doc=>{
        userlist.push({
          ...doc.data(),
          id:doc.id,
        })
      })
      setUsers(userlist)
    })

  },[input])


 return (
  <Container>
  <AreaInput>
    <Icon
      name="search"
      size={20}
      color="#fff"
    />
    <Input
      placeholder="Procurando alguem?"
      value={input}
      onChangeText={ (text) =>  setInput(text) }
      placeholderTextColor="#909090"
    />
  </AreaInput>

  {
    input === '' ? (
      <View>
        <Text
        style={{color:"#909090", fontSize:20, textAlign:'center'}}
        >
          cuidado com as maiusculas!
        </Text>
      </View>
    )
    :
    (
      <View/>
    )
  }

  <List
    data={users}
    renderItem={ ({item}) => <ListUser data={item} /> }
  />

</Container>
  );
}
