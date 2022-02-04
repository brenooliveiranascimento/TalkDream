import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  padding-top: 14px;
  flex:1;
  background-color: #000;
`;

export const AreaInput = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #252525;
  margin: 10px;
  border-radius: 4px;
  padding: 5px 10px;
`;

export const Input = styled.TextInput`
  width: 90%;
  background-color: #252525; 
  height: 40px;
  padding-left: 8px;
  font-size: 17px;
  color: #121212;
  color: #fff;
`;


export const List = styled.FlatList`
flex:1;
`;


export const Container1 = styled.TouchableOpacity`
  margin: 5px 10px;
  background-color: #222227;
  padding: 10px;
  border-radius: 4px;
`;

export const Name = styled.Text`
  color: #FFF;
  font-size: 17px;
`;
