import { atom, selector } from 'recoil';

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
    default: []
})

// export const sortedPostsState = selector({
//     key: 'sortedPostsState',
//     get: ({ get }) => get(postsState).sort((a, b) => {
//         if (a.time > b.time) return -1;
//         if (a.time < b.time) return 1;
//         return 0;
//     })
// })
