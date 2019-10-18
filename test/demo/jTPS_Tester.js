/**
 * This driver demonstrates simple usage of the jTPS API.
 * 
 * @author THE McKilla Gorilla (accept no imposters)
 * @version 2.0
 */
class jTPS_Tester {
    constructor(){
        this.tps = new jTPS();
    
    // HERE'S THE DATA WE'RE MANIPULATING IN THIS DEMO
        this.num = new Num();
    }
    // HERE'S OUR TRANSACTION PROCESSING SYSTEM  
    
    // add
    add_transaction(info){
        let entry = parseInt(info);
        let transaction = new AddToNum_Transaction(this.num,entry);
        this.tps.addTransaction(transaction);
        return " After Add -> "+this.getNum()+'<br/>'+'\n'+
                "1) Add a Transaction"+'<br/>'+'\n'+
                "2) Undo a Transaction"+'<br/>'+'\n'+
                "3) Redo a Transaction"+'<br/>'+'\n'+
                "4) Clear All Transactions"+'<br/>'+'\n'+
                "5) Reset Num and Transactions"+'<br/>'+'\n';
    }
    getNum(){
        return this.num.getNum();
    }
    //undo
    undoTransaction(){
        this.tps.undoTransaction();
        return " After Undo -> "+this.getNum()+'<br/>'+'\n'+
                "1) Add a Transaction"+'<br/>'+'\n'+
                "2) Undo a Transaction"+'<br/>'+'\n'+
                "3) Redo a Transaction"+'<br/>'+'\n'+
                "4) Clear All Transactions"+'<br/>'+'\n'+
                "5) Reset Num and Transactions"+'<br/>'+'\n';
    }
    //redo
    doTransaction(){
        this.tps.doTransaction();
        return " After Redo -> "+this.getNum()+'<br/>'+'\n'+
                "1) Add a Transaction"+'<br/>'+'\n'+
                "2) Undo a Transaction"+'<br/>'+'\n'+
                "3) Redo a Transaction"+'<br/>'+'\n'+
                "4) Clear All Transactions"+'<br/>'+'\n'+
                "5) Reset Num and Transactions"+'<br/>'+'\n';
    }
    //clearTransaction
    clearAllTransactions(){
        this.tps.clearAllTransactions();
        return " After clearAllTransactions -> "+this.getNum()+'<br/>'+'\n'+
                "1) Add a Transaction"+'<br/>'+'\n'+
                "2) Undo a Transaction"+'<br/>'+'\n'+
                "3) Redo a Transaction"+'<br/>'+'\n'+
                "4) Clear All Transactions"+'<br/>'+'\n'+
                "5) Reset Num and Transactions"+'<br/>'+'\n';
    }
    clearAllTransactions2(){
        this.tps.clearAllTransactions();
        this.num.setNum(0);
        return " After clearAllTransaction and Reset -> "+this.getNum()+'<br/>'+'\n'+
                "1) Add a Transaction"+'<br/>'+'\n'+
                "2) Undo a Transaction"+'<br/>'+'\n'+
                "3) Redo a Transaction"+'<br/>'+'\n'+
                "4) Clear All Transactions"+'<br/>'+'\n'+
                "5) Reset Num and Transactions"+'<br/>'+'\n';
    }


}