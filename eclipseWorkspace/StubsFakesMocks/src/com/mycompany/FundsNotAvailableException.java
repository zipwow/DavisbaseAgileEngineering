package com.mycompany;

public class FundsNotAvailableException extends Exception {

	private static final long serialVersionUID = 1L;

	public FundsNotAvailableException(String message) {
		super(message);
	}
}
