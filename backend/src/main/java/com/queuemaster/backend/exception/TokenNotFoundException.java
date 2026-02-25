package com.queuemaster.backend.exception;

public class TokenNotFoundException extends RuntimeException {

    public TokenNotFoundException(Long id) {
        super("Token not found with id: " + id);
    }
}