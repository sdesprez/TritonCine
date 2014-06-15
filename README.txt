TritonCine

TritonCine est un cite utilisant les données "les-plus-grands-succes-du-cinema-depuis-1945" fournies par l'api http://public.opendatasoft.com/api/.
Cette api fournit les 200 films ayant fait le plus d'entrées au cinéma entre 1945 et 2012.

Exemple de réponse pour la requête 
	"http://public.opendatasoft.com/api/records/1.0/search?dataset=les-plus-grands-succes-du-cinema-depuis-1945&rows=1":
	{
	   "nhits":200,
	   "parameters":{
	      "rows":1,
	      "format":"json",
	      "dataset":[
	         "les-plus-grands-succes-du-cinema-depuis-1945"
	      ]
	   },
	   "records":[
	      {
	         "datasetid":"les-plus-grands-succes-du-cinema-depuis-1945",
	         "recordid":"855de0059ea4f10a983c4c89c81390c953e3528e",
	         "fields":{
	            "entrees_millions":21771370,
	            "rang":1,
	            "nationalite":"US",
	            "realisateur":"J. Cameron",
	            "titre":"Titanic",
	            "annee_de_sortie":1998
	         }
	      }
	   ]
	}


Les résultats sont initialement triés selon leur rang mais il est possible de changer le critère en cliquant sur un nom de colonne (et en cliquant à nouveau pour trier selon l'ordre inverse).
Il est également possible de faire un recherche selon le nom d'un film grâce au champ de recherche.


Lorque l'on clique sur le nom d'un réalisateur, on accède à une nouvelle page affichant tous les films de ce réalisateur entrant dans ce classement. Pour chacun de ces film, on affiche les mêmes données que précédemment, à l'exception du nom du réalisateur puisqu'il est déjà en haut de la page.


Le bouton "Plus d'info" (ou "+" pour les écrans de petite taille) permet d'afficher les détails d'un film.
Ces informations sont obtenues à l'aide d'une autre api : http://www.myapifilms.com/ en effectuant une recherche selon le nom du film.
Nous avions un problème avec le Cross-origin resource sharing (CORS) que nous avons résolu en demandant une réponse en JSONP plutôt qu'en JSON.

Exemple de réponse pour la requête "http://www.myapifilms.com/search?format=JSONP&callback=angular.callbacks._0&title=Titanic" :

	angular.callbacks._0([
	   {
	      "countries":[
	         "USA"
	      ],
	      "directors":[
	         {
	            "name":"James Cameron",
	            "nameId":"nm0000116"
	         }
	      ],
	      "filmingLocations":[
	         "Santa Clarita, California, USA"
	      ],
	      "genres":[
	         "Drama",
	         "Romance"
	      ],
	      "idIMDB":"tt0120338",
	      "languages":[
	         "English",
	         "French",
	         "German",
	         "Swedish",
	         "Italian",
	         "Russian"
	      ],
	      "metascore":"7.7",
	      "plot":"84 years later, a 101-year-old woman named Rose DeWitt Bukater tells the story to her granddaughter Lizzy Calvert, Brock Lovett, Lewis Bodine, Bobby Buell and Anatoly Mikailavich on the Keldysh about her life set in April 10th 1912, on a ship called Titanic when young Rose boards the departing ship with the upper-class passengers and her mother, Ruth DeWitt Bukater, and her fiancé, Caledon Hockley. Meanwhile, a drifter and artist named Jack Dawson and his best friend Fabrizio De Rossi win third-class tickets to the ship in a game. And she explains the whole story from departure until the death of Titanic on its first and last voyage April 15th, 1912 at 2:20 in the morning. Written by Anthony Pereyra <hypersonic91@yahoo.com>",
	      "rated":"PG-13",
	      "rating":"7.7",
	      "releaseDate":"19971219",
	      "runtime":[
	         "194 min"
	      ],
	      "simplePlot":"A seventeen-year-old aristocrat, expecting to be married to a rich claimant by her mother, falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
	      "title":"Titanic",
	      "urlIMDB":"http://www.imdb.com/title/tt0120338",
	      "urlPoster":"http://ia.media-imdb.com/images/M/MV5BMjExNzM0NDM0N15BMl5BanBnXkFtZTcwMzkxOTUwNw@@._V1_SY317_CR0,0,214,317_AL_.jpg",
	      "writers":[
	         {
	            "name":"James Cameron",
	            "nameId":"nm0000116"
	         }
	      ],
	      "year":"1997"
	   }
	]);

Il est à noter que le format de la réponse est suceptible de changer. En effet, depuis notre première utilisation, il y a déjà eu un changement au niveau des "directors" qui n'était qu'un tableau de textes et qui est maintenant un tableau d'objets comprenant un name et un nameId.
Nous souhaitions également utiliser l'urlPoster afin d'afficher le poster du film dans notre site. Cependant, même si l'url est correcte, lorsqu'il est utilisé comme source pour une image de notre site, nous recevons une réponse "403 Forbidden".

-----------------------------------------------------------------------------------------

Bootstrap
Utilisation des classes
	text-center
	text-justify
	clearfix

Application responsive grâce à l'utilisation des classes
	row
	col
	hidden
	visible
et des tailles d'écrans
	xs
	sm
	md
	lg




SASS :
Utilisation d'un mixin pour gérer les border-radius

Utilisation de variables pour les différentes couleurs de background

Utilisation de l'héritage avec 
		.cadre qui est hérité par.cadretri; .cadrecentre; .header>div
		.cadretri qui est hérité par .footer>div

Utilisation du nesting afin de donner des styles particuliers uniquement aux premiers div des classes .header et .footer


AngularJS:
Création des directives
	colonnesDisplay qui affiche les noms des colonnes des tableaux de films 
	filmDisplay qui correspond à une ligne des tableaux de films et affiche les données fournies par l'api
	footerDisplay afin d'afficher le footer. Les liens affichés dans le footer dépendent de la page
colonnesDisplay et filmDisplay affichent le réalisateur si la valeur de show est "true"

Utilisation de 
	ng-include pour inclure la page "header.html" dans chacune des pages du site
	ng-show  et ng-if pour n'afficher certains éléments de nos directives que lorsqu'elles sont utilisées dans certaines pages
	ng-href pour faire les liens entre les pages du site
	ng-repeat afin d'afficher tous les éléments des tableaux reçu par les apis
	ng-click pour gérer les cliques sur les titres des colonnes et trier en fonction de la colonne

Utilisation de filter et orderBy lors de l'affichage des listes de films afin de filtrer selon le nom du film et de trier selon différents critères

Utilisation du routeProvider
Les routes /realisateur/:realisateur et /description/:titre demande respectivement le nom du réalisateur et le titre d'un film en paramètres



