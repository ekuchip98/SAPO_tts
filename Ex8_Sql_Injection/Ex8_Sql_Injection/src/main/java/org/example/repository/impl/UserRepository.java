package org.example.repository.impl;

import org.example.mapper.UserMapper;
import org.example.model.UserModel;
import org.example.repository.IUserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import javax.persistence.EntityManager;
import java.util.List;

@Component
public class UserRepository implements IUserRepository {

    private final JdbcTemplate jdbcTemplate;
    private final Logger logger = LoggerFactory.getLogger(UserRepository.class);

    public UserRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }
    @Override
    public List<UserModel> findByUsernameAndPassword(String username, String password) {
        try {
            String sql = "SELECT * FROM user WHERE username = '"+username+"' AND password = '"+password+"'";
            logger.info(sql);
            return jdbcTemplate.query(sql, new UserMapper());

        }catch (Exception e){
            e.fillInStackTrace();
        }
        return null;
    }

    @Override
    public List<UserModel> findByUsernameAndPasswordNoSQLI(String username, String password) {
        try {
            String sql = "SELECT * FROM user WHERE username = ? AND password = ?";
            logger.info(sql);
            return jdbcTemplate.query(sql, new UserMapper(), username, password);
        }catch (Exception e){
            e.fillInStackTrace();
        }
        return null;
    }

}
