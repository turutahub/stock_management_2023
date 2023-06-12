package com.example.demo.repository;

import com.example.demo.model.StockModel;

import java.util.List;

public interface StockRepository {
    List<StockModel> getAll();

    //void deleteStock();
}
