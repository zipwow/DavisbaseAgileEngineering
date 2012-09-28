package com.mycompany.twophasecommit;

import java.math.BigDecimal;

import com.mycompany.OutOfInventoryException;

/*
 * A service that sends orders to the address associated with a given account ID.
 * 
 * A "real" version would exist for our project, but for our unit testing we don't want to use it as it is
 * encumbered with needs for account setup, networking, etc.
 * 
 * Write only stub/fake/mock implementations of this service.
 */
public interface ITwoPhaseCommitShippingService
{

	BigDecimal lookupPrice(int productID); 
	
	/**
	 * Begins the transaction to ship an order.
	 * 
	 * @param accountId the account to ship the order to
	 * @param productID the product to ship
	 * @return the transaction ID to be used when committing the transaction
	 * @throws OutOfInventoryException if the provided productID has no stock left 
	 */
    int beginShipOrderTransaction(String accountId, int productID) throws OutOfInventoryException;
    //void commitTransaction(int transactionId);
}
