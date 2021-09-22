// 08-dom/07-generate-table-one/script.js - 8.7: creating a table (1)


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
