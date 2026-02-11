# Cómo Agregar Más Personajes

Este archivo te muestra cómo agregar más personajes predeterminados a la aplicación.

## Método 1: Agregar desde la App (Recomendado)

La forma más fácil es usar la función "Agregar Personaje" en la app:

1. Abre la app
2. Toca "Agregar Personaje"
3. Completa el formulario
4. Guarda el personaje

Los personajes se guardarán automáticamente en el almacenamiento local.

## Método 2: Editar el Código (Para Personajes Predeterminados)

Si quieres agregar personajes que aparezcan automáticamente para todos los usuarios:

### Paso 1: Abre el archivo de personajes

```bash
src/data/initialCharacters.ts
```

### Paso 2: Agrega un nuevo personaje

Copia este template y personalízalo:

```typescript
{
  id: '3', // ID único (incrementa el número)
  name: 'Nombre del Personaje',
  element: 'Electro', // Spectro, Aero, Glacio, Fusion, Electro, Havoc
  weapon: 'Pistols', // Sword, Broadblade, Pistols, Gauntlets, Rectifier
  rarity: 5, // 4 o 5
  description: 'Descripción del personaje',
  avatar: '',
  wallpapers: [],
  
  // Builds
  builds: [
    {
      id: 'build_unique_id',
      name: 'DPS Principal',
      description: 'Build enfocado en daño',
      recommendedWeapons: ['Nombre Arma 1', 'Nombre Arma 2'],
      recommendedEchoes: ['Nombre Echo 1', 'Nombre Echo 2'],
      mainStats: [
        { slot: 'Cost 4', stat: 'Crit Rate / Crit DMG' },
        { slot: 'Cost 3', stat: 'Elemento DMG%' },
        { slot: 'Cost 3', stat: 'Elemento DMG%' },
        { slot: 'Cost 1', stat: 'ATK%' },
        { slot: 'Cost 1', stat: 'ATK%' },
      ],
      subStats: ['Crit Rate', 'Crit DMG', 'ATK%', 'Energy Regen'],
    },
  ],
  
  // Armas
  weapons: [
    {
      id: 'weapon_unique_id',
      name: 'Nombre del Arma',
      type: 'Pistols',
      rarity: 5,
      description: 'Descripción del arma',
      baseAttack: 587,
      subStat: 'Crit Rate',
      subStatValue: 25.1,
    },
  ],
  
  // Ecos
  echoes: [
    {
      id: 'echo_unique_id',
      name: 'Nombre del Echo',
      rarity: 5,
      cost: 4,
      skill: 'Descripción de la habilidad del echo',
      sonataEffect: 'Nombre del Efecto Sonata',
    },
  ],
  
  // Secuencias/Constelaciones (6 niveles)
  constellations: [
    {
      id: 'const_unique_id_1',
      level: 1,
      name: 'Nombre S1',
      description: 'Descripción de la primera secuencia',
    },
    {
      id: 'const_unique_id_2',
      level: 2,
      name: 'Nombre S2',
      description: 'Descripción de la segunda secuencia',
    },
    {
      id: 'const_unique_id_3',
      level: 3,
      name: 'Nombre S3',
      description: 'Descripción de la tercera secuencia',
    },
    {
      id: 'const_unique_id_4',
      level: 4,
      name: 'Nombre S4',
      description: 'Descripción de la cuarta secuencia',
    },
    {
      id: 'const_unique_id_5',
      level: 5,
      name: 'Nombre S5',
      description: 'Descripción de la quinta secuencia',
    },
    {
      id: 'const_unique_id_6',
      level: 6,
      name: 'Nombre S6',
      description: 'Descripción de la sexta secuencia',
    },
  ],
}
```

### Paso 3: Agrégalo al array

Agrega el nuevo objeto al final del array `initialCharacters` antes del `]` final:

```typescript
export const initialCharacters: Character[] = [
  // ... personajes existentes (Rover, Jiyan)
  
  // Tu nuevo personaje aquí
  {
    id: '3',
    name: 'Yinlin',
    // ... resto de la información
  },
];
```

## Ejemplo Completo: Agregar Yinlin

Aquí hay un ejemplo completo de cómo agregar el personaje Yinlin:

```typescript
{
  id: '3',
  name: 'Yinlin',
  element: 'Electro',
  weapon: 'Rectifier',
  rarity: 5,
  description: 'Agente especial con habilidades eléctricas devastadoras.',
  avatar: '',
  wallpapers: [],
  builds: [
    {
      id: 'yinlin_build1',
      name: 'DPS Electro',
      description: 'Build enfocado en maximizar daño eléctrico',
      recommendedWeapons: ['Stringmaster', 'Variation'],
      recommendedEchoes: ['Tempest Mephis'],
      mainStats: [
        { slot: 'Cost 4', stat: 'Crit Rate / Crit DMG' },
        { slot: 'Cost 3', stat: 'Electro DMG%' },
        { slot: 'Cost 3', stat: 'Electro DMG%' },
        { slot: 'Cost 1', stat: 'ATK%' },
        { slot: 'Cost 1', stat: 'ATK%' },
      ],
      subStats: ['Crit Rate', 'Crit DMG', 'ATK%', 'Energy Regen'],
    },
  ],
  weapons: [
    {
      id: 'yinlin_weapon1',
      name: 'Stringmaster',
      type: 'Rectifier',
      rarity: 5,
      description: 'Arma signature de Yinlin',
      baseAttack: 587,
      subStat: 'Crit Rate',
      subStatValue: 25.1,
    },
  ],
  echoes: [
    {
      id: 'yinlin_echo1',
      name: 'Tempest Mephis',
      rarity: 5,
      cost: 4,
      skill: 'Transform into Tempest Mephis to deal Electro DMG',
      sonataEffect: 'Void Thunder',
    },
  ],
  constellations: [
    {
      id: 'yinlin_s1',
      level: 1,
      name: 'Chameleon Cipher',
      description: 'Aumenta el daño de Resonance Skill',
    },
    {
      id: 'yinlin_s2',
      level: 2,
      name: 'Butterfly Effect',
      description: 'Mejora la regeneración de energía',
    },
    {
      id: 'yinlin_s3',
      level: 3,
      name: 'Covert Operations',
      description: 'Aumenta el nivel de Resonance Liberation',
    },
    {
      id: 'yinlin_s4',
      level: 4,
      name: 'Strategist',
      description: 'Aumenta el daño crítico',
    },
    {
      id: 'yinlin_s5',
      level: 5,
      name: 'Phantom Execution',
      description: 'Aumenta el nivel de Forte Circuit',
    },
    {
      id: 'yinlin_s6',
      level: 6,
      name: 'Perfect Execution',
      description: 'Maximiza el potencial de todos los ataques',
    },
  ],
}
```

## Personajes de Wuthering Waves para Agregar

Aquí hay una lista de personajes populares que puedes agregar:

### Electro
- **Yinlin** - Rectifier
- **Calcharo** - Broadblade

### Glacio
- **Lingyang** - Gauntlets
- **Jianxin** - Gauntlets (también puede ser Aero)

### Fusion
- **Encore** - Rectifier
- **Chixia** - Pistols

### Havoc
- **Danjin** - Sword
- **Taoqi** - Broadblade

### Aero
- **Jiyan** - Broadblade (ya incluido)
- **Yangyang** - Sword

### Spectro
- **Rover (Spectro)** - Sword (ya incluido)
- **Verina** - Rectifier
- **Baizhi** - Rectifier

## Consejos

1. **IDs únicos**: Asegúrate de que cada ID sea único en todo el archivo
2. **Nombres de armas y ecos**: Usa los nombres correctos del juego
3. **Elementos**: Usa solo los 6 elementos válidos (Spectro, Aero, Glacio, Fusion, Electro, Havoc)
4. **Armas**: Usa solo los 5 tipos válidos (Sword, Broadblade, Pistols, Gauntlets, Rectifier)
5. **Rareza**: Solo 4 o 5 estrellas
6. **Secuencias**: Siempre 6 niveles (S1-S6)

## Después de Agregar

1. Guarda el archivo
2. Si la app está corriendo, recárgala (doble R en el emulador)
3. Si no funciona, detén la app y vuélvela a ejecutar con `npm run android` o `npm run ios`
4. Los nuevos personajes aparecerán en la lista principal

## Resetear Datos

Si agregaste personajes desde la app y quieres ver los nuevos personajes predeterminados:

1. Desinstala la app del emulador/dispositivo
2. Vuelve a instalar con `npm run android` o `npm run ios`
3. Los datos se resetearán y verás los nuevos personajes predeterminados

---

¡Ahora puedes personalizar la app con todos tus personajes favoritos de Wuthering Waves! 🎮
