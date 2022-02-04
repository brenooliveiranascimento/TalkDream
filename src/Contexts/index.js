import React, { createContext, useState, useEffect, useReducer } from "react";
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage'

export const AuthContext = createContext();

export default function AuthProvider({children}){
    const [user, setUser] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const [btLoading, setBtnLoading] = useState(false);

useEffect(()=>{
    async function loadUser(){
        const nowUser = await AsyncStorage.getItem("Now_User");

        if(nowUser){
            setUser(JSON.parse(nowUser))
            setLoading(false)
            return
        }
        setLoading(false);
    }
    loadUser()
},[])


    async function register(emeail, password, name){
        setBtnLoading(true);
        await auth().createUserWithEmailAndPassword(emeail, password)
        .then( async (value)=>{
            let uid = value.user.uid;
            let data ={
                name:name,
                emeail:value.user.email,
                uid:value.user.uid,
                tag:'sonhador novato',
                avatarUrl:null,
                indice:0,
                dreamScore:0,
                nightmareScore:0,
                tagUrl:'https://firebasestorage.googleapis.com/v0/b/talkdream-38f7c.appspot.com/o/tags%2FTag1.png?alt=media&token=79441b36-c4a5-4435-8c8f-8d2ff6d82d89',
                tag:'sonhador novato',
                first:true
            }
                await firestore().collection('users')
                .doc(uid).set(data)
                .then(()=>{
                    setUser(data);
                    setNowUser(data);
                    setLoading(false)
                    setBtnLoading(false);
                })
        })
        .catch((err)=>{
            alert('ops, ocorreu algum erro! :(');
            setBtnLoading(false);
        })
    }

    async function logar(email, password){
        setBtnLoading(true);
        await auth().signInWithEmailAndPassword(email, password)
        .then( async (value)=>{
            let uid = value.user.uid
                await firestore().collection('users')
                .doc(uid)
                .onSnapshot(snapshot=>{
                    let data = {
                        name:snapshot.data().name,
                        email:value.user.email,
                        uid:snapshot.data().uid,
                        tag:snapshot.data().tag,
                        avatarUrl:snapshot.data().avatarUrl,
                        indice:snapshot.data().indice,
                        dreamScore:snapshot.data().dreamScore,
                        nightmareScore:snapshot.data().nightmareScore,
                        tagUrl:snapshot.data().tagUrl,
                        first:snapshot.data().first
                    }
                    setUser(data);
                    setNowUser(data);
                    setLoading(false)
                    setBtnLoading(false);
                })
        }).catch((err)=>{
            setBtnLoading(false);
            alert('ops, ocorreu algum erro :(')
        })
    }

    async function setNowUser(data){
        await AsyncStorage.setItem('Now_User', JSON.stringify(data))
    }

    async function signOut(){
        await AsyncStorage.clear()
        .then( async ()=>{
                await auth().signOut();
                setUser(null)
        })
    }

    async function updateUser(){
        await firestore().collection('users')
        .doc(user.uid)
        .onSnapshot(snapshot=>{
            let data = {name:snapshot.data().name,
            email:snapshot.data().email,
            uid:snapshot.data().uid,
            tag:snapshot.data().tag,
            avatarUrl:snapshot.data().avatarUrl,
            indice:snapshot.data().indice,
            tagUrl:snapshot.data().tagUrl
        }
        setUser(data)
        })
            
        
    }


    return(
        <AuthContext.Provider
        value={{
            verify:user,
            user,
            register,
            logar,
            loading,
            btLoading,
            signOut,
            updateUser,
            setUser,
            setNowUser
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}