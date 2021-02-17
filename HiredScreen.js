import React, { Component } from 'react';
import { View, Text,StyleSheet, TouchableOpacity, LayoutAnimation, FlatList, Image } from 'react-native';
import Fire from '../Fire'
import { Ionicons } from '@expo/vector-icons';
import moment from 'moment'
import firebase from 'firebase/app'


export default class HiredScreen extends Component {

  
  static navigationOptions = ({ navigation }) => {
    return {
       header: () => null
    } 
}

    get firestore(){
        return firebase.firestore()
    }          
    state={
        user:{}
      }

constructor(props){
  super(props)

  this.ref =  Fire.shared.firestore.collection('hires').where('uid', '==', Fire.shared.uid)
  this.useref=
  this.state={
    dataSource : []
  }
}
componentDidMount(){
  this.unsubscribe = this.ref.onSnapshot(this.feedPosts);
}

feedPosts = (postSnapShot) =>{
  const post = [];
  postSnapShot.forEach((doc) => {
  const {uid,text,gender,age,email,contact,city,address,cnic,experience,account,clienttrainername,fullname,timestamp,image,clientservices} = doc.data();
  
  let avatar="dwe"
  let name='name'
  const data=Fire.shared.firestore
  .collection('users')
  .doc(uid)
  .get()
  .then(doc=>{
    post.push({
      avatar:doc.data().avatar
      ,name:doc.data().name,
      uid,
      text,
      fullname,
      gender,age,email,contact,city,address, cnic,experience,account,
      timestamp,
      image,          
      clientservices,
      clienttrainername

    })
    this.setState({
      dataSource : post,
    });
  })
 
  
 
  
  
  });
}

onpressPost = post => {
  this.props.navigation.navigate('Detail', { post });
};

renderPost=post=>{
  return(
    <View    style={styles.feedItem}>
      <TouchableOpacity   style={styles.opacitystyle}>
      <View style={{flex:1}}>
      <View style={{flexDirection:'row',justifyContent:'space-between'
    ,alignItems:'center'}}>
      <View>
      <Text style={styles.timestamp}>Your Trainer Is  </Text>


  <Text style={styles.name}>{post.clienttrainername}</Text>

      </View>
      </View>
      <Text style={styles.timestamp}>And you are Getting Services</Text>



  <Text style={styles.name}>{post.clientservices}</Text>
  <Text style={styles.timestamp}>Admin contact: 03xx xxxxxxx</Text>


  <Text style={styles.timestamp}>Make sure you have make payment to admin, contact admin or see Detail in about Screen</Text>


      </View>
      </TouchableOpacity>
    </View>
  )

}

  render() {
    LayoutAnimation.easeInEaseOut()
    return (
      <View style={styles.container}>
       <View style={styles.header}>
         <Text style={styles.headerTitle}>
            Trainer list
         </Text>

       </View>
       <FlatList style={styles.feed}
       data={this.state.dataSource}
       renderItem={({item})=>this.renderPost(item)}
       keyExtractor={item=>item.uid}
       showsVerticalScrollIndicator={false}
       ListEmptyComponent={ <Text style={styles.emptylist}>You didn't hire any trainer</Text>  }

  
       />
      </View>
    );
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#EFECF4'
  },
  header:{
    paddingTop:48,
    paddingBottom:16,
    backgroundColor:'#FFF',
    alignItems:'center',
    borderBottomWidth:1,
    justifyContent:'center',
    borderBottomColor:'#EBECF4',
    shadowColor:'#454D65',
    shadowOffset:{height:5},
    shadowRadius:15,
    shadowOpacity:0.2,
    zIndex:10
  },
  headerTitle:{
    fontSize:20,
    fontWeight:'500'
  },
  feed:{
    marginHorizontal:16
  },
  feedItem:{
    backgroundColor:'#FFF',
    borderRadius:30,
    padding:15,
    flexDirection:'row',
    marginVertical:8
  },
  opacitystyle:{
    flex:1
  
  },
  avatar:{
    width:36,
    height:36,
    borderRadius:18,
    marginRight:16
  },
  name:{
    fontSize:15,
    fontWeight:'500',
    color:'#454D65',
    fontWeight:'bold'
  },
  timestamp:{
    fontSize:15,
    fontWeight:'500',
    color:'#454D65',
  },
  emptylist:{
    fontSize:15,
    fontWeight:'500',
    color:'#454D65',
    alignSelf:'center',
    marginTop:200

  },
  post:{
    marginTop:16,
    fontSize:14,
    color:'#838899'
  },
  postImage:{
    width:undefined,
    height:150,
    borderRadius:5,
    marginVertical:16
  }

})
