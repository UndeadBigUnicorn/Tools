$(window).ready(()=>{

    $("#generate-btn").click(()=>{

        // Add your own words to the wordlist. Be carefull to obey the showed syntax
        var adjectives = ["Cool","Masked","Bloody","Lame", "Fake", "Smoky"]
        var animals = ["Hamster","Moose","Lama","Duck", "Taxi", "Cat"]

        // Random numbers are made
        var randomNumber1 = parseInt(Math.random() * adjectives.length);
        var randomNumber2 = parseInt(Math.random() * animals.length);
        var name = adjectives[randomNumber1] + " " + animals[randomNumber2];          

        document.getElementById("output").innerHTML = name;
    })

   
})