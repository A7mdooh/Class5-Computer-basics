const quizData = [
    {
        question: "ما هو نوع المكون (Android)؟",
        answers: ["مكون مادي", "تطبيق", "نظام تشغيل", "معالج الكلمات"],
        correctAnswer: 2,
    },
    {
        question: "ما هو نوع المكون (لوحة المفاتيح)؟",
        answers: ["مكون مادي", "تطبيق", "نظام تشغيل", "ذاكرة عشوائية"],
        correctAnswer: 0,
    },
    {
        question: "ما هو نوع المكون (Word)؟",
        answers: ["نظام تشغيل", "مكون مادي", "ذاكرة الوصول العشوائي", "تطبيق"],
        correctAnswer: 3,
    },
    {
        question: "ما هو نوع المكون (Windows 11)؟",
        answers: ["مكون مادي", "تطبيق", "نظام تشغيل", "معالج الكلمات"],
        correctAnswer: 2,
    },
    {
        question: "ما هو نوع المكون (Scratch)؟",
        answers: ["نظام تشغيل", "تطبيق", "مكون مادي", "ذاكرة عشوائية"],
        correctAnswer: 1,
    },
    {
        question: "ما هو نوع المكون (Google Chrome)؟",
        answers: ["نظام تشغيل", "تطبيق", "مكون مادي", "معالج الكلمات"],
        correctAnswer: 1,
    },
    {
        question: "ما هو جهاز التخزين المناسب لتخزين الملفات كبيرة الحجم بشكل دائم؟",
        answers: ["محرك الأقراص الصلب", "الذاكرة العشوائية (RAM)", "المعالج", "نظام التشغيل"],
        correctAnswer: 0,
    },
    {
        question: "ما هو جهاز التخزين المناسب لتخزين البيانات مؤقتاً أثناء تشغيل البرامج؟",
        answers: ["محرك الأقراص الصلب", "الذاكرة العشوائية (RAM)", "المعالج", "نظام التشغيل"],
        correctAnswer: 1,
    },
    {
        question: "عندما يتم إيقاف تشغيل الحاسوب الخاص بك، تفقد جميع البيانات المخزنة في:",
        answers: ["وحدة المعالجة المركزية", "محرك الأقراص الصلبة", "ذاكرة الوصول العشوائي", "اللوحة الأم"],
        correctAnswer: 2,
    },
    {
        question: "إذا كنت ترغب في تخزين كمية كبيرة من صورك وألعابك المفضلة، فإن المكون المناسب هو:",
        answers: ["ذاكرة الوصول العشوائي", "محرك القرص الصلب", "وحدة المعالجة المركزية", "اللوحة الأم"],
        correctAnswer: 1,
    },
    {
        question: "تعتبر سرعته ضرورية لكفاءة جهاز الحاسوب الخاص بك. ما هو هذا المكون؟",
        answers: ["وحدة المعالجة المركزية", "ذاكرة الوصول العشوائي", "اللوحة الأم", "محرك القرص الصلب"],
        correctAnswer: 0,
    },
    {
        question: "ما هو المكون الذي يتصل به جميع المكونات الأخرى في الحاسوب؟",
        answers: ["ذاكرة الوصول العشوائي", "اللوحة الأم", "محرك القرص الصلب", "وحدة المعالجة المركزية"],
        correctAnswer: 1,
    },
    {
        question: "تم تصميم الحاسوب المكتبي ليكون محمولاً بحيث يمكن حمله بسهولة. ما نوع هذا الحاسوب؟",
        answers: ["حاسوب محمول", "حاسوب مكتبي", "حاسوب لوحي", "حاسوب فائق"],
        correctAnswer: 0,
    },
    {
        question: "تقوم ذاكرة الوصول العشوائي بتخزين البيانات بشكل مؤقت حتى عند إيقاف تشغيل الحاسوب. هل هذا صحيح؟",
        answers: ["نعم", "لا", "أحياناً", "يعتمد على نوع الحاسوب"],
        correctAnswer: 1,
    },
    {
        question: "يحتوي القرص الصلب على سعة تخزين أكبر. ما هي الاستخدامات المناسبة لهذا المكون؟",
        answers: ["تخزين نظام التشغيل فقط", "تخزين الفيديو الرقمي", "تشغيل التطبيقات", "تشغيل البرامج"],
        correctAnswer: 1,
    },
    {
        question: "ما هو نظام التشغيل؟",
        answers: ["برمجيات مادية", "برمجيات تطبيقية", "أحد أنواع البرمجيات التي تدير المكونات المادية والتطبيقات في الحاسوب", "مكون مادي"],
        correctAnswer: 2,
    },
    {
        question: "ما هي فائدة وضع Sleep (سبات) في الحاسوب؟",
        answers: ["إغلاق الحاسوب نهائياً", "توفير الطاقة", "إغلاق جميع التطبيقات", "تشغيل الحاسوب بأقصى طاقة"],
        correctAnswer: 1,
    },
    {
        question: "ما هو نوع التخزين الذي تمتاز به الأقراص المضغوطة عن الذواكر الومضية USB؟",
        answers: ["سعة تخزين أكبر", "سرعة أعلى", "سهولة النقل", "إمكانية التخزين الدائم"],
        correctAnswer: 0,
    },
    {
        question: "متى يتم استخدام أمر Restart (إعادة التشغيل) في الحاسوب؟",
        answers: ["بعد إيقاف تشغيل الحاسوب تماماً", "لإغلاق البرامج فقط", "لإعادة تشغيل الحاسوب يدوياً", "لحفظ البيانات"],
        correctAnswer: 2,
    },
    {
        question: "ما هو الإجراء الذي يقلل من حجم الملفات أو المجلدات لتسهيل تخزينها أو مشاركتها؟",
        answers: ["البحث في Windows", "Compress to ZIP file", "Empty Recycle Bin", "Create shortcut"],
        correctAnswer: 1,
    },
    {
        question: "ما هو الإجراء الذي يزيل الملفات نهائياً من الحاسوب ويوفر المساحة؟",
        answers: ["Send to", "Create shortcut", "Empty Recycle Bin", "View"],
        correctAnswer: 2,
    },
    {
        question: "ما هو الإجراء الذي ينشئ رابطاً لملف أو مجلد في الموقع المحدد للوصول السريع؟",
        answers: ["Create shortcut", "Send to", "View", "Compress to ZIP file"],
        correctAnswer: 0,
    },
    {
        question: "ما هو الإجراء الذي ينقل الملفات إلى جهاز خارجي مثل الذاكرة الومضية USB؟",
        answers: ["Compress to ZIP file", "Send to", "Create shortcut", "View"],
        correctAnswer: 1,
    },
    {
        question: "ما هو الإجراء الذي يعرض طرقاً مختلفة لعرض الملفات مثل قائمة أو تفاصيل؟",
        answers: ["View", "Create shortcut", "Empty Recycle Bin", "Send to"],
        correctAnswer: 0,
    },
    {
        question: "ما هو الإجراء الذي يسهل العثور على الملفات أو المجلدات بسرعة عن طريق كتابة اسمها؟",
        answers: ["البحث في Windows", "Compress to ZIP file", "Empty Recycle Bin", "Send to"],
        correctAnswer: 0,
    },
    {
        question: "ما هو الإجراء الذي ينقل الملفات أو المجلدات عن طريق النقر مطولاً وسحب الملف؟",
        answers: ["Create shortcut", "View", "السحب والإفلات", "Send to"],
        correctAnswer: 2,
    },
    {
        question: "ما هو الإجراء الذي ينقل مجلداً إلى موقع جديد مع إمكانية حذف المجلد الأصلي؟",
        answers: ["ضغط المجلد", "تعديل خيارات View", "نسخ ولصق", "النقل"],
        correctAnswer: 3,
    },
    {
        question: "ما هو الإجراء الذي يسمح بإرسال ملف إلى الذاكرة الومضية USB؟",
        answers: ["إرسال إلى (Send to)", "ضغط المجلد", "عرض المجلد", "إخراج (Eject)"],
        correctAnswer: 0,
    },
    {
        question: "ما هو الإجراء الذي يؤدي إلى تقليل حجم المجلد ليسهل إرساله عبر الإنترنت؟",
        answers: ["النقل", "ضغط المجلد", "عرض المجلد", "نسخ ولصق"],
        correctAnswer: 1,
    },
    {
        question: "ما هو الإجراء الذي يتيح لك تغيير طريقة ظهور الملفات في مستكشف الملفات (File Explorer)؟",
        answers: ["ضغط المجلد", "إرسال إلى (Send to)", "تعديل خيارات View", "النقل"],
        correctAnswer: 2,
    },
    {
        question: "ما هي المعلومات التفصيلية التي يمكن عرضها حول الملفات مثل الحجم وتاريخ التعديل؟",
        answers: ["إعدادات الخصوصية", "عرض المجلد", "مستكشف الملفات", "تفاصيل الملفات (Details)"],
        correctAnswer: 3,
    },
    {
        question: "ما هو الإجراء الذي يجب اتخاذه قبل إزالة جهاز تخزين USB بأمان؟",
        answers: ["نسخ ولصق", "إخراج (Eject)", "تعديل خيارات View", "إرسال إلى (Send to)"],
        correctAnswer: 1,
    },
    {
        question: "ما هو البرنامج الذي يُستخدم لإدارة الملفات والمجلدات على نظام Windows؟",
        answers: ["مستكشف الملفات (File Explorer)", "مستعرض الإنترنت", "برنامج Excel", "محرر النصوص"],
        correctAnswer: 0,
    },
    {
        question: "ما هي إحدى المهام التي يمكنك تنفيذها باستخدام مستكشف الملفات؟",
        answers: ["إرسال البريد الإلكتروني", "تحرير الفيديو", "نقل الملفات إلى جهاز USB", "تصميم مواقع الويب"],
        correctAnswer: 2,
    },
    {
        question: "ما هي الخيارات التي يمكنك تعديلها في مستكشف الملفات لتغيير طريقة عرض الملفات؟",
        answers: ["عرض الملفات في شكل قائمة أو تفاصيل", "تعديل ألوان الملفات", "حذف البرامج المثبتة", "تغيير اللغة الافتراضية للنظام"],
        correctAnswer: 0,
    },
    {
        question: "ما هي الأداة التي تتيح لك إنشاء مجلد جديد داخل مستكشف الملفات؟",
        answers: ["زر إنشاء مجلد جديد", "زر إلغاء التثبيت", "زر الطباعة", "زر المشاركة"],
        correctAnswer: 0,
    },
    {
        question: "ما هو الإجراء الصحيح قبل إزالة جهاز USB من الحاسوب عبر مستكشف الملفات؟",
        answers: ["فتح جميع الملفات المخزنة", "إخراج (Eject) الجهاز بشكل آمن", "حذف الملفات المخزنة", "إعادة تشغيل الحاسوب"],
        correctAnswer: 1,
    },
    {
        question: "ما الذي يمكنك تغييره عند ضبط إعدادات الفأرة في الحاسوب؟",
        answers: ["سرعة المؤشر", "حجم الشاشة", "موقع الملفات", "سرعة الإنترنت"],
        correctAnswer: 0,
    },
    {
        question: "ما الذي يجب عليك فعله عندما لا تظهر تطبيقاتك بدقة عالية على الشاشة؟",
        answers: ["إعادة تشغيل الحاسوب", "إعادة تثبيت البرامج", "تعديل إعدادات الشاشة", "حذف الملفات غير الضرورية"],
        correctAnswer: 2,
    },
    {
        question: "إذا كانت ساعة الحاسوب لا تظهر الوقت بشكل صحيح، فما هو التأثير المحتمل؟",
        answers: ["عدم القدرة على فتح الملفات", "تأثير على اتصالك بالإنترنت", "بطء في تحميل التطبيقات", "فقدان الملفات"],
        correctAnswer: 1,
    },
    {
        question: "ما هو الإجراء الذي يشير إلى إلغاء تثبيت تطبيق من حاسوبك؟",
        answers: ["إزالة اختصاره من سطح المكتب", "إيقاف تشغيل الحاسوب", "إعادة ضبط المصنع", "حذف الملفات المؤقتة"],
        correctAnswer: 0,
    },
    {
        question: "ما الذي يمكنك تغييره لتحسين وضوح مؤشر الفأرة؟",
        answers: ["تغيير لون المؤشر", "تغيير نمط مؤشر الفأرة", "تغيير سرعة المؤشر", "تغيير حجم الشاشة"],
        correctAnswer: 1,
    },
    {
        question: "ما هو الإجراء الذي يؤثر على سرعة حركة مؤشر الفأرة؟",
        answers: ["تغيير نمط مؤشر الفأرة", "تعديل إعدادات الشاشة", "تغيير سرعة مؤشر الفأرة", "تغيير إعدادات الصوت"],
        correctAnswer: 2,
    },
    {
        question: "ما هو الإجراء الذي يمكنك القيام به لتغيير دقة شاشة الحاسوب؟",
        answers: ["تغيير إعدادات الصوت", "تغيير إعدادات الشاشة", "تعديل سرعة المؤشر", "تغيير إعدادات اللغة"],
        correctAnswer: 1,
    },
    {
        question: "ما هو التأثير المحتمل لتغيير دقة الشاشة على مظهر الأيقونات والنصوص؟",
        answers: ["زيادة وضوح الأيقونات", "زيادة سرعة الحاسوب", "تغيير لون الخلفية", "إخفاء الملفات"],
        correctAnswer: 0,
    }
];


let currentQuestionIndex = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let startTime, endTime;
let shuffledQuestions = [];
let totalQuestions = 0;
let timer;
const timePerQuestion = 60; // عدد الثواني المخصصة لكل سؤال
let timeLeft = timePerQuestion;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startQuiz() {
    const studentName = document.getElementById("student-name").value.trim();
    const studentGrade = document.getElementById("student-grade").value.trim();
    const questionCount = document.getElementById("question-count").value;

    if (studentName === "" || studentGrade === "") {
        alert("الرجاء إدخال الاسم والصف قبل البدء.");
        return;
    }

    startTime = new Date();
    shuffledQuestions = shuffle([...quizData]);

    // تحديد عدد الأسئلة بناءً على اختيار الطالب
    if (questionCount === "10") {
        shuffledQuestions = shuffledQuestions.slice(0, 10);
    }

    totalQuestions = shuffledQuestions.length;

    document.querySelector('.design-credit').classList.add('hidden');
    document.getElementById("start-screen").classList.add("hidden");
    document.getElementById("quiz-container").classList.remove("hidden");
    showQuestion();
}

function showQuestion() {
    const questionElement = document.getElementById("question");
    const questionNumberElement = document.getElementById("question-number");
    const questionImageElement = document.getElementById("question-image");

    const questionData = shuffledQuestions[currentQuestionIndex];

    questionNumberElement.innerText = `السؤال ${currentQuestionIndex + 1} من ${totalQuestions}`;
    questionElement.innerText = questionData.question;

    // إخفاء الصورة إذا لم تكن موجودة
    if (questionData.image) {
        questionImageElement.src = questionData.image;
        questionImageElement.style.display = "block";
    } else {
        questionImageElement.style.display = "none";
    }

    const shuffledAnswers = shuffle([...questionData.answers]);

    document.querySelectorAll('.answer-buttons .btn').forEach((button, index) => {
        button.innerText = shuffledAnswers[index];
        button.disabled = false;
        button.style.backgroundColor = "#3498db";
    });

    document.getElementById('next-btn').classList.add('hidden');

    // إعادة ضبط العداد الزمني
    timeLeft = timePerQuestion;
    document.getElementById("time-left").innerText = `${timeLeft} ثانية`;
    clearInterval(timer);
    timer = setInterval(updateTimer, 1000); // تحديث العداد كل ثانية
}

function updateTimer() {
    timeLeft--;
    document.getElementById("time-left").innerText = `${timeLeft} ثانية`;

    if (timeLeft <= 0) {
        clearInterval(timer);
        selectAnswer(null); // إذا انتهى الوقت، يتم الانتقال للسؤال التالي تلقائياً
    }
}

function selectAnswer(index) {
    clearInterval(timer); // إيقاف العداد الزمني عند اختيار الإجابة

    const correctAnswer = shuffledQuestions[currentQuestionIndex].correctAnswer;
    const correctAnswerText = shuffledQuestions[currentQuestionIndex].answers[correctAnswer];

    document.querySelectorAll('.answer-buttons .btn').forEach((button) => {
        button.disabled = true;
    });

    if (index !== null && document.querySelectorAll('.answer-buttons .btn')[index].innerText === correctAnswerText) {
        document.getElementById(`btn${index + 1}`).style.backgroundColor = "green";
        correctAnswers++;
        document.getElementById("correct-sound").play();
    } else {
        if (index !== null) {
            document.getElementById(`btn${index + 1}`).style.backgroundColor = "red";
        }
        document.getElementById("wrong-sound").play();
        document.querySelectorAll('.answer-buttons .btn').forEach((button) => {
            if (button.innerText === correctAnswerText) {
                button.style.backgroundColor = "green";
            }
        });
        wrongAnswers++;
    }

    document.getElementById('next-btn').classList.remove('hidden');
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < totalQuestions) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    endTime = new Date();
    let timeSpent = Math.floor((endTime - startTime) / 1000);
    let minutes = Math.floor(timeSpent / 60);
    let seconds = timeSpent % 60;

    document.querySelector('.design-credit').classList.remove('hidden');
    document.getElementById("quiz-container").classList.add("hidden");
    document.getElementById("result-screen").classList.remove("hidden");

    document.getElementById("student-info").innerText = `${document.getElementById('student-name').value}, الصف ${document.getElementById('student-grade').value}`;
    document.getElementById("correct-answers").innerText = correctAnswers;
    document.getElementById("wrong-answers").innerText = wrongAnswers;
    document.getElementById("time-spent").innerText = `${minutes} دقيقة و ${seconds} ثانية`;
    document.getElementById("final-score").innerText = `${(correctAnswers / totalQuestions) * 100}%`;
}
