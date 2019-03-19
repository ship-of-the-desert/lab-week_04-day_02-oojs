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
let newAccount = new Atm("checking", 60);
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
    console.log(next);
    // this.songs.find(function(currentSong) {
    //     return currentSong;
    //   });
  }
  previousSong() {
    let previous = this.songs[this.songs.indexOf(this.currentSong) - 1];
    console.log(previous);
  }
}

let song = new RecordAlbums("A", "bb", ["aa", "bb", "cc", "dd"], "bb");
song.nextSong();
song.previousSong();

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
let rectangle = new Geometry(3, 5);
rectangle.isSquare();
rectangle.area();
rectangle.perimeter();

class Triangle {
  constructor(sideA, sideB, sideC) {
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  isEquilateral() {
      return(this.sideA==this.sideB==this.sideC)
  }
  c() {
    return(this.sideA==this.sideC ||this.sideA==this.sideB || this.sideB==this.sideC )  
  }
  area() {
    return(0.5*sideA*sideB)
  }
  isObtuse() {
    return(!isEquilateral()&& !isEquilateral())
  }
}

class LineSegment{
  constructor(x1,y1,x2,y2){
    
  }
}