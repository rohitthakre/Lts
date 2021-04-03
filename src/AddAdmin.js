import React, { Component } from 'react'
import {View,Image, Button,Picker} from 'react-native'

const [text, onChangeText] = React.useState("Useless Text");
const [number, onChangeNumber] = React.useState(null);
const [selectedValue, setSelectedValue] = useState("java");

class AddAdmin extends Component
{

            
        render(){
            return(
                <View style={{flex:1}}>
                    <View style={{}}>
                        <View style={{flexDirection:'row'}}>
                            <View>
                            <Image style={{width:20,height:20}} source={require('../assets/images/user.png')}/>
                            </View>
                            <View>
                                    <TextInput
                                    style={styles.input}
                                    onChangeText={onChangeNumber}
                                    value={text}
                                    placeholder="Fisrt Name"
                                    keyboardType="default"
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
                                    value={text}
                                    placeholder="Last Name"
                                    keyboardType="default"
                                />
                            </View>
                        </View>

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
                                    value={text}
                                    placeholder="Role"
                                    keyboardType="default"
                                />
                            </View>
                        </View>
                       
                        <View style={{flexDirection:'row'}}>
                            <View>
                            <Image style={{width:20,height:20}} source={require('../assets/images/user.png')}/>
                            </View>
                            <View>
                                    <TextInput
                                    style={styles.input}
                                    onChangeText={onChangeNumber}
                                    value={number}
                                    placeholder="Mobile Number"
                                    keyboardType="Number"
                                />
                            </View>
                        </View>
                       
                        <View style={{flexDirection:'row'}}>
                            <View>
                            <Image style={{width:20,height:20}} source={require('../assets/images/user.png')}/>
                            </View>
                            <View>
                                    <TextInput
                                    style={styles.input}
                                    onChangeText={onChangeNumber}
                                    value={text}
                                    placeholder="Email"
                                    keyboardType="Email"
                                />
                            </View>
                        </View>
                       
                        <View style={{flexDirection:'row'}}>
                            <View>
                            <Image style={{width:20,height:20}} source={require('../assets/images/user.png')}/>
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
                            <Image style={{width:20,height:20}} source={require('../assets/images/user.png')}/>
                            </View>
                            <View>
                                    <TextInput
                                    style={styles.input}
                                    onChangeText={onChangeNumber}
                                    value={number}
                                    placeholder="Re-Password"
                                    keyboardType="Password"
                                />
                            </View>
                            
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <View>
                            <Image style={{width:20,height:20}} source={require('../assets/images/user.png')}/>
                            </View>
                            <View>
                                    <TextInput
                                    style={styles.input}
                                    onChangeText={onChangeNumber}
                                    value={text}
                                    placeholder="Address"
                                    keyboardType="default"
                                />
                            </View>
                            
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <View>
                            <Image style={{width:20,height:20}} source={require('../assets/images/user.png')}/>
                            </View>
                            <View>
                                    <TextInput
                                    style={styles.input}
                                    onChangeText={onChangeNumber}
                                    value={text}
                                    placeholder="State"
                                    keyboardType="default"
                                />
                            </View>
                            
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <View>
                            <Image style={{width:20,height:20}} source={require('../assets/images/user.png')}/>
                            </View>
                            <View>
                                    <TextInput
                                    style={styles.input}
                                    onChangeText={onChangeNumber}
                                    value={text}
                                    placeholder="City"
                                    keyboardType="default"
                                />
                            </View>
                            
                        </View>
                        
                        <View style={{flexDirection:'row'}}>
                            <View>
                            <Image style={{width:20,height:20}} source={require('../assets/images/user.png')}/>
                            </View>
                            <View>
                                    <Button title="Choose Image"/>
                            </View>
                            <View><Button title="Camera"/></View>
                            
                        </View>
                        <View>
                        <View><Button titile="submit"/></View>
                        <View><Button titile="Reset"/></View>
                        <View><Button titile="Cancel"/></View>

                        </View>
                    </View>
                </View>



            );
        }


}
export default AddAdmin
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  