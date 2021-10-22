# React-Avatars

React-Avatars makes it possible to generate endless different avatars.

<p>
    <a href="https://github.com/fduschka/react-avatars/blob/main/LICENSE" target="_blank">
        <img src="https://img.shields.io/npm/l/react-avatars?style=flat-square" alt="License">
    </a>
    <a href="https://www.npmjs.com/package/@fduschka/react-avatars" target="_blank">
        <img src="https://img.shields.io/npm/v/react-avatars?color=blue&style=flat-square" alt="Latest Version">
    </a>
</p>

## Installation

The best way to consume React-Avatars is via the npm package which you can install with npm.

```sh
npm i react-avatars
```

## Importing Components

```js
import { Initials } from 'react-avatars'
```

## Examples
### Basic Avatar
```js
<Initials name="React Avatars" />
```
### All Avatars
If you don't want a new avatar each time your application renders, you can provide a seed which generates an avatar based on your seed.
```js
<Initials name="React Avatars" color="white" font="Arial" size="50" bg="#FF6347" />
<Pixelcon color="#FF6347" size="50" />
<Jdenticon seed="your_seed" size="50" bg="#FF6347" />
```
## Styles
We are constantly working on adding more styles!

- [x] Initials
- [x] Pixelcon
- [x] Jdenticon by [dmester](https://github.com/dmester)



## License
[MIT](https://choosealicense.com/licenses/mit/)
