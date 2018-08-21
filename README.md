# Webshrinker Client
Unofficial Node client for Websrhinker APIs (https://www.webshrinker.com)

## Installing
Using npm:
```
npm install webshrinker
```

## Website Category API
```javascript
'use strict';

const Webshrinker = require("webshrinker");
const webshrinker = new Webshrinker({key: "YOUR_KEY", secret: "YOUR_SECRET"});

webshrinker.getCategories("https://www.vojtechkozak.cz").then(console.log)
```


## Website Domain API

## Website Screenshot API

## Reference
- Webshrinker API documentation: https://docs.webshrinker.com/