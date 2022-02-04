import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
flex: 1;
align-items:center;
justify-content: center;
`;

export const Logo = styled.Image`
width: 250;
height: 250px;
margin-top:-100;
`;



export const Input = styled.TextInput.attrs({
    placeholderTextColor:'rgba(170,170,170,170)'
})`
width: 80%;
height:50px;
align-items: center;
padding: 10px;
color: #fff;
font-size: 20px;
margin-bottom:20px;
border-bottom-width:1px;
border-bottom-color:#fff;
border-bottom-left-radius: 10px;
margin-top: 10;
`;

export const BtnSignIN = styled.TouchableOpacity`
background-color:#01A5B1;
width: 80%;
height: 50px;
border-radius:7px;
align-items: center;
justify-content: center;
`;

export const BtnText = styled.Text`
color: #fff;
font-size: 25;
font-weight: bold;
`;

export const  BtnChange = styled.TouchableOpacity`
background-color:#131F2F;
width: 80%;
height: 50px;
border-radius:7px;
align-items: center;
justify-content: center;
margin-top:20px
`;