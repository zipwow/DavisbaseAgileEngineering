package com.mycompany.twophasecommit;

import java.math.BigDecimal;

import com.mycompany.FundsNotAvailableException;

/*
 * A service that reserves funds, and executes finalized transactions.
 * 
 * A "real" version would exist for our project, but for our unit testing we don't want to use it as it is
 * encumbered with needs for account setup, networking, etc.
 * 
 * Write only stub/fake/mock implementations of this service.
 */
public interface ITwoPhaseCommitCreditCardService
{
    int beginReserveFundsTransaction(String creditCardNumber, BigDecimal amount) throws FundsNotAvailableException;
    void commitTransaction(int transactionId); 
}

