package com.sapo.edu.exception;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import java.sql.SQLNonTransientException;
import java.util.Date;

@RestControllerAdvice
public class ControllerExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    @ResponseStatus(value = HttpStatus.NOT_FOUND)
    public ErrorMessage resourceNotFoundException(ResourceNotFoundException ex, WebRequest request) {
        return new ErrorMessage(
                HttpStatus.NOT_FOUND.value(),
                new Date(),
                ex.getMessage(),
                request.getDescription(false));
    }

    @ExceptionHandler(SQLNonTransientException.class)
    public ErrorMessage sqlNonTransientException(Exception ex, WebRequest request) {
        return new ErrorMessage(
                HttpStatus.EXPECTATION_FAILED.value(),
                new Date(),
                ex.getMessage(),
                request.getDescription(false));
    }
}
