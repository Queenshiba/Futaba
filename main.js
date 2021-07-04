// const images = document.querySelectorAll('img')

// images.forEach(image => {
//     const newURL = image.getAttribute('data-src')
//     image.src = newURL;
// })

// const lpImage = document.getElementById('lp-container-laptop')

// // images.forEach(image => {
//     const newURL = image.getAttribute('data-src')
//     lpImage = newURL;
// // })

// $(function () {
//     var overlay = $('<div id="overlay"></div>');
//     overlay.show();
//     overlay.appendTo(document.body);
//     $('.popup').show();
//     $('.close').click(function () {
//         $('.popup').hide();
//         overlay.appendTo(document.body).remove();
//         return false;
//     });


//     $('.x').click(function () {
//         $('.popup').hide();
//         overlay.appendTo(document.body).remove();
//         return false;
//     });
//     $('.jump').click(function () {
//         $(document).scrollTop($("#campaign").offset().top);
//         $('.popup').hide();
//         overlay.appendTo(document.body).remove();
//         return false;
//     });
// });

let mobileMenuToggler = document.querySelector('input[name=toggler]');
let menuList = document.getElementById("menu-list");
menuList.style.display = "none";
mobileMenuToggler.addEventListener('change', () => {

    if (mobileMenuToggler.checked) {
        // console.log("Checkbox is checked..");
        menuList.style.display = ""
    } else {
        // console.log("Checkbox is not checked..");
        menuList.style.display = "none";
    }
})


// when click a link, close mobile nav

let links = document.getElementsByTagName('a')
let menuItems = document.getElementsByClassName("menu-items");
for (var i = links.length - 1; i >= 0; --i) {
//     if (menuList.style.display === ""){
//         menuList.style.display = "none";
// } else if(menuList.style.display === "none"){
//     menuList.style.display = "";
// }
links[i].addEventListener("click",()=> {
    menuList.style.display = "none"
})
}





window.onscroll = function () { scrollFunction() };
// mobileMenu.checked = false;

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function mapAccess() {
    var myCenter = new google.maps.LatLng(34.78769938041231, 135.3887554620678);
    var mapCanvas = document.getElementById('maps');
    var mapOptions = {
        center: myCenter,
        zoom: 16
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({
        position: myCenter
    });
    marker.setMap(map);
}