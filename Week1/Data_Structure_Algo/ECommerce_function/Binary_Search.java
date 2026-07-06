package Data_Structure_Algo.ECommerce_function;

public class Binary_Search {
    public static Product binarySearch(Product[] products, int id) {
        int low = 0;
        int high = products.length - 1;

        while (low <= high) {
            int mid = (low + high) / 2;

            if (products[mid].getProductId() == id) {
                return products[mid];
            }

            if (products[mid].getProductId() < id) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        return null;
    }
}
