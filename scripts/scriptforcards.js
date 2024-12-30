const ticketTopics = [
    "Матрицы и действия над ними. Свойства.",
    "Определители 2 и 3 порядков. Миноры и алгебраические дополнения. Свойства 1-7 (с доказательствами).",
    "Определители 2 и 3 порядков. Теорема о разложении определителя по элементам строки или столбца. Замечание к теореме.",
    "Обратная матрица. Теорема.",
    "Система n линейных уравнений с n неизвестными. Теорема Крамера.",
    "Система n линейных уравнений с n неизвестными. Матричный способ решения. Однородная система линейных уравнений.",
    "Многомерное линейное (векторное) пространство. Линейная зависимость и независимость векторов. Теорема.",
    "Ранг матрицы. Связь ранга матрицы с линейной зависимостью (независимостью) векторов (теорема).",
    "Ранг матрицы (определения). Теорема об элементарных преобразованиях матрицы.",
    "Произвольная система линейных уравнений. Теорема Кронекера-Капелли.",
    "Векторы (определение, действия над векторами, свойства).",
    "Проекция вектора на ось. Теоремы о проекциях.",
    "Координаты вектора. Действия над векторами в координатной форме.",
    "Скалярное произведение векторов.",
    "Векторное произведение векторов.",
    "Смешанное произведение векторов.",
    "Простейшие задачи аналитической геометрии (расстояние между двумя точками, деление отрезка в заданном отношении).",
    "Полярная система координат. Формулы преобразования координат – параллельный перенос и поворот осей координат.",
    "Уравнение прямой на плоскости (общее уравнение прямой, уравнение прямой в отрезках, нормальное уравнение прямой).",
    "Расстояние от точки до прямой.",
    "Канонические, параметрические уравнения прямой на плоскости. Уравнение прямой, проходящей через две заданные точки. Уравнение прямой с угловым коэффициентом. Уравнение прямой с угловым коэффициентом, проходящей через заданную точку. Угол между двумя прямыми. Уравнение пучка прямых.",
    "Уравнение плоскости в пространстве (общее уравнение плоскости, уравнение плоскости в отрезках, неполные уравнения плоскости).",
    "Нормальное уравнение плоскости.",
    "Расстояние от точки до плоскости.",
    "Прямая в пространстве. Каноническое и параметрическое уравнения прямых в пространстве. Уравнение прямой, проходящей через 2 точки.",
    "Общее уравнение прямой в пространстве. Приведения общего уравнения прямой к каноническому виду.",
    "Уравнение пучка плоскостей. Угол между прямой и плоскостью. Угол между прямой и плоскостью в пространстве. Угол между двумя плоскостями.",
    "Кривые 2 порядка. Эллипс. Исследование формы эллипса. Эксцентриситет эллипса и его влияние на форму. Директриса эллипса.",
    "Кривые 2 порядка. Гипербола. Исследование формы гиперболы. Асимптоты гиперболы. Эксцентриситет гиперболы.",
    "Кривые 2 порядка. Парабола.",
    "Кривые 2 порядка. Общее свойство кривых 2 порядка.",
    "Приведение кривой 2 порядка к каноническому виду.",
    "Поверхности вращения 2 порядка. Вывод уравнений эллипсоида вращения, однополостного и двуполостного гиперболоидов вращения, параболоида вращения и их канонические уравнения.",
    "Получение поверхности эллиптического параболоида другим способом. Гиперболический параболоид.",
    "Исследование поверхностей 2 порядка методом сечения (эллипсоид, гиперболоиды (однополостный и двуполостный, эллиптический параболоид)).",
    "Исследование гиперболического параболоида методом сечения.",
    "Цилиндрические поверхности."
];

const ticketTheory = [
    "Матрицы — это прямоугольные таблицы чисел, которые организованы в строки и столбцы. Основные действия над матрицами: сложение, вычитание, умножение на число, умножение матриц. Свойства матриц включают ассоциативность, дистрибутивность, отсутствие коммутативности у умножения и наличие нейтрального элемента (единичной матрицы).",
    "Определители второго и третьего порядка вычисляются с помощью формул. Миноры — это определители меньшего порядка, полученные путём исключения строки и столбца. Алгебраические дополнения используются для нахождения обратной матрицы. Основные свойства: 1) Определитель транспонированной матрицы равен определителю исходной. 2) При перестановке строк или столбцов знак определителя меняется. 3) Если строки или столбцы пропорциональны, то определитель равен нулю.",
    "Разложение определителя по элементам строки или столбца означает, что определитель равен сумме произведений элементов строки (или столбца) на их алгебраические дополнения. Это упрощает вычисление определителей больших порядков.",
    "Обратная матрица существует, если определитель матрицы не равен нулю. Она находится как транспонированная матрица алгебраических дополнений, делённая на определитель исходной матрицы.",
    "Теорема Крамера применяется для решения систем линейных уравнений с квадратной матрицей коэффициентов, если её определитель не равен нулю. Решение для каждого неизвестного находится путём замены соответствующего столбца свободных членов и вычисления определителя.",
    "Матричный способ решения систем линейных уравнений заключается в представлении системы в виде матричного уравнения AX = B. Решение находится как X = A⁻¹B, если обратная матрица A⁻¹ существует. Для однородных систем (B = 0) решение существует всегда.",
    "Линейное пространство — это множество векторов, для которых определены операции сложения и умножения на число, удовлетворяющие аксиомам (ассоциативность, коммутативность, наличие нулевого вектора и др.). Линейная зависимость означает, что один из векторов можно представить как линейную комбинацию других.",
    "Ранг матрицы — это максимальное число линейно независимых строк или столбцов матрицы. Если строки или столбцы линейно зависимы, то ранг уменьшается. Связь с линейной зависимостью: число линейно независимых векторов равно рангу матрицы.",
    "Ранг матрицы можно определить с помощью элементарных преобразований, которые не изменяют ранг. Эти преобразования включают перестановку строк, умножение строки на число, прибавление к одной строке другой строки.",
    "Система линейных уравнений совместна, если её ранг совпадает с рангом расширенной матрицы. Теорема Кронекера-Капелли устанавливает условие совместности и однозначность решения.",
    "Векторы — это направленные отрезки, которые характеризуются длиной и направлением. Операции над векторами включают сложение, вычитание, умножение на скаляр. Свойства: ассоциативность, коммутативность сложения, распределительный закон умножения.",
    "Проекция вектора на ось — это длина тени вектора на оси, получаемая путём скалярного умножения на единичный вектор оси. Свойства проекций: линейность, монотонность.",
    "Координаты вектора определяются относительно базиса. Операции над векторами в координатной форме включают сложение, вычитание и умножение. Формулы: (x₁+x₂, y₁+y₂, z₁+z₂) для сложения.",
    "Скалярное произведение двух векторов равно произведению их длин на косинус угла между ними. Свойства: коммутативность, линейность, связь с длиной вектора.",
    "Векторное произведение определяется для трёхмерных векторов. Результат — вектор, перпендикулярный плоскости исходных векторов. Свойства: антикоммутативность, линейность.",
    "Смешанное произведение трёх векторов — это число, равное объёму параллелепипеда, построенного на этих векторах. Свойства: ассоциативность, знакопеременность.",
    "Расстояние между двумя точками вычисляется по формуле длины вектора. Деление отрезка в заданном отношении: используются координатные формулы, зависящие от коэффициента деления.",
    "Полярная система координат определяет точку через расстояние до полюса и угол относительно оси. Формулы преобразования включают переход между полярной и декартовой системами.",
    "Уравнение прямой на плоскости задаётся в общем виде Ax + By + C = 0. Специальные виды: нормальное уравнение, уравнение в отрезках на осях.",
    "Расстояние от точки до прямой вычисляется через модуль расстояния от точки до прямой по формуле: d = |Ax₀ + By₀ + C| / √(A² + B²).",
    "Каноническое уравнение прямой задаётся направляющим вектором и точкой на прямой. Параметрическое уравнение использует параметр для задания координат точек.",
    "Уравнение плоскости в пространстве записывается в общем виде Ax + By + Cz + D = 0. Уравнение в отрезках использует точки пересечения плоскости с осями координат.",
    "Нормальное уравнение плоскости определяется нормальным вектором и расстоянием до начала координат. Выражается через координаты нормального вектора.",
    "Расстояние от точки до плоскости вычисляется аналогично расстоянию до прямой. Используется нормальный вектор плоскости.",
    "Прямая в пространстве задаётся каноническим уравнением через направляющий вектор и точку или параметрическим уравнением.",
    "Уравнение пучка плоскостей описывает семейство плоскостей, проходящих через одну прямую. Углы между прямыми или плоскостями зависят от скалярного произведения.",
    "Кривые второго порядка включают эллипсы, гиперболы и параболы. Они описываются уравнениями в каноническом виде, зависящими от коэффициентов.",
    "Эллипс имеет форму вытянутой окружности. Эксцентриситет описывает степень вытянутости. Директрисы помогают определить положение эллипса.",
    "Гипербола имеет две ветви, расходящиеся в противоположные стороны. Асимптоты определяют направление ветвей.",
    "Парабола имеет одну фокусную точку и директрису. Все точки параболы равноудалены от фокуса и директрисы.",
    "Каноническая форма кривой второго порядка достигается путём преобразования координат. Это упрощает анализ формы кривой.",
    "Поверхности вращения второго порядка включают эллипсоиды, гиперболоиды и параболоиды. Они задаются уравнениями в каноническом виде.",
    "Эллиптический параболоид имеет форму чаши. Гиперболический параболоид напоминает седло. Их уравнения задаются через координатные оси.",
    "Метод сечения позволяет исследовать форму поверхности второго порядка, выявляя эллиптические, гиперболические и параболические сечения.",
    "Гиперболический параболоид исследуется через его сечения. Он имеет два семейства прямых, образующих поверхность.",
    "Цилиндрические поверхности — это поверхности, получаемые при движении прямой вдоль заданной кривой. Примеры: цилиндры и конусы."
];


const buttons = document.querySelectorAll("btn button");
const card = document.getElementById("flip-card");
const cardFront = document.querySelector(".flip-card-front");
const cardBack = document.querySelector("#flip-card-back");
const randomButton = document.getElementById("random-button"); 
const theme = document.getElementById("theme");

buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        const topic = ticketTopics[index]; 
        displayCard(index, topic);
    });
});
theme.addEventListener('click', () => {
    window.location.href = 'cardsw.html';
})
randomButton.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * ticketTopics.length); 
    const topic = ticketTopics[randomIndex]; 
    displayCard(randomIndex, topic);
});

function displayCard(index, topic) {
    const theory = ticketTheory[index] || "Теория отсутствует"; 
    cardFront.innerHTML = `<p class="title">Тема ${index + 1}</p><p>${topic}</p>`;
    cardBack.innerHTML = `<p class="title">Тема ${index + 1} - Основная теория</p><p>${theory}</p>`;
    card.style.display = "grid"; 


card.addEventListener("click", () => {
    card.classList.toggle("flipped"); 
});


document.addEventListener("click", (event) => {
    if (!card.contains(event.target) && ![...buttons].includes(event.target) && event.target !== randomButton) {
        card.style.display = "none"; 
    }
});
}
