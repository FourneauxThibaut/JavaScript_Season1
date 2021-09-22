// 08-dom/04-attr-create/script.js - 8.4: manipulating attributes and creating elements


(() => {

    // your code here
    
    const src = document.getElementById('source');
    src.removeAttribute('data-image');
    
    const target = document.getElementById('target');
    target.innerHTML="<img src=\"https://images.unsplash.com/photo-1627037558426-c2d07beda3af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80\">";
    console.log(src);
})();
