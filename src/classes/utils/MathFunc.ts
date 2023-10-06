export function lerp1D(x0: number, x1: number, alpha: number){
    return x0 + alpha * (x1 - x0)
}