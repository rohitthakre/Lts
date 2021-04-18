import React, { Component, useState } from 'react'
import { useEffect } from 'react';
import {View,Text,Dimensions, FlatList,SafeAreaView,TextInput} from 'react-native'

const window =Dimensions.get("window").width;
const screen = Dimensions.get("screen").width;

const HomeScreen = ()=>{ 
    const [filterData,setfilterdData] = useState([])
    const [masterData,setmasterData] = useState([]);
    const [search,setsearch] = useState('');

    useEffect(()=>{
        fetchPost();
        return()=>{

        }
    },[])


    const fetchPost= ()=>{
        const apiURL = 'https://606af877f8678400172e54c2.mockapi.io/Student';
        fetch(apiURL)
        .then((response) => response.json())
        .then((responseJson)=>{
            setfilterdData(responseJson);
            setmasterData(responseJson);
        }).catch((error)=>{
            console.error(error);
        })
    }   

    const searchFilter=(text)=>{
        if(text)
        {
            const newData = masterData.filter((item)=>{
                const itemData = item.name ?item.name.toUpperCase(): '' .toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setfilterdData(newData);
            setsearch(text);
        }
        else{
            setfilterdData(masterData);
            setsearch(text);
        }
    }

    const ItemView = ({item}) =>{
        return(
            <Text>
                {item.id}{'.'}{item.name.toUpperCase()}
            </Text>
        )
    }

    const ItemSeparatorView = () => {
        return(
            <View style={{height:0.5,width:'100%',backgroundColor:'#c8c8c8'}}/>
        )
    }

    return(
        <SafeAreaView>
            <View>
                <TextInput style={{height:40,borderWidth:1,paddingLeft:20,
                margin:5,borderColor:'#009688',backgroundColor:'white'}}
                value={search}
                palceholder="Search"
                underlineColorAndroid="transparent"
                onChangeText={(text)=>searchFilter(text)}
                
                />
            <FlatList
                data={filterData}
                keyExtractor={(item,index)=>index.toString()}
                ItemSeparatorComponent={ItemSeparatorView}
                renderItem={ItemView}
            />

            </View>
        </SafeAreaView>
        );

}
export default HomeScreen;