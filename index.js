function ispisi(unos) {
    console.log("DEBUG------" + unos);
}

ispisi("nešto ispiši na konzolu");


/* zad 1.*/

var myNiz = ["ime", "prezime", "godine", "broj cipela", "itd"];

function pronadiNajduzuRijec (niz) {
    
    var najduzaRijec = "";
    var duljina = 0;

    for(var clanNiza of niz){
        if(clanNiza.length > duljina){
            duljina = clanNiza.length;
            najduzaRijec = clanNiza;
        }

    };

    return najduzaRijec;
};

var najduzaRijec = pronadiNajduzuRijec(myNiz);

console.log(najduzaRijec);

/*zad 2. */

function getMarks(a, b) {

   if(typeof a !== "number" || typeof b !== "number") {
    return "nisu svi parametri brojevi";
   }

   if(a === b) {
    return a;
   }

   if(a > b) {
    return a;
   }

   return b;
}

console.log(getMarks(3,999));

/*3.zad */

function zbroj(a, b) {

    if(typeof a !== "number" || typeof b !== "number") {
        return "nisi uvrstio dva broja!";
    }
    let zbroj = a + b;
    return zbroj;
}

zbroj(1,2);

console.log(zbroj(1, 2));

/* 4.zad*/

function pomnoziDvaBroja(a, b) {
    return a * b;
}

console.log(pomnoziDvaBroja(32,4));

