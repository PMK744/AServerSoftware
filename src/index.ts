import { Server } from './server'

class CraftBird {
    public readonly server: Server

    public constructor() {
        this.server = new Server()
    }
}

export {
    CraftBird,
}

const cb = new CraftBird()
cb.server.open()

cb.server.on('Packet', (data) => {
    console.log(data.player.position)
})