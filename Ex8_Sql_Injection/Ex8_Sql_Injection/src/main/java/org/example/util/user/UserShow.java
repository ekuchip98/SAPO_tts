package org.example.util.user;

import org.example.controller.UserController;
import org.example.model.UserModel;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class UserShow {

    private final UserController userController;
    private final Logger logger =  LoggerFactory.getLogger(UserShow.class);

    public UserShow(UserController userController) {
        this.userController = userController;
    }

    public void showUsername(String username, String password){

        List<UserModel> models = userController.findByUsernameAndPassword(username,password);
        if (models.isEmpty()){
            logger.info("Username or password không đúng :(( ");
        }else {
            logger.info("Đăng nhập thành công :)) ");

            for (UserModel model : models){

                logger.info(model.getUsername()+ " PASS: " + model.getPassword());
            }
        }
    }

    public void findByUsernameAndPasswordNoSQLI(String username, String password){

        List<UserModel> models = userController.findByUsernameAndPasswordNoSQLI(username, password);
        if (models.isEmpty()){
            logger.info("Username or password không đúng :(( ");
        }else {
            logger.info("Đăng nhập thành công :)) ");

            for (UserModel model : models){
                logger.info(model.getUsername()+ " PASS: " + model.getPassword());
            }
        }
    }

}
