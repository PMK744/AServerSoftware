import type { Player } from '../player'
import type { IPacketData } from '../types'

export default abstract class {
  protected abstract readonly name: string
  public abstract compress(): IPacketData
  public abstract handle(player: Player): void
}
