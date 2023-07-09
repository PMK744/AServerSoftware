import type { NetworkIdentifierClient } from '../types'
import type { Server } from '../server'

class NetworkIdentifier {
    private readonly client: NetworkIdentifierClient
    public readonly server: Server

    public constructor(client: NetworkIdentifierClient, server: Server) {
        this.client = client
        this.server = server
    }

    public getAddress(): string {
        return this.client.address.split('/')[0]
    }

    public getPort(): number {
        return +this.client.address.split('/')[1]
    }

    public getGuid(): string {
        return this.client.guid
    }
}

export {
    NetworkIdentifier,
}
