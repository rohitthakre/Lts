import React, { Component } from 'react'
import {View,Image, Button, TouchableOpacity,StyleSheet,TextInput,Alert} from 'react-native'
class Login extends Component
{
    constructor(){
        super();
        this.state={
            email:'',
            password:'',
        };
        this.validates = this.validates.bind(this);
    
    }

    validates =() =>{
        let text =this.state.email;
        const {email} = this.state;
        const {password} = this.state;
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ; 
        if(email == '' || password == '')
        {
            console.log('Email and PAssword are Empty')
            Alert('Email and PAssword are Empty')
        }
        if(password.length<5){
            console.log('Enter the Password is greter maximum 8 charecter')
            Alert.alert('Enter the Password is greter maximum 8 charecter')

        }
        if (reg.test(text) === false)
        {  Alert.alert("Invalid Emial")
            console.log("Invalid Emial")
            this.setState({emai:text})
            return true;
        }
        else{
           this.setState({email:text})
           Alert.alert("Emial is correct")
           Alert.alert("Password is correct")
           console.log("Emial is correct")
           console.log("Password is correct")
        }
    }
        render(
        ){
            return(
                <View style={{flex:1}}>
                <View style={{flex:1}}> </View>
                <View style={{flex:2}}>
                         {/* <Picker
                            pickerRole={pickerRole}
                            style={{ height: 50, width: 150 }}
                            onValueChange={(itemValue, itemIndex) => setPicker(itemValue)}
                                >
                            <Picker.Item label="Select " value="Select" />
                            <Picker.Item label="Admin" value="Admin" />
                            <Picker.Item label="Sale" value="sale" />
                        </Picker> */}
                    <View style={{flexDirection:'row'}}>
                        <View>
                           <Image style={{width:20,height:20}} source={require('../assets/images/user.png')}/>
                        </View>
                        <View>
                                <TextInput
                                style={styles.input}
                                onChangeText={(text)=>this.setState({email:text})}
                                value={this.state.email}
                                placeholder="Email"
                                keyboardType="Email"
                            />
                        </View>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View>
                           <Image style={{width:20,height:20}}  source={require('../assets/images/user.png')}/>
                        </View>
                        <View>
                                <TextInput
                                style={styles.input}
                                onChangeText={(password)=>this.setState({password:password})}
                                value={this.state.password}
                                secureTextEntry={true}
                                placeholder="Password"
                                keyboardType="Password"
                            />
                        </View>
                    </View>
                    <View>
                        <Button title="Login" onPress={this.validates}/>
                    </View>
                    <View>
                        <View>
                            <Image style={{width:40,height:40}} 
                             source={require('../assets/images/google.png')}/>
                        </View>
                       
                    </View>
                    <View>
                        <TouchableOpacity><View>Registration</View></TouchableOpacity>
                        <TouchableOpacity><View>Reset</View></TouchableOpacity>
                    </View>
                </View>
                <View style={{flex:1}}></View>
                </View>



            );
        }


}
export default Login
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  