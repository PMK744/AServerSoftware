interface NetworkIdentifierClient {
    address: string
    guid: string
    send: (data: any) => any
    close: (data: any) => any
    neuter: (data: any) => any
    sendReliable: (data: any) => any
}

export {
    NetworkIdentifierClient,
}