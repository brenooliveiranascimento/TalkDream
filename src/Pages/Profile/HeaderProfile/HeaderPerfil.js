import React, { useState, useEffect, useCallback, useContext } from 'react';
import { View } from 'react-native';
import { BtnDream, BtnNightmare, Container, NightImage, Valor } from './stylesHeader';
import { useFocusEffect } from '@react-navigation/native';
import { AuthContext } from '../../../Contexts';

export default function HeaderProfile({nmc, dc}){
  const { user } = useContext(AuthContext);

 return (
   <Container>

     <BtnNightmare
     onPress={()=>alert('NightCa$h. poderá ser usada no futuro no mercado de tags. Poste pesadelos para conseguir 5')}
     >
     <Valor>
       {nmc}
     </Valor>
       <NightImage
       source={require('../../../Assets/coins/nightmareCash.png')}
       />
     </BtnNightmare>

     <BtnNightmare
     onPress={()=>alert('DreamCa$h. poderá ser usada no futuro no mercado de tags. poste sonhos para conseguir 5')}
     >
        <Valor>
          {dc}
        </Valor>
       <NightImage
       source={require('../../../Assets/coins/dreamCash.png')}
       />
     </BtnNightmare>


   </Container>
  );
}