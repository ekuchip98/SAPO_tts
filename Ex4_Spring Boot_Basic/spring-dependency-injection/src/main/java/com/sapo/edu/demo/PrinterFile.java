package com.sapo.edu.demo;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Primary;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;
@Component
@Primary
public class PrinterFile implements Printer{
    private Logger logger = LoggerFactory.getLogger(PrinterFile.class);
    @Override
    public void printCustoner(Customer customer) {
        logger.info("CustomerId: " + customer.getAcctNo() + ", PIN: " + customer.getPin() + ", balance: " + customer.getBalance().toString());
    }

    @Override
    public void printMessage(String message) {
        logger.info(message);
    }
}
