
/**
 * AddToNum_Transaction.java
 * 
 * This class is a transaction that can be executed and undone. It
 * can be stored in the jTPS transaction stack and must be constructed
 * with all the data necessary to perform both do and undo.
 * 
 * @author THE McKilla Gorilla (accept no imposters)
 * @version 2.0
 */
//import jTPS_Transaction from 'src/jtps/jTPS_Transaction.js' 
class AddToNum_Transaction extends jTPS_Transaction {
    // THIS IS THE OBJECT IT WILL MANIPULATE
    constructor(initNum, initAmountToAdd){
        super();
        this.num =initNum;
    
    // AMOUNT TO ADD/REMOVE FOR NUM
        this.amountToAdd=initAmountToAdd; 
    }

    /**
     * This transaction simply adds the value to the num.
     */
    
    doTransaction() {
        let oldNum = this.num.getNum();
        let newNum = oldNum + this.amountToAdd;
        this.num.setNum(newNum);
    }

    /**
     * As the reverse of do, this method substracts from num.
     */
    
    undoTransaction() {
        let oldNum = this.num.getNum();
        let newNum = oldNum - this.amountToAdd;
        this.num.setNum(newNum);
    }

    /**
     * Provides a textual summary of this transaction.
     * 
     * @return A string storing a textual summary of this object.
     */

    toString() {
        return "Add " + this.amountToAdd;
    }
}