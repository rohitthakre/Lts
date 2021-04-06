import React, { Component } from 'react'
import {View,Image, Button,StyleSheet,TextInput, ScrollView} from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';



class AddAdmin extends Component
{

    constructor(){
        super();
        this.state={
            Usrname:'',
            email:'',
        };
    }
    componentDidMount(){
        
    }

    registercall(){
        fetch('https://606af877f8678400172e54c2.mockapi.io/Student', {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
   

    
  })
  
});
console.log("Updated");
   }
    
    

    render(){
            return(
               
                <ScrollView showsVerticalScrollIndicator={false} style={styles.create} >
                    <View>
                        <Text>Name:AdminUSer</Text>
                        <Text>Emial:adminuser@gmail.com</Text>
                        <Text>Contact:000000000</Text>
                        <Image style={{width:20,height:20}} source={require('../assets/images/user.png')}/>
                   </View>
                         <DropDownPicker
                            items={[
                                {label: 'Male', value: 'Admin'},
                                {label: 'Female', value: 'Female'},
                            ]}
                            defaultIndex={0}
                            containerStyle={{height: 40}}
                            onChangeItem={item => console.log(item.label, item.value)}
                        />
                           
                    
                        <View style={{flexDirection:'row',height:40,
                        alignItems:'center',backgroundColor:'pink'
                        ,borderWidth:2}}>
                             <View style={{flex:1 ,backgroundColor:'green'}}>
                                <Image style={styles.imageStyle}
                                 source={require('../assets/images/user.png')}/>
                                </View>
                                <View style={{flex:4 ,backgroundColor:'red',borderWidth:2}}>
                                        <TextInput 
                                        style={styles.input}
                                        onChangeText={(Usrname)=>this.setState({Usrname})}
                                        value={this.state.name}
                                        placeholder="Fisrt Name"
                                        fontSize="12"
                                        keyboardType="default"
                                    />
                                </View>
                            </View>
                        <View style={styles.rowPadding}>
                            <View>
                            <Image style={styles.imageStyle}   
                            source={require('../assets/images/user.png')}/>
                            </View>
                            <View>
                                    <TextInput
                                    style={styles.input}
                                    onChangeText={(email)=>this.setState({email})}
                                    value={this.state.name}
                                    placeholder="Last Name"
                                    keyboardType="default"
                                />
                            </View>
                        </View>

                            <View style={{flexDirection:'row',margin:10}}>
                            <View>
                                <Button title="submit" onPress={this.registercall}/>
                            </View>
                         

                        </View>
                   
                </ScrollView>



            );
        }


}
export default AddAdmin
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
     marginTop:20
    },
    rowPadding:{
        flexDirection:'row',
        padding:20,
    },
    imageStyle:{
        width:20,
        height:20,
    }
  });
  