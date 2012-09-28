package com.mycompany;

import java.math.BigDecimal;

public class StubShippingService implements IShippingService {
	
	private BigDecimal price;
	private int accountId;
	private Object productId;
	public StubShippingService(BigDecimal price) {
		this.price=price;
	}

	@Override
	public BigDecimal lookupPrice(int productID) {
		return price;
	}

	@Override
	public void shipOrder(int accountId, int productId)
			throws OutOfInventoryException {
		this.accountId=accountId;
		this.productId=productId;
	}

	public Object getProductId() {
		return productId;
	}

	public int getAccountId() {
		return accountId;
	}

}
