package com.sai.java_fullstack_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sai.java_fullstack_backend.model.User;

public interface UserRepository extends JpaRepository<User, Long>{



}
