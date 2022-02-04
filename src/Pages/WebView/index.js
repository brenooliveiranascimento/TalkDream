import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function Web() {
 return (
   <WebView
   source={{uri:'https://www.linkedin.com/in/breno-nascimento-0b3331229/'}}
   />
  );
}