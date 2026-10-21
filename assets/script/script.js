// Tugas - 4 (Js dan console.log)

// a. Segitiga (Biasa)
let alasSegitiga = 10;
let tinggiSegitiga = 8;
let sisiA = 6;
let sisiB = 7;
let sisiC = 8;

let luasSegitiga = 0.5 * alasSegitiga * tinggiSegitiga;
let kelilingSegitiga = sisiA + sisiB + sisiC;

console.log("--- A. SEGITIGA ---");
console.log("Luas Segitiga adalah: " + luasSegitiga);
console.log("Keliling Segitiga adalah: " + kelilingSegitiga);


// b. Persegi Panjang
let panjangPP = 12;
let lebarPP = 5;

let luasPP = panjangPP * lebarPP;
let kelilingPP = 2 * (panjangPP + lebarPP);

console.log("\n--- B. PERSEGI PANJANG ---");
console.log("Luas Persegi Panjang adalah: " + luasPP);
console.log("Keliling Persegi Panjang adalah: " + kelilingPP);


// c. Prisma (Contoh Prisma Segitiga)
let alasPrisma = 6;
let tinggiPrismaSegitiga = 4;
let tinggiPrisma = 10;
let kelilingAlasPrisma = 18; // Contoh jumlah ketiga sisi alas

let luasPermukaanPrisma = (2 * (0.5 * alasPrisma * tinggiPrismaSegitiga)) + (kelilingAlasPrisma * tinggiPrisma);
let volumePrisma = (0.5 * alasPrisma * tinggiPrismaSegitiga) * tinggiPrisma;

console.log("\n--- C. PRISMA ---");
console.log("Luas Permukaan Prisma adalah: " + luasPermukaanPrisma);
console.log("Volume Prisma adalah: " + volumePrisma);


// d. Limas (Contoh Limas Segi Empat)
let sisiAlasLimas = 6;
let tinggiLimas = 10;
let tinggiSisiTegak = 8;

let luasAlasLimas = sisiAlasLimas * sisiAlasLimas;
let luasSelimutLimas = 4 * (0.5 * sisiAlasLimas * tinggiSisiTegak);
let luasPermukaanLimas = luasAlasLimas + luasSelimutLimas;
let volumeLimas = (1/3) * luasAlasLimas * tinggiLimas;

console.log("\n--- D. LIMAS ---");
console.log("Luas Permukaan Limas adalah: " + luasPermukaanLimas);
console.log("Volume Limas adalah: " + volumeLimas);


// e. Segitiga Sembarang 
let s1 = 7;
let s2 = 9;
let s3 = 12;

let kelilingSegitigaSembarang = s1 + s2 + s3;
let setengahKeliling = kelilingSegitigaSembarang / 2;
let luasSegitigaSembarang = Math.sqrt(
  setengahKeliling * (setengahKeliling - s1) * (setengahKeliling - s2) * (setengahKeliling - s3)
);

console.log("\n--- E. SEGITIGA SEMBARANG ---");
console.log("Luas Segitiga Sembarang adalah: " + luasSegitigaSembarang);
console.log("Keliling Segitiga Sembarang adalah: " + kelilingSegitigaSembarang);