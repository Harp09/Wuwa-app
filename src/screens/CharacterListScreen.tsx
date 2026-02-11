import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Character } from '../types/Character';
import { RootStackParamList } from '../types/navigation';
import { CharacterStorage } from '../utils/storage';
import { initialCharacters } from '../data/initialCharacters';

type CharacterListScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'CharacterList'
>;

interface CharacterListScreenProps {
  navigation: CharacterListScreenNavigationProp;
}

const CharacterListScreen: React.FC<CharacterListScreenProps> = ({ navigation }) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCharacters();
  }, []);

  const loadCharacters = async () => {
    try {
      let chars = await CharacterStorage.getAllCharacters();
      if (chars.length === 0) {
        // Initialize with default characters
        for (const char of initialCharacters) {
          await CharacterStorage.saveCharacter(char);
        }
        chars = initialCharacters;
      }
      setCharacters(chars);
    } catch (error) {
      console.error('Error loading characters:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCharacterPress = (character: Character) => {
    navigation.navigate('CharacterDetail', { character });
  };

  const handleAddCharacter = () => {
    navigation.navigate('AddCharacter', { onAdd: loadCharacters });
  };

  const getRarityStars = (rarity: number) => {
    return '⭐'.repeat(rarity);
  };

  const getElementColor = (element: string) => {
    const colors: { [key: string]: string } = {
      Spectro: '#F5E6D3',
      Aero: '#66CDAA',
      Glacio: '#B0E0E6',
      Fusion: '#FF6347',
      Electro: '#9370DB',
      Havoc: '#8B008B',
    };
    return colors[element] || '#CCCCCC';
  };

  const renderCharacter = ({ item }: { item: Character }) => (
    <TouchableOpacity
      style={[styles.characterCard, { borderLeftColor: getElementColor(item.element) }]}
      onPress={() => handleCharacterPress(item)}
    >
      <View style={styles.characterInfo}>
        <Text style={styles.characterName}>{item.name}</Text>
        <Text style={styles.characterElement}>{item.element} • {item.weapon}</Text>
        <Text style={styles.characterRarity}>{getRarityStars(item.rarity)}</Text>
      </View>
      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#4A90E2" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Personajes de Wuthering Waves</Text>
        <TouchableOpacity style={styles.addButton} onPress={handleAddCharacter}>
          <Text style={styles.addButtonText}>+ Agregar Personaje</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={characters}
        renderItem={renderCharacter}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
  },
  header: {
    padding: 20,
    backgroundColor: '#2a2a2a',
    borderBottomWidth: 1,
    borderBottomColor: '#3a3a3a',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 15,
  },
  addButton: {
    backgroundColor: '#4A90E2',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  list: {
    padding: 15,
  },
  characterCard: {
    backgroundColor: '#2a2a2a',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderLeftWidth: 4,
  },
  characterInfo: {
    flex: 1,
  },
  characterName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 5,
  },
  characterElement: {
    fontSize: 14,
    color: '#CCCCCC',
    marginBottom: 5,
  },
  characterRarity: {
    fontSize: 14,
    color: '#FFD700',
  },
  arrow: {
    fontSize: 30,
    color: '#666666',
    marginLeft: 10,
  },
});

export default CharacterListScreen;
