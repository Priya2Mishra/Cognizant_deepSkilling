package Design_Patterns.FactoryMethodPattern;

public class FactoryMethod {
    public static void main(String[] args) {
        DocumentFactory wordFactory = new WordDocumentFactory();
        DocumentFactory pdfFactory = new PdfDocumentFactory();
        DocumentFactory excelFactory = new ExcelDocumentFactory();

        wordFactory.displayDocument();
        pdfFactory.displayDocument();
        excelFactory.displayDocument();
    }
}
