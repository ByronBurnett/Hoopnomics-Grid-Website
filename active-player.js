

//Fetch API
const activePlayers = () => {

  const currentPlayers = 'http://data.nba.net/data/10s/prod/v1/2022/players.json'

                      
  
  fetch(currentPlayers).then(response => { 
   if (!response.ok) {
       throw Error('ERROR');
   }
   return response.json()
   }).then(data => { 
    console.log(data);

  console.log(currentPlayers)
    


    


  const html = data.league.standard.map((item) => {


    return `

<table class="content-table">
    <thead>
      <tr>
        <th>Player</th>
        <th>Name</th>
        <th>Position</th>
        <th>Height</th>
        <th>Country</th>
        <th>Years Played</th>

        </tr>
      </thead>
    <tbody>
      <tr class="active-row">
        <td><img src='https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${item.personId}.png' alt="" width="168" height="140"></td>
        <td>${item.firstName} ${item.lastName}</td>
        <td>${item.pos}</td>
        <td>${item.heightMeters}</td>
        <td>${item.country}</td>
        <td>${item.yearsPro}</td>
        
        </tr>
    </tbody>
  </table>
 


  `;
 
     }).join("");
     console.log(html);
     
 
    document.querySelector('#nba-app').insertAdjacentHTML("afterbegin", html);
    
    })
    .catch(error => { 
     console.log(error);
    });



}

activePlayers();







 