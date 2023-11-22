    // Create Array
let arNum = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
let n = 0
        // Creating Variables for button and display
        let nextInput = document.getElementById('nextInput');
        let calcbtn = document.getElementById('calcbtn');

    // addEventListener for button functionality
        calcbtn.addEventListener('click', displayNextNumber)

        // function created to run through array until length variable reaches length and resets to 0.
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