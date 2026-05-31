import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const DATA_INSPEKSI = [
  {
    id: '1',
    nama: 'Bearing SKF 6205',
    status: 'Belum Dicek',
  },
  {
    id: '2',
    nama: 'V-Belt A-42',
    status: 'Belum Dicek',
  },
  {
    id: '3',
    nama: 'Pompa Air Industri',
    status: 'Belum Dicek',
  },
  {
    id: '4',
    nama: 'Motor Listrik 1 HP',
    status: 'Belum Dicek',
  },
];

function HomeScreen({ navigation, route }) {
  const [items, setItems] = useState(DATA_INSPEKSI);

  useEffect(() => {
    if (route.params?.updatedId) {
      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === route.params.updatedId
            ? {
                ...item,
                status: route.params.updatedStatus,
              }
            : item
        )
      );
    }
  }, [route.params]);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate('Detail', {
          itemData: item,
        })
      }
    >
      <Text
        style={[
          styles.namaBarang,
          item.status === 'Gagal'
            ? styles.gagal
            : item.status === 'Lolos'
            ? styles.lolos
            : null,
        ]}
      >
        {item.nama}
      </Text>

      <Text style={styles.status}>
        Status QC : {item.status}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Sistem Inspeksi Quality Control
      </Text>

      <Text style={styles.subHeader}>
        Monitoring hasil inspeksi komponen gudang
      </Text>

      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f8',
    paddingTop: 20,
  },

  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginHorizontal: 15,
  },

  subHeader: {
    fontSize: 14,
    color: '#7f8c8d',
    marginHorizontal: 15,
    marginBottom: 15,
    marginTop: 5,
  },

  card: {
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginVertical: 8,
    padding: 15,
    borderRadius: 10,
    elevation: 3,
  },

  namaBarang: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  status: {
    marginTop: 5,
    color: '#7f8c8d',
  },

  gagal: {
    color: '#e74c3c',
  },

  lolos: {
    color: '#27ae60',
  },
});

export default HomeScreen;