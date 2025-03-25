const { v4: uuid4 } = require('uuid');

class Post {
    constructor(likes, comments, content, image, date) {
        this.id = uuid4();
        this.image = image;
        this.content = content;
        this.likes = likes;
        this.comments = comments;
        this.date = date;
    }
}

module.exports = Post;