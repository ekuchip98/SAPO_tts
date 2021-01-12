package org.example.util.showutil;

import org.example.util.category.CategoryMenu;
import org.example.util.inventory.InventoryMenu;
import org.example.util.product.ProductMenu;
import org.example.util.user.UserMenu;
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
    private final UserMenu userMenu;

    public ShowMenu(CategoryMenu categoryMenu, ProductMenu productMenu, InventoryMenu inventoryMenu, UserMenu userMenu) {
        this.categoryMenu = categoryMenu;
        this.productMenu = productMenu;
        this.inventoryMenu = inventoryMenu;
        this.userMenu = userMenu;
    }

    public void showMenu(){
        do{
            try {
                selectMenu();
                logger.info("\n=================Selection ==================");
                inPut();
                switch (index){

                    case 1:
                        userMenu.showMenu();
                        break;
                    case 2:
                        categoryMenu.showMenu();
                        break;
                    case 3:
                        productMenu.showMenu();
                        break;
                    case 4:
                        inventoryMenu.showMenu();
                        break;
                    case 5:
                        System.exit(0);
                        break;
                    default:
                        break;

                }
            }catch (NumberFormatException e){
                logger.info("Nhập lựa chọn là số");
            }
        }while (index > 0 || index < 6);
    }

    private void selectMenu(){
        System.out.println();
        logger.info("1. Đăng nhập kiểm tra SQL INJECTION ");
        logger.info("2. Loại sản phẩm");
        logger.info("3. Sản phẩm");
        logger.info("4. Kho");
        logger.info("5. Exit");
    }

    private void inPut(){
        Scanner scanner = new Scanner(System.in);
        if(scanner.hasNext()){
            index = Integer.parseInt(scanner.nextLine());
        }
    }
}
