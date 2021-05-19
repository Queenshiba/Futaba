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

$(function () {
    var overlay = $('<div id="overlay"></div>');
    overlay.show();
    overlay.appendTo(document.body);
    $('.popup').show();
    $('.close').click(function () {
        $('.popup').hide();
        overlay.appendTo(document.body).remove();
        return false;
    });


    $('.x').click(function () {
        $('.popup').hide();
        overlay.appendTo(document.body).remove();
        return false;
    });
    $('.jump').click(function () {
        $(document).scrollTop($("#campaign").offset().top);
        $('.popup').hide();
        overlay.appendTo(document.body).remove();
        return false;
    });
});

const mobileMenu = document.getElementById("mobile-menu");
const mobileItems = document.getElementById("menu-items");
mobileItems.childNodes.forEach(child => {
    child.addEventListener("click", () => {
        mobileMenu.checked = false;
    })
})

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
    var myCenter = new google.maps.LatLng(34.786510, 135.389497);
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