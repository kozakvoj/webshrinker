# Webshrinker Client
Unofficial Node client for Websrhinker APIs (https://www.webshrinker.com)

## Installing
Using npm:
```
npm install webshrinker
```

## Website Category API
The Websrhinker service supports the "IAB Tech Lab Content Taxonomy". Apart from the official taxonomy, Webshrinker adds some extra categories. The full list can be found at https://docs.webshrinker.com/v3/iab-website-categories.html#iab-categories

### Example
```javascript
'use strict';

const Webshrinker = require("webshrinker");
const webshrinker = new Webshrinker({key: "YOUR_KEY", secret: "YOUR_SECRET"});

webshrinker.getCategories("https://www.vojtechkozak.cz").then(console.log)
```

Response:
```json
[  
   {  
      "id":"IAB19",
      "label":"Technology & Computing",
      "parent":"IAB19",
      "score":"0.219690331512750303",
      "confident":true
   }
]
```

## Website Domain API

### Example
```javascript
'use strict';

const Webshrinker = require("webshrinker");
const webshrinker = new Webshrinker({key: "YOUR_KEY", secret: "YOUR_SECRET"});

webshrinker.getDomain("https://www.vojtechkozak.cz").then(console.log)
```

Response:
```json
{  
   "start_date":"2016-08-01",
   "end_date":"2018-08-31",
   "language":"en",
   "categories":[  
      "education",
      "informationtech",
      "business"
   ],
   "host":"vojtechkozak.cz",
   "addresses":{  
      "ipv4":{  
         "178.32.50.87":[  
            "2017-12-29T20:08:10Z"
         ]
      }
   }
}
```

## Website Screenshot API

## Reference
- Webshrinker API documentation: https://docs.webshrinker.com/