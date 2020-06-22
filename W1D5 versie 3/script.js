/* Hier komt een eventListener, die bij een click op het element met de class btn-nav, 
de visibility van het element met het ID nav-sidebar verandert naar visible. (En weer togglet naar invisible)
 */



/* const navToggle = document.getElementsByClassName("btn-nav");

navToggle.addEventListener("click", function () {
    visible.style.visibility = visible;
}
) */

//NIEUWE POGING

const navToggle = document.QuerySelector(".btn-nav");

navToggle.addEventListener("click", function () {
    document.aside.style.visibility = "visible";
})

/* Hier komt het deel waarbij de body background-color verandert van kleur.*/

/* const chColor = document.QuerySelector(".red", li);


chColor.addEventListener("click", function () {
    document.getElementsByClassName("red").style.backgroundColor = "red";
  }) */

const chColor = document.QuerySelector(".red", li);


chColor.addEventListener("click", function () {
    document.getElementsByClassName("red").style.backgroundColor = "red";
})