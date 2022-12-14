

//Fetch API
const fetchData = () => {

    const redditHighlight = 'https://www.reddit.com/r/nba/search.json?q=flair%3AHighlight&restrict_sr=on&sort=new&t=all&limit=51'
    
    fetch(redditHighlight)
    .then(response => { 
     if (!response.ok) {
         throw Error('ERROR');
     }
     return response.json()
     })
     .then(data => { 
    console.log(data.data);

 
 const html = data.data.children.map((item) => {
 
 
    return `
 <a href = "${item.data.url}" target blank>
 <div class="highlights ${item.data.name}">
 <img src="${item.data.secure_media ? item.data.secure_media.oembed.thumbnail_url:''}" alt="" width="382" height="286">
 <p>${item.data.title}</p>
 </div>
 </a>


  `;
 
     }).join("");
     console.log(html);
     
 
    document.querySelector('#app').insertAdjacentHTML("afterbegin", html);
    
    })
    .catch(error => { 
     console.log(error);
    });
    
 }

 fetchData();




 
 

 
 
 