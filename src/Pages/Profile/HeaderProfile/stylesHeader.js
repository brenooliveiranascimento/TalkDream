import styled from 'styled-components/native';

export const Container = styled.View`
background-color: #000;
height: 100px;
border-bottom-width:2px;
width: 100%;
flex-direction: row;
align-items: center;
justify-content: space-around;
`;

export const CoinArea = styled.View`

`;

export const BtnNightmare = styled.TouchableOpacity`
height: 80px;
width: 100px;
align-items: center;
flex-direction: row;
margin-top: -90;
`;

export const BtnDream = styled.TouchableOpacity`
height: 80px;
width: 100px;
align-items: center;
`;

export const NightImage = styled.Image`
height: 80px;
width: 80px;
`;

export const DreamImage = styled.Image`
height: 80px;
width: 80px;
`;

export const Valor = styled.Text`
font-size: 25;
font-weight: bold;
color:#fff;
`;
