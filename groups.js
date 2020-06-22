

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


module.exports = {
    groups
}