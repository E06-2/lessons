// Task2:
// how many people are overweight?
// using BMI method :
// BMI = weight / height * height  (height in Meter)
// if BMI is greater than 25 this person considered to be overweight
// write the code to calculate the percentage of overweight people in our class.


const people = ['Ahmad', 'Lace', 'Asieh', 'Karim', 'Mohammad', 'Suhaib', 'Ahmet', 'Haytham', 'Hisham', 'Eddison', 'Thomas', 'Fotis', 'Denis', 'Walaa', 'Matteo'];
const genders = ['m', 'm', 'f', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'm', 'f', 'm'];
const weights = [90, 70, 63, 82, 65, 80, 95, 90, 65, 85, 105, 68, 83, 65, 95];
const hights = [179, 173, 170, 185, 175, 170, 186, 178, 173, 175, 191, 187, 185, 165, 183];
const parties = ['green', 'SPD', 'SPD', 'CDU', 'SPD', 'SPD', '', 'CDU', '', 'CDU', '', '', '', 'SPD', 'Pirate'];

// variable to save number of overweight people
let sum = 0;
weights.forEach((weight, idx) => {
    let BMI = weight / ((hights[idx] / 100) ** 2);
    if (BMI >= 25) {
        sum++;
    }
})
console.log(`overweight percentage is : ${sum * 100 / people.length}%`);
