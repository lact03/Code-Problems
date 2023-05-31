const dynastyReign = [
    { name: "San Dynasty", year: "MXLI" },
    { name: "Villoria Dynasty", year: "MCCCIII" },
    { name: "Tan Dynasty", year: "MCCCXCVIII" },
    { name: "Bon Dynasty", year: "MCDXLV" },
    { name: "Maiko Dynasty", year: "MDCLXIV" },
    { name: "Paul Dynasty", year: "MCMXLIX" },
    { name: "Andre Dynasty", year: "MMMXICX" },
];

const invalidDynasties = [];

function longestDynasty(dynastyArrayName) {
    let currentYear = "M";
    let longestYear = 0;
    let longestDynastyObject;
    let dynastyValue;
    let currentYearValue = convertYear(currentYear);

    for (dynasty of dynastyArrayName) {
        dynastyValue = convertYear(dynasty.year) - currentYearValue;

        console.log(dynasty.name, ":", dynastyValue);

        if (isNaN(dynastyValue)) {
            invalidDynasties.push(dynasty);
        }
        if (dynastyValue > longestYear) {
            longestYear = dynastyValue;
            longestDynastyObject = dynasty;
        }
        currentYearValue += dynastyValue;
    }
    console.log("The invalid Dynasties is/are:", invalidDynasties);
    console.log("The longest dynasty to reign is", longestDynastyObject.name);
}

function convertYear(romanNumeral) {
    const romanNumerals = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    const regex = /^M{0,}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;

    // let capitalize = romanNumeral;
    // romanNumeral = capitalize.toUpperCase();
    let result = 0;

    for (let i = 0; i < romanNumeral.length; i++) {
        const currentNumeral = romanNumerals[romanNumeral[i]];
        const nextNumeral = romanNumerals[romanNumeral[i + 1]];

        if (!regex.test(romanNumeral)) {
            return "invalid roman numeral";
        } else if (nextNumeral && currentNumeral < nextNumeral) {
            result -= currentNumeral;
        } else {
            result += currentNumeral;
        }
    }

    return result;
}

// console.log(
//     convertYear("MXLI"),
//     convertYear("MCCCIII"),
//     convertYear("MCCCXCVIII"),
//     convertYear("MCDXLV"),
//     convertYear("MDCLXIV"),
//     convertYear("MCMXLIX"),
//     convertYear("MMMXICX")
// );

longestDynasty(dynastyReign);

// EXAMPLE OF INVALID NUMERAL
// console.log(convertYear("vx"));
// console.log(convertYear("vv"));
// console.log(convertYear("vc"));
// console.log(convertYear("xxxx"));
// console.log(convertYear("ixi"));
// console.log(convertYear("il"));
// console.log(convertYear("abc"));
