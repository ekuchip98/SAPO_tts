package org.example.util.category;

import org.example.controller.CategoryController;
import org.example.model.CategoryModel;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Scanner;

@Component
public class CategoryShow {

    private Logger logger =  LoggerFactory.getLogger(CategoryShow.class);
    private final CategoryController categoryController;

    public CategoryShow(CategoryController categoryController) {
        this.categoryController = categoryController;
    }

    //Show All data category
    public void showAll(){
        List<CategoryModel> list = categoryController.findAll();
        showTitle();
        logger.info("-----------------------------------------------------------------------");
        for (CategoryModel model : list){
            showData(model);
        }
    }

    //Show data by id category
    public void showCategoryById(Integer id){
        CategoryModel model = categoryController.findById(id);
        showTitle();
        logger.info("-----------------------------------------------------------------------");
        showData(model);
    }

    //Thêm mới loại sản phẩm
    public void createCategory(){
        try {
            CategoryModel model = new CategoryModel();
            categoryInput(model);
            categoryController.createCategory(model);
            logger.info("THÊM THÀNH CÔNG");
        }catch (Exception e){
            e.fillInStackTrace();
            logger.info("THÊM THẤT BẠI");
        }
    }

    //Sửa loại sản phẩm
    public void updateCategory(Integer id){
        try {

            CategoryModel model = categoryController.findById(id);
            categoryInput(model);
            model.setId(id);
            categoryController.updateCategory(model);
            logger.info("SỬA THÀNH CÔNG ID: " + id);

        }catch (Exception e){
            e.fillInStackTrace();
            logger.info("ID "+id+" không có trong DB");
            logger.info("SỬA THẤT BẠI");
        }
    }

    private void showData(CategoryModel model) {
        logger.info(String.format("%s\t\t%s\t\t%s\t\t%s\t\t%s\t\t%s",model.getId(),model.getCategoryCode(),model.getName(),model.getDescription(),model.getCreatedDate(),model.getModifiedDate()));
    }

    private void showTitle() {
        logger.info(String.format("%s\t\t%s\t\t%s\t\t%s\t\t%s\t\t%s\n","ID","CategoryCode","Name","Description","CreatedDate","ModifiedDate"));
    }

    public void categoryInput(CategoryModel model){
        Logger logger = LoggerFactory.getLogger(CategoryShow.class);
        Scanner scanner = new Scanner(System.in);
        String a = null;
        logger.info("Nhập mã loại danh mục:");
        model.setCategoryCode(inPutCode(a));
        logger.info("Nhập tên loại danh mục:");
        model.setName(scanner.nextLine());
        logger.info("Nhập mô tả của loại danh mục:");
        model.setDescription(scanner.nextLine());
    }

    private boolean checkCode(String inPut){
        int count = 0;
        for (String string : categoryController.getCategoryCodes()){
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
