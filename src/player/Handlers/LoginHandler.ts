import type { Player } from '../Player'

import { AbstractHandler } from './'

class LoginHandler extends AbstractHandler {
    protected readonly player: Player
    public readonly name: string

    public constructor(player: Player) {
        super()
        this.player = player
        this.name = 'LoginHandler'
        this.player.IPlayer.on('login', this.handle.bind(this) as any)

        // this.player.on('resource_pack_client_response', this.handleResourcePackResponse.bind(this))
        // this.player.on('chunk_radius_update', this.handleChunkRadiusUpdate.bind(this))
    }

    public handle(): void {
        // Login Sequence
    }
}

export {
    LoginHandler,
}
