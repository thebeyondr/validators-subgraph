// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class DepositEvent extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save DepositEvent entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type DepositEvent must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("DepositEvent", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): DepositEvent | null {
    return changetype<DepositEvent | null>(
      store.get("DepositEvent", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    return value!.toBytes();
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get pubkey(): Bytes {
    let value = this.get("pubkey");
    return value!.toBytes();
  }

  set pubkey(value: Bytes) {
    this.set("pubkey", Value.fromBytes(value));
  }

  get withdrawal_credentials(): Bytes {
    let value = this.get("withdrawal_credentials");
    return value!.toBytes();
  }

  set withdrawal_credentials(value: Bytes) {
    this.set("withdrawal_credentials", Value.fromBytes(value));
  }

  get amount(): Bytes {
    let value = this.get("amount");
    return value!.toBytes();
  }

  set amount(value: Bytes) {
    this.set("amount", Value.fromBytes(value));
  }

  get signature(): Bytes {
    let value = this.get("signature");
    return value!.toBytes();
  }

  set signature(value: Bytes) {
    this.set("signature", Value.fromBytes(value));
  }

  get index(): Bytes {
    let value = this.get("index");
    return value!.toBytes();
  }

  set index(value: Bytes) {
    this.set("index", Value.fromBytes(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    return value!.toBigInt();
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}
