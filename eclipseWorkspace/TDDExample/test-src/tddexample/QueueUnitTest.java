package tddexample;

import static org.junit.Assert.*;
import org.junit.*;

public class QueueUnitTest {
	Queue q;
	
	@Before
	public void setUp() {
		q = new Queue();
	}
	
	@Test 
	public void emptyQueue() {
		assertEquals(q.isEmpty(), true);
	}
	
	@Test
	public void testEnqueueOne() {
	 	q.enqueue("Item A");
	 	assertFalse(q.isEmpty()) ; 
	}
	
	@Test 
	public void testDequeue() {
	  	q.enqueue("Item A");
	  	q.dequeue();
	  	assertTrue(q.isEmpty()) ; 
	}
	
	@Test 
	public void testEnqueueDequeueCheckContent() {
	   	int expected = 123;
	   	q.enqueue(expected);
	   	assertEquals(expected, q.dequeue()) ; 
	}
	
	@Test 
	public void testEnqueueDequeueMultipleCheckContent() {
    	String item1= "1";
    	q.enqueue(item1);
    	String item2= "2";
    	q.enqueue(item2);
    	String item3= "3";
    	q.enqueue(item3);

    	assertEquals(item1, q.dequeue()) ; 
    	assertEquals(item2, q.dequeue()) ; 
    	assertEquals(item3, q.dequeue()) ; 
}

	@Test(expected=IndexOutOfBoundsException.class)
	public void dequeueEmptyQueue() 
	{
		   q.dequeue();
	}
	
	@Test 
	public void testEnqueuePeek() {
	    q.enqueue(1);
	    q.peek();
	    assertFalse(q.isEmpty()); 
	}
	
	@Test 
	public void testEnqueuePeekCheckContent()
	{
	    int expected = 123;
	    q.enqueue(expected);
	    assertEquals(expected, q.peek()) ; 
	}
}
