import { View,Text,TouchableOpacity,StyleSheet } from "react-native";

interface Props{

title:string;
client:string;
distance:string;
price:string;
description:string;

}

export default function ServiceCard(props:Props){

return(

<View style={styles.card}>

<Text style={styles.title}>
{props.title}
</Text>

<Text style={styles.client}>
Cliente: {props.client}
</Text>

<Text style={styles.distance}>
📍 {props.distance}
</Text>

<Text style={styles.description}>
{props.description}
</Text>

<Text style={styles.price}>
{props.price}
</Text>

<TouchableOpacity style={styles.button}>

<Text style={styles.buttonText}>
Ver detalhes
</Text>

</TouchableOpacity>

</View>

)

}

const styles=StyleSheet.create({

card:{
backgroundColor:"#FFF",
padding:20,
marginHorizontal:15,
marginBottom:15,
borderRadius:15
},

title:{
fontSize:22,
fontWeight:"bold"
},

client:{
marginTop:8
},

distance:{
marginTop:6,
color:"#666"
},

description:{
marginTop:12,
fontSize:16
},

price:{
marginTop:15,
fontWeight:"bold",
fontSize:24,
color:"#2E7D32"
},

button:{
marginTop:20,
backgroundColor:"#1565C0",
padding:14,
borderRadius:10
},

buttonText:{
textAlign:"center",
color:"#FFF",
fontWeight:"bold"
}

})