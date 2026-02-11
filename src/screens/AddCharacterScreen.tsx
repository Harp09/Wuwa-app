import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { Character } from '../types/Character';
import { RootStackParamList } from '../types/navigation';
import { CharacterStorage } from '../utils/storage';

type AddCharacterScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'AddCharacter'
>;

type AddCharacterScreenRouteProp = RouteProp<
  RootStackParamList,
  'AddCharacter'
>;

interface AddCharacterScreenProps {
  navigation: AddCharacterScreenNavigationProp;
  route: AddCharacterScreenRouteProp;
}

const AddCharacterScreen: React.FC<AddCharacterScreenProps> = ({ navigation, route }) => {
  const [name, setName] = useState('');
  const [element, setElement] = useState('Spectro');
  const [weapon, setWeapon] = useState('Sword');
  const [rarity, setRarity] = useState('5');
  const [description, setDescription] = useState('');

  const elements = ['Spectro', 'Aero', 'Glacio', 'Fusion', 'Electro', 'Havoc'];
  const weaponTypes = ['Sword', 'Broadblade', 'Pistols', 'Gauntlets', 'Rectifier'];

  const handleSave = async () => {
    if (!name.trim()) {
      Alert.alert('Error', 'Por favor ingresa el nombre del personaje');
      return;
    }

    const newCharacter: Character = {
      id: Date.now().toString(),
      name: name.trim(),
      element,
      weapon,
      rarity: parseInt(rarity, 10),
      description: description.trim(),
      avatar: '',
      wallpapers: [],
      builds: [],
      weapons: [],
      echoes: [],
      constellations: [],
    };

    try {
      await CharacterStorage.saveCharacter(newCharacter);
      Alert.alert('Éxito', 'Personaje agregado correctamente', [
        {
          text: 'OK',
          onPress: () => {
            if (route.params?.onAdd) {
              route.params.onAdd();
            }
            navigation.goBack();
          },
        },
      ]);
    } catch (error) {
      Alert.alert('Error', 'No se pudo guardar el personaje');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>Agregar Nuevo Personaje</Text>

        <Text style={styles.label}>Nombre *</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Nombre del personaje"
          placeholderTextColor="#666"
        />

        <Text style={styles.label}>Elemento</Text>
        <View style={styles.buttonGroup}>
          {elements.map((el) => (
            <TouchableOpacity
              key={el}
              style={[styles.button, element === el && styles.buttonActive]}
              onPress={() => setElement(el)}
            >
              <Text style={[styles.buttonText, element === el && styles.buttonTextActive]}>
                {el}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.label}>Arma</Text>
        <View style={styles.buttonGroup}>
          {weaponTypes.map((wep) => (
            <TouchableOpacity
              key={wep}
              style={[styles.button, weapon === wep && styles.buttonActive]}
              onPress={() => setWeapon(wep)}
            >
              <Text style={[styles.buttonText, weapon === wep && styles.buttonTextActive]}>
                {wep}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.label}>Rareza</Text>
        <View style={styles.rarityGroup}>
          {['4', '5'].map((r) => (
            <TouchableOpacity
              key={r}
              style={[styles.rarityButton, rarity === r && styles.buttonActive]}
              onPress={() => setRarity(r)}
            >
              <Text style={[styles.buttonText, rarity === r && styles.buttonTextActive]}>
                {'⭐'.repeat(parseInt(r, 10))}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.label}>Descripción</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          value={description}
          onChangeText={setDescription}
          placeholder="Descripción del personaje"
          placeholderTextColor="#666"
          multiline
          numberOfLines={4}
        />

        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Guardar Personaje</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.cancelButtonText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  form: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 8,
    marginTop: 15,
  },
  input: {
    backgroundColor: '#2a2a2a',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#3a3a3a',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  buttonGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
  },
  button: {
    backgroundColor: '#2a2a2a',
    borderRadius: 8,
    padding: 10,
    marginRight: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#3a3a3a',
  },
  buttonActive: {
    backgroundColor: '#4A90E2',
    borderColor: '#4A90E2',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  buttonTextActive: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  rarityGroup: {
    flexDirection: 'row',
    marginTop: 5,
  },
  rarityButton: {
    backgroundColor: '#2a2a2a',
    borderRadius: 8,
    padding: 12,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#3a3a3a',
    minWidth: 80,
    alignItems: 'center',
  },
  saveButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    marginTop: 30,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  cancelButton: {
    backgroundColor: '#555555',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  cancelButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default AddCharacterScreen;
