import type { Server } from '../../server'

export default abstract class {
  protected abstract readonly server: Server
  public abstract readonly name: string
  public abstract handle(data: any): void
}