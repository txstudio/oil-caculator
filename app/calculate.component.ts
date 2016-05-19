import { Component } from "@angular/core";

@Component({
    selector : "oil-calculator",
    templateUrl : "app/calculate.component.html"
})

export class CalculateComponent {
    
    totalcost : number;
    avgkml : number;
    
    constructor() { }
    
    calcualte(avg:number,totalkm:number,oilprice:number) : void{
        this.totalcost = 0; 
        this.avgkml = Math.floor(100 / avg);
        this.totalcost = Math.floor(totalkm / this.avgkml) * oilprice;
    }
}