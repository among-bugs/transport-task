const data = {
    "navs": {
        "wiki": {
            "kaz": "wiki",
            "rus": "wiki",
            "eng": "wiki"
        },
        "calculate": {
            "kaz": "калькулятор",
            "rus": "калькулятор",
            "eng": "calculator"
        },
        "results": {
            "kaz": "нәтижелер",
            "rus": "результаты",
            "eng": "results"
        },
        "about-app": {
            "kaz": "бағдарлама туралы",
            "rus": "о программе",
            "eng": "about"
        },
        "change-language": {
            "kaz": "тілді ауыстыру",
            "rus": "изменить язык",
            "eng": "change the language"
        }
    },
    "main": {
        "heading": {
            "kaz": "Транспорттық есептер",
            "rus": "Транспортные задачи",
            "eng": "Transport tasks"
        },
        "paragraphs": {
            "head-content": {
                "kaz": [
                    "Транспорттық есептер» (ТК) ұғымы жалпы математикалық модель бойынша көліктік сипаттағы және басқа көлікке қатысты мәселелердің ауқымын қамтиды. Олардың ортақтығы m жеткізушілер A1 , A2 ,..., Am (өндірушілер) иелігіндегі ресурстарды осы ресурстардың B1 , B2 ,..., Bn n тұтынушыларына бөлу болып табылады.",
                    "Біртекті жүкті жеткізуші m Ai (i = 1, m) және n тұтынушы B j ( j = 1, n) бар. i-ші жеткізушінің қорларын ai, j-ші тұтынушының сұранысын - bj, i-ші жеткізушіден j-ші тұтынушыға жүк бірлігін тасымалдау құнын - cij (i = 1) деп белгілейміз. , m;j = 1, n) (тасымалдау тарифтері) . Сызықтық бағдарламалаудың көлік мәселесінің шешімі жеткізушілерден тұтынушыларға қажетті жүк көлемін жеткізу және сонымен бірге тасымалдау шығындарының минималдылығын қамтамасыз ету болып табылады.",
                    ""

                ],
                "rus": [
                    "Понятие «транспортная задача» (ТЗ) охватывает круг задач транспортного характера и других, связанных с транспортными общей математической моделью. Общим для них является распределение ресурсов, находящихся у m поставщиков A1 , A2 ,..., Am (производителей), по n потребителям B1 , B2 ,..., Bn этих ресурсов.",
                    "Имеется m поставщиков однородного груза Ai (i = 1, m) и n потребителей B j ( j = 1, n) . Запасы i-го поставщика обозначим ai,спрос j-го потребителя — bj, затраты на перевозку единицы груза от i-го поставщика до j-го потребителя — сij (i = 1, m; j = 1, n) (тарифы перевозки). Решение транспортной задачи линейного программирования состоит в том, чтобы доставить необходимое количество груза от поставщиков к потребителям и обеспечить при этом минимум затрат на транспортировку.",
                    "Общая постановка транспортной задачи заключается в определении оптимального плана перевозок некоторого однородного груза из пунктов отправления A1, A2,..., Am в пункты назначения B1, B2,..., Bn. Критерий оптимальности берется минимальная стоимость перевозки или минимальное время доставки груза.",
                    "Рассмотрим транспортную задачу, где в качестве критерия оптимальности взята минимальная стоимость перевозок всего груза. Обозначим через Сij тарифы перевозки единицы груза из пункта отправления i в пункт назначения j. Обозначим через Ai запасы груза i-м пункте отправления, а через Bj потребности груза j-м пункте назначения, а через Xj количество единиц груза переводимого из пункта отправления i в пункт назначения j.",
                    "Транспортная задача линейного программирования относится к перечню классических задач, решаемых в практике деятельности людей. Эта задача методами классической математики не решается. В задаче необходимо отыскивать экстремум целевой функции. В задаче целевая функция – линейная. Ограничения на переменные (их может быть очень много) описываются также линейными зависимостями. Казалось бы чего проще. Но как раз ограничения и порождают трудности, связанные не просто с поиском max и min при отсутствии ограничений, а с необходимостью учета таких ограничений. Искать требуется не просто экстремум, а условный экстремум. Методы решения задачи позволяют учитывать особенности структуры задачи и даже отказаться от симплексного метода решения в чистом виде.",
                    "Для классической транспортной задачи выделяют два типа задач: критерий стоимости (достижение минимума затрат на перевозку) или расстояний и критерий времени (затрачивается минимум времени на перевозку). Под названием транспортная задача, определяется широкий круг задач с единой математической моделью, эти задачи относятся к задачам линейного программирования и могут быть решены оптимальным методом. Однако, спец.метод решения транспортной задачи позволяет существенно упростить её решение, поскольку транспортная задача разрабатывалась для минимизации стоимости перевозок."
                ],
                "eng": [

                ]
            }
        },
        "buttons": {
            "northwest-corner-method": {
                "kaz": "Солтүстік-батыс бұрыш әдісі",
                "rus": "Метод северо-западного угла",
                "eng": "Northwest corner method"
            },
            "minimum-element-method": {
                "kaz": "Минималды элемент әдісі",
                "rus": "Метод минимального элемента",
                "eng": "Minimum element method"
            },
            "maximum-element-method": {
                "kaz": "Фогель әдісі",
                "rus": "Метод Фогеля",
                "eng": "Fogel method"
            },
            "potential-method": {
                "kaz": "Потенциалдар әдісі",
                "rus": "Метод потенциалов",
                "eng": "Potential method"
            }
        }
    },
    "methods": {
        "northwest-corner-method": {
            "heading": {
                "kaz": "Солтүстік-батыс бұрыш әдісі",
                "rus": "Метод северо-западного угла",
                "eng": "Northwest corner method"
            },
            "paragraphs": {
                "kaz": [
                    "Транспорттық есептер» (ТК) ұғымы жалпы математикалық модель бойынша көліктік сипаттағы және басқа көлікке қатысты мәселелердің ауқымын қамтиды. Олардың ортақтығы m жеткізушілер A1 , A2 ,..., Am (өндірушілер) иелігіндегі ресурстарды осы ресурстардың B1 , B2 ,..., Bn n тұтынушыларына бөлу болып табылады.",
                    "Біртекті жүкті жеткізуші m Ai (i = 1, m) және n тұтынушы B j ( j = 1, n) бар. i-ші жеткізушінің қорларын ai, j-ші тұтынушының сұранысын - bj, i-ші жеткізушіден j-ші тұтынушыға жүк бірлігін тасымалдау құнын - cij (i = 1) деп белгілейміз. , m;j = 1, n) (тасымалдау тарифтері) . Сызықтық бағдарламалаудың көлік мәселесінің шешімі жеткізушілерден тұтынушыларға қажетті жүк көлемін жеткізу және сонымен бірге тасымалдау шығындарының минималдылығын қамтамасыз ету болып табылады.",
                    "Бұл әдіс бойынша келесі жеткізушінің қорлары толық таусылғанша келесі тұтынушылардың сұраныстарын қанағаттандыру үшін пайдаланылады, содан кейін келесі жеткізушінің қорлары саны бойынша пайдаланылады.",
                    "Тасымалдау тапсырмасының кестесін толтыру жоғарғы сол жақ бұрыштан басталып, бір типті бірнеше қадамдардан тұрады. Әрбір қадамда келесі жеткізушінің қорлары мен келесі тұтынушының сұраныстары негізінде тек бір ұяшық толтырылады және сәйкесінше бір жеткізуші немесе тұтынушы қараудан шығарылады. Бұл ретте кестеге нөлдік жөнелтілімдер толтырылатын ұяшыққа (i, j) түскен жағдайда ғана енгізу әдеттегідей, яғни. кестеге тек негізгі нөлдер енгізіледі, нөлдік тасымалдаулары бар қалған ұяшықтар бос қалады.",
                    "Қателерді болдырмау үшін бастапқы эталондық шешімді құрастырғаннан кейін, басып алынған ұяшықтар саны m + n-1 тең екенін және осы ұяшықтарға сәйкес шарт векторларының сызықтық тәуелсіз екендігін тексеру қажет.",
                    "Солтүстік-батыс бұрыштық әдіс тасымалдау құнын ескермейтінін есте ұстаған жөн, сондықтан осы әдіспен салынған анықтамалық шешім оңтайлы емес болуы мүмкін."
                ],
                "rus": [
                    "Понятие «транспортная задача» (ТЗ) охватывает круг задач транспортного характера и других, связанных с транспортными общей математической моделью. Общим для них является распределение ресурсов, находящихся у m поставщиков A1 , A2 ,..., Am (производителей), по n потребителям B1 , B2 ,..., Bn этих ресурсов.",
                    "Имеется m поставщиков однородного груза Ai (i = 1, m) и n потребителей B j ( j = 1, n) . Запасы i-го поставщика обозначим ai,спрос j-го потребителя — bj, затраты на перевозку единицы груза от i-го поставщика до j-го потребителя — сij (i = 1, m; j = 1, n) (тарифы перевозки). Решение транспортной задачи линейного программирования состоит в том, чтобы доставить необходимое количество груза от поставщиков к потребителям и обеспечить при этом минимум затрат на транспортировку.",
                    "Согласно данному методу запасы очередного поставщика используются для обеспечения запросов очередных потребителей до тех пор, пока не будут исчерпаны полностью, после чего используется запасы следующего по номеру поставщика.",
                    "Заполнение таблицы транспортной задачи начинается с левого верхнего угла и состоит из ряда однотипных шагов. На каждом шаге, исходя из запасов очередного поставщика и запросов очередного потребителя, заполняется только одна клетка и соответственно исключается из рассмотрения один поставщик или потребитель. При этом нулевые перевозки принято заносить в таблицу только в том случае, когда они попадают в клетку (i,j), подлежащую заполнению, т.е. в таблицу заносятся только базисные нули , остальные клетки с нулевыми перевозками остаются пустыми.",
                    "Во избежание ошибок после построения начального опорного решения необходимо проверить, что число занятых клеток равно m+n-1 и векторы условий, соответствующие этим клеткам, линейно независимы.",
                    "Необходимо иметь в виду, что метод северо-западного угла не учитывает стоимость перевозок, поэтому, опорное решение, построенное по данному методу, может быть далеким от оптимального."
                ],
                "eng": [
                    "The concept of transport problem (TK) covers the range of problems of a transport nature and others related to transport by a general mathematical model. What they have in common is the distribution of resources held by m suppliers A1 , A2 ,..., Am (producers) over n consumers B1 , B2 ,..., Bn of these resources.",
                    "There are m suppliers of homogeneous cargo Ai (i = 1, m) and n consumers B j ( j = 1, n) . We denote the stocks of the i-th supplier as ai, the demand of the j-th consumer - bj, the cost of transporting a unit of cargo from the i-th supplier to the j-th consumer - сij (i = 1, m; j = 1, n) (transportation tariffs) . The solution of the transport problem of linear programming is to deliver the required amount of cargo from suppliers to consumers and at the same time ensure a minimum of transportation costs.",
                    "According to this method, the stocks of the next supplier are used to meet the demands of the next consumers until they are completely exhausted, after which the stocks of the next supplier by number are used.",
                    "Filling in the table of the transport task starts from the upper left corner and consists of a number of steps of the same type. At each step, based on the stocks of the next supplier and the requests of the next consumer, only one cell is filled in and, accordingly, one supplier or consumer is excluded from consideration. At the same time, it is customary to enter zero shipments in the table only if they fall into the cell (i, j) to be filled in, i.e. only basic zeros are entered in the table, the remaining cells with zero transportations remain empty.",
                    "To avoid errors, after constructing the initial reference solution, it is necessary to check that the number of occupied cells is equal to m + n-1 and the condition vectors corresponding to these cells are linearly independent.",
                    "It must be borne in mind that the northwest corner method does not take into account the cost of transportation, therefore, the reference solution built using this method may be far from optimal."
                ]
            },
            'img': {
                'kaz': 'img/northcornestmkaz.png',
                'rus': 'img/northcornestmrus.png',
                'eng': 'img/northcornestm.png'
            }
        },
        'minimum-element-method': {
            'heading': {
                "kaz": "Минималды элемент әдісі",
                "rus": "Метод минимального элемента",
                "eng": "Minimum element method"
            },
            'paragraph':  {
                'eng': [
                    "One of the methods for compiling a basic transportation plan in a transportation problem is called the “minimum element method”. Despite its simplicity, this method is still more effective than, for example, the Northwest Corner method. In addition, the minimum element method (least element method, minimum cost method) is clear and logical.",
                    "With this method, the cells with the lowest tariffs are filled in the transport table first, and then the cells with the highest tariffs. That is, we choose transportation with a minimum cost of cargo delivery. This is an obvious and logical move. But, paradoxically, it does not always lead to an optimal plan.",
                    "The key idea is as follows: we determine the cell of the transport table with the lowest value of the tariff for cargo transportation (if it turns out that there are several cells with the same and minimum tariffs, we select any of them). In this cell, we write out the maximum possible volume of cargo (Xij), which can be delivered from the warehouse corresponding to this cell to the corresponding plant.",
                    "The lowest cost is selected from the cost table and the smallest of the numbers is entered in the cell that corresponds to it.",
                    "Supplier rows are checked for a row with used inventory and customer columns for a column whose requirements are fully satisfied. Such columns and rows are not considered further.",
                    "If not all consumers are satisfied and not all suppliers have used up the goods, return to step 1, otherwise the problem is solved."
                ],
                'rus': [
                    "Один из методов составления опорного плана перевозок в транспортной задаче называется «методом минимального элемента». Отличаясь простотой, данный метод все же эффективнее чем, к примеру, метод Северо-западного угла. Кроме того, метод минимального элемента («метод наименьшего элемента», «метод минимальной стоимости») понятен и логичен",
                    "При этом методе в транспортной таблице сначала заполняются ячейки с наименьшими тарифами, а потом уже ячейки с большими тарифами. То есть мы выбираем перевозки с минимальной стоимостью доставки груза. Это очевидный и логичный ход. Но, как ни парадоксально, он не всегда приводит к оптимальному плану.",
                    "Ключевая идея заключается в следующем: определяем ячейку транспортной таблицы с наименьшим значением тарифа на перевозку груза (если окажется, что есть несколько ячеек с одинаковыми и минимальными тарифами — выбираем любую из них). В эту ячейку выписываем максимально возможный объем груза (Xij), который можно доставить с соответствующего этой ячейке склада на соответствующий завод.",
                    "Из таблицы стоимостей выбирают наименьшую стоимость и в клетку, которая ей соответствует, вписывают меньшее из чисел.",
                    "Проверяются строки поставщиков на наличии строки с израсходованными запасами и столбцы потребителей на наличие столбца, потребности которого полностью удовлетворены. Такие столбцы и строки далее не рассматриваются.",
                    "Если не все потребители удовлетворены и не все поставщики израсходовали товары, возврат к п.1, в противном случае задача решена."
                ],
                'kaz': [
                    "Тасымалдау мәселесінде негізгі тасымалдау жоспарын құрастыру әдістерінің бірі минималды элемент әдісі деп аталады. Қарапайымдылығына қарамастан, бұл әдіс, мысалы, Солтүстік-Батыс бұрыш әдісіне қарағанда әлі де тиімдірек. Сонымен қатар, минималды элемент әдіс (ең аз элемент әдісі, ең аз шығын әдісі) түсінікті және қисынды.",
                    "Бұл әдіспен тасымалдау кестесінде алдымен тарифтері ең төмен ұяшықтар толтырылады, содан кейін тарифтері жоғары ұяшықтар толтырылады. Яғни, біз жүкті жеткізудің ең төменгі құны бар тасымалдауды таңдаймыз. Бұл анық әрі қисынды қадам. Бірақ, парадоксальды түрде, бұл әрқашан оңтайлы жоспарға әкелмейді",
                    "Негізгі идея келесідей: жүкті тасымалдауға арналған тарифтің ең төменгі мәні бар көлік кестесінің ұяшығын анықтаймыз (егер бірдей және ең төменгі тарифтері бар бірнеше ұяшықтар бар екені анықталса, олардың кез келгенін таңдаймыз). Бұл ұяшықта біз осы ұяшыққа сәйкес қоймадан тиісті зауытқа жеткізуге болатын жүктің максималды мүмкін көлемін (Xij) жазамыз",
                    "Шығындар кестесінен ең төменгі құн таңдалады және оған сәйкес ұяшыққа ең кіші сандар енгізіледі",
                    "Жеткізушілер жолдары пайдаланылған түгендеу бар жол үшін және талаптары толығымен қанағаттандырылған баған үшін тұтынушы бағандары үшін тексеріледі. Мұндай бағандар мен жолдар бұдан әрі қарастырылмайды.",
                    "Егер барлық тұтынушылар қанағаттандырылмаса және барлық жеткізушілер тауарларды пайдаланбаған болса, 1-қадамға оралыңыз, әйтпесе мәселе шешілді"
                    
                ]
            },
            'img': {
                'kaz': 'img/minimumelementmkaz.png',
                'rus': 'img/minimumelementmrus.png',
                'eng': 'img/minimumelementm.png'
            }
        },
        'maximum-element-method': {
            'heading': {
                "kaz": "Фогель әдісі",
                "rus": "Метод Фогеля",
                "eng": "Fogel method"
            },
            'paragraph':  {
                'kaz': [
                    "Максималды элемент әдісі (MME) әдетте, егер ол дөңес математикалық бағдарламалау есебіне келтірілсе, қосымша (жалпы) тиімділік көрсеткішімен ресурстарды бөлу мәселесін шешу үшін қолданылады.",
                    "Мұнда мақсат функциясының дөңестігі мен рұқсат етілген шешімдер жиынтығының талабы өте маңызды, әдіс идеясы осыған негізделген. Екінші жағынан, MME ресурстар дискретті бірліктерде және көбінесе бүтін сандармен есептелетін есептерді шешуге мүмкіндік береді. Негізінде, MME үздіксіз мәселені де шеше алады, бірақ шешім қабылдау процесі шексіз болады, немесе нәтиженің дәлдігінің төмендеуіне шыдауға тура келеді.",
                    "Әскери істегі есептің математикалық тұжырымына көшейік. Біртекті жойылу объектілерінің (ОД) кейбір М жиыны берілсін. Әрбір СП ойыс қосындысының бөлінетін тиімді тығыздық функциясымен сипатталады fj(rj), , rj j-ші СП-ге бөлінген ресурс болып табылады. Бүтін шарт rj-ге қойылғандықтан, fj(rj) – қарсыласқа бөлінетін зақымдану функциясымен қоршалған, бір-біріне параллель дискретті бүтін тік тікелей ішінара зақымдау функцияларының (PFU) жиынтығымен құрылған «тор» функциясы ( ОП-ның барлық жиынтығы M) есептелген жалпы тиімділікпен",
                    "Бұл жағдайда М ОП N арасында біртекті қырып-жоятын қару-жарақ ресурстарының бірліктері (ҚҚ) арақатынасы объективті функция түрінде орындалатындай етіп бөлу қажет.",
                    "Мақсатты бөлу мәселелеріндегі MME мәні мынада: бір сатылы статикалық есеп көп сатылыға дейін азаяды және, әдетте, оңтайлы иілу нүктесі емес, қажетті тиімділік мәні болып табылады, оған жеткенде тарату процесі аяқталады. Бастапқы нүкте ретінде «нөлдік» күй қабылданады, ОС арасында СП біркелкі үлестірілмеген кезде, содан кейін бөлу процесінің әрбір қадамында жалпы жеңіліс тиімділігінің өсімі келесі теңдеу бойынша анықталады."
                ],
                'rus': [
                    "Метод максимального элемента (ММЭ) обычно используется для решения задачи распределения ресурсов при аддитивном (суммарном) показателе  эффективности, если она сводится к выпуклой задаче математического программирования.",
                    "Требование выпуклости целевой функции и множества допустимых решений здесь весьма существенно, на нем основывается идея метода. С другой стороны, ММЭ позволяет решать только такие задачи, в которых ресурсы исчисляются дискретными единицами и чаще всего – в целых числах. В принципе ММЭ может решаться и непрерывная задача, но либо процесс принятия решения становится бесконечным, либо приходится мириться с уменьшением точности результата.",
                    "Обратимся к математической постановке задачи в военном деле. Пусть дано некоторое множество М однородных объектов поражения (ОП). Каждый ОП характеризуется вогнутой аддитивной сепарабельной функцией плотности эффективности fj(rj), , с rj – ресурсом, выделенным j-му ОП. Поскольку на rj наложено условие целочисленности, то fj(rj) – «решетчатая» функция, образуемая совокупностью дискретных целочисленных вертикальных прямых параллельных друг другу частных функций ущерба (ЧФУ), огибаемых сепарабельной функцией ущерба противнику (всего множества ОП М) с общей эффективностью, вычисляемой",
                    "При этом необходимо распределить между М ОП N единиц однородных ресурсов средств поражения (СП) так, чтобы выполнялось соотношение в виде целевой функции",
                    "Суть ММЭ в задачах целераспределения заключается в том, что статическая одношаговая задача сводится к многошаговой и, как правило, оптимумом является не точка перегиба, а требуемое значение эффективности, при достижении которой процесс распределения заканчивается. В качестве исходной точки принимается «нулевое» состояние, когда не было ни одного распределения СП между ОП, а далее на каждом шаге процесса распределения определяется приращение общей эффективности поражения по следующему уравнению"
                ],
                'eng': [
                    "The maximum element method (MME) is usually used to solve the resource allocation problem with an additive (total) efficiency indicator, if it is reduced to a convex mathematical programming problem.",
                    "The requirement of convexity of the objective function and the set of admissible solutions is very essential here; the idea of the method is based on it. On the other hand, the MME allows solving only such problems in which resources are calculated in discrete units and, most often, in integers. In principle, the MME can also solve a continuous problem, but either the decision-making process becomes infinite, or one has to put up with a decrease in the accuracy of the result.",
                    "Let us turn to the mathematical formulation of the problem in military affairs. Let some set M of homogeneous objects of destruction (OD) be given. Each SP is characterized by a concave additive separable efficiency density function fj(rj), , with rj being the resource allocated to the jth SP. Since the integer condition is imposed on rj, then fj(rj) is a “lattice” function formed by a set of discrete integer vertical direct partial damage functions (PFU) parallel to each other, enveloped by a separable damage function to the enemy (the entire set of OP M) with a total efficiency calculated",
                    "In this case, it is necessary to distribute between M OP N units of homogeneous resources of weapons of destruction (SP) so that the ratio is fulfilled in the form of an objective function",
                    "The essence of MME in target distribution problems is that a static one-step problem is reduced to a multi-step one and, as a rule, the optimum is not the inflection point, but the required efficiency value, upon reaching which the distribution process ends. The “zero” state is taken as the starting point, when there was not a single distribution of SP between the OP, and then at each step of the distribution process, the increment of the overall defeat efficiency is determined according to the following equation"
                ]
            },
            'img': {
                'kaz': 'img/fogelmkaz.png',
                'rus': 'img/fogelmrus.png',
                'eng': 'img/fogelm.png'
            }
        },
        'potential-method': {
            'heading': {
                "kaz": "Потенциалдар әдісі",
                "rus": "Метод потенциалов",
                "eng": "Potential method"
            },
            'paragraph':  {
                'kaz': [],
                'rus': [
                    "С помощью рассмотренных методов построения первоначального опорного плана можно получить вырожденный или невырожденный опор­ный план. Построенный план транспортной задачи как задачи линейного программирования можно было бы довести до оптимального с помощью симплексного метода. Однако из-за громоздкости симплексных таблиц, со­держащих тп неизвестных, и большого объема вычислительных работ для получения оптимального плана используют более простые методы. Наиболее часто применяются метод потенциалов (модифицированный распредели­тельный метод) и метод дифференциальных рент.",
                    "Метод потенциалов. Этот первый точный метод решения транспортной задачи предложен в 1949 году Кантаровичем А. В. И Гавуриным М. К. по существу он является детализацией метода последовательного улучшения плана применительно к транспортной задаче. Однако в начале он был изложен вне связи с общими методами линейного программирования. Несколько позднее аналогичный алгоритм был разработан Данциом, который исходил из общей идеи линейного программирования. В американской литературе принято называть модифицированным распределительным методом. Метод потенциалов позволяет определить отправляясь от некоторого опорного плана перевозок построить решение транспортной задачи за конечное число шагов (итераций). ",
                    "Общий принцип определения оптимального пла­на транспортной задачи этим методом аналогичен принципу решения задачи линейного программирования симплексным методом, а именно: сначала на­ходят опорный план транспортной задачи, а затем его последовательно улучшают до получения оптимального плана.",
                    "Циклом в таблице условий транспортной задачи, называется ломаная линия, вершины которой расположены в занятых клетках таблицы, а звенья - вдоль строк и столбцов, причем в каждой вершине цикла встречается ровно два звена, одно из которых находится в строке, а другое - в столбце. Если ломанная линия, образующая цикл, пересекается, то точки самопересечения не являются вершинами.",
                    "Метод потенциалов является модификацией симплекс-метода решения задачи линейного программирования применительно к транспортной задаче. Он позволяет, отправляясь от некоторого допустимого решения, получить оптимальное решение за конечное число итераций."
                ],
                'eng': []
            },
            'img': {
                'kaz': 'img/potentialmkaz.png',
                'rus': 'img/potentialmrus.png',
                'eng': 'img/potentialm.png'
            },
            'content-paragraph': {
                'kaz': 'Ең алдымен сізге тұтынушылар мен қорлар санын енгізіп алу керек. Содан соң шыққан кестелерге керекті есеп шарты бойынша мәндерді енгізу керек. Мәндерді енгізіп болған соң бастапқы есептеу жоспарын анықтау әдісін таңдап алу керек. Керек әдісті таңдаған соң бірнеше секунд есептелу жүргізіледі. Әр есептеу әдісінің шешімінің соңында "Потенциал әдісі" болады. Төмендегі нұсқау видеосын көре аласыздар.',
                'rus': 'В первую очередь нужно ввести количество клиентов и ресурсов. Затем внесите в полученные таблицы значения в соответствии с требуемыми условиями отчетности. После ввода значений необходимо выбрать способ определения исходного плана расчета. После выбора нужного метода расчет выполняется в течение нескольких секунд. В конце решения каждого вычислительного метода находится "Метод потенциалов". Видео-инструкцию вы можете посмотреть ниже.',
                'eng': 'First of all, you need to enter the number of customers and resources. Then enter the values in the resulting tables according to the required reporting conditions. After entering the values, you must select the method for determining the initial calculation plan. After selecting the desired method, the calculation is performed for a few seconds. At the end of each computational method solution is the "Potential Method". You can watch the instruction video below.'
            }
        }
    },
    "methods-buttons": {
        "kaz": "Калькуляторға көшу",
        "rus": "Переключиться на калькулятор",
        "eng": "Switch to calculator"
    },
    "calculator-modal": {
        "modal-title": {
            "kaz": "Енгізу терезесі",
            "rus": "Окно ввода",
            "eng": "Input window"
        },
        "labels": {
            "suppliers": {
                "kaz": "Жеткізушілер",
                "rus": "Поставщики",
                "eng": "Suppliers"
            },
            "consumers": {
                "kaz": "Тұтынушылар",
                "rus": "Потребители",
                "eng": "Consumers"
            }
        },
        "inputs": {
            "suppliers": {
                "kaz": "Жеткізушілер санын енгізіңіз...",
                "rus": "Введите количество поставщиков...",
                "eng": "Enter the number of suppliers..."
            },
            "consumers": {
                "kaz": "Тұтынушылар санын енгізіңіз...",
                "rus": "Введите количество потребителей...",
                "eng": "Enter the number of customers..."
            }
        },
        "buttons": {
            "submit": {
                "kaz": "Орындау",
                "rus": "Выполнить",
                "eng": "Execute"
            },
            "cancel": {
                "kaz": "Қайтару",
                "rus": "Отменить",
                "eng": "Cancel"
            }
        }
    },
    "calculator-page": {
        "heading": {
            "kaz": "Калькулятор",
            "rus": "Калькулятор",
            "eng": "Calculator"
        },
        "paragraph": {
            "kaz": "Бұл бөлімде сіз есептеу жүргізе аласыздар. Ең алдымен есептеу мәндерін енгізіп аласыз. Содан соң керек әдісті таңдау арқылы есеп мәнін көре аласыз",
            "rus": "В этом разделе вы можете производить расчеты. Вы можете сначала ввести расчетные значения. Затем вы можете просмотреть значение отчета, выбрав нужный метод",
            "eng": "In this section you can make calculations. You can enter the calculation values first. You can then view the report value by selecting the desired method"
        },
        "get-values-button": {
            "kaz": "Мәндерді енгізу",
            "rus": "Ввести значение",
            "eng": "Enter values"
        },
        "firstble-heading": {
            "kaz": "Бірінші сіз жоғарыдағы батырманы басуыңыз керек",
            "rus": "Сначала нужно нажать кнопку выше",
            "eng": "First you need to click the button above"
        },
        "consumer-table-heading": {
            "kaz": "Тұтынушылар",
            "rus": "Потребители",
            "eng": "Consumers"
        },
        "supplier-table-heading": {
            "kaz": "Жеткізушілер",
            "rus": "Поставщики",
            "eng": "Suppliers"
        },
        "requirement-heading": {
            "kaz": "Қажеттілік",
            "rus": "Потребность",
            "eng": "Requirement"
        },
        "supply-heading": {
            "kaz": "Қор",
            "rus": "Запас",
            "eng": "Supply"
        },
        "balance": {
            "sup=req": {
                "kaz": "Бұл дұрыс тепе-теңдікпен орындалатын тапсырма",
                "rus": "Эта задача с правильным балансом",
                "eng": "This is a task with the right balance"
            },
            "sup<req": {
                "kaz": "Бұл дұрыс теңгерімсіз тапсырма. Қорлардың саны талаптар санынан аз",
                "rus": "Эта задача с неправильным балансом. Количество запасов меньше чем количество потребности",
                "eng": "This is a task with the wrong balance. The quantity of stocks is less than the quantity of requirements"
            },
            "sup>req": {
                "kaz": "Бұл дұрыс теңгерімсіз тапсырма. Сұраныс саны қор санынан аз",
                "rus": "Эта задача с неправильным балансом. Количество потребности меньше чем количество запасов",
                "eng": "This is a task with the wrong balance. Demand quantity is less than stock quantity"
            }
        },
        'update-btn': {
            'kaz': 'Жаңарту',
            'rus': 'Обновить',
            'eng': 'Update'
        },
        'finding-the-first-baseline': {
            'kaz': 'Бірінші негізді табу',
            'rus': 'Нахождение первого опорного плана',
            'eng': 'Finding the first baseline'
        },
        'baseline-improvement': {
            'kaz': 'Базалық жоспарды жақсарту',
            'rus': 'Улучшение опорного плана',
            'eng': 'Baseline Improvement'
        },
        'after-method-paragraph': {
            'kaz': 'A<sub>i</sub>>B<sub>i</sub>. Сондықтан (A<sub>i</sub>, B<sub>i</sub>) ұяшыққа min(A<sub>i</sub>, B<sub>i</sub>) санын орналастырамыз. B<sub>i</sub> тармағының қажеттіліктері толығымен қанағаттандырылады. Сондықтан, біз B<sub>i</sub> бағанын қараудан шығарамыз және A<sub>i</sub> нүктесінің қорларын қарастырамыз.',
            'rus': 'A<sub>i</sub>>B<sub>i</sub>. Следовательно в клетку (A<sub>i</sub>, B<sub>i</sub>) помещаем число min(A<sub>i</sub>, B<sub>i</sub>). Потребности пункта B<sub>i</sub> полностью удовлетворены. Поэтому исключаем из рассмотрения столбец B<sub>i</sub> и будем считать запасы пункта A<sub>i</sub>.',
            'eng': 'A<sub>i</sub>>B<sub>i</sub>. Therefore, in the cell (A<sub>i</sub>, B<sub>i</sub>) we place the number min(A<sub>i</sub>, B<sub>i</sub>). The needs of point B<sub>i</sub> are fully satisfied. Therefore, we exclude column B<sub>i</sub> from consideration and consider the reserves of point A<sub>i</sub>.'
        },
        'after-minimum-paragraph': {
            'kaz': 'Ең төменгі тариф ұяшықта болады (A<sub>i</sub>, B<sub>i</sub>). Сондықтан біз бұл ұяшықты толтырамыз. <br> A<sub>i</sub>B<sub>i</sub>. Сондықтан ұяшыққа санды орналастырамыз (A<sub>i</sub>, B<sub>i</sub>). B<sub>i</sub> тармағының қажеттіліктері толығымен қанағаттандырылды. Сондықтан B<sub>i</sub> бағанын қараудан алып тастаймыз және A<sub>i</sub> тармағының қорларын қарастырамыз.',
            'rus': 'Минимальный тариф находится в клетке (A<sub>i</sub>, B<sub>i</sub>). Поэтому заполняем эту клетку. <br> A<sub>i</sub>>B<sub>i</sub>. Следовательно в клетку (A<sub>i</sub>, B<sub>i</sub>) помещаем число. Потребности пункта B<sub>i</sub> полностью удовлетворены. Поэтому исключаем из рассмотрения столбец B<sub>i</sub> и будем считать запасы пункта A<sub>i</sub>.',
            'eng': 'The minimum fare is in the cell (A<sub>i</sub>, B<sub>i</sub>). Therefore, we fill in this cell. <br> A<sub>i</sub>>B<sub>i</sub>. Therefore, we place a number in the cell (A<sub>i</sub>, B<sub>i</sub>). The needs of item B<sub>i</sub> are fully satisfied. Therefore, we exclude column B<sub>i</sub> from consideration and consider the stocks of point A<sub>i</sub>.'
        },
        'after-maximum-paragraph': {
            'kaz': 'Әрбір A<sub>i</sub> жолы үшін біз осы жолда жазылған екі ең төменгі мөлшерлеменің арасындағы айырмашылықты табамыз және оларды сәйкес қосымша бағанға орналастырамыз.<br>Әрбір В<sub>i</sub> бағанына біз осы бағанда жазылған екі ең төменгі тарифтер арасындағы айырмашылықты табыңыз және оларды сәйкес қосымша жолға қойыңыз.<br> A<sub>i</sub>≤B<sub>i</sub>. Сондықтан ұяшыққа санды қоямыз. A<sub>i</sub> тармағы толығымен таусылды. Сондықтан, біз A<sub>i</sub> жолын қарастырудан шығарамыз және B<sub>i</sub> тармағының қажеттіліктерін қарастырамыз.',
            'rus': 'Для каждой строки A<sub>i</sub> найдем разности между двумя минимальными тарифами, записанными в данной строке и поместим их в соответствующем дополнительном столбце.<br>Для каждого столбца B<sub>i</sub> найдем разности между двумя минимальными тарифами, записанными в данном столбце и поместим их в соответствующей дополнительной строке.<br> A<sub>i</sub>≤B<sub>i</sub>. Следовательно в клетку помещаем число. Запасы пункта A<sub>i</sub> полностью исчерпаны. Поэтому исключаем из рассмотрения строку A<sub>i</sub> и будем считать потребности пункта B<sub>i</sub>',
            'eng': 'For each row A<sub>i</sub> we find the differences between the two minimum rates recorded in this row and put them in the corresponding additional column.<br>For each column B<sub>i</sub> we find the differences between the two minimum tariffs recorded in this column and put them in the corresponding additional line.<br> A<sub>i</sub>≤B<sub>i</sub>. Therefore, we put a number in the cell. Item A<sub>i</sub> is completely exhausted. Therefore, we exclude the line A<sub>i</sub> from consideration and consider the needs of item B<sub>i</sub>'
        },
        'calculating-x': {
            'kaz': 'Біз тапқан оңтайлы жоспарға сәйкес келетін жеткізудің жалпы құнын (S) формуланы пайдаланып есептейік:',
            'rus': 'Вычислим общие затраты на перевозку груза (S), соответствующие найденному нами оптимальному плану, по формуле:',
            'eng': `Let's calculate the total cost of shipping (S), corresponding to the optimal plan we found, using the formula:`
        },
        'calculating-last-tarif': {
            'kaz': 'Яғни, жүк тасымалдау көлемінің мәндерін сәйкес тарифтерге көбейту керек.',
            'rus': 'То есть нужно перемножить значения объемов грузоперевозок на соответствующие им тарифы.',
            'eng': 'That is, you need to multiply the values of the volume of cargo transportation by the corresponding tariffs.'
        },
        'calculating-last-tarif-result': {
            'kaz': 'Нәтижесінде оңтайлы шешім үшін барлық өнімді жөнелтудің жалпы құны',
            'rus': 'В результате общие затраты на доставку всей продукции для оптимального решения составляют ',
            'eng': 'As a result, the total cost of shipping all products for the optimal solution is'
        },
        'number-of-departure-points': {
            'kaz': 'Жөнелтулер саны',
            'rus': 'Число пунктов отправления',
            'eng': 'Number of departure points'
        },
        'number-of-destinations': {
            'kaz': 'Баратын орындар саны',
            'rus': 'Число пунктов назначения',
            'eng': 'Number of destinations'
        },
        'numbnumbercalc-first': {
            'kaz': `Анықтамалық тапсырма жоспары `,
            'rus': `Oпорный план задачи определяется числами, стоящими в `,
            'eng': `The reference task plan is defined by the numbers in `
        },
        'numbnumbercalc-second': {
            'kaz': `толтырылған кесте ұяшықтары. <br> Әр жөнелту пунктінен барлық межелі пункттерге жүк бірлігін тасымалдау тарифтері матрицамен берілген.`,
            'rus': `заполненых клетках таблицы. <br> Тарифы перевозок единицы груза из каждого пункта отправления во все пункты назначения задаются матрицей`,
            'eng': `filled table cells. <br> The tariffs for transporting a unit of cargo from each point of departure to all points of destination are given by the matrix`
        },
        'availability-of-cargo-from-suppliers-is-equal-to': {
            'kaz': 'Жабдықтаушылардан жүктің болуы тең',
            'rus': 'Наличие груза у поставщиков равно',
            'eng': 'Availability of cargo from suppliers is equal to'
        },
        'the-total-need-for-cargo-at-destinations-is-equal-to': {
            'kaz': 'Межелі пункттердегі жүктің жалпы қажеттілігі тең',
            'rus': 'Общая потребность в грузе в пунктах назначения равна',
            'eng': 'The total need for cargo at destinations is equal to'
        },
        'method-potential-stage-numb': {
            'kaz': 'Потенциалдар әдісі. Кезең -',
            'rus': 'Метод потенциалов. Этап - ',
            'eng': 'Method of potentials. Stage -'
        },
        'results-page-paragraph': {
            'kaz': 'Бұл бөлімде керекті әдістер арқылы шығарылған есептеулердің нәтижесін жинай аласыздар. Төменді батырмаларды басып сақтау терезесінен құжаттың сақталу жолын таңдай аласыздар.',
            'rus': 'В этом разделе вы можете собрать результаты расчетов, выполненных с использованием необходимых методов. Вы можете выбрать способ сохранения документа в окне кнопки сохранения ниже.',
            'eng': 'In this section you can collect the results of calculations performed using the necessary methods. You can select how to save the document in the save button window below.'
        }
    },
    'about-page': {
        'header': {
            'kaz': 'Бағдарлама туралы',
            'rus': 'О программе',
            'eng': 'About program'
        },
        'developer': {
            'kaz': 'Бағдарламаны әзірлеген:',
            'rus': 'Разработала программу:',
            'eng': 'Developer:'
        }
    }
}
