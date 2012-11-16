package com.mycompany;

import java.math.BigDecimal;

public class StubCreditCardService implements ICreditCardService {
	
	private String creditCardNumber;
	private BigDecimal amount;

	@Override
	public void reserveFunds(String creditCardNumber, BigDecimal amount)
			throws FundsNotAvailableException {
		this.creditCardNumber=creditCardNumber;
		this.amount=amount;
	}

	public String getCreditCardNumber() {
		return creditCardNumber;
	}

	public BigDecimal getAmount() {
		return amount;
	}

}
