import React, { Component } from 'react'
import {View,Image, Button, TextInput,StyleSheet,Picker,Text,Dimensions} from 'react-native'

const  TextInputStyle=({label,name,...res})=>(
       <View style={{flex:1}} >
            <Text style={{color:'#9a73ef'}}>{label}</Text>
             <TextInput
           style={{padding:10,borderWidth:1,borderRadius:10,
            backgroundColor:'white',width:window*0.8,
            borderColor:"#9a73ef",marginBottom:3}}
            underlineColorAndroid = "transparent"
            placeholderTextColor = "#9a73ef"
            onChangeText={text=>setState({name:text})}

            {...res}
            />
        </View> 
);

//This is Get the Divice Dimension and multiply by the values 0.8 
//Also window and screen are diffrent thing in react native 13/4
const window =Dimensions.get("window").width;
const screen = Dimensions.get("screen").width;

class Registration extends Component
{    
    constructor(){
                super();
                this.state={
                    selectedValue:'',
                        window,
                        screen,
                        name:''
                    
                };
            }
 



        render(){
            return(
                // <View >
                //          {/* <Picker
                //             selectedValue={selectedValue}
                //             style={{ height: 50, width: 150 }}
                //             onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                //                 >
                //             <Picker.Item label="Select " value="Select" />
                //             <Picker.Item label="Admin" value="Admin" />
                //             <Picker.Item label="Sale" value="sale" />
                //         </Picker> */}
                //             <TextInputStyle />
                //             <Text>This is text</Text>
                // </View>
                     <View>
                         <TextInputStyle label="Re-password" placeholder="Re-Password"
                         name
                         autoFocus
                         />
                         
                     </View>
                     
                     

            );
        }


}
export default Registration
  
