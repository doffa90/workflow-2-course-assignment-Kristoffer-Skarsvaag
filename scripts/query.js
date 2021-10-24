

/*import ApolloClient, { gql } from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index'
});
client.query({ query: gql`
{
  allFilms {
    films {
      title
      releaseDate
      planetConnection {
        planets {
          name
          population
        }
      }
    }
  }
}
`}).then(console.log);
*/
fetch('https://swapi-graphql.netlify.app/.netlify/functions/index', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    query: `
    {
      allFilms {
        films {
          title
          releaseDate
          planetConnection {
            planets {
              name
              population
            }
          }
        }
      }
    }
    `
  }),
})
  .then((res) => res.json())
  .then((result) => {

    result.data.allFilms.films.forEach(films => {
      const container = document.querySelector(".results");
      container.innerHTML += `
      <div class="card">
          <h2>${films.title}</h2>
            <p>Release date:${films.releaseDate}</p>
              <h3>Planets connected to the film:</h3>
                <h4>${films.planetConnection.planets[0].name}:</h4><p> Population:${films.planetConnection.planets[0].population}</p>
                <h4>${films.planetConnection.planets[1].name}:</h4><p> Population:${films.planetConnection.planets[1].population}</p>
                <h4>${films.planetConnection.planets[2].name}:</h4><p> Population:${films.planetConnection.planets[2].population}</p>
      </div>`;
    })}
    );

