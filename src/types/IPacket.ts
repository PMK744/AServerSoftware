interface IPacket {
    data: IPacketData
    metadata: IPacketMetaData
    buffer: Buffer
    fullBuffer: Buffer
}

interface IPacketData {
    name: string
    params: any
}

interface IPacketMetaData {
    size: number
}

export {
    IPacket,
    IPacketData,
    IPacketMetaData,
}
