import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity, StyleSheet, Image } from 'react-native';

const UsersList = ({ onSelectUser }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Erro ao buscar os dados');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#007bff" style={styles.loader} />;
  }

  if (error) {
    return <Text style={styles.error}>{error}</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Usuários</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onSelectUser(item.id)}>
            <View style={styles.card}>
              <Image
                source={{ uri: `https://i.pravatar.cc/150?img=${item.id}` }}
                style={styles.avatar}
              />
              <View style={styles.userInfo}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.email}>{item.email}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const UserDetails = ({ userId, onGoBack }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Erro ao buscar os detalhes');
        setLoading(false);
      });
  }, [userId]);

  if (loading) {
    return <ActivityIndicator size="large" color="#007bff" style={styles.loader} />;
  }

  if (error) {
    return <Text style={styles.error}>{error}</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes do Usuário</Text>
      {user && (
        <View style={styles.detailCard}>
          <Image
            source={{ uri: `https://i.pravatar.cc/150?img=${userId}` }}
            style={styles.avatar}
          />
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.email}>{user.email}</Text>
          <Text style={styles.phone}>{user.phone}</Text>
          <Text style={styles.website}>{user.website}</Text>
          <Text style={styles.address}>
            {`Endereço: ${user.address.street}, ${user.address.city}`}
          </Text>
        </View>
      )}
      <TouchableOpacity onPress={onGoBack} style={styles.goBackButton}>
        <Text style={styles.goBackText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

const App = () => {
  const [selectedUserId, setSelectedUserId] = useState(null);

  return (
    <View style={styles.container}>
      {selectedUserId ? (
        <UserDetails userId={selectedUserId} onGoBack={() => setSelectedUserId(null)} />
      ) : (
        <UsersList onSelectUser={(id) => setSelectedUserId(id)} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#4682B4',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
    color: 'red',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#B0C4DE',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  userInfo: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 16,
    color: 'gray',
  },
  detailCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    alignItems: 'center',
  },
  phone: {
    fontSize: 16,
    marginTop: 10,
  },
  website: {
    fontSize: 16,
    marginTop: 10,
  },
  address: {
    fontSize: 16,
    marginTop: 10,
    fontStyle: 'italic',
  },
  goBackButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
    alignItems: 'center',
  },
  goBackText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default App;
