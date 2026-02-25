package com.queuemaster.backend.exception;

public class NoWaitingTokenException extends RuntimeException {

    public NoWaitingTokenException() {
        super("No waiting tokens available in the queue");
    }
}