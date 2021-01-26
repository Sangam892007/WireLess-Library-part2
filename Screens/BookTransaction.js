import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import * as Permissions from 'expo-permissions';
import {BarCodeScanner} from 'expo-barcode-scanner';

export default class BookTransaction extends React.Component{
    constructor(){
        super();
        this.State = {
            HasCameraPermissions:null,
            ScanData:null,
            Scanned:false,
            buttonState:"normal",
        }

    }   
    PermissionGranted = async()=>{
        const {status}= await Permissions.askAsync(Permissions.CAMERA)
        this.setState({
            HasCameraPermissions:status === "granted",
            buttonState:"clicked",
            Scanned:false
        })
    }
    BarCodeScan = async({
        type,data
    })=>{
        this.setState({
            Scan:true,
            Scanned:true,
            ScanData:data,
            buttonState:"normal"
        })

    }

     render(){
         const HasCameraPermissions = this.State.HasCameraPermissions 
         const Scanned = this.State.Scanned
         const buttonState = this.State.buttonState
         if (buttonState !== "normal" & HasCameraPermissions === true){
            <View style = {[Styles.HeaderDesign]}>
            <View style = {{backgroundColor:"black",width:"100%",}}>
            <Text style = {{fontSize:50,color:"white",marginLeft:"39%"}}>
                Book Transaction
            </Text>
            </View>
            <BarCodeScanner onBarCodeScanned = {Scanned? undefined:this.BarCodeScan}/>
            </View>


         }
         else if (buttonState === "normal"){    
        return(
            <View style = {[Styles.HeaderDesign]}>
                <View style = {{backgroundColor:"black",width:"100%",}}>
                <Text style = {{fontSize:50,color:"white",marginLeft:"39%"}}>
                    Book Transaction
                </Text>
                </View>
                <Text>
                    {HasCameraPermissions === true? this.State.ScanData : "request Camera permission"}
                </Text>
                <TouchableOpacity style = {{backgroundColor:"lightblue",marginTop:200,width:"20%",height:"5%"}} onPress = {()=>{
                    this.PermissionGranted()
                }}>
                    <Text>SCAN</Text>
                </TouchableOpacity>
                
            </View>

        )
     }
    }
}

var Styles = StyleSheet.create({
    HeaderDesign:{
        backgroundColor:"yellow",
        flex:1,
        alignItems:"center",

    }

});