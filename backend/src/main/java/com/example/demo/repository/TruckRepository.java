package com.example.demo.repository;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public class TruckRepository {

    private final JdbcTemplate jdbcTemplate;

    public TruckRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<Map<String, Object>> getTrucksByDate(String date) {

        String sql = """
            SELECT driver_name, driver_gate_pass
            FROM do_truck_details_entry
            WHERE last_update LIKE CONCAT(?, '%')
            """;

        return jdbcTemplate.queryForList(sql, date);
    }
}