import type { Player } from '../player'
import { IPacketData } from '../types'

import { AbstractPacket } from './'

class StartGame extends AbstractPacket {
    protected readonly name: string

    public entityId: number
    public runtimeId: number
    public gamemode: string
    public position: any
    public rotation: any
    public seed: number[]
    public biomeType: number
    public biomeName: string
    public dimension: string
    public generator: number
    public worldGamemode: string
    public difficulty: string
    public spawnPostition: any
    public gamerules: any
    public itemStates: string[]
    public worldName: string
    public gameVersion: string
    public movementAuthority: any
    public permissionLevel: string

    public constructor() {
        super()
        this.name = 'start_game'

        this.entityId = 0
        this.runtimeId = 0
        this.gamemode = ''
        this.position = {}
        this.rotation = {}
        this.seed = []
        this.biomeType = 0
        this.biomeName = ''
        this.dimension = ''
        this.generator = 0
        this.worldGamemode = ''
        this.difficulty = ''
        this.spawnPostition = {}
        this.gamerules = []
        this.itemStates = []
        this.worldName = 'World'
        this.gameVersion = '1.20'
        this.movementAuthority = undefined
        this.permissionLevel = ''
    }

    public compress(): IPacketData {
        return {
            name: this.name,
            params: {
                entity_id: this.entityId,
                runtime_entity_id: this.runtimeId,
                player_gamemode: this.gameVersion,
                player_position: this.position,
                rotation: this.rotation,
                seed: this.seed,
                biome_type: this.biomeType,
                biome_name: this.biomeName,
                dimension: this.dimension,
                generator: this.generator,
                world_gamemode: this.worldGamemode,
                difficulty: this.difficulty,
                spawn_position: this.spawnPostition,
                achievements_disabled: true,
                editor_world: false,
                created_in_editor: false,
                exported_from_editor: false,
                day_cycle_stop_time: 18,
                edu_offer: 0,
                edu_features_enabled: false,
                edu_product_uuid: "",
                rain_level: 0,
                lightning_level: 0,
                has_confirmed_platform_locked_content: false,
                is_multiplayer: true,
                broadcast_to_lan: true,
                xbox_live_broadcast_mode: 6,
                platform_broadcast_mode: 6,
                enable_commands: true,
                is_texturepacks_required: false,
                gamerules: this.gamerules,
                experiments: [],
                experiments_previously_used: false,
                bonus_chest: false,
                map_enabled: false,
                permission_level: this.permissionLevel,
                server_chunk_tick_range: 4,
                has_locked_behavior_pack: false,
                has_locked_resource_pack: false,
                is_from_locked_world_template: false,
                msa_gamertags_only: true,
                is_from_world_template: false,
                is_world_template_option_locked: false,
                only_spawn_v1_villagers: false,
                persona_disabled: false,
                custom_skins_disabled: false,
                emote_chat_muted: false,
                game_version: "*",
                limited_world_width: 16,
                limited_world_length: 16,
                is_new_nether: false,
                edu_resource_uri: {
                    button_name: "",
                    link_uri: "",
                },
                experimental_gameplay_override: false,
                chat_restriction_level: "none",
                disable_player_interactions: false,
                level_id: this.worldName,
                world_name: this.worldName,
                premium_world_template_id: "00000000-0000-0000-0000-000000000000",
                is_trial: false,
                movement_authority: this.movementAuthority,
                rewind_history_size: 20,
                server_authoritative_block_breaking: false,
                current_tick: [0, 0],
                enchantment_seed: 1553099102,
                block_properties: [],
                itemstates: this.itemStates,
                multiplayer_correlation_id: "00000000-0000-0000-0000-000000000000",
                server_authoritative_inventory: true,
                engine: "GreenFrog",
                property_data: {
                    type: "compound",
                    name: "",
                    value: {},
                },
                block_pallette_checksum: [0, 0],
                world_template_id: "00000000-0000-0000-0000-000000000000",
                client_side_generation: false,
                block_network_ids_are_hashes: true,
                server_controlled_sound: false,
            },
        }
    }

    public handle(player: Player): void {
        
    }
}

export {
    StartGame,
}