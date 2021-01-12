package org.example.mapper;

import org.example.model.UserModel;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;


public class UserMapper implements RowMapper<UserModel> {

    @Override
    public UserModel mapRow(ResultSet resultSet, int i) throws SQLException {

        UserModel model = new UserModel();
        model.setId(resultSet.getInt("id"));
        model.setUsername(resultSet.getString("username"));
        model.setPassword(resultSet.getString("password"));
        model.setFullName(resultSet.getString("full_name"));
        model.setCreatedDate(resultSet.getTimestamp("ngaytao"));
        model.setModifiedDate(resultSet.getTimestamp("ngaysua"));
        return model;
    }
}
