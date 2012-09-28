package tddexample;

import java.util.ArrayList;

public class Queue {
	
	private ArrayList list = new ArrayList ();
	
	boolean isEmpty(){
		return list.size() == 0 ; 
	}

	public void enqueue(Object item) {
		list.add(item);
	}
	
	public Object dequeue() {
		Object item = peek(); 
		list.remove(item); 
		return item; 
	}
	
	public Object peek() {
		return list.get(0);		
	}
}
