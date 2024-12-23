# Vanilla-Front-Drumpad



# Drum pad 




# 📺 Présentation


  [Les data-attributes](https://docs.google.com/presentation/d/1dagYqd5kkySCGKv0S-BZ4xJoeHKpkmwKqf2tWztYEjI/edit?copiedFromTrash#slide=id.g74777a247d_0_602)


# 📚️ Ressources


## 
**[Attributs data-* et API dataset - Alsacreations](https://www.alsacreations.com/article/lire/1397-attributs-data-et-api.html)**

**[Use Data Attribute Value on CSS](https://css-tricks.com/css-attr-function-got-nothin-custom-properties/)**

**[Complete Guide Data Attribute CSS](https://css-tricks.com/a-complete-guide-to-data-attributes/)**


## 

  **[JavaScript Event KeyCodes](https://keycode.info/)**


## 


# ⛳ TP Drum Pad

Dans ce TP, nous allons réaliser un clavier numérique en utilisant toutes les notions que nous avons vu sur les transitions et les événements JS.

Vous allez devoir appréhender le code déjà fourni. Analysez-le afin de pouvoir l'utiliser.

Dans ce TP vous n'avez aucun code CSS à ajouter

Vous êtes fortement encouragés à réaliser ce tp en groupe et à partager vos découvertes. Sans entraide et sans collaboration il s’avérera très compliqué !

La compréhension des consignes fait partie de l'exercice \
Petite explication :  \
Créer le code javascript permettant de jouer un son lorsqu'on appuis sur la bonne touche (keycode) du clavier

[Drum Pad Exercice CodePen](https://codepen.io/PedroIdmkr/pen/oOjNqb)


## 


## **Consignes**



* Voici votre point de départ, le but est d'arriver à ce rendu :[ https://i.gyazo.com/b258219bebb02401e6d7f72e76baebda.gif](https://i.gyazo.com/b258219bebb02401e6d7f72e76baebda.gif)
* Dans un premier temps, vous devez construire les 8 autres pad du drumpad
* Attribuez aux touches du pad la lettre correspondante au keycode du clavier de votre ordinateur (en fonction du data-attribute)
* Vous allez devoir faire interagir les balises audio lors de la pression d'une touche de clavier avec les pad que vous avez créées
* Pour ce faire : coder la fonction playSound()
    * cette fonction doit sélectionner la balise audio qui correspond à la bonne touche du clavier
    * elle doit faire jouer le son de cette balise
    * elle doit aussi ajouter l'animation CSS de "pression" du pad qui correspond à sa balise audio (qui est déjà codé dans la partie css)
* Créez un écouteur d’événement capable d'écouter la pression d'une touche de clavier et qui lance la fonction playSound()
* A ce stade, si vous avez réussi le reste, le pad reste "enfoncé" dans le drumpad si vous appuyez sur la touche du clavier.
* Créez la fonction removeTransition() pour gérer ce problème avec un écouteur d’événement qui regarde si un pad a fini son animation.

Comportement attendu :

* Je peux jouer un son à la pression d'un pad même si la lecture de la balise audio n'est pas terminé

## **Consignes formateur**

## Partie 1 Les sons:

➡️  Comprendre qu'ici on gère 3 éléments, les touches de notre clavier (et donc par extension l'évènement JS qu'elles génèrent), les div qui représente virtuellement nos touches, et les audios qui doivent être déclenchés par les évènements.

* Faire apparaître les 9 divs et répercuter les bons data-key (car le data-key est ce qui va nous servir à faire le lien entre l'évènement KeyboardEvent qui a un keyCode, la Div qui représente la touche associé et l'audio).

* Mettre en place un event Keydown, **Pour valider cette étape** : réussir à console.log la div qui est associé à une touche de notre clavier physique, grâce à la paire keyCode/data-key

* Quand Keydown est déclenché, mettre la bonne classe CSS à la div concernée.

* Event Keyup qui retire la classe CSS lorsque l'on relâche une touche.

* Déclencher le son lorsque l'on appuie sur une touche (idéalement le son doit repartir de 0 à chaque fois qu'on le déclenche).

* Résoudre le problème du Keydown qui se déclenche en boucle lorsque l'on laisse appuyer une touche.

* Résoudre le problème d'erreur lorsque l'on appuie sur une touche du clavier qui n'a pas de div associée.

## Partie 2 Record :

* Ajouter une div supplémentaire pour l'option record.

* Cette touche doit avoir un comportement différent des autres :
  - Elle n'a pas de son associé, donc il ne faut pas que notre javascript essaye de lancer un son lorsqu'on la presse.
  - Lorsqu'on la presse une fois, la div reste visuellement enfoncée pour indiquer à l'utilisateur que le record est en cours. Lorsqu'on relâche la touche, elle reste enfoncée virtuellement. lorsque l'on represse une nouvelle fois la touche, elle revient à son état initial

* On a un indicateur visuel comme quoi le record est en cours, mais il faut maintenant un indicateur dans le code ! **Pour valider cette étape** : réussir à console.log l'état du record (`true` quand la div est visuellement enfoncée, et `false` lorsque l'on appuie une nouvelle fois dessus et qu'elle revient à son état initial).

* Lorsque l'enregistrement est en cours, il faut enregistrer les touches qui ont été pressées dans un format de donnée adapté. Lorsque l'on enregistre pas il faut quand même que les sons fonctionnent. **Pour valider cette étape** : réussir à console.log la suite de touche que l'on a utilisé au cours d'un enregistrement.

* Enregistrer de la musique c'est aussi enregistrer un rythme ! **Prochaine étape** : réussir à trouver un format de donnée adapté permettant d'enregistrer la touche pressée et à quel moment exact de l'enregistrement elle a été pressée. (*à Voir* : Date.now et setTimeOut / setInterval). **Pour valider cette étape** : réussir à console.log la suite de touche que l'on a utilisé au cours d'un enregistrement et quand est-ce qu'on a pressé chacune des touches au cours de ce dernier.

➡️  Il ne faut pas hésiter à ce moment du TP, à créer un projet temporaire sur lequel vous pouvez tester uniquement cette histoire de temps, de timer etc... sans être affecté par toute la complexité du Drumpad déjà mise en place (visuellement et mentalement). Pour comprendre comment ça fonctionne et en quoi ça va vous permettre de rejouer les notes correctement. Essayez de déclencher des console.log au bout d'un certain temps par exemple

## Partie 3 Play : 

* Il est **impératif** de consulter les ressources fournis avec le TP concernant l'asynchrone, les Promesses, async, await avant de continuer, passez y un certain temps pour comprendre ceci individuellement du TP, c'est la partie la plus compliqué de l'exercice ! 

* Ajouter une Div pour la fonction Play. Cette div doit avoir visuellement le même comportement que Record, mais l'effet visuel devra s'arrêter lorsqu'il a finis de jouer la suite de note enregistré, et non pas lorsque l'on réappuie sur la touche.

* Faire en sorte que la suite de note enregistrée se joue en asynchrone (c'est-à-dire en arrière-plan, on peut jouer des notes manuellement en parallèle de la fonction Play). **Pour cette étape** : Voir comment déclencher un KeyboardEvent depuis votre code (puisque l'utilisateur ne jouera pas les notes lui-même 😉 )


# 👀 A voir !



* Calculette :[ make a calculator js](https://codepen.io/thaont0810/pen/oPyvKO)
* Simple game :[ game](https://codepen.io/arshdkhn1/pen/QKkvJv)
* Memory game :[ Dinosaur Memory Game🦖](https://codepen.io/dazulu/pen/rQQpgY)


# 🏆 Objectifs



* Comprendre et maîtriser la manipulation CSS et JS des data-attributs
* Comprendre et maîtriser la définition et l'utilisation des évents JS
* Persévérer devant un défi complexe !


# 🧠 A retenir



* Les attributs data-* nous permettent de stocker des informations supplémentaires sur les éléments sémantiques standard (balises html)
* On passe un nom d’événement en premier argument de la méthode addEventListener() puis le nom d’une fonction à exécuter en second argument.
* _e_ est une référence pour l'objet événement qui sera passé aux gestionnaires d'événements. L'objet événement possède essentiellement de nombreuses méthodes et propriétés intéressantes qui peuvent être utilisées dans les gestionnaires d'événements.


