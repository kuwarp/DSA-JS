const findSecondLargest=(arr)=>{
    let first=-Infinity
    let second=-Infinity

    for(let i=0;i<arr.length;i++){
       if(first<arr[i]){
        second=first
        first=arr[i]
       }
       else if(second<arr[i] && first!==arr[i]){
        second=arr[i]
       }
    }
    return second

}


// console.log(findSecondLargest([4,617,123]));


function findLargest(arr){
    let first=-Infinity
    for(let i=0;i<arr.length;i++){
        if(first<arr[i]){
         const temp=first
         first=arr[i]   
        }
    }
    return first
}




// console.log(findLargest([995,989,211]));


const findBinary=(arr,target)=>{
    let first=0
    let second=arr.length-1
    while(first<=second){
        let mid=Math.floor((first+second)/2)
        if(arr[mid]===target)
        {
            return mid
        }
        else if(arr[mid]<target)
        {
            first=mid+1
        }
        else{
            second=mid-1
        }
    }
    return "not found"
}


// console.log(findBinary([9,5,4,2],5));


const findLinear=(arr,target)=>{
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return true
        }
    }
    return false
}

// console.log(findLinear([8,7,5],5));


// mergeSort


const mergeSort=(arr)=>{
    if(arr.length<=1){
        return arr
    }
    let n=Math.floor(arr.length/2)
    let first=arr.slice(0,n)
    let second=arr.slice(n)

    const mergeHelpler=(left,right)=>{
        let result = []
        let leftIndex = 0
        let rightIndex = 0

        while(leftIndex<left.length && rightIndex<right.length){
            if(left[leftIndex]<right[rightIndex]){
                result.push(left[leftIndex])
                leftIndex++
            }
            else{
                result.push(right[rightIndex])
                rightIndex++
            }
        }
        return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
    }

    return mergeHelpler(mergeSort(first),mergeSort(second))
}
// console.log(mergeSort([8,6,13,1,7]));


const flatArray = (arr) =>{
    let array=[]
    for (const ele of arr) {
        if(Array.isArray(ele)){
            array=array.concat(flatArray(ele))
        }
        else{
            array.push(ele)
        }
        
    }
    return array
}

// console.log(flatArray([1,[2,[4]]]));

const numPalindrome =(num)=>{
    let orig=num
    let rev=0
    while(num>0){
        let n=Math.floor(num%10)
        rev=rev*10+n
        num=Math.floor(num/10)
    }
    return orig==rev
} 

// console.log(numPalindrome(121),"num");

const strPalindrome =(str)=>{
    let first=0
    let second=str.length-1

    for(let i=0;i<str.length;i++){
        if(str[first]!==str[second]){
            return false
        }
        first++
        second--
    }
    return true
}

// console.log("str", strPalindrome("dood"));


const revString = (str) => {
    let revStr = ""
    for (const st of str) {
        revStr=st+revStr
        
    }
    return revStr
    
}

// console.log(revString("my name is ashu"));

const revArray = (arr) =>{
    let first=0
    let second=arr.length-1

    while(first<=second){
        [arr[first],arr[second]]=[arr[second],arr[first]]
        first++
        second--
    }
    return arr
}

// console.log("revArray", revArray([4,3,2,1]));

const rotateArray = (arr,target) =>{
    let n=arr.length-1
    target= target % n
    for(let i=0;i<n;i++){
        const temp = arr.shift()
        arr.push(temp)
    }
    return arr
}

// console.log(rotateArray([2,4,1,5],0));

const targetSum = (arr,target) => {
    let map = new Map()
    for( let i=0;i<arr.length;i++){
        let comp =target-arr[i]
        if(map.has(comp)){
            return [ map.get(comp),i]
        }
        map.set(arr[i],i)
    }
    return []
}

// console.log(targetSum([5,6,2],8));


const getUnique = (arr) => {
    let map = new Map()
    let newArray=[]

    for(ele of arr){
        if(map.has(ele)){
            map.set(ele,map.get(ele)+1)
    }
    map.set(ele,1)
    }
   
    for(let [eles,count] of map.entries()){
        if(count==1){
            newArray.push(eles)
        }
    }

    return newArray
}

// console.log(getUnique([4,5,6,4]));


const findDuplicate =(arr) => {
    let set = new Set()
    let newArr=[]
    for(let ele of arr){
        if(set.has(ele) && !newArr.includes(ele)){
         newArr.push(ele)   
        }
        else{
            set.add(ele,1)
        }
    }
    return newArr
}

// console.log(findDuplicate([2,4,3,4,2]));


const findMissing = (arr) => {
    let n = arr.length+1
    let expectedSum = (n*(n+1))/2
    let actualSum= arr.reduce((sum,num)=>sum+num,0)
    return expectedSum-actualSum
}

// console.log(findMissing([3,4,6]));




