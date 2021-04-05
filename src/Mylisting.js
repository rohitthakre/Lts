import React, { Component } from 'react'
import {View,Image, Button, ScrollView, FlatList,StyleSheet,Text} from 'react-native'
const Api = 'http://localtradestreet.com/ltsapi/public/api/cat';
class Mylisting extends Component
{

    constructor(props){
        super(props);
        this.state = {
            data: [],
        };
    }

    componentDidMount(){
        fetch('http://localtradestreet.com/ltsapi/public/api/cat')
        .then((response) => response.json())
        .then((json) => {
          this.setState({ data: json });
        })
        .catch((error) => console.error(error))
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
            
        render(){
            const { data, isLoading } = this.state; 
            return(
                <View style={styles.create}>
                    <View >
                        <View style={{height:80,}}>
                            <View> <Text>My Listing</Text></View>
                                <View style={{flexDirection:'row'}}>
                                <View style={{width:50,height:50}}><Image style={{width:50,height:50}} source={require('../assets/images/user.png')}/></View>
                                    <View >
                                        <View><Text>Name:Rohan Saha</Text></View>
                                        <View><Text>Contact:8956248754</Text></View>
                                        <View><Text>Email:rohanSaha@gmia.com</Text></View>
                                    </View>
                                </View>
                            </View>
                         <View>
                        <ScrollView>
                      
                        <FlatList
                            data={data}
                            keyExtractor={({ id }, index) => id}
                            renderItem={({ item }) => (
                                <View style={{flexDirection:'row',padding:10 }}>
                                    <View><Text>{item.id}</Text></View>
                                    <View><Image style={{width:50,height:50}} source={require('../assets/images/user.png')}/></View>
                                    <View style={{width:100}}><Text>{item.category}</Text></View>
                                <View style={{flexDirection:'column-reverse',padding:10}}>
                                <View style={{padding:10}}><Button title="Edit"/></View>
                                <View><Button title="Delete"/></View>
                                </View>
                        </View>
                            )}
                        />
                        </ScrollView>
                        </View>
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
  