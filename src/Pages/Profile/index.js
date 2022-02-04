import React, { useCallback, useContext, useState, useEffect } from 'react';
import { View, Button, Text, Modal, Image, ActivityIndicator } from 'react-native';
import { AuthContext } from '../../Contexts'
import { BtnConfig, BtnSair, BtnsContain, BtnShopTag, BtnTag, BtnView, Container, InfContain, Name, PerfilImage, Tag, UploadImage } from './styles'
import HeaderProfile from './HeaderProfile/HeaderPerfil';
import Icon from 'react-native-vector-icons/Feather';
import firestore from '@react-native-firebase/firestore';
import { useFocusEffect } from '@react-navigation/native';
import storage from '@react-native-firebase/storage'
import TagsSelectModal from '../../Components/TagsSelectModal';
import ChangeNome from '../../Components/ChangeNome';
import {launchImageLibrary} from 'react-native-image-picker';
import Header from '../../Components/Header'

export default function Profile() {

  const [nmc, setNmc] = useState();
  const [dc, setDc] = useState();
  const [tag, setTag] = useState('');
  const [tagSelect, setTagSelect] = useState(false);
  const [changeName, setChangeName] = useState(false);
  const [nome,setNome] = useState('')
  const [avatar, setAvatar] = useState();
  const [loadingImage, setLoadingImage] = useState(false)
  
  function mudarNome(){
    firestore().collection('users')
    .doc(user.uid).get()
    .then(snapshot=>{
      setNome(snapshot.data().name)
      setTag(snapshot.data().tagUrl)
      setChangeName(false)
    })
  }
  
  useFocusEffect(
    useCallback(()=>{
      firestore().collection('users')
      .doc(user.uid).get()
      .then(snapshot=>{
        setNmc(snapshot.data().nightmareScore)
        setDc(snapshot.data().dreamScore)
        setTag(snapshot.data().tagUrl)
        setNome(snapshot.data().name)
        setAvatar(snapshot.data().avatarUrl)
      })
    },[])
  )

  function fecharModais(){
    setChangeName(false);
    setTagSelect(false);
    mudarNome()
  }

  const { signOut, user, setUser, setNowUser } = useContext(AuthContext);

  const uploadFile = ()=>{
    const options = {
      noDate:true,
      midiaType:'photo',
    }

    launchImageLibrary(options, response=>{
      if(response.didCancel){
        console.log('fechou')
      }else if(response.error){
        console.log('erro')
      }else{
        uploadFileFirebase(response)
        .then(()=>{
          uploadAvatarPosts(response)
        })
      }
    })
  }

  const uploadAvatarPosts = async (response)=>{
    const storageRef = storage().ref('users').child(user.uid);
    const url = storageRef.getDownloadURL()
    .then(async image=>{
      firestore().collection('users').doc(user?.uid)
              .update({
                avatarUrl:image
          })
      setLoadingImage(false)
      setAvatar(image)
      let data = {
        name:user.name,
        email:user.email,
        uid:user.uid,
        tag:user.tag,
        avatarUrl:image,
        indice:user.indice,
        dreamScore:user.dreamScore,
        nightmareScore:user.nightmareScore,
        tagUrl:user
    }
    setUser(data);
    setNowUser(data);
        const postDoc = await firestore().collection('posts')
        .where('userUid', '==', user.uid).get()

        postDoc.forEach( async docs =>{
          await firestore().collection('posts').doc(docs.id)
          .update({
            avatarUrl:image
          }).then(async ()=>{
              await firestore().collection('users').doc(user?.uid)
              .update({
                avatarUrl:image
              }).then(()=>{
                let data = {
                  name:user.name,
                  email:user.email,
                  uid:user.uid,
                  tag:user.tag,
                  avatarUrl:image,
                  indice:user.indice,
                  dreamScore:user.dreamScore,
                  nightmareScore:user.nightmareScore,
                  tagUrl:user
              }
              setUser(data);
              setNowUser(data);
              alert('Imagem alterada com Sucesso!!');
              })
          })
        })
    }).catch((error)=>{
      console.log('ops, ocorreu algum erro :(', error)
    })
  }

  const getFileLocalePath = (response)=>{
    return response.assets[0].uri;
  }

  const uploadFileFirebase = async (response)=>{
    setLoadingImage(true)
    const fileSource = getFileLocalePath(response);

    const storaRef =  storage().ref('users').child(user?.uid);

    return await storaRef.putFile(fileSource).then(()=>{
      uploadAvatarPosts(response);
    })
  }


 return (
   <Container>
     <Header/>
     <InfContain>

       {
         avatar ? (

        <View>
         
          
          {
            loadingImage ? 
            (
              <UploadImage>
              <ActivityIndicator
                style={{position:'absolute'}}
                size={30}
                color={"#fff"}
                />
              </UploadImage>
                
            )
            :
            (
              <UploadImage
          onPress={uploadFile}
          >
          <PerfilImage
             data={tag}
             source={{uri:avatar}}
           />
 
          </UploadImage>
            )
          }
        </View>

          
         )
         :
         (
           <View>
             {
              loadingImage ? (
                <UploadImage>
                  <ActivityIndicator
                  size={30}
                  color={"#fff"}
                  />
                </UploadImage>
              )
              :
            <UploadImage
            onPress={uploadFile}
            >
              <PerfilImage
                  data={tag}
                  source={require('../../Assets/avatar.png')}
                />

              </UploadImage>
             }
            
           </View>

         )
       }



     <BtnsContain>
      <BtnTag
      onPress={()=>setTagSelect(true)}
      >
      <Tag
      source={{uri:tag}}
      />
      </BtnTag>


     </BtnsContain>

      <Name>
        {nome}
      </Name>   

      <Name
      style={{fontSize:16, color:"#909090", marginTop:2}}
      >
        {user.email}
      </Name>   
     </InfContain>

   <BtnView>
      <BtnShopTag
      onPress={()=>alert('mercado de tags em breve')}
      >
      <Icon name='shopping-cart' color={"#fff"} size={30}/>
      </BtnShopTag>

      <BtnSair
      onPress={signOut}
      >
        <Icon name='log-out' color={"#fff"} size={30}/>
      </BtnSair>

      <BtnConfig
      onPress={()=>setChangeName(true)}
      >
        <Icon
        color={'#fff'}
        size={30}
        name='settings'
        />
      </BtnConfig>
   </BtnView>

   <HeaderProfile nmc={nmc} dc={dc}/>

   <Modal
   visible={tagSelect}
   animationType='slide'
   transparent={true}
   >

     <TagsSelectModal
      mudar={mudarNome}
      close={fecharModais}
     />

   </Modal>

   <Modal
   visible={changeName}
   animationType='slide'
   transparent={true}
   >
     <ChangeNome
     inteName={mudarNome}
     close={fecharModais}
     />
   </Modal>
     
   </Container>
   
  );
}