import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
flex: 1;
background-color: #000;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor:"#AABCD0",
})`
width: 100%;
background-color: #131F2F;
color: #fff;
margin-top: 20px;
padding: 20px;
font-size: 18;
`;

export const BtnArea = styled.View`
flex-direction: row;
align-items: center;
justify-content: center;
padding: 20px;
`;

export const BtnDream = styled.TouchableOpacity`
width: 30%;
height: 50px;
background-color: ${props=>props.data === 'sonho' ? '#131F2F' : '#01A5B1'};
margin-right: 40px;
align-items: center;
justify-content: center;
border-radius: 4px;
border-width: ${props=>props.data === 'sonho' ? '2px' : '0px'};
border-color: #01A5B1;
`;

export const BtnNightmare = styled.TouchableOpacity`
width: 30%;
height: 50px;
background-color: ${props=>props.data === 'pesadelo' ? '#131F2F' : '#01A5B1'};
align-items: center;
justify-content: center;
border-radius: 4px;
border-width: ${props=>props.data === 'pesadelo' ? '2px' : '0px'};
border-color: #01A5B1;
`;

export const BtnText = styled.Text`
font-size: 20;
color: #fff;
font-weight: bold;
`;

export const Send = styled.TouchableOpacity`
width: 60px;
height: 60px;
border-radius:30px ;
background-color: #01A5B1;
align-items: center;
justify-content:center;
position: absolute;
right: 20px;
bottom: 20px;
`;