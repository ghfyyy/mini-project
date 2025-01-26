function calculateBMI(weight, height) {
    if (weight <= 0 || height <= 0) {
        return "Berat badan dan tinggi badan harus lebih dari nol";
    }
    let bmi = weight / (height * height);
    return bmi.toFixed(2);
}

// Contoh penggunaan
let beratBadan = 70; // dalam kilogram
let tinggiBadan = 1.75; // dalam meter

let bmi = calculateBMI(beratBadan, tinggiBadan);
console.log("BMI Anda adalah: " + bmi);