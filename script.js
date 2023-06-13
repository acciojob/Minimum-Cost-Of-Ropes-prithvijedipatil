

  let x= document.getElementById('rope-lengths');
  let str = x.value;
  let arr = str.split(",");

  let z = function calculateMinCost(arr) {
    //your code here
    let arr1=[];
    let price=[];
    arr.sort((a,b)=>{
        if(a>b){
            return 1;
        }
        if(b>a){
            return -1;
        }
        if(a==b){
            return 0;
        }
    })

    while(arr.length>1){

        let res = arr[0]+arr[1];
        arr1.unshift(res);
        price.push(res);
        for(let i=2;i<arr.length;i++){
            arr1.push(arr[i]);
        }
        arr = [...arr1];
        arr1.length=0;

        
    }
    let final=0;

    for(let j=0;j<price.length;j++){
        final = final + price[j];
    }

    return final;

    
    
  }  

  document.getElementById('result').value=z;

  