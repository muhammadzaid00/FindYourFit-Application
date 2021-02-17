import React, { Component } from 'react';
import { View, Text,StyleSheet,  FlatList,Button,TextInput,
  Image,
  ImageBackground,
  Linking,
  Platform,
  ScrollView,
  TouchableOpacity, LayoutAnimation,BackHandler  ,  ToastAndroid
} from 'react-native';
  import { Ionicons } from '@expo/vector-icons';

import Fire from '../Fire'
import moment from 'moment'



///////////////////////////////////////////////////////







/////////////////////////////////////////





export default class DetailScreen extends Component{


  componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }

    handleBackButton() {
        ToastAndroid.show('Back button is pressed', ToastAndroid.SHORT);
        return true;
    }




  ////////////////////////////////////////

  static navigationOptions = ({ navigation }) => {
    return {
       header: () => null
    } 
}





    constructor(props) {
        super(props);
        this.state = {
          activeSlide: 0
        };
        this.state ={
          content:false
        }
      }

      componentHideAndShow = () => {
        this.setState(previousState => ({ content: !previousState.content }))
      }
      
         
  state={
    clientfullname:'',
    clientgender:'',
    clientage:'',
    clientemail:'',
    clientcontact:'',
    clientcity:'',
    clientaddress:'',
    clienttrainername:'',
    clientservices:'',
    clientpost:{}
  }
  hireit=()=>{
    const { navigation } = this.props;
    const post = navigation.getParam('post');

    if (this.state.clientfullname.trim() === ''){
      alert('Enter your full name')
    }
    if (this.state.clientgender.trim() === ''){
      alert('Enter Gender')
    }
    if (this.state.clientage.trim() === ''){
      alert('Enter Age')
    }
    if (this.state.clientemail.trim() === ''){
      alert('Enter Email')
    }
    if (this.state.clientcontact.trim() === ''){
      alert('Enter Contact')
    }
    if (this.state.clientcity.trim() === ''){
      alert('Enter your city name')
    }
    if (this.state.clientaddress.trim() === ''){
      alert('Enter address')
    }
    if (this.state.clienttrainername.trim() === ''){
      alert('Enter your trainer name')
    } if (this.state.clientservices.trim() === ''){
      alert('Enter Services')
    }


  Fire.shared.hire({

    clientfullname:this.state.clientfullname.trim(),
    clientgender:this.state.clientgender.trim(),
    clientage:this.state.clientage.trim(),
    clientemail:this.state.clientemail.trim(),
    clientcontact:this.state.clientcontact.trim(),
    clientcity:this.state.clientcity.trim(),
    clientaddress:this.state.clientaddress.trim(),
    clienttrainername:this.state.clienttrainername.trim(),
    clientservices:this.state.clientservices.trim(),
    
    text:post.text,
    fullname:post.fullname,
    gender:post.gender,
    age:post.age,
    email:post.email,
    contact:post.contact,
    city:post.city,
    address:post.address,
    cnic:post.cnic,
    experience:post.experience,
    account:post.account,
   
   
    

  
    
  })
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
        clientfullname:'',
        clientgender:'',
        clientage:'',
        clientemail:'',
        clientcontact:'',
        clientcity:'',
        clientaddress:'',
        clienttrainername:'',
        clientservices:'',
      })
      this.props.navigation.navigate('Home')
      }).catch(error=>{
        alert("error 1 "+ error.message)
      })
}


    render(){

        const { navigation } = this.props;
        const post = navigation.getParam('post');

     
      
        return(
          <ScrollView >
          <ScrollView nestedScrollEnabled={true}>
            <View style = {{flex:1,marginTop:10,marginLeft:30,marginRight:30,marginBottom:30}}>

            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')}>
            <Ionicons name='md-arrow-back' size={24}color='#000000'></Ionicons>
          </TouchableOpacity>



            <Text style = {styles.header}>{("Name: "+post.fullname)}</Text>
            <Text style = {styles.bodytext}>{("Speciality: "+post.text)}</Text>
            <Text style = {styles.bodytext}>{("Gender: "+post.gender)}</Text>
            <Text style = {styles.bodytext}>{("Age: "+post.age)}</Text>
            <Text style = {styles.bodytext}>{("City: "+post.city)}</Text>
            <Text style = {styles.bodytext}>{("Address: "+post.address)}</Text>
            <Text style = {styles.bodytext}>{("CNIC: "+post.cnic)}</Text>
            <Text style = {styles.bodytext}>{("Experience:  "+post.experience +" Years")}</Text>

            <TouchableOpacity style={{alignItems:'center',borderRadius:10}}  onPress={this.componentHideAndShow}>
            <Text style = {styles.text}>
               Hire This Trainer
            </Text>
         </TouchableOpacity>
         {this.state.content?
         <View style = {{flex:1}}>
     
          <Text style={{fontSize:20}} >
            Fill Up the form to hire the trainer
          </Text>
          <TextInput style={styles.input} 
             onChangeText={clientfullname=>this.setState({clientfullname})}
             placeholder="Enter Full Name "
             value={this.state.clientfullname}></TextInput>

               <TextInput style={styles.input} 
             onChangeText={clientgender=>this.setState({clientgender})}
             placeholder="Gender: "
             value={this.state.clientgender}></TextInput>

<TextInput style={styles.input} autoCapitalize="none"
             onChangeText={clientage=>this.setState({clientage})}
             placeholder="Age:  "
             value={this.state.clientage}></TextInput>


             <TextInput style={styles.input} autoCapitalize="none"
             onChangeText={clientemail=>this.setState({clientemail})}
             placeholder="email:  "
             value={this.state.clientemail}></TextInput>

<TextInput style={styles.input} autoCapitalize="none"
             onChangeText={clientcontact=>this.setState({clientcontact})}
             placeholder="Contact no? :  "
             value={this.state.clientcontact}></TextInput>

<TextInput style={styles.input} autoCapitalize="none"
             onChangeText={clientcity=>this.setState({clientcity})}
             placeholder="City:  "
             value={this.state.clientcity}></TextInput>

<TextInput style={styles.input} autoCapitalize="none"
             onChangeText={clientaddress=>this.setState({clientaddress})}
             placeholder="Address:  "
             value={this.state.clientaddress}></TextInput>

<TextInput style={styles.input} autoCapitalize="none"
             onChangeText={clienttrainername=>this.setState({clienttrainername})}
             placeholder="Name Of Trainer  "
             value={this.state.clienttrainername}></TextInput>

<TextInput style={styles.input} autoCapitalize="none"
             onChangeText={clientservices=>this.setState({clientservices})}
             placeholder="Enter the speciality you want e.g. Yoga, Message etc.  "
             value={this.state.clientservices}></TextInput>

             
         <TouchableOpacity onPress={this.hireit}
     
   style = {{alignItems:'center'}} >
            <Text style = {styles.text}>
               Upload
            </Text>
         </TouchableOpacity>
      
</View>:null
}
            </View>       
            </ScrollView>  
       </ScrollView>
        )
    }
}


const styles=StyleSheet.create({
  container:{
      flex:1
     
    },

    header:{
      fontSize:20,
      marginTop:40,
      fontWeight: 'bold',
      flexDirection:'row',
      justifyContent:'space-between',
      paddingHorizontal:32,
      paddingVertical:4,
      borderBottomWidth:1,
      borderBottomColor:'#D8D9DB'
    },
    header2:{
      fontSize:15,
      marginTop:10,
      flexDirection:'row',
      paddingHorizontal:32,
      paddingVertical:4,
      borderBottomWidth:1,
    },
    bodytext:{
      marginTop:10,
      backgroundColor:'#D9D9D9',
      padding:10,
      fontSize:15,
      borderRadius:10
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
      marginLeft:10,
      marginRight:10,
      marginBottom:10,
      color:"#000000"
  },
  text: {
    alignContent:'center',
    alignItems:'center',
    marginTop:25,
    paddingTop:8,
    paddingBottom:8,
    paddingRight:40,
    paddingLeft:40,
    color:'white',
  borderWidth: 1,
  borderColor: 'white',
  backgroundColor: 'red'
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
