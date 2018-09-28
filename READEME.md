# fortnite-api
A Node.js wrapper of fortniteapi.com
## Installation 
```sh
npm install fortnite-api --save
yarn add fortnite-api
```
## Usage
### Javascript
```javascript
const FortniteClient = require("fortnite-api").FortniteClient;
const client = new ForniteClient();
client.setKey(process.env.FORTNITE_APIKEY);
client.user.id("Ninja").then(res => console.log(res));
```
```sh
Output should be '4735ce9132924caf8a5b17789b40f79c'
```
### TypeScript
```typescript
import { ForniteClient } from 'fortnite-api';
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