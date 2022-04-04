document.querySelector("#check").addEventListener("click", check);

const christmas = "The Nightmare Before Christmas";

function check() {
    const christmas = document.querySelector("#christmas").value.toLowerCase();
    //conditionals
    if(christmas == "the nightmare before christmas" || christmas == "nightmare before christmas") {
        document.querySelector("#placeToSee").innerText = "What's this? What's this?!";

document.querySelector("body").style.backgroundImage = "url('https://media0.giphy.com/media/11vPVDtI88cMHS/giphy.gif')";
        
    } else if (christmas == "elf") {
        document.querySelector("#placeToSee").innerText = "The best way to spread Christmas cheer is singing loud for all to hear.";

        document.querySelector("body").style.backgroundImage = "url('https://media0.giphy.com/media/l2YWluoNgk342F3k4/giphy.gif')";
    } else if(christmas == "die hard") {
        document.querySelector("#placeToSee").innerText = "Got invited to the Christmas party by mistake. Who knew?";

        document.querySelector("body").style.backgroundImage = "url('https://www.top10films.co.uk/img/die-hard-christmas-gif1.gif')";
    } else if(christmas == "scrooged") {

        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://64.media.tumblr.com/93e18a30dc1ba3c4882c760cc2e8e187/tumblr_oiph2vm95i1qzx4bjo1_500.gifv')";
    } else if(christmas == "national lampoon's christmas vacation" || christmas == "christmas vacation") {
        document.querySelector("#placeToSee").innerText = "Do you hear it? It's a funny, squeaky sound!";

        document.querySelector("body").style.backgroundImage = "url('https://c.tenor.com/v0z-dVr0opkAAAAC/christmas-squirrel.gif')";
    } else if(christmas == "it's a wonderful life" || christmas == "its a wonderful life") {
        
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://31.media.tumblr.com/c48c7ba709e3629af5dcd885a9a20939/tumblr_nljpjwhuI21qbljqoo1_500.gif')";
        
    } else if(christmas == "home alone") {
        document.querySelector("#placeToSee").innerText = "He's a kid. Kids are stupid.";

        document.querySelector("body").style.backgroundImage = "url('https://media.giphy.com/media/nO4TyQx3Be8pi/giphy.gif')";
    } else if(christmas == "gremlins") {
        document.querySelector("#placeToSee").innerText = "There are some rules that you've got to follow.";

        document.querySelector("body").style.backgroundImage = "url('https://media2.giphy.com/media/ERCTG4DPik4W4/giphy.gif')";
    } else if(christmas == "miracle on 34th street") {
        document.querySelector("#placeToSee").innerText = "Your Honor, every one of these letters is addressed to Santa Claus. The Post Office has delivered them. Therefore the Post Office Department, a branch of the Federal Government, recognizes this man Kris Kringle to be the one and only Santa Claus.";

        document.querySelector("body").style.backgroundImage = "url('https://media0.giphy.com/media/NqIjC1zDiZm0g/giphy.gif?cid=ecf05e47o0k5j0idq67eqw0c1xb2urm2mffv5e8kz5j8vyjp&rid=giphy.gif&ct=g')";
    } else if(christmas == "the snowman") {
        document.querySelector("#placeToSee").innerText = "I remember that winter because it had brought the heaviest snows I had ever seen. Snow had fallen steadily all night long and in the morning I woke in a room filled with light and silence, the world seemed to be held in a dream-like stillness. It was a magical day... [brief pause] ...and it was on that day I made the snowman";
        document.querySelector("body").style.backgroundImage = "url('https://i.makeagif.com/media/11-24-2015/FyAHw-.gif')";
    } else if(christmas == "santa claus is comin’ to town" || christmas == "santa claus is coming to town") {
        document.querySelector("#placeToSee").innerText = "And that is the story of Santa Claus.";
        document.querySelector("body").style.backgroundImage = "url('https://c.tenor.com/rZJxTMvbWmAAAAAM/santa-claus-is-coming-to-town-christmas-music.gif')";
    } else if(christmas == "office christmas party") {
        document.querySelector("#placeToSee").innerText = "Can this thing handle snow?";
        document.querySelector("body").style.backgroundImage = "url('https://thumbs.gfycat.com/MelodicAccurateAltiplanochinchillamouse-max-1mb.gif')";
    } else if(christmas == "batman returns") {
        document.querySelector("#placeToSee").innerText = "You're catnip to a girl like me. Handsome, dazed, and to die for";
        document.querySelector("body").style.backgroundImage = "url('http://38.media.tumblr.com/b51536b01344d24ef994a9864887c2ed/tumblr_nxpspsM9ha1rp0vkjo1_500.gif')";
    } else if(christmas == "just friends") {
        document.querySelector("#placeToSee").innerText = "You don't need to show off to impress Jamie. You should just be yourself.";
        document.querySelector("body").style.backgroundImage = "url('https://thumbs.gfycat.com/HardtofindComposedGoldenretriever-max-1mb.gif')";
    } else if(christmas == "krampus") {
        document.querySelector("#placeToSee").innerText = " It started with the wind, on a cold night, much like this";
        document.querySelector("body").style.backgroundImage = "url('https://64.media.tumblr.com/10efd25ac8cae549cc8fe3024dd973b7/c64deee8d0a5c478-c7/s500x750/3bfabe9064e5c561d5a8b0978536a88fba3fbfdf.gifv')";
    } else if(christmas == "happiest season") {
        document.querySelector("#placeToSee").innerText = " I am done being scared and I am done keeping secrets";
        document.querySelector("body").style.backgroundImage = "url('https://64.media.tumblr.com/c8ab9819ea886b52d9ee92e9d7205809/fb73abbe39e57346-46/s540x810/1365eb5f5a6990b1cf24a240228c303920766f1b.gifv')";
    } else if(christmas == "jingle all the way") {
        document.querySelector("#placeToSee").innerText = "Where's your Christmas spirit?";
        document.querySelector("body").style.backgroundImage = "url('https://c.tenor.com/VxMBGlcdOTkAAAAC/jingle-all-the-way-arnold-schwarzenegger.gif')";
    } else if(christmas == "a christmas carol" || christmas == "christmas carol") {
        document.querySelector("#placeToSee").innerText = "God bless us, every one.";
        document.querySelector("body").style.backgroundImage = "url('https://images.squarespace-cdn.com/content/v1/5c90fd14b91449766edf8978/1576558214241-SULU5PV2F484DGN4TK0L/fredtimslide.gif')";
    } else if(christmas == "the holiday") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://i.gifer.com/QpNE.gif')";
    } else if(christmas == "home for the holidays") {
        document.querySelector("#placeToSee").innerText = "Claudia, you and Mr Fish take Aunt Gladdy home before they start singing again";
        document.querySelector("body").style.backgroundImage = "url('https://i.gifer.com/2TjH.gif')";
    } else if(christmas == "love, actually" || christmas == "love actually") {
        document.querySelector("#placeToSee").innerText = "Worse than the total agony of being in love?";
        document.querySelector("body").style.backgroundImage = "url('https://i.gifer.com/WRRb.gif')";
    } else if(christmas == "mixed nuts") {
        document.querySelector("#placeToSee").innerText = "Well I'm simply crushed. Here I have waited my whole life for you, and now you don't even want me. Do go on!";
        document.querySelector("body").style.backgroundImage = "url('https://i.makeagif.com/media/12-09-2015/Uuez3x.gif')";
    } else if(christmas == "deck the halls") {
        document.querySelector("#placeToSee").innerText = "That's what Christmas memories are made from, they're not planned, they're not scheduled, nobody puts them in their Blackberry, they just happen";
        document.querySelector("body").style.backgroundImage = "url('https://1.bp.blogspot.com/-lAYNZy57dlU/W9OFpoDHk4I/AAAAAAAABq8/1aJlX-n7bo4fkqdjqT9DnYoainV3tRQZgCLcBGAs/s640/deckthehall8.gif')";
    } else if(christmas == "the family stone" || christmas == "family stone") {
        document.querySelector("#placeToSee").innerText = "Don't be a jerk. I said Merry Christmas";
        document.querySelector("body").style.backgroundImage = "url('https://c.tenor.com/odXZKXyGquwAAAAd/rachel-mcadams-the-family-stone.gif')";
    } else if(christmas == "edward scissorhands") {
        document.querySelector("#placeToSee").innerText = "Well, this must be quite a change for you, right, Ed?";
        document.querySelector("body").style.backgroundImage = "url('https://c.tenor.com/XUi_YvkaIeAAAAAC/johnny-depp-edward-scissorhands.gif')";
    } else if(christmas == "the santa clause" || christmas == "santa clause") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://media0.giphy.com/media/ULiFq6v8tNuXVMWAYw/200.gif')";
    } else if(christmas == "the polar express" || christmas == "polar express") {
        document.querySelector("#placeToSee").innerText = " I believe";
        document.querySelector("body").style.backgroundImage = "url('https://i.makeagif.com/media/11-23-2016/vyYoAE.gif')";
    } else if(christmas == "how the grinch stole christmas") {
        document.querySelector("#placeToSee").innerText = "It's because I'm green, isn't it?";
        document.querySelector("body").style.backgroundImage = "url('https://i.gifer.com/Qxm.gif')";
    } else if(christmas == "black christmas") {
        document.querySelector("#placeToSee").innerText = "You know, you're a better sister to me than my own sister";
        document.querySelector("body").style.backgroundImage = "url('https://31.media.tumblr.com/61500deb8fe6fa51815bd702851fabe7/tumblr_mycqgaMqbE1qzr7woo1_400.gif')";
    } else if(christmas == "little women") {
        document.querySelector("#placeToSee").innerText = "We bare our souls and tell the most appalling secrets";
        document.querySelector("body").style.backgroundImage = "url('https://media0.giphy.com/media/ybDxejP46KRPy/giphy.gif')";
    } else if(christmas == "meet me in st. louis") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://i.gifer.com/C9tX.gif')";
    } else if(christmas == "rudolph the red-nosed reindeer") {
        document.querySelector("#placeToSee").innerText = "Aren't you going to laugh at my nose, too?";
        document.querySelector("body").style.backgroundImage = "url('https://media4.giphy.com/media/3o6ZtmXk8oHSaGm8Ss/giphy.gif')";
    } else if(christmas == "a charlie brown christmas" || christmas == "charlie brown christmas") {
        document.querySelector("#placeToSee").innerText = "Dear Santa Claus, How have you been?";
        document.querySelector("body").style.backgroundImage = "url('https://i.gifer.com/L0T.gif')";
    } else if(christmas == "white christmas") {
        document.querySelector("#placeToSee").innerText = "When what's left of you gets around to what's left to be gotten, what's left to be gotten won't be worth getting, whatever it is you've got left.";
        document.querySelector("body").style.backgroundImage = "url('https://i.gifer.com/CISq.gif')";
    } else if(christmas == "the muppet christmas carol" || christmas == "muppet christmas carol") {
        document.querySelector("#placeToSee").innerText = "I, I will honour Christmas, and try to keep it all the year! I will live my life in the past, the present, and the future.";
        document.querySelector("body").style.backgroundImage = "url('https://media3.giphy.com/media/1mhj4m6LAv7Aua2BVX/giphy.gif?cid=ecf05e47f567c8ee2765f5ce5e444d96ad8d9359ab3d11ff&rid=giphy.gif')";
    } else if(christmas == "a christmas  story" || christmas == "christmas story") {
        document.querySelector("#placeToSee").innerText = "I triple dog dare you!";
        document.querySelector("body").style.backgroundImage = "url('http://media.giphy.com/media/CzuGlqZJyG26k/giphy.gif')";
    } else if(christmas == "you've got mail") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://cdn.quotesgram.com/img/20/17/1373790379-901-Youve-Got-Mail-quotes.gif')";
    } else if(christmas == "christmas in connecticut") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://64.media.tumblr.com/11908ee4dfc09c8dfb5a12d8aa88d1f0/4f9208317648a75c-76/s500x750/47b09e6aa870d7fa3e961a77ff22f1e5f5b4d0b3.gifv')";
    } else if(christmas == "home alone 2") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://i.pinimg.com/originals/e6/90/39/e690390cff5beae76d2af64ee3ff23cf.gif')";
    } else if(christmas == "the bishop's wife" || christmas == "bishop's wife") {
        document.querySelector("#placeToSee").innerText = "There are few people who know the secret of making a heaven here on earth. You are one of those rare people";
        document.querySelector("body").style.backgroundImage = "url('https://mattsko.files.wordpress.com/2012/12/xmas4553.gif')";
    } else if(christmas == "holiday inn") {
        document.querySelector("#placeToSee").innerText = "You better go inside, it's cold and you don't have a coat";
        document.querySelector("body").style.backgroundImage = "url('https://i.gifer.com/5heT.gif')";
    } else if(christmas == "trading places") {
        document.querySelector("#placeToSee").innerText = "That's called the 'quart of blood' technique";
        document.querySelector("body").style.backgroundImage = "url('https://media4.giphy.com/media/yoJC2pg5f2YxxFw2pW/200.gif')";
    } else if(christmas == "the shop around the corner" || christmas == "shop around the corner") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://thumbs.gfycat.com/TerribleUnevenAyeaye-max-1mb.gif')";
    } else if(christmas == "frosty the snowman") {
        document.querySelector("#placeToSee").innerText = "Cause when the thermometer gets all reddish, the temperature goes up. And when the temperature goes up, I start to melt! And when I start to melt, I get all wishy-washy.";
        document.querySelector("body").style.backgroundImage = "url('https://c.tenor.com/rWwPA1skP8oAAAAC/frosty-the-snowman-sing-and-dance.gif')";
    } else if(christmas == "mickey's christmas carol") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://i.pinimg.com/originals/68/a0/09/68a0095392e624eb30a6b28650ecac0a.gif')";
    } else if(christmas == "better watch out") {
        document.querySelector("#placeToSee").innerText = "Luke, truth or dare.";
        document.querySelector("body").style.backgroundImage = "url('https://64.media.tumblr.com/6e96ad1ee785e95eb5a394e4eab846ef/e784979e584d4ee7-b6/s540x810/0761e134bce0467154aa6b9578bd09ff7196118b.gifv')";
    } else if(christmas == "harry potter and the sorcerer's stone") {
        document.querySelector("#placeToSee").innerText = "Oh, no, she's made you a Weasley sweater";
        document.querySelector("body").style.backgroundImage = "url('https://img.buzzfeed.com/buzzfeed-static/static/2019-12/23/13/asset/d81f210c4662/anigif_sub-buzz-4835-1577106872-1.gif')";
    } else if(christmas == "stepmom") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://i.pinimg.com/originals/88/c9/82/88c9826c12a908390d82a8a01922c63a.gif')";
    } else if(christmas == "the santa clause 2") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://y.yarn.co/3d9e01a4-dc93-4bca-91fe-010c31443751_text.gif')";
    } else if(christmas == "harry potter and the goblet of fire") {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://i.pinimg.com/originals/1e/f4/f7/1ef4f7063ff1f98cebab4436bc53f2b9.gif')";
    } else {
        document.querySelector("#placeToSee").innerText = "";
        document.querySelector("body").style.backgroundImage = "url('https://c.tenor.com/Y7zNoHbLEasAAAAd/burning-fireplace-fire.gif')";
    }



}

