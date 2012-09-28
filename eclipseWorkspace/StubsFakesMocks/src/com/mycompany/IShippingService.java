package com.mycompany;

import java.math.BigDecimal;

/*
 * A service that sends orders to the address associated with a given account ID.
 * 
 * A "real" version would exist for our project, but for our unit testing we don't want to use it as it is
 * encumbered with needs for account setup, networking, etc.
 * 
 * Write only stub/fake/mock implementations of this service.
 */
public interface IShippingService
{

	BigDecimal lookupPrice(int productID); 
	
	/**
	 * Begins the transaction to ship an order.
	 * 
	 * @param accountId the account to ship the order to
	 * @param productID the product to ship
	 * @throws OutOfInventoryException if the provided productID has no stock left 
	 */
    void shipOrder(int accountId, int productID) throws OutOfInventoryException;
}
