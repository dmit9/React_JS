import axios from "axios"

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY" : "262aa461-2d7c-4f6b-9534-6fa2f316253a"
        }
});
export const usersAPI = {
    getUsers(currentPage=1, pageSize=10) {
        return instance.get( `users?page=${currentPage}&count=${pageSize}` )
            .then(response => {return response.data;
            });
    },
    getUnfollow(userId) {
        return instance.delete(`follow/${userId}`
        )
    },
    getfollow(userId) {
        return instance.post(`follow/${userId}`
        )
    },
    getProfile(userId) {
        return profileAPI.getProfile(userId);
  }
}
export const profileAPI = {
    getProfile(userId) {
          return instance.get('profile/'+userId)
    },
    getStatus(userId) {
        return instance.get('profile/status/' + userId)
    },
    updateStatus(status) {
        return instance.put('profile/status', {status: status});
    }
}

export const authAPI = {
    me() {
    return instance.get('auth/me')
}}
