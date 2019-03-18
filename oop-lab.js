// console.log('oop-lab.js file loaded');

// // PUT ATM CODE HERE
// class ATM {
//     constructor(type, money){
//         this.type = type;
//         this.money = money;
//         this.transactionHistory = [] // object of each transaction
//     }
//     withdraw (num){
//          this.money = this.money - num; 
//          this.transactionHistory.push({withdraw: `${this.money}`});
//     }
//     deposit(num){
//          this.money = this.money + num; 
//         this.transactionHistory.push({ deposit: `${this.money}` });

//     }
//     showBalance(num){
// return "Your balance is " + this.money;
//     }
// }

// var Aceel = new ATM ("Savings", 2000000);
// Aceel.withdraw(1000000);
// Aceel.deposit(400000);
// console.log(Aceel.showBalance());
// console.log(Aceel.transactionHistory);



// backupAccount








// PUT RECORD ALBUMS CODE HERE













// PUT GEOMETRY CODE HERE

class Rectangle {
    constructor(length, width) {
        this.length = length ; 
        this.width = width ;
    }
    isSquare(length, width) {
if ( this.width == this.length )
return true; 
else return false 
  }

    area(length, width){
        return this.width * this.length; 
    }
    perimeter (length, width) {
        return this.width *2 +  this.length *2; 

    }

}
var rec = new Rectangle(5, 5);
console.log("does it look like squere ? " + rec.isSquare());
console.log("the rectangle area =  " + rec.area());
console.log("the rectangle perimeter =  " + rec.perimeter());



class Triangle {
constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
}
    isEquilateral(){
if ( this.sideA == this.sideB == this.sideC)
return true; 
    }

    isIsosceles(){

    }

    area(){

    }

    isObtuse(){

    }
}

