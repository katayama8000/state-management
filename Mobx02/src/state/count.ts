import { observable, autorun, computed, action, makeObservable } from 'mobx';

class CountStore {
  count: number = 10;

  constructor() {
    makeObservable(this, {
      count: observable,
      doubleCount: computed,
      report: computed,
      increment: action.bound,
      decrement: action.bound,
    });
    autorun(() => console.log(this.report));
  }

  get doubleCount(): number {
    return this.count * 2;
  }

  get report(): string {
    return `Count: ${this.count}`;
  }

  increment(): void {
    this.count++;
  }

  decrement(): void {
    this.count--;
  }
}

export const countStore = new CountStore();
