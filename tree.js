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
    
    const subGroups = (obj, result) =>{
        let found = false;
        result[obj.group].subgroups = result[obj.group].subgroups.map((item) => {
          if (item.subgroup === obj.subgroup) {
            found = true;
            item.items.push({
              name: obj.item,
              cost: obj.cost,
            });
            
            item.item_count = item.items.length;
            result[obj.group].item_count+=item.item_count-1;
          }
          return item;
        });
    
        if (!found) {
          result[obj.group].subgroups.push({
            subgroup: obj.subgroup,
            item_count: 1,
            items: [{
                name: obj.item,
                cost: obj.cost,
              }],
          });
          result[obj.group].item_count+=1;
        }
        return result[obj.group].subgroups;
      }

module.exports = {tree}
