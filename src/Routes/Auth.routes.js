import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "../Pages/SignIn";

export default function AuthRoutes(){
    const Stack = createNativeStackNavigator();
    return(
        <Stack.Navigator>
            <Stack.Screen
            component={SignIn}
            name="SignIn"
            options={{
                headerShown:false
            }}
            />
        </Stack.Navigator>
    );
}