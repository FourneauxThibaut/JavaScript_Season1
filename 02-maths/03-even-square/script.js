
// 02-maths/03-even-square/script.js - 2.3: squares and pairs


(() => {

    document.getElementById("run").addEventListener("click", () => {

        // your code here
        items_table = document.getElementById('items_table');
        items_table.innerHTML+= '<tr><th>Number</th><th>Square</th></tr>';
        
        var itemList = [];

        for ( let i = 1; i < 22; i++){
            let square = i * i;
            itemList.push(square);
        }
        
        //Add items to shopping table
        for(var j = 0; j < itemList.length; j++)
        {
            let temp = j+1;
            items_table.innerHTML+= '<tr><td>' + temp + '</td><td>' + itemList[j] + '</td></tr>';
        }   
    });

})();
