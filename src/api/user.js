import request from '@/utils/request'


// 登录注册验证
// Path：  /app/v1_0/authorizations
// Method： POST
export const login = data => {
    return request({
        method: 'POST',
        url: '/app/v1_0/authorizations',
        data
    })
}

// 发送验证码
// path: /app/v1_0/sms/codes/:mobile
// Method:GET
export const sendSms = mobile => {
    return request({
        method: 'GET',
        url: `/app/v1_0/sms/codes/${mobile}`
    })
}

// // 获取用户的信息
// // Path：  /app/v1_0/user
// // Method： GET
export const getUserInfo = () => {
    return request({
        method: 'GET',
        url: '/app/v1_0/user'
    })
}

// // 获取所有频道
// // Path： /app/v1_0/channels
// // Method： GET
export const getAllChannels = () => {
    return request({
        method: 'GET',
        url: '/app/v1_0/channels'
    })
}

// // 获取用户频道列表
// // Path：  /app/v1_0/user/channels
// // Method： GET
export const getUserChannels = () => {
    return request({
        method: 'GET',
        url: '/app/v1_0/user/channels'
    })
}

// 修改用户的频道列表 重置式
// Path： /v1_0/user/channels
// Method： PUT
export const resetUserChannels = data => {
    return request({
        method: 'PUT',
        url: '/v1_0/user/channels',
        data
    })
}

// 修改用户的频道列表 部分覆盖
// Path： /app/v1_0/user/channels
// Method： Patch
export const addUserChannels = data => {
    return request({
        method: 'PATCH',
        url: '/app/v1_0/user/channels',
        data
    })
}

// 删除指定用户频道
// Path： /app/v1_0/user/channels/:target
// Method： DELETE
export const deleteUserChannels = channel_id => {
    return request({
        method: 'DELETE',
        url: `/app/v1_0/user/channels/${channel_id}`
    })
}

// 关注用户
// Path： /app/v1_0/user/followings
// Method： POST
export const followUser = userId => {
    return request({
        method: 'POST',
        url: '/app/v1_0/user/followings',
        data: {
            target: userId
        }
    })
}

// 取消关注
// Path： /app/v1_0/user/followings/:target
// Method： DELETE
export const cancelFollowUser = userId => {
    return request({
        method: 'DELETE',
        url: `/app/v1_0/user/followings/${userId}`
    })
}


//获取用户个人资料
// Path： /app/v1_0/user/profile
// Method： GET
export const getUserProfile = userId => {
    return request({
        method: 'GET',
        url: '/app/v1_0/user/profile'
    })
}

// 修改用户数据
// Path： /app/v1_0/user/profile
// Method： PATCH
export const updateUserProfile = data => {
    return request({
        method: 'PATCH',
        url: '/app/v1_0/user/profile',
        data
    })
}

// 编辑用户头像
// Path： /app/v1_0/user/photo
// Method： PATCH
export const updateUserPhoto = data => {
    return request({
        method: 'PATCH',
        url: '/app/v1_0/user/photo',
        data
    })
}