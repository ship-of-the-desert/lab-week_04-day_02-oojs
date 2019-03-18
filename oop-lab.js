console.log('oop-lab.js file loaded');

// PUT ATM CODE HERE

class Atm{
    constructor(type, money = 0){
        this.type=type;
        this.money=money;
        this.transaction=[]
    }


withDraw(numW){
    this.money=this.money-numW;
    console.log(this.money);
    this.transaction.push("withDraw "+numW);
}
deposit(numD){
    this.money=this.money+numD;
    console.log(this.money)
    this.transaction.push("deposit "+numD);

}
showBalance(){
    console.log(this.money)
}
transactionHistory(){
    console.log(this.transaction)
}

}

var lamyaa = new Atm("checking", 20);
lamyaa.withDraw(5);
lamyaa.deposit(1000);
lamyaa.showBalance();

lamyaa.deposit(1);
lamyaa.transactionHistory();










// PUT RECORD ALBUMS CODE HERE


class RecordAlbums{
    constructor(artistName, albumName, songs, currentSong){
        this.artistName=artistName;
        this.albumName=albumName;
        this.songs=songs;
        this.currentSong=currentSong;
    }
}










// PUT GEOMETRY CODE HERE
