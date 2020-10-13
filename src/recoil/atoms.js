import { atom } from 'recoil';

// type User = {
//     id?: string,
//     name?: string,
//     exercises?: [string],
//     nice_total?: number,
//     photo_name?: string,
//     photo_url?: string,
// }
// const initialUser: User[] = []


export const userState = atom({
    key: 'userState',
    default: null,
});

export const postsState = atom({
    key: 'postsState',
    default: {}
})