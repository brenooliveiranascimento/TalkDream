import React, { useContext, useState } from 'react';
import { Image } from 'react-native';
import { Area, BtnBack, Container1, HeaderArea, TextoHeader, Tag1 ,ImageBtn, Tag2 } from './styles';
import Icon from 'react-native-vector-icons/Feather';
import firestore from '@react-native-firebase/firestore';
import { Tag } from '../../Pages/Profile/styles';
import { AuthContext } from '../../Contexts';
import { useNavigation } from '@react-navigation/native';

export default function TagsSelectModal({close, mudar}) {
  const { user, setUser, setNowUser } = useContext(AuthContext);
  const [tagNow, setTagNow] = useState('');
  const primeira = 'https://firebasestorage.googleapis.com/v0/b/talkdream-38f7c.appspot.com/o/tags%2FTag1.png?alt=media&token=79441b36-c4a5-4435-8c8f-8d2ff6d82d89'
  const segunda = 'https://firebasestorage.googleapis.com/v0/b/talkdream-38f7c.appspot.com/o/tags%2Ftag2.png?alt=media&token=aeb27d6f-8efa-48fd-ae68-ee6a0389985f'
  const navigation = useNavigation();

  async function handleTag(n){
    if( n === 1){
      await firestore().collection('users').doc(user?.uid)
      .update({
        tagUrl:primeira
      }).then(()=>{
        close()
        let data = {
          name:user.name,
          email:user.email,
          uid:user.uid,
          tag:primeira,
          avatarUrl:user.avatarUrl,
          indice:user.indice,
          dreamScore:user.dreamScore,
          nightmareScore:user.nightmareScore,
          tagUrl:user
      }
      setUser(data)
      setNowUser(data)
      alert('tag atualizada com sucesso!')
      })

      const postDocs = await firestore().collection('posts')
      .where('userUid', '==', user.uid).get()

      postDocs.forEach( async doc =>{
        await firestore().collection('posts').doc(doc.id)
        .update({
          tag:primeira
        }).then(()=>{
          close()
          let data = {
            name:user.name,
            email:user.email,
            uid:user.uid,
            tag:primeira,
            avatarUrl:user.avatarUrl,
            indice:user.indice,
            dreamScore:user.dreamScore,
            nightmareScore:user.nightmareScore,
            tagUrl:user
        }
        setUser(data)
        setNowUser(data)
        navigation.navigate('Home');
        alert('tag atualizada com sucesso!')

        })
      })
      return
    }

    await firestore().collection('users').doc(user?.uid)
    .update({
      tagUrl:segunda
    }).then(()=>{
      close()
      let data = {
        name:user.name,
        email:user.email,
        uid:user.uid,
        tag:segunda,
        avatarUrl:user.avatarUrl,
        indice:user.indice,
        dreamScore:user.dreamScore,
        nightmareScore:user.nightmareScore,
        tagUrl:user
    }
    setUser(data)
    setNowUser(data)
    alert('tag atualizada com sucesso!')
    })

    const postDocs = await firestore().collection('posts')
    .where('userUid', '==', user.uid).get()

    postDocs.forEach( async doc =>{
      await firestore().collection('posts').doc(doc.id)
      .update({
        tag:segunda
      }).then(()=>{
        close()
        let data = {
          name:user.name,
          email:user.email,
          uid:user.uid,
          tag:segunda,
          avatarUrl:user.avatarUrl,
          indice:user.indice,
          dreamScore:user.dreamScore,
          nightmareScore:user.nightmareScore,
          tagUrl:user
      }
      setUser(data)
      setNowUser(data)
      navigation.navigate('Home');
      alert('tag atualizada com sucesso!')
      })
    })
  }

 return (
   <Container1>
     <Area>
     <HeaderArea>
     <BtnBack
     onPress={()=>close()}
     >
       <Icon
       name='corner-down-left'
       color={"#fff"}
       size={30}
       />
     </BtnBack>

     <TextoHeader>
       minhas tags
     </TextoHeader>
     </HeaderArea>

    <Tag1
    onPress={()=>handleTag(1)}
    data={user.tag}
    >
      <Tag
        source={{uri:'https://firebasestorage.googleapis.com/v0/b/talkdream-38f7c.appspot.com/o/tags%2FTag1.png?alt=media&token=79441b36-c4a5-4435-8c8f-8d2ff6d82d89'}}
      />
    </Tag1>

    <Tag2
    onPress={()=>handleTag(2)}
    data={user.tag}
    >
      <Tag
      source={{uri:'https://firebasestorage.googleapis.com/v0/b/talkdream-38f7c.appspot.com/o/tags%2Ftag2.png?alt=media&token=aeb27d6f-8efa-48fd-ae68-ee6a0389985f'}}
      />
    </Tag2>
     </Area>
   </Container1>
  );
}
