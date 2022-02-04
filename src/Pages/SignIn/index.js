import React, { useState, useContext } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { Container,Logo, Input, BtnSignIN, BtnText, BtnChange } from './styles';
import { AuthContext } from '../../Contexts';

import * as Animetable from 'react-native-animatable';

const TitleAnimated = Animetable.createAnimatableComponent(Logo)
const LogInput = Animetable.createAnimatableComponent(Input)
const LogBtn = Animetable.createAnimatableComponent(BtnSignIN)
const ChangeBtn = Animetable.createAnimatableComponent(BtnChange)

export default function SignIn(){
    const [estado, setEstado] = useState('logar');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const { register, logar, btLoading } = useContext(AuthContext);

    function handleRegister(){
        if(name === '' || email === '' || password === '' || confirmPassword === ''){
            alert('preencha todos os campos!!')
            return;
        }
        if(password !== confirmPassword){
            alert('as senhas não condizem!!')
            return;
        }
        register(email, password, name);
    }

    function handleEntrar(){
        if(email === '' || password === ''){
            alert('preencha todos os campos')
            return
        }
        logar(email, password);
    }

    function handleEstado(){
        setEstado(estado === 'logar' ? 'regsitrar' : 'logar')
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    }

    if(estado === 'regsitrar'){
        return(
            <ImageBackground
            style={{flex:1}}
            source={require('../../Assets/bacground.png')}
            >
            <Container>


            <LogInput
            animation={'bounceInLeft'}
            value={name}
            onChangeText={(t)=>setName(t)}
            placeholder='Nome'
            />

            <LogInput
            animation={'bounceInRight'}
            value={email}
            onChangeText={(t)=>setEmail(t)}
            placeholder='Email'
            />
            <LogInput
            animation={'bounceInLeft'}
            value={password}
            onChangeText={(t)=>setPassword(t)}
            placeholder='senha'
            secureTextEntry={true}
            />
            <LogInput
            animation={'bounceInRight'}
            value={confirmPassword}
            onChangeText={(t)=>setConfirmPassword(t)}
            placeholder='cofirmar senha'
            secureTextEntry={true}
            />

            <LogBtn
            animation={'bounceInLeft'}
            onPress={handleRegister}
            >
                <BtnText>
                    cadastrar
                </BtnText>
            </LogBtn>

            <ChangeBtn
            animation={'bounceInRight'}
            onPress={handleEstado}
            >
                <BtnText>
                    já possuo uma conta
                </BtnText>
            </ChangeBtn>
        </Container>
        </ImageBackground>

        )
    }
    return(
        <ImageBackground
        style={{flex:1}}
        source={require('../../Assets/bacground.png')}
        >
        <Container>


            <TitleAnimated animation={'flipInX'}
            source={require('../../Assets/coins/novaLogo.png')}
            />
            <LogInput
            animation={'bounceInLeft'}
            value={email}
            onChangeText={(t)=>setEmail(t)}
            placeholder='Email'
            />
            <LogInput
            animation={'bounceInRight'}
            value={password}
            onChangeText={(t)=>setPassword(t)}
            placeholder='*********'
            secureTextEntry={true}
            />

            <LogBtn
            animation={'bounceInLeft'}
            onPress={handleEntrar}
            >
                <BtnText>
                    entrar
                </BtnText>
            </LogBtn>

            <ChangeBtn
            animation={'bounceInRight'}           
            onPress={handleEstado}
            >
                <BtnText>
                    criar uma conta
                </BtnText>
            </ChangeBtn>
        </Container>
        </ImageBackground>
    )
}