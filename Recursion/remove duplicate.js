let arr = [2,6,4,5,7,2,4,8,4]

function removeDuplicate(arr,index = 0,set = new Set(),result = []){
  
  if(index === arr.length-1){
    return result
  }
  
    if(!set.has(arr[index])){
      set.add(arr[index])
      result.push(arr[index])
    }
    
    return removeDuplicate(arr,index+1,set,result)
  
}

console.log(removeDuplicate(arr))