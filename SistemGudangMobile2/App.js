import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  Alert,
  TouchableOpacity,
  Image,
} from "react-native";

export default function App() {

  const mesinData = [
    {
      nama: "Mesin Filling AMDK",
      tahun: "2022",
      status: "AKTIF",
      warna: "#27ae60",
      gambar:
        "https://cdn-icons-png.flaticon.com/512/4341/4341134.png",
    },

    {
      nama: "Mesin Conveyor",
      tahun: "2020",
      status: "OPERASI",
      warna: "#3498db",
      gambar:
        "https://cdn-icons-png.flaticon.com/512/1995/1995470.png",
    },

    {
      nama: "Mesin Labeling",
      tahun: "2021",
      status: "SIAP PRODUKSI",
      warna: "#8e44ad",
      gambar:
        "https://cdn-icons-png.flaticon.com/512/3082/3082037.png",
    },

    {
      nama: "Mesin Packaging",
      tahun: "2023",
      status: "AKTIF",
      warna: "#27ae60",
      gambar:
        "https://cdn-icons-png.flaticon.com/512/869/869636.png",
    },

    {
      nama: "Kompresor Udara",
      tahun: "2019",
      status: "MAINTENANCE",
      warna: "#f39c12",
      gambar:
        "https://cdn-icons-png.flaticon.com/512/2942/2942813.png",
    },
  ];

  const detailGudangA = () => {
    Alert.alert(
      "Gudang A",
      "Kapasitas 85%\nKondisi aman dan siap menerima material baru."
    );
  };

  const detailGudangB = () => {
    Alert.alert(
      "Gudang B",
      "Kapasitas 95%\nSegera lakukan pengurangan material."
    );
  };

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >

      <StatusBar
        backgroundColor="#2c3e50"
        barStyle="light-content"
      />

      {/* HEADER */}

      <View style={styles.header}>

        <Image
          source={require("./pngwing.com (2).png")}
          style={styles.logo}
        />

        <View>

          <Text style={styles.title}>
            PT. Manufaktur Maju
          </Text>

          <Text style={styles.subtitle}>
            Monitoring Gudang & Mesin
          </Text>

        </View>

      </View>

      <Text style={styles.welcome}>
        Selamat Datang, Operator
      </Text>


      {/* GUDANG */}

      <TouchableOpacity
        style={styles.card}
        onPress={detailGudangA}
      >

        <View style={styles.row}>

          <View>

            <Text style={styles.cardTitle}>
              Gudang A
            </Text>

            <Text style={styles.cardInfo}>
              Kapasitas 85%
            </Text>

          </View>

          <View
            style={[
              styles.badge,
              { backgroundColor:"#27ae60" }
            ]}
          >

            <Text style={styles.badgeText}>
              TERSEDIA
            </Text>

          </View>

        </View>

      </TouchableOpacity>


      <TouchableOpacity
        style={[
          styles.card,
          styles.warningCard,
        ]}
        onPress={detailGudangB}
      >

        <View style={styles.row}>

          <View>

            <Text style={styles.cardTitle}>
              Gudang B
            </Text>

            <Text style={styles.cardInfo}>
              Kapasitas 95%
            </Text>

          </View>

          <View
            style={[
              styles.badge,
              { backgroundColor:"#e74c3c" }
            ]}
          >

            <Text style={styles.badgeText}>
              PENUH
            </Text>

          </View>

        </View>

      </TouchableOpacity>


      {/* MESIN */}

      <Text style={styles.section}>
        Profil Mesin Produksi
      </Text>

      {mesinData.map((mesin,index)=>(

        <View
          key={index}
          style={styles.machineCard}
        >

          <Image
            source={{
              uri:mesin.gambar
            }}
            style={styles.machineImage}
          />

          <View style={styles.machineInfo}>

            <Text style={styles.machineName}>
              {mesin.nama}
            </Text>

            <Text style={styles.machineText}>
              Tahun : {mesin.tahun}
            </Text>

            <View
              style={[
                styles.statusBox,
                {
                  backgroundColor:
                  mesin.warna
                }
              ]}
            >

              <Text style={styles.statusText}>
                {mesin.status}
              </Text>

            </View>

          </View>

        </View>

      ))}

    </ScrollView>
  );
}

const styles=StyleSheet.create({

container:{
flex:1,
backgroundColor:"#eef2f7",
paddingTop:45,
paddingHorizontal:18,
},

header:{
backgroundColor:"#2c3e50",
padding:18,
borderRadius:18,
flexDirection:"row",
alignItems:"center",
marginBottom:25,
elevation:6,
},

logo:{
width:60,
height:60,
marginRight:15,
resizeMode:"contain",
},

title:{
fontSize:20,
fontWeight:"700",
color:"white",
},

subtitle:{
color:"#dfe6e9",
marginTop:3,
},

welcome:{
fontSize:18,
fontWeight:"600",
marginBottom:18,
color:"#2c3e50",
},

card:{
backgroundColor:"white",
padding:18,
borderRadius:16,
marginBottom:15,
elevation:3,
},

warningCard:{
borderLeftWidth:5,
borderLeftColor:"#e74c3c",
},

row:{
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center",
},

cardTitle:{
fontWeight:"700",
fontSize:17,
color:"#2c3e50",
},

cardInfo:{
marginTop:4,
color:"#7f8c8d",
},

badge:{
paddingHorizontal:12,
paddingVertical:7,
borderRadius:20,
},

badgeText:{
color:"white",
fontWeight:"700",
fontSize:11,
},

section:{
fontSize:20,
fontWeight:"700",
marginVertical:18,
color:"#2c3e50",
},

machineCard:{
backgroundColor:"white",
padding:16,
borderRadius:16,
flexDirection:"row",
alignItems:"center",
marginBottom:14,
elevation:3,
},

machineImage:{
width:75,
height:75,
marginRight:15,
},

machineInfo:{
flex:1,
},

machineName:{
fontWeight:"700",
fontSize:16,
color:"#2c3e50",
},

machineText:{
marginTop:5,
color:"#7f8c8d",
},

statusBox:{
paddingVertical:5,
paddingHorizontal:10,
borderRadius:20,
marginTop:8,
alignSelf:"flex-start",
},

statusText:{
color:"white",
fontWeight:"700",
fontSize:11,
},

});