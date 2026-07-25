import { View,Text,StyleSheet } from "react-native";

export default function EarningsCard(){

return(

<View style={styles.card}>

<Text style={styles.month}>
Este mês
</Text>

<Text style={styles.money}>
R$ 4.250
</Text>

<Text style={styles.services}>
8 serviços concluídos
</Text>

</View>

)

}

const styles=StyleSheet.create({

card:{
backgroundColor:"#FFF",
marginHorizontal:15,
padding:20,
borderRadius:15,
marginBottom:20
},

month:{
fontSize:16,
color:"#666"
},

money:{
fontSize:34,
fontWeight:"bold",
marginVertical:10,
color:"#2E7D32"
},

services:{
fontSize:16
}

})