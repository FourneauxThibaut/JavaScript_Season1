// 08-dom/08-generate-table-two/script.js - 8.8: creating a table (2)

(() => {

    // your code here
    items_table = document.getElementById('target');
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
        items_table.innerHTML+= '<table><tr><td>' + temp + '</td><td>' + itemList[j] + '</td></tr></table>';
    }   

})();
