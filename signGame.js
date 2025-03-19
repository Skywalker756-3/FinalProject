const zodiacSigns = [
    { id: "aries", img: "images/zodiac/aries.png", planet: "mars" },
    { id: "taurus", img: "images/zodiac/taurus.png", planet: "venus" },
    { id: "gemini", img: "images/zodiac/gemini.png", planet: "mercury" },
    { id: "cancer", img: "images/zodiac/cancer.png", planet: "moon" },
    { id: "leo", img: "images/zodiac/leo.png", planet: "sun" },
    { id: "virgo", img: "images/zodiac/virgo.png", planet: "mercury" },
    { id: "libra", img: "images/zodiac/libra.png", planet: "venus" },
    { id: "scorpio", img: "images/zodiac/scorpio.png", planet: "pluto" },
    { id: "sagittarius", img: "images/zodiac/sagittarius.png", planet: "jupiter" },
    { id: "capricorn", img: "images/zodiac/capricorn.png", planet: "saturn" },
    { id: "aquarius", img: "images/zodiac/aquarius.png", planet: "uranus" },
    { id: "pisces", img: "images/zodiac/pisces.png", planet: "neptune" }
];      

const planets = [
    { id: "mars", img: "images/zodiac/mars.png" },
    { id: "venus", img: "images/zodiac/venus.png" },
    { id: "mercury", img: "images/zodiac/mercury.png" },
    { id: "moon", img: "images/zodiac/moon.png" },
    { id: "sun", img: "images/zodiac/sun.png" },
    { id: "pluto", img: "images/zodiac/pluto.png" },
    { id: "jupiter", img: "images/zodiac/jupiter.png" },
    { id: "saturn", img: "images/zodiac/saturn.png" },
    { id: "uranus", img: "images/zodiac/uranus.png" },
    { id: "neptune", img: "images/zodiac/neptune.png" }
];
//hi
let userMatches = {};

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData("text");
    let zodiacId = data;
    let planetId = event.target.id;

    userMatches[zodiacId] = planetId;
    event.target.innerHTML = document.getElementById(zodiacId).innerHTML;
    document.getElementById(zodiacId).style.display = "none"; // Hide the zodiac image after dropping
}

function checkMatches() {
    let correct = true;
    for (let zodiac in userMatches) {
        if (userMatches[zodiac] !== zodiacSigns.find(z => z.id === zodiac).planet) {
            correct = false;
            break;
        }
    }

    const resultDiv = document.getElementById("result");
    if (correct) {
        resultDiv.innerHTML = "You are correct!";
    } else {
        resultDiv.innerHTML = "Try again!";
    }

    document.getElementById("submitBtn").classList.add("hidden");
    document.getElementById("playAgainBtn").classList.remove("hidden");
}

function resetGame() {
    userMatches = {};
    document.getElementById("result").innerHTML = "";
    const zodiacContainer = document.getElementById("zodiacContainer");
    const planetContainer = document.getElementById("planetContainer");

    // Clear previous content
    zodiacContainer.innerHTML = '';
    planetContainer.innerHTML = '';

    // Shuffle zodiac signs and select 8 random ones
    const shuffledZodiac = shuffleArray([...zodiacSigns]).slice(0, 6);
    
    // Create a list of corresponding planets, allowing duplicates
    const selectedPlanets = shuffledZodiac.map(zodiac => {
        return planets.find(p => p.id == zodiac.planet);
    });

    // Shuffle the corresponding planets to randomize their order
    const shuffledPlanets = shuffleArray(selectedPlanets);

    // Populate the zodiac container
    shuffledZodiac.forEach(zodiac => {
        const zodiacDiv = document.createElement("div");
        zodiacDiv.id = zodiac.id;
        zodiacDiv.className = "zodiac";
        zodiacDiv.draggable = true;
        zodiacDiv.ondragstart = drag;
        zodiacDiv.innerHTML = `<img src="${zodiac.img}" alt="${zodiac.id}">`;
        zodiacContainer.appendChild(zodiacDiv);
    });

    // Populate the planet container
    shuffledPlanets.forEach(planet => {
        const planetDiv = document.createElement("div");
        planetDiv.id = planet.id;
        planetDiv.className = "planet";
        planetDiv.ondrop = drop;
        planetDiv.ondragover = allowDrop;
        planetDiv.innerHTML = `<img src="${planet.img}" alt="${planet.id}">`;
        planetContainer.appendChild(planetDiv);
    });

    document.getElementById("submitBtn").classList.remove("hidden");
    document.getElementById("playAgainBtn").classList.add("hidden");
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Initialize the game on page load
window.onload = resetGame;






const compatibilityData = {
    "aries": { "aries": 75, "taurus": 63, "gemini": 74, "cancer": 47, "leo": 83, "virgo": 42, "libra": 62, "scorpio": 48, "sagittarius": 87, "capricorn": 38, "aquarius": 68, "pisces": 29 },
    "taurus": { "aries": 60, "taurus": 80, "gemini": 70, "cancer": 85, "leo": 65, "virgo": 90, "libra": 75, "scorpio": 80, "sagittarius": 60, "capricorn": 85, "aquarius": 70, "pisces": 75 },
    "gemini": { "aries": 90, "taurus": 70, "gemini": 80, "cancer": 60, "leo": 75, "virgo":  65, "libra": 85, "scorpio": 50, "sagittarius": 95, "capricorn": 60, "aquarius": 90, "pisces": 70 },
    "cancer": { "aries": 70, "taurus": 85, "gemini": 60, "cancer": 80, "leo": 65, "virgo": 75, "libra": 70, "scorpio": 90, "sagittarius": 60, "capricorn": 70, "aquarius": 65, "pisces": 85 },
    "leo": { "aries": 85, "taurus": 65, "gemini": 75, "cancer": 65, "leo": 80, "virgo": 60, "libra": 90, "scorpio": 70, "sagittarius": 95, "capricorn": 55, "aquarius": 80, "pisces": 75 },
    "virgo": { "aries": 65, "taurus": 90, "gemini": 65, "cancer": 75, "leo": 60, "virgo": 80, "libra": 70, "scorpio": 80, "sagittarius": 60, "capricorn": 85, "aquarius": 70, "pisces": 75 },
    "libra": { "aries": 75, "taurus": 75, "gemini": 85, "cancer": 70, "leo": 90, "virgo": 70, "libra": 80, "scorpio": 60, "sagittarius": 85, "capricorn": 65, "aquarius": 90, "pisces": 70 },
    "scorpio": { "aries": 50, "taurus": 80, "gemini": 50, "cancer": 90, "leo": 70, "virgo": 80, "libra": 60, "scorpio": 80, "sagittarius": 65, "capricorn": 75, "aquarius": 60, "pisces": 85 },
    "sagittarius": { "aries": 95, "taurus": 60, "gemini": 95, "cancer": 60, "leo": 95, "virgo": 60, "libra": 85, "scorpio": 65, "sagittarius": 80, "capricorn": 55, "aquarius": 90, "pisces": 70 },
    "capricorn": { "aries": 55, "taurus": 85, "gemini": 60, "cancer": 70, "leo": 55, "virgo": 85, "libra": 65, "scorpio": 75, "sagittarius": 55, "capricorn": 80, "aquarius": 70, "pisces": 60 },
    "aquarius": { "aries": 68, "taurus": 11, "gemini": 85, "cancer": 31, "leo": 89, "virgo": 30, "libra": 68, "scorpio": 30, "sagittarius": 83, "capricorn": 37, "aquarius": 74, "pisces": 38 },
    "pisces": { "aries": 29, "taurus": 88, "gemini": 10, "cancer": 72, "leo": 14, "virgo": 86, "libra": 29, "scorpio": 81, "sagittarius": 50, "capricorn": 76, "aquarius": 38, "pisces": 73 }
};

document.getElementById('checkCompatibilityBtn').addEventListener('click', function() {
    const zodiac1 = document.getElementById('zodiac1').value;
    const zodiac2 = document.getElementById('zodiac2').value;

    if (zodiac1 && zodiac2) {
        const compatibility = compatibilityData[zodiac1][zodiac2];
        document.getElementById('zodiac1Image').innerHTML = `<img src="images/zodiac/${zodiac1}.png" alt="${zodiac1}">`;
        document.getElementById('zodiac2Image').innerHTML = `<img src="images/zodiac/${zodiac2}.png" alt="${zodiac2}">`;
        document.getElementById('compatibilityPercentage').innerText = `Compatibility between ${zodiac1} and ${zodiac2} is ${compatibility}%`;
        document.getElementById('findMoreCompatibilityBtn').classList.remove('hidden');
    } else {
        alert("Please select both zodiac signs.");
    }
});

function resetCompatibility() {
    document.getElementById('zodiac1').selectedIndex = 0;
    document.getElementById('zodiac2').selectedIndex = 0;
    document.getElementById('zodiac1Image').innerHTML = '';
    document.getElementById('zodiac2Image').innerHTML = '';
    document.getElementById('compatibilityPercentage').innerText = '';
    document.getElementById('findMoreCompatibilityBtn').classList.add('hidden');
}