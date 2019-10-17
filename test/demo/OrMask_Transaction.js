

/**
 *
 * @author McKillaGorilla
 */
class OrMask_Transaction extends jTPS_Transaction {
    // THIS IS THE OBJECT IT WILL MANIPULATE
    num;
    
    intNum;
    
    // AMOUNT TO MASK FOR NUM
    mask;

    /**
     * Constructor for this transaction, it initializes this
     * object with all the data needed to both do and undo
     * the transaction.
     * 
     * @param initNum
     * @param initAmountToAdd 
     */
    OrMask_Transaction(initNum, initIntNum, initMask) {
        // KEEP THESE FOR LATER
        num = initNum;
        intNum = initIntNum;
        mask = initMask;
    }

    /**
     * This transaction simply adds the value to the num.
     */
    
    doTransaction() {
        num.orMask(mask);
    }

    /**
     * As the reverse of do, this method substracts from num.
     */
    
    undoTransaction() {
        num.setNum(intNum);
    }

    /**
     * Provides a textual summary of this transaction.
     * 
     * @return A string storing a textual summary of this object.
     */
    
    toString() {
        return "Or Mask " + mask;
    }
}