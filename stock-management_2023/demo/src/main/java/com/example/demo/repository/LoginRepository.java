package com.example.demo.repository;

import com.example.demo.model.UserModel;

public interface LoginRepository {

     public void updateSessionId(UserModel user);

     //UserModel getUser(String userId, String password);
     //void updateSessionId(String userId, String sessionId);
     UserModel checkId(String userId, String sessionId);
}
