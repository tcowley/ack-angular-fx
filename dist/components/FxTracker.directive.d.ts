import { EventEmitter } from "@angular/core";
export declare class FxTracker {
    value: any;
    history: any[];
    histPos: number;
    fxId: 0 | false | 1 | true;
    fxIdChange: EventEmitter<0 | false | 1 | true>;
    ngOnChanges(changes: any): void;
    produceFxId(value: any): boolean | 0 | 1;
}
