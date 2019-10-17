

/**
 * Num.java
 *
 * This class serves as the data class that our transactions will manipulate.
 * It's just an integer wrapper class.
 *
 * @author THE McKilla Gorilla (accept no imposters)
 * @version 2.0
 */
class Num {

    // THE NUMBER THIS CLASS MANAGES
    num = 0;

    /**
     * Mutator method for the num instance variable.
     *
     * @param initNum The value to set num to.
     */
    setNum(initNum) {
        num = initNum;
    }

    /**
     * Accessor method for num.
     *
     * @return The num instance variable value.
     */
    getNum() {
        return num;
    }

    andMask(mask) {
        num = num & mask;
    }

    orMask(mask) {
        num = num | mask;
    }
}
