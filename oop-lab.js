console.log("oop-lab.js file loaded");

// PUT ATM CODE HERE
class Atm {
  constructor(type, money = 0) {
    this.type = type;
    this.money = money;
    this.transactionHistory = {
      trans: " ",
      amount: 0
    };
    // this.backupAccount=0;
  }
  withdraw(decreasingAmount) {
    this.money = this.money - decreasingAmount;
    this.transactionHistory.trans = "Withdraw ";
    this.transactionHistory.amount = decreasingAmount;
    console.log(
      `${this.transactionHistory.trans} ${this.transactionHistory.amount}`
    );
  }
  deposit(increasingAmount) {
    this.money = this.money + increasingAmount;
    this.transactionHistory.trans = "Deposit ";
    this.transactionHistory.amount = increasingAmount;
    console.log(
      `${this.transactionHistory.trans} ${this.transactionHistory.amount}`
    );
  }
  showBalance() {
    //   if (this.money<0){
    //   }
    console.log(`Balance: ${this.money}`);
  }
}
console.log(".....ATM.....");
let newAccount = new Atm("checking", 60);
console.log(newAccount)
newAccount.deposit(100);
newAccount.withdraw(2);
newAccount.showBalance();

// PUT RECORD ALBUMS CODE HERE
class RecordAlbums {
  constructor(artistName, albumName, songs, currentSong) {
    this.artistName = artistName;
    this.albumName = albumName;
    this.songs = songs;
    this.currentSong = currentSong;
  }
  nextSong() {
    let next = this.songs[this.songs.indexOf(this.currentSong) + 1];
    console.log(`Next:${next}`);
    // this.songs.find(function(currentSong) {
    //     return currentSong;
    //   });
  }
  previousSong() {
    let previous = this.songs[this.songs.indexOf(this.currentSong) - 1];
    console.log(`Previous:${previous}`);
  }
}
console.log(".....RecordAlbums.....");
let song = new RecordAlbums("Adele", "21", ["Rolling in the Deep", "Someone Like You ", "One and Only", "Set Fire to the Rain"], "Someone Like You ");
console.log(`Current:${song.currentSong}`);
song.nextSong();
song.previousSong();
//.......................................
// PUT GEOMETRY CODE HERE
class Geometry {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  isSquare() {
    console.log("is Square " + (this.length == this.width));
    {
    }
  }
  area() {
    console.log("Area:" + this.length * this.width);
  }
  perimeter() {
    console.log(
      "Perimeter:" + (this.length + this.width + this.length + this.width)
    );
  }
}
console.log(".....Rectangle.....");
let rectangle = new Geometry(3, 5);
console.log(rectangle);
rectangle.isSquare();
rectangle.area();
rectangle.perimeter();
//.......................................

class Triangle {
  constructor(sideA, sideB, sideC) {
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  isEquilateral() {
    console.log (`isEquilateral: ${this.sideA == this.sideB== this.sideC}`);
  }
  isIsosceles() {
    console.log (`isIsosceles: ${this.sideA == this.sideC ||this.sideA == this.sideB ||this.sideB == this.sideC}`);
  }
  area() {
    console.log(`Triangle area:${0.5 * this.sideA * this.sideB}`);
  }
  isObtuse() {
    console.log(`isObtuse: ${!this.isEquilateral() && !this.isEquilateral()}`);
  }
}
console.log(".....Triangle.....");
let triangle=new Triangle(3,4,6);
console.log(triangle)
triangle.isEquilateral();
triangle.isIsosceles();
triangle.area();
triangle.isObtuse();
//.......................................
class LineSegment {
  constructor(x1, y1, x2, y2) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
  length() {
    console.log(`length ${Math.sqrt(Math.pow(this.x2 - this.x1, 2) + Math.pow(this.y2 - this.y1, 2))}`);
  }
}
console.log(".....LineSegment.....");
let line = new LineSegment(2, 3, 5, 4);
console.log(line)
line.length();
