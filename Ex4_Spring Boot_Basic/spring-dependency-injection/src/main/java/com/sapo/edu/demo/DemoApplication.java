package com.sapo.edu.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Profile;

import java.math.BigDecimal;
import java.util.Scanner;

@SpringBootApplication
@Profile("test")
public class DemoApplication implements CommandLineRunner {

    @Autowired
    private Atm bidvAtm;

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }
    @Override
    public void run(String... args) throws Exception {
        Scanner scanner = new Scanner(System.in);
        String acctNo = null;
        String pin = null;
        BigDecimal balance = null;
        int index = 0;
        System.out.println("========WELCOME BIDV========");
        System.out.println("CustomerId");
        if(scanner.hasNext()){
            acctNo = scanner.nextLine();
            System.out.println("PIN");
            pin = scanner.nextLine();
            System.out.println("BALANCE");
            balance = scanner.nextBigDecimal();
        }
        Customer customer = new Customer(acctNo,pin,balance);
        bidvAtm.printCurrentMoney();
        bidvAtm.displayCustomerInfo(customer);
        do{
            System.out.println("1. With Draw");
            System.out.println("2. Deposit");
            System.out.println("3. Exit");
            System.out.println("========SELECTION========");
            BigDecimal amount = new BigDecimal(0);
            if(scanner.hasNext()){
                index = scanner.nextInt();
            }
            switch (index){
                case 1:
                    showWithDraw(customer, amount);
                    break;
                case 2: showDeposit(customer, amount);
                    break;
                case 3: System.exit(0);
                    System.out.println("Exit :))");
                    break;
                default: break;
            }
        }while (index > 0 || index < 4);
    }
    public void showWithDraw(Customer customer, BigDecimal amount){
        Scanner scanner = new Scanner(System.in);
        System.out.println("========Nhap so tien can giao dich========");
        amount = scanner.nextBigDecimal();
        bidvAtm.withDraw(customer, amount);
        bidvAtm.printCurrentMoney();
    }
    public void showDeposit(Customer customer, BigDecimal amount){
        Scanner scanner = new Scanner(System.in);
        System.out.println("========Nhap so tien can giao dich========");
        amount = scanner.nextBigDecimal();
        bidvAtm.deposit(customer, amount);
        bidvAtm.printCurrentMoney();
    }
    @Bean
    @Profile("test")
    public String test() {
        System.out.println("============== TEST Environment ==============");
        return "test";
    }
    @Bean
    @Profile("test1")
    public String test1() {
        System.out.println("============== TEST1 Environment ==============");
        return "test1";
    }

}
