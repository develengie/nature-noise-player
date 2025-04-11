Необходимо сделать:

1. Установить все нужные плагины для работы с HTML, CSS и Sass.
2. Настроить правильное сохранение и отображение статических файлов (шрифты, favicon, картинки, аудио).
3. Разделить функционал webpack на два конфига — development и production. Настроить webpack-dev-server.
4. Установить и настроить ESLint в dev-режим с любым конфигом.
5. Написать приложение на чистом JavaScript.

# Базовая настройка Webpack

Подготовил проект, проведя базовую настройку Webpack, и выгрузил на GitHub:
1) проинициализировал проект:
   npm init
2) установил Webpack:
   npm install webpack webpack-cli --save-dev
3) создал папку src для исходного кода
4) создал папку public для статических файлов
5) создал общий конфигурационный файл
5) заменил "main": "index.js" на "private": true в package.json

# 1. Установить все нужные плагины для работы с HTML, CSS и Sass.

Отвел от main ветку feature/install-html-css-sass-plugins.

Установил и подключил:
HTMLWebpackPlugin - https://webpack.js.org/plugins/html-webpack-plugin/
css-loader - https://webpack.js.org/loaders/css-loader/
style-loader - https://webpack.js.org/loaders/style-loader/
MiniCssExtractPlugin - https://webpack.js.org/plugins/mini-css-extract-plugin/
sass-loader - https://webpack.js.org/loaders/sass-loader/#root
postcss-loader - https://webpack.js.org/loaders/postcss-loader/#root
postcss-preset-env - https://www.npmjs.com/package/postcss-preset-env

Отправил ветку на удаленный репозиторий (Create pull request -> Merge pull request -> Rebase and merge).
В дальнейшем все отведенные от main ветки отправляю на удаленный репозиторий данным образом.

# 2. Настроить правильное сохранение и отображение статических файлов (шрифты, favicon, картинки, аудио).

Отвел от main ветку feature/display-static.

Подключил:
шрифты - https://webpack.js.org/guides/asset-management/#loading-fonts
картинки - https://webpack.js.org/guides/asset-management/#loading-images
аудио - https://stackoverflow.com/questions/38252453/serving-mp3-files-using-the-webpack-file-loader

# 3. Разделить функционал webpack на два конфига — development и production. Настроить webpack-dev-server.

Отвел от main ветку feature/configure-files.

Установил и подключил webpack-merge - https://www.npmjs.com/package/webpack-merge.
Настроил конфигурационные файлы для development и production.
Создал скрипты запуска проекта в development и production.

Отвел от main ветку feature/install-webpack-dev-server.

Установил webpack-dev-server - https://github.com/webpack/webpack-dev-server.
Настроил webpack-dev-server в файле для development.
Создал скрипт запуска webpack-dev-server.

## Оптимизация CSS

Отвел от main ветку feature/optimize-css.

Установил CssMinimizerWebpackPlugin - https://webpack.js.org/plugins/css-minimizer-webpack-plugin/.
Подключил CssMinimizerWebpackPlugin в файле для production.
Минимайзер по умолчанию был переписан, из-за чего перестал минимизироваться JS.
Установил TerserWebpackPlugin - https://webpack.js.org/plugins/terser-webpack-plugin/.
Подключил TerserWebpackPlugin в файле для production.

# 4. Установить и настроить ESLint в dev-режим с любым конфигом.

Отвел от main ветку feature/install-eslint.

Установил ESLint и EslintWebpackPlugin - https://webpack.js.org/plugins/eslint-webpack-plugin/#root.
Подключил EslintWebpackPlugin в файле для development.
Настроил конфигурационный файл для ESLint.

## Source Maps

Отвел от main ветку feature/generate-source-maps.

Добавил опцию devtool в файлах для development и production.

# 5. Написать приложение на чистом JavaScript.

Отвел от main ветку feature/develop-application.

Написал приложение.

## CopyWebpackPlugin

Отвел от main ветку feature/install-copywebpackplugin.

Установил CopyWebpackPlugin - https://webpack.js.org/plugins/copy-webpack-plugin/.
Подключил CopyWebpackPlugin в общем конфигурационном файле.
Добавил в проект фавиконку и подключил ее.

## Обновил общий конфигурационный файл

Отвел от main ветку feature/update-configure-files.

Обновил общий конфигурационный файл для хранения шрифтов, картинок и аудио в отдельных папках.
