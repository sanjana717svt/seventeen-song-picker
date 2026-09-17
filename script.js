const songs = [
    // Comfort Mood
    { name: "Kidult", album: "Heng:garæ", mood: "Comfort" },
    { name: "Our Dawn Is Hotter Than Day", album: "You Make My Day", mood: "Comfort" },
    { name: "Together", album: "Heng:garæ", mood: "Comfort" },
    { name: "Cheers to Youth", album: "17 is Right Here", mood: "Comfort" },
    { name: "Healing", album: "Love & Letter Repackage", mood: "Comfort" },
    { name: "Hug", album: "You Made My Dawn", mood: "Comfort" },
    { name: "Circles", album: "Face the Sun", mood: "Comfort" },
    { name: "Yawn", album: "SEVENTEENTH HEAVEN", mood: "Comfort" },
    { name: "Headliner", album: "SEVENTEENTH HEAVEN", mood: "Comfort" },
    { name: "Heaven's Cloud", album: "Your Choice", mood: "Comfort" },
    { name: "Imperfect Love", album: "Attacca", mood: "Comfort" },
    { name: "Same dream, same mind, same night", album: "Your Choice", mood: "Comfort" },
    { name: "Pinwheel", album: "Teen, Age", mood: "Comfort" },
    { name: "Smile Flower", album: "Al1", mood: "Comfort" },
    { name: "Falling For U", album: "Director's Cut", mood: "Comfort" },
    { name: "All My Love", album: "Semicolon", mood: "Comfort" },
    { name: "Darl+ing", album: "Face the Sun", mood: "Comfort" },
    { name: "IF you leave me", album: "Face the Sun", mood: "Comfort" },
    { name: "Campfire", album: "Teen, Age", mood: "Comfort" },
    { name: "Us, Again", album: "SEVENTEEN", mood: "Comfort" },

    // Happy Mood
    { name: "Aju Nice", album: "Love & Letter Repackage", mood: "Happy" },
    { name: "Ima - Even if the World Ends Tomorrow", album: "Always Yours", mood: "Happy" },
    { name: "Adore U", album: "17 CARAT", mood: "Happy" },
    { name: "Mansae", album: "BOYS BE", mood: "Happy" },
    { name: "Pretty U", album: "LOVE&LETTER", mood: "Happy" },
    { name: "Oh My!", album: "You Made My Dawn", mood: "Happy" },
    { name: "Snap Shoot", album: "An Ode", mood: "Happy" },
    { name: "_WORLD", album: "Sector 17", mood: "Happy" },
    { name: "Left & Right", album: "Heng:garæ", mood: "Happy" },
    { name: "Rock with you", album: "Attacca", mood: "Happy" },
    { name: "Holiday", album: "Teen, Age", mood: "Happy" },
    { name: "Run to You", album: "Director's Cut", mood: "Happy" },
    { name: "Beautiful", album: "Going Seventeen", mood: "Happy" },
    { name: "20", album: "17 CARAT", mood: "Happy" },
    { name: "Do Re Mi", album: "Semicolon", mood: "Happy" },
    { name: "Thinkin' about you", album: "Director's Cut", mood: "Happy" },
    { name: "Q&A", album: "Q&A (Single)", mood: "Happy" },
    { name: "Fighting", album: "SECOND WIND", mood: "Happy" },
    { name: "God of Light Music", album: "God of Light Music", mood: "Happy" },
    { name: "Lucky", album: "An Ode", mood: "Happy" },

    // Hype Mood
    { name: "Super", album: "FML", mood: "Hype" },
    { name: "Clap", album: "Teen, Age", mood: "Hype" },
    { name: "Getting Closer", album: "You Made My Dawn", mood: "Hype" },
    { name: "Fear", album: "An Ode", mood: "Hype" },
    { name: "Fearless", album: "Heng:garæ", mood: "Hype" },
    { name: "HIT", album: "An Ode", mood: "Hype" },
    { name: "HOT", album: "Face the Sun", mood: "Hype" },
    { name: "March", album: "Face the Sun", mood: "Hype" },
    { name: "MAESTRO", album: "17 Is Right Here", mood: "Hype" },
    { name: "LALALI", album: "17 Is Right Here", mood: "Hype" },
    { name: "Ash", album: "Face the Sun", mood: "Hype" },
    { name: "Crush", album: "Attacca", mood: "Hype" },
    { name: "Anyone", album: "Your Choice", mood: "Hype" },
    { name: "PANG!", album: "Attacca", mood: "Hype" },
    { name: "BoomBoom", album: "Going Seventeen", mood: "Hype" },
    { name: "Back it up", album: "An Ode", mood: "Hype" },
    { name: "Fire", album: "FML", mood: "Hype" },
    { name: "Cheers", album: "Sector 17", mood: "Hype" },
    { name: "Shining Diamond", album: "17 CARAT", mood: "Hype" },
    { name: "CALL CALL CALL!", album: "WE MAKE YOU", mood: "Hype" },

    // Emotional Mood
    { name: "Home", album: "You Made My Dawn", mood: "Emotional" },
    { name: "Thanks", album: "Director's Cut", mood: "Emotional" },
    { name: "Don't Wanna Cry", album: "Al1", mood: "Emotional" },
    { name: "To You", album: "Attacca", mood: "Emotional" },
    { name: "Second Life", album: "An Ode", mood: "Emotional" },
    { name: "Habit", album: "Going Seventeen", mood: "Emotional" },
    { name: "Don't Listen in Secret", album: "Going Seventeen", mood: "Emotional" },
    { name: "Without You", album: "Teen, Age", mood: "Emotional" },
    { name: "Lie Again", album: "An Ode", mood: "Emotional" },
    { name: "I Don't Know", album: "Going Seventeen", mood: "Emotional" },
    { name: "When I Grow Up", album: "BOYS BE", mood: "Emotional" },
    { name: "Fallin' Flower", album: "Fallin' Flower", mood: "Emotional" },
    { name: "Ready to love", album: "Your Choice", mood: "Emotional" },
    { name: "Love Letter", album: "Love & Letter", mood: "Emotional" }
];

const button = document.getElementById("pick-song-btn");
const moodMessage = document.getElementById("mood-message");
const songTitle = document.getElementById("song-title");
const songAlbum = document.getElementById("song-album");
const songMood = document.getElementById("song-mood");
const songCard = document.getElementById("song-card");
let selectedMood = null;

const moodButtons = document.querySelectorAll(".mood-btn");

moodButtons.forEach(function (moodButton) {

    moodButton.addEventListener("click", function () {

        selectedMood = moodButton.dataset.mood;

        moodButtons.forEach(function (button) {
            button.classList.remove("selected");
        });

        moodButton.classList.add("selected");
        moodMessage.classList.remove("show");

        console.log(selectedMood);

    });

});

button.addEventListener("click", function () {

    if (selectedMood === null) {
        moodMessage.textContent = "Pick a mood first! 🥺";
        moodMessage.classList.add("show");
        return;
    }

    const filteredSongs = songs.filter(function (song) {
        return song.mood === selectedMood;
    });

    const randomIndex = Math.floor(Math.random() * filteredSongs.length);
    const randomSong = filteredSongs[randomIndex];
    songTitle.textContent = randomSong.name;
    songAlbum.textContent = randomSong.album;
    songMood.textContent = `Mood: ${randomSong.mood}`;
    songCard.className = `song-card ${randomSong.mood.toLowerCase()}`;
    songCard.classList.remove("change");
    void songCard.offsetWidth;
    songCard.classList.add("change");

    console.log(randomSong);
});