export interface Factura {
    id: number;
    emisor: number;
    receptor: number;
    valor: number;
    iva: number;
    total: number;
}