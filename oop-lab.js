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
  constructor(artistName,albumName,songs,currentSong) {
    this.artistName = artistName;
    this.albumName = albumName;
    this.songs = songs;
    this.currentSong = currentSong;
  }
  nextSong(){
     let next=this.songs[(this.songs.indexOf(this.currentSong))+1];
     console.log(next);
    // this.songs.find(function(currentSong) {
    //     return currentSong;
    //   });
  }
previousSong(){
    let previous=this.songs[(this.songs.indexOf(this.currentSong))-1];
    console.log(previous);
}
}

let song=new RecordAlbums("A","bb",['aa','bb','cc','dd'],"bb")
song.nextSong();
song.previousSong();
// PUT GEOMETRY CODE HERE
