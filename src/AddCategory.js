// adding the category 
// In that cheking the valifdation also 
// date 06/04/2021 by rohit 
import React, { Component } from 'react'
import {View,Image,  Text, ScrollView,StyleSheet,TextInput,FlatList,Button} from 'react-native'


class AddCategory extends Component 
{ 
    constructor(props){
        super(props);
        this.state = {
            data: [],
            name:'',
            email:'',
            id:'',
        };
        //  this.studentAdd = this.studentAdd.bind(this)
        //  this is the javascript in that if y have using arrow
        // function then u do not have any binding process 
        // simple function then u have to used binding function date 06/04/2021 rohit
        
    }

    studentAdd=()=>{
         fetch('https://606af877f8678400172e54c2.mockapi.io/Student', {
            method: 'POST',
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name:`${this.state.name}`,
                email:`${this.state.email}`
                
                    
            })
             });
             console.log("Student Updated");
    }
     
    studentDelete=(id)=>{
        
        fetch('https://606af877f8678400172e54c2.mockapi.io/Student/:'+id,{
            method:'DELETE',
            headers:{
                Accept:'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                 id:`${this.state.id}`

            })
        });
        console.log("Student Deleted");
    }


    componentDidMount(){
        fetch('https://606af877f8678400172e54c2.mockapi.io/Student')
        .then((response) => response.json())
        .then((json) => {
          this.setState({ data: json });
        })
        .catch((error) => console.error(error))
        .finally(() => {
          this.setState({ isLoading: false });
        });

    }


    categoryVlidation =()=>{

        const {name}= this.state;
        const {email}= this.state;
        if(name == ''||email == ''){
            console.log("Enter the email and pass word")
        }
        else{
            this.studentAdd();
        }
    }



        render(){
            const { data, isLoading } = this.state; 
            return(
                <View style={{flex:1 }}>
                    <View style={{flex:1 ,marginTop:30}}>
                        
                      
                    <TextInput style = {{margin: 15,height: 40,
                            borderColor: '#7a42f4', borderWidth: 1}}
                            underlineColorAndroid = "transparent"
                            placeholder = "AddCategory"
                            placeholderTextColor = "#9a73ef"
                            autoCapitalize = "none"
                            onChangeText={text=>this.setState({name:text})}
                                value={this.state.name}
                            />
                     <TextInput style = {{margin: 15,height: 40,
                            borderColor: '#7a42f4', borderWidth: 1}}
                            underlineColorAndroid = "transparent"
                            placeholder = "AddCategory"
                            placeholderTextColor = "#9a73ef"
                            autoCapitalize = "none"
                            onChangeText={text=>this.setState({email:text})}
                            value={this.state.email}
                                                        
                            />       
                        <Text>Please Select Image</Text>
                        <Button title="Add Category" onPress={this.categoryVlidation}/>
                       
                    </View>
                    
                        
                                              {/* this is the table in that list of the product  */}
                    <View style={{flex:2}}>

                            <View>
                                <View>
                                    <Text>List of the all Category</Text>
                                </View>
                                <ScrollView>
                                <FlatList
                                    data={data}
                                    keyExtractor={({ id }, index) => id}
                                    renderItem={({ item }) => (
                                        <View style={{flexDirection:'row',padding:10 }}>
                                                <View><Text>{item.id}</Text></View>
                                                <View><Image style={{width:50,height:50}} source={require('../assets/images/user.png')}/></View>
                                                <View style={{width:100}}><Text>{item.name}</Text>
                                                <Text>{item.email}</Text></View>
                                            <View style={{flexDirection:'column-reverse',padding:10}}>
                                            <View style={{padding:10}}><Button title="Edit" /></View>
                                            <View><Button title="Delete" 
                                           onPress={this.studentDelete(item.id)+console.log(item.id)}
                                            /></View>
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
export default AddCategory
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  