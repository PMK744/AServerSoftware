import AbstractPacket from './AbstractPacket'
import { ClientToServerHandshake } from './ClientToServerHandshake'
import { ClientCacheStatus } from './ClientCacheStatus'
import { ResourcePackClientResponse } from './ResourcePackClientResponse'
import { ResourcePacksInfo } from './ResourcePacksInfo'
import { ResourcePackStack } from './ResourcePackStack'
import { StartGame } from './StartGame'
import { CreativeContent } from './CreativeContent'
import { CompressedBiomeDefinition } from './CompressedBiomeDefinition'
import { AvailableEntityIdentifiers } from './AvailableEntityIdentifiers'
import { SetCommandsEnabled } from './SetCommandsEnabled'
import { TrimData } from './TrimData'
import { LevelChunk } from './LevelChunk'
import { RequestChunkRadius } from './RequestChunkRadius'
import { ChunkRadiusUpdate } from './ChunkRadiusUpdate'
import { NetworkChunkPublisherUpdate } from './NetworkChunkPublisherUpdate'
import { PlayStatus } from './PlayStatus'
import { PlayerAuthInput } from './PlayerAuthInput'

const packets = [
    ClientToServerHandshake,
    ClientCacheStatus,
    ResourcePackClientResponse,
    ResourcePacksInfo,
    ResourcePackStack,
    StartGame,
    CreativeContent,
    CompressedBiomeDefinition,
    AvailableEntityIdentifiers,
    SetCommandsEnabled,
    TrimData,
    LevelChunk,
    RequestChunkRadius,
    ChunkRadiusUpdate,
    NetworkChunkPublisherUpdate,
    PlayStatus,
    PlayerAuthInput,
]

export {
    packets,
    AbstractPacket,
    ClientToServerHandshake,
    ResourcePackClientResponse,
    ClientCacheStatus,
    ResourcePacksInfo,
    ResourcePackStack,
    StartGame,
    CreativeContent,
    CompressedBiomeDefinition,
    AvailableEntityIdentifiers,
    SetCommandsEnabled,
    TrimData,
    LevelChunk,
    RequestChunkRadius,
    ChunkRadiusUpdate,
    NetworkChunkPublisherUpdate,
    PlayStatus,
    PlayerAuthInput,
}
