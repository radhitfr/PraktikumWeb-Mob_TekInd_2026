import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
} from 'react-native';

function TambahScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Form Tambah Barang</Text>

      <TextInput
        style={styles.input}
        placeholder="Nama Barang"
      />

      <TextInput
        style={styles.input}
        placeholder="Jumlah Stok"
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Lokasi Penyimpanan"
      />

      <Button
        title="Simpan"
        onPress={() =>
          alert('Data berhasil disimpan!')
        }
      />

      <View style={{ marginTop: 10 }}>
        <Button
          title="Kembali"
          onPress={() => navigation.goBack()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
  },
});

export default TambahScreen;