/* console.log(typ) - tu nie zadziala ponieważ 
kod dziala z góry na dół i
zmienna nie została jeszcze utworzona */
console.log("Start");
2 + 2; //niewidoczne
2 + "3"; //niewidoczne
let result = 3 + 3;
console.log(result);
"tekst".toUpperCase(); //niewidoczne
console.log("tekst".toUpperCase());
console.log(2 + "3");
console.log("3" + 2);
let result1 = "3" + 3; //to jest string
console.log(result1);
let typ = typeof (result1);
console.log(typ)

// Typu Danych #############################################

// String

let napis = "string";
let typNapisu = typeof napis;
console.log(typNapisu);
typeof `to tez jest string`;

//Number - liczba (nie ma podziału na int, float, decimal)

let liczbaPierwsza = 222.222;
let typLiczby1 = typeof liczbaPierwsza;
console.log(typLiczby1);

let liczbaDruga = NaN; // to też jest liczba
let typLiczby2 = typeof liczbaDruga;
console.log(typLiczby2);

// Boolean - wartość logiczna

let zmiennaLogiczna = true;
let typLogiczny = typeof zmiennaLogiczna;
console.log(typLogiczny);


let zmiennaLogicznaWynik = (2 == 3);
let typLogicznyWynik = typeof zmiennaLogicznaWynik;
console.log(typLogicznyWynik);

// Undefined - niezdefiniowany (jedna wartość)
//najczęściej tworzone przez język

let zmiennaUndefined;
console.log(typeof zmiennaUndefined);

//Null

let zmiennaNull = null;
console.log(typeof zmiennaNull); // typ object ale definiowane jako błąd

//Symbol (nowy typ od ES6)

typeof Symbol();

//Obiekty 

typeof {};
typeof

function () {}; // zwraca function ale function tez jest obiektem
typeof [];

// Przypisanie wartości i przypisanie referencji do obiektu
let primitiveType1 = 20;
let primitiveType2 = primitiveType1; //Tworzona jest kopia, wartość identyczna, ale nie ta sama (jest to idealna kopi wartość, ale stanowiaca już osobną wartość)

//W wyniku tych dwóch instrukcji powyżej powstają dwie zmienne które mają warrości 20. Są to dwie wartości 20 (a nie jedna ta sama przypisana do obu zmiennych)

primitiveType1 = 30;
console.log(primitiveType2);
// Ponieważ wartość została skopiowana i obie zmienne mają rózne wartości, to przypsiania nowej wartośic do zmiennej primitiveType1 nie wpływa na zmienną primitiveType2. Nie ma miedzy nimi żadnego połączenia (wcześniej została tylko skopiowana wartość - tylko tyle)


const referenceValue1 = [1, 2, 3];
const referenceValue2 = referenceValue1;
//Tylko jeden obiekt istnieje. Nie ma tu kopii obiektu jak przy typach prostych. Tu kopiujemy tylko referencje (dlatego typ referencyjny) do miesjca w pamięci (adres). Obie zmienne nie przechowują tego obiektu tylko jakby link do niego.

// Praca z tym samym obiektem na obu zmiennych. Nie ma znaczenie na której coś zmieniamy, bo obie prowadzą do tego samego. Nie tworzymy tu nowego obiektu tylko dokonujemy zmian w jednym już utworzonym (przy deklaracji referenceValue1) 
referenceValue1[3] = 4;
referenceValue2[4] = 10;

console.log(referenceValue1);
console.log(referenceValue2);
//Obiekt nie została skopiowany, a został przypisany jedynie link do miejsca w pamięci, w którym się znajduje.


//Zmienne ###################################


/* CO TO JEST ZMIENNA */
// Zmienne to sposób na zapisanie danych w pamięci, tak by móc te dane wykorzystać w programie.


/* TRZY ATRYBUTY ZMIENNEJ W JS */
// 1. Nazwa
// 2. Miejsce w pamięci (prowadzi do niego identyfikator, którym jest nazwa)
// 3. Wartość
// (4.) Możemy jeszcze dodać jeden atrybut, którym jest czas życia. Czas życia zmiennej jest zależny od miejsca gdzie stworzona jest dana zmienna (globalna i lokalna) - o tym porozmawiamy sobie przy materiale o scope (zakres)


/* CZY ZMIENNA MA TYP? Cze zmienna jest typu string, number, itd?*/
// W wielu językach tak, ale nie w JavaScript. W JavaScript to wartość ma typ a nie zmienna. Wraz z deklaracją nie podajemy typu zmiennej. Gdyby JS upodobnić do innych popularnych języków programowania to mogłoby to wyglądać tak:
// let float idUser = 76.2;
// gdzie float byłby informacją, że zmienna przechowuje wartość zmiennoprzecinkową.
// Ale tak nie jest, a wygląda tak, bez podawania wartości
let idUser = 76;
// Przy czym TYPY W JSISTNIEJĄ, ale są nadawane dynamicznie, czyli przez interpreter podczas wykonywania programu (mówimy o typowaniu dynamicznym, w przeciwieństwie do typowania statycznego, czyli nadawania typu w kodzie jak w tym przykładzie z float). Pamiętajmy jednak, że to nie tworzona zmienna ma typ np.number a właśnie wartość. Zmienna tylko przechowuje wartośc.

// Operator typeof zwraca nam informacje o typie wartości przechowywanej w zmiennej

/* NAZWA ZMIENNEJ */
// - po angielsku (używaj translatora jeśli znasz słabo)
// - niech oznacza to czym jest / do czego jest / czym się zajmuje
// - notacja wielbłądzia (rekomendowane) przykład: notacjaWielbladzie
// - słowa zarezerowane - ich nie używamy jako nazwy zmiennej (lista poniżej)
// - brak spacji, brak myślnika, cyfra nie może być na początku (moze być dalej)
// - można z dużej litery zacząć i używać ich w naziwe (wielkość liter znaczenie), można używać podkreślenia (_) i znaku $

/* DEKLARACJA ZMIENNEJ I PRZYPISANIE WARTOŚCI (DWIE INSTRUKCJE) */

// Deklaracja - sama deklaracja oznacza stworzenie zmiennej, ale też przypisania do zmiennej wartości undefined
let firstLetterUserName;
// Przypisania wartości do zmiennej może nastąpić w innej instrukcji. Przypisać wartość tylko do zmiennej która istnieje 
firstLetterUserName = "J";
// Najczęściej jednocześnie deklarujemy i przypisujemy (inicjalizujemy) wartość
let userSurname = "Smith";
// dekracja i inicjalizacja podczas, której tworzymy funkcję ( o funkcjach będziemy dopiero rozmawiać - tu jako przykład)
let showUserName = function () {
    console.log(userSurname)
};

// DEKLAROWANIE WIELU ZMIENNYCH
let name, age, address; //w jednej linii tylko przed pierwszą nazwą słowo kluczowe
let position = [200, 100],
    score = null,
    time = 20.2,
    ipAddress; //możemy od razu inicializować (przypisywać) wartość zmiennej
const firstUser = "Ania",
    secondUser = "Tomasz";

/* ZMIENNE STAŁE I ZMIENNE ZMIENNE */

// const - zmienna stała (stała) od ES6
// let - zmienna od ES6
// var - zmienna przed ES6 (ciągle można używać)

// Tworząć zmienną wybierz const, chyba że zawartosć (wartość przypisana), będzie w trakcie działania programu zamienniona inną wartością.

// Różnice
//  - "let" i "const" można zadeklarować tylko raz, var (co jest głupie) pozawala deklarować wielokrotnie
//  - do "const" nie mozna przypisać nowej wartości (można modyfikować obiekty, które są przypisane)

let example1 = 200;
example1 = example1 + 1; // przypisujemy nową wartość zwiększoną o 1
example1++; //przypisujemy nową wartość zwiekszoną o 1

const example2 = 200;
// const już na to nie pozwoli (będzie błąd), bo nie można nowej wartości przypisać (pamietajmy, że taka zmiana jest tworzeniem nowej wartości)
// example2 = example2 + 1;
// example2++;

// Pamietajmy też, że taki zapis jak ponizej to kopiowana wartość istniejącej zmiennej do nowej zmiennej. Tworzy się nowa wartość, to nie jest ta sama wartość, mimo że jest identyczna. 
// let example3 = example2;

// CONST - przykład z obiektem (jeszcze nie omawialiśmy obiektów)
const arrayExample = ["pierwszy"]; // utworzenie tablicy z jednym elementem w środku

// Przypisanie nowego obiektu (poniżej) nie jest możliwe w przypadku const. Wyskoczy błąd
// arrayExample = [1, 2];


// Modyfikacje w obiekcie juz przypisanym - jak najbardziej są możliwe w const
arrayExample[1] = "drugi"; //dodajey drugi element w tablicy. Ale to ciągle ta sama tablicaq
// console.log(arrayExample);

// Bardzo ważny jest zakres (scope) zmiennych, ale o tym sobie jeszcze powiemy.

// Obiekt globalny (window) z var tworzona jest nowa właściwość (głupie). Z let i const nie jest tworzoba
var globalProperty1 = "za pomocą var";
//powyżej utworzy też window.globalProperty1. Poniżej nie
let globalProperty2 = "za pomocą let";
const globalProperty3 = "za pomocą const";
// console.log(window.globalProperty1);

// Hoistowana var, let i const
// hoisting to przenoszenie przez interpreter na góre kodu (przed jego wykonaniem) deklaracji zmiennych ale nie inicjalizacji wartości. Hoisting dotyczy zmiennych deklarowanych za pomocą var, ale nie let i const (to dobrze, bo hositing może wprowadzać w błąd).
//Pamiętajmy, że wynoszona na górę jest tylko deklaracja. A zadeklarowana zmienna (bez przypisania) ma wartość undefined

// console.log(varVariable);
// console.log(letVariable);
// console.log(constVariable);
// var varVariable = 1;
// let letVariable = 1;
// const constVariable = 1;

/*  JAKICH ZMIENNYCH UŻYWAĆ */
// Po pierwsze const, po drugie, jeśli zawartość zmiennej ma ulegać zmianie to let.

// Jeśli program nie będzie zmieniać imienia użytkownika
const userName = "Adam";
// Jeśli program będzie zmieniał wynik
let points = 200;
// Zmiennej var możemy używać, ale bardzo rzadko ma to sens (w małych projektach na stronkach).
var userLastLoginDate = "15.10.2018";

// LISTA SŁÓW ZAREZERWOWANYCH (nie można używać jako nazwy zmiennych)
/* 
await
abstract
boolean
byte
break
char
class
case
catch
continue
const
debugger
double
default
delete
do
enum
export
extends
else
final
float
false
finally
for
function
goto
implements
import
int
interface
if
in
instanceof
long
native
new
null
package
private
protected
public
return
short
static
super
synchronized
switch
throws
transient
this
throw
true
try
typeof
volatile
var
void
while
with
yield
 */

//OPERATOR ####################################

/* CO TO JEST OPERATOR */
// Konstrukcja języka programowania, która wykonuje jakąś operację na wartościach (argumentach/operandach) i zwraca wartość.
// Operand - wartość/wartości wykorzystywane przez operator 
// operator może wymagać podania określonych typów wartości lub zachowywać się w różny sposób przy różnych typach np. operator dodawania przy dwóch typach number dodaje, przy typie string łączy (konkatenacja).

// Pamiętajmy o tym, że dochodzi tutaj do niejawnej, autamatycznej konwersji typów (typowanie słabe). W wielu językach programowania (typowanie silne) taka konwersja nie jest możliwa
2 + 2; //zwraca 4 (typ number)
"2" + "2"; //zwraca "22" (typ string)
"2" + 2; //zwraca "22" (string), bo dochodzi do niejawnej konwersji 2 na "2"
2 + true; // zwraca 3 (dochodzi do niejawnej konwersji true na 1)
"2" + true; // zwraca "2true" - niejawna konkwersja true (typ boolean) na "true " (typ string)

// operator może być znakiem (znakami), może być słowemi (zbudowany z liter) np. typeof, delete, new;
typeof 1200; //zwraca typ wartościu w tym wypadku "number"

// PODZIAŁ OPERATORÓW ZE ZWGLĘDU NA ILOŚĆ ARGUMENTÓW
let result; //deklaruję zmienną na ptotrzeby przykładów
//operator przypisania (dwa argumenty - mówimy na operatory dwuargumentowe, że są to operatory binarne)
result = 1;
//operator inkrementacji (jeden argument)
result++;
// mamy też operator trójargumentowy (pokazany na koniec pliku)


/* OPERATORY ARYTMETYCZNE */
let position = 2;
// inkrementacja. Zwróc wartość i dodaj jeden do wartości inkrementowanej
position++ //zwraca 2 i dodaje 1 (czyli jest 3)
// dekrementacja. Zwraca aktualną wartość a potem ją zmniejsza o 1
position--
// preinkrementacja - zwiększa wartość o 1 a potem zwraca aktualną wartość
++position
position += 1; //zadziała tak samo jak preinkrementacja
// predekrementacja - zmniejsza wartość o 1 a potem zwraca aktualną wartość
--position

// przypisanie
position += 10; // przypisuje do zmiennej nową wartość która jest wynikiem pobrania aktualnej wartości zmiennej i dodania do niej 10
position = position + 10; //W praktyce to się dzieję. Jest to zapis tożsamy. Zwraca dokładnie to samo co kod linijkę wyżej
position -= 16; //jw tylko odejmuje
position *= 4.2; //jw czyli pobiera aktualną wartość zmiennej i w tym wypadku mnoży ją zwracają nową wartość
position /= 2; //jw tylko dzielenie

let newPosition = 0;
newPosition += position; // pobiera wartość newPosition i dodaje do niej wartość position. Wynika działania (nowa wartość) jest przypisana do newPosition
// console.log(newPosition);

// Modulo - reszta z dzielenia
10 % 9; //w wyniku dzielenia zostaje 1 (bo 10/9 do jedna dziewiątka i jeden reszt)
20 % 4; //w wyniku dzielenia powstaje 5 i nie ma reszt, więc modulo nie zwraca reszt

// ** potęga ES6
2 ** 5; // 2 do 5, czyli 2 * 2 * 2 * 2 * 2
3 ** 3 // 3 do 3, czyli 3 * 3 * 3 

/* OPERATOR LOGICZNY */
// operator porównania (większy/mniejszy) - zwraca true lub false
20 > 40; //false
"tekst".length > 3; //właściwość length zawiera informację o długości tekstu (ile ma znaków) w tym wypadku 5>3, więc zwróci true
20 <= 20; // mniejszy równy (jest też >= większy równy). W tym wyapdku 20 jest mniejsze-równe 20 (nie jest mneijesze ale jest równe), czyli true

// operator porównania (czy są równe)
// == sprawdź czy dane wartości (wyrażenia) są równe. Dopuszcza konwersje. Jeśli są równe zwraca true, jeśli nie są równe zwraca false
"tekst" == "tekst2"; //false
2 == 2.2; //false
"2" == 2; //dokonuje konwersji typów, zamienia "2" na 2 i zwraca true (bo wtedy rzeczywiście są równe)
// === - porównanie, które nie dopuszcza konwersji typów
"2" === 2; //bez konkwersji typów, a więc "2" nie jest równe 2 i zwraca false

// operator "różne od" Czy lewa strona jest rózna od prawej. Jeśli trak zwraca true (do true potrzebne są by obie strony nie były takie same)
100 != 101; //true - bo są różne
"100" != 100; //false - bo są takie same (!= operator dopuszcza konwersję tka jak ==) 
"100" !== 100; //true - są różne bo nie ma konwerji (!== nie dopuszcza konwersji jak operator ===)

// logiczne zaprzecznie (negacja). Robi dwie rzeczy:  1. zamienia na typ boolean 2. odwraca wartość (jeśli było true, to jest false i odwrotnie)
!("coś"); //zwraca false, ponieważ najpier konwertuje na typ boolean i wartość true, a potem zamienia ją na false. Nawias nie jest konieczny, bo nie jest to wyrażenie a wartość
!(2 - 2); //negacja, nawias jest konieczny bo oznacza on by najpierw zostało wykonane wyrażenie w środku (2 - 2 czyli operator odejmowania, który da wynik 0), a potem dopiero negacja czyli zero zamieniamy na typ boolean flase a ten typ boolean na true (tak więc operator zwróci true) 
!!200; //podwójna negacja. Robi to co pojedyńćza (zmiena na typ boolean i odwraca), ale dodatkowo ponoweni odwraca, więć mamy rzeczywis wartość. 200 jest typu true więc tutaj będzie zwrócone true.

// SUMA logiczna (logiczne "lub")
//Jeśli choć jeden operand zwraca true, to wyrażenie możemy uznać za prawdziwe. Żeby jednak to dobrze zrozumieć musimy poznać mechanizm zwracania wartości. W przypadku gdy pierwsza wartość jest prawdziwa jest ona zwracana. W przypadku gdy nie jest prawdziwa zwracana jest druga.
true || false; //zwraca true (pierwsza wartość)
false || true; //zwraca true (druga wartość)
true || true; //zwraca pierwszą wartość (true)
false || false; //zwraca drugą wartość false
2 || 0 // zwraca pierwszą wartość (2). Dwa w przypadku zamieniania na wartość logiczną (jak robić to będzie instrukacja warunkowa) daje true
0 || null // obie wartości są nieprawdziwe. Ponieważ pierwsza jest nieprawdziwa zwracana jest druga czyli null (która stanowi false po zamiania na wartość logiczną)

// ILOCZYN logiczny (logiczne "i")
//Obie wartości (wyrażenia) muszą być uznane za prawdziwe by iloczyn logiuczny był uznany za prawdziwy. Tu również musimy jednak zrozumieć mechanizm zwracania. W przypadku gdy pierwszy argument (po lewje) jest nieprawdziwy, kończy to działania operatora i zwracana jest pierwsza wartość. Jeśli pierwsza wartość jest true (czy po konwersji na typ boolean, bo ta się wykonuje), to operator sprawdza wartość (wyrażenie) po prawej stronie i zwraca je. Ta zwrócona wartość decyduje czy logiczne "i" (czyli iloczyn logiczny) zwraca wartość true/false (czy inną wartość, któa po konwersji zwróci true/false)
true && false; //Pierwszy warunek jest true, operator przechodzi do drugiego i zwraca false
200 && 0; // podobnie jak wyzej. 200 zamieniane jest (konwersja) na true. Zwracane jest 0 (czyli po konwersji false)
"1" && "2"; //oba warunki prawdziwe, zwracane jest "2" czyli string, któy po konwersji na typ boolean jest true
"1" && ""; // Zwracany jest pusty string (pierwszy warunek prawdziwy), Pusty string po konwersji na typ boolean jest false
(20 > 10 && 10 < 20); //Pierwsze wyrażenie zwraca true, drugie też true a więc operator logiczne "i" zwróci true. 

// KOLEJNOŚĆ OPERATORÓW
2 + 3 * 5; //mnożenie przed dzieleniem
(2 + 3) * (5 - 4); //nawiasy dają pierwszeńtstow (zaurzają kolejność wykonywania operatorów)
"2" + 3 * 5; //konwersja nie zaburza kolejności ale wpływa na efekt końcowy. W tym wypadku najpeirw mnożenie a więc "2" + 15, a z tego drugiego działania mamy "215"

//OPERATOR WARUNKOWY (trójargumentowy) - na teraz ciekawostka
// warunek? zrobToJakPrawda : zrobToJanFałsz
3 > 2 ? "tak" : "nie";
// Sprawdzamy warunek. Jeśli jest prawidłowy interpreter wykonuje kod po lewej stronie (w przykładzie "tak") i pomija ten po prawej, jeśli warunek zwróci false, ty pominięty zostanie kod po lewej stronie a wykonany zostanie kod po prawej (w przykładzie "nie")


//Literały oraz właściwości i metody typów prostych ############################################################################


const txt = 'jakiś tekst nowy1';
let score = 12.55;
//te dwie zmienne przydadzą nam się w dalszych przykładach w pliku

"zbiór znaków w cudzysłowie";
1222;
true;
null;
undefined;
// Każdy typ prosty (poza Symbol) można stworzyć za pomocą literału. Literał to zestaw znaków, które zostaną rozpoznane przez interpreter

//literał łancucha, literał liczby ... 
// na przyszłość: literał obiektu "{}", literał tablicy "[]"

/* Typy proste nie są obiektami, to jednak mozemy na nich (number, string, boolean) wykonywać metody i właściwości, które to są domeną obiektów */


// właściwość - informacje o stanie (wartości)
// metoda - działania (na wartości), które najczęściej zwraca nową wartość  w oparciu o działanie na wartości.

// Właściwości
txt.length; //właściwość zawierająca informacje o długości stringa
txt[2]; //pobranie znaku, kótry znajduje się pod danym indeksem

// Metody (nie dokonują zmiany, tylko zwracają). Metody muszą być wywołane (()), bez wywołania zobaczymy tylko czym są a nie ich działanie
// metoda(argument)

txt.toUpperCase; //zwraca funkcje (czyli bez wywowałania kieruje do funkcji (metodą określamy funkcję, która jest przypisana do obiektu - oczywiście będziemy o tym jeszcze rozmawiać)
txt.toUpperCase(); //wywołanie metody dla string
score.toFixed(); //wywołanie metody dla number (typy nie mają tych samych metod, tylkjo różne)
txt.indexOf('ś'); //metoda sprawdzająca czy w danym stringu jest wskazany znak, a jeśli tak to na jakiej pozycji (o jakim indeksie, licząć od zera)

// Metody nie przerabiają startych wartości a zwracają nowe (stare zostają niezmienione) Dlatego te nowe wartości gdzieś powinniśmy przypisać, jeśli chcemy z nich skorzystać w dalszej części programu.
const newTxt = txt.toUpperCase();
const fixedNumber = score.toFixed();

// Typy proste nie mają właściwości i metod. Jak to się więc dzieje, że możemy pobrać ich właściwości czy wykonać na nich metody (jak na obiektach)?
// 1 - tworzymy zmienną i wartość string
const name = "Janek";
name.length; //właściwość której nie ma w typie prostym, i teraz zaczyna pracować silnik, który robi sobie mniej więcej coś takiego jak ponizej by pobrać wartość tej właściwości
// 2- SILNIK TWORZY OBIEKT NA TYM ETAPIE (nazwa zmiennejj tylko dla przykładu)
//Tworzy obiekt String np. 
// const nameTemporary = new String(name);
//nameTemporary.length
// 3 - Zwraca 5 (bo taką ma długość "Janek") i usuwa obiekt String (w przykłądzie znajduje się w nameTemporary)

/* Reasumując: Jeżeli wywołujemy metody, czy chcemy dostać sie do zawartości własciwości, to w tle tworzony jest tymaczowy obiekt danego typu, który "opakowuje" nasz typ prosty na czas dotarcia do właściwości czy wywowłania metody.*/

// Możemy też tworzyć takie obiekty sami (abstachując już od opakowania typów prostych). Ale bardzo rzadko ma to sens, ponieważ takie obiekty mają częstoi inne zachowania niż typy proste np. każdy obiekt zwraca np. true, a operator typeof zwróci "object", a nie rodzaj typu prostego. problemy pojawią się także przy operatorze porównania "==="). Tworzenie obektu (String, Number, Boolean) jest trudniejsze niż prosty literał.
const userName = new String("Jagienka");
const userID = new Number(2);
const famale = new Boolean(true);

//Na przyszłość: String, Number i Boolean to przykłady konstrukturów czyli funkcji, które są używane do tworzenie instancji (niezależnej kopii) obiektów. Operator "new" tworzy nowy obiekt. Na tym etapie nie masz jeszcze szans tego zrozumieć, to zaawasnowany koncept programowania w JS, ale kiedy dojdziemy do programowania obiektowego będę to dobrze wyjaśniał i zrozumiesz ten mechanizm.  