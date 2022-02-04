import styled from 'styled-components/native';

export const Container = styled.View`
flex:1;
background-color: 'rgba(0,0,0,0.5)';
align-items: center;
justify-content: center;
`;

export const Area = styled.View`
width: 90%;
height: 500px;
align-items: center;
justify-content: center;
background-color: #000;
`;

export const BtnChange = styled.TouchableOpacity`
width: 80%;
height: 50px;
border-radius:7px ;
background-color: #01A5B1;
align-items: center;
justify-content: center;
margin-top: 40px;
`;

export const Texto = styled.Text`
font-size: 25px;
color: #fff;
font-weight: bold;
font-style: italic;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor:"#909090"
})`
width: 90%;
height: 50px;
font-size: 20px;
align-items: center;
justify-items: center;
border-radius: 7px;
background-color: #252525;
color: #fff;
padding: 10px;
`;

export const BtnCancel = styled.TouchableOpacity`
width: 80%;
height: 50px;
border-radius:7px ;
background-color: #000;
align-items: center;
justify-content: center;
margin-top: 40px;
`;