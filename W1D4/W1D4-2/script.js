const btn = document.getElementById('mybutton');
console.log(btn)
/* btn.addEventListener('click', function () {
    alert('You Clicked')
}
); */
btn.addEventListener('click', event =>
    alert('Lekker. You Clicked')
);

const bgchange = document.getElementById('changebackground');
console.log(bgchange)
bgchange.addEventListener('click', function () {
    document.body.className = "red-background";

})

/* const bgchange = document.getElementById('changebackground');
bgchange.addEventListener('click', function () {
    document.body.toggle("blue-blackground");
}) */