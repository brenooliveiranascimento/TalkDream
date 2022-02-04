import React from 'react';
import { View } from 'react-native';
import { TextContain } from '../PostList/styles';
import { Container1 } from '../TagsSelectModal/styles';
import { Container, Header, Perfil, Name, Tag, Contain, Input } from './styles';

export default function ComentList({data}) {
 return (
   <Container1>

   <Container>
     <Header>
      <Perfil
        source={require('../../Assets/avatar.png')}
        />

        <Name>
            {data?.autor} 
            
        </Name>
        <Contain>

        </Contain>
     </Header>
     <TextContain>
            {data?.contain}
          </TextContain>

   </Container>
   </Container1>

  );
}