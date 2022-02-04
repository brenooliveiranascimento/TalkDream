import React, { useContext, useState, useEffect, useCallback, useLayoutEffect } from 'react';
import { Container, List, NightImage, NightPupsBtn } from './syles';
import { AuthContext } from '../../Contexts';
import PostList from '../../Components/PostList';
import Header from '../../Components/Header/index';
import firestore from '@react-native-firebase/firestore';
import { useFocusEffect } from '@react-navigation/native';
import { ActivityIndicator, Alert, ListViewBase, Modal, View } from 'react-native';
import * as Animetable from 'react-native-animatable';
import AlertNight from './alertNight';

const PopUpAnimated = Animetable.createAnimatableComponent(NightPupsBtn)


export default function Home(){

    const { user, signOut, setUser, setNowUser } = useContext(AuthContext);
    const [posts, setPosts] = useState([]);
    const [loadingRefresh, setLoadingRefresh] = useState(false);
    const [emptyList, setEmpityList] = useState();
    const [lastItem, setLastItem] = useState();
    const [loading, setLoading] = useState(true)
    const [left, setLeft] = useState(0);
    const [top, setTop] = useState(0);
    const [showPup,setShowPup] = useState(false);
    const [firstTime, setFirstTime] = useState()
    const [modalFirst, setModalFirst] = useState(false)


    useEffect(()=>{

        async function loadAlert(){

            firestore().collection('users')
                .doc(user.uid).get()
                .then(snapshot=>{
                    if(snapshot.data().first === true){
                        setModalFirst(true)
                    }
               firestore().collection('users').doc(user.uid)
               .update({
                   first:false
               })
            })
    
        }
        loadAlert()
        
    },[])


    

    useLayoutEffect(
        useCallback(()=>{
           async function loadPop(){

                
                if(!user){
                    return;
                }
    
                setInterval(()=>{
                    
                    setShowPup(true)
                        let topset = Math.floor(Math.random() * (30 - 555) + 555);
                        let leftst = Math.floor(Math.random() * (30 - 333) + 333);
                        setLeft(leftst)
                        setTop(topset)
                        
                },120000)
                
            }
            loadPop()
        },[])
    )


    function parar(){
        setShowPup(false);
        clearInterval()
        firestore().collection('users')
        .doc(user.uid).get().then(snapshot=>{
            firestore().collection('users').doc(user.uid)
            .update({
                indice:snapshot.data().indice+1
            })
        })
    }


    useFocusEffect(

    useCallback(()=>{
        let isActivity = true

        async function loadData(){

            if(isActivity){
            firestore().collection('posts')
            .orderBy('created', 'desc')
            .limit(5)
            .onSnapshot( snapshot =>{
                setPosts([])

                const postList = []

                snapshot.docs.map( n =>{
                    postList.push({
                        ...n.data(),
                        id:n.id
                    })
                })
                setPosts(postList);
                console.log(user.indice)
                setLastItem(snapshot.docs[snapshot.docs.length - 1]);
                setEmpityList(!!snapshot.empty)
                setLoading(false)
            })}
        }
        loadData()

        return()=>{
            isActivity = false
        }
    },[])
    )

    async function refreshLoad(){
        setLoadingRefresh(true)
        await firestore().collection('posts')
        .orderBy('created', 'desc')
        .limit(5)
        .get()
        .then((snapshot)=>{
            let postList = []

            snapshot.docs.map( n =>{
                postList.push({
                    ...n.data(),
                    id:n.id,
                })
            })
            setPosts(postList);
            setLoadingRefresh(false)
            setEmpityList(!!snapshot.empty);
            setLoading(false)
            setLastItem(snapshot.docs[snapshot.docs.length - 1]);
        })
    }

    async function infinityFeed(){
        if(emptyList){
            setLoading(false)
            return;
        }

        if(loading){
            return
        }

        await firestore().collection('posts')
        .orderBy('created', 'desc')
        .limit(5)
        .startAfter(lastItem)
        .get().then((snapshot)=>{
            const postList = [];

            snapshot.docs.map( n =>{
                postList.push({
                    ...n.data(),
                    id:n.id
                })
            })
            setPosts(oldItens=>[...oldItens, ...postList ])
            setLoading(false);
            setLastItem(snapshot.docs[snapshot.docs.length - 1]);
            setEmpityList(!!snapshot.empty);
        })
    
      }


    return(
        <Container>
            <Header/>


            {
                loading ? 
                (
                <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                    <ActivityIndicator size={50} color="#01A5B1"/>
                </View>
                )
                :
                (
                    
                    <List
                    data={posts}
                    renderItem={({item})=>(
                        <PostList
                        data={item}
                        userId={user.uid}
                        />
                    )}
                    refreshing={loadingRefresh}
                    onRefresh={refreshLoad}
                    onEndReached={()=>infinityFeed()}
                    onEndReachedThreshold={0.1}
                    />
                )
            }

            {
                showPup ? 
                (
            <PopUpAnimated
            animation={'pulse'}
            onPress={parar}
            left={left}
            top={top}
            >
                <NightImage
                source={require('../../Assets/popups/nightPopsNotraco.png')}
                />
            </PopUpAnimated>

                )
                :
                (
                    <View/>
                )
            }

            <Modal
            visible={modalFirst}
            animationType='slide'
            transparent={true}
            >
                <AlertNight
                close={()=>setModalFirst(false)}
                />
            </Modal>
            
        </Container>
    )
}