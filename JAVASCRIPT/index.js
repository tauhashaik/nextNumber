let arNum = [3, 5, 7, 9, 15,35 ];
let n = 0
        let nextInput = document.getElementById('nextInput');
        let calcbtn = document.getElementById('calcbtn');

        calcbtn.addEventListener('click', displayNextNumber)
        
        function displayNextNumber(){
            if(n < arNum.length){
                let next = arNum[n];
                n++
                // console.log()
                nextInput.value = next
            }else{
                n = 0
            }
        }