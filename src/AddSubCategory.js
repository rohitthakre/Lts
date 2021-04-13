import React, { Component } from 'react'
import {View,Image, Button, Text, StyleSheet,TextInput,ScrollView,FlatList} from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
import CameraApp from './Screen/CameraApp';
import Camera from './Screen/CameraApp';



class AddSubCategory extends Component
{

    constructor(){
        super();
        this.st
        ate={
            data:[],
            subCate:'',

        };
    }

    
    componentDidMount(){
        fetch('https://606af877f8678400172e54c2.mockapi.io/Student')
        .then((response) => response.json())
        .then((json)=>{
            this.setState({data:json});
        })
        .catch((error)=>console.error(error))
        .finally(()=>{
            this.setState({})
        });

    }


            
        render(){
            const { data, isLoading } = this.state; 
         

            return(
                <View style={{flex:1}}>
                    <View>
                            <Text>Name:AdminUSer</Text>
                            <Text>Emial:adminuser@gmail.com</Text>
                            <Text>Contact:000000000</Text>
                            <Image style={{width:20,height:20}} source={require('../assets/images/user.png')}/>
                    </View>
                    <View><Text>Add Sub Category</Text></View>
                    <DropDownPicker
                            
                            items={data.map(item=> ({label:item.name,value:item.name}))}
                            defaultIndex={0}
                            containerStyle={{height: 40}}
                            onChangeItem={item => console.log(item.label, item.value)}
                        />
                        <View style={{flexDirection:'row'}}>
                            <View>
                            <Image style={{width:20,height:20}} source={require('../assets/images/user.png')}/>
                            </View>
                            <View>
                                <TextInput style = {{margin: 15,height: 40,
                                    borderColor: '#7a42f4', borderWidth: 1}}
                                    underlineColorAndroid = "transparent"
                                    placeholder = "SubCategory"
                                    placeholderTextColor = "#9a73ef"
                                    autoCapitalize = "none"
                                    onChangeText={text=>this.setState({subCate:text})}
                                        value={this.state.subCate}
                                />
                            </View>
                        </View>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <View>
                            <Image style={{width:50,height:50}}  source={require('../assets/images/user.png')}/>
                            </View>
                            <Text> Seletect Category image</Text>
                            
                        </View>
                        <View style={{flexDirection:'row',padding:10,justifyContent:'space-around'}}>
                            <Button title="Galary"/>
                            <Button title="Camera" onPress={<CameraApp/>}/>
                        </View>
                        <View  style={{justifyContent:'space-between'}}>
                            <Button title="Submit"/>
                           
                        </View>
                        <View style={{marginTop:10}}>
                            <Button title="Cancel"/>
                        </View>

                       
                            <View><Text>List of the all Sub Category</Text></View>
                            <ScrollView>
                            <View style={{flexDirection:'row',padding:10}}>
                            <View style={{padding:10}}><Image style={{width:40,height:40}} source={require('../assets/images/user.png')}/></View>
                                <View style={{flexDirection:'column',padding:2}}>
                                    <Text>Id</Text>     
                                    <Text>Category</Text>       
                                    <Text>SubCategory</Text>        
                                    <Text>createBY</Text>
                                </View>
                                <View style={{justifyContent:'space-between'}}>
                                <Button title="Edit"/>
                                <Button title="Delete"/>
                                </View>
                            </View>
                            </ScrollView>
                        
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
  