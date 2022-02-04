import styled from 'styled-components/native'

export const Container = styled.View`
background-color: #131F2F;
width: 100%;
margin-top: 20px;
justify-content: center;
`;

export const Header = styled.View`
flex-direction: row;
border-bottom-width: 1px;
border-bottom-color :#AABCD0;
align-items: center;
`;

export const Tag = styled.Text`
font-style: italic;
font-weight: bold;
color: #01A5B1;
font-size: 15px;
`;

export const Perfil = styled.Image`
width: 40px;
height: 40px;
border-radius: 20px;
margin-left: 5px;
margin-top: 10px;
margin-bottom: 10px;
`;

export const Name = styled.Text`
font-size: 18;
color: #999999;
margin-left: 10px;
`;

export const Contain = styled.View`
background-color: #131F2F;
padding: 5px;
justify-content: center;
padding:5px;
`;

export const TextContain = styled.Text`
color: #fff;
margin-top: 5px;
font-size: 18;
margin-left: 5px;
`;

export const ActionArea = styled.View`
flex-direction: row;
justify-content: space-between;
padding: 5px;
border-top-width: 1px;
border-top-color: #131F2F;
`;

export const TimeCreated = styled.Text`
font-size: 14;
margin-right: 5px;
color: #AABCD0;
margin-right: 10px;
`;

export const LikesView = styled.Text`
font-size: 14;
margin-right: 5px;
color: #AABCD0;
`

export const LikesArea = styled.TouchableOpacity`
font-size: 14;
margin-right: 5px;
color: #AABCD0;
flex-direction: row;
`;

export const BtnComents = styled.TouchableOpacity`
font-size: 14;
margin-right: 5px;
color: #AABCD0;
flex-direction: row;
`;


export const ModalView = styled.View`
margin-top: 50px;
flex: 1;
background-color: #131F2F;
margin-left: 25px;
margin-right: 25px;
`;

export const ComponentComentarios = styled.FlatList`
flex:1;
background-color: #000;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor:"#fff"
})`
width: 100%;
height: 55px;
border-top-width: 1px;
border-top-color: #01A5B1;
padding: 10px;
color:#fff;
font-size:16;
`;

export const BtnSend = styled.TouchableOpacity`
width: 40px;
height: 40px;
border-radius: 20px;
background-color: #01A5B1;
align-items:center;
justify-content: center;
position: absolute;
right: 10px;
bottom: 5px;
`;