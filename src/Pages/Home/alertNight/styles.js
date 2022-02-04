import styled from 'styled-components/native';
import { styles } from '../../../Components/Header';

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
padding: 10px;
`;

export const Texto = styled.Text`
font-size: 25px;
color: #fff;
font-weight: bold;
font-style: italic;
text-align: center;
`;

export const BtnOk = styled.TouchableOpacity`
width: 150;
height: 50;
align-items: center;
justify-content: center;
border-radius: 7px;
background-color: #01A5B1;
margin-top: 20px;
`;