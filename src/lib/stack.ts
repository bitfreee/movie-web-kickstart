import type { IStack } from '@/types';

class Stack<T> implements IStack<T> {
  private storage: T[] = [];

  constructor(private capacity = Infinity) {}

  push(item: T): void {
    this.storage.push(item);
  }

  pop(): T | undefined {
    return this.storage.pop();
  }

  peek(): T | undefined {
    return this.storage[this.size() - 1];
  }

  size(): number {
    return this.storage.length;
  }
}

export default Stack;
