import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes } from "@graphprotocol/graph-ts"
import { DepositEvent } from "../generated/DepositContract/DepositContract"

export function createDepositEventEvent(
  pubkey: Bytes,
  withdrawal_credentials: Bytes,
  amount: Bytes,
  signature: Bytes,
  index: Bytes
): DepositEvent {
  let depositEventEvent = changetype<DepositEvent>(newMockEvent())

  depositEventEvent.parameters = new Array()

  depositEventEvent.parameters.push(
    new ethereum.EventParam("pubkey", ethereum.Value.fromBytes(pubkey))
  )
  depositEventEvent.parameters.push(
    new ethereum.EventParam(
      "withdrawal_credentials",
      ethereum.Value.fromBytes(withdrawal_credentials)
    )
  )
  depositEventEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromBytes(amount))
  )
  depositEventEvent.parameters.push(
    new ethereum.EventParam("signature", ethereum.Value.fromBytes(signature))
  )
  depositEventEvent.parameters.push(
    new ethereum.EventParam("index", ethereum.Value.fromBytes(index))
  )

  return depositEventEvent
}
