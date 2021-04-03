import React, { Component } from 'react'
import {View,Image, Button, Text, ScrollView} from 'react-native'


class AddCategory extends Component
{

            
        render(){
            return(
                <View style={{flex:1}}>
                <View style={{flex:1}}>
                    <View><Text>Add Category</Text></View>
                         
                    <View style={{flexDirection:'row'}}>
                        <View>
                           <Image style={{width:20,height:20}} source={require('../assets/images/user.png')}/>
                        </View>
                        <View>
                                <TextInput
                                style={styles.input}
                                onChangeText={onChangeNumber}
                                value={Text}
                                placeholder="Category Name"
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
                        <View><Text>List of the all Category</Text></View>
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
export default AddCategory
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  