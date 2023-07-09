import type { Player } from '../player'
import { IPacketData } from '../types'

import { AbstractPacket } from './'

class ResourcePackStack extends AbstractPacket {
    protected readonly name: string

    public behaviorPacks: string[]
    public resourcePacks: string[]
    public gameVersion: string
    public mustAccept: boolean
    public experiments: boolean
    public experimentsPreviouslyUsed: boolean

    public constructor() {
        super()
        this.name = 'resource_pack_stack'

        this.behaviorPacks = []
        this.resourcePacks = []
        this.gameVersion = "1.20"
        this.mustAccept = false
        this.experiments = false
        this.experimentsPreviouslyUsed = false
    }

    public compress(): IPacketData {
        return {
            name: this.name,
            params: {
                behavior_packs: this.behaviorPacks,
                resource_packs: this.resourcePacks,
                game_version: this.gameVersion,
                must_accept: this.mustAccept,
                experiments: this.experiments,
                experiments_previously_used: this.experimentsPreviouslyUsed,
            },
        }
    }

    public handle(player: Player): void {
        
    }
}

export {
    ResourcePackStack,
}