import { DepositEvent as DepositEventEvent } from "../generated/DepositContract/DepositContract"
import { DepositEvent } from "../generated/schema"

export function handleDepositEvent(event: DepositEventEvent): void {
  let entity = new DepositEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.pubkey = event.params.pubkey
  entity.withdrawal_credentials = event.params.withdrawal_credentials
  entity.amount = event.params.amount
  entity.signature = event.params.signature
  entity.index = event.params.index

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
