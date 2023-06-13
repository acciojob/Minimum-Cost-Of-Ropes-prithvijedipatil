

  

  function calculateMinCost() {

    let x= document.getElementById('rope-lengths');
  let str = x.value;
  let arr3= str.split(",");
  let arr = arr3.map(Number);
 
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
   
    let len = arr.length-1;
        while(len>0){
    
            let res = parseInt(arr[0])+parseInt(arr[1]);
            arr1.push(res);
            price.push(res);
            for(let i=2;i<arr.length;i++){
                arr1.push(arr[i]);
            }
            arr = [...arr1];
            arr1.length=0;
    len--;
  
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
            
        }
    console.log(price);
        let final=0;
    
        for(let j=0;j<price.length;j++){
            final = final + price[j];
        }
    
        document.getElementById('result').innerHTML=final;
    
        
    
  }  



  