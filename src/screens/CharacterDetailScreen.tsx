import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Character } from '../types/Character';

interface CharacterDetailScreenProps {
  route: any;
  navigation: any;
}

type TabType = 'builds' | 'weapons' | 'echoes' | 'constellations' | 'wallpapers';

const CharacterDetailScreen: React.FC<CharacterDetailScreenProps> = ({ route, navigation }) => {
  const { character } = route.params as { character: Character };
  const [activeTab, setActiveTab] = useState<TabType>('builds');

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

  const renderBuilds = () => (
    <View style={styles.tabContent}>
      {character.builds.map((build) => (
        <View key={build.id} style={styles.buildCard}>
          <Text style={styles.buildName}>{build.name}</Text>
          <Text style={styles.buildDescription}>{build.description}</Text>
          
          <Text style={styles.sectionTitle}>Armas Recomendadas:</Text>
          {build.recommendedWeapons.map((weapon, index) => (
            <Text key={index} style={styles.listItem}>• {weapon}</Text>
          ))}
          
          <Text style={styles.sectionTitle}>Ecos Recomendados:</Text>
          {build.recommendedEchoes.map((echo, index) => (
            <Text key={index} style={styles.listItem}>• {echo}</Text>
          ))}
          
          <Text style={styles.sectionTitle}>Stats Principales:</Text>
          {build.mainStats.map((stat, index) => (
            <Text key={index} style={styles.listItem}>
              {stat.slot}: {stat.stat}
            </Text>
          ))}
          
          <Text style={styles.sectionTitle}>Sub-Stats:</Text>
          <Text style={styles.listItem}>{build.subStats.join(', ')}</Text>
        </View>
      ))}
    </View>
  );

  const renderWeapons = () => (
    <View style={styles.tabContent}>
      {character.weapons.map((weapon) => (
        <View key={weapon.id} style={styles.itemCard}>
          <View style={styles.itemHeader}>
            <Text style={styles.itemName}>{weapon.name}</Text>
            <Text style={styles.itemRarity}>{'⭐'.repeat(weapon.rarity)}</Text>
          </View>
          <Text style={styles.itemType}>{weapon.type}</Text>
          <Text style={styles.itemDescription}>{weapon.description}</Text>
          <View style={styles.statsRow}>
            <Text style={styles.statText}>ATK Base: {weapon.baseAttack}</Text>
          </View>
          {weapon.subStat && (
            <View style={styles.statsRow}>
              <Text style={styles.statText}>
                {weapon.subStat}: {weapon.subStatValue}%
              </Text>
            </View>
          )}
        </View>
      ))}
    </View>
  );

  const renderEchoes = () => (
    <View style={styles.tabContent}>
      {character.echoes.map((echo) => (
        <View key={echo.id} style={styles.itemCard}>
          <View style={styles.itemHeader}>
            <Text style={styles.itemName}>{echo.name}</Text>
            <Text style={styles.itemRarity}>{'⭐'.repeat(echo.rarity)}</Text>
          </View>
          <Text style={styles.itemType}>Costo: {echo.cost}</Text>
          <Text style={styles.itemDescription}>{echo.skill}</Text>
          {echo.sonataEffect && (
            <Text style={styles.sonataEffect}>Efecto Sonata: {echo.sonataEffect}</Text>
          )}
        </View>
      ))}
    </View>
  );

  const renderConstellations = () => (
    <View style={styles.tabContent}>
      {character.constellations.map((const_item) => (
        <View key={const_item.id} style={styles.constCard}>
          <View style={styles.constHeader}>
            <Text style={styles.constLevel}>S{const_item.level}</Text>
            <Text style={styles.constName}>{const_item.name}</Text>
          </View>
          <Text style={styles.constDescription}>{const_item.description}</Text>
        </View>
      ))}
    </View>
  );

  const renderWallpapers = () => (
    <View style={styles.tabContent}>
      <Text style={styles.emptyMessage}>
        {character.wallpapers.length === 0
          ? 'No hay wallpapers disponibles'
          : 'Wallpapers disponibles'}
      </Text>
      {character.wallpapers.map((wallpaper, index) => (
        <Text key={index} style={styles.listItem}>{wallpaper}</Text>
      ))}
    </View>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'builds':
        return renderBuilds();
      case 'weapons':
        return renderWeapons();
      case 'echoes':
        return renderEchoes();
      case 'constellations':
        return renderConstellations();
      case 'wallpapers':
        return renderWallpapers();
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={[styles.characterHeader, { backgroundColor: getElementColor(character.element) }]}>
        <Text style={styles.characterName}>{character.name}</Text>
        <Text style={styles.characterInfo}>
          {character.element} • {character.weapon} • {'⭐'.repeat(character.rarity)}
        </Text>
        <Text style={styles.characterDescription}>{character.description}</Text>
      </View>

      <View style={styles.tabBar}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'builds' && styles.activeTab]}
          onPress={() => setActiveTab('builds')}
        >
          <Text style={[styles.tabText, activeTab === 'builds' && styles.activeTabText]}>
            Builds
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'weapons' && styles.activeTab]}
          onPress={() => setActiveTab('weapons')}
        >
          <Text style={[styles.tabText, activeTab === 'weapons' && styles.activeTabText]}>
            Armas
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'echoes' && styles.activeTab]}
          onPress={() => setActiveTab('echoes')}
        >
          <Text style={[styles.tabText, activeTab === 'echoes' && styles.activeTabText]}>
            Ecos
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'constellations' && styles.activeTab]}
          onPress={() => setActiveTab('constellations')}
        >
          <Text style={[styles.tabText, activeTab === 'constellations' && styles.activeTabText]}>
            Secuencias
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'wallpapers' && styles.activeTab]}
          onPress={() => setActiveTab('wallpapers')}
        >
          <Text style={[styles.tabText, activeTab === 'wallpapers' && styles.activeTabText]}>
            Fondos
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        {renderTabContent()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  characterHeader: {
    padding: 20,
    paddingTop: 40,
  },
  characterName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 8,
  },
  characterInfo: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 10,
  },
  characterDescription: {
    fontSize: 14,
    color: '#444444',
    lineHeight: 20,
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#2a2a2a',
    borderBottomWidth: 1,
    borderBottomColor: '#3a3a3a',
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: '#4A90E2',
  },
  tabText: {
    fontSize: 12,
    color: '#888888',
    fontWeight: '600',
  },
  activeTabText: {
    color: '#4A90E2',
  },
  content: {
    flex: 1,
  },
  tabContent: {
    padding: 15,
  },
  buildCard: {
    backgroundColor: '#2a2a2a',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  buildName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  buildDescription: {
    fontSize: 14,
    color: '#CCCCCC',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4A90E2',
    marginTop: 10,
    marginBottom: 8,
  },
  listItem: {
    fontSize: 14,
    color: '#CCCCCC',
    marginBottom: 5,
    paddingLeft: 10,
  },
  itemCard: {
    backgroundColor: '#2a2a2a',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  itemRarity: {
    fontSize: 14,
    color: '#FFD700',
  },
  itemType: {
    fontSize: 14,
    color: '#888888',
    marginBottom: 8,
  },
  itemDescription: {
    fontSize: 14,
    color: '#CCCCCC',
    marginBottom: 10,
  },
  statsRow: {
    marginTop: 5,
  },
  statText: {
    fontSize: 14,
    color: '#4A90E2',
  },
  sonataEffect: {
    fontSize: 14,
    color: '#9370DB',
    marginTop: 5,
  },
  constCard: {
    backgroundColor: '#2a2a2a',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  constHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  constLevel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4A90E2',
    marginRight: 10,
    width: 30,
  },
  constName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    flex: 1,
  },
  constDescription: {
    fontSize: 14,
    color: '#CCCCCC',
    paddingLeft: 40,
  },
  emptyMessage: {
    fontSize: 16,
    color: '#888888',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default CharacterDetailScreen;
