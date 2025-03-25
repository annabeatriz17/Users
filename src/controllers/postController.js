const Post = require("../models/Post");
const PostList = require("../models/PostList");

const list = new PostList();

list.addPost(new Post("https://br.web.img2.acsta.net/medias/nmedia/18/90/89/85/20119071.jpg", "Live action: Adaptação tem estreia prevista para maio de 2025", 4000, "UAUUU", "22-05-2025"));
list.addPost(new Post("https://lumiere-a.akamaihd.net/v1/images/gife454xsaa8wv-_3e8071e7.jpeg", "Lançamento: Divertida Mente 2", 12305, "NÃO ACREDITOO", "20-06-2024"));
list.addPost(new Post("https://br.web.img3.acsta.net/img/7e/31/7e31d6246c6f32fbb227b4739fb5440f.jpg", "Lançamento: Mufasa", 9480, "OMG", "19-12-2024"));

const router = {
    getAllPosts: (req, res) => {
        try {
            const posts = list.getAllPosts();
            res.status(200).json(posts);
        } catch (error) {
            res.status(404).json({ message: "Post não encontrado", error });
        }
    },
    getPostById: (req, res) => {
        try {
            const post = list.getPostById(req.params.id);
            res.status(200).json(post);
        } catch (error) {
            res.status(404).json({ message: "Post não encontrado", error });
        }
    },

    addPost: (req, res) => {
        try {
            const { likes, comments, content, image, date } = req.body;
            if (!likes || !comments || !content || !image || date === undefined) {
                throw new Error("Todos os campos são obrigatórios");
            }
            const newPost = new Post(likes, comments, content, image, date);
            list.addPost(newPost);
            res.status(201).json(newPost);
        } catch (error) {
            res.status(400).json({ message: error.message, error });
        }
    },
    getPostById: (req, res) => {
        try {
            res.json(list.getPostById(req.params.id));
        } catch (error) {
            res.status(404).json({ message: "Post não encontrado", error });
        }
    },
    updatePost: (req, res) => {
        try {
            const updatePost = list.updatePost(req.params.id, req.body);
            res.status(200).json(updatePost);
            } catch (error) {
                res.status(404).json({ message: "Erro ao atualizar o post", error });
            }
        },
    deletePost: (req, res) => {
        try {
            list.deletePost(req.params.id);
            res.status(200).json({message: "post deletado com sucesso", IdDeletado: req.params.id});
        } catch (error) {
            res.status(404).json({message: "erro ao deletar post :(", error});
        }
    },
};
module.exports = router;