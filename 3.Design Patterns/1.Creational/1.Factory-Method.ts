/*  
    * Factory Method Pattern

    What: A creational design pattern that provides an interface for creating objects in a superclass but allows subclasses to alter the type of objects that will be created.
    When: Creating objects depending on a condition or configuration.
    Why: To encapsulate the instantiation logic and provide a simple interface for object creation.
    How: Define a factory method that returns an instance of a class based on input parameters.


    Example:
    An e-commerce app supports multiple payment methods (Credit Card, PayPal, UPI).
    We need a flexible way to switch between payment processors without rewriting code.
*/

interface PaymentMethod {
    processPayment(amount: number): void;
}
  
class CreditCardPayment implements PaymentMethod {
    processPayment(amount: number): void {
        console.log(`Processing credit card payment of $${amount}`);
    }
}

class PayPalPayment implements PaymentMethod {
    processPayment(amount: number): void {
        console.log(`Processing PayPal payment of $${amount}`);
    }
} 

class BankTransferPayment implements PaymentMethod {
    processPayment(amount: number): void {
        console.log(`Processing bank transfer payment of $${amount}`);
    }
}

class PaymentFactory {
    static createPaymentMethod(method: string): PaymentMethod {
        switch (method) {
            case 'credit':
                return new CreditCardPayment();
            case 'paypal':
                return new PayPalPayment();
            case 'bank':
                return new BankTransferPayment();
            default:
                throw new Error('Invalid payment method');
        }
    }
}

// Usage
const paymentMethod = PaymentFactory.createPaymentMethod('credit');
paymentMethod.processPayment(100); // Output: Processing credit card payment of $100

const paymentMethod2 = PaymentFactory.createPaymentMethod('paypal');
paymentMethod2.processPayment(200); // Output: Processing PayPal payment of $200