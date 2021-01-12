package org.example.repository;

import org.example.model.UserModel;

import java.util.List;

public interface IUserRepository {

    List<UserModel> findByUsernameAndPassword(String username, String password);

    List<UserModel> findByUsernameAndPasswordNoSQLI(String username, String password);

}
