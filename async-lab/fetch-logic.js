// 1. Fonction fléchée async + const
const fetchUserData = async () => {
  console.log("Requete lancee...");

  // 3. Pare-feu try...catch
  try {
    // 2. Premier await : attendre la réponse du serveur
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');

    // 3. Vérification response.ok
    if (!response.ok) {
      throw new Error(`Erreur HTTP : statut ${response.status}`);
    }

    // 2. Deuxième await : attendre la conversion JSON
    const user = await response.json();

    // 4. Affichage avec Template Literal
    console.log(`
      Nom       : ${user.name}
      Email     : ${user.email}
      Entreprise: ${user.company.name}
    `);

  } catch (error) {
    console.error('%cErreur : ' + error.message, 'color: red');
  }

  console.log("Requete terminee.");
};

fetchUserData();


// BONUS : Promise.all() - deux requêtes en parallèle
const getFastData = async () => {
  try {
    const [userRes, postRes] = await Promise.all([
      fetch('https://jsonplaceholder.typicode.com/users/1'),
      fetch('https://jsonplaceholder.typicode.com/posts/1')
    ]);

    const user = await userRes.json();
    const post = await postRes.json();

    console.log(`Utilisateur : ${user.name} | Post : ${post.title}`);

  } catch (error) {
    console.error('%cErreur parallèle : ' + error.message, 'color: red');
  }
};

getFastData();


/*
  ANALYSE CRITIQUE

  1. Pourquoi le code de départ n'affiche pas le nom ?
     fetch() ne retourne pas directement les données, il retourne une
     "Promise" (une promesse de données futures). Sans await, la variable
     response contient cette Promise, pas la vraie réponse. Donc
     response.json() échoue aussi, et user.name vaut undefined.

  2. Que fait await exactement ?
     await met EN PAUSE uniquement la fonction async dans laquelle il se
     trouve. Le reste du navigateur (autres onglets, autres fonctions)
     continue de fonctionner normalement. C'est ça toute la puissance de
     l'asynchronisme : on attend sans bloquer.

  3. Pourquoi vérifier response.ok même sans erreur réseau ?
     fetch() ne lance PAS d'erreur automatique si le serveur répond avec
     un code d'erreur comme 404 (page introuvable) ou 500 (erreur serveur).
     Il considère que la requête a "réussi" car il a reçu une réponse.
     Sans vérifier response.ok, on essaierait de lire des données qui
     n'existent pas. C'est un piège classique que tout bon développeur
     doit éviter.
*/
