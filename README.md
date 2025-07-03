# Prueba Técnica Stay App

[Documentación](https://stay-app.notion.site/Prueba-T-cnica-React-Native-Exploraci-n-de-Destinos-a52add0796304c129ac832dd88151380) de la prueba.

## Arquitectura y decisiones clave

La app está desarrollada en **React Native** usando **TypeScript**, siguiendo una arquitectura modular y desacoplada para mejorar mantenibilidad y escalabilidad:
- **Dominio (`src/domain`)**: Contiene las entidades, repositorios y casos de uso que definen la lógica de negocio, desacoplada de la infraestructura.
- **Infraestructura (`src/infrastructure`)**: Implementa la comunicación con APIs y mapeo de datos .
- **App (`src/app`)**: Agrupa los componentes de UI, hooks personalizados, navegación y la gestión de estado global.
- **Shared (`src/shared`)**: Contiene utilidades, constantes y configuraciones comunes a toda la aplicación.

**Decisiones clave**:
- Uso de hooks personalizados para unificar y aislar la lógica de obtención y manipulación de datos.
- Gestión del estado global mediante Zustand, que ofrece simplicidad y rendimiento.
- Componentes desacoplados y reutilizables, siguiendo buenas prácticas de diseño.
- Cobertura de tests unitarios con Jest y React Native Testing Library para asegurar calidad y facilitar el desarrollo.

## Instalación y ejecución

Instalar dependencias y arrancar sevidor metro

```sh

npm install
npm start
```

Compilar aplicación segun el dispositivo

### Android
```sh
npm run android
```

### iOS
```sh
cd ios/
pod install
cd ../
npm run ios
```

## Tests

```sh
npm run test
```

## Posibles mejoras
Conforme la aplicación fuera creciendo en funcionalidades plantearia algunas mejoras:
- Migrar la gestión del estado global de Zustand a Redux con Redux-Saga para un control más robusto y escalable, especialmente en aplicaciones con lógica asíncrona compleja. 
- Implementar Diseño Atómico para estructurar los componentes en átomos, moléculas y organismos, facilitando la reutilización y consistencia UI. 
- Handler de erorres comun para mejorar la experiencia de usuario. 
- Incorporar internacionalización (i18n) para soportar múltiples idiomas.
- Detectar el idioma del dispositivo y utilizar el campo `translatableName` correspondiente
