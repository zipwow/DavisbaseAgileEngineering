package com.mycompany;

public class OutOfInventoryException extends Exception {

	private static final long serialVersionUID = 1L;

	public OutOfInventoryException(String message) {
		super(message);
	}

}
