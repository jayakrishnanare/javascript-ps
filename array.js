let arr=[],arr1=[]
for(let i=1 ; i<=100; i++){
//   if(i % 2 == 0){
     //console.log(i)
     arr.push(i)
}
arr.map((item,index)=>{
    arr1.push({[Number(item)]:{}})
})
arr1.map((item,index)=>{
  //  {item[1]['name']='Hi'}
  //console.log('index',item['100'])
  item[index+1]={name:'srinu', phone:67777777}
  console.log(delete item[index+1].phone);
  console.log(item[index+1].name)

})
console.log(arr1)
