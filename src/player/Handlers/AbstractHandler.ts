import type { Player } from '../'

export default abstract class {
  protected abstract readonly player: Player
  public abstract readonly name: string
  public abstract handle(data: any): void
}
