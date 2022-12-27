# Тестовое задание для JavaScript (React) разработчиков

## Макет
https://www.figma.com/file/XDsHCGvlxAn64PsyQzce5C/%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5.-React?node-id=0%3A1


## Практическое задание
Приложение состоит из двух страниц: Формы и Палитры.

## Страница “Форма”
Создайте форму с полями: (Имя, Фамилия, Отчество, Изображение).
При клике по заглушке изображения, должен открываться проводник для выбора изображения. После выбора, изображение должно отобразиться вместо заглушки. В проводнике выбрать можно только изображение.
После нажатия “Сохранить” данные должны отправиться по следующему адресу:

### POST https://test-job.pixli.app/send.php

### Параметры:
- action (обязательное), значение send_data
- id (обязательное), тип integer (число 1)
- image (обязательное), файл изображения
- contact, массив со строковыми полями полями name, surname, patronymic


### Подсказка:
	const data = new FormData()

	data.set('contact[name]', "Иван")
	data.set('contact[surname]', "Иванов")
	data.set('contact[patronymic]', "Иванович")


Возвращаемый ответ должен отобразиться в поле Response.
Будет плюсом, если реализуете прикрепление файла через drag and drop.

## Страница “Палитра”
- При открытии страницы палитра пустая, не добавлено ни одного цвета.
- При нажатии на “Добавить цвет” в палитре появляется цвет по умолчанию (выберите на свое усмотрение) с открытым ColorPicker, в котором пользователь выбирает цвет.
ColorPicker закрывается если кликнут вне него.
- Для редактирования цвета, нужно щелкнуть по нему, так же открывается ColorPicker.
- При наведении на цвет появляется крестик, по которому можно удалить цвет.
## Дополнительно
- Палитра должна храниться в Redux
- Переход между страницами организован через React-router-dom
- Код приложения залить на Git (GitHub, GitLab, BitBucket) в открытый репозиторий






# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
