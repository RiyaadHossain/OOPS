/*  
    Open/Closed Principle (OCP)

    Definition: Software entities (classes, modules, functions, etc.) should be open for extension but closed for modification.

    Action: This can be achieved by using interfaces or abstract classes to define the common behavior.
*/

class InvoiceDao {
  constructor(private invoice: Invoice) {}
  saveToDatabase(invoice: Invoice): void {
    // Save invoice to database
  }
}

/* 
    Let's suppose we want to add a new method to save in file.
    This would violate the OCP because we would have to modify the existing class to add this new functionality.

    To Fix: we can create a interface that defines the saving behavior and implement it in different classes.
*/

// Fix:
interface SaveInvoice {
  save(invoice: Invoice): void;
}
class SaveToDatabase implements SaveInvoice {
  save(invoice: Invoice): void {
    // Save invoice to database
  }
}
class SaveToFile implements SaveInvoice {
  save(invoice: Invoice): void {
    // Save invoice to file
  }
}