"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Spider_1 = __importDefault(require("./Spider"));
const cheerio = require('cheerio');
const download = require('download');
class TeacherPhotos extends Spider_1.default {
    onCatchHTML(result) {
        // console.log('result', result)
        let $ = cheerio.load(result);
        let imgs = Array.prototype.map.call($('.tea_main .tea_con .li_img > img'), (item) => 'http://web.itheima.com/' + encodeURI($(item).attr('src')));
        Promise.all(imgs.map(x => download(x, 'dist'))).then(() => {
            console.log('files downloaded!');
        });
    }
}
exports.default = TeacherPhotos;
