import React, { useState, useContext } from "react";
import AppRoutes from "./App.routes";
import AuthRoutes from "./Auth.routes";
import { AuthContext } from "../Contexts";
import { ActivityIndicator, View } from "react-native";

export default function Routes(){

    const { verify, loading } = useContext(AuthContext);

    if(loading){
        return(
            <View style={{
                backgroundColor:"#000",
                alignItems:'center',
                justifyContent:'center',
                flex:1
            }}>
                <ActivityIndicator
                size={60}
                color={"#01A5B1"}
                />
            </View>
        )
    }

    return(
        verify ? <AppRoutes/> : <AuthRoutes/>
    );
}