import { getCurrencies } from "./getCurrencies";

describe('arrays', () => {
it('should have all of the 3 currencies'), () =>{
 const currencies = getCurrencies();
 expect (currencies).toContain('USD GBP EUR');
}
it('should have non existing currency'), () =>{
    const currency = getCurrencies();
    expect (currency).toContain('CAD');
   }
});