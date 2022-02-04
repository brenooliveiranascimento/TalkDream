import React from  'react';
import {Container1, Name} from './styles'
import { useNavigation } from '@react-navigation/native';

function SearchList({ data }){
    const navigation = useNavigation();

    function handle(){
        navigation.navigate("PostsUser", {title:data.name, userUid:data.uid })
    }

  return(
    <Container1 onPress={handle}>
      <Name>{data.name}</Name>
    </Container1>
  )
}

export default SearchList;
