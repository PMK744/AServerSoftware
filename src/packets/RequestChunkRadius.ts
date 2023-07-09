import type { Player } from '../player'
import type { IPacketData } from '../types'

import CreativeItems from '../resources/creativeContent.json'
import BiomeDefinition from '../resources/biomeDefinitions.json'
import EntityIdentifiers from '../resources/availableEntities.json'
import DumpedTrimData from '../resources/trimData.json'
import vanillaBlocks from '../resources/vanillaBlocks.json'

import {
    AbstractPacket,
    ChunkRadiusUpdate,
    CreativeContent,
    CompressedBiomeDefinition,
    PlayStatus,
    NetworkChunkPublisherUpdate,
    AvailableEntityIdentifiers,
    SetCommandsEnabled,
    TrimData,
    LevelChunk,
} from './'

class RequestChunkRadius extends AbstractPacket {
    protected readonly name: string

    public radius: number
    public maxRadius: number

    public constructor(data?: IPacketData) {
        super()
        this.name = 'RequestChunkRadius'
        this.radius = data?.params.chunk_radius ?? 0
        this.maxRadius = data?.params.max_radius ?? 0
    }

    public compress(): IPacketData {
        return {
            name: this.name,
            params: {
                chunk_radius: this.radius,
                max_radius: this.maxRadius,
            },
        }
    }

    public handle(player: Player): void {
        const chunkRadiusUpdatePacket = new ChunkRadiusUpdate()
        chunkRadiusUpdatePacket.radius = 32
        player.sendPacket(chunkRadiusUpdatePacket)

        const creativeContentPacket = new CreativeContent()
        creativeContentPacket.items = CreativeItems.items
        player.sendPacket(creativeContentPacket)


        const biomeDefinitionListPacket = new CompressedBiomeDefinition()
        biomeDefinitionListPacket.data = BiomeDefinition
        player.sendPacket(biomeDefinitionListPacket)


        // const ncpu = new NetworkChunkPublisherUpdate()
        // ncpu.coordinates = { x: 0, y: 0, z: 0 }
        // ncpu.radius = 17
        // ncpu.savedChunks = []
        // player.sendPacket(ncpu)

        // setInterval(() => {
        //     const ncpu = new NetworkChunkPublisherUpdate()
        //     ncpu.coordinates = { x: 0, y: 0, z: 0 }
        //     ncpu.radius = 17
        //     ncpu.savedChunks = []
        //     player.sendPacket(ncpu)
        // }, 4500)


		for (let x = player.position.x - player.chunkRadius; x <= player.position.x + player.chunkRadius; x++) {
			for (let z = player.position.z - player.chunkRadius; z <= player.position.z + player.chunkRadius; z++) {
				const levelChunk = new LevelChunk()
				levelChunk.x = x
				levelChunk.z = z
				levelChunk.subChunkCount = 1;
				levelChunk.cacheEnabled = false;
				levelChunk.payload = Buffer.alloc(16 * 256 * 16).fill(0);
				player.sendPacket(levelChunk)
			}
		}

        // const availableEntityIdentifiersPacket = new AvailableEntityIdentifiers()
        // availableEntityIdentifiersPacket.value = EntityIdentifiers
        // player.sendPacket(availableEntityIdentifiersPacket)

        const setCommandsEnabledPacket = new SetCommandsEnabled()
        setCommandsEnabledPacket.enabled = true
        player.sendPacket(setCommandsEnabledPacket)

        const trimDataPacket = new TrimData()
        trimDataPacket.patterns = DumpedTrimData.patterns
        trimDataPacket.materials = DumpedTrimData.materials
        player.sendPacket(trimDataPacket)


        setTimeout(() => {
            const playStatusPacket = new PlayStatus()
            playStatusPacket.status = 'player_spawn'
            player.sendPacket(playStatusPacket)
        }, 1000)
    }
}

export {
    RequestChunkRadius,
}
