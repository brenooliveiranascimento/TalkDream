import React, { useState, useContext, useCallback } from 'react';
import { BtnArea, BtnDream, BtnNightmare, BtnText, Container, Input, Send } from './styles';
import Header from '../../Components/Header'
import Icon from 'react-native-vector-icons/Feather'
import firestore from '@react-native-firebase/firestore'
import { AuthContext } from '../../Contexts';
import storage from '@react-native-firebase/storage'
import { useFocusEffect, useNavigation } from '@react-navigation/native';

export default function NewPost() {
  const [dremare, setDremare] = useState('');
  const [sonho, setSonho] = useState('');
  const navigation = useNavigation();
  const { user } = useContext(AuthContext);
  const [ dreamScore, setDreamScore ] = useState(user.dreamScore);
  const [nightmareScore, setNightmareScore] = useState(user.nightmareScore);
  const [tagCaminho, setTagCaminho] = useState(user.tagUrl)

  useFocusEffect(
    useCallback(()=>{
      firestore().collection('users')
      .doc(user.uid).get()
      .then((snapshot)=>{
        setTagCaminho(snapshot.data().tagUrl)
      })
    },[])
  )


  async function postSonho(){
    if(sonho === ''){
      alert('digite lguma coisa!')
      return
    }
    if(sonho.length < 40){
      alert('se sonho está muito pequeno!')
      return;
    }
    if(dremare === ''){
      alert('porfavor escolha o tipo de sonho')
      return;
    }

    let avatarUrl = null

    try{

      const response = await storage().ref('users').child(user.uid).getDownloadURL()
      avatarUrl = response

    }catch(err){
      avatarUrl = null
    }

    firestore().collection('posts')
    .add({
      contain:sonho,
      autor:user.name,
      created:new Date(),
      likes:0,
      avatarUrl,
      userUid:user.uid,
      tipo:dremare,
      comentarios:[{autor:'ademir', contain:'por favor, respeite todos os usuarios'}],
      tag:tagCaminho
    }).then( async ()=>{
      if(dremare === 'sonho'){
        firestore().collection('users')
      .doc(user.uid).update({
        dreamScore:dreamScore + 5
      }).then(()=>{
        navigation.navigate('Home');
        setSonho('');
        setDreamScore(dreamScore + 5)
        setDremare('')
      })
      return
      }
      firestore().collection('users')
      .doc(user.uid).update({
        nightmareScore:nightmareScore + 5
      }).then(()=>{
        navigation.navigate('Home');
        setSonho('');
        setNightmareScore(nightmareScore + 5)
      }).then(()=>{
        setDremare('')
      })
    }).catch((error)=>{
      alert(error)
    })
  }

  function handleChange(data){
    setDremare(data)
  }

 return (
   <Container>
     <Header/>

     <BtnArea>

        <BtnDream
        onPress={()=>handleChange('sonho')}
        data={dremare}
        >
          <BtnText>sonho</BtnText>
        </BtnDream>

        <BtnNightmare
        onPress={()=>handleChange('pesadelo')}
        data={dremare}
        >
          <BtnText>pesadelo</BtnText>
        </BtnNightmare>

     </BtnArea>

     
     <Input
     value={sonho}
     onChangeText={(t)=>setSonho(t)}
     multiline={true}
     placeholder="Nos dê bastante detalhes se possível!. Manda bala!"
     />

     <Send
     onPress={postSonho}
     >
      <Icon
      name='send'
      color={"#fff"}
      size={20}
      />
     </Send>
   </Container>
  );
}