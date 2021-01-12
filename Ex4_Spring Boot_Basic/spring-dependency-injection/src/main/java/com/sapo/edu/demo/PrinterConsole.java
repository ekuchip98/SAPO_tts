package com.sapo.edu.demo;

import org.springframework.stereotype.Component;
@Component
public class PrinterConsole implements Printer {
    @Override
    public void printCustoner(Customer customer) {
        System.out.println("CustomerId: " + customer.getAcctNo() + ", PIN: " + customer.getPin() + ", BALANCE: " + customer.getBalance().toString());
    }

    @Override
    public void printMessage(String message) {
        System.out.println(message);
    }
}
