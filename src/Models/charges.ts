export const charges = {
  Angular: 8000,
  dotNet: 8000,
  WebDev: 12000,
  js: 5000,
  NodeJs: 7000,
  db: 5000,
  CEH: 16000,
  Testing: 7000


};

export class MoneyConversion {
  static inPaisa(rupees): number {
    return rupees * 100;
  }

}

export const paymentMethods = {
  card: {percentage: {national: 3, international: {dinersCard: 3, amexCard: 3}}, name: 'card'},
  netbanking: {percentage: {national: 2, international: 3}, name: 'netbanking'},
  wallet: {percentage: 2, name: 'wallet'},
  emi: {percentage: 3, name: 'emi'},
  upi: {percentage: 2, name: 'upi'}
};

export class CovenienceCharges {
  private static GST: 0;
  category1: 2; // Indian Credit Cards, Indian Debit Cards, Net Banking from 58 Banks, UPI, Wallets including Freecharge, Mobikwik etc.
  category2: 3; // Diners and Amex Cards, International Cards, EMI

  static convenienceCharges(amount: number, percentage: number): number {
    return amount * (percentage / 100);
  }

  static summingConvenienceCharges(amount: number, percentage: number): number {
    amount = this.addGST(amount);
    return amount + this.convenienceCharges(amount, percentage);
  }

  static findPercentage(pymtMethod: string, othrParams?: string[]): number {
    return this.recursiveFunction(paymentMethods[pymtMethod].percentage, othrParams);
  }

  static recursiveFunction(obj, params) {
    const length = params === undefined ? 0 : params.length;
    if (length > 0) {
      const index = params.splice(0, 1);
      obj = obj[index];
      return this.recursiveFunction(obj, params);
    } else {
      return obj;
    }
  }

  static addGST(amount: number): number {
    return amount + (amount * (this.GST / 100));
  }
}
