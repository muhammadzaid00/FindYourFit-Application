import React, { Component } from 'react';
import { View, Text,StyleSheet,Image,ImageBackground,ScrollView } from 'react-native';
import bdImage from '../assets/images/about.png'

export default class MessageScreen extends Component {


  render() {
    return (
    
      <ScrollView >
      <ScrollView nestedScrollEnabled={true}>
      <View style={styles.container}>
        <Text style = {styles.heading1}>
          About us
        </Text>
        <Image source = {bdImage} style = {styles.image} ></Image>

        <Text style = {styles.heading2}>
        WHO WE ARE?
                  
          </Text>
          <Text style = {styles.text}>
          FIND YOUR FIT is a platform for fitness seekers as well as trainers.
          It covers all those major services that a normal person needs to
          remain fit in daily life. Fitness hunters can hire personal trainer
          and will pay for taking a particular service for some fixed duration
          and trainers will get paid for their services.
                  
          </Text>
          <Text style = {styles.heading2}>
          WHAT WE ARE DOING?                  
          </Text>

          <Text style = {styles.heading3}>
          Providing Personal Trainers
                  
          </Text>
          <Text style = {styles.text}>
          Fitness hunters can use our services at homes according to their 
suitable time slots.Furthermore, individual peoples or group of people can    hire an individual trainer. Individual training is very effective because personal trainer can focus on one person   more closely.
          </Text>

          <Text style = {styles.heading3}>
          Providing Jobs to Trainers                  
          </Text>

          <Text style = {styles.text}>
          We are providing a good job for the unemployed trainers and assigning them as supervisors
        to the fitness seekers. Trainers will perform services like yoga classes, massage, healthy 
        exercises and other physical activities which are very important for a healthy body. 

          </Text>

          <Text style = {styles.heading3}>
          Steps For Trainer Registration                
          </Text>
          <Text style = {styles.text}>
          Go to Home Page and click on the Plus button. Fill the registration form and submit. Your profile will be created and shown in page.
          </Text>

          <Text style = {styles.heading3}>
          Steps For Hiring personal trainer.               
          </Text>
          <Text style = {styles.text}>
          Go to Home Page and chose any profile. Click on the button to see his or her profile details. Now click on hire trainer button and fill form. Your information will be shared with trainer and admin will give you contact number of trainer after submitting your fee. You can see your fees details in your profile section.          </Text>
           
          <Text style = {styles.heading3}>
          FEE STRUCTURE:               
          </Text>
          <Text style = {styles.text}>
          Seeker will be charged 3000 rupees monthly for every service.
                    </Text>
          <Text style = {styles.heading3}>
          CONTACT US:               
          </Text>
          <Text style = {styles.text}>
          "In case of any query directly contact to the admin:
       
          </Text>
          <Text style = {styles.text}>
          Phone number : xxxxxxxxxxx
          </Text>
          <Text style = {styles.text}>
          Email: xxxxxxxxxxxxxxxxxx
          </Text>
      </View>
      
      </ScrollView>  
       </ScrollView>
    );
  }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'

      
      },
      image:{
        flex:1,
        height:250,
        width:'100%',
    
      
      },
      heading1:{
        flex:1,
        fontSize:35,
        fontWeight:'bold',
        marginTop:20,
        alignItems:'center'
      
      },
      heading2:{
        flex:1,
        fontSize:25,
        fontWeight:'bold',
        marginTop:20,
        marginRight:20,
        marginLeft:20,
      
      },
      heading3:{
        flex:1,
        fontSize:20,
        fontWeight:'bold',
        marginTop:20,
        marginRight:20,
        marginLeft:20,
      
      },
      text:{
        flex:1,
        fontSize:15,
        marginTop:10,
        marginRight:20,
        marginLeft:20,
        
      
      }
})
