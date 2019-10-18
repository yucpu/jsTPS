

/**
 *
 * @author McKillaGorilla
 */
class OrMask_Transaction extends jTPS_Transaction {
    constructor(initNum, initIntNum, initMask){
        super()
        this.num = initNum;
        this.intNum = initIntNum;
        this.mask = initMask;
    }

    /**
     * This transaction simply adds the value to the num.
     */
    
    doTransaction() {
        this.num.orMask(mask);
    }

    /**
     * As the reverse of do, this method substracts from num.
     */
    
    undoTransaction() {
        this.num.setNum(intNum);
    }

    /**
     * Provides a textual summary of this transaction.
     * 
     * @return A string storing a textual summary of this object.
     */
    
    toString() {
        return "Or Mask " + this.mask;
    }
}