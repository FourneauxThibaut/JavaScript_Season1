
// 02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {
        // perform the operation

        let opOne = document.getElementById('op-one').value;
        let opTwo = document.getElementById('op-two').value;

        switch (operation) {
            
            case 'addition':

                document.getElementById("answer").innerHTML = parseInt(opOne) + parseInt(opTwo);
                break;
            case 'substraction':

                document.getElementById("answer").innerHTML = parseInt(opOne) - parseInt(opTwo);
                break;
            case 'multiplication':

                document.getElementById("answer").innerHTML = parseInt(opOne) * parseInt(opTwo);
                break;
            case 'division':

                document.getElementById("answer").innerHTML = parseInt(opOne) / parseInt(opTwo);
                break;
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",

            () => (performOperation($btn.id), false),
        ),
    );
})();
