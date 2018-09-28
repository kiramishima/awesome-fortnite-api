# fortnite-api
A Node.js wrapper of fortniteapi.com
## Installation
```sh
npm install awesome-fortnite-api --save
yarn add awesome-fortnite-api
```
## Usage
### Javascript
```javascript
const ForniteClient = require("awesome-fortnite-api").ForniteClient;
const client = new ForniteClient();
client.setKey(process.env.FORTNITE_APIKEY);
client.user.id("Ninja").then(res => console.log(res));
```
```sh
Output should be '4735ce9132924caf8a5b17789b40f79c'
```
### TypeScript
```typescript
import { ForniteClient } from 'awesome-fortnite-api';
const client = new ForniteClient();
client.setKey(process.env.FORTNITE_APIKEY);
client.user.id("Ninja").then(res => console.log(res));
```
```sh
Output should be '4735ce9132924caf8a5b17789b40f79c'
```
## Test 
```sh
npm run test
```