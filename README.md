# portal-front - Le frontend du portail pour tous les besoins d'Itavsa

## Sommaire

- [I - Contexte](#i---contexte)
- [II - Résultats](#ii---résultats)
- [III - Technologies utilisées](#iii---technologies-utilisées)

## I - Contexte

Afin de pouvoir vendre ses produits et services, Itavsa a besoin d'un site web.

C'est ici qu'intervient le portail qui, même s'il ne ressemble pour l'instant qu'à un site marchand comme un autre, pourra évoluer en quelque-chose de bien plus grand.

Le projet *portal-front* s'inscrit dans ce sens en permettant de servir une application Angular communiquant avec [portal-back](https://github.com/Itavsa/portal-back).

## II - Résultats

Capture d'écran de la page (très simple pour le moment, la seule interaction utilisateur possible est la pagination) :
![capture d'écran de la page](documentation/home_screenshot.png)

## III - Technologies utilisées

Cette application a été developpée avec l'aide d'[Angular](https://angular.io/) et [Bootstrap](https://getbootstrap.com/). Elle est packagée sous forme d'image [Docker](https://www.docker.com/).

D'ailleurs, à chaque commit sur la branche `main`, l'image est poussée dans le [registry GitHub associé au projet](https://github.com/Itavsa/portal-front/pkgs/container/portal-front) grâce à une [GitHub Action](https://github.com/Itavsa/portal-front/blob/main/.github/workflows/docker-image.yml).
