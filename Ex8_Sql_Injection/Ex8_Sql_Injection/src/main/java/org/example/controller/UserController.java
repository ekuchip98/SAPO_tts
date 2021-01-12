package org.example.controller;

import org.example.model.UserModel;
import org.example.repository.IUserRepository;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class UserController {

    private final IUserRepository userRepository;

    public UserController(IUserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<UserModel> findByUsernameAndPassword(String username, String password){
        return userRepository.findByUsernameAndPassword(username, password);
    }

    public List<UserModel> findByUsernameAndPasswordNoSQLI(String username, String password){
        return userRepository.findByUsernameAndPasswordNoSQLI(username, password);
    }

}
