import type { Player } from '../player'
import { IPacketData } from '../types'

import { AbstractPacket } from './'

class ResourcePacksInfo extends AbstractPacket {
    protected readonly name: string

    public mustAccept: boolean
    public hasScripts: boolean
    public behaviorPacks: string[]
    public texturePacks: string[]

    public constructor() {
        super()
        this.name = 'resource_packs_info'

        this.mustAccept = false
        this.hasScripts = false
        this.behaviorPacks = []
        this.texturePacks = []
    }

    public compress(): IPacketData {
        return {
            name: this.name,
            params: {
                must_accept: this.mustAccept,
                has_scripts: this.hasScripts,
                behaviour_packs: this.behaviorPacks,
                texture_packs: this.texturePacks,
            }
        }
    }

    public handle(player: Player): void {
        
    }
}

export {
    ResourcePacksInfo,
}