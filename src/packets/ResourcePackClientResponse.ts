import type { Player } from '../player'
import type { IPacketData } from '../types'

import {
    AbstractPacket,
    ResourcePackStack,
    StartGame,
} from './'

class ResourcePackClientResponse extends AbstractPacket {
    protected readonly name: string

    public status: string
    public packIds: string[]

    public constructor(data?: IPacketData) {
        super()
        this.name = 'ResourcePackClientResponse'
        this.status = data?.params.response_status ?? 'unknown'
        this.packIds = data?.params.resourcepackids ?? []
    }

    public compress(): IPacketData {
        return {
            name: this.name,
            params: {
                response_status: this.status,
                resourcepackids: this.packIds,
            },
        }
    }

    public handle(player: Player): void {
        let packet
        switch (this.status) {
            case 'none':
                break
            case 'refused':
                break
            case 'have_all_packs':
                packet = new ResourcePackStack()
                packet.behaviorPacks = []
                packet.resourcePacks = []
                packet.gameVersion = ''
                packet.mustAccept = false
                packet.experiments = false
                packet.experimentsPreviouslyUsed = false
                player.sendPacket(packet)
                break
            case 'completed':
                packet = new StartGame()
                packet.entityId = 0
				packet.runtimeId = 1
				packet.gamemode = 'CREATIVE'
				packet.position = { x: 0, y: -47, z: 0 }
				packet.rotation = { x: 0, z: 0 }
				packet.seed = [0, 0]
				packet.biomeType = 0
				packet.biomeName = 'plains'
				packet.dimension = 'overworld'
				packet.generator = 2
				packet.worldGamemode = 'CREATIVE'
				packet.difficulty = 'normal'
				packet.spawnPostition = { x: 0, y: 0, z: 0 }
				packet.permissionLevel = "Member"
				packet.worldName = "World"
				packet.gameVersion = "*"
				packet.movementAuthority = "server"
				packet.gamerules = {}
				packet.itemStates = []
                player.sendPacket(packet)
                break
            default:
                // Disconnect player
                break
        }
    }
}

export {
    ResourcePackClientResponse,
}