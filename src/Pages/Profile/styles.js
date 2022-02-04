import styled from 'styled-components/native'

export const Container = styled.View`
flex:1;
background-color: #000;
align-items: center;
`;

export const PerfilImage = styled.Image`
width: 100px;
height: 100px;
border-radius: 50;
margin-top: 40px;
margin-bottom: 20px;
`;

export const UploadImage = styled.TouchableOpacity`
width: 100px;
height: 100px;
border-radius: 50;
margin-top: 40px;
align-items: center;
justify-content: center;
`;

export const InfContain =  styled.View`
align-items: center;
justify-content: center;
`;

export const Name = styled.Text`
font-size: 20px;
color:#fff;
font-weight: bold;
margin-top: -10px;
`;

export const Tag = styled.Image`
width: 200px;
height: 50px;
margin-top: 20px;
margin-bottom: 10px;
`;

export const BtnTag = styled.TouchableOpacity`
align-items: center;
justify-content: center;
`;

export const BtnShopTag = styled.TouchableOpacity`
width: 65;
height: 70;
background-color: #131F2F;
align-items: center;
justify-content:center ;
margin-top: 25;
margin-right: 20px;
margin-bottom: 20px;
`;

export const BtnsContain = styled.View`
`;

export const BtnSair = styled.TouchableOpacity`
width: 65;
height: 70;
align-items: center;
justify-content: center;
background-color: #b22222;
margin-top: 25;
margin-left: 20px;
`;

export const BtnConfig = styled.TouchableOpacity`
width: 65;
height: 70;
align-items: center;
justify-content: center;
background-color: #131F2F;
margin-top: 25;
margin-left: 40px;
`;

export const BtnView = styled.View`
flex-direction: row;
padding: 20px;
`;