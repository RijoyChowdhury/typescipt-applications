import { OutputTarget } from '../Summary';

export class ConsoleReporter implements OutputTarget {
  constructor() {}
  print(report: string): void {
    console.log(report);
  }
}
