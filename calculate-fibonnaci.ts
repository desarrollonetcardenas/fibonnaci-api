export class Fibonnaci {
    calculate(value: number): number{
        if(value <= 1)
        return value;

        return this.calculate(value-1) + this.calculate(value-2);
    }
}