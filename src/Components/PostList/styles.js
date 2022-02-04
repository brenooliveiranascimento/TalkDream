import styled from 'styled-components/native'

export const Container = styled.View`
background-color: #131F2F;
width: 100%;
margin-top: 20px;
justify-content: center;
`;

export const Header = styled.TouchableOpacity`
flex-direction: row;
border-bottom-width: 1px;
border-bottom-color :#AABCD0;
align-items: center;
`;

export const Tag = styled.Image`
width: 150px;
height: 35px;
margin-left: 20px;
margin-top: 10px;
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
font-size: 16;
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
padding: 5px;
border-top-width: 1px;
border-top-color: #131F2F;
justify-content: space-between;
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
margin-left: 20;
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
background-color: #151515;
`;

export const HeaderModal = styled.View`
width: 100%;
height: 50px;
border-bottom-color: #01A5B1;
border-bottom-width: 1px;
background-color: #000;
justify-content:center;
`;

export const BtnBack = styled.TouchableOpacity`
width: 40;
height: 40;
border-radius: 20;
background-color: #01A5B1;
margin-left: 5px;
align-items: center;
justify-content: center;
`;