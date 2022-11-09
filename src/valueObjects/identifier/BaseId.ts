import ValueObject from "../ValueObject";

abstract class BaseId implements ValueObject {

    private value: UUID;

    protected BaseId(value: UUID) {
        this.value = value
    }

    getValue(): String {
        return toString(value);
    }

    @Override
    equals(o: Object): boolean {
        if(this == o) return true;
        if(o == null || getClass() != o.getClass()) return false;
        baseId: BaseId = o: BaseId;
        return this.value.equals(baseId.value); 
    }

    @Oveerride
    hashCode(): number {
        return Objects.hash(value);
    }
}