$(document).ready(function(){
    console.log("JS loaded");

var app = document.getElementById('typewriterHeader');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Welcome.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('You have found...')
    .pauseFor(1500)
    .deleteAll()
    .typeString('My little slice of the internet!')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Stay awhile.')
    .pauseFor(1500)
    .start();

var ultimateFan = document.getElementById('typewriterUltimateFan');

var ultimateFanTW = new Typewriter(ultimateFan,{
    delay:50,
    loop: true
});

ultimateFanTW.typeString('Trivia game about athletes from multiple categories. Users must login to play. Passwords are hashed and salted with bcrypt.')
    .pauseFor(2000)
    .deleteAll()
    .typeString('All trivia questions were generated through webscraping with BeautifulSoup4. Trivia answers were then censored before being written and saved as csv files and inserted into the SQL database.')
    .pauseFor(2000)
    .deleteAll()
    .typeString('<strong>Warning</strong>')
    .typeString(' Prescott beat Chuck Noris in an push-up contest while converting CSS to SASS, no Chuck Norises where harmed in the production of UltimateFan.')  
    .pauseFor(2500)
    .start();

    

});
    