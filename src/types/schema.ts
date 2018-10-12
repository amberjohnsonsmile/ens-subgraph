import {
  TypedMap,
  Entity,
  Value,
  Address,
  Bytes,
  BigInt
} from "@graphprotocol/graph-ts";

export class EnsDomain extends Entity {
  get id(): string {
    let value = this.get("id");
    if (value === null) {
      return null;
    } else {
      return value.toString() as string;
    }
  }

  set id(value: string) {
    if (value === null) {
      this.unset("id");
    } else {
      this.set("id", Value.fromString(value as string));
    }
  }

  get node(): Bytes | null {
    let value = this.get("node");
    if (value === null) {
      return null;
    } else {
      return value.toBytes() as Bytes | null;
    }
  }

  set node(value: Bytes | null) {
    if (value === null) {
      this.unset("node");
    } else {
      this.set("node", Value.fromBytes(value as Bytes));
    }
  }

  get label(): Bytes | null {
    let value = this.get("label");
    if (value === null) {
      return null;
    } else {
      return value.toBytes() as Bytes | null;
    }
  }

  set label(value: Bytes | null) {
    if (value === null) {
      this.unset("label");
    } else {
      this.set("label", Value.fromBytes(value as Bytes));
    }
  }

  get owner(): Bytes {
    let value = this.get("owner");
    if (value === null) {
      return null;
    } else {
      return value.toBytes() as Bytes;
    }
  }

  set owner(value: Bytes) {
    if (value === null) {
      this.unset("owner");
    } else {
      this.set("owner", Value.fromBytes(value as Bytes));
    }
  }

  get transfers(): Array<string> | null {
    let value = this.get("transfers");
    if (value === null) {
      return null;
    } else {
      return value.toStringArray() as Array<string> | null;
    }
  }

  set transfers(value: Array<string> | null) {
    if (value === null) {
      this.unset("transfers");
    } else {
      this.set("transfers", Value.fromStringArray(value as Array<string>));
    }
  }
}

export class Transfer extends Entity {
  get id(): string {
    let value = this.get("id");
    if (value === null) {
      return null;
    } else {
      return value.toString() as string;
    }
  }

  set id(value: string) {
    if (value === null) {
      this.unset("id");
    } else {
      this.set("id", Value.fromString(value as string));
    }
  }

  get domain(): string {
    let value = this.get("domain");
    if (value === null) {
      return null;
    } else {
      return value.toString() as string;
    }
  }

  set domain(value: string) {
    if (value === null) {
      this.unset("domain");
    } else {
      this.set("domain", Value.fromString(value as string));
    }
  }

  get owners(): Array<Bytes> | null {
    let value = this.get("owners");
    if (value === null) {
      return null;
    } else {
      return value.toBytesArray() as Array<Bytes> | null;
    }
  }

  set owners(value: Array<Bytes> | null) {
    if (value === null) {
      this.unset("owners");
    } else {
      this.set("owners", Value.fromBytesArray(value as Array<Bytes>));
    }
  }
}
