import React, { useEffect, useState, useContext, useCallback } from 'react';
import { Modal, StatusBar, View } from 'react-native';
import {    ActionArea, 
            BtnComents, 
            Contain, 
            Container, 
            Header, 
            LikesArea, 
            LikesView, 
            Name, 
            Perfil, 
            Tag, 
            TextContain, 
            TimeCreated,
            ComentsArea,
            ModalView,
            ComponentComentarios,
            HeaderModal,
            BtnBack
        } from './styles';
import Icon from 'react-native-vector-icons/Feather'
import ComentList from '../ComentList';
import { BtnSend, Input } from '../ComentList/styles';
import MaterialComunity from 'react-native-vector-icons/MaterialCommunityIcons';
import { add, format, formatDistance } from 'date-fns';
import { ptBR, tr } from 'date-fns/locale';
import firestore, { firebase } from '@react-native-firebase/firestore'
import { useNavigation } from '@react-navigation/native';
import {AuthContext} from '../../Contexts/index'
import { Alert } from 'react-native';
import { Container1 } from '../TagsSelectModal/styles';




export default function PostList({data, userId}) {
    const [likes, setLikes] = useState(data?.likes)
    const [comentspost, setComentsPosts] = useState(data?.comentarios);
    const [showComent, setShowComent] = useState(false);
    const [tags, setTags] = useState(data);
    const navigation = useNavigation();
    const { user } = useContext(AuthContext);
    const [primeiro, setPrimeiro] = useState(true)

    async function handleLike(id, likes){
        const docId = `${userId}_${id}`

        const document = await firestore().collection('likes').doc(docId).get();

        if(document.exists){
            //remove like
            await firestore().collection('posts')
            .doc(id).update({
                likes:likes - 1
            })

            await firestore().collection('likes')
            .doc(docId).delete()
            .then(()=>{
                setLikes(likes -1)
            })
            return
        }
        
        await firestore().collection('posts')
        .doc(id).update({
            likes:likes + 1
        })

        await firestore().collection('likes')
        .doc(docId).set({
            id:id,
            userId:userId
        }).then(()=>{
            setLikes(likes + 1)
        })
    }



    function montFormat(){
        const timePost = new Date(data.created.seconds * 1000);

        return formatDistance(
            new Date(),
            timePost,
            {
                locale:ptBR
            }
        )
    }

    const [comentarioNovo, setComentarioNovo] = useState('')

    async function addComent(id){

        let addComent = {
            contain:comentarioNovo,
            userUid:userId,
            created:new Date(),
            autor:user.name,
            avatarUrl:user.avatarUrl,
            tag:user.tagUrl
        }
        setComentsPosts(oldItems=>[...oldItems, addComent].reverse())

            await firestore().collection('posts')
            .doc(id)
            .update({
                comentarios:comentspost
            }).then(async()=>{
                await firestore().collection('posts')
                .doc(id)
                .update({
                    comentarios:comentspost
                })
            })
    }

    async function addComent1(id){

            Alert.alert(
                'confirmar envio?',
                'aperte até o simbolo ficar branco para confirmação',
                [
                    {
                      text: "Cancel",
                      onPress: () => console.log("Cancel Pressed"),
                      style: "cancel"
                    },
                    { text: "ok", onPress: () =>setPrimeiro(false)}
                  ]
            )
    }

  
 return (
   <Container
   animation={'fadeInRight'}
   >
       <Header
       onPress={()=>navigation.navigate('PostsUser',{title:data.autor, userUid:data.userUid})}
       >
           {
               data.avatarUrl ?
               (
                   <Perfil
                   source={{uri:data.avatarUrl}}
                   />
               )
               :
               (
                <Perfil
                source={require('../../Assets/avatar.png')}
                />
               )
           }
        

        <Name>
            {data.autor} 
           
        </Name>
            <Tag
            source={{uri:data.tag}}
            />
        
       </Header>

       <Contain>
            <TextContain>
                {data.contain}
            </TextContain>
        </Contain>

        <ActionArea>
            <LikesArea
            onPress={()=>handleLike(data.id, likes)}
            >
                <LikesView>
                    {likes === 0 ? '' : likes}
                </LikesView>
                <MaterialComunity
                color={"#AABCD0"}
                name={likes === 0 ? 'heart-plus-outline' : 'cards-heart'}
                size={20}
                />
                            <BtnComents
            onPress={()=>setShowComent(true)}
            >

                <LikesView>
                    {comentspost === null ? '0' : comentspost.length}
                </LikesView>
                
                <Icon
                color={"#AABCD0"}
                name='message-square'
                size={20}
                />
            </BtnComents>

            <Name>
            {data.tipo} 
            </Name>
            </LikesArea>



            <TimeCreated>
                 {montFormat()}
            </TimeCreated>

 

        </ActionArea>

        <Modal
        animationType="slide"
        visible={showComent}
        transparent={true}
        statusBarTranslucent={false}
        >
            <ModalView>
                <HeaderModal>
                    <BtnBack
                    onPress={()=>{
                        setShowComent(false)
                    }}
                    >
                        <Icon
                        name='corner-down-left'
                        color={"#fff"}
                        size={20}
                        />
                    </BtnBack>
                </HeaderModal>


                <ComponentComentarios
                data={comentspost}
                renderItem={({item})=>(
                    <ComentList
                    data={item}
                    />
                )}
                />

                <Input
                value={comentarioNovo}
                onChangeText={(t)=>setComentarioNovo(t)}
                placeholder={'adicionar comentario'}
                multiline={true}
                />
                                <BtnSend
                onPress={()=>addComent(data.id)}
                >
                    <Icon
                    color="#000"
                    size={20}
                    name='send'
                    />
                </BtnSend>
                {
                    primeiro ? (
                        <BtnSend
                        onPress={()=>addComent1(data.id)}
                        >
                            <Icon
                            color="#fff"
                            size={20}
                            name='send'
                            />
                        </BtnSend>
                
                    )
                    :(
                        <View/>
                    )
                }




            </ModalView>
        </Modal>

   </Container>
  );
}