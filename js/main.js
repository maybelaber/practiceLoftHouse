/* Nav icon */
const topRow = document.querySelector(".header__top-row");
const navIcon = document.querySelector(".nav-icon");
const navBtn = document.querySelector(".nav-icon-btn");

navBtn.addEventListener("click", function () {
    topRow.classList.toggle("header__top-row--mobile");
    navIcon.classList.toggle("nav-icon--active");
    document.body.classList.toggle("no-scroll");
});

/* Google Map */
let map;

async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");
    const { Size } = await google.maps.importLibrary("core");

    const position = { lat: 48.83024337813611, lng: 2.256045741968124 }
    const mapElement = document.getElementById("map");
    const image = "./img/map/location-pin.svg";
    const content = `
        <div class="balloon">
            <p class="balloon__address">Наб. реки Фонтанки 10-15</p>
            <div class="balloon__contacts">
                <a href="tel:+15555551234">+1 (555) 555-1234</a>
            </div>
        </div>
        `;

    map = new Map(mapElement, {
        center: position,
        zoom: 14,
        styles: styles,
    });

    addMarker({
        coordinates: position,
        image: image,
        title: "LoftHouse",
        info: content,
    });

    function addMarker(properties) {
        const marker = new google.maps.Marker({
            position: properties.coordinates,
            map: map,
            icon: {
                url: properties.image,
                scaledSize: new google.maps.Size(40, 40),
            },
            title: properties.title,
        });

        if (properties.info) {
            const infowindow = new google.maps.InfoWindow({
                content: properties.info,
            });

            infowindow.open(map, marker);

            marker.addListener("click", () => {
                infowindow.open(map, marker);
            });
        }
    }
}

/* Phone Mask */
mask('[data-tel-input]');

let telInputs = document.querySelectorAll("[data-tel-input]");

telInputs.forEach(input => {
    input.addEventListener("focus", function() {
        if(input.value == "+") input.value = "";
    });

    input.addEventListener("blur", function() {
        if(input.value == "+") input.value = "";
    });
});