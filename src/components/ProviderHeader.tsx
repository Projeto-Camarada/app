import { View, Text, StyleSheet } from "react-native";

export default function ProviderHeader(){

    return(
        <View style={styles.container}>

            <Text style={styles.goodMorning}>
                Bom dia 👋
            </Text>

            <Text style={styles.name}>
                Thiago
            </Text>

            <Text style={styles.profession}>
                Pedreiro • ⭐ 4.9
            </Text>

            <Text style={styles.location}>
                📍 São Miguel Paulista
            </Text>

        </View>
    )

}

const styles = StyleSheet.create({

container:{
padding:20,
backgroundColor:"#FFF",
marginBottom:15
},

goodMorning:{
fontSize:18,
color:"#555"
},

name:{
fontSize:30,
fontWeight:"bold",
marginTop:5
},

profession:{
marginTop:10,
fontSize:16
},

location:{
marginTop:6,
fontSize:15,
color:"#666"
}

})