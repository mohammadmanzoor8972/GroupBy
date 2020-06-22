# GroupBy Assignement 
Microlise group by Assignment Structure


I have create the two solution for given data structure.
For test cases I have use Mocha library.

### Installation Command
```
npm install
npm test
```

## Solution A :
```
/**
 * Its return an array group products
 * args : Product List
 */
const tree = (arr = [])=>{
    const result = [];
    arr.forEach((obj) => {
      if (!result[obj.group]) {
        result[obj.group] = {
            group: obj.group,
            item_count: 0,
            subgroups:[]
          };
      } 
      result[obj.group].subgroups = subGroups(obj, result); 
    });
    return Object.values(result);
}

 /**
 * Its return an array Sub group products
 * args : product and result
 */   
const subGroups = (obj, result) =>{
        let found = false;
        //check if subgroups available and set values
        result[obj.group].subgroups = result[obj.group].subgroups.map((item) => {
          if (item.subgroup === obj.subgroup) {
            found = true;
            item.items.push({
              name: obj.item,
              cost: obj.cost,
            });
            //set item conter
            item.item_count = item.items.length;
            //set group counter
            result[obj.group].item_count+=item.item_count-1;
          }
          return item;
        });
        
        //If sub group not available
        if (!found) {
          result[obj.group].subgroups.push({
            subgroup: obj.subgroup,
            item_count: 1,
            items: [{
                name: obj.item,
                cost: obj.cost,
              }],
          });
          //set group counter
          result[obj.group].item_count+=1;
        }
        return result[obj.group].subgroups;
}
```



### Input
```
let products = [
	{ "group": "G1", "subgroup": "S1", "item": "I1", "cost": 10 },
	{ "group": "G1", "subgroup": "S2", "item": "I2", "cost": 11 },
	{ "group": "G1", "subgroup": "S2", "item": "I3", "cost": 12 },
	{ "group": "G2", "subgroup": "S1", "item": "I4", "cost": 20 }
]

eg.
tree(products);

```
### Output
```
[
	{
		"group": "G1",
		"item_count": 2,
		"subgroups": [
			{
				"subgroup": "S1",
				"item_count": 1,
				"items": [
					{ "name": "I1", "cost": 10 }
				]
			},
			{
				"subgroup": "S2",
				"item_count": 2,
				"items": [
					{ "name": "I2", "cost": 11 },
					{ "name": "I3", "cost": 12 }
				]
			}
		]
	},
	{
		"group": "G2",
		"item_count": 1,
		"subgroups": [
			{
				"subgroup": "S1",
				"item_count": 1,
				"items": [
					{ "name": "I4", "cost": 20 }
				]
			}
		]
	}
]
```

## Solution B :
```

/*
func: Groupby
desc : Group and return an object
*/
var groupBy = key => array =>
array.reduce(
  (objectsByKeyValue, obj) => ({
    ...objectsByKeyValue,
    [obj[key]]: (objectsByKeyValue[obj[key]] || []).concat(obj)
  }),
  []
);

const groups = arr => {
return Object.values(groupBy("group")(arr)).map(item => {
  let groups = {
      "group": item[0].group,
      "item_count": item.length,
      "subgroups": Object.values(groupBy("subgroup")([...item])).map(subItem => {
          let subGroups = {
              "subgroup": subItem[0].subgroup,
              "item_count": subItem.length,
              "items": subItem.map(item => {
                  let items = {
                      name: item.item,
                      cost: item.cost
                  }
                  return items;
              })
          }
          return subGroups;
      })
  }
  return groups;
})
}
```
### Input
```
const Prodcuts = [
    { "group": "G2", "subgroup": "S1", "item": "I4", "cost": 5 },
    { "group": "G2", "subgroup": "S1", "item": "I4", "cost": 2 }
]

eg.
groups(Products)
```

### Output
```
[
  {
    "group": "G2",
    "item_count": 2,
    "subgroups": [
      {
        "subgroup": "S1",
        "item_count": 2,
        "items": [
          {
            "name": "I4",
            "cost": 5
          },
          {
            "name": "I4",
            "cost": 2
          }
        ]
      }
    ]
  }
]
```
