package org.example.util.showutil;

import org.example.util.category.CategoryMenu;
import org.example.util.inventory.InventoryMenu;
import org.example.util.product.ProductMenu;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.util.Scanner;
@Component
public class ShowMenu {

    private int index = 0;
    Logger logger = LoggerFactory.getLogger(ShowMenu.class);

    private final CategoryMenu categoryMenu;
    private final ProductMenu productMenu;
    private final InventoryMenu inventoryMenu;

    public ShowMenu(CategoryMenu categoryMenu, ProductMenu productMenu, InventoryMenu inventoryMenu) {
        this.categoryMenu = categoryMenu;
        this.productMenu = productMenu;
        this.inventoryMenu = inventoryMenu;
    }

    public void showMenu(){
        do{
            try {
                selectMenu();
                logger.info("\n=================Selection ==================");
                inPut();
                switch (index){
                    case 1:
                        categoryMenu.showMenu();
                        break;
                    case 2:
                        productMenu.showMenu();
                        break;
                    case 3:
                        inventoryMenu.showMenu();
                        break;
                    case 4:
                        System.exit(0);
                        break;
                    default:
                        break;
                }
            }catch (Exception e){
                logger.info("Nhập lựa chọn là số");
            }
        }while (index > 0 || index < 5);
    }

    private void selectMenu(){
        logger.info("1. Loại sản phẩm");
        logger.info("2. Sản phẩm");
        logger.info("3. Kho");
        logger.info("4. Exit");
    }

    private void inPut(){
        Scanner scanner = new Scanner(System.in);
        if(scanner.hasNext()){
            index = Integer.parseInt(scanner.nextLine());
        }
    }
}
