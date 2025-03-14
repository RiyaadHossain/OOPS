/*
    Open/Closed Principle:
    Software entities should be open for extension but closed for modification.
*/

class Invoice {
    private String invoiceNumber;
    private double amount;

    public Invoice(String invoiceNumber, double amount) {
        this.invoiceNumber = invoiceNumber;
        this.amount = amount;
    }

    public String getInvoiceNumber() { return invoiceNumber; }
    public double getAmount() { return amount; }
}

interface SaveInvoice {
    void save(Invoice invoice);
}

// SaveInvoiceToDB and SaveInvoiceToFile are open for extension
// but closed for modification
class SaveInvoiceToDB implements SaveInvoice {
    public void save(Invoice invoice) {
        // save to database implementation
    }
}

// later on, our business requirements change and we need to save invoices to a file
// we create a new class SaveInvoiceToFile
class SaveInvoiceToFile implements SaveInvoice {
    public void save(Invoice invoice) {
        // save to file implementation
    }
}

public class OpenClose {
    public static void main(String[] args) {
        Invoice invoice = new Invoice("INV123", 1000.0);
        SaveInvoice saveToDB = new SaveInvoiceToDB();
        saveToDB.save(invoice);

        SaveInvoice saveToFile = new SaveInvoiceToFile();
        saveToFile.save(invoice);
    }
}
