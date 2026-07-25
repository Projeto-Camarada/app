import { View,Text,TouchableOpacity,StyleSheet } from "react-native";

export default function AvailabilityCard(){

return(

<View style={styles.card}>

<Text style={styles.title}>
Hoje existem
</Text>

<Text style={styles.jobs}>
12 serviços próximos
</Text>

<TouchableOpacity style={styles.button}>
<Text style={styles.buttonText}>
Estou disponível
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
borderRadius:15,
marginBottom:15
},

title:{
fontSize:18
},

jobs:{
fontSize:26,
fontWeight:"bold",
marginVertical:15
},

button:{
backgroundColor:"#2E7D32",
padding:15,
borderRadius:10
},

buttonText:{
color:"#FFF",
fontWeight:"bold",
textAlign:"center"
}

})