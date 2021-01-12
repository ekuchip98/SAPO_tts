package org.example.util.user;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.util.Scanner;
@Component
public class UserMenu {

    Logger logger = LoggerFactory.getLogger(UserMenu.class);
    private int index = 0;
    private String username;
    private String password;
    Scanner scanner = new Scanner(System.in);

    private final UserShow userShow;

    public UserMenu(UserShow userShow) {
        this.userShow = userShow;
    }

    public void showMenu(){
        do {
            try{
                selectUser();
                logger.info("\n=================Selection ==================");
                inPut();
                switch (index){
                    case 1:
                        inPutUser();
                        userShow.showUsername(username,password);
                        break;
                    case 2:
                        inPutUser();
                        userShow.findByUsernameAndPasswordNoSQLI(username, password);
                        break;
                    default: break;
                }
            }catch (NumberFormatException e){
                logger.info("Hãy nhập số");
            }
        }while (index > 0 && index < 3);
    }

    private void inPut(){
        if(scanner.hasNext()){
            index = Integer.parseInt(scanner.nextLine());
        }
    }

    private void selectUser(){
        logger.info("1. Đăng nhập thường");
        logger.info("2. Đăng nhập chống SQL INJECTION");
        logger.info(">= 3. Exit");
    }

    private void inPutUser(){
        logger.info("Nhập username :");
        username = scanner.nextLine();
        logger.info("Nhập password :");
        password = scanner.nextLine();
    }
}
