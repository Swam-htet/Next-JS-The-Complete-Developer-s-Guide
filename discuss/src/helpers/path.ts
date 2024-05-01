const path = {
    home: () => '/',
    topicShow: (topicId: string) => `/topics/${topicId}`,
    postCreate: (topicId: string) => `/topics/${topicId}/posts/new`,
    postShow: (topicId: string, postId: string) => `/topics/${topicId}/posts/${postId}`,
}

export default path;