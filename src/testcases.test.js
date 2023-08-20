import Sum from '../src/Components/Sum.js'
const score=1;
it("when a & b are numbers",()=>{
     const res = Sum(1,32);

     expect(res).toBe(33);
});