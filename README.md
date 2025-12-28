<div align="center">

# 🔍 GenDiff - Generador de Diferencias

### Herramienta CLI profesional para comparar archivos de configuración

[![Actions Status](https://github.com/JavierQuinan/fullstack-javascript-project-103/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/JavierQuinan/fullstack-javascript-project-103/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/0f72551e0c2594460fde/maintainability)](https://codeclimate.com/github/JavierQuinan/fullstack-javascript-project-103/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/0f72551e0c2594460fde/test_coverage)](https://codeclimate.com/github/JavierQuinan/fullstack-javascript-project-103/test_coverage)
![Node.js Version](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen)
![License](https://img.shields.io/badge/license-ISC-blue)

[Características](#-características) • [Instalación](#-instalación) • [Uso](#-uso) • [Tecnologías](#-tecnologías) • [Demos](#-demostraciones)

</div>

---

## 📋 Descripción

**GenDiff** es una potente herramienta de línea de comandos que compara dos archivos de configuración (JSON o YAML) y genera un reporte detallado de las diferencias encontradas. Soporta múltiples formatos de salida para adaptarse a diferentes necesidades de análisis.

### ✨ Características

- ✅ Comparación de archivos **JSON** y **YAML**
- ✅ Soporte para archivos anidados y complejos
- ✅ Tres formatos de salida:
  - **Stylish** - Formato visual jerárquico con indentación
  - **Plain** - Formato de texto plano legible
  - **JSON** - Formato estructurado para procesamiento programático
- ✅ Detección precisa de:
  - Propiedades añadidas
  - Propiedades eliminadas
  - Propiedades modificadas
  - Propiedades sin cambios
- ✅ CLI intuitivo con Commander.js
- ✅ Cobertura de pruebas con Jest
- ✅ Code Quality con ESLint (Airbnb style guide)

---

## 🛠️ Tecnologías

<div align="center">

### Lenguajes y Runtime
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-v14+-339933?style=for-the-badge&logo=node.js&logoColor=white)

### Librerías Principales
![Commander.js](https://img.shields.io/badge/Commander.js-12.1.0-red?style=for-the-badge)
![js-yaml](https://img.shields.io/badge/js--yaml-4.1.0-blue?style=for-the-badge)
![Lodash](https://img.shields.io/badge/Lodash-4.17.21-3492FF?style=for-the-badge&logo=lodash&logoColor=white)

### Testing y Quality
![Jest](https://img.shields.io/badge/Jest-29.7.0-C21325?style=for-the-badge&logo=jest&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-8.57.0-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)

### Herramientas de Desarrollo
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)
![CodeClimate](https://img.shields.io/badge/CodeClimate-000000?style=for-the-badge&logo=codeclimate&logoColor=white)
![Make](https://img.shields.io/badge/Make-427819?style=for-the-badge&logo=gnu&logoColor=white)

</div>

### 📦 Dependencias del Proyecto

#### Producción
```json
{
  "commander": "^12.1.0",    // CLI framework para construcción de interfaces de línea de comandos
  "js-yaml": "^4.1.0",       // Parser YAML para JavaScript
  "lodash": "^4.17.21"       // Utilidades para manipulación de datos
}
```

#### Desarrollo
```json
{
  "jest": "^29.7.0",                        // Framework de testing
  "eslint": "^8.57.0",                      // Linter para calidad de código
  "eslint-config-airbnb-base": "^15.0.0",   // Configuración Airbnb style guide
  "eslint-plugin-import": "^2.29.1",        // Plugin ESLint para imports
  "eslint-plugin-jest": "^28.5.0"           // Plugin ESLint para Jest
}
```

---

## 🎥 Demostraciones

### Demo Completa - Archivos JSON y YAML
[![Ver en asciinema](https://asciinema.org/a/JiG9ulhhpaOzkSO07TsbNtORW.svg)](https://asciinema.org/a/JiG9ulhhpaOzkSO07TsbNtORW)

### Formato Stylish
[![Ver en Asciinema](https://asciinema.org/a/tkK7hhYV73qeVjdQa9dmGooVh.svg)](https://asciinema.org/a/tkK7hhYV73qeVjdQa9dmGooVh)

### Formato JSON
[![asciicast](https://asciinema.org/a/5cDuAwF4pBK0HOOwEQGBBmGNR.svg)](https://asciinema.org/a/5cDuAwF4pBK0HOOwEQGBBmGNR)

### Demo Adicional
[![asciicast](https://asciinema.org/a/i2cuEArSeYNdtKplUnxnKoaKd.svg)](https://asciinema.org/a/i2cuEArSeYNdtKplUnxnKoaKd)

---

## 📥 Instalación

### Requisitos Previos
- **Node.js** >= 14.0.0
- **npm** >= 6.0.0

### Pasos de Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/JavierQuinan/fullstack-javascript-project-103.git
cd fullstack-javascript-project-103
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Enlazar el paquete globalmente**
```bash
npm link
```

Ahora puedes usar el comando `gendiff` desde cualquier ubicación en tu terminal.

---

## 🚀 Uso

### Sintaxis Básica
```bash
gendiff [opciones] <filepath1> <filepath2>
```

### Opciones Disponibles

| Opción | Descripción | Por Defecto |
|--------|-------------|-------------|
| `-V, --version` | Muestra la versión del programa | - |
| `-h, --help` | Muestra ayuda del comando | - |
| `-f, --format <type>` | Formato de salida: `stylish`, `plain`, `json` | `stylish` |

### Ejemplos de Uso

#### 1. Comparación con formato Stylish (por defecto)
```bash
gendiff file1.json file2.json
```

**Salida:**
```
{
    common: {
      + follow: false
        setting1: Value 1
      - setting2: 200
      - setting3: true
      + setting3: null
      + setting4: blah blah
      + setting5: {
            key5: value5
        }
        setting6: {
            doge: {
              - wow: 
              + wow: so much
            }
            key: value
          + ops: vops
        }
    }
  ...
}
```

#### 2. Comparación con formato Plain
```bash
gendiff --format plain file1.yaml file2.yaml
```

**Salida:**
```
Property 'common.follow' was added with value: false
Property 'common.setting2' was removed
Property 'common.setting3' was updated. From true to null
Property 'common.setting4' was added with value: 'blah blah'
Property 'common.setting5' was added with value: [complex value]
...
```

#### 3. Comparación con formato JSON
```bash
gendiff -f json config1.json config2.json
```

**Salida:**
```json
[
  {
    "key": "common",
    "type": "nested",
    "children": [
      {
        "key": "follow",
        "type": "added",
        "value": false
      },
      ...
    ]
  }
]
```

#### 4. Comparación de archivos YAML
```bash
gendiff database1.yaml database2.yaml
```

---

## 📁 Estructura del Proyecto

```
fullstack-javascript-project-103/
├── bin/
│   └── gendiff.js              # Punto de entrada CLI
├── src/
│   ├── index.js                # Función principal genDiff
│   ├── constants.js            # Constantes del proyecto
│   └── utils/
│       ├── diff.js             # Lógica de comparación
│       ├── parse.js            # Parseo de archivos
│       └── formaters/
│           ├── index.js        # Selector de formateadores
│           ├── stylish.js      # Formato stylish
│           ├── plain.js        # Formato plain
│           └── json.js         # Formato JSON (implícito)
├── __tests__/
│   └── index.test.js           # Tests con Jest
├── __fixtures__/
│   ├── file1.json              # Archivo de prueba
│   ├── file2.json
│   ├── file1-y.yaml
│   ├── file2-y.yaml
│   ├── stylish-result.txt
│   ├── plain-result.txt
│   └── json-result.json
├── coverage/                   # Reportes de cobertura
├── Makefile                    # Scripts de automatización
├── package.json
└── README.md
```

---

## 🧪 Testing

El proyecto incluye pruebas exhaustivas con **Jest** y cobertura de código.

### Ejecutar pruebas
```bash
npm test
```

### Ejecutar pruebas con cobertura
```bash
npm run test:coverage
```

### Linting (ESLint)
```bash
npm run lint
```

### Comandos Make disponibles
```bash
make install    # Instalar dependencias
make test       # Ejecutar tests
make lint       # Ejecutar linter
make publish    # Publicar paquete (dry-run)
```

---

## 🏗️ Arquitectura y Diseño

### Principios Aplicados
- **Separación de Responsabilidades**: Cada módulo tiene una función específica
- **DRY (Don't Repeat Yourself)**: Código reutilizable y modular
- **SOLID Principles**: Diseño orientado a objetos mantenible
- **Clean Code**: Código legible y auto-documentado

### Flujo de Trabajo
```
┌─────────────┐
│  CLI Input  │
└──────┬──────┘
       │
       ▼
┌─────────────────┐
│  Read Files     │
│  (fs module)    │
└──────┬──────────┘
       │
       ▼
┌─────────────────┐
│  Parse Files    │
│  (JSON/YAML)    │
└──────┬──────────┘
       │
       ▼
┌─────────────────┐
│  Generate Diff  │
│  (Lodash)       │
└──────┬──────────┘
       │
       ▼
┌─────────────────┐
│  Format Output  │
│  (Stylish/Plain)│
└──────┬──────────┘
       │
       ▼
┌─────────────────┐
│  Display Result │
└─────────────────┘
```

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Guías de Contribución
- Sigue el style guide de Airbnb
- Escribe tests para nuevas funcionalidades
- Actualiza la documentación según sea necesario
- Asegúrate de que todos los tests pasen

---

## 📄 Licencia

Este proyecto está bajo la Licencia ISC.

---

## 👨‍💻 Autor

**Javier Quinan**

- GitHub: [@JavierQuinan](https://github.com/JavierQuinan)
- Proyecto: [fullstack-javascript-project-103](https://github.com/JavierQuinan/fullstack-javascript-project-103)

---

## 🌟 Agradecimientos

- [Hexlet](https://hexlet.io) - Plataforma educativa
- [Commander.js](https://github.com/tj/commander.js) - CLI framework
- [js-yaml](https://github.com/nodeca/js-yaml) - YAML parser
- [Lodash](https://lodash.com) - Utility library
- [Jest](https://jestjs.io) - Testing framework

---

<div align="center">

**⭐ Si este proyecto te fue útil, considera darle una estrella en GitHub ⭐**

![Made with Love](https://img.shields.io/badge/Made%20with-❤️-red)
![JavaScript](https://img.shields.io/badge/Made%20with-JavaScript-yellow)

</div>


