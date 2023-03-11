/*En este desafío, debes encontrar al gatito más famoso con base en su número de seguidores.
Recibirás un array de objetos que incluirán las siguientes propiedades:
name: nombre del gatito.
followers: un array de números, donde cada uno representa los seguidores de cada red social.
Tu tarea es devolver un array con los nombres de los gatos que tienen solo el mayor número de seguidores. Si hay dos o más gatos con el mismo número máximo de seguidores, deberás incluirlos en el array de resultado, manteniendo el orden en el que aparecen en el array de entrada.

Tendrás inputs y outputs como los siguientes 👇

Ejemplo 1:

Input: findFamousCats([
  {
    name: "Luna",
    followers: [500, 200, 300]
  },
  {
    name: "Michi",
    followers: [100, 300]
  },
])

Output: ["Luna"]

Ejemplo 2:

Input: findFamousCats([
  {
    name: "Mimi",
    followers: [320, 120, 70]
  },
  {
    name: "Milo",
    followers: [400, 300, 100, 200]
  },
  {
    name: "Gizmo",
    followers: [250, 750]
  }
])

Output: ["Milo", "Gizmo"]*/

function findFamousCats(cats) {
    // Tu código aquí 👈
    sumFollowers = cats.map((cat) => {
        let sumFollowers = 0;

        cat.followers.forEach((followers) => {
            sumFollowers += followers;
        });

        cat.followers = sumFollowers;

        return cat;
    });

    let mostFamousCat = [];
    let mayor = sumFollowers[0].followers;
   
    sumFollowers.forEach((cat) => {
        if (mayor < cat.followers) {
            mostFamousCat =[];
            mostFamousCat.push(cat.name);
            mayor = cat.followers;
        } else if (mayor === cat.followers) {
            mostFamousCat.push(cat.name);
        }
    });

    console.log(mostFamousCat);
}

findFamousCats([
  {
    name: "Luna",
    followers: [500, 200, 300]
  },
  {
    name: "Michi",
    followers: [100, 300]
  },
])
findFamousCats([
  {
    name: "Mimi",
    followers: [320, 120, 70]
  },
  {
    name: "Milo",
    followers: [400, 300, 100, 200]
  },
  {
    name: "Gizmo",
    followers: [250, 750]
  }
])