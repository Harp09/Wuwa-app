# Guía de Instalación y Configuración

Esta guía te ayudará a instalar y configurar la aplicación Wuwa App en tu computadora para desarrollo.

## 📋 Requisitos del Sistema

### Requisitos Generales
- **Node.js**: Versión 18 o superior
- **npm** o **yarn**: Gestor de paquetes (viene con Node.js)
- **Git**: Para clonar el repositorio
- **Editor de Código**: VS Code recomendado

### Para Desarrollo en Android
- **Android Studio**: Versión más reciente
- **JDK (Java Development Kit)**: Versión 11 o superior
- **Android SDK**: API Level 31 o superior
- **Emulador Android** o dispositivo físico

### Para Desarrollo en iOS (solo macOS)
- **macOS**: Versión 12 o superior
- **Xcode**: Versión 14 o superior
- **CocoaPods**: Gestor de dependencias para iOS
- **Command Line Tools**: De Xcode

## 🔧 Instalación de Requisitos

### 1. Instalar Node.js

**Windows y macOS:**
1. Descarga Node.js desde https://nodejs.org/
2. Ejecuta el instalador
3. Verifica la instalación:
```bash
node --version
npm --version
```

**Linux (Ubuntu/Debian):**
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### 2. Instalar Android Studio (para Android)

1. Descarga Android Studio desde https://developer.android.com/studio
2. Ejecuta el instalador
3. Durante la instalación, asegúrate de seleccionar:
   - Android SDK
   - Android SDK Platform
   - Android Virtual Device
4. Configura las variables de entorno:

**Windows:**
```
ANDROID_HOME=C:\Users\TuUsuario\AppData\Local\Android\Sdk
```

**macOS/Linux:**
```bash
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

Agrega estas líneas a tu `.bashrc`, `.zshrc`, o archivo de perfil correspondiente.

### 3. Instalar Xcode (solo macOS, para iOS)

1. Descarga Xcode desde la Mac App Store
2. Abre Xcode y acepta los términos de licencia
3. Instala las Command Line Tools:
```bash
xcode-select --install
```
4. Instala CocoaPods:
```bash
sudo gem install cocoapods
```

## 📥 Clonar e Instalar el Proyecto

### 1. Clonar el Repositorio

```bash
git clone https://github.com/Harp09/Wuwa-app.git
cd Wuwa-app
```

### 2. Instalar Dependencias

```bash
npm install
```

Este comando instalará todas las dependencias necesarias definidas en `package.json`.

### 3. Instalar Pods de iOS (solo macOS)

```bash
cd ios
pod install
cd ..
```

## 🚀 Ejecutar la Aplicación

### Modo de Desarrollo - Android

1. **Opción 1: Usar un emulador**
   - Abre Android Studio
   - Ve a AVD Manager (Android Virtual Device Manager)
   - Crea o inicia un dispositivo virtual

2. **Opción 2: Usar un dispositivo físico**
   - Habilita "Opciones de desarrollador" en tu dispositivo Android
   - Habilita "Depuración USB"
   - Conecta tu dispositivo a la computadora vía USB

3. **Ejecutar la app:**
```bash
npm run android
```

### Modo de Desarrollo - iOS (solo macOS)

1. **Opción 1: Usar el simulador**
```bash
npm run ios
```

2. **Opción 2: Especificar un dispositivo específico**
```bash
npm run ios -- --simulator="iPhone 14"
```

3. **Para dispositivo físico:**
   - Abre el proyecto en Xcode: `ios/WuwaApp.xcworkspace`
   - Selecciona tu dispositivo
   - Configura el equipo de desarrollo en "Signing & Capabilities"
   - Presiona el botón de ejecutar

### Iniciar el Metro Bundler

El Metro Bundler generalmente se inicia automáticamente, pero puedes iniciarlo manualmente:

```bash
npm start
```

## 🧪 Verificar la Instalación

Una vez que la app esté ejecutándose:

1. Deberías ver la pantalla principal con "Personajes de Wuthering Waves"
2. Verás dos personajes de ejemplo: Rover (Spectro) y Jiyan
3. Toca un personaje para ver sus detalles
4. Navega entre las pestañas: Builds, Armas, Ecos, Secuencias, Fondos
5. Prueba agregar un nuevo personaje usando el botón "Agregar Personaje"

## 🛠️ Comandos Útiles

### Desarrollo
```bash
# Iniciar en Android
npm run android

# Iniciar en iOS
npm run ios

# Iniciar Metro Bundler
npm start

# Limpiar caché de Metro
npm start -- --reset-cache
```

### Testing
```bash
# Ejecutar tests
npm test

# Ejecutar tests en modo watch
npm test -- --watch
```

### Linting
```bash
# Ejecutar ESLint
npm run lint
```

### Limpiar y Reconstruir

**Android:**
```bash
cd android
./gradlew clean
cd ..
npm run android
```

**iOS:**
```bash
cd ios
rm -rf Pods
pod install
cd ..
npm run ios
```

## 🐛 Solución de Problemas Comunes

### Error: "Unable to load script"
**Solución:**
```bash
npm start -- --reset-cache
```

### Error: "SDK location not found"
**Solución:** Crea el archivo `local.properties` en la carpeta `android/`:
```
sdk.dir=C:\\Users\\TuUsuario\\AppData\\Local\\Android\\Sdk
```
(Ajusta la ruta según tu sistema)

### Error: "Pod install failed"
**Solución:**
```bash
cd ios
pod deintegrate
pod install
cd ..
```

### Error: "Command not found: react-native"
**Solución:** Asegúrate de ejecutar los comandos desde la raíz del proyecto y que las dependencias estén instaladas:
```bash
npm install
```

### La app se cierra inmediatamente después de abrir
**Solución:** 
1. Revisa los logs en Metro Bundler
2. Verifica que todas las dependencias estén instaladas
3. Limpia y reconstruye el proyecto

### Problemas de permisos en Android
**Solución:** Verifica que la depuración USB esté habilitada y que hayas autorizado tu computadora en el dispositivo Android.

## 📱 Generar Build de Producción

### Android APK

```bash
cd android
./gradlew assembleRelease
```

El APK estará en: `android/app/build/outputs/apk/release/app-release.apk`

### iOS (requiere cuenta de desarrollador de Apple)

1. Abre el proyecto en Xcode: `ios/WuwaApp.xcworkspace`
2. Selecciona "Product" > "Archive"
3. Sigue el asistente para distribuir la app

## 🔄 Actualizar Dependencias

```bash
# Verificar dependencias desactualizadas
npm outdated

# Actualizar dependencias
npm update

# Para iOS, actualizar pods
cd ios
pod update
cd ..
```

## 💡 Consejos de Desarrollo

1. **Hot Reload**: Presiona `R` dos veces en el emulador/simulador para recargar
2. **Debug Menu**: 
   - Android: Presiona `Ctrl + M` (Windows/Linux) o `Cmd + M` (macOS)
   - iOS: Presiona `Cmd + D`
3. **Inspeccionar Elementos**: Activa "Show Inspector" desde el Debug Menu
4. **React DevTools**: Instala la extensión de React DevTools para mejor debugging

## 📚 Recursos Adicionales

- [Documentación oficial de React Native](https://reactnative.dev/docs/getting-started)
- [Guía de configuración del entorno](https://reactnative.dev/docs/environment-setup)
- [TypeScript con React Native](https://reactnative.dev/docs/typescript)
- [React Navigation](https://reactnavigation.org/docs/getting-started)

## 🤝 Ayuda y Soporte

Si tienes problemas con la instalación:
1. Consulta la sección de Solución de Problemas arriba
2. Revisa los issues existentes en GitHub
3. Crea un nuevo issue con detalles del problema

---

¡Listo! Ahora deberías tener la aplicación funcionando en tu entorno de desarrollo. 🎉
