package Data_Structure_Algo.ECommerce_function;

public class Linear_Search {
    public static Product linearSearch(Product[] products, int id) {
        for (Product product : products) {
            if (product.getProductId() == id) {
                return product;
            }
        }
        return null;
    }
}
