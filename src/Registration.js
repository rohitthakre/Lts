import React, { Component } from 'react'
import {View,Image, Button} from 'react-native'

const [text, onChangeText] = React.useState("Useless Text");
const [number, onChangeNumber] = React.useState(null);
const [selectedValue, setSelectedValue] = useState("java");

class Registration extends Component
{

            
        render(){
            return(
                <View style={{flex:1}}>
                <View style={{flex:1}}> </View>
                <View style={{flex:2}}>
                         <Picker
                            selectedValue={selectedValue}
                            style={{ height: 50, width: 150 }}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
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
                                onChangeText={onChangeNumber}
                                value={te}
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
                                onChangeText={onChangeNumber}
                                value={number}
                                placeholder="Password"
                                keyboardType="Password"
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
                                onChangeText={onChangeNumber}
                                value={number}
                                placeholder="Re-Password"
                                keyboardType="Re-Password"
                            />
                        </View>
                    </View>
                    <View>
                        <Button title="Login"/>
                    </View>
                    <View>
                        <View>
                            <Image style={{width:40,height:40}}  source={require('../assets/images/google.png')}/>
                        </View>
                       
                    </View>
                </View>
                <View style={{flex:1}}></View>
                </View>



            );
        }


}
export default Registration
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  