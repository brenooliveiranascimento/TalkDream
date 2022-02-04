import React, { useContext, useState } from 'react';
import { View } from 'react-native';
import { Area, BtnCancel, BtnChange, Container, Input, Texto } from './styles';
import { AuthContext } from '../../Contexts';
import firestore from '@react-native-firebase/firestore'

export default function ChangeNome({close, inteName}) {
    const { user, setUser, setNowUser } = useContext(AuthContext);
    const [nowName, setNowName] = useState(user.name);

    async function handleName(){
        if(nowName === ''){
            alert('por favor digite algo')
            return;
        }
        await firestore().collection('users')
        .doc(user.uid).update({
            name:nowName
        }).then(()=>{
            inteName(nowName);
            let data = {
                name:nowName,
                email:user.email,
                uid:user.uid,
                tag:user.tag,
                avatarUrl:user.avatarUrl,
                indice:user.indice,
                dreamScore:user.dreamScore,
                nightmareScore:user.nightmareScore,
                tagUrl:user
            }
            setUser(data);
            setNowUser(data);
        })

        const response = await firestore().collection('posts')
        .where('userUid', '==', user.uid).get()
        
        

        response.forEach( async doc =>{
            await firestore().collection('posts').doc(doc.id)
            .update({
                autor:nowName
            }).then(()=>{
                let data = {
                    name:nowName,
                    email:user.email,
                    uid:user.uid,
                    tag:user.tag,
                    avatarUrl:user.avatarUrl,
                    indice:user.indice,
                    dreamScore:user.dreamScore,
                    nightmareScore:user.nightmareScore,
                    tagUrl:user
                }
                setUser(data);
                setNowUser(data);
                close()
            })
        })

    }


 return (
   <Container>

       <Area>
       <Texto style={{marginBottom:20}}>
           alterar nome
       </Texto>
        <Input
        onChangeText={t=>setNowName(t)}
        value={nowName}
        placeholder="Alterar nome"
        />

        <BtnChange
        onPress={handleName}
        >
            <Texto>
                Salvar
            </Texto>
        </BtnChange>

        <BtnCancel
        onPress={()=>close()}
        >
            <Texto>
                cancelar
            </Texto>
        </BtnCancel>

       </Area>
       
   </Container>
  );
}