# Guía de Uso - Wuwa App

## 📖 Introducción

Esta aplicación móvil está diseñada para ayudarte a gestionar y visualizar información sobre los personajes de Wuthering Waves. Puedes ver detalles completos de cada personaje incluyendo sus builds, armas, ecos, constelaciones y más.

## 🎯 Funcionalidades Principales

### 1. Lista de Personajes

La pantalla principal muestra todos los personajes disponibles con:
- Nombre del personaje
- Elemento (Spectro, Aero, Glacio, Fusion, Electro, Havoc)
- Tipo de arma
- Rareza (indicada con estrellas ⭐)
- Color identificador del elemento en el borde izquierdo

**Cómo usar:**
- Desliza hacia arriba/abajo para ver todos los personajes
- Toca cualquier personaje para ver sus detalles
- Toca el botón "Agregar Personaje" para añadir un nuevo personaje

### 2. Detalles del Personaje

Al tocar un personaje, verás una pantalla detallada con 5 pestañas:

#### Pestaña: Builds
- Muestra las configuraciones recomendadas del personaje
- Incluye armas y ecos sugeridos
- Lista los stats principales para cada slot de eco
- Muestra los sub-stats prioritarios

**Información que verás:**
- Nombre del build (ej: "DPS Principal", "Soporte")
- Descripción del build
- Armas recomendadas
- Ecos recomendados
- Stats principales por slot (Cost 4, Cost 3, Cost 1)
- Sub-stats prioritarios

#### Pestaña: Armas
- Lista todas las armas disponibles y recomendadas para el personaje
- Muestra estadísticas detalladas de cada arma

**Información de cada arma:**
- Nombre del arma
- Tipo (Sword, Broadblade, Pistols, etc.)
- Rareza (4 o 5 estrellas)
- ATK base
- Sub-stat principal y su valor
- Descripción

#### Pestaña: Ecos
- Muestra los ecos recomendados para el personaje
- Incluye información sobre efectos de sonata

**Información de cada eco:**
- Nombre del eco
- Rareza
- Costo (1, 3 o 4)
- Habilidad del eco
- Efecto de Sonata asociado

#### Pestaña: Secuencias (Constelaciones)
- Lista las 6 secuencias/constelaciones del personaje
- Cada nivel (S1 a S6) con su nombre y descripción

**Información:**
- Nivel (S1, S2, S3, S4, S5, S6)
- Nombre de la secuencia
- Descripción del efecto que otorga

#### Pestaña: Fondos (Wallpapers)
- Sección para ver wallpapers del personaje
- Actualmente en desarrollo

### 3. Agregar Nuevo Personaje

Puedes agregar tus propios personajes manualmente:

**Pasos:**
1. Desde la pantalla principal, toca "Agregar Personaje"
2. Completa el formulario:
   - **Nombre**: Nombre del personaje (obligatorio)
   - **Elemento**: Selecciona entre Spectro, Aero, Glacio, Fusion, Electro, Havoc
   - **Arma**: Selecciona el tipo de arma
   - **Rareza**: 4 o 5 estrellas
   - **Descripción**: Breve descripción del personaje
3. Toca "Guardar Personaje"
4. El personaje aparecerá en la lista principal

**Nota:** Los personajes agregados manualmente se guardan localmente en tu dispositivo.

## 💾 Almacenamiento de Datos

- Todos los datos se guardan localmente en tu dispositivo usando AsyncStorage
- Los personajes predeterminados (Rover, Jiyan) se cargan automáticamente la primera vez
- Los personajes que agregues manualmente se mantendrán incluso si cierras la app
- Los datos NO se sincronizan entre dispositivos

## 🎨 Elementos y Colores

Cada elemento tiene un color distintivo:
- **Spectro**: Beige claro (#F5E6D3)
- **Aero**: Verde aqua (#66CDAA)
- **Glacio**: Azul claro (#B0E0E6)
- **Fusion**: Rojo tomate (#FF6347)
- **Electro**: Púrpura (#9370DB)
- **Havoc**: Púrpura oscuro (#8B008B)

## 📱 Tipos de Arma

- **Sword** (Espada): Arma ligera de una mano
- **Broadblade** (Espada Ancha): Arma pesada de dos manos
- **Pistols** (Pistolas): Armas de rango medio
- **Gauntlets** (Guanteletes): Armas de combate cuerpo a cuerpo
- **Rectifier** (Rectificador): Armas catalizadoras

## 🔧 Personalización

### Editar Personajes Predeterminados
Si quieres modificar los personajes de ejemplo (Rover, Jiyan):
1. Abre el archivo: `src/data/initialCharacters.ts`
2. Edita la información del personaje
3. Guarda el archivo
4. Desinstala y reinstala la app para ver los cambios

### Agregar Más Builds a un Personaje
1. Abre el archivo de personajes en `src/data/initialCharacters.ts`
2. En el array `builds` del personaje, agrega un nuevo objeto build
3. Incluye todas las propiedades necesarias

### Extender el Modelo de Datos
Si quieres agregar más campos a los personajes:
1. Edita las interfaces en `src/types/Character.ts`
2. Actualiza las pantallas correspondientes para mostrar los nuevos datos

## 📊 Estructura de Datos

### Character (Personaje)
```typescript
{
  id: string
  name: string
  element: string
  weapon: string
  rarity: number (4 o 5)
  description: string
  avatar?: string
  wallpapers: string[]
  builds: Build[]
  weapons: Weapon[]
  echoes: Echo[]
  constellations: Constellation[]
}
```

### Build (Configuración)
```typescript
{
  id: string
  name: string
  description: string
  recommendedWeapons: string[]
  recommendedEchoes: string[]
  mainStats: { slot: string, stat: string }[]
  subStats: string[]
}
```

## 🚀 Próximas Funciones

Funciones planeadas para futuras versiones:
- Sistema de búsqueda de personajes
- Filtros por elemento y tipo de arma
- Sistema de favoritos
- Galería de imágenes y wallpapers
- Calculadora de daño
- Planificador de recursos
- Comparador de builds
- Exportar/importar datos

## ❓ Preguntas Frecuentes

**P: ¿Puedo editar un personaje después de agregarlo?**
R: Actualmente no hay función de edición en la UI. Puedes eliminar y volver a agregar el personaje, o editar directamente el almacenamiento AsyncStorage.

**P: ¿Los datos se sincronizan en la nube?**
R: No, todos los datos se guardan localmente en tu dispositivo.

**P: ¿Puedo agregar imágenes a los personajes?**
R: Por ahora, las imágenes no están completamente implementadas. Esto vendrá en futuras actualizaciones.

**P: ¿Cómo puedo resetear la app a los datos iniciales?**
R: Desinstala y reinstala la aplicación, o borra los datos de la app desde la configuración de tu dispositivo.

## 🤝 Soporte

Si encuentras algún problema o tienes sugerencias:
1. Abre un issue en GitHub
2. Describe el problema o sugerencia claramente
3. Incluye capturas de pantalla si es posible

## 📝 Notas de Versión

### Versión 1.0.0
- ✅ Lista de personajes
- ✅ Detalles de personajes con pestañas
- ✅ Agregar personajes manualmente
- ✅ Almacenamiento local
- ✅ Navegación entre pantallas
- ✅ Dos personajes de ejemplo (Rover, Jiyan)

---

¡Disfruta usando Wuwa App para gestionar tus personajes de Wuthering Waves! 🎮
