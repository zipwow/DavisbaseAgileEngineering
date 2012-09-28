package primes;

import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.Arrays;

import org.junit.*;

public class PrimesUnitTest {

	private int[] knownPrimes = new int[] { 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 };

	@Test
	public void Zero() {
		int[] primes = Primes.generateArray(0);
		assertEquals(0, primes.length);
	}

	@Test
	public void ListZero() {
		ArrayList<Integer> primes = Primes.generate(0);
		assertEquals(0, primes.size());
	}

	@Test
	public void Single() {
		int[] primes = Primes.generateArray(2);
		assertEquals(1, primes.length);
		assertEquals(2, primes[0]);
	}

	@Test
	public void ListSingle() {
		ArrayList<Integer> primes = Primes.generate(2);
		assertEquals(1, primes.size());
		assertTrue(primes.contains(2));
	}

	@Test
	public void Prime() {
		int[] centArray = Primes.generateArray(100);
		assertEquals(25, centArray.length);
		assertEquals(97, centArray[24]);
	}

	@Test
	public void ListPrime() {
		ArrayList<Integer> centList = Primes.generate(100);
		assertEquals(25, centList.size());
		assertEquals(Integer.valueOf(97), centList.get(24));
	}

	@Test
	public void Basic() {
		int[] primes = Primes
				.generateArray(knownPrimes[knownPrimes.length - 1]);
		assertEquals(knownPrimes.length, primes.length);
		int i = 0;
		for (int prime : primes) {

			assertEquals(knownPrimes[i++], prime);
		}
	}

	@Test
	public void ListBasic() {
		ArrayList<Integer> primes = Primes
				.generate(knownPrimes[knownPrimes.length - 1]);
		assertEquals(knownPrimes.length, primes.size());
		int i = 0;

		for (Integer prime : primes) {
			assertEquals(Integer.valueOf(knownPrimes[i++]), prime); // explicit
																	// boxing
																	// resolves
																	// ambiguity
		}

	}

	@Test
	public void Lots() {
		int bound = 10101;
		int[] primes = Primes.generateArray(bound);
		for (int i = 0; i < primes.length; i++) {
			int prime = primes[i];
			assertTrue("is prime", isPrime(prime));
		}

		for (int i = 0; i < primes.length; i++) {
			int prime = primes[i];

			if (isPrime(prime))
				assertTrue("contains primes", contains(prime, primes));
			else
				assertFalse("doesn' t contain composites",
						contains(prime, primes));
		}
	}

	@Test
	public void ListLots() {
		int bound = 10101;
		ArrayList<Integer> primes = Primes.generate(bound);
		for (Integer prime : primes) {
			assertTrue("is prime", isPrime(prime));
		}
		for (Integer prime : primes) {

			if (isPrime(prime))
				assertTrue("contains primes", primes.contains(prime));
			else
				assertFalse("doesn' t contain composites",
						primes.contains(prime));
		}
	}

	private static boolean isPrime(int n) {
		if (n < 2)
			return false;
		boolean result = true;
		double x = Math.sqrt(n);
		int i = 2;
		while (result && i <= x) {
			result = (0 != n % i);
			i += 1;
		}
		return result;
	}

	private static boolean contains(int value, int[] primes) {
		return Arrays.binarySearch(primes, value) != -1;
	}
}
