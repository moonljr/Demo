/**
 * 抽象类 关键字 abstract
 */

abstract class Department {
  name: string
  constructor(name: string) {
    this.name = name
  }
  printName(): void {

  }

  abstract printMeeting(): void
}

class AccountingDepartment extends Department {
  constructor() {
    super('Accounting ad Auditing')
  }
  printMeeting() {
    console.log('The Accounting Department meets each Monday at 10am')
  }
  genterateEeports() {
    console.log('genterateEeports')
  }
}

let deparment: Department = new AccountingDepartment()
deparment.printName()
deparment.printMeeting()
// deparment.genterateEeports()
