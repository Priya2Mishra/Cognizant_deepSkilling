package Design_Patterns.FactoryMethodPattern;

public abstract class DocumentFactory {
    public abstract Document createDocument();

    public void displayDocument() {
        Document document = createDocument();
        document.open();
    }
}
