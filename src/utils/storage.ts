import AsyncStorage from '@react-native-async-storage/async-storage';
import { Character } from '../types/Character';

const STORAGE_KEY = '@wuwa_characters';

export const CharacterStorage = {
  async getAllCharacters(): Promise<Character[]> {
    try {
      const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
      return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (e) {
      console.error('Error reading characters:', e);
      return [];
    }
  },

  async saveCharacter(character: Character): Promise<void> {
    try {
      const characters = await this.getAllCharacters();
      const existingIndex = characters.findIndex(c => c.id === character.id);
      
      if (existingIndex >= 0) {
        characters[existingIndex] = character;
      } else {
        characters.push(character);
      }
      
      const jsonValue = JSON.stringify(characters);
      await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
    } catch (e) {
      console.error('Error saving character:', e);
      throw e;
    }
  },

  async deleteCharacter(characterId: string): Promise<void> {
    try {
      const characters = await this.getAllCharacters();
      const filtered = characters.filter(c => c.id !== characterId);
      const jsonValue = JSON.stringify(filtered);
      await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
    } catch (e) {
      console.error('Error deleting character:', e);
      throw e;
    }
  },

  async getCharacter(characterId: string): Promise<Character | null> {
    try {
      const characters = await this.getAllCharacters();
      return characters.find(c => c.id === characterId) || null;
    } catch (e) {
      console.error('Error getting character:', e);
      return null;
    }
  },
};
