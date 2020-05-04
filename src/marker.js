const mapbox = require('mapbox-gl');

const iconURLs = {
    hotels: "http://i.imgur.com/D9574Cu.png",
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activities: "http://i.imgur.com/WbMOfMl.png"
};

const buildMarker = function(type, coords){
    let URL;
    if(type === 'activity') URL = iconURLs.activities;
    else if(type === 'hotel') URL = iconURLs.hotels;
    else if(type === 'restaurant') URL = iconURLs.restaurants;

    const mapDOMEl = document.createElement('div');
    mapDOMEl.style.width = '32px';
    mapDOMEl.style.height = '39px';
    mapDOMEl.style.backgroundImage = `url(${URL})`;

    return new mapbox.Marker(mapDOMEl).setLngLat(coords)
}

module.exports = buildMarker;