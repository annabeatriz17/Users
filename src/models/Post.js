const { v4: uuid4 } = require('uuid');

class Post {
    constructor(conteudo, image, day) {
        this.id = Date.now().toString();
        this.conteudo = conteudo;
        this.image = image;
        this.day = day;
    }
}

module.exports = Post;