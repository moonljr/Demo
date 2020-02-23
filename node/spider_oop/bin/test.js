"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NewsList_1 = __importDefault(require("./NewsList"));
// new Spider({ url: 'http://www.itcast.cn/newsvideo/newslist.html' })
new NewsList_1.default({
    url: 'http://www.itcast.cn/news/json/f1f5ccee-1158-49a6-b7c4-f0bf40d5161a.json',
});
// new TeacherPhotos({ url: 'http://web.itheima.com/teacher.html' })
