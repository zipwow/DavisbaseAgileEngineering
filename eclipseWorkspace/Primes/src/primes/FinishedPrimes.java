import java.util.ArrayList;

public class FinishedPrimes {

	private ScoopedPrimes scoopedPrimes;
	
	public FinishedPrimes() {
		scoopedPrimes = new ScoopedPrimes(service = CustomerService.getInstance());
	}
	
	public String lookupCustomer(int customerId) {
		
		return scoopedPrimes.lookupCustomer(customerId);
	}
}

class ScoopedPrimes 
{
	private CustomerService cService;
	public ScoopedPrimes (CustomerService cService) {
		this.cService = cService;
	}
	public String lookupCustomer(int customerId) {
		return cService.lookup(customerId);
	}
}