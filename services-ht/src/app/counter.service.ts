export class CounterService {
  private activeToInactiveCounter = 0;
  private inactiveToActiveCounter = 0;

  incrementActiveToInactive() {
    this.activeToInactiveCounter++;
  }

  incrementInactiveToActive() {
    this.inactiveToActiveCounter++;
  }

  getTotalChanges() {
    console.log(this.activeToInactiveCounter + this.inactiveToActiveCounter);
    return this.activeToInactiveCounter + this.inactiveToActiveCounter;
  }
}
