package org.example.util.inventory;

import org.example.controller.InventoryController;
import org.example.model.InventoryModel;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Scanner;

@Component
public class InventoryShow {

    private Logger logger =  LoggerFactory.getLogger(InventoryShow.class);
    private final InventoryController inventoryController;

    public InventoryShow(InventoryController inventoryController) {
        this.inventoryController = inventoryController;
    }

    //Show All data inventory
    public void showAll(){
        List<InventoryModel> list = inventoryController.findAll();
        showTitle();
        logger.info("-----------------------------------------------------------------------");
        for (InventoryModel model : list){
            showData(model);
        }
    }

    //Show data by id inventory
    public void showInventoryById(Integer id){
        InventoryModel model = inventoryController.findById(id);
        showTitle();
        logger.info("-----------------------------------------------------------------------");
        showData(model);
    }

    //Thêm mới kho
    public void createInventory(){
        try {
            InventoryModel model = new InventoryModel();
            inventoryInput(model);
            inventoryController.createInventory(model);
            logger.info("THÊM THÀNH CÔNG");
        }catch (Exception e){
            logger.info(String.valueOf(e.fillInStackTrace()));
            logger.info("THÊM THẤT BẠI");
        }
    }

    //Sửa loại kho
    public void updateInventory(Integer id){
        try {
            InventoryModel model = inventoryController.findById(id);
            inventoryInput(model);
            model.setId(id);
            inventoryController.updateInventory(model);
            logger.info("SỬA THÀNH CÔNG ID: " + id);
        }catch (Exception e){
            logger.info(String.valueOf(e.fillInStackTrace()));
            logger.info("SỬA THẤT BẠI");
        }
    }

    private void showData(InventoryModel model) {
        logger.info(String.format("%s\t\t%s\t\t%s\t\t%s\t\t%s\t\t%s\n",model.getId(),model.getInventoryCode(),model.getName(),model.getAddress(),model.getCreatedDate(),model.getModifiedDate()));
    }

    private void showTitle() {
        logger.info(String.format("%s\t\t%s\t\t\t%s\t\t\t%s\t\t\t%s\t\t\t%s\n","ID","WareHouseCode","Name","Address","CreatedDate","ModifiedDate"));
    }

    public void inventoryInput(InventoryModel model){
        Logger logger = LoggerFactory.getLogger(InventoryShow.class);
        Scanner scanner = new Scanner(System.in);
        String inPut = null;
        logger.info("Nhập mã kho:");
        model.setInventoryCode(inPutCode(inPut));
        logger.info("Nhập tên kho:");
        model.setName(scanner.nextLine());
        logger.info("Nhập địa điểm:");
        model.setAddress(scanner.nextLine());
    }

    private boolean checkCode(String inPut){
        int count = 0;
        for (String string : inventoryController.getInventoryCodes()){
            if(string.equals(inPut)){
                count++;
            }
        }
        try {
            if (count == 0){
                return true;
            }
        }catch (Exception e){
            return false;
        }
        return false;
    }

    private String inPutCode(String inPut){
        Scanner scanner = new Scanner(System.in);
        do {
            inPut = scanner.nextLine();
            if (checkCode(inPut)){
                return inPut;
            }else {
                logger.info("Mã trùng");
            }
        }while (!checkCode(inPut));
        return null;
    }
}
