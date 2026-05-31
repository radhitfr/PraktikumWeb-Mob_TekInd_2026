import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

function DetailScreen({ route, navigation }) {
  const { itemData } = route.params;

  const [status, setStatus] = useState(itemData.status);

  const gambarItem = {
    'Bearing SKF 6205': require('../assets/bearing.jpg'),
    'V-Belt A-42': require('../assets/vbelt.jpg'),
    'Pompa Air Industri': require('../assets/pompa.jpg'),
    'Motor Listrik 1 HP': require('../assets/motor.jpg'),
  };

  const standarQC = {
    'Bearing SKF 6205':
      '• Tidak terdapat karat pada permukaan\n• Putaran bearing halus\n• Tidak ada kerusakan fisik',

    'V-Belt A-42':
      '• Tidak terdapat retakan\n• Dimensi sesuai spesifikasi\n• Permukaan masih elastis',

    'Pompa Air Industri':
      '• Tidak terdapat kebocoran\n• Impeller berputar normal\n• Tidak ada suara abnormal',

    'Motor Listrik 1 HP':
      '• Kabel dalam kondisi baik\n• Motor berfungsi normal\n• Tidak terjadi panas berlebih',
  };

  const simpanHasil = () => {
    navigation.navigate({
      name: 'Home',
      params: {
        updatedId: itemData.id,
        updatedStatus: status,
      },
      merge: true,
    });

    Alert.alert(
      'Inspeksi Berhasil',
      `Status inspeksi: ${status}`
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={gambarItem[itemData.nama]}
          style={styles.image}
        />

        <Text style={styles.label}>
          Nama Komponen
        </Text>

        <Text style={styles.value}>
          {itemData.nama}
        </Text>

        <Text style={styles.label}>
          Standar Kualitas
        </Text>

        <Text style={styles.standar}>
          {standarQC[itemData.nama]}
        </Text>
      </View>

      <Text style={styles.labelStatus}>
        Pilih Hasil Inspeksi
      </Text>

      <View style={styles.statusContainer}>
        <TouchableOpacity
          style={[
            styles.btnStatus,
            status === 'Lolos' &&
              styles.btnLolos,
          ]}
          onPress={() => setStatus('Lolos')}
        >
          <Text
            style={[
              styles.btnText,
              status === 'Lolos' &&
                styles.textPutih,
            ]}
          >
            LOLOS
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.btnStatus,
            status === 'Gagal' &&
              styles.btnGagal,
          ]}
          onPress={() => setStatus('Gagal')}
        >
          <Text
            style={[
              styles.btnText,
              status === 'Gagal' &&
                styles.textPutih,
            ]}
          >
            GAGAL
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.btnSimpan}
        onPress={simpanHasil}
      >
        <Text style={styles.btnSimpanText}>
          Simpan Hasil Inspeksi
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f8',
    padding: 20,
  },

  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    elevation: 3,
    marginBottom: 20,
  },

  image: {
    width: '100%',
    height: 220,
    borderRadius: 10,
    marginBottom: 15,
  },

  label: {
    fontSize: 13,
    color: '#7f8c8d',
    fontWeight: 'bold',
    marginTop: 10,
  },

  value: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
  },

  standar: {
    marginTop: 5,
    lineHeight: 22,
    color: '#34495e',
  },

  labelStatus: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  statusContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },

  btnStatus: {
    flex: 1,
    padding: 15,
    backgroundColor: '#dfe6e9',
    alignItems: 'center',
    borderRadius: 8,
    marginHorizontal: 5,
  },

  btnLolos: {
    backgroundColor: '#27ae60',
  },

  btnGagal: {
    backgroundColor: '#e74c3c',
  },

  btnText: {
    fontWeight: 'bold',
  },

  textPutih: {
    color: '#fff',
  },

  btnSimpan: {
    backgroundColor: '#2980b9',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },

  btnSimpanText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default DetailScreen;