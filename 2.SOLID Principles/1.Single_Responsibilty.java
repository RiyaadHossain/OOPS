/*
    Single Responsibility Principle:
    A class should have only one reason to change, meaning that a class should have
    only one job.
*/

// Example: Book class with single responsibility
class Book {
    private String title;
    private String author;
    private int pages;

    public Book(String t, String a, int p) {
        this.title = t;
        this.author = a;
        this.pages = p;
    }

    public String getTitle() { return title; }
    public String getAuthor() { return author; }
    public int getPages() { return pages; }

    // Other book-related methods...
}

// Class responsible for printing book details
class BookPrinter {
    public void printBookDetails(Book book) {
        System.out.println("Title: " + book.getTitle());
        System.out.println("Author: " + book.getAuthor());
        System.out.println("Pages: " + book.getPages());
    }

    // Other printing-related methods...
}

public class SingleResponsibility {
    public static void main(String[] args) {
        Book myBook = new Book("The Catcher in the Rye", "J.D. Salinger", 214);
        BookPrinter printer = new BookPrinter();
        printer.printBookDetails(myBook);
    }
}
