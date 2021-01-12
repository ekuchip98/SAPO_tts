package org.example;

import org.example.util.showutil.ShowMenu;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class Application implements CommandLineRunner {

    private final ShowMenu showMenu;

    public Application(ShowMenu showMenu) {
        this.showMenu = showMenu;
    }

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    //    a' or 'a'='a

    //  admin PASS: $2a$10$/RUbuT9KIqk6f8enaTQiLOXzhnUkiwEJRdtzdrMXXwU7dgnLKTCYG
    @Override
    public void run(String... args) {
        showMenu.showMenu();
    }
}
