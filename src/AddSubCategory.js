import React, { Component } from 'react'
import {View,Image, Button, Text, ScrollView} from 'react-native'


class AddSubCategory extends Component
{

            
        render(){
            return(
                <View style={{flex:1}}>
                <View style={{flex:1}}>
                <View><Text>Add Sub Category</Text></View>

                <Picker
                            selectedValue={selectedValue}
                            style={{ height: 50, width: 150 }}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                                >
                            <Picker.Item label="Select " value="Select" />
                            <Picker.Item label="Category" value="Category" />
                            <Picker.Item label="Category" value="Category" />
                        </Picker>     
                    <View style={{flexDirection:'row'}}>
                        <View>
                           <Image style={{width:20,height:20}} source={require('../assets/images/user.png')}/>
                        </View>
                        <View>
                                <TextInput
                                style={styles.input}
                                onChangeText={onChangeNumber}
                                value={Text}
                                placeholder="Sub Category Name"
                                keyboardType="default"
                            />
                        </View>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View>
                           <Image style={{width:20,height:20}}  source={require('../assets/images/user.png')}/>
                        </View>
                        <View>
                            <Text>Category image</Text>
                            <View><Button title="Galary"/></View>
                            <View><Button title="Camera"/></View>
                            
                        </View>
                    </View>
                    <View>
                        <Button title="Login"/>
                    </View>
                </View>
                {/* this is the table in that list of the product  */}

                    <View>
                        <View><Text>List of the all Sub Category</Text></View>
                        <ScrollView>
                        <View>
                            <View><Text>Id</Text></View>
                            <View><Text>Category</Text></View>
                            <View><Image/></View>
                            <View>
                                <View><Button title="Edit"/></View>
                                <View><Button title="Delete"/></View>
                                
                            </View>
                        </View>
                        </ScrollView>
                    </View>

                </View>



            );
        }


}
export default AddSubCategory
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  