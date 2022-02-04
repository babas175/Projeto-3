import NewsService from '../services/newsService';

import Helper from '../infra/helper';
import HttpStatus = require('http-status');

class NewsController {
  get(req, res) {
    NewsService.get()
      .then((news) => Helper.sendResponse(res, HttpStatus.OK, news))
      .catch((error) => console.error.bind(console, `Error ${error}`));
  }

  getById(req, res) {
    const _id = req.params.id;
    NewsService.getById(_id)
      .then((news) => Helper.sendResponse(res, HttpStatus.OK, news))
      .catch((error) => console.error.bind(console, `Error ${error}`));
  }

  create(req, res) {
    const vm = req.body;

    NewsService.create(vm)
      .then((news) => Helper.sendResponse(res, HttpStatus.OK, ' Cadastrado com sucesso'))
      .catch((error) => console.error.bind(console, `Error ${error}`));
  }

  update(req, res) {
    const _id = req.params.id;
    const news = req.body;

    NewsService.update(_id, news)
      .then((news) => Helper.sendResponse(res, HttpStatus.OK, ' Noticia foi atualizada com sucesso !'))
      .catch((error) => console.error.bind(console, `Errror ${error}`));
  }

  delete(req, res) {
    const _id = req.params.id;

    NewsService.delete(_id)
      .then(
        () => Helper.sendResponse(res, HttpStatus.Ok, 'Noticia deletada com sucesso!'),
      )
      .catch((error) => console.error.bind(console, `Errror ${error}`));
  }
}

export default new NewsController();
