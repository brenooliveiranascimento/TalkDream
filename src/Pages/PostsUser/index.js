import React, { useCallback, useLayoutEffect, useState, useContext } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useRoute, useNavigation, useFocusEffect } from '@react-navigation/native'
import firestore from '@react-native-firebase/firestore'
import { Container, List } from './styles';
import PostList from '../../Components/PostList';
import { AuthContext } from '../../Contexts';



export default function PostsUser() {
    const navigation = useNavigation()
    const routes = useRoute()
    const [title, setTitle] = useState(routes.params.title);
    const [posts, setPosts] = useState([]);

    useLayoutEffect(()=>{
        navigation.setOptions({
            title:title === '' ? '' : title
        })
    },[])


    useFocusEffect(
        useCallback(()=>{
          let isActivity = true;
    
          firestore()
          .collection('posts')
          .where('userUid', '==', routes.params?.userUid)
          .orderBy('created', 'desc')
          .get()
          .then((snapshot)=>{
            const postList = []
    
           snapshot.docs.map( n =>{
             postList.push({
               ...n.data(),
               id:n.id
             })
           })
           if(isActivity){
            setPosts(postList)
           }
          })
    
          return(()=>{
            isActivity = false
          })
        },[])
      )

      const { user } = useContext(AuthContext);

 return (
   <Container>
       <List
       data={posts}
       renderItem={({item})=>(
           <PostList
           data={item}
           userId={user.uid}
           />
       )}
       />
   </Container>
  );
}