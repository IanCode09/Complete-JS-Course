/*
// ========== Variable dan Data Types ==========

var firstName = 'Ian';
console.log(firstName);

var lastName = 'Lombu';
console.log(lastName);

var age=30
console.log(age);

var fullAge = true;
console.log(fullAge);

// ========== Variable dan Data Types ========== 
*/

/*
======== VARIABLE MUTATION AND COERCION ========

var firstName = 'Citra Kemurnian'
var age = 25

console.log('First Name : ' + firstName + ' Umur : ' + age);

var job, isMarried;
job = 'Web Developer';
isMarried = false;

console.log(firstName + ' is a ' + job + ' Is he married ? ' + isMarried);

var lastName = prompt('Your Last Name')
console.log('His name is ' + firstName + ' ' + lastName);

======== VARIABLE MUTATION AND COERCION ========
*/

/*
====== BASIC OPERATOR ==========

var year, yearIan, yearSaduk;
now = 2020;
ageIan = 25;
ageSaduk = 23;

yearIan = now - ageIan;
yearSaduk = now - ageSaduk

console.log(yearIan);
console.log(yearSaduk);

// Logical Operator
var result = ageIan > ageSaduk
console.log(result);
console.log(typeof result);

====== BASIC OPERATOR ========== 
*/

/*
========== TERNARY OPERATOR AND SWITCH STATEMENT ============

var firstName = "Ian Lombu";
var age = 25;
age >= 18 ? console.log(firstName + ' Should be Police') : console.log(firstName + 'is a Student');

var role = 'use';
switch (role) {
    case 'admin':
        console.log('Welcome Admin');
        break;
    case 'users':
        console.log('Welcome User');
        break;
    default:
        console.log(`Are you Alien ?`);
        break;
}

========== TERNARY OPERATOR AND SWITCH STATEMENT ============
*/

// ======== FUNCTION EXPRESSION =============
/*
var perkalian = function(angka1, angka2) {
    return angka1 * angka2
}

console.log(perkalian(3, 4));

var profil = function(pekerjaan, namaLengkap) {
    switch (pekerjaan) {
        case 'Web Developer':
            return namaLengkap + ' berprofesi sebagai ' + pekerjaan;
        case 'Programmer' :
            return namaLengkap + ' berprofesi sebagai ' + pekerjaan;
        default:
            return namaLengkap + ' seorang pemalas ';
    }
}

console.log(profil('Programmer', 'saduk'));
*/
// ======== FUNCTION EXPRESSION =============

/*
// ======== OBJECT AND METHOD ===============
var profil = {
    nama: 'Ian Lombu',
    umur: 25,
    jurusan: 'Ilmu Komputer',
    skil: ['PHP, JS, Laravel'],
    nilai1: 70,
    nilai2: 90,
    hitungNilai: function() {
        return this.nilai1 + this.nilai2
    }   
}
console.log(profil.hitungNilai());

var mahasiswa = new Object()
mahasiswa.firstName = 'Saduk'
mahasiswa.lastName = 'Fritz'
var panggil = mahasiswa['firstName'];
console.log(panggil);
// ======== OBJECT AND METHOD ===============
*/

//====== CONTINUE AND BREAK STATEMENTS =======
var guitar = ['Yamaha', 'string', 1500, 'Ian']
for(i = 0 ; i < guitar.length ; i++) {
    if(typeof guitar[i] !== 'number') continue;
    console.log(guitar[i]);
}

for(i = 0 ; i < guitar.length ; i++) {
    if(typeof guitar[i] !== 'string') break;
    console.log(guitar[i]);
}
//====== CONTINUE AND BREAK STATEMENTS =======