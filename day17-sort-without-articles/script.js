const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

// funtion to strip a / an / the .
function strip(bandName){
    return bandName.replace(/^(a |the |an )/i, '').trim();
}

// sort band names
const sortedBands = bands.sort((a,b) => strip(a) > strip(b) ? 1 : -1);

const bandsHTML = document.getElementById('bands');
bandsHTML.innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('');
