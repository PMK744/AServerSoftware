import type { Player } from '../Player'

import { AbstractHandler } from './'
import { ResourcePacksInfo } from '../../packets'

class JoinHandler extends AbstractHandler {
    protected readonly player: Player
    public readonly name: string

    public constructor(player: Player) {
        super()
        this.player = player
        this.name = "JoinHandler"
        this.player.IPlayer.on('join', this.handle.bind(this) as any)
    }

    public handle(): void {
        const packet = new ResourcePacksInfo()
        packet.mustAccept = true
        packet.hasScripts = false
        packet.behaviorPacks = []
        packet.texturePacks = []
        this.player.sendPacket(packet)
    }
}

export {
    JoinHandler,
}
