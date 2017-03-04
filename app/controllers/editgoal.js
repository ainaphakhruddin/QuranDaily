// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
 console.log("This is child window editgoal.js");
 $.editgoal.open();
 
 var win = Ti.UI.createWindow({
  backgroundColor: 'white',
  exitOnClose: true,
  fullscreen: false,
  title: 'Use picker to make selection'
});
var surah =  [{
 	"name": "al-Fatihah",
 	"count": "7"
 }, {
 	"name": "al-Baqarah",
 	"count": "286"
 }, {
 	"name": "al-Imran",
 	"count": "200"
 }, {
 	"name": "an-Nisa",
 	"count": "176"
 }, {
 	"name": "al-Maidah",
 	"count": "120"
 }, {
 	"name": "al-Anam",
 	"count": "165"
 }, {
 	"name": "al-Araf",
 	"count": "206"
 }, {
 	"name": "al-Anfal",
 	"count": "75"
 }, {
 	"name": "at-Tawbah",
 	"count": "129"
 }, {
 	"name": "Yunus",
 	"count": "109"
 }, {
 	"name": "Hud",
 	"count": "123"
 }, {
 	"name": "Yusuf",
 	"count": "111"
 }, {
 	"name": "ar-Rad",
 	"count": "43"
 }, {
 	"name": "Ibrahim",
 	"count": "52"
 }, {
 	"name": "al-Hijr",
 	"count": "99"
 }, {
 	"name": "an-Nahl",
 	"count": "128"
 }, {
 	"name": "Al-Isra",
 	"count": "111"
 }, {
 	"name": "al-Kahf",
 	"count": "110"
 }, {
 	"name": "Maryam",
 	"count": "98"
 }, {
 	"name": "Ta Ha",
 	"count": "135"
 }, {
 	"name": "al-Anbiya",
 	"count": "112"
 }, {
 	"name": "al-Hajj",
 	"count": "78"
 }, {
 	"name": "al-Muminun",
 	"count": "118"
 }, {
 	"name": "an-Nur",
 	"count": "64"
 }, {
 	"name": "al-Furqan",
 	"count": "77"
 }, {
 	"name": "ash-Shu\'ara",
 	"count": "227"
 }, {
 	"name": "an-Naml",
 	"count": "93"
 }, {
 	"name": "al-Qasas",
 	"count": "88"
 }, {
 	"name": "al-Ankabut",
 	"count": "69"
 }, {
 	"name": "ar-Rum",
 	"count": "60"
 }, {
 	"name": "Luqman",
 	"count": "34"
 }, {
 	"name": "as-Sajdah",
 	"count": "30"
 }, {
 	"name": "al-Ahzab",
 	"count": "73"
 }, {
 	"name": "Saba",
 	"count": "54"
 }, {
 	"name": "Fatir",
 	"count": "45"
 }, {
 	"name": "Ya-Sin",
 	"count": "83"
 }, {
 	"name": "as-Saffat",
 	"count": "182"
 }, {
 	"name": "Sad",
 	"count": "88"
 }, {
 	"name": "az-Zumar",
 	"count": "75"
 }, {
 	"name": "Ghafir",
 	"count": "85"
 }, {
 	"name": "Fussilat",
 	"count": "54"
 }, {
 	"name": "ash-Shuraa",
 	"count": "53"
 }, {
 	"name": "az-Zukhruf",
 	"count": "89"
 }, {
 	"name": "ad-Dukhan",
 	"count": "59"
 }, {
 	"name": "al-Jathiyah",
 	"count": "37"
 }, {
 	"name": "al-Ahqaf",
 	"count": "35"
 }, {
 	"name": "Muhammad",
 	"count": "38"
 }, {
 	"name": "al-Fath",
 	"count": "29"
 }, {
 	"name": "al-Hujurat",
 	"count": "18"
 }, {
 	"name": "Qaf",
 	"count": "45"
 }, {
 	"name": "ad-Dhariyat",
 	"count": "60"
 }, {
 	"name": "at-Tur",
 	"count": "49"
 }, {
 	"name": "an-Najm",
 	"count": "62"
 }, {
 	"name": "al-Qamar",
 	"count": "55"
 }, {
 	"name": "ar-Rahman",
 	"count": "78"
 }, {
 	"name": "al-Waqiah",
 	"count": "96"
 }, {
 	"name": "al-Hadid",
 	"count": "29"
 }, {
 	"name": "al-Mujadilah",
 	"count": "22"
 }, {
 	"name": "al-Hashr",
 	"count": "24"
 }, {
 	"name": "al-Mumtahanah",
 	"count": "13"
 }, {
 	"name": "as-Saff",
 	"count": "14"
 }, {
 	"name": "al-Jumuah",
 	"count": "11"
 }, {
 	"name": "al-Munafiqun",
 	"count": "11"
 }, {
 	"name": "at-Taghabun",
 	"count": "18"
 }, {
 	"name": "at-Talaq",
 	"count": "12"
 }, {
 	"name": "at-Tahrim",
 	"count": "12"
 }, {
 	"name": "al-Mulk",
 	"count": "30"
 }, {
 	"name": "al-Qalam",
 	"count": "52"
 }, {
 	"name": "al-Haqqah",
 	"count": "52"
 }, {
 	"name": "al-Ma\'arij",
 	"count": "44"
 }, {
 	"name": "Nuh",
 	"count": "28"
 }, {
 	"name": "al-Jinn",
 	"count": "28"
 }, {
 	"name": "al-Muzammil",
 	"count": "20"
 }, {
 	"name": "al-Mudathir",
 	"count": "56"
 }, {
 	"name": "al-Qiyamah",
 	"count": "40"
 }, {
 	"name": "al-Insan",
 	"count": "31"
 }, {
 	"name": "al-Mursalat",
 	"count": "50"
 }, {
 	"name": "an-Naba",
 	"count": "40"
 }, {
 	"name": "an-Naziat",
 	"count": "46"
 }, {
 	"name": "\'Abasa",
 	"count": "42"
 }, {
 	"name": "at-Takwir",
 	"count": "29"
 }, {
 	"name": "al-Infitar",
 	"count": "19"
 }, {
 	"name": "Al-Mutaffifeen",
 	"count": "36"
 }, {
 	"name": "al-Inshiqaq",
 	"count": "25"
 }, {
 	"name": "al-Buruj",
 	"count": "22"
 }, {
 	"name": "at-Tariq",
 	"count": "17"
 }, {
 	"name": "al-A\'la",
 	"count": "19"
 }, {
 	"name": "al-Ghashiya",
 	"count": "26"
 }, {
 	"name": "al-Fajr",
 	"count": "30"
 }, {
 	"name": "al-Balad",
 	"count": "20"
 }, {
 	"name": "ash-Shams",
 	"count": "15"
 }, {
 	"name": "al-Layl",
 	"count": "21"
 }, {
 	"name": "ad-Duha",
 	"count": "11"
 }, {
 	"name": "ash-Sharh",
 	"count": "8"
 }, {
 	"name": "at-Tin",
 	"count": "8"
 }, {
 	"name": "al-\'Alaq",
 	"count": "19"
 }, {
 	"name": "al-Qadr",
 	"count": "5"
 }, {
 	"name": "al-Bayyinah",
 	"count": "8"
 }, {
 	"name": "Az-Zalzala",
 	"count": "8"
 }, {
 	"name": "al-\'Adiyat",
 	"count": "11"
 }, {
 	"name": "al-Qari\'ah",
 	"count": "11"
 }, {
 	"name": "at-Takathur",
 	"count": "8"
 }, {
 	"name": "al-\'Asr",
 	"count": "3"
 }, {
 	"name": "al-Humazah",
 	"count": "9"
 }, {
 	"name": "al-Fil",
 	"count": "5"
 }, {
 	"name": "al-Quraish",
 	"count": "4"
 }, {
 	"name": "al-Ma\'un",
 	"count": "7"
 }, {
 	"name": "al-Kawthar",
 	"count": "3"
 }, {
 	"name": "al-Kafirun",
 	"count": "6"
 }, {
 	"name": "an-Nasr",
 	"count": "3"
 }, {
 	"name": "Al-Masad",
 	"count": "5"
 }, {
 	"name": "al-Ikhlas",
 	"count": "4"
 }, {
 	"name": "al-Falaq",
 	"count": "5"
 }, {
 	"name": "an-Nas",
 	"count": "6"
 }];

var Page = [
	["1","1"],
	//Al-Baqarah first-ayats-on-page
	["1", "6", "17", "25", "30", "38", "49", "58",
	"62", "70", "77", "84", "89", "94", "102", "106", 
	"113", "120", "127", "135", "142", "146", "154", "164", 
	"170", "177", "182", "187", "191", "197", "203", "211", 
	"216", "220", "225", "231", "234", "238", "246", "249",
	"253", "257", "260", "265", "270", "275", "282", "283"
	], 
	//Al-Imran first-ayats-on-page
	["3","1"],
	["3","10"],
	["3","16"],
	["3","23"],
	["3","30"],
	["3","38"],
	["3","46"],
	["3","53"],
	["3","62"],
	["3","71"],
	["3","78"],
	["3","84"],
	["3","92"],
	["3","101"],
	["3","109"],
	["3","116"],
	["3","122"],
	["3","133"],
	["3","141"],
	["3","149"],
	["3","154"],
	["3","158"],
	["3","166"],
	["3","174"],
	["3","181"],
	["3","187"],
	["3","195"],
	["4","1"],
	["4","7"],
	["4","12"],
	["4","15"],
	["4","20"],
	["4","24"],
	["4","27"],
	["4","34"],
	["4","38"],
	["4","45"],
	["4","52"],
	["4","60"],
	["4","66"],
	["4","75"],
	["4","80"],
	["4","87"],
	["4","92"],
	["4","95"],
	["4","102"],
	["4","106"],
	["4","114"],
	["4","122"],
	["4","128"],
	["4","135"],
	["4","141"],
	["4","148"],
	["4","155"],
	["4","163"],
	["4","171"],
	["4","176"],
	["5","3"],
	["5","6"],
	["5","10"],
	["5","14"],
	["5","18"],
	["5","24"],
	["5","32"],
	["5","37"],
	["5","42"],
	["5","46"],
	["5","51"],
	["5","58"],
	["5","65"],
	["5","71"],
	["5","77"],
	["5","83"],
	["5","90"],
	["5","96"],
	["5","104"],
	["5","109"],
	["5","114"],
	["6","1"],
	["6","9"],
	["6","19"],
	["6","28"],
	["6","36"],
	["6","45"],
	["6","53"],
	["6","60"],
	["6","69"],
	["6","74"],
	["6","82"],
	["6","91"],
	["6","95"],
	["6","102"],
	["6","111"],
	["6","119"],
	["6","125"],
	["6","132"],
	["6","138"],
	["6","143"],
	["6","147"],
	["6","152"],
	["6","158"],
	["7","1"],
	["7","12"],
	["7","23"],
	["7","31"],
	["7","38"],
	["7","44"],
	["7","52"],
	["7","58"],
	["7","68"],
	["7","74"],
	["7","82"],
	["7","88"],
	["7","96"],
	["7","105"],
	["7","121"],
	["7","131"],
	["7","138"],
	["7","144"],
	["7","150"],
	["7","156"],
	["7","160"],
	["7","164"],
	["7","171"],
	["7","179"],
	["7","188"],
	["7","196"],
	["8","1"],
	["8","9"],
	["8","17"],
	["8","26"],
	["8","34"],
	["8","41"],
	["8","46"],
	["8","53"],
	["8","62"],
	["8","70"],
	["9","1"],
	["9","7"],
	["9","14"],
	["9","21"],
	["9","27"],
	["9","32"],
	["9","37"],
	["9","41"],
	["9","48"],
	["9","55"],
	["9","62"],
	["9","69"],
	["9","73"],
	["9","80"],
	["9","87"],
	["9","94"],
	["9","100"],
	["9","107"],
	["9","112"],
	["9","118"],
	["9","123"],
	["10","1"],
	["10","7"],
	["10","15"],
	["10","21"],
	["10","26"],
	["10","34"],
	["10","43"],
	["10","54"],
	["10","62"],
	["10","71"],
	["10","79"],
	["10","89"],
	["10","98"],
	["10","107"],
	["11","6"],
	["11","13"],
	["11","20"],
	["11","29"],
	["11","38"],
	["11","46"],
	["11","54"],
	["11","63"],
	["11","72"],
	["11","82"],
	["11","89"],
	["11","98"],
	["11","109"],
	["11","118"],
	["12","5"],
	["12","15"],
	["12","23"],
	["12","31"],
	["12","38"],
	["12","44"],
	["12","53"],
	["12","64"],
	["12","70"],
	["12","79"],
	["12","87"],
	["12","96"],
	["12","104"],
	["13","1"],
	["13","6"],
	["13","14"],
	["13","19"],
	["13","29"],
	["13","35"],
	["13","43"],
	["14","6"],
	["14","11"],
	["14","19"],
	["14","25"],
	["14","34"],
	["14","43"],
	["15","1"],
	["15","16"],
	["15","32"],
	["15","52"],
	["15","71"],
	["15","91"],
	["16","7"],
	["16","15"],
	["16","27"],
	["16","35"],
	["16","43"],
	["16","55"],
	["16","65"],
	["16","73"],
	["16","80"],
	["16","88"],
	["16","94"],
	["16","103"],
	["16","111"],
	["16","119"],
	["17","1"],
	["17","8"],
	["17","18"],
	["17","28"],
	["17","39"],
	["17","50"],
	["17","59"],
	["17","67"],
	["17","76"],
	["17","87"],
	["17","97"],
	["17","105"],
	["18","5"],
	["18","16"],
	["18","21"],
	["18","28"],
	["18","35"],
	["18","46"],
	["18","54"],
	["18","62"],
	["18","75"],
	["18","84"],
	["18","98"],
	["19","1"],
	["19","12"],
	["19","26"],
	["19","39"],
	["19","52"],
	["19","65"],
	["19","77"],
	["19","96"],
	["20","13"],
	["20","38"],
	["20","52"],
	["20","65"],
	["20","77"],
	["20","88"],
	["20","99"],
	["20","114"],
	["20","126"],
	["21","1"],
	["21","11"],
	["21","25"],
	["21","36"],
	["21","45"],
	["21","58"],
	["21","73"],
	["21","82"],
	["21","91"],
	["21","102"],
	["22","1"],
	["22","6"],
	["22","16"],
	["22","24"],
	["22","31"],
	["22","39"],
	["22","47"],
	["22","56"],
	["22","65"],
	["22","73"],
	["23","1"],
	["23","18"],
	["23","28"],
	["23","43"],
	["23","60"],
	["23","75"],
	["23","90"],
	["23","105"],
	["24","1"],
	["24","11"],
	["24","21"],
	["24","28"],
	["24","32"],
	["24","37"],
	["24","44"],
	["24","54"],
	["24","59"],
	["24","62"],
	["25","3"],
	["25","12"],
	["25","21"],
	["25","33"],
	["25","44"],
	["25","56"],
	["25","68"],
	["26","1"],
	["26","20"],
	["26","40"],
	["26","61"],
	["26","84"],
	["26","112"],
	["26","137"],
	["26","160"],
	["26","184"],
	["26","207"],
	["27","1"],
	["27","14"],
	["27","23"],
	["27","36"],
	["27","45"],
	["27","56"],
	["27","64"],
	["27","77"],
	["27","89"],
	["28","6"],
	["28","14"],
	["28","22"],
	["28","29"],
	["28","36"],
	["28","44"],
	["28","51"],
	["28","60"],
	["28","71"],
	["28","78"],
	["28","85"],
	["29","7"],
	["29","15"],
	["29","24"],
	["29","31"],
	["29","39"],
	["29","46"],
	["29","53"],
	["29","64"],
	["30","6"],
	["30","16"],
	["30","25"],
	["30","33"],
	["30","42"],
	["30","51"],
	["31","1"],
	["31","12"],
	["31","20"],
	["31","29"],
	["32","1"],
	["32","12"],
	["32","21"],
	["33","1"],
	["33","7"],
	["33","16"],
	["33","23"],
	["33","31"],
	["33","36"],
	["33","44"],
	["33","51"],
	["33","55"],
	["33","63"],
	["34","1"],
	["34","8"],
	["34","15"],
	["34","23"],
	["34","32"],
	["34","40"],
	["34","49"],
	["35","4"],
	["35","12"],
	["35","19"],
	["35","31"],
	["35","39"],
	["35","45"],
	["36","13"],
	["36","28"],
	["36","41"],
	["36","55"],
	["36","71"],
	["37","1"],
	["37","25"],
	["37","52"],
	["37","77"],
	["37","103"],
	["37","127"],
	["37","154"],
	["38","1"],
	["38","17"],
	["38","27"],
	["38","43"],
	["38","62"],
	["38","84"],
	["39","6"],
	["39","11"],
	["39","22"],
	["39","32"],
	["39","41"],
	["39","48"],
	["39","57"],
	["39","68"],
	["39","75"],
	["40","8"],
	["40","17"],
	["40","26"],
	["40","34"],
	["40","41"],
	["40","50"],
	["40","59"],
	["40","67"],
	["40","78"],
	["41","1"],
	["41","12"],
	["41","21"],
	["41","30"],
	["41","39"],
	["41","47"],
	["42","1"],
	["42","11"],
	["42","16"],
	["42","23"],
	["42","32"],
	["42","45"],
	["42","52"],
	["43","11"],
	["43","23"],
	["43","34"],
	["43","48"],
	["43","61"],
	["43","74"],
	["44","1"],
	["44","19"],
	["44","40"],
	["45","1"],
	["45","14"],
	["45","23"],
	["45","33"],
	["46","6"],
	["46","15"],
	["46","21"],
	["46","29"],
	["47","1"],
	["47","12"],
	["47","20"],
	["47","30"],
	["48","1"],
	["48","10"],
	["48","16"],
	["48","24"],
	["48","29"],
	["49","5"],
	["49","12"],
	["50","1"],
	["50","16"],
	["50","36"],
	["51","7"],
	["51","31"],
	["51","52"],
	["52","15"],
	["52","32"],
	["53","1"],
	["53","27"],
	["53","45"],
	["54","7"],
	["54","28"],
	["54","50"],
	["55","17"],
	["55","41"],
	["55","68"],
	["56","17"],
	["56","51"],
	["56","77"],
	["57","4"],
	["57","12"],
	["57","19"],
	["57","25"],
	["58","1"],
	["58","7"],
	["58","12"],
	["58","22"],
	["59","4"],
	["59","10"],
	["59","17"],
	["60","1"],
	["60","6"],
	["60","12"],
	["61","6"],
	["62","1"],
	["62","9"],
	["63","5"],
	["64","1"],
	["64","10"],
	["65","1"],
	["65","6"],
	["66","1"],
	["66","8"],
	["67","1"],
	["67","13"],
	["67","27"],
	["68","16"],
	["68","43"],
	["69","9"],
	["69","35"],
	["70","11"],
	["70","40"],
	["71","11"],
	["72","1"],
	["72","14"],
	["73","1"],
	["73","20"],
	["74","18"],
	["74","48"],
	["75","20"],
	["76","6"],
	["76","26"],
	["77","20"],
	["78","1"],
	["78","31"],
	["79","16"],
	["80","1"],
	["81","1"],
	["82","1"],
	["83","7"],
	["83","35"],
	["85","1"],
	["86","1"],
	["87","16"],
	["89","1"],
	["89","24"],
	["91","1"],
	["92","15"],
	["95","1"],
	["97","1"],
	["98","8"],
	["100","10"],
	["103","1"],
	["106","1"],
	["109","1"],
	["112","1"],
	["115","1"]
];

//This new variable is going to be used in the pickers, so users can start with any surah
var ayatChoices = [
	//0 al-Fatihah
  	["1"],
  //1 al-Baqarah
	["1", "6", "17", "25", "30", "38", "49", "58",
	"62", "70", "77", "84", "89", "94", "102", "106", 
	"113", "120", "127", "135", "142", "146", "154", "164", 
	"170", "177", "182", "187", "191", "197", "203", "211", 
	"216", "220", "225", "231", "234", "238", "246", "249",
	"253", "257", "260", "265", "270", "275", "282", "283"
	],
  //2
	//Al-Imran first-ayat-on-page
	["1", "10", "16", "23", "30", "38", "46", "53",
	"62", "71", "78", "84", "92", "101", "109", "116",
	"122", "133", "141", "149", "154", "158", "166", "174",
	"181", "187", "195"],
  //3
	//an-Nisa first-ayat-on-page
	["1", "7", "12", "15", "20", "24", "27", "34", "38",
	"45", "52", "60", "66", "75", "80", "87", "92", "95",
	"102", "106", "114", "122", "128", "135", "141", "148",
	"155", "163", "171", "176"],
  //4
	//al-Maidah first-ayat-on-page
	["1","3", "6", "10", "14", "18", "24", "32", "37", "42",
	"46", "51", "58", "65", "71", "77", "83", "90", "96",
	"104", "109", "114"],
  //5
	//al-Anam first-ayat-on-page
	["1", "9", "19", "28", "36", "45", "53", "60", "69",
	"74", "82", "91", "95", "102", "111", "119", "125", "132",
	"138", "143", "147", "152", "158"],
  //6
	//al-Araf first-ayat-on-page
	["1", "12", "23", "31", "38", "44", "52", "58", "68", "74",
     "82", "88", "96", "105", "121", "131", "138", "144", "150", "156",
     "160", "164", "171", "179", "188", "196"],
  //7 al-Anfal
    ["1", "9", "17", "26", "34", "41", "46", "53", "62", "70"],
  //8 at-Tawbah
	["1", "7", "14", "21", "27", "32", "37", "41", "48", "55", 
     "62", "69", "73", "80", "87", "94", "100", "107", "112", "118",
     "123"],
  //9 Yunus
	["1", "7", "15", "21", "26", "34", "43", "54", "62", "71",
     "79", "89", "98", "107"],
  //10 Hud
	["1", "6", "13", "20", "29", "38", "46", "54", "63", "72", "82",
     "89", "98", "109", "118"],
  //11 Yusuf
	["1", "5", "15", "23", "31", "38", "44", "53", "64", "70", "79",
     "87", "96", "104"],
  //12 ar-Rad
	["1", "6", "14", "19", "29", "35", "43"],
  //13 Ibrahim
	["1","6", "11", "19", "25", "34", "43"],
  //14 al-Hijr
	["1", "16", "32", "52", "71", "91"],
  //15 an-Nahl
	["1", "7", "15", "27", "35", "43", "55", "65", "73", "80", "88", "94", "103", "111", "119"],
  //16 Al-Isra
	["1", "8", "18", "28", "39", "50", "59", "67", "76", "87", "97", "105"],
  //17 al-Kahf
	["1", "5", "16", "21", "28", "35", "46", "54", "62", "75", "84", "98"],
  //18 Maryam
	["1", "12", "26", "39", "52", "65", "77", "96"],
	//19 Ta Ha
	["1", "13", "38", "52", "65", "77", "88", "99", "114", "126"],
	//20 al-Anbiya
	["1", "11", "25", "36", "45", "58", "73", "82", "91", "102"],
	//21 al-Hajj
	["1", "6", "16", "24", "31", "39", "47", "56", "65", "73"],
	//22 al-Muminun
	["1", "18", "28", "43", "60", "75", "90", "105"],
	//23 an-Nur
	[ "1", "11", "21", "28", "32", "37", "44", "54", "59", "62"],
	//24 al-Furqan
	["1", "3", "12", "21", "33", "44", "56", "68"],
	//25 ash-Shu'ara
	["1", "20", "40", "61", "84", "112", "137", "160", "184", "207"],
	//26 an-Naml
	[ "1", "14", "23", "36", "45", "56", "64", "77", "89"],
	//27 al-Qasas
	["1", "6", "14", "22", "29", "36", "44", "51", "60", "71", "78", "85"],
	//28 al-Ankabut
	["1", "7", "15", "24", "31", "39", "46", "53", "64"],
	//29 ar-Rum
	["1", "6", "16", "25", "33", "42", "51"],
	//30 Luqman
	["1", "12", "20", "29"],
	//31 as-Sajdah
	["1", "12", "21"],
	//32 al-Ahzab
	["1", "7", "16", "23", "31", "36", "44", "51", "55", "63"],
	//33 Saba
	["1", "8", "15", "23", "32", "40", "49"],
	//34 Fatir
	["1", "4", "12", "19", "31", "39", "45"],
	//35 Ya-Sin
	["1", "13", "28", "41", "55", "71"],
	//36 as-Saffat
	["1", "25", "52", "77", "103", "127", "154"],
	//37 Sad
	["1", "17", "27", "43", "62", "84"],
	//38 az-Zumar 
	["1", "6", "11", "22", "32", "41", "48", "57", "68", "75"],
	//39 Ghafir
	["1", "8", "17", "26", "34", "41", "50", "59", "67", "78"],
	//40 Fussilat
	["1", "12", "21", "30", "39", "47"],
	//41 ash-Shuraa
	["1", "11", "16", "23", "32", "45", "52"],
	//42 az-Zukhruf
	["1", "11", "23", "34", "48", "61", "74"],
	//43 ad-Dukhan
	["1", "19", "40"],
	//44 al-Jathiyah
	["1", "14", "23", "33"],
	//45 al-Ahqaf
	["1","6", "15", "21", "29"],
	//46 Muhammad
	["1", "12", "20", "30"],
	//47 al-Fath
	["1", "10", "16", "24", "29"],
	//48 al-Hujurat 
	["1", "5", "12"],
	//49 Qaf
	["1", "16", "36"],
	//50 ad-Dhariyat 51
	["1","7", "31", "52"],
	//51 at-Tur
	["1", "15", "32"],
	//52 an-Najm
	["1", "27", "45"],
	//53 al-Qamar
	["1", "7", "28", "50"],
	//54 ar-Rahman
	["1", "17", "41", "68"],
	//55 al-Waqiah 
	["1", "17", "51", "77"],
	//56 al-Hadid
	["1", "4", "12", "19", "25"],
	//57 al-Mujadilah
	[ "1", "7", "12", "22"],
	//58 al-Hashr
	["1", "4", "10", "17"],
	//59 al-Mumtahanah
	["1", "6", "12"],
	//60 as-Saff
	["1","6"],
  	//61 al-Jumuah
	["1", "9"],
	//62 al-Munafiqun 
	["1","5"],
  	//63 at-Taghabun
	["1", "10"],
	//64 at-Talaq
	["1", "6"],
	//65 at-Tahrim
	["1", "8"],
	//66 al-Mulk
	["1", "13", "27"],
	//67 al-Qalam
	["1","16", "43"],
	//68 al-Haqqah
	["1","9", "35"],
	//69 al-Maarij
	["1","11", "40"],
	//70 Nuh
	["1","11"],
  	//71 al-Jinn
	["1", "14"],
	//72 al-Muzammil
	["1", "20"],
	//73 al-Mudathir
	["1","18", "48"],
	//74 al-Qiyamah
	["1","20"],
  	//75 al-Insan 
	["1","6", "26"],
	//76 al-Mursalat
	["1","20"],
  	//77 an-Naba 
	["1", "31"],
  	//78 an-Naziat
	["1","16"],
  	//79 'Abasa
	["1"],
	//80 at-Takwir
	["1"],
  	//81 al-Infitar
	["1"],
  	//82 al-Mutaffifeen 
	["1"],
  	//83 al-Inshiqaq
	["1","7", "35"],
  	//84 al-Buruj
	["1"],
  	//85 at-Tariq
	["1"],
  	//86 al-A'la
	["1","16"],
	//87 al-Ghashiya
  	["1","16", ""],
  	//88 al-Fajr 
  	["1"],
  	//89 al-Balad
	["1", "24"],
	//90 ash-Shams
	["1"],
  	//91 al-Layl
	["1"],
  	//92 ad-Duha
	["1"],
	//93 ash-Sharh
	["1"],
	//94 at-Tin
	["1"],
  	//95 al-'Alaq
	["1"],
	//96 al-Qadr
	["1"],
  	//97 al-Bayyinah
	["1"],
  	//98 az-Zalzala
	["1","8"],
	//99 al-'Adiyat
	["1"],
  	//al-Qari'ah
	["1","10"], //Not sure if this surah starts a new page on 10
	//101 at-Takathur
	["1"],
	//102 al-'Asr
	["1"],
  	//103 al-Humazah
	["1"],
  	//104 al-Fil
	["1"],
	//105 al-Quraish
	["1"],
	//106 al-Ma'un
	["1"],
	//107 al-Kawthar
	["1"],
	//108 al-Kafirun
	["1"],
	//109 an-Nasr
	["1"],
	//110 al-Masad
	["1"],
	//111 al-Ikhlas
	["1"],
  	//112 al-Falaq
	["1"],
	//113 an-Nas
	["1"],
  
];

var column1 = Ti.UI.createPickerColumn();

for(var i=0, ilen=surah.length; i<ilen; i++){
  var row = Ti.UI.createPickerRow({
    title: surah[i].name
    });
  column1.addRow(row);
};

var column2 = Ti.UI.createPickerColumn();

var startingSurahPicker = Ti.UI.createPicker({
  columns: [column1],
  selectionIndicator: true,
  useSpinner: true, // required in order to use multi-column pickers with Android
  top:37.5,
  height: 100,
  width: 200,
  right: 5
});

var startingSurahValue = Ti.UI.createLabel({
	text: "Surah:",
	top: 250,
	left: 85
});

var endingSurahColumn = Ti.UI.createPickerColumn();

for(var i=0, ilen=surah.length; i<ilen; i++){
  var endingSurahRow = Ti.UI.createPickerRow({
    title: surah[i].name
    });
  endingSurahColumn.addRow(endingSurahRow);
};
var endingSurahpicker = Ti.UI.createPicker({
  columns: [endingSurahColumn],
  selectionIndicator: true,
  useSpinner: true, // required in order to use multi-column pickers with Android
  top:340,
  height: 100,
  width: 200,
  right: 5
});
var endingSurahValue = Ti.UI.createLabel({
	text: "Surah:",
	top: 550,
	left: 85
});

//This function allows a user to pick the surah and ayat they wish to start with. The default is the first page
startingSurahPicker.addEventListener("change",function(startingSurahNameChange){
	console.log("surahChange: JSON.stringify(startingSurahNameChange): "+JSON.stringify(startingSurahNameChange));
	var startingSurahName = startingSurahNameChange.row.title;
	startingSurahValue.text = startingSurahName; 
	//The label will add the startingSurahName so it is clear to the user what their selection was
	// set for ayah picker	
for(j=0; j<surah.length; j++){
		if(surah[j].name == startingSurahValue.text)
		{var count = surah[j].count;}
		console.log("surahChange:" + startingSurahName + " count: "+count);
		};

//Starting Ayats picker per ayat 
if (startingSurahName == "al-Fatihah") {
	console.log(ayatChoices[0]);
	
	var fatihahStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	fatihahStartingPickerColumn = Ti.UI.createPickerColumn();

	for (var i = 0; i <= Page.length; i++) {
		var fatihahStartingAyahRow = Ti.UI.createPickerRow();
		var fatihahStartingLabel = Ti.UI.createLabel({
			text: ayatChoices[0][i]
		});
	fatihahStartingAyahRow.add(fatihahStartingLabel);	
	fatihahStartingPickerColumn.addRow(fatihahStartingAyahRow);
	}
	fatihahStartingPicker.add(fatihahStartingPickerColumn);
	win.add(fatihahStartingPicker);
	
} else if (startingSurahName == "al-Baqarah") {
		//console.log("Baqarah");
		var baqarahStartingPicker = Ti.UI.createPicker({
		//columns: [column2],
	  	selectionIndicator: true,
	 	useSpinner: true, //
	 	top:100,
	  	height: 100,
	  	width: 200,
	  	right: 5
	});	
		var baqarahStartingPickerColumn = Ti.UI.createPickerColumn();
		for (var i = 0; i <= Page.length; i++) {
			
			var baqarahStartingAyahRow = Ti.UI.createPickerRow();
			/****I am going to see if using a label inside of the row will allow me to display all
			 * the verse numbers in that specific surah. The Page variable contains many arrays of
			 * different surah and the last ayat on the pages. I want this Picker to display all ayats.*****/
			var baqarahStartingLabel = Ti.UI.createLabel({
		    text: ayatChoices[1][i]
		  });
	  	baqarahStartingAyahRow.add(baqarahStartingLabel);
		baqarahStartingPickerColumn.addRow(baqarahStartingAyahRow);	
		}
		baqarahStartingPicker.add(baqarahStartingPickerColumn);
		win.add(baqarahStartingPicker);
	
} 
else if (startingSurahName == "al-Imran") {
		var alImranStartingPicker = Ti.UI.createPicker({
		//columns: [column2],
	  	selectionIndicator: true,
	 	useSpinner: true, //
	 	top:100,
	  	height: 100,
	  	width: 200,
	  	right: 5
	});	
		var alImranStartingPickerColumn = Ti.UI.createPickerColumn();
		for (var i = 0; i <= Page.length; i++) {
			
			var alImranStartingAyahRow = Ti.UI.createPickerRow();
			var alImranStartingLabel = Ti.UI.createLabel({
		    text: ayatChoices[2][i]
		  });
	  	alImranStartingAyahRow.add(alImranStartingLabel);
		alImranStartingPickerColumn.addRow(alImranStartingAyahRow);	
		}
		alImranStartingPicker.add(alImranStartingPickerColumn);
		win.add(alImranStartingPicker);
} else if (startingSurahName == "an-Nisa") {
	
	var anNisaStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var anNisaStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var anNisaStartingAyahRow = Ti.UI.createPickerRow();
		var anNisaStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[3][i]
	  });
  	anNisaStartingAyahRow.add(anNisaStartingLabel);
	anNisaStartingPickerColumn.addRow(anNisaStartingAyahRow);	
	}
	anNisaStartingPicker.add(anNisaStartingPickerColumn);
	win.add(anNisaStartingPicker);
} else if (startingSurahName == "al-Maidah") {
	
	var alMaidahStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alMaidahStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alMaidahStartingAyahRow = Ti.UI.createPickerRow();
		var alMaidahStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[4][i]
	  });
  	alMaidahStartingAyahRow.add(alMaidahStartingLabel);
	alMaidahStartingPickerColumn.addRow(alMaidahStartingAyahRow);	
	}
	alMaidahStartingPicker.add(alMaidahStartingPickerColumn);
	win.add(alMaidahStartingPicker);
} else if (startingSurahName == "al-Anam") {
	
	var alAnamStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alAnamStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alAnamStartingAyahRow = Ti.UI.createPickerRow();
		var alAnamStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[5][i]
	  });
  	alAnamStartingAyahRow.add(alAnamStartingLabel);
	alAnamStartingPickerColumn.addRow(alAnamStartingAyahRow);	
	}
	alAnamStartingPicker.add(alAnamStartingPickerColumn);
	win.add(alAnamStartingPicker);
}  else if (startingSurahName == "al-Araf") {
	
	var alArafStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alArafStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alArafStartingAyahRow = Ti.UI.createPickerRow();
		var alArafStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[6][i]
	  });
  	alArafStartingAyahRow.add(alArafStartingLabel);
	alArafStartingPickerColumn.addRow(alArafStartingAyahRow);	
	}
	alArafStartingPicker.add(alArafStartingPickerColumn);
	win.add(alArafStartingPicker);
} 
else if (startingSurahName == "al-Anfal") {
	
	var alAnfalStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alAnfalStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alAnfalStartingAyahRow = Ti.UI.createPickerRow();
		var alAnfalStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[7][i]
	  });
  	alAnfalStartingAyahRow.add(alAnfalStartingLabel);
	alAnfalStartingPickerColumn.addRow(alAnfalStartingAyahRow);	
	}
	alAnfalStartingPicker.add(alAnfalStartingPickerColumn);
	win.add(alAnfalStartingPicker);
} else if (startingSurahName == "at-Tawbah") {
	
	var atTawbahStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var atTawbahStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var atTawbahStartingAyahRow = Ti.UI.createPickerRow();
		var atTawbahStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[8][i]
	  });
  	atTawbahStartingAyahRow.add(atTawbahStartingLabel);
	atTawbahStartingPickerColumn.addRow(atTawbahStartingAyahRow);	
	}
	atTawbahStartingPicker.add(atTawbahStartingPickerColumn);
	win.add(atTawbahStartingPicker);
} else if (startingSurahName == "Yunus") {
	
	var yunusStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var yunusStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var yunusStartingAyahRow = Ti.UI.createPickerRow();
		var yunusStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[9][i]
	  });
  	yunusStartingAyahRow.add(yunusStartingLabel);
	yunusStartingPickerColumn.addRow(yunusStartingAyahRow);	
	}
	yunusStartingPicker.add(yunusStartingPickerColumn);
	win.add(yunusStartingPicker);
} else if (startingSurahName == "Hud") {
	
	var hudStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var hudStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var hudStartingAyahRow = Ti.UI.createPickerRow();
		var hudStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[10][i]
	  });
  	hudStartingAyahRow.add(hudStartingLabel);
	hudStartingPickerColumn.addRow(hudStartingAyahRow);	
	}
	hudStartingPicker.add(hudStartingPickerColumn);
	win.add(hudStartingPicker);
} else if (startingSurahName == "Yusuf") {
	
	var yusufStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var yusufStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var yusufStartingAyahRow = Ti.UI.createPickerRow();
		var yusufStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[11][i]
	  });
  	yusufStartingAyahRow.add(yusufStartingLabel);
	yusufStartingPickerColumn.addRow(yusufStartingAyahRow);	
	}
	yusufStartingPicker.add(yusufStartingPickerColumn);
	win.add(yusufStartingPicker);
} else if (startingSurahName == "ar-Rad") {
	
	var arRadStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var arRadStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var arRadStartingAyahRow = Ti.UI.createPickerRow();
		var arRadStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[12][i]
	  });
  	arRadStartingAyahRow.add(arRadStartingLabel);
	arRadStartingPickerColumn.addRow(arRadStartingAyahRow);	
	}
	arRadStartingPicker.add(arRadStartingPickerColumn);
	win.add(arRadStartingPicker);
} else if (startingSurahName == "Ibrahim") {
	
	var ibrahimStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var ibrahimStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var ibrahimStartingAyahRow = Ti.UI.createPickerRow();
		var ibrahimStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[13][i]
	  });
  	ibrahimStartingAyahRow.add(ibrahimStartingLabel);
	ibrahimStartingPickerColumn.addRow(ibrahimStartingAyahRow);	
	}
	ibrahimStartingPicker.add(ibrahimStartingPickerColumn);
	win.add(ibrahimStartingPicker);
} else if (startingSurahName == "al-Hijr") {
	
	var alHijrStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alHijrStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alHijrStartingAyahRow = Ti.UI.createPickerRow();
		var alHijrStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[14][i]
	  });
  	alHijrStartingAyahRow.add(alHijrStartingLabel);
	alHijrStartingPickerColumn.addRow(alHijrStartingAyahRow);	
	}
	alHijrStartingPicker.add(alHijrStartingPickerColumn);
	win.add(alHijrStartingPicker);
} else if (startingSurahName == "an-Nahl") {
	
	var anNahlStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var anNahlStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var anNahlStartingAyahRow = Ti.UI.createPickerRow();
		var anNahlStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[15][i]
	  });
  	anNahlStartingAyahRow.add(anNahlStartingLabel);
	anNahlStartingPickerColumn.addRow(anNahlStartingAyahRow);	
	}
	anNahlStartingPicker.add(anNahlStartingPickerColumn);
	win.add(anNahlStartingPicker);
} else if (startingSurahName == "Al-Isra") {
	
	var alIsraStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alIsraStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alIsraStartingAyahRow = Ti.UI.createPickerRow();
		var alIsraStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[16][i]
	  });
  	alIsraStartingAyahRow.add(alIsraStartingLabel);
	alIsraStartingPickerColumn.addRow(alIsraStartingAyahRow);	
	}
	alIsraStartingPicker.add(alIsraStartingPickerColumn);
	win.add(alIsraStartingPicker);
} else if (startingSurahName == "Al-Isra") {
	
	var alIsraStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alIsraStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alIsraStartingAyahRow = Ti.UI.createPickerRow();
		var alIsraStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[17][i]
	  });
  	alIsraStartingAyahRow.add(alIsraStartingLabel);
	alIsraStartingPickerColumn.addRow(alIsraStartingAyahRow);	
	}
	alIsraStartingPicker.add(alIsraStartingPickerColumn);
	win.add(alIsraStartingPicker);
} 
else if (startingSurahName == "al-Kahf") {
	
	var alKahfStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alKahfStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alKahfStartingAyahRow = Ti.UI.createPickerRow();
		var alKahfStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[17][i]
	  });
  	alKahfStartingAyahRow.add(alKahfStartingLabel);
	alKahfStartingPickerColumn.addRow(alKahfStartingAyahRow);	
	}
	alKahfStartingPicker.add(alKahfStartingPickerColumn);
	win.add(alKahfStartingPicker);
} else if (startingSurahName == "Maryam") {
	
	var maryamStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var maryamStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var maryamStartingAyahRow = Ti.UI.createPickerRow();
		var maryamStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[18][i]
	  });
  	maryamStartingAyahRow.add(maryamStartingLabel);
	maryamStartingPickerColumn.addRow(maryamStartingAyahRow);	
	}
	maryamStartingPicker.add(maryamStartingPickerColumn);
	win.add(maryamStartingPicker);
} else if (startingSurahName == "Ta Ha") {
	
	var TaHaStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var TaHaStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var TaHaStartingAyahRow = Ti.UI.createPickerRow();
		var TaHaStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[19][i]
	  });
  	TaHaStartingAyahRow.add(TaHaStartingLabel);
	TaHaStartingPickerColumn.addRow(TaHaStartingAyahRow);	
	}
	TaHaStartingPicker.add(TaHaStartingPickerColumn);
	win.add(TaHaStartingPicker);
} else if (startingSurahName == "al-Anbiya") {
	
	var alAnbiyaStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alAnbiyaStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alAnbiyStartingAyahRow = Ti.UI.createPickerRow();
		var alAnbiyaStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[20][i]
	  });
  	alAnbiyStartingAyahRow.add(alAnbiyaStartingLabel);
	alAnbiyaStartingPickerColumn.addRow(alAnbiyStartingAyahRow);	
	}
	alAnbiyaStartingPicker.add(alAnbiyaStartingPickerColumn);
	win.add(alAnbiyaStartingPicker);
} else if (startingSurahName == "al-Hajj") {
	
	var alHajjStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alHajjStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alHajjStartingAyahRow = Ti.UI.createPickerRow();
		var alHajjStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[21][i]
	  });
  	alHajjStartingAyahRow.add(alHajjStartingLabel);
	alHajjStartingPickerColumn.addRow(alHajjStartingAyahRow);	
	}
	alHajjStartingPicker.add(alHajjStartingPickerColumn);
	win.add(alHajjStartingPicker);
} else if (startingSurahName == "al-Muminun") {
	
	var alMuminunStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alMuminunStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alMuminunStartingAyahRow = Ti.UI.createPickerRow();
		var alMuminunStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[22][i]
	  });
  	alMuminunStartingAyahRow.add(alMuminunStartingLabel);
	alMuminunStartingPickerColumn.addRow(alMuminunStartingAyahRow);	
	}
	alMuminunStartingPicker.add(alMuminunStartingPickerColumn);
	win.add(alMuminunStartingPicker);
} else if (startingSurahName == "an-Nur") {
	
	var anNurStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var anNurStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var anNurStartingAyahRow = Ti.UI.createPickerRow();
		var anNurStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[23][i]
	  });
  	anNurStartingAyahRow.add(anNurStartingLabel);
	anNurStartingPickerColumn.addRow(anNurStartingAyahRow);	
	}
	anNurStartingPicker.add(anNurStartingPickerColumn);
	win.add(anNurStartingPicker);
} else if (startingSurahName == "al-Furqan") {
	
	var alFurqanStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alFurqanStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alFurqanStartingAyahRow = Ti.UI.createPickerRow();
		var alFurqanStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[24][i]
	  });
  	alFurqanStartingAyahRow.add(alFurqanStartingLabel);
	alFurqanStartingPickerColumn.addRow(alFurqanStartingAyahRow);	
	}
	alFurqanStartingPicker.add(alFurqanStartingPickerColumn);
	win.add(alFurqanStartingPicker);
} else if (startingSurahName == "ash-Shu'ara") {
	//ashShuara
	var ashShuaraStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var ashShuaraStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var ashShuaraStartingAyahRow = Ti.UI.createPickerRow();
		var ashShuaraStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[25][i]
	  });
  	ashShuaraStartingAyahRow.add(ashShuaraStartingLabel);
	ashShuaraStartingPickerColumn.addRow(ashShuaraStartingAyahRow);	
	}
	ashShuaraStartingPicker.add(ashShuaraStartingPickerColumn);
	win.add(ashShuaraStartingPicker);
} else if (startingSurahName == "an-Naml") {
	
	var anNamlStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var anNamlStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var anNamlStartingAyahRow = Ti.UI.createPickerRow();
		var anNamlStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[26][i]
	  });
  	anNamlStartingAyahRow.add(anNamlStartingLabel);
	anNamlStartingPickerColumn.addRow(anNamlStartingAyahRow);	
	}
	anNamlStartingPicker.add(anNamlStartingPickerColumn);
	win.add(anNamlStartingPicker);
} else if (startingSurahName == "al-Qasas") {
	
	var alQasasStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alQasasStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alQasasStartingAyahRow = Ti.UI.createPickerRow();
		var alQasasStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[27][i]
	  });
  	alQasasStartingAyahRow.add(alQasasStartingLabel);
	alQasasStartingPickerColumn.addRow(alQasasStartingAyahRow);	
	}
	alQasasStartingPicker.add(alQasasStartingPickerColumn);
	win.add(alQasasStartingPicker);
} else if (startingSurahName == "al-Ankabut") {
	
	var alAnkabutStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alAnkabutStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alAnkabutStartingAyahRow = Ti.UI.createPickerRow();
		var alAnkabutStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[28][i]
	  });
  	alAnkabutStartingAyahRow.add(alAnkabutStartingLabel);
	alAnkabutStartingPickerColumn.addRow(alAnkabutStartingAyahRow);	
	}
	alAnkabutStartingPicker.add(alAnkabutStartingPickerColumn);
	win.add(alAnkabutStartingPicker);
} else if (startingSurahName == "ar-Rum") {
	
	var arRumStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var arRumStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var arRumStartingAyahRow = Ti.UI.createPickerRow();
		var arRumStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[29][i]
	  });
  	arRumStartingAyahRow.add(arRumStartingLabel);
	arRumStartingPickerColumn.addRow(arRumStartingAyahRow);	
	}
	arRumStartingPicker.add(arRumStartingPickerColumn);
	win.add(arRumStartingPicker);
} else if (startingSurahName == "Luqman") {
	
	var LuqmanStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var LuqmanStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var LuqmanStartingAyahRow = Ti.UI.createPickerRow();
		var LuqmanStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[30][i]
	  });
  	LuqmanStartingAyahRow.add(LuqmanStartingLabel);
	LuqmanStartingPickerColumn.addRow(LuqmanStartingAyahRow);	
	}
	LuqmanStartingPicker.add(LuqmanStartingPickerColumn);
	win.add(LuqmanStartingPicker);
} else if (startingSurahName == "as-Sajdah") {
	
	var asSajdahStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var asSajdahStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var asSajdahStartingAyahRow = Ti.UI.createPickerRow();
		var asSajdahStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[31][i]
	  });
  	asSajdahStartingAyahRow.add(asSajdahStartingLabel);
	asSajdahStartingPickerColumn.addRow(asSajdahStartingAyahRow);	
	}
	asSajdahStartingPicker.add(asSajdahStartingPickerColumn);
	win.add(asSajdahStartingPicker);
} else if (startingSurahName == "al-Ahzab") {
	
	var alAhzabStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alAhzabStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alAhzabStartingAyahRow = Ti.UI.createPickerRow();
		var alAhzabStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[32][i]
	  });
  	alAhzabStartingAyahRow.add(alAhzabStartingLabel);
	alAhzabStartingPickerColumn.addRow(alAhzabStartingAyahRow);	
	}
	alAhzabStartingPicker.add(alAhzabStartingPickerColumn);
	win.add(alAhzabStartingPicker);
} else if (startingSurahName == "Saba") {
	
	var SabaStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var SabaStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var SabaStartingAyahRow = Ti.UI.createPickerRow();
		var SabaStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[33][i]
	  });
  	SabaStartingAyahRow.add(SabaStartingLabel);
	SabaStartingPickerColumn.addRow(SabaStartingAyahRow);	
	}
	SabaStartingPicker.add(SabaStartingPickerColumn);
	win.add(SabaStartingPicker);
} else if (startingSurahName == "Fatir") {
	
	var FatirStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var FatirStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var FatirStartingAyahRow = Ti.UI.createPickerRow();
		var FatirStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[34][i]
	  });
  	FatirStartingAyahRow.add(FatirStartingLabel);
	FatirStartingPickerColumn.addRow(FatirStartingAyahRow);	
	}
	FatirStartingPicker.add(FatirStartingPickerColumn);
	win.add(FatirStartingPicker);
} else if (startingSurahName == "Ya-Sin") {
	
	var YaSinStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var YaSinStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var YaSinStartingAyahRow = Ti.UI.createPickerRow();
		var YaSinStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[35][i]
	  });
  	YaSinStartingAyahRow.add(YaSinStartingLabel);
	YaSinStartingPickerColumn.addRow(YaSinStartingAyahRow);	
	}
	YaSinStartingPicker.add(YaSinStartingPickerColumn);
	win.add(YaSinStartingPicker);
} else if (startingSurahName == "as-Saffat") {
	
	var asSaffatStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var asSaffatStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var asSaffatStartingAyahRow = Ti.UI.createPickerRow();
		var asSaffatStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[36][i]
	  });
  	asSaffatStartingAyahRow.add(asSaffatStartingLabel);
	asSaffatStartingPickerColumn.addRow(asSaffatStartingAyahRow);	
	}
	asSaffatStartingPicker.add(asSaffatStartingPickerColumn);
	win.add(asSaffatStartingPicker);
} else if (startingSurahName == "Sad") {
	
	var SadPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var SadStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var SadStartingAyahRow = Ti.UI.createPickerRow();
		var SadStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[37][i]
	  });
  	SadStartingAyahRow.add(SadStartingLabel);
	SadStartingPickerColumn.addRow(SadStartingAyahRow);	
	}
	SadStartingPicker.add(SadStartingPickerColumn);
	win.add(SadStartingPicker);
} else if (startingSurahName == "az-Zumar") {
	
	var azZumarStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var azZumarStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var azZumarStartingAyahRow = Ti.UI.createPickerRow();
		var azZumarStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[38][i]
	  });
  	azZumarStartingAyahRow.add(azZumarStartingLabel);
	azZumarStartingPickerColumn.addRow(azZumarStartingAyahRow);	
	}
	azZumarStartingPicker.add(azZumarStartingPickerColumn);
	win.add(azZumarStartingPicker);
} else if (startingSurahName == "Ghafir") {
	
	var GhafirStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var GhafirStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var GhafirStartingAyahRow = Ti.UI.createPickerRow();
		var GhafirStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[39][i]
	  });
  	GhafirStartingAyahRow.add(GhafirStartingLabel);
	GhafirStartingPickerColumn.addRow(GhafirStartingAyahRow);	
	}
	GhafirStartingPicker.add(GhafirStartingPickerColumn);
	win.add(GhafirStartingPicker);
} else if (startingSurahName == "Fussilat") {
	
	var FussilatStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var FussilatStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var FussilatStartingAyahRow = Ti.UI.createPickerRow();
		var FussilatStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[40][i]
	  });
  	FussilatStartingAyahRow.add(FussilatStartingLabel);
	FussilatStartingPickerColumn.addRow(FussilatStartingAyahRow);	
	}
	FussilatStartingPicker.add(FussilatStartingPickerColumn);
	win.add(FussilatStartingPicker);
} else if (startingSurahName == "ash-Shuraa") {
	
	var ashShuraaStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var ashShuraaStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var ashShuraaStartingAyahRow = Ti.UI.createPickerRow();
		var ashShuraaStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[41][i]
	  });
  	ashShuraaStartingAyahRow.add(ashShuraaStartingLabel);
	ashShuraaStartingPickerColumn.addRow(ashShuraaStartingAyahRow);	
	}
	ashShuraaStartingPicker.add(ashShuraaStartingPickerColumn);
	win.add(ashShuraaStartingPicker);
} else if (startingSurahName == "az-Zukhruf") {
	
	var azZukhrufStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var azZukhrufStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var azZukhrufStartingAyahRow = Ti.UI.createPickerRow();
		var azZukhrufStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[42][i]
	  });
  	azZukhrufStartingAyahRow.add(azZukhrufStartingLabel);
	azZukhrufStartingPickerColumn.addRow(azZukhrufStartingAyahRow);	
	}
	azZukhrufStartingPicker.add(azZukhrufStartingPickerColumn);
	win.add(azZukhrufStartingPicker);
} else if (startingSurahName == "ad-Dukhan") {
	
	var adDukhanStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var adDukhanStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var adDukhanStartingAyahRow = Ti.UI.createPickerRow();
		var adDukhanStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[43][i]
	  });
  	adDukhanStartingAyahRow.add(adDukhanStartingLabel);
	adDukhanStartingPickerColumn.addRow(adDukhanStartingAyahRow);	
	}
	adDukhanStartingPicker.add(adDukhanStartingPickerColumn);
	win.add(adDukhanStartingPicker);
} else if (startingSurahName == "al-Jathiyah") {
	
	var alJathiyahStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alJathiyahStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alJathiyahStartingAyahRow = Ti.UI.createPickerRow();
		var alJathiyahStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[44][i]
	  });
  	alJathiyahStartingAyahRow.add(alJathiyahStartingLabel);
	alJathiyahStartingPickerColumn.addRow(alJathiyahStartingAyahRow);	
	}
	alJathiyahStartingPicker.add(alJathiyahStartingPickerColumn);
	win.add(alJathiyahStartingPicker);
} else if (startingSurahName == "al-Ahqaf") {
	
	var alAhqafStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alAhqafStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alAhqafStartingAyahRow = Ti.UI.createPickerRow();
		var alAhqafStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[45][i]
	  });
  	alAhqafStartingAyahRow.add(alAhqafStartingLabel);
	alAhqafStartingPickerColumn.addRow(alAhqafStartingAyahRow);	
	}
	alAhqafStartingPicker.add(alAhqafStartingPickerColumn);
	win.add(alAhqafStartingPicker);
} else if (startingSurahName == "Muhammad") {
	
	var MuhammadStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var MuhammadStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var MuhammadStartingAyahRow = Ti.UI.createPickerRow();
		var MuhammadStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[46][i]
	  });
  	MuhammadStartingAyahRow.add(MuhammadStartingLabel);
	MuhammadStartingPickerColumn.addRow(MuhammadStartingAyahRow);	
	}
	MuhammadStartingPicker.add(MuhammadStartingPickerColumn);
	win.add(MuhammadStartingPicker);
} else if (startingSurahName == "al-Fath") {
	
	var alFathStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alFathStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alFathStartingAyahRow = Ti.UI.createPickerRow();
		var alFathStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[47][i]
	  });
  	alFathStartingAyahRow.add(alFathStartingLabel);
	alFathStartingPickerColumn.addRow(alFathStartingAyahRow);	
	}
	alFathStartingPicker.add(alFathStartingPickerColumn);
	win.add(alFathStartingPicker);
} else if (startingSurahName == "al-Hujurat") {
	
	var alHujuratStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alHujuratStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alHujuratStartingAyahRow = Ti.UI.createPickerRow();
		var alHujuratStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[48][i]
	  });
  	alHujuratStartingAyahRow.add(alHujuratStartingLabel);
	alHujuratStartingPickerColumn.addRow(alHujuratStartingAyahRow);	
	}
	alHujuratStartingPicker.add(alHujuratStartingPickerColumn);
	win.add(alHujuratStartingPicker);
} else if (startingSurahName == "Qaf") {
	
	var QafStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var QafStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var QafStartingAyahRow = Ti.UI.createPickerRow();
		var QafStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[49][i]
	  });
  	QafStartingAyahRow.add(QafStartingLabel);
	QafStartingPickerColumn.addRow(QafStartingAyahRow);	
	}
	QafStartingPicker.add(QafStartingPickerColumn);
	win.add(QafStartingPicker);
} else if (startingSurahName == "ad-Dhariyat") {
	
	var adDhariyatStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var adDhariyatStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var adDhariyatStartingAyahRow = Ti.UI.createPickerRow();
		var adDhariyatStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[50][i]
	  });
  	adDhariyatStartingAyahRow.add(adDhariyatStartingLabel);
	adDhariyatStartingPickerColumn.addRow(adDhariyatStartingAyahRow);	
	}
	adDhariyatStartingPicker.add(adDhariyatStartingPickerColumn);
	win.add(adDhariyatStartingPicker);
} else if (startingSurahName == "at-Tur") {
	
	var atTurStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var atTurStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var atTurStartingAyahRow = Ti.UI.createPickerRow();
		var atTurStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[51][i]
	  });
  	atTurStartingAyahRow.add(atTurStartingLabel);
	atTurStartingPickerColumn.addRow(atTurStartingAyahRow);	
	}
	atTurStartingPicker.add(atTurStartingPickerColumn);
	win.add(atTurStartingPicker);
} else if (startingSurahName == "an-Najm") {
	
	var anNajmStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var anNajmStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var anNajmStartingAyahRow = Ti.UI.createPickerRow();
		var anNajmStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[52][i]
	  });
  	anNajmStartingAyahRow.add(anNajmStartingLabel);
	anNajmStartingPickerColumn.addRow(anNajmStartingAyahRow);	
	}
	anNajmStartingPicker.add(anNajmStartingPickerColumn);
	win.add(anNajmStartingPicker);
} else if (startingSurahName == "al-Qamar") {
	
	var alQamarStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alQamarStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alQamarStartingAyahRow = Ti.UI.createPickerRow();
		var alQamarStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[53][i]
	  });
  	alQamarStartingAyahRow.add(alQamarStartingLabel);
	alQamarStartingPickerColumn.addRow(alQamarStartingAyahRow);	
	}
	alQamarStartingPicker.add(alQamarStartingPickerColumn);
	win.add(alQamarStartingPicker);
} else if (startingSurahName == "ar-Rahman") {
	
	var arRahmanStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var arRahmanStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var arRahmanStartingAyahRow = Ti.UI.createPickerRow();
		var arRahmanStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[54][i]
	  });
  	arRahmanStartingAyahRow.add(arRahmanStartingLabel);
	arRahmanStartingPickerColumn.addRow(arRahmanStartingAyahRow);	
	}
	arRahmanStartingPicker.add(arRahmanStartingPickerColumn);
	win.add(arRahmanStartingPicker);
} else if (startingSurahName == "al-Waqiah") {
	
	var alWaqiahStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alWaqiahStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alWaqiahStartingAyahRow = Ti.UI.createPickerRow();
		var alWaqiahStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[55][i]
	  });
  	alWaqiahStartingAyahRow.add(alWaqiahStartingLabel);
	alWaqiahStartingPickerColumn.addRow(alWaqiahStartingAyahRow);	
	}
	alWaqiahStartingPicker.add(alWaqiahStartingPickerColumn);
	win.add(alWaqiahStartingPicker);
} else if (startingSurahName == "al-Hadid") {
	
	var alHadidStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alHadidStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alHadidStartingAyahRow = Ti.UI.createPickerRow();
		var alHadidStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[56][i]
	  });
  	alHadidStartingAyahRow.add(alHadidStartingLabel);
	alHadidStartingPickerColumn.addRow(alHadidStartingAyahRow);	
	}
	alHadidStartingPicker.add(alHadidStartingPickerColumn);
	win.add(alHadidStartingPicker);
} else if (startingSurahName == "al-Mujadilah") {
	
	var alMujadilahStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alMujadilahStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alMujadilahStartingAyahRow = Ti.UI.createPickerRow();
		var alMujadilahStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[57][i]
	  });
  	alMujadilahStartingAyahRow.add(alMujadilahStartingLabel);
	alMujadilahStartingPickerColumn.addRow(alMujadilahStartingAyahRow);	
	}
	alMujadilahStartingPicker.add(alMujadilahStartingPickerColumn);
	win.add(alMujadilahStartingPicker);
} else if (startingSurahName == "al-Hashr") {
	
	var alHashrStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alHashrStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alHashrStartingAyahRow = Ti.UI.createPickerRow();
		var alHashrStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[58][i]
	  });
  	alHashrStartingAyahRow.add(alHashrStartingLabel);
	alHashrStartingPickerColumn.addRow(alHashrStartingAyahRow);	
	}
	alHashrStartingPicker.add(alHashrStartingPickerColumn);
	win.add(alHashrStartingPicker);
} else if (startingSurahName == "al-Mumtahanah") {
	
	var alMumtahanahStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alMumtahanahStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alMumtahanahStartingAyahRow = Ti.UI.createPickerRow();
		var alMumtahanahStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[59][i]
	  });
  	alMumtahanahStartingAyahRow.add(alMumtahanahStartingLabel);
	alMumtahanahStartingPickerColumn.addRow(alMumtahanahStartingAyahRow);	
	}
	alMumtahanahStartingPicker.add(alMumtahanahStartingPickerColumn);
	win.add(alMumtahanahStartingPicker);
} else if (startingSurahName == "as-Saff") {
	
	var asSaffStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var asSaffStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var asSaffStartingAyahRow = Ti.UI.createPickerRow();
		var asSaffStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[60][i]
	  });
  	asSaffStartingAyahRow.add(asSaffStartingLabel);
	asSaffStartingPickerColumn.addRow(asSaffStartingAyahRow);	
	}
	asSaffStartingPicker.add(asSaffStartingPickerColumn);
	win.add(asSaffStartingPicker);
} else if (startingSurahName == "al-Jumuah") {
	
	var alJumuahStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alJumuahStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alJumuahStartingAyahRow = Ti.UI.createPickerRow();
		var alJumuahStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[61][i]
	  });
  	alJumuahStartingAyahRow.add(alJumuahStartingLabel);
	alJumuahStartingPickerColumn.addRow(alJumuahStartingAyahRow);	
	}
	alJumuahStartingPicker.add(alJumuahStartingPickerColumn);
	win.add(alJumuahStartingPicker);
}
else if (startingSurahName == "al-Munafiqun") {
	
	var alMunafiqunStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alMunafiqunStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alMunafiqunStartingAyahRow = Ti.UI.createPickerRow();
		var alMunafiqunStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[62][i]
	  });
  	alMunafiqunStartingAyahRow.add(alMunafiqunStartingLabel);
	alMunafiqunStartingPickerColumn.addRow(alMunafiqunStartingAyahRow);	
	}
	alMunafiqunStartingPicker.add(alMunafiqunStartingPickerColumn);
	win.add(alMunafiqunStartingPicker);
}
else if (startingSurahName == "at-Taghabun") {
	
	var atTaghabunStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var atTaghabunStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var atTaghabunStartingAyahRow = Ti.UI.createPickerRow();
		var atTaghabunStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[63][i]
	  });
  	atTaghabunStartingAyahRow.add(atTaghabunStartingLabel);
	atTaghabunStartingPickerColumn.addRow(atTaghabunStartingAyahRow);	
	}
	atTaghabunStartingPicker.add(atTaghabunStartingPickerColumn);
	win.add(atTaghabunStartingPicker);
}
else if (startingSurahName == "at-Talaq") {
	
	var atTalaqStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var atTalaqStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var atTalaqStartingAyahRow = Ti.UI.createPickerRow();
		var atTalaqStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[64][i]
	  });
  	atTalaqStartingAyahRow.add(atTalaqStartingLabel);
	atTalaqStartingPickerColumn.addRow(atTalaqStartingAyahRow);	
	}
	atTalaqStartingPicker.add(atTalaqStartingPickerColumn);
	win.add(atTalaqStartingPicker);
}
else if (startingSurahName == "at-Tahrim") {
	
	var atTahrimStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var atTahrimStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var atTahrimStartingAyahRow = Ti.UI.createPickerRow();
		var atTahrimStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[65][i]
	  });
  	atTahrimStartingAyahRow.add(atTahrimStartingLabel);
	atTahrimStartingPickerColumn.addRow(atTahrimStartingAyahRow);	
	}
	atTahrimStartingPicker.add(atTahrimStartingPickerColumn);
	win.add(atTahrimStartingPicker);
}
else if (startingSurahName == "al-Mulk") {
	
	var alMulkStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alMulkStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alMulkStartingAyahRow = Ti.UI.createPickerRow();
		var alMulkStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[66][i]
	  });
  	alMulkStartingAyahRow.add(alMulkStartingLabel);
	alMulkStartingPickerColumn.addRow(alMulkStartingAyahRow);	
	}
	alMulkStartingPicker.add(alMulkStartingPickerColumn);
	win.add(alMulkStartingPicker);
}
else if (startingSurahName == "al-Qalam") {
	
	var alQalamStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alQalamStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alQalamStartingAyahRow = Ti.UI.createPickerRow();
		var alQalamStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[67][i]
	  });
  	alQalamStartingAyahRow.add(alQalamStartingLabel);
	alQalamStartingPickerColumn.addRow(alQalamStartingAyahRow);	
	}
	alQalamStartingPicker.add(alQalamStartingPickerColumn);
	win.add(alQalamStartingPicker);
}
else if (startingSurahName == "al-Haqqah") {
	
	var alHaqqahStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alHaqqahStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alHaqqahStartingAyahRow = Ti.UI.createPickerRow();
		var alHaqqahStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[68][i]
	  });
  	alHaqqahStartingAyahRow.add(alHaqqahStartingLabel);
	alHaqqahStartingPickerColumn.addRow(alHaqqahStartingAyahRow);	
	}
	alHaqqahStartingPicker.add(alHaqqahStartingPickerColumn);
	win.add(alHaqqahStartingPicker);
}
else if (startingSurahName == "al-Ma\'arij") {
	
	var alMaarijStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alMaarijStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alMaarijStartingAyahRow = Ti.UI.createPickerRow();
		var alMaarijStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[69][i]
	  });
  	alMaarijStartingAyahRow.add(alMaarijStartingLabel);
	alMaarijStartingPickerColumn.addRow(alMaarijStartingAyahRow);	
	}
	alMaarijStartingPicker.add(alMaarijStartingPickerColumn);
	win.add(alMaarijStartingPicker);
}
else if (startingSurahName == "Nuh") {
	
	var NuhStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var NuhStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var NuhStartingAyahRow = Ti.UI.createPickerRow();
		var NuhStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[70][i]
	  });
  	NuhStartingAyahRow.add(NuhStartingLabel);
	NuhStartingPickerColumn.addRow(NuhStartingAyahRow);	
	}
	NuhStartingPicker.add(NuhStartingPickerColumn);
	win.add(NuhStartingPicker);
}
else if (startingSurahName == "al-Jinn") {
	
	var alJinnStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alJinnStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alJinnStartingAyahRow = Ti.UI.createPickerRow();
		var alJinnStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[71][i]
	  });
  	alJinnStartingAyahRow.add(alJinnStartingLabel);
	alJinnStartingPickerColumn.addRow(alJinnStartingAyahRow);	
	}
	alJinnStartingPicker.add(alJinnStartingPickerColumn);
	win.add(alJinnStartingPicker);
}
else if (startingSurahName == "al-Muzammil") {
	
	var alMuzammilStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alMuzammilStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alMuzammilStartingAyahRow = Ti.UI.createPickerRow();
		var alMuzammilStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[72][i]
	  });
  	alMuzammilStartingAyahRow.add(alMuzammilStartingLabel);
	alMuzammilStartingPickerColumn.addRow(alMuzammilStartingAyahRow);	
	}
	alMuzammilStartingPicker.add(alMuzammilStartingPickerColumn);
	win.add(alMuzammilStartingPicker);
}
else if (startingSurahName == "al-Mudathir") {
	
	var alMudathirStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alMudathirStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alMudathirStartingAyahRow = Ti.UI.createPickerRow();
		var alMudathirStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[73][i]
	  });
  	alMudathirStartingAyahRow.add(alMudathirStartingLabel);
	alMudathirStartingPickerColumn.addRow(alMudathirStartingAyahRow);	
	}
	alMudathirStartingPicker.add(alMudathirStartingPickerColumn);
	win.add(alMudathirStartingPicker);
}
else if (startingSurahName == "al-Qiyamah") {
	
	var alQiyamahStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alQiyamahStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alQiyamahStartingAyahRow = Ti.UI.createPickerRow();
		var alQiyamahStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[74][i]
	  });
  	alQiyamahStartingAyahRow.add(alQiyamahStartingLabel);
	alQiyamahStartingPickerColumn.addRow(alQiyamahStartingAyahRow);	
	}
	alQiyamahStartingPicker.add(alQiyamahStartingPickerColumn);
	win.add(alQiyamahStartingPicker);
}
else if (startingSurahName == "al-Insan") {
	
	var alInsanStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alInsanStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alInsanStartingAyahRow = Ti.UI.createPickerRow();
		var alInsanStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[75][i]
	  });
  	alInsanStartingAyahRow.add(alInsanStartingLabel);
	alInsanStartingPickerColumn.addRow(alInsanStartingAyahRow);	
	}
	alInsanStartingPicker.add(alInsanStartingPickerColumn);
	win.add(alInsanStartingPicker);
}
else if (startingSurahName == "al-Mursalat") {
	
	var alMursalatStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alMursalatStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alMursalatStartingAyahRow = Ti.UI.createPickerRow();
		var alMursalatStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[76][i]
	  });
  	alMursalatStartingAyahRow.add(alMursalatStartingLabel);
	alMursalatStartingPickerColumn.addRow(alMursalatStartingAyahRow);	
	}
	alMursalatStartingPicker.add(alMursalatStartingPickerColumn);
	win.add(alMursalatStartingPicker);
}
else if (startingSurahName == "an-Naba") {
	
	var anNabaStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var anNabaStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var anNabaStartingAyahRow = Ti.UI.createPickerRow();
		var anNabaStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[77][i]
	  });
  	anNabaStartingAyahRow.add(anNabaStartingLabel);
	anNabaStartingPickerColumn.addRow(anNabaStartingAyahRow);	
	}
	anNabaStartingPicker.add(anNabaStartingPickerColumn);
	win.add(anNabaStartingPicker);
}
else if (startingSurahName == "an-Naziat") {
	
	var anNaziatStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var anNaziatStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var anNaziatStartingAyahRow = Ti.UI.createPickerRow();
		var anNaziatStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[78][i]
	  });
  	anNaziatStartingAyahRow.add(anNaziatStartingLabel);
	anNaziatStartingPickerColumn.addRow(anNaziatStartingAyahRow);	
	}
	anNaziatStartingPicker.add(anNaziatStartingPickerColumn);
	win.add(anNaziatStartingPicker);
}
else if (startingSurahName == "\'Abasa") {
	
	var AbasaStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var AbasaStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var AbasaStartingAyahRow = Ti.UI.createPickerRow();
		var AbasaStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[79][i]
	  });
  	AbasaStartingAyahRow.add(AbasaStartingLabel);
	AbasaStartingPickerColumn.addRow(AbasaStartingAyahRow);	
	}
	AbasaStartingPicker.add(AbasaStartingPickerColumn);
	win.add(AbasaStartingPicker);
}
else if (startingSurahName == "at-Takwir") {
	
	var atTakwirStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var atTakwirPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var atTakwirStartingAyahRow = Ti.UI.createPickerRow();
		var atTakwirStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[80][i]
	  });
  	atTakwirStartingAyahRow.add(atTakwirStartingLabel);
	atTakwirStartingPickerColumn.addRow(atTakwirStartingAyahRow);	
	}
	atTakwirStartingPicker.add(atTakwirStartingPickerColumn);
	win.add(atTakwirStartingPicker);
}
else if (startingSurahName == "al-Infitar") {
	
	var alInfitarStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alInfitarStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alInfitarStartingAyahRow = Ti.UI.createPickerRow();
		var alInfitarStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[81][i]
	  });
  	alInfitarStartingAyahRow.add(alInfitarStartingLabel);
	alInfitarStartingPickerColumn.addRow(alInfitarStartingAyahRow);	
	}
	alInfitarStartingPicker.add(alInfitarStartingPickerColumn);
	win.add(alInfitarStartingPicker);
}
else if (startingSurahName == "Al-Mutaffifeen") {
	
	var AlMutaffifeenStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var AlMutaffifeenStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var AlMutaffifeenStartingAyahRow = Ti.UI.createPickerRow();
		var AlMutaffifeenStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[82][i]
	  });
  	AlMutaffifeenStartingAyahRow.add(AlMutaffifeenStartingLabel);
	AlMutaffifeenStartingPickerColumn.addRow(AlMutaffifeenStartingAyahRow);	
	}
	AlMutaffifeenStartingPicker.add(AlMutaffifeenStartingPickerColumn);
	win.add(AlMutaffifeenStartingPicker);
}
else if (startingSurahName == "al-Inshiqaq") {
	
	var alInshiqaqStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alInshiqaqStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alInshiqaqStartingAyahRow = Ti.UI.createPickerRow();
		var alInshiqaqStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[83][i]
	  });
  	alInshiqaqStartingAyahRow.add(alInshiqaqStartingLabel);
	alInshiqaqStartingPickerColumn.addRow(alInshiqaqStartingAyahRow);	
	}
	alInshiqaqStartingPicker.add(alInshiqaqStartingPickerColumn);
	win.add(alInshiqaqStartingPicker);
}
else if (startingSurahName == "al-Buruj") {
	
	var alBurujStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alBurujStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alBurujStartingAyahRow = Ti.UI.createPickerRow();
		var alBurujStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[84][i]
	  });
  	alBurujStartingAyahRow.add(alBurujStartingLabel);
	alBurujStartingPickerColumn.addRow(alBurujStartingAyahRow);	
	}
	alBurujStartingPicker.add(alBurujStartingPickerColumn);
	win.add(alBurujStartingPicker);
}
else if (startingSurahName == "at-Tariq") {
	
	var atTariqStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var atTariqStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var atTariqStartingAyahRow = Ti.UI.createPickerRow();
		var atTariqStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[85][i]
	  });
  	atTariqStartingAyahRow.add(atTariqStartingLabel);
	atTariqStartingPickerColumn.addRow(atTariqStartingAyahRow);	
	}
	atTariqStartingPicker.add(atTariqStartingPickerColumn);
	win.add(atTariqStartingPicker);
}
else if (startingSurahName == "al-A\'la") {
	
	var alAlaStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alAlaStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alAlaStartingAyahRow = Ti.UI.createPickerRow();
		var alAlaStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[86][i]
	  });
  	alAlaStartingAyahRow.add(alAlaStartingLabel);
	alAlaStartingPickerColumn.addRow(alAlaStartingAyahRow);	
	}
	alAlaStartingPicker.add(alAlaStartingPickerColumn);
	win.add(alAlaStartingPicker);
}
else if (startingSurahName == "al-Ghashiya") {
	
	var alGhashiyaStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alGhashiyaStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alGhashiyaStartingAyahRow = Ti.UI.createPickerRow();
		var alGhashiyaStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[87][i]
	  });
  	alGhashiyaStartingAyahRow.add(alGhashiyaStartingLabel);
	alGhashiyaStartingPickerColumn.addRow(alGhashiyaStartingAyahRow);	
	}
	alGhashiyaStartingPicker.add(alGhashiyaStartingPickerColumn);
	win.add(alGhashiyaStartingPicker);
}
else if (startingSurahName == "al-Fajr") {
	
	var alFajrStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alFajrStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alFajrStartingAyahRow = Ti.UI.createPickerRow();
		var alFajrStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[88][i]
	  });
  	alFajrStartingAyahRow.add(alFajrStartingLabel);
	alFajrStartingPickerColumn.addRow(alFajrStartingAyahRow);	
	}
	alFajrStartingPicker.add(alFajrStartingPickerColumn);
	win.add(alFajrStartingPicker);
}
else if (startingSurahName == "al-Balad") {
	
	var alBaladStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alBaladStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alBaladStartingAyahRow = Ti.UI.createPickerRow();
		var alBaladStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[89][i]
	  });
  	alBaladStartingAyahRow.add(alBaladStartingLabel);
	alBaladStartingPickerColumn.addRow(alBaladStartingAyahRow);	
	}
	alBaladStartingPicker.add(alBaladStartingPickerColumn);
	win.add(alBaladStartingPicker);
}
else if (startingSurahName == "ash-Shams") {
	
	var ashShamsStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var ashShamsStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var ashShamsStartingAyahRow = Ti.UI.createPickerRow();
		var ashShamsStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[90][i]
	  });
  	ashShamsStartingAyahRow.add(ashShamsStartingLabel);
	ashShamsStartingPickerColumn.addRow(ashShamsStartingAyahRow);	
	}
	ashShamsStartingPicker.add(ashShamsStartingPickerColumn);
	win.add(ashShamsStartingPicker);
}
else if (startingSurahName == "al-Layl") {
	
	var alLaylStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alLaylStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alLaylStartingAyahRow = Ti.UI.createPickerRow();
		var alLaylStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[91][i]
	  });
  	alLaylStartingAyahRow.add(alLaylStartingLabel);
	alLaylStartingPickerColumn.addRow(alLaylStartingAyahRow);	
	}
	alLaylStartingPicker.add(alLaylStartingPickerColumn);
	win.add(alLaylStartingPicker);
}
else if (startingSurahName == "ad-Duha") {
	
	var adDuhaStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var adDuhaStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var adDuhaStartingAyahRow = Ti.UI.createPickerRow();
		var adDuhaStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[92][i]
	  });
  	adDuhaStartingAyahRow.add(adDuhaStartingLabel);
	adDuhaStartingPickerColumn.addRow(adDuhaStartingAyahRow);	
	}
	adDuhaStartingPicker.add(adDuhaStartingPickerColumn);
	win.add(adDuhaStartingPicker);
}
else if (startingSurahName == "ash-Sharh") {
	
	var ashSharhStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var ashSharhStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var ashSharhStartingAyahRow = Ti.UI.createPickerRow();
		var ashSharhStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[93][i]
	  });
  	ashSharhStartingAyahRow.add(ashSharhStartingLabel);
	ashSharhStartingPickerColumn.addRow(ashSharhStartingAyahRow);	
	}
	ashSharhStartingPicker.add(ashSharhStartingPickerColumn);
	win.add(ashSharhStartingPicker);
}
else if (startingSurahName == "at-Tin") {
	
	var atTinStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var atTinStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var atTinStartingAyahRow = Ti.UI.createPickerRow();
		var atTinStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[94][i]
	  });
  	atTinStartingAyahRow.add(atTinStartingLabel);
	atTinStartingPickerColumn.addRow(atTinStartingAyahRow);	
	}
	atTinStartingPicker.add(atTinStartingPickerColumn);
	win.add(atTinStartingPicker);
}
else if (startingSurahName == "al-\'Alaq") {
	
	var alAlaqStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alAlaqStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alAlaqStartingAyahRow = Ti.UI.createPickerRow();
		var alAlaqStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[95][i]
	  });
  	alAlaqStartingAyahRow.add(alAlaqStartingLabel);
	alAlaqStartingPickerColumn.addRow(alAlaqStartingAyahRow);	
	}
	alAlaqStartingPicker.add(alAlaqStartingPickerColumn);
	win.add(alAlaqStartingPicker);
}
else if (startingSurahName == "al-Qadr") {
	
	var alQadrStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alQadrStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alQadrStartingAyahRow = Ti.UI.createPickerRow();
		var alQadrStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[96][i]
	  });
  	alQadrStartingAyahRow.add(alQadrStartingLabel);
	alQadrStartingPickerColumn.addRow(alQadrStartingAyahRow);	
	}
	alQadrStartingPicker.add(alQadrStartingPickerColumn);
	win.add(alQadrStartingPicker);
}
else if (startingSurahName == "al-Bayyinah") {
	
	var alBayyinahStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alBayyinahStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alBayyinahStartingAyahRow = Ti.UI.createPickerRow();
		var alBayyinahStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[97][i]
	  });
  	alBayyinahStartingAyahRow.add(alBayyinahStartingLabel);
	alBayyinahStartingPickerColumn.addRow(alBayyinahStartingAyahRow);	
	}
	alBayyinahStartingPicker.add(alBayyinahStartingPickerColumn);
	win.add(alBayyinahStartingPicker);
}
else if (startingSurahName == "Az-Zalzala") {
	
	var AzZalzalaStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var AzZalzalaStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var AzZalzalaStartingAyahRow = Ti.UI.createPickerRow();
		var AzZalzalaStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[98][i]
	  });
  	AzZalzalaStartingAyahRow.add(AzZalzalaStartingLabel);
	AzZalzalaStartingPickerColumn.addRow(AzZalzalaStartingAyahRow);	
	}
	AzZalzalaStartingPicker.add(AzZalzalaStartingPickerColumn);
	win.add(AzZalzalaStartingPicker);
} 
else if (startingSurahName == "al-\'Adiyat") {
	
	var alAdiyatStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alAdiyatStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alAdiyatStartingAyahRow = Ti.UI.createPickerRow();
		var alAdiyatStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[99][i]
	  });
  	alAdiyatStartingAyahRow.add(alAdiyatStartingLabel);
	alAdiyatStartingPickerColumn.addRow(alAdiyatStartingAyahRow);	
	}
	alAdiyatStartingPicker.add(alAdiyatStartingPickerColumn);
	win.add(alAdiyatStartingPicker);
}
else if (startingSurahName == "al-Qari\'ah") {
	
	var alQariahStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alQariahStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alQariahStartingAyahRow = Ti.UI.createPickerRow();
		var alQariahStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[100][i]
	  });
  	alQariahStartingAyahRow.add(alQariahStartingLabel);
	alQariahStartingPickerColumn.addRow(alQariahStartingAyahRow);	
	}
	alQariahStartingPicker.add(alQariahStartingPickerColumn);
	win.add(alQariahStartingPicker);
}
else if (startingSurahName == "at-Takathur") {
	
	var atTakathurStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var atTakathurStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var atTakathurStartingAyahRow = Ti.UI.createPickerRow();
		var atTakathurStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[101][i]
	  });
  	atTakathurStartingAyahRow.add(atTakathurStartingLabel);
	atTakathurStartingPickerColumn.addRow(atTakathurStartingAyahRow);	
	}
	atTakathurStartingPicker.add(atTakathurStartingPickerColumn);
	win.add(atTakathurStartingPicker);
}
else if (startingSurahName == "al-\'Asr") {
	
	var alAsrStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alAsrStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alAsrStartingAyahRow = Ti.UI.createPickerRow();
		var alAsrStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[102][i]
	  });
  	alAsrStartingAyahRow.add(alAsrStartingLabel);
	alAsrStartingPickerColumn.addRow(alAsrStartingAyahRow);	
	}
	alAsrStartingPicker.add(alAsrStartingPickerColumn);
	win.add(alAsrStartingPicker);
}
else if (startingSurahName == "al-Humazah") {
	
	var alHumazahStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alHumazahStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alHumazahStartingAyahRow = Ti.UI.createPickerRow();
		var alHumazahStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[103][i]
	  });
  	alHumazahStartingAyahRow.add(alHumazahStartingLabel);
	alHumazahStartingPickerColumn.addRow(alHumazahStartingAyahRow);	
	}
	alHumazahStartingPicker.add(alHumazahStartingPickerColumn);
	win.add(alHumazahStartingPicker);
}
else if (startingSurahName == "al-Fil") {
	
	var alFilStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alFilStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alFilStartingAyahRow = Ti.UI.createPickerRow();
		var alFilStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[104][i]
	  });
  	alFilStartingAyahRow.add(alFilStartingLabel);
	alFilStartingPickerColumn.addRow(alFilStartingAyahRow);	
	}
	alFilStartingPicker.add(alFilStartingPickerColumn);
	win.add(alFilStartingPicker);
}
else if (startingSurahName == "al-Quraish") {
	
	var alQuraishStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alQuraishStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alQuraishStartingAyahRow = Ti.UI.createPickerRow();
		var alQuraishStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[105][i]
	  });
  	alQuraishStartingAyahRow.add(alQuraishStartingLabel);
	alQuraishStartingPickerColumn.addRow(alQuraishStartingAyahRow);	
	}
	alQuraishStartingPicker.add(alQuraishStartingPickerColumn);
	win.add(alQuraishStartingPicker);
}
else if (startingSurahName == "al-Ma\'un") {
	
	var alMaunStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alMaunStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alMaunStartingAyahRow = Ti.UI.createPickerRow();
		var alMaunStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[106][i]
	  });
  	alMaunStartingAyahRow.add(alMaunStartingLabel);
	alMaunStartingPickerColumn.addRow(alMaunStartingAyahRow);	
	}
	alMaunStartingPicker.add(alMaunStartingPickerColumn);
	win.add(alMaunStartingPicker);
}
else if (startingSurahName == "al-Kawthar") {
	
	var alKawtharStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alKawtharStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alKawtharStartingAyahRow = Ti.UI.createPickerRow();
		var alKawtharStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[107][i]
	  });
  	alKawtharStartingAyahRow.add(alKawtharStartingLabel);
	alKawtharStartingPickerColumn.addRow(alKawtharStartingAyahRow);	
	}
	alKawtharStartingPicker.add(alKawtharStartingPickerColumn);
	win.add(alKawtharStartingPicker);
}
else if (startingSurahName == "al-Kafirun") {
	
	var alKafirunStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alKafirunStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alKafirunStartingAyahRow = Ti.UI.createPickerRow();
		var alKafirunStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[108][i]
	  });
  	alKafirunStartingAyahRow.add(alKafirunStartingLabel);
	alKafirunStartingPickerColumn.addRow(alKafirunStartingAyahRow);	
	}
	alKafirunStartingPicker.add(alKafirunStartingPickerColumn);
	win.add(alKafirunStartingPicker);
}
else if (startingSurahName == "an-Nasr") {
	
	var anNasrStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var anNasrStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var anNasrStartingAyahRow = Ti.UI.createPickerRow();
		var anNasrStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[109][i]
	  });
  	anNasrStartingAyahRow.add(anNasrStartingLabel);
	anNasrStartingPickerColumn.addRow(anNasrStartingAyahRow);	
	}
	anNasrStartingPicker.add(anNasrStartingPickerColumn);
	win.add(anNasrStartingPicker);
}
else if (startingSurahName == "Al-Masad") {
	
	var AlMasadStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var AlMasadStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var AlMasadStartingAyahRow = Ti.UI.createPickerRow();
		var AlMasadStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[110][i]
	  });
  	AlMasadStartingAyahRow.add(AlMasadStartingLabel);
	AlMasadStartingPickerColumn.addRow(AlMasadStartingAyahRow);	
	}
	AlMasadStartingPicker.add(AlMasadStartingPickerColumn);
	win.add(AlMasadStartingPicker);
}
else if (startingSurahName == "al-Ikhlas") {
	
	var alIkhlasStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alIkhlasStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alIkhlasStartingAyahRow = Ti.UI.createPickerRow();
		var alIkhlasStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[111][i]
	  });
  	alIkhlasStartingAyahRow.add(alIkhlasStartingLabel);
	alIkhlasStartingPickerColumn.addRow(alIkhlasStartingAyahRow);	
	}
	alIkhlasStartingPicker.add(alIkhlasStartingPickerColumn);
	win.add(alIkhlasStartingPicker);
}
else if (startingSurahName == "al-Falaq") {
	
	var alFalaqStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alFalaqStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alFalaqStartingAyahRow = Ti.UI.createPickerRow();
		var alFalaqStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[112][i]
	  });
  	alFalaqStartingAyahRow.add(alFalaqStartingLabel);
	alFalaqStartingPickerColumn.addRow(alFalaqStartingAyahRow);	
	}
	alFalaqStartingPicker.add(alFalaqStartingPickerColumn);
	win.add(alFalaqStartingPicker);
}
else if (startingSurahName == "an-Nas") {
	
	var anNasStartingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top:100,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var anNasStartingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var anNasStartingAyahRow = Ti.UI.createPickerRow();
		var anNasStartingLabel = Ti.UI.createLabel({
	    text: ayatChoices[113][i]
	  });
  	anNasStartingAyahRow.add(anNasStartingLabel);
	anNasStartingPickerColumn.addRow(anNasStartingAyahRow);	
	}
	anNasStartingPicker.add(anNasStartingPickerColumn);
	win.add(anNasStartingPicker);
};

});

var startingAyahValue = Ti.UI.createLabel({
	text: "Ayah: ",
	top: 250,
	left: Ti.UI.Center
});
//This function allows a user to pick the surah and ayat they want to end on. The default is the last page
endingSurahpicker.addEventListener("change",function(lastSurahNameChange){
	console.log("surahChange: JSON.stringify(lastSurahNameChange): "+JSON.stringify(lastSurahNameChange));
	var endingSurahName = lastSurahNameChange.row.title;
	endingSurahValue.text = endingSurahName; 

	// set for Ending ayah picker	
for(j=0; j<surah.length; j++){
		if(surah[j].name == endingSurahValue.text)
		{var count = surah[j].count;}
		console.log("surahChange:" + endingSurahName + " count: "+count);
		};

//Ending Ayats picker per ayat 
if (endingSurahName == "al-Fatihah") {
	console.log(ayatChoices[0]);
	
	var fatihahEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	fatihahEndingPickerColumn = Ti.UI.createPickerColumn();

	for (var i = 0; i <= Page.length; i++) {
		var fatihahEndingAyahRow = Ti.UI.createPickerRow();
		var fatihahEndingLabel = Ti.UI.createLabel({
			text: ayatChoices[0][i]
		});
	fatihahEndingAyahRow.add(fatihahEndingLabel);	
	fatihahEndingPickerColumn.addRow(fatihahEndingAyahRow);
	}
	fatihahEndingPicker.add(fatihahEndingPickerColumn);
	win.add(fatihahEndingPicker);
	
} else if (endingSurahName == "al-Baqarah") {
		//console.log("Baqarah");
		var baqarahEndingPicker = Ti.UI.createPicker({
		//columns: [column2],
	  	selectionIndicator: true,
	 	useSpinner: true, //
	 	top: 402.5,
	  	height: 100,
	  	width: 200,
	  	right: 5
	});	
		var baqarahEndingPickerColumn = Ti.UI.createPickerColumn();
		for (var i = 0; i <= Page.length; i++) {
			
			var baqarahEndingAyahRow = Ti.UI.createPickerRow();
			/****I am going to see if using a label inside of the row will allow me to display all
			 * the verse numbers in that specific surah. The Page variable contains many arrays of
			 * different surah and the last ayat on the pages. I want this Picker to display all ayats.*****/
			var baqarahEndingLabel = Ti.UI.createLabel({
		    text: ayatChoices[1][i]
		  });
	  	baqarahEndingAyahRow.add(baqarahEndingLabel);
		baqarahEndingPickerColumn.addRow(baqarahEndingAyahRow);	
		}
		baqarahEndingPicker.add(baqarahEndingPickerColumn);
		win.add(baqarahEndingPicker);
	
} 
else if (endingSurahName == "al-Imran") {
		var alImranEndingPicker = Ti.UI.createPicker({
		//columns: [column2],
	  	selectionIndicator: true,
	 	useSpinner: true, //
	 	top: 402.5,
	  	height: 100,
	  	width: 200,
	  	right: 5
	});	
		var alImranEndingPickerColumn = Ti.UI.createPickerColumn();
		for (var i = 0; i <= Page.length; i++) {
			
			var alImranEndingAyahRow = Ti.UI.createPickerRow();
			var alImranEndingLabel = Ti.UI.createLabel({
		    text: ayatChoices[2][i]
		  });
	  	alImranEndingAyahRow.add(alImranEndingLabel);
		alImranEndingPickerColumn.addRow(alImranEndingAyahRow);	
		}
		alImranEndingPicker.add(alImranEndingPickerColumn);
		win.add(alImranEndingPicker);
} else if (endingSurahName == "an-Nisa") {
	
	var anNisaEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var anNisaEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var anNisaEndingAyahRow = Ti.UI.createPickerRow();
		var anNisaEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[3][i]
	  });
  	anNisaEndingAyahRow.add(anNisaEndingLabel);
	anNisaEndingPickerColumn.addRow(anNisaEndingAyahRow);	
	}
	anNisaEndingPicker.add(anNisaEndingPickerColumn);
	win.add(anNisaEndingPicker);
} else if (endingSurahName == "al-Maidah") {
	
	var alMaidahEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alMaidahEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alMaidahEndingAyahRow = Ti.UI.createPickerRow();
		var alMaidahEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[4][i]
	  });
  	alMaidahEndingAyahRow.add(alMaidahEndingLabel);
	alMaidahEndingPickerColumn.addRow(alMaidahEndingAyahRow);	
	}
	alMaidahEndingPicker.add(alMaidahEndingPickerColumn);
	win.add(alMaidahEndingPicker);
} else if (endingSurahName == "al-Anam") {
	
	var alAnamEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alAnamEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alAnamEndingAyahRow = Ti.UI.createPickerRow();
		var alAnamEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[5][i]
	  });
  	alAnamEndingAyahRow.add(alAnamEndingLabel);
	alAnamEndingPickerColumn.addRow(alAnamEndingAyahRow);	
	}
	alAnamEndingPicker.add(alAnamEndingPickerColumn);
	win.add(alAnamEndingPicker);
}  else if (endingSurahName == "al-Araf") {
	
	var alArafEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alArafEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alArafEndingAyahRow = Ti.UI.createPickerRow();
		var alArafEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[6][i]
	  });
  	alArafEndingAyahRow.add(alArafEndingLabel);
	alArafEndingPickerColumn.addRow(alArafEndingAyahRow);	
	}
	alArafEndingPicker.add(alArafEndingPickerColumn);
	win.add(alArafEndingPicker);
} 
else if (endingSurahName == "al-Anfal") {
	
	var alAnfalEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alAnfalEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alAnfalEndingAyahRow = Ti.UI.createPickerRow();
		var alAnfalEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[7][i]
	  });
  	alAnfalEndingAyahRow.add(alAnfalEndingLabel);
	alAnfalEndingPickerColumn.addRow(alAnfalEndingAyahRow);	
	}
	alAnfalEndingPicker.add(alAnfalEndingPickerColumn);
	win.add(alAnfalEndingPicker);
} else if (endingSurahName == "at-Tawbah") {
	
	var atTawbahEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var atTawbahEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var atTawbahEndingAyahRow = Ti.UI.createPickerRow();
		var atTawbahEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[8][i]
	  });
  	atTawbahEndingAyahRow.add(atTawbahEndingLabel);
	atTawbahEndingPickerColumn.addRow(atTawbahEndingAyahRow);	
	}
	atTawbahEndingPicker.add(atTawbahEndingPickerColumn);
	win.add(atTawbahEndingPicker);
} else if (endingSurahName == "Yunus") {
	
	var yunusEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var yunusEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var yunusEndingAyahRow = Ti.UI.createPickerRow();
		var yunusEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[9][i]
	  });
  	yunusEndingAyahRow.add(yunusEndingLabel);
	yunusEndingPickerColumn.addRow(yunusEndingAyahRow);	
	}
	yunusEndingPicker.add(yunusEndingPickerColumn);
	win.add(yunusEndingPicker);
} else if (endingSurahName == "Hud") {
	
	var hudEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var hudEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var hudEndingAyahRow = Ti.UI.createPickerRow();
		var hudEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[10][i]
	  });
  	hudEndingAyahRow.add(hudEndingLabel);
	hudEndingPickerColumn.addRow(hudEndingAyahRow);	
	}
	hudEndingPicker.add(hudEndingPickerColumn);
	win.add(hudEndingPicker);
} else if (endingSurahName == "Yusuf") {
	
	var yusufEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var yusufEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var yusufEndingAyahRow = Ti.UI.createPickerRow();
		var yusufEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[11][i]
	  });
  	yusufEndingAyahRow.add(yusufEndingLabel);
	yusufEndingPickerColumn.addRow(yusufEndingAyahRow);	
	}
	yusufEndingPicker.add(yusufEndingPickerColumn);
	win.add(yusufEndingPicker);
} else if (endingSurahName == "ar-Rad") {
	
	var arRadEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var arRadEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var arRadEndingAyahRow = Ti.UI.createPickerRow();
		var arRadEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[12][i]
	  });
  	arRadEndingAyahRow.add(arRadEndingLabel);
	arRadEndingPickerColumn.addRow(arRadEndingAyahRow);	
	}
	arRadEndingPicker.add(arRadEndingPickerColumn);
	win.add(arRadEndingPicker);
} else if (endingSurahName == "Ibrahim") {
	
	var ibrahimEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var ibrahimEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var ibrahimEndingAyahRow = Ti.UI.createPickerRow();
		var ibrahimEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[13][i]
	  });
  	ibrahimEndingAyahRow.add(ibrahimEndingLabel);
	ibrahimEndingPickerColumn.addRow(ibrahimEndingAyahRow);	
	}
	ibrahimEndingPicker.add(ibrahimEndingPickerColumn);
	win.add(ibrahimEndingPicker);
} else if (endingSurahName == "al-Hijr") {
	
	var alHijrEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alHijrEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alHijrEndingAyahRow = Ti.UI.createPickerRow();
		var alHijrEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[14][i]
	  });
  	alHijrEndingAyahRow.add(alHijrEndingLabel);
	alHijrEndingPickerColumn.addRow(alHijrEndingAyahRow);	
	}
	alHijrEndingPicker.add(alHijrEndingPickerColumn);
	win.add(alHijrEndingPicker);
} else if (endingSurahName == "an-Nahl") {
	
	var anNahlEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var anNahlEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var anNahlEndingAyahRow = Ti.UI.createPickerRow();
		var anNahlEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[15][i]
	  });
  	anNahlEndingAyahRow.add(anNahlEndingLabel);
	anNahlEndingPickerColumn.addRow(anNahlEndingAyahRow);	
	}
	anNahlEndingPicker.add(anNahlEndingPickerColumn);
	win.add(anNahlEndingPicker);
} else if (endingSurahName == "Al-Isra") {
	
	var alIsraEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alIsraEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alIsraEndingAyahRow = Ti.UI.createPickerRow();
		var alIsraEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[16][i]
	  });
  	alIsraEndingAyahRow.add(alIsraEndingLabel);
	alIsraEndingPickerColumn.addRow(alIsraEndingAyahRow);	
	}
	alIsraEndingPicker.add(alIsraEndingPickerColumn);
	win.add(alIsraEndingPicker);
} else if (endingSurahName == "Al-Isra") {
	
	var alIsraEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alIsraEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alIsraEndingAyahRow = Ti.UI.createPickerRow();
		var alIsraEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[17][i]
	  });
  	alIsraEndingAyahRow.add(alIsraEndingLabel);
	alIsraEndingPickerColumn.addRow(alIsraEndingAyahRow);	
	}
	alIsraEndingPicker.add(alIsraEndingPickerColumn);
	win.add(alIsraEndingPicker);
} 
else if (endingSurahName == "al-Kahf") {
	
	var alKahfEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alKahfEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alKahfEndingAyahRow = Ti.UI.createPickerRow();
		var alKahfEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[17][i]
	  });
  	alKahfEndingAyahRow.add(alKahfEndingLabel);
	alKahfEndingPickerColumn.addRow(alKahfEndingAyahRow);	
	}
	alKahfEndingPicker.add(alKahfEndingPickerColumn);
	win.add(alKahfEndingPicker);
} else if (endingSurahName == "Maryam") {
	
	var maryamEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var maryamEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var maryamEndingAyahRow = Ti.UI.createPickerRow();
		var maryamEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[18][i]
	  });
  	maryamEndingAyahRow.add(maryamEndingLabel);
	maryamEndingPickerColumn.addRow(maryamEndingAyahRow);	
	}
	maryamEndingPicker.add(maryamEndingPickerColumn);
	win.add(maryamEndingPicker);
} else if (endingSurahName == "Ta Ha") {
	
	var TaHaEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var TaHaEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var TaHaEndingAyahRow = Ti.UI.createPickerRow();
		var TaHaEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[19][i]
	  });
  	TaHaEndingAyahRow.add(TaHaEndingLabel);
	TaHaEndingPickerColumn.addRow(TaHaEndingAyahRow);	
	}
	TaHaEndingPicker.add(TaHaEndingPickerColumn);
	win.add(TaHaEndingPicker);
} else if (endingSurahName == "al-Anbiya") {
	
	var alAnbiyaEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alAnbiyaEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alAnbiyEndingAyahRow = Ti.UI.createPickerRow();
		var alAnbiyaEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[20][i]
	  });
  	alAnbiyEndingAyahRow.add(alAnbiyaEndingLabel);
	alAnbiyaEndingPickerColumn.addRow(alAnbiyEndingAyahRow);	
	}
	alAnbiyaEndingPicker.add(alAnbiyaEndingPickerColumn);
	win.add(alAnbiyaEndingPicker);
} else if (endingSurahName == "al-Hajj") {
	
	var alHajjEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alHajjEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alHajjEndingAyahRow = Ti.UI.createPickerRow();
		var alHajjEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[21][i]
	  });
  	alHajjEndingAyahRow.add(alHajjEndingLabel);
	alHajjEndingPickerColumn.addRow(alHajjEndingAyahRow);	
	}
	alHajjEndingPicker.add(alHajjEndingPickerColumn);
	win.add(alHajjEndingPicker);
} else if (endingSurahName == "al-Muminun") {
	
	var alMuminunEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alMuminunEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alMuminunEndingAyahRow = Ti.UI.createPickerRow();
		var alMuminunEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[22][i]
	  });
  	alMuminunEndingAyahRow.add(alMuminunEndingLabel);
	alMuminunEndingPickerColumn.addRow(alMuminunEndingAyahRow);	
	}
	alMuminunEndingPicker.add(alMuminunEndingPickerColumn);
	win.add(alMuminunEndingPicker);
} else if (endingSurahName == "an-Nur") {
	
	var anNurEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var anNurEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var anNurEndingAyahRow = Ti.UI.createPickerRow();
		var anNurEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[23][i]
	  });
  	anNurEndingAyahRow.add(anNurEndingLabel);
	anNurEndingPickerColumn.addRow(anNurEndingAyahRow);	
	}
	anNurEndingPicker.add(anNurEndingPickerColumn);
	win.add(anNurEndingPicker);
} else if (endingSurahName == "al-Furqan") {
	
	var alFurqanEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alFurqanEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alFurqanEndingAyahRow = Ti.UI.createPickerRow();
		var alFurqanEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[24][i]
	  });
  	alFurqanEndingAyahRow.add(alFurqanEndingLabel);
	alFurqanEndingPickerColumn.addRow(alFurqanEndingAyahRow);	
	}
	alFurqanEndingPicker.add(alFurqanEndingPickerColumn);
	win.add(alFurqanEndingPicker);
} else if (endingSurahName == "ash-Shu'ara") {
	//ashShuara
	var ashShuaraEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var ashShuaraEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var ashShuaraEndingAyahRow = Ti.UI.createPickerRow();
		var ashShuaraEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[25][i]
	  });
  	ashShuaraEndingAyahRow.add(ashShuaraEndingLabel);
	ashShuaraEndingPickerColumn.addRow(ashShuaraEndingAyahRow);	
	}
	ashShuaraEndingPicker.add(ashShuaraEndingPickerColumn);
	win.add(ashShuaraEndingPicker);
} else if (endingSurahName == "an-Naml") {
	
	var anNamlEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var anNamlEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var anNamlEndingAyahRow = Ti.UI.createPickerRow();
		var anNamlEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[26][i]
	  });
  	anNamlEndingAyahRow.add(anNamlEndingLabel);
	anNamlEndingPickerColumn.addRow(anNamlEndingAyahRow);	
	}
	anNamlEndingPicker.add(anNamlEndingPickerColumn);
	win.add(anNamlEndingPicker);
} else if (endingSurahName == "al-Qasas") {
	
	var alQasasEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alQasasEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alQasasEndingAyahRow = Ti.UI.createPickerRow();
		var alQasasEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[27][i]
	  });
  	alQasasEndingAyahRow.add(alQasasEndingLabel);
	alQasasEndingPickerColumn.addRow(alQasasEndingAyahRow);	
	}
	alQasasEndingPicker.add(alQasasEndingPickerColumn);
	win.add(alQasasEndingPicker);
} else if (endingSurahName == "al-Ankabut") {
	
	var alAnkabutEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alAnkabutEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alAnkabutEndingAyahRow = Ti.UI.createPickerRow();
		var alAnkabutEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[28][i]
	  });
  	alAnkabutEndingAyahRow.add(alAnkabutEndingLabel);
	alAnkabutEndingPickerColumn.addRow(alAnkabutEndingAyahRow);	
	}
	alAnkabutEndingPicker.add(alAnkabutEndingPickerColumn);
	win.add(alAnkabutEndingPicker);
} else if (endingSurahName == "ar-Rum") {
	
	var arRumEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var arRumEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var arRumEndingAyahRow = Ti.UI.createPickerRow();
		var arRumEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[29][i]
	  });
  	arRumEndingAyahRow.add(arRumEndingLabel);
	arRumEndingPickerColumn.addRow(arRumEndingAyahRow);	
	}
	arRumEndingPicker.add(arRumEndingPickerColumn);
	win.add(arRumEndingPicker);
} else if (endingSurahName == "Luqman") {
	
	var LuqmanEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var LuqmanEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var LuqmanEndingAyahRow = Ti.UI.createPickerRow();
		var LuqmanEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[30][i]
	  });
  	LuqmanEndingAyahRow.add(LuqmanEndingLabel);
	LuqmanEndingPickerColumn.addRow(LuqmanEndingAyahRow);	
	}
	LuqmanEndingPicker.add(LuqmanEndingPickerColumn);
	win.add(LuqmanEndingPicker);
} else if (endingSurahName == "as-Sajdah") {
	
	var asSajdahEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var asSajdahEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var asSajdahEndingAyahRow = Ti.UI.createPickerRow();
		var asSajdahEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[31][i]
	  });
  	asSajdahEndingAyahRow.add(asSajdahEndingLabel);
	asSajdahEndingPickerColumn.addRow(asSajdahEndingAyahRow);	
	}
	asSajdahEndingPicker.add(asSajdahEndingPickerColumn);
	win.add(asSajdahEndingPicker);
} else if (endingSurahName == "al-Ahzab") {
	
	var alAhzabEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alAhzabEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alAhzabEndingAyahRow = Ti.UI.createPickerRow();
		var alAhzabEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[32][i]
	  });
  	alAhzabEndingAyahRow.add(alAhzabEndingLabel);
	alAhzabEndingPickerColumn.addRow(alAhzabEndingAyahRow);	
	}
	alAhzabEndingPicker.add(alAhzabEndingPickerColumn);
	win.add(alAhzabEndingPicker);
} else if (endingSurahName == "Saba") {
	
	var SabaEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var SabaEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var SabaEndingAyahRow = Ti.UI.createPickerRow();
		var SabaEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[33][i]
	  });
  	SabaEndingAyahRow.add(SabaEndingLabel);
	SabaEndingPickerColumn.addRow(SabaEndingAyahRow);	
	}
	SabaEndingPicker.add(SabaEndingPickerColumn);
	win.add(SabaEndingPicker);
} else if (endingSurahName == "Fatir") {
	
	var FatirEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var FatirEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var FatirEndingAyahRow = Ti.UI.createPickerRow();
		var FatirEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[34][i]
	  });
  	FatirEndingAyahRow.add(FatirEndingLabel);
	FatirEndingPickerColumn.addRow(FatirEndingAyahRow);	
	}
	FatirEndingPicker.add(FatirEndingPickerColumn);
	win.add(FatirEndingPicker);
} else if (endingSurahName == "Ya-Sin") {
	
	var YaSinEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var YaSinEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var YaSinEndingAyahRow = Ti.UI.createPickerRow();
		var YaSinEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[35][i]
	  });
  	YaSinEndingAyahRow.add(YaSinEndingLabel);
	YaSinEndingPickerColumn.addRow(YaSinEndingAyahRow);	
	}
	YaSinEndingPicker.add(YaSinEndingPickerColumn);
	win.add(YaSinEndingPicker);
} else if (endingSurahName == "as-Saffat") {
	
	var asSaffatEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var asSaffatEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var asSaffatEndingAyahRow = Ti.UI.createPickerRow();
		var asSaffatEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[36][i]
	  });
  	asSaffatEndingAyahRow.add(asSaffatEndingLabel);
	asSaffatEndingPickerColumn.addRow(asSaffatEndingAyahRow);	
	}
	asSaffatEndingPicker.add(asSaffatEndingPickerColumn);
	win.add(asSaffatEndingPicker);
} else if (endingSurahName == "Sad") {
	
	var SadPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var SadEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var SadEndingAyahRow = Ti.UI.createPickerRow();
		var SadEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[37][i]
	  });
  	SadEndingAyahRow.add(SadEndingLabel);
	SadEndingPickerColumn.addRow(SadEndingAyahRow);	
	}
	SadEndingPicker.add(SadEndingPickerColumn);
	win.add(SadEndingPicker);
} else if (endingSurahName == "az-Zumar") {
	
	var azZumarEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var azZumarEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var azZumarEndingAyahRow = Ti.UI.createPickerRow();
		var azZumarEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[38][i]
	  });
  	azZumarEndingAyahRow.add(azZumarEndingLabel);
	azZumarEndingPickerColumn.addRow(azZumarEndingAyahRow);	
	}
	azZumarEndingPicker.add(azZumarEndingPickerColumn);
	win.add(azZumarEndingPicker);
} else if (endingSurahName == "Ghafir") {
	
	var GhafirEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var GhafirEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var GhafirEndingAyahRow = Ti.UI.createPickerRow();
		var GhafirEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[39][i]
	  });
  	GhafirEndingAyahRow.add(GhafirEndingLabel);
	GhafirEndingPickerColumn.addRow(GhafirEndingAyahRow);	
	}
	GhafirEndingPicker.add(GhafirEndingPickerColumn);
	win.add(GhafirEndingPicker);
} else if (endingSurahName == "Fussilat") {
	
	var FussilatEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var FussilatEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var FussilatEndingAyahRow = Ti.UI.createPickerRow();
		var FussilatEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[40][i]
	  });
  	FussilatEndingAyahRow.add(FussilatEndingLabel);
	FussilatEndingPickerColumn.addRow(FussilatEndingAyahRow);	
	}
	FussilatEndingPicker.add(FussilatEndingPickerColumn);
	win.add(FussilatEndingPicker);
} else if (endingSurahName == "ash-Shuraa") {
	
	var ashShuraaEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var ashShuraaEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var ashShuraaEndingAyahRow = Ti.UI.createPickerRow();
		var ashShuraaEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[41][i]
	  });
  	ashShuraaEndingAyahRow.add(ashShuraaEndingLabel);
	ashShuraaEndingPickerColumn.addRow(ashShuraaEndingAyahRow);	
	}
	ashShuraaEndingPicker.add(ashShuraaEndingPickerColumn);
	win.add(ashShuraaEndingPicker);
} else if (endingSurahName == "az-Zukhruf") {
	
	var azZukhrufEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var azZukhrufEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var azZukhrufEndingAyahRow = Ti.UI.createPickerRow();
		var azZukhrufEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[42][i]
	  });
  	azZukhrufEndingAyahRow.add(azZukhrufEndingLabel);
	azZukhrufEndingPickerColumn.addRow(azZukhrufEndingAyahRow);	
	}
	azZukhrufEndingPicker.add(azZukhrufEndingPickerColumn);
	win.add(azZukhrufEndingPicker);
} else if (endingSurahName == "ad-Dukhan") {
	
	var adDukhanEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var adDukhanEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var adDukhanEndingAyahRow = Ti.UI.createPickerRow();
		var adDukhanEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[43][i]
	  });
  	adDukhanEndingAyahRow.add(adDukhanEndingLabel);
	adDukhanEndingPickerColumn.addRow(adDukhanEndingAyahRow);	
	}
	adDukhanEndingPicker.add(adDukhanEndingPickerColumn);
	win.add(adDukhanEndingPicker);
} else if (endingSurahName == "al-Jathiyah") {
	
	var alJathiyahEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alJathiyahEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alJathiyahEndingAyahRow = Ti.UI.createPickerRow();
		var alJathiyahEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[44][i]
	  });
  	alJathiyahEndingAyahRow.add(alJathiyahEndingLabel);
	alJathiyahEndingPickerColumn.addRow(alJathiyahEndingAyahRow);	
	}
	alJathiyahEndingPicker.add(alJathiyahEndingPickerColumn);
	win.add(alJathiyahEndingPicker);
} else if (endingSurahName == "al-Ahqaf") {
	
	var alAhqafEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alAhqafEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alAhqafEndingAyahRow = Ti.UI.createPickerRow();
		var alAhqafEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[45][i]
	  });
  	alAhqafEndingAyahRow.add(alAhqafEndingLabel);
	alAhqafEndingPickerColumn.addRow(alAhqafEndingAyahRow);	
	}
	alAhqafEndingPicker.add(alAhqafEndingPickerColumn);
	win.add(alAhqafEndingPicker);
} else if (endingSurahName == "Muhammad") {
	
	var MuhammadEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var MuhammadEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var MuhammadEndingAyahRow = Ti.UI.createPickerRow();
		var MuhammadEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[46][i]
	  });
  	MuhammadEndingAyahRow.add(MuhammadEndingLabel);
	MuhammadEndingPickerColumn.addRow(MuhammadEndingAyahRow);	
	}
	MuhammadEndingPicker.add(MuhammadEndingPickerColumn);
	win.add(MuhammadEndingPicker);
} else if (endingSurahName == "al-Fath") {
	
	var alFathEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alFathEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alFathEndingAyahRow = Ti.UI.createPickerRow();
		var alFathEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[47][i]
	  });
  	alFathEndingAyahRow.add(alFathEndingLabel);
	alFathEndingPickerColumn.addRow(alFathEndingAyahRow);	
	}
	alFathEndingPicker.add(alFathEndingPickerColumn);
	win.add(alFathEndingPicker);
} else if (endingSurahName == "al-Hujurat") {
	
	var alHujuratEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alHujuratEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alHujuratEndingAyahRow = Ti.UI.createPickerRow();
		var alHujuratEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[48][i]
	  });
  	alHujuratEndingAyahRow.add(alHujuratEndingLabel);
	alHujuratEndingPickerColumn.addRow(alHujuratEndingAyahRow);	
	}
	alHujuratEndingPicker.add(alHujuratEndingPickerColumn);
	win.add(alHujuratEndingPicker);
} else if (endingSurahName == "Qaf") {
	
	var QafEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var QafEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var QafEndingAyahRow = Ti.UI.createPickerRow();
		var QafEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[49][i]
	  });
  	QafEndingAyahRow.add(QafEndingLabel);
	QafEndingPickerColumn.addRow(QafEndingAyahRow);	
	}
	QafEndingPicker.add(QafEndingPickerColumn);
	win.add(QafEndingPicker);
} else if (endingSurahName == "ad-Dhariyat") {
	
	var adDhariyatEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var adDhariyatEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var adDhariyatEndingAyahRow = Ti.UI.createPickerRow();
		var adDhariyatEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[50][i]
	  });
  	adDhariyatEndingAyahRow.add(adDhariyatEndingLabel);
	adDhariyatEndingPickerColumn.addRow(adDhariyatEndingAyahRow);	
	}
	adDhariyatEndingPicker.add(adDhariyatEndingPickerColumn);
	win.add(adDhariyatEndingPicker);
} else if (endingSurahName == "at-Tur") {
	
	var atTurEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var atTurEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var atTurEndingAyahRow = Ti.UI.createPickerRow();
		var atTurEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[51][i]
	  });
  	atTurEndingAyahRow.add(atTurEndingLabel);
	atTurEndingPickerColumn.addRow(atTurEndingAyahRow);	
	}
	atTurEndingPicker.add(atTurEndingPickerColumn);
	win.add(atTurEndingPicker);
} else if (endingSurahName == "an-Najm") {
	
	var anNajmEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var anNajmEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var anNajmEndingAyahRow = Ti.UI.createPickerRow();
		var anNajmEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[52][i]
	  });
  	anNajmEndingAyahRow.add(anNajmEndingLabel);
	anNajmEndingPickerColumn.addRow(anNajmEndingAyahRow);	
	}
	anNajmEndingPicker.add(anNajmEndingPickerColumn);
	win.add(anNajmEndingPicker);
} else if (endingSurahName == "al-Qamar") {
	
	var alQamarEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alQamarEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alQamarEndingAyahRow = Ti.UI.createPickerRow();
		var alQamarEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[53][i]
	  });
  	alQamarEndingAyahRow.add(alQamarEndingLabel);
	alQamarEndingPickerColumn.addRow(alQamarEndingAyahRow);	
	}
	alQamarEndingPicker.add(alQamarEndingPickerColumn);
	win.add(alQamarEndingPicker);
} else if (endingSurahName == "ar-Rahman") {
	
	var arRahmanEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var arRahmanEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var arRahmanEndingAyahRow = Ti.UI.createPickerRow();
		var arRahmanEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[54][i]
	  });
  	arRahmanEndingAyahRow.add(arRahmanEndingLabel);
	arRahmanEndingPickerColumn.addRow(arRahmanEndingAyahRow);	
	}
	arRahmanEndingPicker.add(arRahmanEndingPickerColumn);
	win.add(arRahmanEndingPicker);
} else if (endingSurahName == "al-Waqiah") {
	
	var alWaqiahEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alWaqiahEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alWaqiahEndingAyahRow = Ti.UI.createPickerRow();
		var alWaqiahEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[55][i]
	  });
  	alWaqiahEndingAyahRow.add(alWaqiahEndingLabel);
	alWaqiahEndingPickerColumn.addRow(alWaqiahEndingAyahRow);	
	}
	alWaqiahEndingPicker.add(alWaqiahEndingPickerColumn);
	win.add(alWaqiahEndingPicker);
} else if (endingSurahName == "al-Hadid") {
	
	var alHadidEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alHadidEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alHadidEndingAyahRow = Ti.UI.createPickerRow();
		var alHadidEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[56][i]
	  });
  	alHadidEndingAyahRow.add(alHadidEndingLabel);
	alHadidEndingPickerColumn.addRow(alHadidEndingAyahRow);	
	}
	alHadidEndingPicker.add(alHadidEndingPickerColumn);
	win.add(alHadidEndingPicker);
} else if (endingSurahName == "al-Mujadilah") {
	
	var alMujadilahEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alMujadilahEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alMujadilahEndingAyahRow = Ti.UI.createPickerRow();
		var alMujadilahEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[57][i]
	  });
  	alMujadilahEndingAyahRow.add(alMujadilahEndingLabel);
	alMujadilahEndingPickerColumn.addRow(alMujadilahEndingAyahRow);	
	}
	alMujadilahEndingPicker.add(alMujadilahEndingPickerColumn);
	win.add(alMujadilahEndingPicker);
} else if (endingSurahName == "al-Hashr") {
	
	var alHashrEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alHashrEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alHashrEndingAyahRow = Ti.UI.createPickerRow();
		var alHashrEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[58][i]
	  });
  	alHashrEndingAyahRow.add(alHashrEndingLabel);
	alHashrEndingPickerColumn.addRow(alHashrEndingAyahRow);	
	}
	alHashrEndingPicker.add(alHashrEndingPickerColumn);
	win.add(alHashrEndingPicker);
} else if (endingSurahName == "al-Mumtahanah") {
	
	var alMumtahanahEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alMumtahanahEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alMumtahanahEndingAyahRow = Ti.UI.createPickerRow();
		var alMumtahanahEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[59][i]
	  });
  	alMumtahanahEndingAyahRow.add(alMumtahanahEndingLabel);
	alMumtahanahEndingPickerColumn.addRow(alMumtahanahEndingAyahRow);	
	}
	alMumtahanahEndingPicker.add(alMumtahanahEndingPickerColumn);
	win.add(alMumtahanahEndingPicker);
} else if (endingSurahName == "as-Saff") {
	
	var asSaffEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var asSaffEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var asSaffEndingAyahRow = Ti.UI.createPickerRow();
		var asSaffEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[60][i]
	  });
  	asSaffEndingAyahRow.add(asSaffEndingLabel);
	asSaffEndingPickerColumn.addRow(asSaffEndingAyahRow);	
	}
	asSaffEndingPicker.add(asSaffEndingPickerColumn);
	win.add(asSaffEndingPicker);
} else if (endingSurahName == "al-Jumuah") {
	
	var alJumuahEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alJumuahEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alJumuahEndingAyahRow = Ti.UI.createPickerRow();
		var alJumuahEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[61][i]
	  });
  	alJumuahEndingAyahRow.add(alJumuahEndingLabel);
	alJumuahEndingPickerColumn.addRow(alJumuahEndingAyahRow);	
	}
	alJumuahEndingPicker.add(alJumuahEndingPickerColumn);
	win.add(alJumuahEndingPicker);
}
else if (endingSurahName == "al-Munafiqun") {
	
	var alMunafiqunEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alMunafiqunEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alMunafiqunEndingAyahRow = Ti.UI.createPickerRow();
		var alMunafiqunEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[62][i]
	  });
  	alMunafiqunEndingAyahRow.add(alMunafiqunEndingLabel);
	alMunafiqunEndingPickerColumn.addRow(alMunafiqunEndingAyahRow);	
	}
	alMunafiqunEndingPicker.add(alMunafiqunEndingPickerColumn);
	win.add(alMunafiqunEndingPicker);
}
else if (endingSurahName == "at-Taghabun") {
	
	var atTaghabunEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var atTaghabunEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var atTaghabunEndingAyahRow = Ti.UI.createPickerRow();
		var atTaghabunEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[63][i]
	  });
  	atTaghabunEndingAyahRow.add(atTaghabunEndingLabel);
	atTaghabunEndingPickerColumn.addRow(atTaghabunEndingAyahRow);	
	}
	atTaghabunEndingPicker.add(atTaghabunEndingPickerColumn);
	win.add(atTaghabunEndingPicker);
}
else if (endingSurahName == "at-Talaq") {
	
	var atTalaqEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var atTalaqEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var atTalaqEndingAyahRow = Ti.UI.createPickerRow();
		var atTalaqEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[64][i]
	  });
  	atTalaqEndingAyahRow.add(atTalaqEndingLabel);
	atTalaqEndingPickerColumn.addRow(atTalaqEndingAyahRow);	
	}
	atTalaqEndingPicker.add(atTalaqEndingPickerColumn);
	win.add(atTalaqEndingPicker);
}
else if (endingSurahName == "at-Tahrim") {
	
	var atTahrimEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var atTahrimEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var atTahrimEndingAyahRow = Ti.UI.createPickerRow();
		var atTahrimEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[65][i]
	  });
  	atTahrimEndingAyahRow.add(atTahrimEndingLabel);
	atTahrimEndingPickerColumn.addRow(atTahrimEndingAyahRow);	
	}
	atTahrimEndingPicker.add(atTahrimEndingPickerColumn);
	win.add(atTahrimEndingPicker);
}
else if (endingSurahName == "al-Mulk") {
	
	var alMulkEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alMulkEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alMulkEndingAyahRow = Ti.UI.createPickerRow();
		var alMulkEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[66][i]
	  });
  	alMulkEndingAyahRow.add(alMulkEndingLabel);
	alMulkEndingPickerColumn.addRow(alMulkEndingAyahRow);	
	}
	alMulkEndingPicker.add(alMulkEndingPickerColumn);
	win.add(alMulkEndingPicker);
}
else if (endingSurahName == "al-Qalam") {
	
	var alQalamEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alQalamEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alQalamEndingAyahRow = Ti.UI.createPickerRow();
		var alQalamEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[67][i]
	  });
  	alQalamEndingAyahRow.add(alQalamEndingLabel);
	alQalamEndingPickerColumn.addRow(alQalamEndingAyahRow);	
	}
	alQalamEndingPicker.add(alQalamEndingPickerColumn);
	win.add(alQalamEndingPicker);
}
else if (endingSurahName == "al-Haqqah") {
	
	var alHaqqahEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alHaqqahEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alHaqqahEndingAyahRow = Ti.UI.createPickerRow();
		var alHaqqahEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[68][i]
	  });
  	alHaqqahEndingAyahRow.add(alHaqqahEndingLabel);
	alHaqqahEndingPickerColumn.addRow(alHaqqahEndingAyahRow);	
	}
	alHaqqahEndingPicker.add(alHaqqahEndingPickerColumn);
	win.add(alHaqqahEndingPicker);
}
else if (endingSurahName == "al-Ma\'arij") {
	
	var alMaarijEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alMaarijEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alMaarijEndingAyahRow = Ti.UI.createPickerRow();
		var alMaarijEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[69][i]
	  });
  	alMaarijEndingAyahRow.add(alMaarijEndingLabel);
	alMaarijEndingPickerColumn.addRow(alMaarijEndingAyahRow);	
	}
	alMaarijEndingPicker.add(alMaarijEndingPickerColumn);
	win.add(alMaarijEndingPicker);
}
else if (endingSurahName == "Nuh") {
	
	var NuhEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var NuhEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var NuhEndingAyahRow = Ti.UI.createPickerRow();
		var NuhEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[70][i]
	  });
  	NuhEndingAyahRow.add(NuhEndingLabel);
	NuhEndingPickerColumn.addRow(NuhEndingAyahRow);	
	}
	NuhEndingPicker.add(NuhEndingPickerColumn);
	win.add(NuhEndingPicker);
}
else if (endingSurahName == "al-Jinn") {
	
	var alJinnEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alJinnEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alJinnEndingAyahRow = Ti.UI.createPickerRow();
		var alJinnEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[71][i]
	  });
  	alJinnEndingAyahRow.add(alJinnEndingLabel);
	alJinnEndingPickerColumn.addRow(alJinnEndingAyahRow);	
	}
	alJinnEndingPicker.add(alJinnEndingPickerColumn);
	win.add(alJinnEndingPicker);
}
else if (endingSurahName == "al-Muzammil") {
	
	var alMuzammilEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alMuzammilEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alMuzammilEndingAyahRow = Ti.UI.createPickerRow();
		var alMuzammilEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[72][i]
	  });
  	alMuzammilEndingAyahRow.add(alMuzammilEndingLabel);
	alMuzammilEndingPickerColumn.addRow(alMuzammilEndingAyahRow);	
	}
	alMuzammilEndingPicker.add(alMuzammilEndingPickerColumn);
	win.add(alMuzammilEndingPicker);
}
else if (endingSurahName == "al-Mudathir") {
	
	var alMudathirEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alMudathirEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alMudathirEndingAyahRow = Ti.UI.createPickerRow();
		var alMudathirEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[73][i]
	  });
  	alMudathirEndingAyahRow.add(alMudathirEndingLabel);
	alMudathirEndingPickerColumn.addRow(alMudathirEndingAyahRow);	
	}
	alMudathirEndingPicker.add(alMudathirEndingPickerColumn);
	win.add(alMudathirEndingPicker);
}
else if (endingSurahName == "al-Qiyamah") {
	
	var alQiyamahEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alQiyamahEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alQiyamahEndingAyahRow = Ti.UI.createPickerRow();
		var alQiyamahEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[74][i]
	  });
  	alQiyamahEndingAyahRow.add(alQiyamahEndingLabel);
	alQiyamahEndingPickerColumn.addRow(alQiyamahEndingAyahRow);	
	}
	alQiyamahEndingPicker.add(alQiyamahEndingPickerColumn);
	win.add(alQiyamahEndingPicker);
}
else if (endingSurahName == "al-Insan") {
	
	var alInsanEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alInsanEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alInsanEndingAyahRow = Ti.UI.createPickerRow();
		var alInsanEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[75][i]
	  });
  	alInsanEndingAyahRow.add(alInsanEndingLabel);
	alInsanEndingPickerColumn.addRow(alInsanEndingAyahRow);	
	}
	alInsanEndingPicker.add(alInsanEndingPickerColumn);
	win.add(alInsanEndingPicker);
}
else if (endingSurahName == "al-Mursalat") {
	
	var alMursalatEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alMursalatEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alMursalatEndingAyahRow = Ti.UI.createPickerRow();
		var alMursalatEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[76][i]
	  });
  	alMursalatEndingAyahRow.add(alMursalatEndingLabel);
	alMursalatEndingPickerColumn.addRow(alMursalatEndingAyahRow);	
	}
	alMursalatEndingPicker.add(alMursalatEndingPickerColumn);
	win.add(alMursalatEndingPicker);
}
else if (endingSurahName == "an-Naba") {
	
	var anNabaEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var anNabaEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var anNabaEndingAyahRow = Ti.UI.createPickerRow();
		var anNabaEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[77][i]
	  });
  	anNabaEndingAyahRow.add(anNabaEndingLabel);
	anNabaEndingPickerColumn.addRow(anNabaEndingAyahRow);	
	}
	anNabaEndingPicker.add(anNabaEndingPickerColumn);
	win.add(anNabaEndingPicker);
}
else if (endingSurahName == "an-Naziat") {
	
	var anNaziatEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var anNaziatEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var anNaziatEndingAyahRow = Ti.UI.createPickerRow();
		var anNaziatEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[78][i]
	  });
  	anNaziatEndingAyahRow.add(anNaziatEndingLabel);
	anNaziatEndingPickerColumn.addRow(anNaziatEndingAyahRow);	
	}
	anNaziatEndingPicker.add(anNaziatEndingPickerColumn);
	win.add(anNaziatEndingPicker);
}
else if (endingSurahName == "\'Abasa") {
	
	var AbasaEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var AbasaEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var AbasaEndingAyahRow = Ti.UI.createPickerRow();
		var AbasaEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[79][i]
	  });
  	AbasaEndingAyahRow.add(AbasaEndingLabel);
	AbasaEndingPickerColumn.addRow(AbasaEndingAyahRow);	
	}
	AbasaEndingPicker.add(AbasaEndingPickerColumn);
	win.add(AbasaEndingPicker);
}
else if (endingSurahName == "at-Takwir") {
	
	var atTakwirEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var atTakwirPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var atTakwirEndingAyahRow = Ti.UI.createPickerRow();
		var atTakwirEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[80][i]
	  });
  	atTakwirEndingAyahRow.add(atTakwirEndingLabel);
	atTakwirEndingPickerColumn.addRow(atTakwirEndingAyahRow);	
	}
	atTakwirEndingPicker.add(atTakwirEndingPickerColumn);
	win.add(atTakwirEndingPicker);
}
else if (endingSurahName == "al-Infitar") {
	
	var alInfitarEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alInfitarEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alInfitarEndingAyahRow = Ti.UI.createPickerRow();
		var alInfitarEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[81][i]
	  });
  	alInfitarEndingAyahRow.add(alInfitarEndingLabel);
	alInfitarEndingPickerColumn.addRow(alInfitarEndingAyahRow);	
	}
	alInfitarEndingPicker.add(alInfitarEndingPickerColumn);
	win.add(alInfitarEndingPicker);
}
else if (endingSurahName == "Al-Mutaffifeen") {
	
	var AlMutaffifeenEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var AlMutaffifeenEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var AlMutaffifeenEndingAyahRow = Ti.UI.createPickerRow();
		var AlMutaffifeenEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[82][i]
	  });
  	AlMutaffifeenEndingAyahRow.add(AlMutaffifeenEndingLabel);
	AlMutaffifeenEndingPickerColumn.addRow(AlMutaffifeenEndingAyahRow);	
	}
	AlMutaffifeenEndingPicker.add(AlMutaffifeenEndingPickerColumn);
	win.add(AlMutaffifeenEndingPicker);
}
else if (endingSurahName == "al-Inshiqaq") {
	
	var alInshiqaqEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alInshiqaqEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alInshiqaqEndingAyahRow = Ti.UI.createPickerRow();
		var alInshiqaqEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[83][i]
	  });
  	alInshiqaqEndingAyahRow.add(alInshiqaqEndingLabel);
	alInshiqaqEndingPickerColumn.addRow(alInshiqaqEndingAyahRow);	
	}
	alInshiqaqEndingPicker.add(alInshiqaqEndingPickerColumn);
	win.add(alInshiqaqEndingPicker);
}
else if (endingSurahName == "al-Buruj") {
	
	var alBurujEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alBurujEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alBurujEndingAyahRow = Ti.UI.createPickerRow();
		var alBurujEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[84][i]
	  });
  	alBurujEndingAyahRow.add(alBurujEndingLabel);
	alBurujEndingPickerColumn.addRow(alBurujEndingAyahRow);	
	}
	alBurujEndingPicker.add(alBurujEndingPickerColumn);
	win.add(alBurujEndingPicker);
}
else if (endingSurahName == "at-Tariq") {
	
	var atTariqEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var atTariqEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var atTariqEndingAyahRow = Ti.UI.createPickerRow();
		var atTariqEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[85][i]
	  });
  	atTariqEndingAyahRow.add(atTariqEndingLabel);
	atTariqEndingPickerColumn.addRow(atTariqEndingAyahRow);	
	}
	atTariqEndingPicker.add(atTariqEndingPickerColumn);
	win.add(atTariqEndingPicker);
}
else if (endingSurahName == "al-A\'la") {
	
	var alAlaEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alAlaEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alAlaEndingAyahRow = Ti.UI.createPickerRow();
		var alAlaEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[86][i]
	  });
  	alAlaEndingAyahRow.add(alAlaEndingLabel);
	alAlaEndingPickerColumn.addRow(alAlaEndingAyahRow);	
	}
	alAlaEndingPicker.add(alAlaEndingPickerColumn);
	win.add(alAlaEndingPicker);
}
else if (endingSurahName == "al-Ghashiya") {
	
	var alGhashiyaEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alGhashiyaEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alGhashiyaEndingAyahRow = Ti.UI.createPickerRow();
		var alGhashiyaEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[87][i]
	  });
  	alGhashiyaEndingAyahRow.add(alGhashiyaEndingLabel);
	alGhashiyaEndingPickerColumn.addRow(alGhashiyaEndingAyahRow);	
	}
	alGhashiyaEndingPicker.add(alGhashiyaEndingPickerColumn);
	win.add(alGhashiyaEndingPicker);
}
else if (endingSurahName == "al-Fajr") {
	
	var alFajrEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alFajrEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alFajrEndingAyahRow = Ti.UI.createPickerRow();
		var alFajrEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[88][i]
	  });
  	alFajrEndingAyahRow.add(alFajrEndingLabel);
	alFajrEndingPickerColumn.addRow(alFajrEndingAyahRow);	
	}
	alFajrEndingPicker.add(alFajrEndingPickerColumn);
	win.add(alFajrEndingPicker);
}
else if (endingSurahName == "al-Balad") {
	
	var alBaladEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alBaladEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alBaladEndingAyahRow = Ti.UI.createPickerRow();
		var alBaladEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[89][i]
	  });
  	alBaladEndingAyahRow.add(alBaladEndingLabel);
	alBaladEndingPickerColumn.addRow(alBaladEndingAyahRow);	
	}
	alBaladEndingPicker.add(alBaladEndingPickerColumn);
	win.add(alBaladEndingPicker);
}
else if (endingSurahName == "ash-Shams") {
	
	var ashShamsEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var ashShamsEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var ashShamsEndingAyahRow = Ti.UI.createPickerRow();
		var ashShamsEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[90][i]
	  });
  	ashShamsEndingAyahRow.add(ashShamsEndingLabel);
	ashShamsEndingPickerColumn.addRow(ashShamsEndingAyahRow);	
	}
	ashShamsEndingPicker.add(ashShamsEndingPickerColumn);
	win.add(ashShamsEndingPicker);
}
else if (endingSurahName == "al-Layl") {
	
	var alLaylEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alLaylEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alLaylEndingAyahRow = Ti.UI.createPickerRow();
		var alLaylEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[91][i]
	  });
  	alLaylEndingAyahRow.add(alLaylEndingLabel);
	alLaylEndingPickerColumn.addRow(alLaylEndingAyahRow);	
	}
	alLaylEndingPicker.add(alLaylEndingPickerColumn);
	win.add(alLaylEndingPicker);
}
else if (endingSurahName == "ad-Duha") {
	
	var adDuhaEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var adDuhaEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var adDuhaEndingAyahRow = Ti.UI.createPickerRow();
		var adDuhaEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[92][i]
	  });
  	adDuhaEndingAyahRow.add(adDuhaEndingLabel);
	adDuhaEndingPickerColumn.addRow(adDuhaEndingAyahRow);	
	}
	adDuhaEndingPicker.add(adDuhaEndingPickerColumn);
	win.add(adDuhaEndingPicker);
}
else if (endingSurahName == "ash-Sharh") {
	
	var ashSharhEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var ashSharhEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var ashSharhEndingAyahRow = Ti.UI.createPickerRow();
		var ashSharhEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[93][i]
	  });
  	ashSharhEndingAyahRow.add(ashSharhEndingLabel);
	ashSharhEndingPickerColumn.addRow(ashSharhEndingAyahRow);	
	}
	ashSharhEndingPicker.add(ashSharhEndingPickerColumn);
	win.add(ashSharhEndingPicker);
}
else if (endingSurahName == "at-Tin") {
	
	var atTinEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var atTinEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var atTinEndingAyahRow = Ti.UI.createPickerRow();
		var atTinEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[94][i]
	  });
  	atTinEndingAyahRow.add(atTinEndingLabel);
	atTinEndingPickerColumn.addRow(atTinEndingAyahRow);	
	}
	atTinEndingPicker.add(atTinEndingPickerColumn);
	win.add(atTinEndingPicker);
}
else if (endingSurahName == "al-\'Alaq") {
	
	var alAlaqEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alAlaqEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alAlaqEndingAyahRow = Ti.UI.createPickerRow();
		var alAlaqEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[95][i]
	  });
  	alAlaqEndingAyahRow.add(alAlaqEndingLabel);
	alAlaqEndingPickerColumn.addRow(alAlaqEndingAyahRow);	
	}
	alAlaqEndingPicker.add(alAlaqEndingPickerColumn);
	win.add(alAlaqEndingPicker);
}
else if (endingSurahName == "al-Qadr") {
	
	var alQadrEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alQadrEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alQadrEndingAyahRow = Ti.UI.createPickerRow();
		var alQadrEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[96][i]
	  });
  	alQadrEndingAyahRow.add(alQadrEndingLabel);
	alQadrEndingPickerColumn.addRow(alQadrEndingAyahRow);	
	}
	alQadrEndingPicker.add(alQadrEndingPickerColumn);
	win.add(alQadrEndingPicker);
}
else if (endingSurahName == "al-Bayyinah") {
	
	var alBayyinahEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alBayyinahEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alBayyinahEndingAyahRow = Ti.UI.createPickerRow();
		var alBayyinahEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[97][i]
	  });
  	alBayyinahEndingAyahRow.add(alBayyinahEndingLabel);
	alBayyinahEndingPickerColumn.addRow(alBayyinahEndingAyahRow);	
	}
	alBayyinahEndingPicker.add(alBayyinahEndingPickerColumn);
	win.add(alBayyinahEndingPicker);
}
else if (endingSurahName == "Az-Zalzala") {
	
	var AzZalzalaEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var AzZalzalaEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var AzZalzalaEndingAyahRow = Ti.UI.createPickerRow();
		var AzZalzalaEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[98][i]
	  });
  	AzZalzalaEndingAyahRow.add(AzZalzalaEndingLabel);
	AzZalzalaEndingPickerColumn.addRow(AzZalzalaEndingAyahRow);	
	}
	AzZalzalaEndingPicker.add(AzZalzalaEndingPickerColumn);
	win.add(AzZalzalaEndingPicker);
} 
else if (endingSurahName == "al-\'Adiyat") {
	
	var alAdiyatEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alAdiyatEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alAdiyatEndingAyahRow = Ti.UI.createPickerRow();
		var alAdiyatEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[99][i]
	  });
  	alAdiyatEndingAyahRow.add(alAdiyatEndingLabel);
	alAdiyatEndingPickerColumn.addRow(alAdiyatEndingAyahRow);	
	}
	alAdiyatEndingPicker.add(alAdiyatEndingPickerColumn);
	win.add(alAdiyatEndingPicker);
}
else if (endingSurahName == "al-Qari\'ah") {
	
	var alQariahEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alQariahEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alQariahEndingAyahRow = Ti.UI.createPickerRow();
		var alQariahEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[100][i]
	  });
  	alQariahEndingAyahRow.add(alQariahEndingLabel);
	alQariahEndingPickerColumn.addRow(alQariahEndingAyahRow);	
	}
	alQariahEndingPicker.add(alQariahEndingPickerColumn);
	win.add(alQariahEndingPicker);
}
else if (endingSurahName == "at-Takathur") {
	
	var atTakathurEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var atTakathurEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var atTakathurEndingAyahRow = Ti.UI.createPickerRow();
		var atTakathurEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[101][i]
	  });
  	atTakathurEndingAyahRow.add(atTakathurEndingLabel);
	atTakathurEndingPickerColumn.addRow(atTakathurEndingAyahRow);	
	}
	atTakathurEndingPicker.add(atTakathurEndingPickerColumn);
	win.add(atTakathurEndingPicker);
}
else if (endingSurahName == "al-\'Asr") {
	
	var alAsrEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alAsrEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alAsrEndingAyahRow = Ti.UI.createPickerRow();
		var alAsrEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[102][i]
	  });
  	alAsrEndingAyahRow.add(alAsrEndingLabel);
	alAsrEndingPickerColumn.addRow(alAsrEndingAyahRow);	
	}
	alAsrEndingPicker.add(alAsrEndingPickerColumn);
	win.add(alAsrEndingPicker);
}
else if (endingSurahName == "al-Humazah") {
	
	var alHumazahEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alHumazahEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alHumazahEndingAyahRow = Ti.UI.createPickerRow();
		var alHumazahEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[103][i]
	  });
  	alHumazahEndingAyahRow.add(alHumazahEndingLabel);
	alHumazahEndingPickerColumn.addRow(alHumazahEndingAyahRow);	
	}
	alHumazahEndingPicker.add(alHumazahEndingPickerColumn);
	win.add(alHumazahEndingPicker);
}
else if (endingSurahName == "al-Fil") {
	
	var alFilEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alFilEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alFilEndingAyahRow = Ti.UI.createPickerRow();
		var alFilEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[104][i]
	  });
  	alFilEndingAyahRow.add(alFilEndingLabel);
	alFilEndingPickerColumn.addRow(alFilEndingAyahRow);	
	}
	alFilEndingPicker.add(alFilEndingPickerColumn);
	win.add(alFilEndingPicker);
}
else if (endingSurahName == "al-Quraish") {
	
	var alQuraishEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alQuraishEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alQuraishEndingAyahRow = Ti.UI.createPickerRow();
		var alQuraishEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[105][i]
	  });
  	alQuraishEndingAyahRow.add(alQuraishEndingLabel);
	alQuraishEndingPickerColumn.addRow(alQuraishEndingAyahRow);	
	}
	alQuraishEndingPicker.add(alQuraishEndingPickerColumn);
	win.add(alQuraishEndingPicker);
}
else if (endingSurahName == "al-Ma\'un") {
	
	var alMaunEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alMaunEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alMaunEndingAyahRow = Ti.UI.createPickerRow();
		var alMaunEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[106][i]
	  });
  	alMaunEndingAyahRow.add(alMaunEndingLabel);
	alMaunEndingPickerColumn.addRow(alMaunEndingAyahRow);	
	}
	alMaunEndingPicker.add(alMaunEndingPickerColumn);
	win.add(alMaunEndingPicker);
}
else if (endingSurahName == "al-Kawthar") {
	
	var alKawtharEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alKawtharEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alKawtharEndingAyahRow = Ti.UI.createPickerRow();
		var alKawtharEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[107][i]
	  });
  	alKawtharEndingAyahRow.add(alKawtharEndingLabel);
	alKawtharEndingPickerColumn.addRow(alKawtharEndingAyahRow);	
	}
	alKawtharEndingPicker.add(alKawtharEndingPickerColumn);
	win.add(alKawtharEndingPicker);
}
else if (endingSurahName == "al-Kafirun") {
	
	var alKafirunEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alKafirunEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alKafirunEndingAyahRow = Ti.UI.createPickerRow();
		var alKafirunEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[108][i]
	  });
  	alKafirunEndingAyahRow.add(alKafirunEndingLabel);
	alKafirunEndingPickerColumn.addRow(alKafirunEndingAyahRow);	
	}
	alKafirunEndingPicker.add(alKafirunEndingPickerColumn);
	win.add(alKafirunEndingPicker);
}
else if (endingSurahName == "an-Nasr") {
	
	var anNasrEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var anNasrEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var anNasrEndingAyahRow = Ti.UI.createPickerRow();
		var anNasrEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[109][i]
	  });
  	anNasrEndingAyahRow.add(anNasrEndingLabel);
	anNasrEndingPickerColumn.addRow(anNasrEndingAyahRow);	
	}
	anNasrEndingPicker.add(anNasrEndingPickerColumn);
	win.add(anNasrEndingPicker);
}
else if (endingSurahName == "Al-Masad") {
	
	var AlMasadEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var AlMasadEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var AlMasadEndingAyahRow = Ti.UI.createPickerRow();
		var AlMasadEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[110][i]
	  });
  	AlMasadEndingAyahRow.add(AlMasadEndingLabel);
	AlMasadEndingPickerColumn.addRow(AlMasadEndingAyahRow);	
	}
	AlMasadEndingPicker.add(AlMasadEndingPickerColumn);
	win.add(AlMasadEndingPicker);
}
else if (endingSurahName == "al-Ikhlas") {
	
	var alIkhlasEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alIkhlasEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alIkhlasEndingAyahRow = Ti.UI.createPickerRow();
		var alIkhlasEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[111][i]
	  });
  	alIkhlasEndingAyahRow.add(alIkhlasEndingLabel);
	alIkhlasEndingPickerColumn.addRow(alIkhlasEndingAyahRow);	
	}
	alIkhlasEndingPicker.add(alIkhlasEndingPickerColumn);
	win.add(alIkhlasEndingPicker);
}
else if (endingSurahName == "al-Falaq") {
	
	var alFalaqEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var alFalaqEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var alFalaqEndingAyahRow = Ti.UI.createPickerRow();
		var alFalaqEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[112][i]
	  });
  	alFalaqEndingAyahRow.add(alFalaqEndingLabel);
	alFalaqEndingPickerColumn.addRow(alFalaqEndingAyahRow);	
	}
	alFalaqEndingPicker.add(alFalaqEndingPickerColumn);
	win.add(alFalaqEndingPicker);
}
else if (endingSurahName == "an-Nas") {
	
	var anNasEndingPicker = Ti.UI.createPicker({
  	selectionIndicator: true,
 	useSpinner: true, //
 	top: 402.5,
  	height: 100,
  	width: 200,
  	right: 5
});	
	var anNasEndingPickerColumn = Ti.UI.createPickerColumn();
	for (var i = 0; i <= Page.length; i++) {
		
		var anNasEndingAyahRow = Ti.UI.createPickerRow();
		var anNasEndingLabel = Ti.UI.createLabel({
	    text: ayatChoices[113][i]
	  });
  	anNasEndingAyahRow.add(anNasEndingLabel);
	anNasEndingPickerColumn.addRow(anNasEndingAyahRow);	
	}
	anNasEndingPicker.add(anNasEndingPickerColumn);
	win.add(anNasEndingPicker);
};

});

var endingAyahValue = Ti.UI.createLabel({
	text: "Ayah: ",
	top: 550,
	left: Ti.UI.Center
});


	


	
/*function pickerDefaults(obj){
  // on iOS, must be after picker has been rendered
  surahpicker.setSelectedRow(0, true);
  surahpicker.setSelectedRow(0, true);
}*/




	
win.add(startingSurahPicker);
win.add(endingSurahpicker);
win.add(startingSurahValue);
win.add(endingSurahValue);
win.add(startingAyahValue);
win.add(endingAyahValue);


var isAndroid = Ti.Platform.osname === 'android';

/*if(isAndroid){
  pickerDefaults(surahpicker);
}*/

win.open();

if(!isAndroid){
  setTimeout(function(){
    /*pickerDefaults(surahpicker);*/
  }, 1500);
};



function goBack(s){
	console.log("settings.js: check goback: "+JSON.stringify(s));
	var settingsController = Alloy.createController('settings').getView();
	$.editgoal.open(settingsController);
};
/*function pickerBlur(b){
	console.log("see if picker blurs:" +JSON.stringify(b));
	var surahpicker = Alloy.createPicker('surahpicker').show();
	$.surahpicker.blur();
}*/// Didn't work
 


/*
///if ayahpicker = 1, "do nothing". if ayahpciker = 0 "launch picker"

$.surahpicker.addEventListener("change",function(e){
	console.log("surahChange: JSON.stringify(e): "+JSON.stringify(e));
	var surahname = e.row.title;
	$.surahvalue.text = surahname;
	
	// set for ayah picker	
	for(j=0;j<surah.length;j++){
		if(surah[j].name == surahname){ var count = surah[j].count;}		
	}
	console.log("surahChange: count: "+count);
	var column2 = Ti.UI.createPickerColumn();
	if (count != "0") { //!="0" means count is not equal to zero
		for(var i=1;i<=count; i++){
		  	var rowAyahNumber = Ti.UI.createPickerRow({
		   		title: "\""+i+"\""
		 	});
		  	column2.addRow(rowAyahNumber);
		}
	
	 
	$.ayahpicker.add(column2);
  	$.ayahlabel.addEventListener("click",function(e){
  		console.log("surahChange: ayahlabel: JSON.stringify(e): "+JSON.stringify(e));
  		$.surahpicker.hide();		
		$.ayahpicker.show();
		});		
	};


	$.ayahpicker.addEventListener("change",function(e){
	console.log("ayahChange: JSON.stringify(e): "+JSON.stringify(e));
	$.ayahvalue.text = e.row.title;
	});

});

$.surahpicker.on("focus", function focus () {
  surahpicker.show();
});
$.ayahpicker.show();
$.pagepicker.hide();

surahlabeladdpicker = "0";
$.surahlabel.addEventListener("click",function(e){
	console.log("surahlabel: surahlabeladdpicker: "+surahlabeladdpicker);
	if(surahlabeladdpicker == "0") {$.surahpicker.add(column1);
		};
	$.surahpicker.show();
	surahlabeladdpicker = "1";
});
ayahlabeladdpicker = "0";
$.ayahlabel.addEventListener("click", function(a){
	console.log("ayahlabel: ayahlabeladdpicker: "+ayahlabeladdpicker);
	if(ayahlabeladdpicker =="0") {$.ayahpicker.add(column2);
		};
	$.ayahpicker.show();
	ayahlabeladdpicker ="1";

	if(ayahlabeladdpicker == "1") {$.ayahpicker.remove(column2);
		};
	$.ayahpicker.hide();
	//ayahlabeladdpicker ="0";
	
});


*/

////GoalPicker.add([column1, column2]);
//goalWin.add(GoalPicker);
