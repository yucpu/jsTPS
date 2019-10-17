

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
class AddToNum_Transaction extends jTPS_Transaction {
    // THIS IS THE OBJECT IT WILL MANIPULATE
    num;
    
    // AMOUNT TO ADD/REMOVE FOR NUM
    amountToAdd; 

    /**
     * Constructor for this transaction, it initializes this
     * object with all the data needed to both do and undo
     * the transaction.
     * 
     * @param initNum
     * @param initAmountToAdd 
     */
    AddToNum_Transaction(initNum,initAmountToAdd) {
        // KEEP THESE FOR LATER
        num = initNum;
        amountToAdd = initAmountToAdd;
    }

    /**
     * This transaction simply adds the value to the num.
     */
    
    doTransaction() {
        oldNum = num.getNum();
        newNum = oldNum + amountToAdd;
        num.setNum(newNum);
    }

    /**
     * As the reverse of do, this method substracts from num.
     */
    
    undoTransaction() {
        oldNum = num.getNum();
        newNum = oldNum - amountToAdd;
        num.setNum(newNum);
    }

    /**
     * Provides a textual summary of this transaction.
     * 
     * @return A string storing a textual summary of this object.
     */

    toString() {
        return "Add " + amountToAdd;
    }
}