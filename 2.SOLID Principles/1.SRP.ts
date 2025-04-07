/*  
    1. Single Responsibility Principle (SRP)
    
    Definition: A class should have only one reason to change, meaning it should have only one job or responsibility.

    Action: Each class should focus on a single task or functionality, making it easier to maintain and understand.
*/

// Violating SRP
class Invoice {
    constructor(private amount: number) {}

    calculateTotal(): number {
        // Calculate total amount
        return this.amount + this.calculateTax();
    }

    calculateTax(): number {
        // Calculate tax
        return this.amount * 0.1;
    }

    printInvoice(): void {
        console.log(`Invoice Amount: ${this.amount}`);
    }

    saveToDatabase(): void {
        // Save invoice to database
        console.log(`Saving invoice of amount ${this.amount} to database.`);
    }
}

/* 
    In this example, the Invoice class has multiple responsibilities: calculating total, calculating tax, printing invoice, and saving to the database.

    To Fix: separete printing and saving to the database into their own classes 
*/