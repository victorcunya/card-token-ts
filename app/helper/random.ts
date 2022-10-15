import { v4 as uuid } from 'uuid'

export const random = () => {
    const hash = uuid().split('-');
    return `${hash[1]}${hash[0]}${hash[2].toUpperCase()}`
}
