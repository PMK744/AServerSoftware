import AbstractHandler from './AbstractHandler'
import { JoinHandler } from './JoinHandler'
import { LoginHandler } from './LoginHandler'
import { PacketHandler } from './PacketHandler'

const handlers = [
    JoinHandler,
    LoginHandler,
    PacketHandler,
]

export {
    AbstractHandler,
    handlers,
    JoinHandler,
    LoginHandler,
    PacketHandler,
}
