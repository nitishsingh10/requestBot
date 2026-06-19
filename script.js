setInterval(async ()=>{
    const resp = await fetch('https://gbi-0y3t.onrender.com/');
    console.log(resp);
},5000)