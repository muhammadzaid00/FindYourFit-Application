import React, { Component } from 'react';
import { View, Text,StyleSheet, SafeAreaView, TouchableOpacity, Image, TextInput, PermissionsAndroid,ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants'
import * as Permissions from 'expo-permissions'
import Fire from '../Fire'
import * as ImagePicker from 'expo-image-picker'
import { Alert } from 'react-native';
const firebase=require('firebase')
require('firebase/firestore')


export default class PostScreen extends Component {
  state={
    text:'',
    fullname:'',
    gender:'',
    age:'',
    email:'',
    contact:'',
    city:'',
    address:'',
    cnic:'',
    experience:'',
    account:'',

    image:null,
    user:{}
  }

  unsubscribe=null

   componentDidMount(){
      const user=this.props.uid || Fire.shared.uid
      this.unsubscribe=Fire.shared.firestore.collection('users').doc(user).onSnapshot(doc=>{
        this.setState({user:doc.data()})
      })
   }

   componentWillUnmount(){
     this.unsubscribe()
   }

  getPhotoPermission=async ()=>{
    if(Constants.platform.ios){
      const {status}=await Permissions.askAsync(Permissions.CAMERA_ROLL)
      if(status!='granted'){
        alert('We need permission to access your camera roll')
      }
      else{
        const granted=await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA_ROLL,{
            title:"Social App Camera Permission",
            message:"Social App needs access to your camera",
            buttonNeutral: "Ask Me Later",
            buttonNegative: "Cancel",
            buttonPositive: "OK"
          }
        )
      }
      if(granted!==PermissionsAndroid.RESULTS.GRANTED){
        alert('We need permission to access your camera roll')
      
      }
    }
  }

  handlePost=()=>{
    if (this.state.text.trim() === ''){
      Alert.alert('Enter Services')
    }if (this.state.fullname.trim() === ''){
      Alert.alert('Enter Name')
    } if (this.state.gender.trim() === ''){
      Alert.alert('Enter Gender')
    } if (this.state.age.trim() === ''){
      Alert.alert('Enter Age')
    } if (this.state.email.trim() === ''){
      Alert.alert('Enter Email')
    } if (this.state.contact.trim() === ''){
      Alert.alert('Enter Contact')
    } if (this.state.city.trim() === ''){
      Alert.alert('Enter City')
    } if (this.state.address.trim() === ''){
      Alert.alert('Enter Address')
    } if (this.state.cnic.trim() === ''){
      Alert.alert('Enter CNIC')
    } if (this.state.experience.trim() === ''){
      Alert.alert('Enter Experience')
    } if (this.state.account.trim() === ''){
      Alert.alert('Enter Account')
    }
    Fire.shared.addPost({
      text:this.state.text.trim(),
      fullname:this.state.fullname.trim(),
      gender:this.state.gender.trim(),
      age:this.state.age.trim(),
      email:this.state.email.trim(),
      contact:this.state.contact.trim(),
      city:this.state.city.trim(),
      address:this.state.address.trim(),
      cnic:this.state.cnic.trim(),
      experience:this.state.experience.trim(),
      account:this.state.account.trim(),
      localUri:this.state.image})
        .then(ref=>{
          this.setState({text:'',
          fullname:'',
          gender:'',
          age:'',
          email:'',
          contact:'',
          city:'',
          address:'',
          cnic:'',
          experience:'',
          account:'',
          image:null})
          Alert.alert('Successfully uploaded profile')

          this.props.navigation.goBack()
        }).catch(error=>{
          alert("error 1 "+ error.message)
        })
  }

  pickImage=async()=>{
    let result=await ImagePicker.launchImageLibraryAsync({
      mediaTypes:ImagePicker.MediaTypeOptions.Images,
      allowsEditing:true,
      aspect:[4,3]
    })
    if(!result.cancelled){
      this.setState({image:result.uri})
    }
  }

  render() {
    return (
      <ScrollView >
  <ScrollView nestedScrollEnabled={true}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
            <Ionicons name='md-arrow-back' size={24}color='#D8D9DB'></Ionicons>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handlePost}>
            <Text style={{fontWeight:'700'}}>Post</Text>
          </TouchableOpacity>

        </View>
        <View style={styles.inputContainer}>
          <Image source={{uri:this.state.user.avatar}} style={styles.avatar}/>
          <TextInput autoFocus={true}
          multiline={true}
          numberOfLines={2}
          style={{flex:1}}
          placeholder="Discribe your speciality e.g. Yoga, Massage, Physical excersize,Manual Therapy, Body fitness, Weight loss/gain "
          onChangeText={text=>this.setState({text})}
          value={this.state.text}></TextInput>
        </View>
        <TextInput style={styles.input} 
             onChangeText={fullname=>this.setState({fullname})}
             placeholder="Enter Full Name "
             value={this.state.fullname}></TextInput>

               <TextInput style={styles.input} 
             onChangeText={gender=>this.setState({gender})}
             placeholder="Gender: "
             value={this.state.gender}></TextInput>

<TextInput style={styles.input} autoCapitalize="none"
             onChangeText={age=>this.setState({age})}
             placeholder="Age:  "
             value={this.state.age}></TextInput>


             <TextInput style={styles.input} autoCapitalize="none"
             onChangeText={email=>this.setState({email})}
             placeholder="email:  "
             value={this.state.email}></TextInput>

<TextInput style={styles.input} autoCapitalize="none"
             onChangeText={contact=>this.setState({contact})}
             placeholder="Contact no? :  "
             value={this.state.contact}></TextInput>

<TextInput style={styles.input} autoCapitalize="none"
             onChangeText={city=>this.setState({city})}
             placeholder="City:  "
             value={this.state.city}></TextInput>

<TextInput style={styles.input} autoCapitalize="none"
             onChangeText={address=>this.setState({address})}
             placeholder="Address:  "
             value={this.state.address}></TextInput>

<TextInput style={styles.input} autoCapitalize="none"
             onChangeText={cnic=>this.setState({cnic})}
             placeholder="CNIC no: (with dashes):  "
             value={this.state.cnic}></TextInput>

<TextInput style={styles.input} autoCapitalize="none"
             onChangeText={experience=>this.setState({experience})}
             placeholder="Experience (years):  "
             value={this.state.experience}></TextInput>

<TextInput style={styles.input} autoCapitalize="none"
             onChangeText={account=>this.setState({account})}
             placeholder="Bank Account no: (With dashes)  "
             value={this.state.account}></TextInput>


        <TouchableOpacity style={styles.photo} onPress={this.pickImage}>
          <Ionicons name="md-camera" size={32} color="#D8D9Db"/>

        </TouchableOpacity>
        <View style={{marginHorizontal:32,marginTop:32,height:300}}>
            <Image source={{uri:this.state.image}} style={{width:'100%',height:'100%'}}>

            </Image>
        </View>
      </SafeAreaView>
      </ScrollView>  
       </ScrollView>
    );
  }
}

const styles=StyleSheet.create({
    container:{
        flex:1
       
      },
      header:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:32,
        paddingVertical:12,
        borderBottomWidth:1,
        marginTop:16,
        borderBottomColor:'#D8D9DB'
      },
      inputContainer:{
        marginTop:32,
        marginLeft:32,
        marginRight:32,
        marginBottom:10,

        flexDirection:'row',
    
      },
      input:{
        borderBottomColor:'#8A8F9E',
        borderBottomWidth:StyleSheet.hairlineWidth,
        height:40,
        fontSize:15,
        marginLeft:32,
        marginRight:32,
        marginBottom:10,
        color:"#000000"
    },
      avatar:{
        width:48,
        height:48,
        borderRadius:24,
        marginRight:16
      },
      photo:{
        alignItems:'flex-end',
        marginHorizontal:32
      }
})
