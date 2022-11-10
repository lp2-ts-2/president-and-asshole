import ValueObject from "../ValueObject";
import { v4 as uuid } from "uuid"

abstract class BaseId implements ValueObject {

    private value;

    constructor(value: string) {
        this.value = uuid(value);
    }

    getValue(value: string): String {
        toString = (): String => {
            return value;
        };
    }

    equals(o: Object): boolean {
        if(this == o) return true;
        if(o == null || getClass() != o.getClass()) return false;
        baseId: BaseId = o: BaseId;
        return this.value.equals(baseId.value); 
    }

    hashCode(): number {
        return Objects.hash(value);
    }
}