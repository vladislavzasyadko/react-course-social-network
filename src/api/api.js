import * as axios from 'axios';

let instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": '8e9ee1e6-5deb-41eb-a54b-cd03fc3e6240', //  <-for vladislavvv ||'c008536c-789e-46d3-8bb3-cdbddda9e73e' <- not for vladislavvv
    },
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=
        ${currentPage}&count=${pageSize}`, {
            withCredentials: true,
        }).then(response => response.data)
    },
    unfollow(userId) {
        return instance.delete(`follow/
            ${userId}`, {
            withCredentials: true,
        })
        //.then(response => response.data)//??
    },
    follow(userId) {
        return instance.post(`follow/
                ${userId}`, {
            withCredentials: true,
        }).then(response => response.data.resultCode)
    },
    getProfile(userId){
        return instance.get(`profile/${userId}`);
    }
}

export const loginAPI = {
    login() {
        return instance.get('auth/me',
            {
                withCredentials: true,//Cookies required
            });
            //.then(response => response)
    },
}
