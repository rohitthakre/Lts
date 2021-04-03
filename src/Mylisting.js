import React, { Component } from 'react'
import {View,Image, Button, ScrollView} from 'react-native'

const [text, onChangeText] = React.useState("Useless Text");
const [number, onChangeNumber] = React.useState(null);
const [selectedValue, setSelectedValue] = useState("java");

class Mylisting extends Component
{

            
        render(){
            return(
                <View>
                    <View>
                        <Text>My Listing</Text>
                        <View>
                            <View><Image/></View>
                            <View><Text>Name</Text></View>
                            <View><Text>Contact</Text></View>
                            <View><Text>Email</Text></View>
                        </View>
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
export default Mylisting
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  