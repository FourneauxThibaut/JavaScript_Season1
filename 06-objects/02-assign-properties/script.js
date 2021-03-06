//06-objects/02-assign-properties/script.js - 6.2: assign properties


(() => {
    const computers = [
        {id: "0001", available: false, user: "leny", os: "macOS"},
        {id: "0002", available: false, user: "Nicolas"},
        {id: "0003"},
        {id: "0004", os: "Windows"},
        {id: "0005"},
        {id: "0006", os: "macOS"},
        {id: "0007"},
        {id: "0008"},
        {id: "0009", available: false, user: "Anthony"},
    ];
    const defaultProps = {
        available: true,
        os: "linux",
        user: null,
    };
    // your code here
    
    document.getElementById("run").addEventListener("click", function() {
        computers.forEach(element => {
            if (element.available == undefined && element.os == undefined && element.user == undefined)
            {
                element.available = defaultProps.available;
                element.os = defaultProps.os;
                element.user = defaultProps.user;
            }
            else if (element.available == undefined && element.os == undefined)
            {
                element.available = defaultProps.available;
                element.os = defaultProps.os;
            }
            else if (element.available == undefined && element.user == undefined)
            {
                element.available = defaultProps.available;
                element.user = defaultProps.user;
            }
            else if (element.user == undefined && element.os == undefined)
            {
                element.user = defaultProps.user;
                element.os = defaultProps.os;
            }
            else if (element.available == undefined)
            {
                element.available = defaultProps.available;
            }
            else if (element.os == undefined)
            {
                element.os = defaultProps.os;
            }
            else if (element.user == undefined)
            {
                element.user = defaultProps.user;
            }
        });
        console.log(computers);
    });

})();