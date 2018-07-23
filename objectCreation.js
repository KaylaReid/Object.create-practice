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

advisor.sell("SWA",
"Surviving a werewolf attack LLC",
725, 12345678);
console.log(advisor.portfolio);



console.log(advisor.worth());
