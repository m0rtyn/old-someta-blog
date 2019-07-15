1)
const average1 = array.reduce((acc, { age }, i, arr) => acc + age / arr.length, 0); // > 24

const average2 = (arr, acc = 0) => (
  arr.length === 0
    ? acc / 3
    : average(
      arr.slice(1),
      acc + arr[0].age,
    )
);

result = average2(array); // > 24


2)
Теги A,
  значения аттрибута HREF в которых начинаются с «mailto»,
которые находятся внутри тегов LI,
  которые первый потомки тегов UL,
    которые находятся в элементах содержащих аттрибут ROLE со значение "note"


3)
VSCode + extensions, Photoshop, Illustrator, Figma
Gulp, Webpack
Vue
PostCSS, SCSS, Pug

4)
Работал с SVG и с Canvas.Со вторым мало.

SVG про векторные графические объекты и манипуляции с DOM.Векторная графика при правильном подходе мало весит.Дорогая при множественных и частых изменениях.

Canvas про работу с пискелями и про шейдеры.Позволяет делать детальные визуальные изменения без пересчёта объектной модели.На канвасе можно обрабатывать каждый имеющийся пиксель.


  Главное)
Моё расширенное резюме - демонстрация: https://martyn.guru/resume