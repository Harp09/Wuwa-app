# Wuwa-app - Aplicación Móvil de Wuthering Waves

Una aplicación móvil desarrollada en React Native para visualizar y gestionar información sobre los personajes del videojuego Wuthering Waves.

## 🎮 Características

- **Visualización de Personajes**: Lista completa de personajes del juego
- **Detalles de Personajes**: Información detallada organizada en pestañas:
  - **Builds**: Configuraciones recomendadas de personajes
  - **Armas**: Armas disponibles y recomendadas
  - **Ecos**: Sistema de ecos y efectos de sonata
  - **Constelaciones/Secuencias**: Mejoras de personajes
  - **Wallpapers**: Fondos de pantalla del personaje
- **Agregar Personajes Manualmente**: Permite agregar nuevos personajes personalizados
- **Almacenamiento Local**: Los datos se guardan localmente usando AsyncStorage

## 🛠️ Tecnología Recomendada

La aplicación está desarrollada en **React Native con TypeScript**, que es la mejor opción para este proyecto porque:

- ✅ **Multiplataforma**: Un solo código para iOS y Android
- ✅ **TypeScript**: Proporciona seguridad de tipos y mejor autocompletado
- ✅ **Gran Ecosistema**: Abundantes bibliotecas y componentes
- ✅ **Rendimiento**: Excelente rendimiento nativo
- ✅ **Comunidad**: Gran comunidad y documentación
- ✅ **Almacenamiento**: Fácil integración con AsyncStorage para datos locales

## 📋 Requisitos Previos

- Node.js (>= 18)
- npm o yarn
- React Native CLI
- Para iOS: Xcode (solo macOS)
- Para Android: Android Studio y SDK

## 🚀 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/Harp09/Wuwa-app.git
cd Wuwa-app
```

2. Instala las dependencias:
```bash
npm install
```

3. Para iOS (solo en macOS):
```bash
cd ios && pod install && cd ..
```

## 📱 Ejecución

### Android
```bash
npm run android
```

### iOS
```bash
npm run ios
```

### Iniciar el servidor de desarrollo
```bash
npm start
```

## 📂 Estructura del Proyecto

```
Wuwa-app/
├── src/
│   ├── screens/           # Pantallas de la aplicación
│   │   ├── CharacterListScreen.tsx      # Lista de personajes
│   │   ├── CharacterDetailScreen.tsx    # Detalles del personaje
│   │   └── AddCharacterScreen.tsx       # Agregar personaje
│   ├── types/             # Definiciones de TypeScript
│   │   └── Character.ts   # Interfaces de datos
│   ├── utils/             # Utilidades
│   │   └── storage.ts     # Gestión de almacenamiento
│   ├── data/              # Datos iniciales
│   │   └── initialCharacters.ts
│   └── App.tsx            # Componente principal
├── package.json
├── tsconfig.json
└── README.md
```

## 🎯 Uso de la Aplicación

### Ver Personajes
1. Abre la aplicación
2. Verás una lista de personajes con sus elementos y rareza
3. Toca un personaje para ver sus detalles

### Ver Detalles de Personaje
1. En la pantalla de detalles, encontrarás 5 pestañas:
   - **Builds**: Configuraciones recomendadas
   - **Armas**: Armas disponibles
   - **Ecos**: Ecos y efectos
   - **Secuencias**: Constelaciones/mejoras
   - **Fondos**: Wallpapers (próximamente)

### Agregar Nuevo Personaje
1. En la pantalla principal, toca "Agregar Personaje"
2. Completa el formulario:
   - Nombre (obligatorio)
   - Elemento (Spectro, Aero, Glacio, etc.)
   - Tipo de arma
   - Rareza (4 o 5 estrellas)
   - Descripción
3. Toca "Guardar Personaje"

## 🎨 Personalización

Los personajes incluyen información de ejemplo. Puedes:
- Agregar más personajes manualmente
- Modificar los datos en `src/data/initialCharacters.ts`
- Extender las interfaces en `src/types/Character.ts` para más campos

## 📝 Datos del Personaje

Cada personaje incluye:
- Información básica (nombre, elemento, arma, rareza)
- Builds con stats recomendados
- Armas con estadísticas
- Ecos con efectos de sonata
- Constelaciones/Secuencias (6 niveles)
- Wallpapers

## 🔄 Próximas Mejoras

- [ ] Imágenes de personajes
- [ ] Galería de wallpapers
- [ ] Sistema de favoritos
- [ ] Búsqueda y filtros
- [ ] Compartir builds
- [ ] Integración con API oficial (si está disponible)

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:
1. Haz fork del proyecto
2. Crea una rama para tu función (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👥 Autor

Harp09

## 🎮 Acerca de Wuthering Waves

Wuthering Waves es un juego de acción y rol de mundo abierto desarrollado por Kuro Games, con un sistema de combate dinámico y personajes coleccionables únicos.
