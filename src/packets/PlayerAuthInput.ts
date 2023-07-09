import type { Player } from '../player'
import type { IPacketData, Vec2, Vec3 } from '../types'

import {
    AbstractPacket,
} from './'

class PlayerAuthInput extends AbstractPacket {
    protected readonly name: string

    public pitch: number
    public yaw: number
    public position: Vec3
    public moveVector: Vec2
    public headYaw: number
    public inputData: any
    public inputMode: string
    public playMode: string
    public interactionModel: string
    public gazeDirection: any
    public tick: BigInt
    public delta: Vec3
    public transaction: any
    public itemStackRequest: any
    public blockAction: any
    public analogueMoveVector: Vec2

    public constructor(data?: IPacketData) {
        super()
        this.name = 'PlayerAuthInput'
        this.pitch = data?.params.pitch ?? 0
        this.yaw = data?.params.yaw ?? 0
        this.position = data?.params.position ?? { x: 0, y: 0, z: 0 }
        this.moveVector = data?.params.move_vector ?? { x: 0, z: 0 }
        this.headYaw = data?.params.head_yaw ?? 0
        this.inputData = data?.params.input_data ?? {}
        this.inputMode = data?.params.input_mode ?? 'unknown'
        this.playMode = data?.params.play_mode ?? 'unknown'
        this.interactionModel = data?.params.interacion_model ?? 'unknown'
        this.gazeDirection = data?.params.gaze_direction ?? undefined
        this.tick = data?.params.tick ?? undefined
        this.delta = data?.params.delta ?? { x: 0, y: 0, z: 0 }
        this.transaction = data?.params.transaction ?? undefined
        this.itemStackRequest = data?.params.item_stack_request ?? undefined
        this.blockAction = data?.params.block_action ?? undefined
        this.analogueMoveVector = data?.params.analogue_move_vector ?? { x: 0, z: 0 }
    }

    public compress(): IPacketData {
        return {
            name: this.name,
            params: {},
        }
    }

    public handle(player: Player): void {
        player.position = this.position
        player.pitch = this.pitch
        player.yaw = this.yaw
    }
}

export {
    PlayerAuthInput,
}