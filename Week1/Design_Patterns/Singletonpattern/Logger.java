

public class Logger {

    private static Logger obj;

    private Logger() {
        System.out.println("Logger instance created.");
    }

    public static Logger getInstance() {
        if (obj == null) {
            obj = new Logger();
        }
        return obj;
    }

    public void log(String message) {
        System.out.println( message);
    }
}