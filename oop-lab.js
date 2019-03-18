// console.log('oop-lab.js file loaded');

// // PUT ATM CODE HERE

// class Atm{
//     constructor(type, money = 0){
//         this.type=type;
//         this.money=money;
//         this.transaction=[]
//     }


// withDraw(numW){
//     this.money=this.money-numW;
//     console.log(this.money);
//     this.transaction.push("withDraw "+numW);
// }
// deposit(numD){
//     this.money=this.money+numD;
//     console.log(this.money)
//     this.transaction.push("deposit "+numD);

// }
// showBalance(){
//     console.log(this.money)
// }
// transactionHistory(){
//     console.log(this.transaction)
// }

// }

// var lamyaa = new Atm("checking", 20);
// lamyaa.withDraw(5);
// lamyaa.deposit(1000);
// lamyaa.showBalance();

// lamyaa.deposit(1);
// lamyaa.transactionHistory();










// PUT RECORD ALBUMS CODE HERE


// class RecordAlbums{
//     constructor(artistName, albumName, songs , currentSong){
//         this.artistName=artistName;
//         this.albumName=albumName;
//         this.songs=songs;
//         this.currentSong=currentSong;
//     }
//     nextSong(){
//         var i=this.songs.indexOf(this.currentSong);
//         console.log(this.songs[i+1]);
//     }
//     previousSong(){
//         var i=this.songs.indexOf(this.currentSong);
//         console.log(this.songs[i-1]);
//     }
// }

// var fav1 = new RecordAlbums("Rihanna", "Loud",['S&m', 'cheers','fading','only girl'],"cheers");

// fav1.nextSong();
// fav1.previousSong();



// PUT GEOMETRY CODE HERE


class Rectangle{
    constructor(length, width){
        this.length=length;
        this.width=width;
    }
    isSquare(){
        if(this.length===this.width){
            console.log("it's square")

        }
        else{
            console.log("it's not square")
        }
    
}
    area(){
        console.log("the area of the rectangle is "+(this.length*this.width))
    }

    perimeter(){
        console.log("the perimeter of the rectangle is "+(this.length*2+this.width*2));
    }
}

var geo1 = new Rectangle(2, 3);
// geo1.isSquare();
// geo1.area();
geo1.perimeter();

