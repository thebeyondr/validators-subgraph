import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Bytes } from "@graphprotocol/graph-ts"
import { DepositEvent } from "../generated/schema"
import { DepositEvent as DepositEventEvent } from "../generated/DepositContract/DepositContract"
import { handleDepositEvent } from "../src/deposit-contract"
import { createDepositEventEvent } from "./deposit-contract-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let pubkey = Bytes.fromI32(1234567890)
    let withdrawal_credentials = Bytes.fromI32(1234567890)
    let amount = Bytes.fromI32(1234567890)
    let signature = Bytes.fromI32(1234567890)
    let index = Bytes.fromI32(1234567890)
    let newDepositEventEvent = createDepositEventEvent(
      pubkey,
      withdrawal_credentials,
      amount,
      signature,
      index
    )
    handleDepositEvent(newDepositEventEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("DepositEvent created and stored", () => {
    assert.entityCount("DepositEvent", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "DepositEvent",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "pubkey",
      "1234567890"
    )
    assert.fieldEquals(
      "DepositEvent",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "withdrawal_credentials",
      "1234567890"
    )
    assert.fieldEquals(
      "DepositEvent",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "amount",
      "1234567890"
    )
    assert.fieldEquals(
      "DepositEvent",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "signature",
      "1234567890"
    )
    assert.fieldEquals(
      "DepositEvent",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "index",
      "1234567890"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
