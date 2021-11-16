var myFirstString = 'Ez "egy" string';
var mySecondString = "Ez is 'egy' string";
var mmyThirdString = `
ez
is
'egy'
"string"
ami több soros
`;

var myFirstNumber = 0;
var mySecondNumber = 35;
var myThirdNumber = 7478999;

var myFirstBolean = true;
var mySecondBolean = false;

var myFirstArray = ["1984", "Lord of hte rings", "Mester és Margarita", "Galaxis útikalauz stopposoknak", "Vita Brevis"];

var mySecondArray = [1984, "Lord of hte rings", "Mester és Margarita", "Galaxis útikalauz stopposoknak", "Vita Brevis"];

var myFirstObject = {
    title: "Lord of the ring",
    publicationDate: 1954,
    traslation: ["hu", "de", "fr", "jp"]
};

console.log(myFirstArray[0]);
console.log(myFirstObject.title);
console.log(myFirstObject["title"]);

var a = 1;
var b = 2;
var c = a + b;
console.log(c);
function add(firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber);
}

add(1,2);  // itt fog az függvény lefutni
add(17948, 18773);

var substraction = function(a, b) {
    if (a>b) 
    {console.log(a-b);} 
    else if (a==b) {
        console.log("A két szám egyenlő");
    }
    else {
        console.log(b-a);
    }
}
substraction(3,6);
substraction("15",15);
add("15", 15); //nem konvertálja a stringet számmá
add("Nyitva ", "tartás"); //nem konvertálja a stringet számmá
substraction("Nyitva","tartás");

function isElseCheck (text) {
    if (text === "hello") {
        constol.log("text az hello volt");
    } else if (text === "hello") {          //ez az ág nem fut le, mert az első if igaz volt és kiugrik a függvény a végére
        constol.log("text megint az volt, hogy hello");
    }

    if (text==="hello")
        constol.log("Ez újra text");  //lefut, mert külön if ág
}
isElseCheck("hello");

function compare(a,b) {
    console.log("== ", a==b);
    console.log("=== ", a===b);
    var c = a+b;
    console.log(typeof c);
}

compare("1984", 1984);

myFirstFuctionVariable = function() {
    console.log("ez egy függvény, amit változóban tároltunk el");
}

myFirstFuctionVariable();

(function() {
    console.log("mikor fut le?")  //azonnal lefut immediatly invoked function, nem kell külön meghívni
}()); // ez itt egyben a meghívás is const, let változók előtti időkből

var anotherVar = myFirstFuctionVariable();  // fv neve után a zárójel ledfuttatja
console.log(typeof anotherVar);  //fv letutása után kiürül a változó tartalma, ezért lesz undefined

var anotherVar2 = myFirstFuctionVariable;  // nem fut le, mert nincs meghívva, mert hiányzik a zárójelpár, csak átadjuk a fv-t
anotherVar2();    // lefut
console.log(typeof anotherVar2); // de korábban lett átadva, ezért írja ki, hogy fv

// fv argumentumként is át lehet adni egy másik fv.nek

function theLastFunction(obj1, obj2) {
    console.log("Első paraméter értéke:", obj1);       // itt csak kíírta, amit beeírtun
    console.log("Első paraméter típus: ", typeof obj1);
    console.log("Második paraméter értéke: ", obj2);     
    console.log(typeof obj1);
    console.log(obj2());  // itt meghívja az anoním fv-t
}
theLastFunction("hello", function () {
    return "I'm calling the last function"
});
/* 
var window = {
    addEventListener: function (eventName, eventFunction) {
        ...
    }
}
*/
window.addEventListener("load", function () {
    console.log("Az oldal betöltődött");
});