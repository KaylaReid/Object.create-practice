## Practice
# Your job is to create an object that represents a financial advisor and has the following properties and methods.

 # Company (enumerable, writable, property)
 # Specialty (enumerable, writable, property)
 # Name (enumerable, property)
 # Portfolio (non-enumerable, property) - Should display the stocks the advisor currently holds
 # Worth (non-enumerable, method)
 # Purchase (non-enumerable, method) - This method takes a stock ticker symbol, a quantity, and a price as arguments
 # Sell (non-enumerable, method) - This method takes a stock ticker symbol, a quantity, and a price as arguments
 # When sell() or purchase() are invoked, then the stock portfolio should be modified accordingly. Start off with making portfolio property an array that holds transactions.

 # When you invoke the worth() method, it should look at every transaction and calculate the advisor's net worth.