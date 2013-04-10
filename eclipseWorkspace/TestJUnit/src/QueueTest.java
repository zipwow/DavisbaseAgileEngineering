import static org.junit.Assert.assertEquals;
import static org.junit.Assert.fail;

import org.junit.Ignore;
import org.junit.Test;

public class QueueTest {

	@Test
	public void testEnqueue() {
		MyQueue myQueue = new MyQueue();
		String originalItem ="Kevin";
		myQueue.enqueue(originalItem);
		String returnedItem = myQueue.peek();
		assertEquals(originalItem,returnedItem);
	}
	
	@Test
	@Ignore
	public void testEnqueueNull() {
		//not implemented
		fail("test not implemented");
	}
}

//Enqueue
//Dequeue
//IsEmpty
//Peek
