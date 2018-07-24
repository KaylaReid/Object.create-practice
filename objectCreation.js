console.log("Dope");

const advisor = Object.create(null, {
    company: {
        value: "Gringotts",
        enumerable: true,
        writable: true
    },
    specialty: {
        value: "Goblins",
        enumerable: true,
        writable: true
    },
    name: {
        value: "Bill Weasley",
        enumerable: true,
        writable: true
    },
    portfolio: {
        value: [ 
            {
                symbol: "CBI",
                name: "Curse Breaking Inc",
                shares: 450,
                valuation: 34567891
            },
            {   symbol: "FDE",
                name: "Fighting Death Eaters Inc.",
                shares: 675,
                valuation: 19876543
            },
            {
                symbol: "WWW",
                name: "Weasley Wizard Wheezes Co.",
                shares: 350,
                valuation: 56789432
            },
            {
                symbol: "SWA",
                name: "Surviving a werewolf attack LLC",
                shares: 725,
                valuation: 12345678
            }
        
        ],
            enumerable: false
    },
    purchase: {
        value: function (symbol, name, quantity, price) {
            advisor.portfolio.push({
                symbol: symbol,
                name: name,
                shares: quantity,
                valuation: price
            })
        },
    enumerable: false
    },
    sell: { 
        value: function (symbol, name, quantity, price){
            let portfolio = this.portfolio;
            for (i = 0; i < portfolio.length; i++){
                if (portfolio[i].symbol === symbol 
                    && portfolio[i].name === name 
                    && portfolio[i].shares === quantity
                    && portfolio[i].valuation === price){
                    console.log("got one", i);
                    portfolio.splice(i, 1);
                }
            }
        },
        
    enumerable: false
    },
    worth: {
        value: function(){
            let total = 0
            for (let i = 0; i < this.portfolio.length; i++) {
                let stockValue = this.portfolio[i].valuation * this.portfolio[i].shares;
                total += stockValue
            }
            return total
        },
        enumerable: false
    },

});

// purchased stock
advisor.purchase("GUP", "Growing Up Poor", 10, 30)
console.log(advisor.portfolio);


// selling stock
advisor.sell("SWA",
"Surviving a werewolf attack LLC",
725, 12345678);
console.log(advisor.portfolio);


// evaluation worth
console.log(advisor.worth());


let body = document.querySelector("body")

function createMainContent () {
    let script = document.querySelector("script");
    let mainContent = document.createElement("div");
    mainContent.setAttribute("id", "main-content");
    body.insertBefore(mainContent, script);

}
createMainContent();

let mainContent = document.getElementById("main-content")
mainContent.innerHTML +=
``










// refactored by Meg
// let advisor = Object.create({}, {
//     company: {
//         value:"Kao Jai LLC",
//         enumerable: true,
//         writable: true
//     },
//     specialty: {
//         value:"coffee loans",
//         enumerable: true,
//         writable: true
//     },
//     name: {
//         value:"Meg Ducharme",
//         enumerable: true,
//         writable: true
//     },
//     portfolio: {
//         value:[],
//         enumerable: false
//     },
//     worth: {
//         value:function(){
//             let worth = this.portfolio.reduce((accumulator, stock) => {
//                 return accumulator + (stock.price * stock.quantity);
//             }, 0);
//             return worth;
//         },
//         enumerable: false
//     },
//     purchase: {
//         value: function(symbol, quantity, price){
//             let newPurchase = {
//                 symbol: symbol,
//                 quantity: quantity,
//                 price: price,
//                 sold: false
//             };
//             this.portfolio.push(newPurchase);
//         },
//         enumerable: true
//     },
//     sell: {
//         value: function(symbol, quantity, price){

//             let findStock = this.portfolio.find(stock => {
//                 return stock.symbol === symbol && stock.sold === false;
//             })
            
//             if(findStock.quantity < quantity){
//                 alert(`You do not have that much stock in ${symbol}!`);
//             }else{
//                 let index = this.portfolio.indexOf(findStock);
    
//                 this.portfolio.splice(index, 1);
    
//                 let soldStock = {
//                     symbol: symbol,
//                     quantity: quantity,
//                     price: price,
//                     sold: true
//                 }
    
//                 let updatedStock = {
//                     symbol: findStock.symbol,
//                     quantity: findStock.quantity - soldStock.quantity,
//                     price: soldStock.price,
//                     sold: false
//                 }
    
//                 this.portfolio.push(soldStock, updatedStock);
//             }

//         },
//         enumerable: false
//     }
// });

// advisor.purchase("AAPL", 534, 3636);
// advisor.purchase("AMZN", 346, 3399);
// advisor.purchase("SBUX", 324, 9987);
// advisor.sell("AAPL", 555, 3109);
// console.log(advisor);