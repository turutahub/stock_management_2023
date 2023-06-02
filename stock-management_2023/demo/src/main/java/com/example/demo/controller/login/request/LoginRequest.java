package com.example.demo.controller.login.request;

public class LoginRequest {
    //private final int id;
    private final String userId;
    private final String password;
    //private final String sessionId;


    public String getUserId() {
        return userId;
    }

    public String getPassword() {
        return password;
    }

    public LoginRequest(String userId, String password) {
        this.userId = userId;
        this.password = password;
    }
}
