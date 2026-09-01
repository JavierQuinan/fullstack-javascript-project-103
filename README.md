<div align="center">

# GenDiff

### CLI for comparing JSON and YAML configuration files

[![Actions Status](https://github.com/JavierQuinan/fullstack-javascript-project-103/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/JavierQuinan/fullstack-javascript-project-103/actions)
![Node.js](https://img.shields.io/badge/Node.js-JavaScript-339933?logo=nodedotjs&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-Tested-C21325?logo=jest&logoColor=white)
![License](https://img.shields.io/badge/license-ISC-blue)

</div>

## Overview

GenDiff is a Node.js command-line utility that compares two configuration files, builds a structured difference tree and renders the result in multiple formats.

This repository is maintained as **verifiable Node.js / CLI engineering evidence**. Its automated test suite covers JSON/YAML inputs and the supported output formats.

## Verified capabilities

- JSON configuration parsing
- YAML configuration parsing
- nested object comparison
- detection of added, removed, updated, unchanged and nested properties
- `stylish` output
- `plain` output
- JSON output
- Commander-based CLI
- modular parser / diff / formatter separation
- Jest automated tests with coverage reporting
- ESLint / Airbnb base configuration
- GitHub Actions / Hexlet validation

## Stack

`Node.js` · `JavaScript / ES Modules` · `Commander` · `js-yaml` · `Lodash` · `Jest` · `ESLint`

## Architecture

```text
CLI
 │
 ▼
Read files
 │
 ▼
Parse JSON / YAML
 │
 ▼
Build normalized diff tree
 │
 ▼
Formatter selection
 ├── stylish
 ├── plain
 └── json
 │
 ▼
Rendered result
```

The implementation is modular and functional: file parsing, diff generation and output formatting are separate concerns. It is not presented as an object-oriented/SOLID architecture because the current source does not use that design style.

## Installation

```bash
git clone https://github.com/JavierQuinan/fullstack-javascript-project-103.git
cd fullstack-javascript-project-103
npm install
npm link
```

## Usage

```bash
gendiff [options] <filepath1> <filepath2>
```

Examples:

```bash
gendiff file1.json file2.json
gendiff file1.yaml file2.yaml
gendiff --format plain file1.json file2.json
gendiff --format json file1.yaml file2.yaml
```

## Quality checks

```bash
npm test
npm run lint
```

The current test command runs Jest with coverage output.

## Repository structure

```text
bin/
  gendiff.js
src/
  index.js
  utils/
    diff.js
    parse.js
    formaters/
__tests__/
__fixtures__/
package.json
```

## Demonstrations

The repository includes Asciinema recordings demonstrating CLI behavior for supported inputs and output formats. These are supporting evidence; the executable code and automated tests remain the primary source of truth.

## Portfolio classification

**Category:** Node.js / algorithms / CLI engineering evidence  
**Visibility:** Public  
**Portfolio priority:** Medium-high  
**Current recommendation:** Keep public as a clean supporting repository for Node.js, data transformation, testing and CLI design.

## Author

Francisco Quinteros — [GitHub](https://github.com/JavierQuinan)

## License

ISC. Developed as part of the Hexlet learning path.
