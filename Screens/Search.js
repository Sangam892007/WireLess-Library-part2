import React from 'react';
import {View, Text,StyleSheet} from 'react-native';

export default class SearchScreen extends React.Component{
    render(){
        return(
            <View style = {[Styles.HeadDesign]}>
                <View style = {{backgroundColor:"black",width:"75%",borderRadius:10}}>
                <Text style = {{fontSize:50,color:"white",marginLeft:"26%"}}>
                    Search here for your Book
                </Text>
                </View>
            </View>
        )
    }
}
var Styles = StyleSheet.create({
    HeadDesign:{
        backgroundColor:"yellow",
        flex:1,
        alignItems:"center",

    }
});