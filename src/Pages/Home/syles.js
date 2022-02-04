import styled from 'styled-components/native';

export const Container = styled.View`
flex: 1;
background-color: #000;
`;

export const List = styled.FlatList`
flex:1;
background-color: #000;
`;

export const NightPupsBtn = styled.TouchableOpacity`
width:100px;
height: 100px;
align-items: center;
justify-content: center;
position: absolute;
left: ${props=>props.left};
top: ${props=>props.top};
`;

export const NightImage = styled.Image`
width: 200px;
height: 100px;
`;