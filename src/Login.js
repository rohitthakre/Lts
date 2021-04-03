import React, { Component } from 'react'
import {View,Image, Button, TouchableOpacity} from 'react-native'





class Login extends Component
{
    constructor(){
        const [Email, setEmail] =useState("Useless Text");
        const [Password, setPasword] = useState("Useless Text");
        const [pickerRole, setPicker] = useState("Select");   
    }

    
        render(){
            return(
                <View style={{flex:1}}>
                <View style={{flex:1}}> </View>
                <View style={{flex:2}}>
                         <Picker
                            pickerRole={pickerRole}
                            style={{ height: 50, width: 150 }}
                            onValueChange={(itemValue, itemIndex) => setPicker(itemValue)}
                                >
                            <Picker.Item label="Select " value="Select" />
                            <Picker.Item label="Admin" value="Admin" />
                            <Picker.Item label="Sale" value="sale" />
                        </Picker>
                    <View style={{flexDirection:'row'}}>
                        <View>
                           <Image style={{width:20,height:20}} source={require('../assets/images/user.png')}/>
                        </View>
                        <View>
                                <TextInput
                                style={styles.input}
                                onChangeText={setEmail}
                                value={Email}
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
                                onChangeText={setPasword}
                                value={Password}
                                placeholder="Password"
                                keyboardType="Password"
                            />
                        </View>
                    </View>
                    <View>
                        <Button title="Login"/>
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
  