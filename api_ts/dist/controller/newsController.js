"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const newsService_1 = require("../services/newsService");
const helper_1 = require("../infra/helper");
const HttpStatus = require("http-status");
class NewsController {
    get(req, res) {
        newsService_1.default.get()
            .then((news) => helper_1.default.sendResponse(res, HttpStatus.OK, news))
            .catch((error) => console.error.bind(console, `Error ${error}`));
    }
    getById(req, res) {
        const _id = req.params.id;
        newsService_1.default.getById(_id)
            .then((news) => helper_1.default.sendResponse(res, HttpStatus.OK, news))
            .catch((error) => console.error.bind(console, `Error ${error}`));
    }
    create(req, res) {
        const vm = req.body;
        newsService_1.default.create(vm)
            .then((news) => helper_1.default.sendResponse(res, HttpStatus.OK, ' Cadastrado com sucesso'))
            .catch((error) => console.error.bind(console, `Error ${error}`));
    }
    update(req, res) {
        const _id = req.params.id;
        const news = req.body;
        newsService_1.default.update(_id, news)
            .then((news) => helper_1.default.sendResponse(res, HttpStatus.OK, ' Noticia foi atualizada com sucesso !'))
            .catch((error) => console.error.bind(console, `Errror ${error}`));
    }
    delete(req, res) {
        const _id = req.params.id;
        newsService_1.default.delete(_id)
            .then(() => helper_1.default.sendResponse(res, HttpStatus.Ok, 'Noticia deletada com sucesso!'))
            .catch((error) => console.error.bind(console, `Errror ${error}`));
    }
}
exports.default = new NewsController();
