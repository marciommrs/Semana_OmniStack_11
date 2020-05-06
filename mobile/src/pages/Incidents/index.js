import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

import api from '../../services/api';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Incidents() {
  const [incidents, setIncidents] = useState([]);
  const [totalIncidents, setTotalIncidents] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();
  
  function navigateToDetail(incident) {
    navigation.navigate('Detail', incident);
  }
  
  async function loadIncidentsRefresh() {
    console.log('REFRESHING ITENS')
    return;
  }

  async function loadIncidents() {
    if (loading) {
      return;
    }

    if (totalIncidents > 0 && incidents.length === totalIncidents) {
      return;
    }

    setLoading(true);

    const response = await api.get('incidents', {
      params: {page: currentPage}
    });

    setLoading(false);
    setCurrentPage(currentPage + 1);
    setIncidents([... incidents, ... response.data]);
    setTotalIncidents(response.headers['x-total-count']);
  }

  useEffect(() => {
    loadIncidents();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg}/>
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>{totalIncidents} casos</Text>.
        </Text>
      </View>

      <Text style={styles.title}>Bem vindo!</Text>
      <Text style={styles.description}>Escolha um dos casos e salve o dia.</Text>


      <FlatList 
        data={incidents}
        style={styles.incidentList}
        keyExtractor={incident => String(incident.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.2}
        refreshing={loadIncidentsRefresh}
        renderItem={({ item: incident }) => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>ONG:</Text>
            <Text style={styles.incidentvalue}>{incident.name}</Text>
            
            <Text style={styles.incidentProperty}>CASO:</Text>
            <Text style={styles.incidentvalue}>{incident.title}</Text>

            <Text style={styles.incidentProperty}>VALOR:</Text>
            <Text style={styles.incidentvalue}>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency', 
                currency: 'BRL'
              }).format(incident.value)}
            </Text>

            <TouchableOpacity 
              style={styles.detailsButton} 
              onPress={() => navigateToDetail({incident})}
            >
              <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
              <Feather name='arrow-right' size={16} color='#E02041'/>
            </TouchableOpacity>
          </View>
        )}
      />

    </View> 
  );
}