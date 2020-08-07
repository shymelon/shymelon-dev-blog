(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{27:function(t,e,a){"use strict";a.r(e);var r=a(0),s=function(t){var e,a,r,s,n=(r=void 0,s="reduce",(e={}).type=a="post",e.internal=r,e.contentType="markdown",e.slug="functional-programming-for-dummies",e.content=r,e.createdAt=new Date(15952032e5),e.updatedAt=new Date(1596531711947),e.title="Функциональное программирование в JS для самых маленьких",e.date="2020-07-20",e.layout=a,e.markdownHeadings=[{text:"Вступление",slug:"вступление",level:1},{text:"Disclaimer",slug:"disclaimer",level:2},{text:"Never gonna let...",slug:"never-gonna-let---",level:2},{text:"Циклы, циклы",slug:"циклы-циклы",level:2},{text:"map",slug:"map",level:3},{text:"filter и sort",slug:"filter-и-sort",level:3},{text:s,slug:s,level:3},{text:"forEach",slug:"foreach",level:3},{text:"Практика",slug:"практика",level:2}],e.excerpt="<p>Я человек практичный, поэтому когда я впервые увидел функциональный подход я малость приофигел. Какие-то странные функции которые передаются другим функциям как переменные, лямбда выражения, зачем это всё, ведь можно сделать куда проще? Но с течением времени мой код становился сложнее, циклы и условия становились всё вложеннее, а переменные изменялись всё в больших местах, и в один момент я понял - с этим что-то надо делать. Так я попробовал ФП ещё раз и начал искать ему практическое применение в рутинных задачах, делая их проще и понятнее.</p>\n",e.permalink="/posts/functional-programming-for-dummies.html",e.assets={},e.attributes=e,e),i=t.options.beforeCreate||[];t.options.beforeCreate=[function(){this.$page=n}].concat(i);["layout","transition"].forEach((function(e){var a=t.options.PageComponent;a&&(t.options[e]=a[e]),void 0===t.options[e]&&(t.options[e]=n[e])})),n.slug&&(t.options.name="page-wrapper-"+n.slug.replace(/[^0-9a-z\-]/gi,"-"))},n=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("layout-manager",[a("h1",{attrs:{id:"вступление"}},[t._v("Вступление")]),t._v(" "),a("p",[t._v("Я человек практичный, поэтому когда я впервые увидел функциональный подход я малость приофигел. Какие-то странные функции которые передаются другим функциям как переменные, лямбда выражения, зачем это всё, ведь можно сделать куда проще? Но с течением времени мой код становился сложнее, циклы и условия становились всё вложеннее, а переменные изменялись всё в больших местах, и в один момент я понял - с этим что-то надо делать. Так я попробовал ФП ещё раз и начал искать ему практическое применение в рутинных задачах, делая их проще и понятнее.")]),t._v(" "),a("p",[t._v("В этой статье я постараюсь максимально просто рассказать новичкам о том, как начать свои первые шаги в функциональном программировании и показать на реальном примере, как пользоваться ими с минимальными усилиями, без сложных понятий и теории функционального программирования.")]),t._v(" "),a("h2",{attrs:{id:"disclaimer"}},[t._v("Disclaimer")]),t._v(" "),a("p",[t._v("Я не претендую на последнюю инстанцию в этом вопросе, ровно, как и то, что это потребуется именно вам и тем более не собираюсь разводить холивар насчёт того какая парадигма лучше. Также стоит помнить, что нижеописанные советы лишь первый шаг, и они могут (и большинство должны!) использоваться и в объектно-ориентированном подходе.")]),t._v(" "),a("h2",{attrs:{id:"never-gonna-let---"}},[t._v("Never gonna let...")]),t._v(" "),a("p",[t._v("Для начала следует максимально избавиться в своем коде от переменных, заменив их константами. Зачем? Всё просто: чем чаще вы меняете переменную, тем больше условий и мест изменений надо удержать в голове. Для первых шагов достаточно полностью заменить let и var на const, это подстегнёт вас делать сразу две вещи: правильно называть переменные и писать меньше императивного кода (цикл for(const i = ...)  очевидно работать не будет, придётся искать замену в виде функций высшего порядка)")]),t._v(" "),a("h2",{attrs:{id:"циклы-циклы"}},[t._v("Циклы, циклы")]),t._v(" "),a("p",[t._v("Вторая вещь, которой учат в институте после переменных это циклы. Казалось бы, без переменных прожить можно, но без циклов-то как? Проще простого. "),a("saber-link",{attrs:{to:"https://learn.javascript.ru/array-iteration"}},[t._v("Встроенные методы перебора JavaScript")]),t._v(" покрывают 90% рутинных нужд в циклах. Описывать как ими пользоваться я не буду, это объясняют лучше меня по ссылке выше. Я же постараюсь как можно проще описать самые используемые и привести типичные юзкейсы.")],1),t._v(" "),a("h3",{attrs:{id:"map"}},[t._v("map")]),t._v(" "),a("p",[t._v("Возвращает новый массив, над каждым элементом  поработала функция f(элемент_массива), которую вы передаёте в качестве первого аргумента. Типичные юзкейсы: получить из массива объектов массив из конкретного поля объектов, трансформировать каждое значение из массива.")]),t._v(" "),a("h3",{attrs:{id:"filter-и-sort"}},[t._v("filter и sort")]),t._v(" "),a("p",[t._v("Названия говорят сами за себя: первый метод фильтрует, второй сортирует.")]),t._v(" "),a("h3",{attrs:{id:"reduce"}},[t._v("reduce")]),t._v(" "),a("p",[t._v("А вот эта интереснее. На пальцах описать сложно, грубо говоря применяет функцию на каждый элемент массива с сохранением прошлого результата, возвращает его же. Используется когда надо сократить массив до одного значения, например найти сумму всех элементов массива или вернуть строку с перечислением элементов массива. Самый мощный из встроенных методов, но самый сложный для восприятия. Для полного понимания советую вывести какой-нибудь массив с помощью него и посмотреть, какое значение будет в каждом аргументе на каждой итерации, также не стоит забывать про аргумент initialValue.")]),t._v(" "),a("h3",{attrs:{id:"foreach"}},[t._v("forEach")]),t._v(" "),a("p",[t._v("Единственный метод из перечисленных, который ничего не возвращает. Классически его используют для замены цикла for, когда без побочных эффектов не обойтись. Например, для каждого из элементов массива отправить запрос на сервер.")]),t._v(" "),a("h2",{attrs:{id:"практика"}},[t._v("Практика")]),t._v(" "),a("p",[t._v("Попробуем отрефакторить какой-нибудь реальный пример с минимальным изменением в логике. Для чистоты эксперимента я залез на сайт с компонентами Vue и взял первый попавшийся на глаза репозиторий. Это компонент для Vue, который генерирует программную анимацию текста из случайных букв и цифр. Основной движ компонента происходит в следующих строчках:")]),t._v(" "),a("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"javascript"}},[a("pre",{pre:!0,attrs:{class:"saber-highlight-code language-javascript"}},[a("code",{pre:!0,attrs:{class:"language-javascript"}},[t._v('this.textRendered = "";\n                //create initial garble string\n                for (var i = 0; i < this.text.length; i++) {\n                    if (this.text.charAt(i) != " ") {\n                        this.textRendered += Math.random().toString(36).substr(2, 1);\n                    } else {\n                        this.textRendered += " ";\n                    }\n                }\n                this.garbleInterval = setInterval(() => {\n                    //by chance add either real char or another random\n                    for (var i = 0; i < this.text.length; i++) {\n                        if (this.text.charAt(i) != " " && this.text.charAt(i) != this\n                            .textRendered.charAt(i)) {\n                            if (Math.random() > this.chance) {\n                                //another random\n                                this.textRendered = this.replaceAt(this.textRendered, i, Math\n                                    .random().toString(36).substr(2, 1));\n                            } else {\n                                //the real one\n                                this.textRendered = this.replaceAt(this.textRendered, i, this\n                                    .text.charAt(i));\n                            }\n                        }\n                    }')])])]),a("p",[t._v("Ухх. Для начала попробуем переписать 1 цикл. Всё что он делает, это просто проходит по символам в строке и меняет их на случайное значение. В отдельности выглядит несложно, но требует времени, чтобы понять что тут происходит и внимания, чтобы запомнить все изменяющиеся переменные. Для начала избавимся от цикла, он здесь явно лишний:")]),t._v(" "),a("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"js"}},[a("pre",{pre:!0,attrs:{class:"saber-highlight-code language-js"}},[a("code",{pre:!0,attrs:{class:"language-js"}},[t._v("this.textRendered = this.text.split('').map(v => v !== ' ' ? Math.random().toString(36).substr(2, 1)) : \" \").join('');")])])]),a("p",[t._v("Без цикла выглядит компактнее, но неказистость и сумбурность в коде никуда не ушла, спасибо реализации рандомайзера. Вынесем её в отдельную функцию, тем более дальше по коду она нам ещё пригодится.")]),t._v(" "),a("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"js"}},[a("pre",{pre:!0,attrs:{class:"saber-highlight-code language-js"}},[a("code",{pre:!0,attrs:{class:"language-js"}},[t._v("const getRandomChar = () => Math.random().toString(36).substr(2, 1);\nthis.textRendered = this.text.split('').map(v => v !== ' ' ? getRandomChar() : \" \").join('');")])])]),a("p",[t._v("Можно ли назвать этот код чисто функциональным? Абсолютно нет. Можно ли продолжить улучшать его? Разумеется. Но наша цель на данный момент улучшить качество при минимальных усилиях, а как известно 20% усилий приносят 80% результата.")]),t._v(" "),a("p",[t._v("Следующий кусок кода более трудоёмкий, в нём нас ожидают классические грехи императивного подхода: циклы с условием, вложеность, дублирование кода. Для начала попробуем понять, что делают отдельные куски кода в условиях и вынести их в правильно именованные функции:")]),t._v(" "),a("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"js"}},[a("pre",{pre:!0,attrs:{class:"saber-highlight-code language-js"}},[a("code",{pre:!0,attrs:{class:"language-js"}},[t._v('this.text.charAt(i) != " " && this.text.charAt(i) != this.textRendered.charAt(i)')])])]),a("p",[t._v("Проверяет должен ли меняться текущий символ или нет. Так и назовём:")]),t._v(" "),a("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"js"}},[a("pre",{pre:!0,attrs:{class:"saber-highlight-code language-js"}},[a("code",{pre:!0,attrs:{class:"language-js"}},[t._v('const shouldBeCharReplaced = (i) => this.text.charAt(i) != " " && this.text.charAt(i) != this.textRendered.charAt(i);')])])]),a("p",[t._v("Хочу заметить, что мы используем внешние переменные в нашей функции, что не есть хорошо, но наша цель на сегодня не написать идеальный функциональный код, а сделать уже существующий код более читаемым с минимальными усилиями. Конечно же, в идеале мы бы хотели полностью переписать логику компонента, но предположим на нас давят сроки, а компонент нужен читаемым прямо сейчас.\nНо что-то я отвлёкся. Далее:")]),t._v(" "),a("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"js"}},[a("pre",{pre:!0,attrs:{class:"saber-highlight-code language-js"}},[a("code",{pre:!0,attrs:{class:"language-js"}},[t._v("if (Math.random() > this.chance) {\n                                //another random\n                                this.textRendered = this.replaceAt(this.textRendered, i, Math\n                                    .random().toString(36).substr(2, 1));\n                            } else {\n                                //the real one\n                                this.textRendered = this.replaceAt(this.textRendered, i, this\n                                    .text.charAt(i));\n                            }")])])]),a("p",[t._v("Меняет символ на текущем индексе на еще один рандом или настоящий в зависимости от коэфициента. Проще простого, к тому же вишенкой на торте мы видим код, который мы уже вынесли в отдельную функцию getRandomChar():")]),t._v(" "),a("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"js"}},[a("pre",{pre:!0,attrs:{class:"saber-highlight-code language-js"}},[a("code",{pre:!0,attrs:{class:"language-js"}},[t._v("const stringWithReplacedChar = (i) => {\n    if(Math.random() > this.chance) {\n        return this.replaceAt(this.textRendered, i, getRandomChar())\n        }\n        return replaceAt(this.textRendered, i, this.text.charAt(i));\n}")])])]),a("p",[t._v("Осталось избавиться от цикла и соединить всё вместе. Т.к. в реализации автор внутри цикла каждый раз меняет всю строку, а изначальную реализацию мы решили не трогать из-за якобы горящих сроков, то придётся использовать forEach, который чаще всего используется для обработки побочных эффектов.")]),t._v(" "),a("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"js"}},[a("pre",{pre:!0,attrs:{class:"saber-highlight-code language-js"}},[a("code",{pre:!0,attrs:{class:"language-js"}},[t._v("// _ используем как плейсхолдер для ненужного нам значения\ntext.split('').forEach((_,i) => {\n    if(shouldBeCharReplaced(i)) {\n        textRendered = stringWithReplacedChar(i);\n    }\n})")])])]),a("p",[t._v("Полный результат рефакторинга:")]),t._v(" "),a("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"js"}},[a("pre",{pre:!0,attrs:{class:"saber-highlight-code language-js"}},[a("code",{pre:!0,attrs:{class:"language-js"}},[t._v("const getRandomChar = () => Math.random().toString(36).substr(2, 1);\n\nconst shouldBeCharReplaced = (i) => this.text.charAt(i) != \" \" && this.text.charAt(i) != this.textRendered.charAt(i);\n\n//by chance add either real char or another random\nconst stringWithReplacedChar = (i) => {\n    if(Math.random() > this.chance) {\n        //another random\n        return this.replaceAt(this.textRendered, i, getRandomChar());\n        }\n        //the real one\n        return replaceAt(this.textRendered, i, this.text.charAt(i));\n}\n\n//create initial garble string\nthis.textRendered = this.text.split('').map(v => v !== ' ' ? getRandomChar() : \" \").join('');\n\ntext.split('').forEach((_,i) => {\n    if(shouldBeCharReplaced(i)) {\n        this.textRendered = stringWithReplacedChar(i);\n    }\n})")])])]),a("p",[t._v("В итоге теперь, чтобы понять, как работает компонент, нам необходимо посмотреть лишь на последние 6 строк вместо первоначальных циклов и вложенных условий. Конечно, будь у нас больше времени, мы бы могли в разы улучшить и данный пример. Например использовать композицию, сделать переменные максимально неизменяемыми, полностью избавиться от условий и побочных эффектов, но это уже тема для другой статьи (:")])])}),[],!1,null,null,null);"function"==typeof s&&s(n);e.default=n.exports}}]);