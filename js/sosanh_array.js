// sort(): sắp xếp theo thứ tự abc
let arrSort = ["Binh", "Minh", "Viet", "Nam"];
arrSort.sort();
console.log(arrSort);
// Trường hợp đặc biệt của sort (giá trị tăng dần): ví dụ sắp xếp theo mảng [2,1,100,20]
//  thì khi dùng sort sẽ cho kết quả : [1,100,2,20] => kết  quả không đúng vì nó tính (1<2)
// vì vậy ta phải dùng function để xét trường hơp đó: sort(function(a, b){return a - b})
let arrSortNumber = [1, 4, 2, 1, 100, 40];
arrSortNumber.sort(function (a, b) {
  return a - b;
});
console.log(arrSortNumber);
// Trường hợp đặc biệt của sort (giá trị giảm dần)
let arrSortNumberUP = [1, 4, 2, 1, 100, 40];
arrSortNumberUP.sort(function (a, b) {
  return b - a;
});
console.log(arrSortNumberUP);
//reverse() : Sắp xếp theo hướng đảo ngược thứ tự mảng
let arrReverse = [1, 3, 5, 1, 8, 3];
arrReverse.reverse();
console.log(arrReverse);
// compara Functon
var pointCompara = [40, 1000, 20, 43, 2000];
document.getElementById("compareFunction").innerHTML = pointCompara;
function myFunction1() {
  pointCompara.sort();
  document.getElementById("compareFunction").innerHTML = pointCompara;
}
function myFunction2() {
  pointCompara.sort(function (a, b) {
    return a - b;
  });
  document.getElementById("compareFunction").innerHTML = pointCompara;
}
//Sắp xếp random
let pointsRandom = [3, 4, 44, 23, 8, 54];
function myRandom() {
  pointsRandom.sort(function (a, b) {
    return 0.5 - Math.random();
  });
  document.getElementById("labelRandom").innerHTML = pointsRandom;
}

//Phương pháp Fisher Yates
let fisher_Yates = [433, 3, 5, 22, 55];
document.getElementById("fisher").innerHTML = fisher_Yates;
function fisher_Yates_function() {
        let i,j,k;
  for (i = fisher_Yates.length-1; i > 0; i--) {
    j = Math.floor(Math.random() * i);
    k = fisher_Yates[i];
    fisher_Yates[i] = fisher_Yates[j];
    fisher_Yates[j] = k;
   
  }
  document.getElementById("fisher").innerHTML = fisher_Yates;
}
// Tìm giá trị cao nhất 

let pointsArray =[20,30,10,20,11];
document.getElementById("vaule-array").innerHTML="mảng ["+pointsArray +"]";
function highest_sortting(){
pointsArray.sort(function(a,b){return a+b});
document.getElementById("find-value-highest").innerHTML="Giá trị cao nhất trong mảng là: " + pointsArray[1];
}

// Tìm giá trị thấp nhất

let pointsArraySort =[40,30,70,20,11];
document.getElementById("vaule-array-small").innerHTML="mảng ["+pointsArraySort +"]";
function small_sortting(){
pointsArraySort.sort(function(a,b){return a-b});
document.getElementById("find-value-small").innerHTML="Giá trị nhỏ nhất trong mảng là: " + pointsArraySort[0];
}
// Sử dụng Math.max () trên một mảng
let pointsMathMax=[432,2,53,12,4443];
document.getElementById("points-math").innerHTML="Mảng ban đầu [" + pointsMathMax + "]";
function highest_number_array(arr){
        return Math.max.apply(null,arr);
}
document.getElementById("points-math-max").innerHTML="Giá trị lớn nhất = " + highest_number_array(pointsMathMax);
// Sử dụng Math.min () trên một mảng
function small_number_array(arr){
        return Math.min.apply(null,arr);
}
document.getElementById("points-math-min").innerHTML="Giá trị nhỏ nhất = " + small_number_array(pointsMathMax);

// Sắp xếp mảng đối tượng

let cars=[
        {type:"BMV",years:2021},
        {type:"Vinfast",years:2020},
        {type:"Audio",years:2019},
        {type:"Honda",years:20128}
];
displayCars();
function array_object_sortting(){
        cars.sort(function(a, b){return a.years - b.years});
        displayCars();
}
function displayCars(){
        document.getElementById("array-object-sortting").innerHTML=
        cars[0].type + " - " + cars[0].years +"<br>"
        + cars[1].type + " - " + cars[1].years +"<br>"
        + cars[2].type + " - " + cars[2].years +"<br>"
        + cars[3].type + " - " + cars[3].years +"<br>";
}
