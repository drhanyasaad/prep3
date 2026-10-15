/**
 * app.js
 * منصة سفير التفوق في المواد الدراسية - الصف الثالث الإعدادي (المنهج الجديد)
 * محرك تفاعلي متكامل: ملخص الصفحتين البصريتين + بنك الأسئلة المبوب + الامتحانات الشاملة + التصحيح الذكي
 * يدعم كلاً من: اللغة العربية و Science (لغات) مع إمكانية التوسع لمواد أخرى
 */

// حالة التطبيق العامة
const AppState = {
  currentSubject: 'arabic', // 'arabic' | 'science' | 'social' | 'math' | 'ict' | 'religion'
  activeTab: 'summaries', // 'summaries' | 'lesson_quiz' | 'unit_exams' | 'ministry_exams' | 'analytics'
  feedbackMode: 'instant', // 'instant' (مباشر وفوري) | 'exam' (بعد تسليم الامتحان)
  
  selectedUnitId: 'unit1',
  selectedLessonId: 'u1_l1',
  selectedSummaryPage: 'page1', // 'page1' | 'page2' | 'both'
  
  selectedTopicId: 'all', // 'all' (امتحان شامل مختلط) | specific topic id
  isShuffled: false,
  
  selectedUnitExamId: 'exam_unit1',
  activeUnitExamView: 'exam', // 'grid' | 'exam'
  selectedMinistryExamId: 'official_exam_1',
  
  // مؤقت الامتحان الاختياري
  examTimerMode: 'off', // 'off' | '15' | '30' | '45' | '60' (دقائق)
  examTimerSecondsRemaining: 0,
  examTimerInterval: null,
  
  // تخزين الإجابات والتقييمات
  currentAnswers: {}, // { [qid]: value }
  questionEvaluations: {}, // { [qid]: { isCorrect, score, statusText, matched, missing, selfConfirmed } }
  examSubmitted: false
};

// استرجاع قاعدة بيانات المادة النشطة
function getActiveCurriculum() {
  if (AppState.currentSubject === 'science' && typeof window.SCIENCE_CURRICULUM_DATA !== 'undefined') {
    return window.SCIENCE_CURRICULUM_DATA;
  }
  if (AppState.currentSubject === 'social' && typeof window.SOCIAL_CURRICULUM_DATA !== 'undefined') {
    return window.SOCIAL_CURRICULUM_DATA;
  }
  if (AppState.currentSubject === 'math' && typeof window.MATH_CURRICULUM_DATA !== 'undefined') {
    return window.MATH_CURRICULUM_DATA;
  }
  if (AppState.currentSubject === 'ict' && typeof window.ICT_CURRICULUM_DATA !== 'undefined') {
    return window.ICT_CURRICULUM_DATA;
  }
  if (AppState.currentSubject === 'religion' && typeof window.RELIGION_CURRICULUM_DATA !== 'undefined') {
    return window.RELIGION_CURRICULUM_DATA;
  }
  return (typeof window.CURRICULUM_DATA !== 'undefined') ? window.CURRICULUM_DATA : { units: [], officialExams: [] };
}

function isEnglishSubject(subj) {
  return subj === 'science' || subj === 'math';
}

// تهيئة التطبيق عند اكتمال تحميل المستند
document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  if (params.get('subject')) AppState.currentSubject = params.get('subject');
  if (params.get('tab')) AppState.activeTab = params.get('tab');
  if (params.get('page')) AppState.selectedSummaryPage = params.get('page');
  if (params.get('topic')) AppState.selectedTopicId = params.get('topic');
  if (params.get('mode')) AppState.feedbackMode = params.get('mode');

  // مزامنة اتجاه الصفحة وفق المادة
  if (isEnglishSubject(AppState.currentSubject)) {
    document.documentElement.setAttribute('dir', 'ltr');
    document.documentElement.setAttribute('lang', 'en');
    document.body.classList.add('science-mode');
  } else {
    document.documentElement.setAttribute('dir', 'rtl');
    document.documentElement.setAttribute('lang', 'ar');
    document.body.classList.remove('science-mode');
  }

  const curr = getActiveCurriculum();
  if (curr.units && curr.units.length > 0) {
    const paramUnit = params.get('unit');
    const matchedUnit = curr.units.find(u => u.id === paramUnit);
    AppState.selectedUnitId = matchedUnit ? matchedUnit.id : curr.units[0].id;

    const unitObj = matchedUnit || curr.units[0];
    const paramLesson = params.get('lesson');
    const matchedLesson = unitObj.lessons.find(l => l.id === paramLesson);
    AppState.selectedLessonId = matchedLesson ? matchedLesson.id : unitObj.lessons[0].id;
    AppState.selectedUnitExamId = unitObj.unitTest ? unitObj.unitTest.id : '';
  }
  if (curr.officialExams && curr.officialExams.length > 0) {
    AppState.selectedMinistryExamId = curr.officialExams[0].id;
  }

  updateHeaderAndNavUI();
  initTabs();
  initModeSwitch();
  initSelectors();
  renderContent();
});

// ==========================================
// 1. التبديل بين المواد الدراسية وتحديث الواجهة
// ==========================================
window.switchSubject = function(subject) {
  if (subject === AppState.currentSubject) return;
  AppState.currentSubject = subject;
  
  if (isEnglishSubject(subject)) {
    document.documentElement.setAttribute('dir', 'ltr');
    document.documentElement.setAttribute('lang', 'en');
    document.body.classList.add('science-mode');
  } else {
    document.documentElement.setAttribute('dir', 'rtl');
    document.documentElement.setAttribute('lang', 'ar');
    document.body.classList.remove('science-mode');
  }

  const curr = getActiveCurriculum();
  if (curr.units && curr.units.length > 0) {
    AppState.selectedUnitId = curr.units[0].id;
    AppState.selectedLessonId = curr.units[0].lessons[0].id;
    AppState.selectedUnitExamId = curr.units[0].unitTest ? curr.units[0].unitTest.id : '';
  }
  if (curr.officialExams && curr.officialExams.length > 0) {
    AppState.selectedMinistryExamId = curr.officialExams[0].id;
  }

  AppState.selectedTopicId = 'all';
  AppState.isShuffled = false;
  AppState.currentAnswers = {};
  AppState.questionEvaluations = {};
  AppState.examSubmitted = false;
  AppState.activeUnitExamView = 'exam';
  
  if (AppState.examTimerInterval) {
    clearInterval(AppState.examTimerInterval);
    AppState.examTimerInterval = null;
  }
  AppState.examTimerMode = 'off';
  AppState.examTimerSecondsRemaining = 0;

  updateHeaderAndNavUI();
  initSelectors();
  renderContent();
};

function updateHeaderAndNavUI() {
  const isEn = isEnglishSubject(AppState.currentSubject);
  const isSci = isEn;
  
  // شريط المواد: تنشيط الزر المحدد وإلغاء تنشيط الباقي
  const allSubjKeys = ['arabic', 'science', 'social', 'math', 'ict', 'religion'];
  allSubjKeys.forEach(key => {
    const btn = document.getElementById('btn-sub-' + key);
    if (btn) btn.classList.toggle('active', AppState.currentSubject === key);
  });

  const subjectMeta = {
    arabic: {
      icon: '📚',
      title: 'سَفِيرُ التَّفَوُّقِ فِي اللُّغَةِ العَرَبِيَّةِ',
      badge: 'المنهج الجديد 2026 / 2027',
      subtitle: 'الصف الثالث الإعدادي • الفصل الدراسي الأول • بنك أسئلة ذكي ومراجعة الورقة الواحدة'
    },
    science: {
      icon: '🔬',
      title: 'SCIENCE EXCELLENCE PLATFORM',
      badge: 'New Ministry Curriculum 2026 / 2027',
      subtitle: 'Grade 3 Preparatory (Prep 3) • First Term • Question Bank & 2-Page Visual Cheat Sheets'
    },
    social: {
      icon: '🌍',
      title: 'سَفِيرُ التَّفَوُّقِ فِي الدِّرَاسَاتِ الاجْتِمَاعِيَّةِ',
      badge: 'المنهج الجديد المطور 2026 / 2027',
      subtitle: 'الصف الثالث الإعدادي • الفصل الدراسي الأول • جغرافيا وتاريخ وبنك أسئلة شامل ومراجعة بصرية'
    },
    math: {
      icon: '📐',
      title: 'MATHEMATICS EXCELLENCE PLATFORM',
      badge: 'New Ministry Curriculum 2026 / 2027',
      subtitle: 'Grade 3 Preparatory (Prep 3) • First Term • Algebra, Geometry, Statistics & Question Bank'
    },
    ict: {
      icon: '💻',
      title: 'سَفِيرُ التَّفَوُّقِ فِي الكَمْبِيُوتَرِ وَتِكْنُولُوجْيَا المَعْلُومَاتِ',
      badge: 'AI & Python • المنهج الجديد 2026 / 2027',
      subtitle: 'الصف الثالث الإعدادي • الفصل الدراسي الأول • الذكاء الاصطناعي، البرمجة بلغة بايثون، والأمن السيبراني'
    },
    religion: {
      icon: '✝️',
      title: 'سَفِيرُ التَّفَوُّقِ فِي التَّرْبِيَةِ الدِّينِيَّةِ المَسِيحِيَّةِ',
      badge: 'المنهج الجديد المطور 2026 / 2027',
      subtitle: 'الصف الثالث الإعدادي • الفصل الدراسي الأول • العقيدة، المحفوظات، الشخصيات الكتابية، والآيات الذهبية'
    }
  };

  const meta = subjectMeta[AppState.currentSubject] || subjectMeta.arabic;

  // رأس الصفحة
  const brandIcon = document.getElementById('brand-icon');
  const brandTitleText = document.getElementById('brand-title-text');
  const brandBadgeTag = document.getElementById('brand-badge-tag');
  const brandSubtitleText = document.getElementById('brand-subtitle-text');

  if (brandIcon) brandIcon.textContent = meta.icon;
  if (brandTitleText) brandTitleText.textContent = meta.title;
  if (brandBadgeTag) brandBadgeTag.textContent = meta.badge;
  if (brandSubtitleText) brandSubtitleText.textContent = meta.subtitle;

  // شريط التبويبات
  const tSummaries = document.getElementById('tab-text-summaries');
  const tQuiz = document.getElementById('tab-text-quiz');
  const tUnit = document.getElementById('tab-text-unit');
  const tMinistry = document.getElementById('tab-text-ministry');
  const tAnalytics = document.getElementById('tab-text-analytics');

  if (tSummaries) tSummaries.textContent = isSci ? 'Lesson Cheat Sheets (2-Page Visual Sheets)' : 'ملخصات الدروس (صفحتان بصريتان لكل درس)';
  if (tQuiz) tQuiz.textContent = isSci ? 'Sub-Topic Practice & Question Bank' : 'بنك أسئلة وتدريب الفروع (درس بدرس)';
  if (tUnit) tUnit.textContent = isSci ? 'Unit Assessments (Standardized Comprehensive)' : 'اختبارات الوحدات (شاملة ومجمعة)';
  if (tMinistry) tMinistry.textContent = isSci ? 'Official Ministry Simulation Exams' : 'امتحانات الوزارة الشاملة (الشهادة الإعدادية)';
  if (tAnalytics) tAnalytics.textContent = isSci ? 'Performance Analytics & Tips' : 'إحصائياتي وتوجيهات التفوق';

  // لافتة التوجيه السريع
  const infoBanner = document.getElementById('info-banner-content');
  if (infoBanner) {
    infoBanner.innerHTML = isSci
      ? '💡 <strong>Study Tip:</strong> Use <strong>(Study Mode)</strong> to view instant explanations and why-wrong justifications for each option, or switch to <strong>(Exam Mode)</strong> to simulate the official timed Ministry exam with full score report after submission.'
      : '💡 <strong>نصيحة المذاكرة:</strong> يمكنك استخدام <strong>(وضع المذاكرة)</strong> لمشاهدة التفسير الفوري وسبب صواب وخطأ كل خيار، أو التبديل إلى <strong>(وضع الامتحان)</strong> لمحاكاة اختبار الوزارة بوقت محدد وظهور التقرير بعد التسليم.';
  }

  // تسميات القوائم المنسدلة
  const unitLabel = document.getElementById('unit-select-label');
  const lessonLabel = document.getElementById('lesson-select-label');
  if (unitLabel) unitLabel.textContent = isSci ? 'Unit:' : 'الوحدة:';
  if (lessonLabel) lessonLabel.textContent = isSci ? 'Lesson:' : 'الدرس:';

  // نصوص التذييل
  const f1 = document.getElementById('footer-text-1');
  const f2 = document.getElementById('footer-text-2');
  if (f1) f1.textContent = isSci 
    ? 'Science Excellence Platform • Grade 3 Preparatory (First Term - Official Ministry Specification)' 
    : 'منصة سفير التفوق في المواد الدراسية للصف الثالث الإعدادي (الشهادة الإعدادية) • المنهج الجديد المطور';
  if (f2) f2.textContent = isSci
    ? 'All questions, laws, and cheat sheets strictly follow the official Egyptian Ministry of Education Textbook'
    : 'جميع الأسئلة والمراجعات مصممة بدقة وفق أحدث كتب ومواصفات الورقة الامتحانية لوزارة التربية والتعليم والتعليم الفني المصرية';

  // تحديث نص وضع المذاكرة / الامتحان
  const modeStatusText = document.getElementById('mode-status-text');
  const switchBtn = document.getElementById('mode-switch-btn');
  if (modeStatusText && switchBtn) {
    if (AppState.feedbackMode === 'instant') {
      modeStatusText.innerHTML = isSci ? '⚡ Study Mode (Instant Feedback & Explanations)' : '⚡ وضع المذاكرة (تصحيح وتفسير فوري)';
      switchBtn.textContent = isSci ? '🔄 Switch to Exam Mode' : '🔄 التبديل لوضع الامتحان';
    } else {
      modeStatusText.innerHTML = isSci ? '📝 Exam Mode (Grade After Submission)' : '📝 وضع الامتحان (النتيجة بعد التسليم)';
      switchBtn.textContent = isSci ? '🔄 Switch to Study Mode' : '🔄 التبديل لوضع المذاكرة';
    }
  }
}

// ==========================================
// 2. التبويبات الرئيسية وشريط الأوضاع
// ==========================================
function initTabs() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  tabButtons.forEach(btn => {
    if (btn.dataset.tab === AppState.activeTab) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      AppState.activeTab = btn.dataset.tab;
      AppState.examSubmitted = false;
      AppState.currentAnswers = {};
      AppState.questionEvaluations = {};
      renderContent();
    });
  });
}

function initModeSwitch() {
  const switchBtn = document.getElementById('mode-switch-btn');
  if (!switchBtn) return;

  switchBtn.addEventListener('click', () => {
    AppState.feedbackMode = (AppState.feedbackMode === 'instant') ? 'exam' : 'instant';
    updateHeaderAndNavUI();
    renderContent();
  });
}

function initSelectors() {
  const unitSelect = document.getElementById('unit-select');
  const lessonSelect = document.getElementById('lesson-select');
  if (!unitSelect || !lessonSelect) return;

  const curr = getActiveCurriculum();
  unitSelect.innerHTML = curr.units.map(u => 
    `<option value="${u.id}">${u.title}</option>`
  ).join('');

  function populateLessons(unitId, preserveLesson = false) {
    const unit = curr.units.find(u => u.id === unitId);
    if (!unit) return;
    lessonSelect.innerHTML = unit.lessons.map(l => 
      `<option value="${l.id}">${l.title}</option>`
    ).join('');
    if (!preserveLesson || !unit.lessons.some(l => l.id === AppState.selectedLessonId)) {
      AppState.selectedLessonId = unit.lessons[0].id;
    }
    lessonSelect.value = AppState.selectedLessonId;
    AppState.selectedTopicId = 'all';
    AppState.isShuffled = false;
  }

  unitSelect.value = AppState.selectedUnitId;
  populateLessons(AppState.selectedUnitId, true);

  unitSelect.onchange = (e) => {
    AppState.selectedUnitId = e.target.value;
    populateLessons(AppState.selectedUnitId);
    renderContent();
  };

  lessonSelect.onchange = (e) => {
    AppState.selectedLessonId = e.target.value;
    AppState.selectedTopicId = 'all';
    AppState.isShuffled = false;
    AppState.currentAnswers = {};
    AppState.questionEvaluations = {};
    AppState.examSubmitted = false;
    renderContent();
  };
}

// ==========================================
// 3. محرك العرض الرئيسي (Dispatcher)
// ==========================================
function renderContent() {
  const mainView = document.getElementById('view-container');
  const selectorBar = document.getElementById('selector-bar');
  if (!mainView) return;

  if (AppState.activeTab === 'summaries' || AppState.activeTab === 'lesson_quiz') {
    if (selectorBar) selectorBar.style.display = 'flex';
  } else {
    if (selectorBar) selectorBar.style.display = 'none';
  }

  switch (AppState.activeTab) {
    case 'summaries':
      renderSummarySheet(mainView);
      break;
    case 'lesson_quiz':
      renderLessonQuizView(mainView);
      break;
    case 'unit_exams':
      renderUnitExamsView(mainView);
      break;
    case 'ministry_exams':
      renderMinistryExamsView(mainView);
      break;
    case 'analytics':
      renderAnalyticsView(mainView);
      break;
    default:
      renderSummarySheet(mainView);
  }
}

// ==========================================
// 4. خوارزميات التصحيح الذكي وقراءة النص (Smart Evaluation Engine)
// ==========================================

const ARABIC_STOPWORDS = new Set([
  'من', 'في', 'على', 'الي', 'إلى', 'عن', 'مع', 'بين', 'حيث', 'ان', 'أن', 'إن',
  'هو', 'هي', 'هم', 'هن', 'هذا', 'هذه', 'هؤلاء', 'ذلك', 'تلك', 'تم', 'يتم',
  'كان', 'كانت', 'يكون', 'بسبب', 'لان', 'لأن', 'كي', 'لكي', 'حتى', 'ما', 'قد',
  'كل', 'جميع', 'بعض', 'غير', 'سوى', 'عند', 'عندما', 'مثل', 'نحو', 'اي', 'أي'
]);

const ENGLISH_STOPWORDS = new Set([
  'a', 'an', 'the', 'in', 'on', 'at', 'to', 'for', 'with', 'from', 'by', 'of',
  'and', 'or', 'as', 'is', 'are', 'was', 'were', 'be', 'been', 'being',
  'have', 'has', 'had', 'do', 'does', 'did', 'it', 'its', 'they', 'them',
  'their', 'this', 'that', 'these', 'those', 'because', 'due', 'into', 'than'
]);

function normalizeText(text) {
  if (!text && text !== 0) return '';
  return text
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[\u064B-\u065F\u0670\u0640]/g, '') // إزالة التشكيل والتطويل
    .replace(/[إأآا]/g, 'ا') // توحيد الألف
    .replace(/ة/g, 'ه') // توحيد التاء المربوطة والهاء
    .replace(/[يىئ]/g, 'ي') // توحيد الياء والألف المقصورة والهمزة
    .replace(/ؤ/g, 'و') // توحيد الهمزة على الواو
    .replace(/[٠-٩]/g, d => '0123456789'['٠١٢٣٤٥٦٧٨٩'.indexOf(d)]) // توحيد الأرقام
    .replace(/[،؛ـ\-–.,:!؟?()«»"'{}\[\]/\\+*]/g, ' ') // إزالة علامات الترقيم والأقواس
    .replace(/\s+/g, ' '); // دمج الفراغات
}

// دالة تجريد الزوائد الصرفية العربية (الـ التعريف، حروف العطف والجر المتصلة)
function normalizeWordToken(rawWord) {
  if (!rawWord) return '';
  let s = rawWord.trim().toLowerCase()
    .replace(/[\u064B-\u065F\u0670\u0640]/g, '')
    .replace(/[إأآا]/g, 'ا')
    .replace(/ة/g, 'ه')
    .replace(/[يىئ]/g, 'ي')
    .replace(/ؤ/g, 'و')
    .replace(/[٠-٩]/g, d => '0123456789'['٠١٢٣٤٥٦٧٨٩'.indexOf(d)])
    .replace(/[^\w\u0600-\u06FF]/g, '');

  if (!s) return '';

  // معالجة البوادق المركبة (مثل: وبالحرارة، فالأنديز، كالجبال، للتكوين)
  if (s.length >= 5 && (s.startsWith('وال') || s.startsWith('بال') || s.startsWith('فال') || s.startsWith('كال') || s.startsWith('لل'))) {
    s = s.slice(s.startsWith('لل') ? 2 : 3);
  } else if (s.length >= 4 && s.startsWith('ال')) {
    s = s.slice(2);
  } else if (s.length >= 4 && (s.startsWith('و') || s.startsWith('ب') || s.startsWith('ف') || s.startsWith('ل') || s.startsWith('ك'))) {
    s = s.slice(1);
  }

  // تسوية تباينات الإملاء الشائعة (مثل: مغنسيوم / ماغنسيوم، اوكسيد / اكسيد)
  if (s === 'مغنسيوم' || s === 'ماغنسيوم') s = 'مغنسيوم';
  if (s === 'اوكسيد' || s === 'اكسيد') s = 'اكسيد';
  if (s === 'الومنيوم' || s === 'الومنيوم') s = 'الومنيوم';

  return s;
}

// استخراج الكلمات المفتاحية المؤثرة مع استبعاد حروف الجر والأدوات الشائعة
function extractSignificantTokens(text) {
  if (!text) return [];
  const words = text.toString().split(/\s+/);
  const tokens = [];
  for (const w of words) {
    const cleaned = normalizeWordToken(w);
    if (cleaned.length > 1 && !ARABIC_STOPWORDS.has(cleaned) && !ENGLISH_STOPWORDS.has(cleaned)) {
      tokens.push(cleaned);
    }
  }
  return tokens;
}

// التحقق الذكي من تطابق مفهوم أو عبارة مفتاحية داخل إجابة الطالب
function matchConcept(studentTokens, studentRawNorm, conceptText) {
  if (!conceptText) return false;
  const normConcept = normalizeText(conceptText);
  // 1) فحص التطابق النصي المباشر
  if (studentRawNorm.includes(normConcept)) return true;

  // 2) فحص الكلمات المفتاحية الأساسية للمفهوم
  const conceptTokens = extractSignificantTokens(conceptText);
  if (conceptTokens.length === 0) return true;

  let matches = 0;
  for (const ct of conceptTokens) {
    const found = studentTokens.some(st => {
      if (st === ct) return true;
      if (ct.length >= 3 && (st.includes(ct) || ct.includes(st))) return true;
      return false;
    });
    if (found) matches++;
  }

  // معايير المرونة: إذا كان المفهوم كلمة أو كلمتين تكفي كلمة، 3 فما فوق يكفي 40%
  if (conceptTokens.length <= 2) return matches >= 1;
  return (matches / conceptTokens.length) >= 0.4;
}

// فحص درجة التشابه الإجمالية مع الإجابة النموذجية المعتمدة
function calculateModelAnswerOverlap(studentTokens, modelAnswer) {
  if (!modelAnswer) return 0;
  const modelTokens = extractSignificantTokens(modelAnswer);
  if (modelTokens.length === 0) return 0;

  let matchedCount = 0;
  for (const mt of modelTokens) {
    const exists = studentTokens.some(st => st === mt || (mt.length >= 3 && (st.includes(mt) || mt.includes(st))));
    if (exists) matchedCount++;
  }
  return Math.round((matchedCount / modelTokens.length) * 100);
}

function evaluateComplete(studentText, acceptableAnswers) {
  const isSci = isEnglishSubject(AppState.currentSubject);
  if (!studentText || !studentText.toString().trim()) {
    return { 
      isCorrect: false, 
      score: 0, 
      statusText: isSci ? 'No answer entered yet' : 'لم تتم الإجابة بعد' 
    };
  }

  const normStudent = normalizeText(studentText);
  const studentTokens = extractSignificantTokens(studentText);

  for (const ans of (acceptableAnswers || [])) {
    const normAns = normalizeText(ans);
    // تطابق نصي مباشر
    if (normStudent === normAns || normStudent.includes(normAns) || (normAns.length > 3 && normAns.includes(normStudent))) {
      return { 
        isCorrect: true, 
        score: 100, 
        statusText: isSci ? 'Correct and matches official Ministry model answer' : 'صحيح ومطابق للإجابة النموذجية الوزارية' 
      };
    }
    // تطابق بالرموز والكلمات المفتاحية
    if (matchConcept(studentTokens, normStudent, ans)) {
      return {
        isCorrect: true,
        score: 100,
        statusText: isSci ? 'Correct scientific answer' : 'إجابة صحيحة ومطابقة للمفهوم المطلوب'
      };
    }
  }

  return { 
    isCorrect: false, 
    score: 0, 
    statusText: isSci ? 'Inaccurate answer - compare with official model answer below' : 'إجابة غير دقيقة - قارن مع الإجابة النموذجية المعتمدة أدناه' 
  };
}

function evaluateExtractParse(studentText, acceptableAnswers) {
  const isSci = isEnglishSubject(AppState.currentSubject);
  if (!studentText || !studentText.toString().trim()) {
    return { 
      isCorrect: false, 
      score: 0, 
      statusText: isSci ? 'No answer entered yet' : 'لم تتم الإجابة بعد' 
    };
  }

  const normStudent = normalizeText(studentText);
  const studentTokens = extractSignificantTokens(studentText);
  let matchedCount = 0;

  for (const ans of (acceptableAnswers || [])) {
    if (normStudent.includes(normalizeText(ans)) || matchConcept(studentTokens, normStudent, ans)) {
      matchedCount++;
    }
  }

  const isCorrect = (matchedCount > 0);
  const score = isCorrect ? Math.min(100, Math.round((matchedCount / acceptableAnswers.length) * 100)) : 0;
  return {
    isCorrect,
    score,
    statusText: isSci
      ? (isCorrect ? 'Correct calculation with required unit and step formulation' : 'Incorrect calculation - review step-by-step formula below')
      : (isCorrect ? 'إجابة صحيحة ومستوفية للأركان النحوية المطلوبة' : 'تحتاج لمراجعة الضبط والإعراب النموذجي أدناه')
  };
}

// محرك تصحيح الأسئلة المقالية الذكي والمرن
function evaluateEssay(studentText, keywords, modelAnswer, acceptableAnswers) {
  const isSci = isEnglishSubject(AppState.currentSubject);
  if (!studentText || !studentText.toString().trim()) {
    return { 
      isCorrect: false, 
      score: 0, 
      matched: [], 
      missing: keywords || [], 
      statusText: isSci ? 'No answer entered yet' : 'لم تتم كتابة الإجابة بعد' 
    };
  }

  const normStudent = normalizeText(studentText);
  const studentTokens = extractSignificantTokens(studentText);

  // 1) فحص الإجابات المقبولة المباشرة إن وُجدت
  if (acceptableAnswers && acceptableAnswers.length > 0) {
    for (const ans of acceptableAnswers) {
      const normAns = normalizeText(ans);
      if (normStudent === normAns || normStudent.includes(normAns) || (normAns.length > 4 && normAns.includes(normStudent))) {
        return {
          isCorrect: true,
          score: 100,
          matched: keywords || [ans],
          missing: [],
          statusText: isSci ? '🎉 Perfect answer matching approved criteria!' : '🎉 إجابة نموذجية مطابقة تماماً للمواصفات الوزارية!'
        };
      }
    }
  }

  // 2) فحص المفاهيم والكلمات المفتاحية
  const kwList = (keywords && keywords.length > 0) ? keywords : [];
  const matched = [];
  const missing = [];

  for (const kw of kwList) {
    if (matchConcept(studentTokens, normStudent, kw)) {
      matched.push(kw);
    } else {
      missing.push(kw);
    }
  }

  // حساب النسبة المئوية من الكلمات المفتاحية
  let kwPercentage = kwList.length > 0 ? Math.round((matched.length / kwList.length) * 100) : 0;

  // فحص نسبة التشابه مع نص الإجابة النموذجية
  const modelOverlap = calculateModelAnswerOverlap(studentTokens, modelAnswer);

  // احتساب الدرجة النهائية بمرونة وإنصاف تام
  let finalScore = kwPercentage;
  if (kwList.length === 0) {
    finalScore = modelOverlap >= 40 ? 100 : (modelOverlap >= 20 ? 80 : (modelOverlap > 0 ? 60 : 30));
  } else {
    // إذا تطابق مفهوم واحد على الأقل مع كتابة جملة وافية
    if (matched.length >= 1) {
      if (matched.length === kwList.length) {
        finalScore = 100;
      } else {
        finalScore = Math.max(finalScore, 75);
      }
    }
    // دعم الطالب إذا كان استوعب الفكرة وصاغها بأسلوب متقاطع مع النموذج
    if (modelOverlap >= 30 && finalScore < 80) {
      finalScore = Math.max(finalScore, 80);
    } else if (modelOverlap >= 15 && finalScore < 60) {
      finalScore = Math.max(finalScore, 60);
    }
  }

  // إذا كتب الطالب إجابة وافية (أكثر من 4 كلمات) وأصاب جوهر السؤال
  if (studentTokens.length >= 4 && finalScore >= 40) {
    finalScore = Math.max(finalScore, 75);
  }

  // تحديد النجاح والاجتياز (50% فأكثر يعتبر إجابة مقبولة أو كاملة)
  const isCorrect = finalScore >= 50;

  let statusText = '';
  if (isSci) {
    if (finalScore >= 80) {
      statusText = '🎉 Excellent answer meeting official Ministry grading criteria!';
    } else if (finalScore >= 50) {
      statusText = '👍 Good partial answer - check model answer below for full mark formulation.';
    } else if (finalScore > 0) {
      statusText = '⚠️ Incomplete answer - review approved model answer below to include key terms.';
    } else {
      statusText = '⚠️ Key scientific concepts missing - see model answer below.';
    }
  } else {
    if (finalScore >= 80) {
      statusText = '🎉 إجابة ممتازة ومستوفية لجميع عناصر ومعايير التصحيح الوزاري!';
    } else if (finalScore >= 50) {
      statusText = '👍 إجابة جزئية جيدة ومقبولة - راجع العناصر المتبقية أدناه لإتمام الدرجة الكاملة.';
    } else if (finalScore > 0) {
      statusText = '⚠️ إجابة غير مكتملة - تنقصها بعض المفاهيم الأساسية، قارن مع النموذج الوزاري أدناه.';
    } else {
      statusText = '⚠️ لم يتم استيفاء المفاهيم المطلوبة - راجع الإجابة النموذجية المعتمدة أدناه.';
    }
  }

  return {
    isCorrect,
    score: finalScore,
    matched,
    missing,
    statusText
  };
}

window.confirmEssayFullMarks = function(qid) {
  const isSci = isEnglishSubject(AppState.currentSubject);
  const qObj = findQuestionById(qid);
  AppState.questionEvaluations[qid] = {
    isCorrect: true,
    score: 100,
    selfConfirmed: true,
    matched: qObj && qObj.keywords ? qObj.keywords : [],
    missing: [],
    statusText: isSci 
      ? '⭐ Full marks awarded based on conceptual equivalence and personal formulation.' 
      : '⭐ تم اعتماد الدرجة الكاملة لاكتمال المعنى والمفهوم العلمي بأسلوبك الخاص.'
  };
  rerenderActiveQuiz();
};

// دالة مساعدة لتنسيق الماركداون والـ Bold العريض
function renderMarkdown(text) {
  if (!text) return '';
  return text
    .toString()
    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-bold-highlight">$1</strong>');
}

// محلل ومصمم المعادلات والقواعد والكبسولات العلمية لراحة العين والتباين البصري
function formatRuleOrEquation(rawText) {
  if (!rawText) return '';
  let text = renderMarkdown(rawText);
  let title = '';
  let notes = '';

  // استخراج العنوان المكتوب بخط عريض (سواء <b> أو <strong>)
  const bMatch = text.match(/<(b|strong)[^>]*>(.*?)<\/\1>:?\s*/i);
  if (bMatch) {
    title = bMatch[2].replace(/:$/, '').trim();
    text = text.replace(bMatch[0], '').trim();
  }

  // استخراج الملاحظات بين قوسين معقوفين في نهاية السطر [ملاحظة/لون/غاز]
  const bracketMatch = text.match(/\s*\[(.*?)\]\.?\s*$/);
  if (bracketMatch) {
    notes = bracketMatch[1].trim();
    text = text.replace(bracketMatch[0], '').trim();
  }

  // فحص هل النص يمثل معادلة كيميائية أو رياضية
  const isSciOrMath = AppState.currentSubject === 'science' || AppState.currentSubject === 'math';
  const isEquation = isSciOrMath && (text.includes('→') || text.includes('->') || text.includes('-(Δ)→') || 
                     text.includes('⇌') || (text.includes('=') && /[0-9]/.test(text)));

  if (isEquation) {
    return `
      <div class="formula-equation-card">
        ${title ? `
          <div class="eq-header-row">
            <span class="eq-pill-badge">${AppState.currentSubject === 'math' ? '📐' : '🧪'} ${title}</span>
          </div>
        ` : ''}
        <div class="eq-formula-box">
          <code>${text}</code>
        </div>
        ${notes ? `
          <div class="eq-notes-box">
            <span class="eq-obs-icon">🔍</span>
            <div class="eq-obs-content"><strong>${isEnglishSubject(AppState.currentSubject) ? 'Outcome / Observation:' : 'الناتج / الملاحظة:'}</strong> ${notes}</div>
          </div>
        ` : ''}
      </div>
    `;
  }

  // في القواعد غير المعادلات، استبدال الأسهم بسهم تدفق جميل ومريح للعين
  text = text.replace(/\s*(?:->|→)\s*/g, ' <span class="rule-flow-arrow">➔</span> ');

  // فحص وجود عنوان فرعي في بداية النص قبل النقطتين إن لم يُحدد عنوان مسبقاً
  if (!title) {
    const colonMatch = text.match(/^(?:<strong[^>]*>|\*\*|)?([^:]{2,35}?)(?:<\/strong>|\*\*|)?:(\s+.*)$/);
    if (colonMatch) {
      title = colonMatch[1].replace(/[*_#]/g, '').trim();
      text = colonMatch[2].trim();
    }
  }

  // تنسيق القواعد اللغوية والملاحظات المفاهيمية بتباين بصري أنيق
  return `
    <div class="concept-rule-item">
      ${title ? `
        <div class="rule-title-row">
          <span class="rule-icon-bullet">📌</span>
          <strong class="rule-main-title">${title}:</strong>
        </div>
      ` : ''}
      <div class="rule-body-text">${text}</div>
      ${notes ? `
        <div class="rule-subnote">
          <span>💡</span> <em>${notes}</em>
        </div>
      ` : ''}
    </div>
  `;
}

function renderRulesList(rules) {
  if (!rules || rules.length === 0) return '';
  return `
    <div class="rules-card-container">
      ${rules.map(r => formatRuleOrEquation(r)).join('')}
    </div>
  `;
}


// دوال عرض الخرائط والمخططات الهيكلية والخط الزمني البصري
function renderVisualGallery(items, isEn) {
  if (!items || !items.length) return '';
  return `
    <div style="margin: 1.25rem 0;">
      <div style="font-weight: 800; font-size: 1.05rem; color: #1e3a8a; margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
        <span>🗺️</span> ${isEn ? 'Visual Diagrams & Atlas Maps' : 'الأطلس والخرائط والرسومات البصرية التوضيحية'}
      </div>
      <div class="visual-gallery-grid">
        ${items.map(item => `
          <div class="visual-image-card">
            <div class="visual-card-img-wrap">
              <img src="${item.imageUrl}" alt="${escapeHtml(item.title || '')}" loading="lazy" onclick="openImageModal('${item.imageUrl}', '${escapeHtml(item.title || '')}')" title="${isEn ? 'Click to enlarge diagram' : 'انقر لتكبير الخريطة / الرسم'}" />
            </div>
            <div class="visual-card-body">
              <div class="visual-card-title">
                <span>📍</span> ${renderMarkdown(item.title || '')}
              </div>
              ${item.desc ? `<p style="font-size: 0.88rem; color: #475569; margin-bottom: 0.5rem; line-height: 1.5;">${renderMarkdown(item.desc)}</p>` : ''}
              ${item.keyNotes && item.keyNotes.length ? `
                <ul class="visual-card-points">
                  ${item.keyNotes.map(kn => `<li>${renderMarkdown(kn)}</li>`).join('')}
                </ul>
              ` : ''}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function formatSchemeItem(rawText) {
  if (!rawText) return '';
  let text = renderMarkdown(rawText);
  // فحص العناوين الفرعية قبل النقطتين : وتحويلها لعنوان بارز
  text = text.replace(/<strong class="text-bold-highlight">(.*?)<\/strong>:\s*/i, '<strong class="scheme-lead-title">$1:</strong> ');
  if (!text.includes('scheme-lead-title')) {
    const colonMatch = text.match(/^([^:<>]{2,35}):\s*/);
    if (colonMatch) {
      text = `<strong class="scheme-lead-title">${colonMatch[1]}:</strong> ` + text.slice(colonMatch[0].length);
    }
  }
  // استبدال الأسهم العادية بسهم تدفق جميل
  text = text.replace(/\s*(?:->|→)\s*/g, ' <span class="rule-flow-arrow">➔</span> ');
  return text;
}

function renderVisualScheme(scheme, isEn) {
  if (!scheme || !scheme.cards || !scheme.cards.length) return '';
  return `
    <div style="margin: 1.25rem 0;">
      <div style="font-weight: 800; font-size: 1.05rem; color: #1e3a8a; margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
        <span>📊</span> ${renderMarkdown(scheme.title || (isEn ? 'Visual Concept Scheme & Classification' : 'المخطط الهيكلي البصري وتصنيف المفاهيم'))}
      </div>
      <div class="scheme-grid">
        ${scheme.cards.map(c => `
          <div class="scheme-card" style="${c.color ? `border-inline-start-color: ${c.color};` : ''}">
            <div class="scheme-header">
              <span class="scheme-title">${renderMarkdown(c.title)}</span>
              ${c.badge ? `<span class="scheme-badge ${c.badgeClass || 'badge-blue'}">${c.badge}</span>` : ''}
            </div>
            ${c.desc ? `<p style="font-size: 0.88rem; color: #475569; margin-bottom: 0.6rem; line-height: 1.5;">${renderMarkdown(c.desc)}</p>` : ''}
            ${c.items && c.items.length ? c.items.map(it => `
              <div class="scheme-item-row">
                <span class="scheme-bullet">▪</span>
                <div>${formatSchemeItem(it)}</div>
              </div>
            `).join('') : ''}
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderInteractiveConceptMap(mindMap, isEn, mindMapText) {
  if (!mindMap || !mindMap.length) return '';

  const allLabel = isEn ? '🌟 All Concept Branches' : '🌟 جميع محاور الدرس';

  return `
    <div class="concept-map-container" id="interactive-concept-map">
      <div class="concept-map-header">
        <div class="concept-map-title-wrap">
          <span>🧠</span>
          <span>${renderMarkdown(mindMapText || (isEn ? 'Interactive Concept Framework' : 'خريطة المفاهيم التفاعلية ومحاور الدرس'))}</span>
        </div>
        <div class="concept-tabs-bar" role="tablist">
          <button class="concept-tab-pill active" onclick="filterConceptCard(-1, this)" type="button">
            ${allLabel}
          </button>
          ${mindMap.map((m, idx) => {
            const shortTitle = m.title.replace(/^[0-9]+[\.\-\:]\s*/, '').split('(')[0].trim();
            const displayTitle = shortTitle.length > 25 ? shortTitle.slice(0, 23) + '…' : shortTitle;
            return `
              <button class="concept-tab-pill" onclick="filterConceptCard(${idx}, this)" type="button" title="${escapeHtml(m.title)}">
                <span>📌</span> ${displayTitle}
              </button>
            `;
          }).join('')}
        </div>
      </div>
      <div class="concept-cards-grid" id="concept-cards-grid">
        ${mindMap.map((m, idx) => {
          // تفكيك النص إلى نقاط وعناصر بصرية مرتبة ومريحة للعين
          const rawLines = (m.desc || '')
            .split(/<br\s*\/?>|\n|(?<=[\.\!\؟])\s*•\s*|(?<=^)\s*•\s*/)
            .map(s => s.trim())
            .filter(s => s.length > 0 && s !== '•');

          let formattedPoints = '';
          const chips = [];

          rawLines.forEach(line => {
            let cleanLine = line.replace(/^•\s*/, '').trim();
            let leadTitle = '';
            let restText = cleanLine;

            const colonMatch = cleanLine.match(/^(?:<strong[^>]*>|\*\*|)?([^:]{2,30}?)(?:<\/strong>|\*\*|)?:(\s+.*)$/);
            if (colonMatch) {
              leadTitle = colonMatch[1].replace(/[*_#]/g, '').trim();
              restText = colonMatch[2].trim();
              if (leadTitle && leadTitle.length <= 20) {
                chips.push(leadTitle);
              }
            }

            restText = renderMarkdown(restText).replace(/\s*(?:->|→)\s*/g, ' <span class="rule-flow-arrow">➔</span> ');

            formattedPoints += `
              <div class="concept-point-row">
                <span class="concept-point-bullet">🔹</span>
                <div>
                  ${leadTitle ? `<strong class="concept-lead-title">${leadTitle}:</strong> ` : ''}
                  <span>${restText}</span>
                </div>
              </div>
            `;
          });

          const uniqueChips = [...new Set(chips)].slice(0, 4);

          return `
            <div class="concept-card" id="concept-card-${idx}" data-idx="${idx}">
              <div class="concept-card-head">
                <div class="concept-card-title">
                  <span>📌</span>
                  <span>${renderMarkdown(m.title)}</span>
                </div>
                <span class="concept-card-badge">${isEn ? `Branch ${idx + 1}` : `المحور ${idx + 1}`}</span>
              </div>
              <div class="concept-card-body">
                ${formattedPoints || `<p>${renderMarkdown(m.desc)}</p>`}
              </div>
              ${uniqueChips.length ? `
                <div class="concept-card-footer">
                  ${uniqueChips.map(c => `<span class="concept-chip">🏷️ ${c}</span>`).join('')}
                </div>
              ` : ''}
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

window.filterConceptCard = function(targetIdx, btnEl) {
  const container = document.getElementById('interactive-concept-map');
  if (!container) return;
  
  const pills = container.querySelectorAll('.concept-tab-pill');
  pills.forEach(p => p.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');

  const cards = container.querySelectorAll('.concept-card');
  cards.forEach(card => {
    const cardIdx = parseInt(card.getAttribute('data-idx'), 10);
    if (targetIdx === -1) {
      card.style.display = 'flex';
      card.classList.remove('highlighted');
    } else if (cardIdx === targetIdx) {
      card.style.display = 'flex';
      card.classList.add('highlighted');
      card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } else {
      card.style.display = 'none';
      card.classList.remove('highlighted');
    }
  });
};

function renderTimeline(timeline, isEn) {
  if (!timeline || !timeline.events || !timeline.events.length) return '';
  return `
    <div style="margin: 1.5rem 0;">
      <div style="font-weight: 800; font-size: 1.1rem; color: #1e3a8a; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
        <span>⏳</span> ${renderMarkdown(timeline.title || (isEn ? 'Chronological Visual Timeline' : 'الخط الزمني البصري المتسلسل للمحطات التاريخية'))}
      </div>
      <div class="visual-timeline">
        ${timeline.events.map(ev => `
          <div class="timeline-step">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <div class="timeline-year-badge">
                <span>📅</span> ${ev.year}
              </div>
              <div class="timeline-event-title">${renderMarkdown(ev.title)}</div>
              <div class="timeline-event-desc">${renderMarkdown(ev.desc)}</div>
              ${ev.tags && ev.tags.length ? `
                <div class="timeline-tags-wrap">
                  ${ev.tags.map(t => `<span class="timeline-tag ${t.cls || 'tag-info'}">${t.text}</span>`).join('')}
                </div>
              ` : ''}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

window.openImageModal = function(src, caption) {
  let overlay = document.getElementById('image-lightbox-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'image-lightbox-overlay';
    overlay.className = 'image-lightbox-overlay';
    overlay.onclick = function(e) {
      if (e.target === overlay) closeImageModal();
    };
    document.body.appendChild(overlay);
  }
  overlay.innerHTML = `
    <div class="lightbox-content-wrap">
      <button class="lightbox-close-btn" onclick="closeImageModal()" title="إغلاق">✕</button>
      <img src="${src}" class="lightbox-img" alt="${escapeHtml(caption || '')}" />
      ${caption ? `<div class="lightbox-caption"><span>🔍</span> ${escapeHtml(caption)}</div>` : ''}
    </div>
  `;
  requestAnimationFrame(() => overlay.classList.add('active'));
};

window.closeImageModal = function() {
  const overlay = document.getElementById('image-lightbox-overlay');
  if (overlay) {
    overlay.classList.remove('active');
  }
};

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeImageModal();
});

// ==========================================
// 5. ملخص الصفحتين البصريتين (Two-Page Visual Sheet)
// ==========================================
function renderSummarySheet(container) {
  const isEn = isEnglishSubject(AppState.currentSubject);
  const curr = getActiveCurriculum();
  const unit = curr.units.find(u => u.id === AppState.selectedUnitId);
  const lesson = unit ? unit.lessons.find(l => l.id === AppState.selectedLessonId) : null;

  if (!lesson || !lesson.summarySheet) {
    container.innerHTML = `<div class="empty-state">${isEn ? 'Select a lesson to view its visual cheat sheet.' : 'اختر درساً لعرض ملخصه البصري.'}</div>`;
    return;
  }

  const lbl = curr.labels || {};
  const sheet = lesson.summarySheet;
  const p1 = sheet.page1;
  const p2 = sheet.page2;

  const tabP1Text = lbl.tabP1 || (isEn ? 'Page 1: Concepts, Mind Map & Terminology' : 'الصفحة الأولى: نصوص وقراءة ومفردات وجماليات');
  const tabP2Text = lbl.tabP2 || (isEn ? 'Page 2: Laws, Formulas & Golden Questions' : 'الصفحة الثانية: نحو وإملاء وتعبير والأسئلة الذهبية');
  const tabBothText = lbl.tabBoth || (isEn ? 'View Both Pages Together (Comprehensive Review)' : 'عرض الصفحتين معاً (للمراجعة الشاملة)');
  const printText = lbl.print || (isEn ? 'Print Cheat Sheet (2 Pages A4)' : 'طباعة الورقتين (2 Pages A4)');
  const page1Badge = lbl.page1Badge || (isEn ? 'Page 1 of 2' : 'الورقة 1 من 2');
  const page2Badge = lbl.page2Badge || (isEn ? 'Page 2 of 2' : 'الورقة 2 من 2');
  const coreIdeaText = lbl.coreIdea || (isEn ? 'Core Scientific Concept & Framework' : 'الفكرة المحورية والرسالة التربوية للدرس');
  const mindMapText = lbl.mindMap || (isEn ? 'Conceptual Framework & Core Principles' : 'خريطة المفاهيم وأهم محاور الدرس');
  const vocabText = lbl.vocab || (isEn ? 'Scientific Terminology, Definitions & Symbols' : 'جدول المفردات اللغوية والمترادفات والأضداد');
  const vocabCols = lbl.vocabCols || (isEn ? ['Term / Concept', 'Scientific Definition', 'Symbol / Antonym', 'Unit / Plural'] : ['الكلمة', 'معناها ودلالتها', 'مضادها', 'جمعها / مفردها']);
  const beautyText = lbl.beauty || (isEn ? 'Scientific Laws, Chemical Equations & Core Relations' : 'أسرار البيان ومواطن الجمال والتذوق الأدبي');
  const beautySecretText = lbl.beautySecret || (isEn ? 'Principle / Equation Insight:' : 'سر الجمال:');
  const goldenText = lbl.golden || (isEn ? 'Golden Ministerial Exam Questions & Model Answers' : 'أسئلة الامتحان الذهبية المتوقعة في امتحانات المحافظات');

  // شريط التبديل بين الصفحة 1 والصفحة 2 والطباعة
  const pageNavHtml = `
    <div class="page-tabs-bar">
      <button class="page-tab-btn ${AppState.selectedSummaryPage === 'page1' ? 'active' : ''}" onclick="selectSummaryPage('page1')">
        <span>📄</span> ${tabP1Text}
      </button>
      <button class="page-tab-btn ${AppState.selectedSummaryPage === 'page2' ? 'active' : ''}" onclick="selectSummaryPage('page2')">
        <span>📄</span> ${tabP2Text}
      </button>
      <button class="page-tab-btn ${AppState.selectedSummaryPage === 'both' ? 'active' : ''}" onclick="selectSummaryPage('both')">
        <span>📑</span> ${tabBothText}
      </button>
      <button class="btn-print" onclick="window.print()">
        <span>🖨️</span> ${printText}
      </button>
    </div>
  `;

  // توليد HTML الصفحة الأولى
  const page1Html = `
    <div class="sheet-page-wrapper" id="sheet-p1">
      <div class="sheet-page-header">
        <div class="sheet-page-title">
          <span class="page-badge-number">📄 ${page1Badge}</span>
          <h3>${p1.title}</h3>
          <p>${p1.subtitle} • ${unit.title}</p>
        </div>
      </div>

      <!-- الفكرة المحورية -->
      <div class="pastel-card pastel-sky">
        <div class="card-head">
          <span>🌟</span> ${coreIdeaText}
        </div>
        <div class="core-idea-text">
          ${renderMarkdown(p1.coreIdea)}
        </div>
      </div>

      <!-- معرض الخرائط والرسومات البصرية التوضيحية (إن وجد) -->
      ${p1.visualGallery ? renderVisualGallery(p1.visualGallery, isEn) : ''}

      <!-- المخطط الهيكلي البصري (إن وجد) -->
      ${p1.visualScheme ? renderVisualScheme(p1.visualScheme, isEn) : ''}

      <!-- الخط الزمني المتسلسل (إن وجد) -->
      ${p1.timeline ? renderTimeline(p1.timeline, isEn) : ''}

      <!-- خريطة المفاهيم التفاعلية ومحاور الدرس الأساسية -->
      ${p1.mindMap ? renderInteractiveConceptMap(p1.mindMap, isEn, mindMapText) : ''}

      <!-- جدول المفردات أو المصطلحات العلمية -->
      <div class="pastel-card pastel-emerald">
        <div class="card-head">
          <span>📖</span> ${vocabText}
        </div>
        <div class="vocab-table-wrapper">
          <table class="vocab-pastel-table">
            <thead>
              <tr>
                <th>${vocabCols[0]}</th>
                <th>${vocabCols[1]}</th>
                <th>${vocabCols[2]}</th>
                <th>${vocabCols[3]}</th>
              </tr>
            </thead>
            <tbody>
              ${p1.vocabulary.map(v => `
                <tr>
                  <td style="font-weight: 800; color: #15803d;">${renderMarkdown(v.word)}</td>
                  <td>${renderMarkdown(v.meaning)}</td>
                  <td style="color: #b91c1c; font-weight: 600;">${renderMarkdown(v.opposite || '—')}</td>
                  <td style="color: #4338ca; font-weight: 600;">${renderMarkdown(v.plural || '—')}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <!-- مواطن الجمال أو القوانين والمفاهيم العلمية -->
      <div class="pastel-card pastel-rose">
        <div class="card-head">
          <span>🎨</span> ${beautyText}
        </div>
        ${p1.beautyPoints.map(b => `
          <div class="beauty-box">
            <div class="beauty-phrase">« ${renderMarkdown(b.phrase)} »</div>
            <div class="beauty-secret"><strong>${beautySecretText}</strong> ${renderMarkdown(b.secret)}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  // توليد HTML الصفحة الثانية
  const page2Html = `
    <div class="sheet-page-wrapper" id="sheet-p2">
      <div class="sheet-page-header">
        <div class="sheet-page-title">
          <span class="page-badge-number" style="background:#fef3c7; color:#92400e; border-color:#fde68a;">📄 ${page2Badge}</span>
          <h3>${p2.title}</h3>
          <p>${p2.subtitle} • ${unit.title}</p>
        </div>
      </div>

      <!-- معرض الصور والخرائط في الصفحة الثانية (إن وجد) -->
      ${p2.visualGallery ? renderVisualGallery(p2.visualGallery, isEn) : ''}

      <!-- المخطط الهيكلي البصري في الصفحة الثانية (إن وجد) -->
      ${p2.visualScheme ? renderVisualScheme(p2.visualScheme, isEn) : ''}

      <!-- الخط الزمني البصري المتسلسل (إن وجد) -->
      ${p2.timeline ? renderTimeline(p2.timeline, isEn) : ''}

      <!-- كبسولة القواعد / القوانين الرياضية / كتالوج المعادلات الكيميائية -->
      <div class="pastel-card pastel-emerald">
        <div class="card-head">
          <span>⚖️</span> ${p2.grammarFocus ? p2.grammarFocus.title : (isEn ? 'Core Rules & Formulas' : 'القواعد الأساسية')}
        </div>
        ${p2.grammarFocus && p2.grammarFocus.rules ? renderRulesList(p2.grammarFocus.rules) : ''}
      </div>

      <!-- كبسولة التنبيهات / قواعد الدوائر والتوصيل -->
      <div class="pastel-card pastel-lavender">
        <div class="card-head">
          <span>✍️</span> ${p2.spellingFocus ? p2.spellingFocus.title : (isEn ? 'Key Notes & Applications' : 'ملاحظات وتطبيقات')}
        </div>
        ${p2.spellingFocus && p2.spellingFocus.rules ? renderRulesList(p2.spellingFocus.rules) : ''}
      </div>

      <!-- كبسولة إضافية إن وجدت -->
      ${p2.writingFocus ? `
        <div class="pastel-card pastel-sky">
          <div class="card-head">
            <span>📝</span> ${p2.writingFocus.title}
          </div>
          <p style="font-size: 0.95rem; line-height: 1.8; color: #1e293b;">${renderMarkdown(p2.writingFocus.desc)}</p>
        </div>
      ` : ''}

      <!-- أسئلة الامتحان الذهبية وإجاباتها النموذجية -->
      <div style="margin-top: 1.25rem;">
        <div style="font-weight: 800; font-size: 1.05rem; color: #b45309; margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
          <span>🏆</span> ${goldenText}
        </div>
        ${p2.goldenQuestions.map(g => `
          <div class="golden-qa-card">
            <div class="golden-q-header">${renderMarkdown(g.q)}</div>
            <div class="golden-a-body">${renderMarkdown(g.a)}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  let contentHtml = '';
  if (AppState.selectedSummaryPage === 'page1') {
    contentHtml = page1Html;
  } else if (AppState.selectedSummaryPage === 'page2') {
    contentHtml = page2Html;
  } else {
    contentHtml = `${page1Html}<div style="height: 1.5rem;"></div>${page2Html}`;
  }

  container.innerHTML = `
    <div class="two-page-sheet" id="print-area">
      ${pageNavHtml}
      ${contentHtml}
    </div>
  `;
}

window.selectSummaryPage = function(pageKey) {
  AppState.selectedSummaryPage = pageKey;
  const mainView = document.getElementById('view-container');
  renderSummarySheet(mainView);
};

// ==========================================
// 6. بنك أسئلة وتدريب الفروع (المستقلة + الشامل المختلط)
// ==========================================
function renderLessonQuizView(container) {
  const isSci = isEnglishSubject(AppState.currentSubject);
  const curr = getActiveCurriculum();
  const unit = curr.units.find(u => u.id === AppState.selectedUnitId);
  const lesson = unit ? unit.lessons.find(l => l.id === AppState.selectedLessonId) : null;

  if (!lesson) {
    container.innerHTML = `<div class="empty-state">${isSci ? 'Select a lesson to start practice.' : 'اختر درساً لبدء التدريب وبنك الأسئلة.'}</div>`;
    return;
  }

  // شريط فروع الدرس مع زر الاختبار الشامل
  const branchPillsHtml = `
    <div class="topics-bar-wrap">
      <div class="topics-pills">
        <button class="topic-chip ${AppState.selectedTopicId === 'all' ? 'active' : ''}" 
                onclick="selectLessonTopic('all')">
          <span>🎯</span> ${isSci ? 'All Sub-Topics (Shuffled Exam)' : 'امتحان شامل لكل عناصر الدرس (عشوائي)'}
        </button>
        ${lesson.topics.map(t => `
          <button class="topic-chip ${AppState.selectedTopicId === t.id ? 'active' : ''}" 
                  onclick="selectLessonTopic('${t.id}')">
            ${t.title} (${t.questions.length})
          </button>
        `).join('')}
      </div>
      <div style="display:flex; gap:0.5rem; align-items:center;">
        <button class="btn-shuffle" onclick="shuffleActiveQuestions()">
          <span>🔀</span> ${isSci ? 'Reshuffle' : 'إعادة خلط الأسئلة'}
        </button>
      </div>
    </div>
  `;

  // جلب الأسئلة النشطة
  let activeQuestions = [];
  let quizTitle = '';
  let quizSubtitle = '';

  if (AppState.selectedTopicId === 'all') {
    activeQuestions = lesson.lessonExam ? [...lesson.lessonExam.questions] : [];
    quizTitle = lesson.lessonExam ? lesson.lessonExam.title : lesson.title;
    quizSubtitle = lesson.lessonExam ? lesson.lessonExam.subtitle : '';
  } else {
    const currentTopic = lesson.topics.find(t => t.id === AppState.selectedTopicId);
    if (currentTopic) {
      activeQuestions = [...currentTopic.questions];
      quizTitle = `${lesson.title} • ${currentTopic.title}`;
      quizSubtitle = isSci ? `Dedicated sub-topic practice (${activeQuestions.length} questions)` : `تدريب متخصص على هذا الفرع دون دمج أو تشتيت (${activeQuestions.length} سؤالاً)`;
    }
  }

  if (AppState.isShuffled) {
    activeQuestions = shuffleArray(activeQuestions);
  }

  container.innerHTML = `
    ${branchPillsHtml}
    <div id="quiz-mount"></div>
  `;

  renderQuizInteractive(
    document.getElementById('quiz-mount'),
    activeQuestions,
    quizTitle,
    quizSubtitle,
    `lesson_${lesson.id}_${AppState.selectedTopicId}`
  );
}

window.selectLessonTopic = function(topicId) {
  AppState.selectedTopicId = topicId;
  AppState.isShuffled = false;
  AppState.currentAnswers = {};
  AppState.questionEvaluations = {};
  AppState.examSubmitted = false;
  const mainView = document.getElementById('view-container');
  renderLessonQuizView(mainView);
};

window.shuffleActiveQuestions = function() {
  AppState.isShuffled = true;
  const mainView = document.getElementById('view-container');
  renderLessonQuizView(mainView);
};

// ==========================================
// 7. اختبارات الوحدات الشاملة (Unit Exams)
// ==========================================
function renderUnitExamsView(container) {
  const isSci = isEnglishSubject(AppState.currentSubject);
  const curr = getActiveCurriculum();

  if (!curr.units || curr.units.length === 0) {
    container.innerHTML = `<div class="empty-state">${isSci ? 'No units available for this subject.' : 'لا توجد وحدات متاحة لهذه المادة حالياً.'}</div>`;
    return;
  }

  // وضع عرض شبكة كروت الوحدات
  if (AppState.activeUnitExamView === 'grid') {
    const cardsHtml = curr.units.map((u, idx) => {
      const qCount = u.unitTest ? u.unitTest.questions.length : 0;
      const marksCount = qCount * 2;
      const lessonTitles = u.lessons ? u.lessons.map(l => l.title).join(' • ') : '';
      return `
        <div class="unit-exam-card">
          <div>
            <span class="unit-card-badge">${isSci ? `Unit ${idx + 1}` : `الوحدة ${idx + 1}`}</span>
            <div class="unit-card-title">${u.title}</div>
            <div class="unit-card-lessons">${lessonTitles}</div>
          </div>
          <div>
            <div class="unit-card-meta-chips">
              <span class="unit-meta-chip">📝 ${qCount} ${isSci ? 'Questions' : 'سؤالاً'}</span>
              <span class="unit-meta-chip">⭐ ${marksCount} ${isSci ? 'Marks' : 'درجة'}</span>
              <span class="unit-meta-chip">⏱️ ${isSci ? '45 Min Suggested' : '٤٥ دقيقة مقترحة'}</span>
            </div>
            <button class="btn-start-unit-exam" onclick="startUnitExam('${u.unitTest ? u.unitTest.id : ''}')">
              <span>🎯</span> ${isSci ? 'Start Unit Assessment' : 'ابدأ اختبار الوحدة'}
            </button>
          </div>
        </div>
      `;
    }).join('');

    container.innerHTML = `
      <div class="exam-header-banner">
        <h2>🏆 ${isSci ? 'Unit Assessments (Standardized Comprehensive Evaluations)' : 'اختبارات الوحدات الشاملة (تقييم شامل وموسع)'}</h2>
        <p>${isSci ? 'Choose a unit to test all its lessons and sub-topics together in one unified exam' : 'اختر الوحدة لاختبار جميع فروعها ودروسها مجتمعة وفق معايير الاختبارات الشهرية والرسمية'}</p>
      </div>
      <div class="unit-cards-grid">
        ${cardsHtml}
      </div>
    `;
    return;
  }

  // وضع عرض الامتحان الفعلي
  const unitButtons = curr.units.map(u => `
    <button class="exam-selector-btn ${AppState.selectedUnitExamId === (u.unitTest ? u.unitTest.id : '') ? 'active' : ''}"
            onclick="selectUnitExam('${u.unitTest ? u.unitTest.id : ''}')">
      <span>🏆</span> ${u.title}
    </button>
  `).join('');

  let currentUnit = curr.units.find(u => u.unitTest && u.unitTest.id === AppState.selectedUnitExamId) || curr.units[0];
  if (!currentUnit || !currentUnit.unitTest) {
    container.innerHTML = `<div class="empty-state">${isSci ? 'No unit assessment available.' : 'لا يوجد اختبار متاح لهذه الوحدة.'}</div>`;
    return;
  }

  const unitTest = currentUnit.unitTest;
  container.innerHTML = `
    <div class="exam-header-banner">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem; margin-bottom:0.75rem;">
        <button class="btn-back-units" onclick="showUnitExamsGrid()">
          <span>📋</span> ${isSci ? 'View All Units Cards' : 'عرض كروت جميع الوحدات'}
        </button>
      </div>
      <h2>🏆 ${isSci ? 'Unit Assessment: ' : 'اختبار الوحدة: '} ${currentUnit.title}</h2>
      <p>${isSci ? 'Standardized comprehensive evaluation covering all topics and concepts of this unit' : 'تقييم شامل وموسع يغطي جميع دروس ومفردات ومفاهيم الوحدة وفق مواصفات الوزارة'}</p>
      <div class="exam-selector-pills">${unitButtons}</div>
    </div>
    <div id="unit-quiz-mount"></div>
  `;

  renderQuizInteractive(
    document.getElementById('unit-quiz-mount'),
    unitTest.questions,
    unitTest.title,
    unitTest.subtitle,
    `unit_${unitTest.id}`
  );
}

window.startUnitExam = function(unitExamId) {
  AppState.selectedUnitExamId = unitExamId;
  AppState.activeUnitExamView = 'exam';
  AppState.currentAnswers = {};
  AppState.questionEvaluations = {};
  AppState.examSubmitted = false;
  const mainView = document.getElementById('view-container');
  renderUnitExamsView(mainView);
  window.scrollTo({ top: 120, behavior: 'smooth' });
};

window.showUnitExamsGrid = function() {
  AppState.activeUnitExamView = 'grid';
  const mainView = document.getElementById('view-container');
  renderUnitExamsView(mainView);
  window.scrollTo({ top: 120, behavior: 'smooth' });
};

window.selectUnitExam = function(unitExamId) {
  AppState.selectedUnitExamId = unitExamId;
  AppState.activeUnitExamView = 'exam';
  AppState.currentAnswers = {};
  AppState.questionEvaluations = {};
  AppState.examSubmitted = false;
  const mainView = document.getElementById('view-container');
  renderUnitExamsView(mainView);
};

// ==========================================
// 8. امتحانات الوزارة الشاملة (Ministry Simulation Exams)
// ==========================================
function renderMinistryExamsView(container) {
  const isSci = isEnglishSubject(AppState.currentSubject);
  const curr = getActiveCurriculum();
  const examButtons = curr.officialExams.map(ex => `
    <button class="exam-selector-btn ${AppState.selectedMinistryExamId === ex.id ? 'active' : ''}"
            onclick="selectMinistryExam('${ex.id}')">
      <span>📜</span> ${ex.title}
    </button>
  `).join('');

  const currentExam = curr.officialExams.find(e => e.id === AppState.selectedMinistryExamId) || curr.officialExams[0];
  if (!currentExam) {
    container.innerHTML = `<div class="empty-state">${isSci ? 'No official simulation exam available.' : 'لا يوجد نموذج امتحان متاح حالياً.'}</div>`;
    return;
  }

  container.innerHTML = `
    <div class="exam-header-banner">
      <h2>📜 ${isSci ? 'Official Ministry Model Simulation Exams' : 'امتحانات الوزارة الرسمية الشاملة (نماذج استرشادية معتمدة)'}</h2>
      <p>${isSci ? 'Full-term standardized simulations matching official Egyptian Ministry of Education specifications' : 'نماذج امتحانات الترم الأول المصممة بالكامل وفق أحدث مواصفات الورقة الامتحانية لوزارة التربية والتعليم'}</p>
      <div class="exam-selector-pills">${examButtons}</div>
    </div>
    <div id="ministry-quiz-mount"></div>
  `;

  renderQuizInteractive(
    document.getElementById('ministry-quiz-mount'),
    currentExam.questions,
    currentExam.title,
    currentExam.subtitle,
    `ministry_${currentExam.id}`
  );
}

window.selectMinistryExam = function(examId) {
  AppState.selectedMinistryExamId = examId;
  AppState.currentAnswers = {};
  AppState.questionEvaluations = {};
  AppState.examSubmitted = false;
  const mainView = document.getElementById('view-container');
  renderMinistryExamsView(mainView);
};

// ==========================================
// مساعدات المؤقت الاختياري للامتحانات
// ==========================================
function formatTimerSeconds(sec) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

window.setExamTimer = function(mode) {
  AppState.examTimerMode = mode;
  if (AppState.examTimerInterval) {
    clearInterval(AppState.examTimerInterval);
    AppState.examTimerInterval = null;
  }
  if (mode === 'off') {
    AppState.examTimerSecondsRemaining = 0;
  } else {
    AppState.examTimerSecondsRemaining = parseInt(mode) * 60;
    startExamTimerCountdown();
  }
  rerenderActiveQuiz();
};

function startExamTimerCountdown() {
  if (AppState.examTimerInterval) clearInterval(AppState.examTimerInterval);
  AppState.examTimerInterval = setInterval(() => {
    if (AppState.examTimerSecondsRemaining > 0 && !AppState.examSubmitted) {
      AppState.examTimerSecondsRemaining--;
      const displayEl = document.getElementById('exam-timer-display');
      if (displayEl) {
        displayEl.textContent = '⏱️ ' + formatTimerSeconds(AppState.examTimerSecondsRemaining);
        if (AppState.examTimerSecondsRemaining <= 300) {
          displayEl.classList.add('timer-warning');
        } else {
          displayEl.classList.remove('timer-warning');
        }
      }
      if (AppState.examTimerSecondsRemaining <= 0) {
        clearInterval(AppState.examTimerInterval);
        AppState.examTimerInterval = null;
        const isSci = isEnglishSubject(AppState.currentSubject);
        alert(isSci ? '⏰ Time is up! Your exam has been automatically submitted.' : '⏰ انتهى وقت الامتحان المحدد! تم تسليم إجاباتك تلقائياً وعرض تقرير النتيجة والمراجعة النموذجية.');
        submitExamAction('auto_timeout');
      }
    }
  }, 1000);
}

// ==========================================
// 9. محرك الأسئلة التفاعلي الموحد (Interactive Engine)
// ==========================================
function renderQuizInteractive(container, questions, title, subtitle, examKey) {
  if (!container) return;
  const isSci = isEnglishSubject(AppState.currentSubject);
  const isExamMode = (AppState.feedbackMode === 'exam');
  const isSubmitted = AppState.examSubmitted;

  if (!questions || questions.length === 0) {
    container.innerHTML = `<div class="empty-state">${isSci ? 'No questions in this section.' : 'لا توجد أسئلة في هذا القسم حالياً.'}</div>`;
    return;
  }

  // حساب الدرجات بدقة بناءً على درجات كل سؤال
  let totalPossibleMarks = 0;
  let totalEarnedMarks = 0;
  let answeredCount = 0;

  questions.forEach(q => {
    const qMarks = q.marks || (q.type === 'essay' ? 4 : 2);
    totalPossibleMarks += qMarks;
    const studentVal = AppState.currentAnswers[q.id];
    if (studentVal !== undefined && studentVal !== null && studentVal !== '') {
      answeredCount++;
      if (q.type === 'mcq') {
        if (studentVal === q.correctIndex) totalEarnedMarks += qMarks;
      } else {
        const evalObj = AppState.questionEvaluations[q.id];
        if (evalObj) {
          if (evalObj.selfConfirmed || evalObj.score >= 80) {
            totalEarnedMarks += qMarks;
          } else if (evalObj.score >= 50) {
            totalEarnedMarks += Math.round(qMarks * 0.75 * 10) / 10;
          } else if (evalObj.score > 0) {
            totalEarnedMarks += Math.round(qMarks * 0.4 * 10) / 10;
          }
        }
      }
    }
  });

  totalEarnedMarks = Math.min(totalPossibleMarks, Math.round(totalEarnedMarks * 10) / 10);
  const percentage = totalPossibleMarks > 0 ? Math.round((totalEarnedMarks / totalPossibleMarks) * 100) : 0;

  // شريط النتيجة في وضع الامتحان بعد التسليم
  let scoreCardHtml = '';
  if (isExamMode && isSubmitted) {
    let appraisal = '';
    let letterGrade = '';
    if (isSci) {
      if (percentage >= 90) { appraisal = '🏆 Outstanding! Master-level excellence across all learning outcomes.'; letterGrade = 'A+ (Mastery)'; }
      else if (percentage >= 75) { appraisal = '🌟 Very Good! Strong comprehension with minor concepts to review.'; letterGrade = 'A (Advanced)'; }
      else if (percentage >= 50) { appraisal = '👍 Good effort! Review the detailed solutions below to reach full marks.'; letterGrade = 'B (Proficient)'; }
      else { appraisal = '⚠️ Keep practicing! Read the 2-page visual cheat sheet and try again.'; letterGrade = 'C (Needs Practice)'; }
    } else {
      if (percentage >= 90) { appraisal = '🏆 ممتاز جداً! أداء استثنائي يعكس إتقاناً تاماً لنواتج التعلم الوزارية.'; letterGrade = 'ممتاز (أ+)'; }
      else if (percentage >= 75) { appraisal = '🌟 جيد جداً! مستوى رفيع مع إمكانية مراجعة بعض الجزئيات البسيطة.'; letterGrade = 'جيد جداً (أ)'; }
      else if (percentage >= 50) { appraisal = '👍 أداء متوسط مقبول، ونوصي بمراجعة كبسولة القواعد والإجابات النموذجية.'; letterGrade = 'جيد (ب)'; }
      else { appraisal = '⚠️ يحتاج للمزيد من التركيز والمذاكرة، نوصي بمراجعة ورقة التلخيص البصرية.'; letterGrade = 'يحتاج للمراجعة (ج)'; }
    }

    scoreCardHtml = `
      <div class="result-banner">
        <div class="result-circle">
          <div class="result-percentage">${percentage}%</div>
          <div class="result-fraction">${totalEarnedMarks} / ${totalPossibleMarks} ${isSci ? 'Marks' : 'درجة'}</div>
        </div>
        <div class="result-title">${isSci ? 'Examination Score & Performance Report' : 'تقرير نتيجة الاختبار والمستوى التحصيلي'} • ${letterGrade}</div>
        <div class="result-marks-row">
          <span class="marks-chip">📝 ${isSci ? `Answered: ${answeredCount} of ${questions.length}` : `أجبت عن: ${answeredCount} من ${questions.length} سؤالاً`}</span>
          <span class="marks-chip">⭐ ${isSci ? `Score: ${totalEarnedMarks} / ${totalPossibleMarks}` : `الدرجة: ${totalEarnedMarks} من ${totalPossibleMarks}`}</span>
        </div>
        <div class="result-appraisal">${appraisal}</div>
        <div class="result-buttons">
          <button class="btn-print" onclick="window.print()">🖨️ ${isSci ? 'Print Report' : 'طباعة تقرير الإجابات والتفسيرات'}</button>
          <button class="btn-secondary" onclick="resetQuiz()">🔄 ${isSci ? 'Retry Exam' : 'إعادة المحاولة'}</button>
        </div>
      </div>
    `;
  }

  // شريط المؤقت والتحكم بالوقت
  const timerToolbarHtml = `
    <div class="exam-timer-toolbar">
      <div class="timer-controls-group">
        <span class="timer-icon-label">⏱️ ${isSci ? 'Exam Timer:' : 'مؤقت الامتحان:'}</span>
        <button class="timer-opt-btn ${AppState.examTimerMode === 'off' ? 'active' : ''}" onclick="setExamTimer('off')">
          ${isSci ? 'Off (Free Study)' : 'بدون مؤقت (مذاكرة حرة)'}
        </button>
        <button class="timer-opt-btn ${AppState.examTimerMode === '15' ? 'active' : ''}" onclick="setExamTimer('15')">
          ${isSci ? '15 Min' : '١٥ دقيقة'}
        </button>
        <button class="timer-opt-btn ${AppState.examTimerMode === '30' ? 'active' : ''}" onclick="setExamTimer('30')">
          ${isSci ? '30 Min' : '٣٠ دقيقة'}
        </button>
        <button class="timer-opt-btn ${AppState.examTimerMode === '45' ? 'active' : ''}" onclick="setExamTimer('45')">
          ${isSci ? '45 Min' : '٤٥ دقيقة'}
        </button>
        <button class="timer-opt-btn ${AppState.examTimerMode === '60' ? 'active' : ''}" onclick="setExamTimer('60')">
          ${isSci ? '60 Min' : '٦٠ دقيقة'}
        </button>
      </div>
      ${AppState.examTimerMode !== 'off' && !isSubmitted ? `
        <div class="timer-countdown-badge ${AppState.examTimerSecondsRemaining <= 300 ? 'timer-warning' : ''}" id="exam-timer-display">
          ⏱️ ${formatTimerSeconds(AppState.examTimerSecondsRemaining)}
        </div>
      ` : ''}
    </div>
  `;

  // بناء كروت الأسئلة بحسب نوع السؤال
  const questionsHtml = questions.map((q, idx) => {
    const type = q.type || 'mcq';
    const studentVal = AppState.currentAnswers[q.id];
    const isAnswered = (studentVal !== undefined && studentVal !== null && studentVal !== '');
    const evalObj = AppState.questionEvaluations[q.id];

    let cardStatusClass = '';
    let isCorrect = false;

    if (type === 'mcq') {
      isCorrect = isAnswered && (studentVal === q.correctIndex);
    } else if (evalObj) {
      isCorrect = evalObj.isCorrect;
    }

    if ((!isExamMode && isAnswered) || (isExamMode && isSubmitted)) {
      cardStatusClass = isCorrect ? 'answered-correct' : 'answered-wrong';
    }

    // شارة نوع السؤال
    let typeBadgeText = isSci ? 'Multiple Choice' : 'اختيار من متعدد';
    let typeBadgeClass = 'type-mcq';
    if (type === 'complete') {
      typeBadgeText = isSci ? 'Complete the Blank' : 'أكمل الفراغ';
      typeBadgeClass = 'type-complete';
    } else if (type === 'extract_parse') {
      typeBadgeText = isSci ? 'Problem Solving / Calculation' : 'استخراج وإعراب';
      typeBadgeClass = 'type-extract';
    } else if (type === 'essay') {
      typeBadgeText = isSci ? 'Reasoning / Scientific Essay' : 'سؤال مقالي / تعليل';
      typeBadgeClass = 'type-essay';
    }

    // شارة الصعوبة والدرجات
    let diffColor = '#2563eb';
    if (q.difficulty === 'سهل' || q.difficulty === 'Easy') diffColor = '#16a34a';
    else if (q.difficulty === 'صعب' || q.difficulty === 'Hard') diffColor = '#dc2626';

    const qMarks = q.marks || (type === 'essay' ? 4 : 2);
    const marksBadgeText = isSci ? `${qMarks} Marks` : (qMarks === 4 ? '٤ درجات' : (qMarks === 2 ? 'درجتان' : `${qMarks} درجات`));

    // 1) واجهة MCQ
    let bodyHtml = '';
    if (type === 'mcq') {
      const optionsHtml = q.options.map((opt, optIdx) => {
        const isThisSelected = (studentVal === optIdx);
        let btnClass = 'option-btn';
        if (isThisSelected) btnClass += ' selected';

        if ((!isExamMode && isAnswered) || (isExamMode && isSubmitted)) {
          if (optIdx === q.correctIndex) {
            btnClass += ' correct-choice';
          } else if (isThisSelected && !isCorrect) {
            btnClass += ' wrong-choice';
          }
        }

        const letterPrefix = isSci 
          ? ['A', 'B', 'C', 'D'][optIdx] || (optIdx + 1)
          : ['أ', 'ب', 'ج', 'د'][optIdx] || (optIdx + 1);

        return `
          <button class="${btnClass}" 
                  onclick="handleMcqSelect('${q.id}', ${optIdx})"
                  ${(!isExamMode && isAnswered) ? 'disabled' : ''}>
            <span><span class="opt-prefix">${letterPrefix}</span> ${opt}</span>
            ${((!isExamMode && isAnswered) || (isExamMode && isSubmitted)) ? (
              optIdx === q.correctIndex ? `<span style="color:#16a34a; font-weight:800;">✓ ${isSci ? 'Correct' : 'صواب'}</span>` :
              (isThisSelected ? `<span style="color:#dc2626; font-weight:800;">✗ ${isSci ? 'Wrong' : 'خطأ'}</span>` : '')
            ) : ''}
          </button>
        `;
      }).join('');

      bodyHtml = `<div class="options-grid">${optionsHtml}</div>`;
    } 
    // 2) واجهة complete & extract_parse
    else if (type === 'complete' || type === 'extract_parse') {
      const inputVal = studentVal || '';
      bodyHtml = `
        <div class="interactive-input-box">
          <div class="input-row">
            <input type="text" class="q-text-input" id="input_${q.id}" 
                   placeholder="${isSci ? 'Type your precise answer here...' : 'اكتب إجابتك هنا بدقة...'}" 
                   value="${escapeHtml(inputVal)}"
                   ${(!isExamMode && evalObj) ? 'readonly' : ''}
                   onchange="handleTextInputChange('${q.id}', this.value)"
                   onkeypress="if(event.key==='Enter') document.getElementById('btn_check_${q.id}')?.click()" />
            ${(!isExamMode) ? `
              <button class="btn-check-answer" id="btn_check_${q.id}" onclick="handleCheckTextAnswer('${q.id}')">
                <span>🔍</span> ${isSci ? 'Check Answer' : 'تحقق من الإجابة'}
              </button>
            ` : ''}
          </div>
        </div>
      `;
    } 
    // 3) واجهة essay
    else if (type === 'essay') {
      const essayVal = studentVal || '';
      bodyHtml = `
        <div class="interactive-input-box">
          <textarea class="q-essay-textarea" id="essay_${q.id}" 
                    placeholder="${isSci ? 'State your scientific reasoning or give reasons here...' : 'اكتب إجابتك الشارحة هنا بأسلوب سليم...'}"
                    ${(!isExamMode && evalObj) ? 'readonly' : ''}
                    onchange="handleTextInputChange('${q.id}', this.value)">${escapeHtml(essayVal)}</textarea>
          <div class="essay-footer-bar">
            <span>💡 ${isSci ? 'Include key scientific terms, formulas, and conditions.' : 'يفضل تضمين المفاهيم والكلمات المعبرة عن السؤال بدقة.'}</span>
            ${(!isExamMode) ? `
              <button class="btn-check-answer" onclick="handleCheckEssayAnswer('${q.id}')" style="background:#7e22ce;">
                <span>✨</span> ${isSci ? 'Evaluate Scientific Reasoning' : 'تقييم الإجابة المقالية'}
              </button>
            ` : ''}
          </div>
        </div>
      `;
    }

    // بطاقة التفسير والتقييم والإجابة النموذجية
    let feedbackCardHtml = '';
    if ((!isExamMode && isAnswered) || (isExamMode && isSubmitted)) {
      if (type === 'mcq') {
        const whyWrongText = (!isCorrect && q.whyWrong && q.whyWrong[studentVal]) ? q.whyWrong[studentVal] : null;
        feedbackCardHtml = `
          <div class="explanation-card ${isCorrect ? 'success-box' : 'error-box'}">
            <div class="exp-header">
              <span>${isCorrect ? (isSci ? '🎯 Correct Choice Explanation:' : '🎯 تفسير الإجابة الصحيحة:') : (isSci ? '⚠️ Choice Analysis & Correction:' : '⚠️ توضيح الصواب والخطأ:')}</span>
            </div>
            <div class="exp-body">
              <strong>${isSci ? `Why (${q.options[q.correctIndex]}) is correct:` : `لماذا الإجابة الصحيحة هي (${q.options[q.correctIndex]}):`}</strong><br>
              ${q.explanation}
            </div>
            ${whyWrongText ? `
              <div class="exp-why-wrong-box">
                <strong>${isSci ? `Note: Why your choice (${q.options[studentVal]}) is incorrect:` : `انتبه: لماذا خيارك (${q.options[studentVal]}) غير صحيح؟`}</strong><br>
                ${whyWrongText}
              </div>
            ` : ''}
          </div>
        `;
      } else if (type === 'complete' || type === 'extract_parse') {
        const res = evalObj || evaluateComplete(studentVal, q.acceptableAnswers || []);
        feedbackCardHtml = `
          <div class="evaluation-result-card ${res.isCorrect ? 'eval-correct' : 'eval-wrong'}">
            <div class="eval-status-row">
              <span>${res.isCorrect ? '✅' : '⚠️'}</span>
              <span>${res.statusText}</span>
            </div>
            <div class="model-answer-box">
              <strong>${isSci ? 'Official Ministry Model Answer:' : 'الإجابة النموذجية الوزارية:'}</strong> ${q.modelAnswer || q.acceptableAnswers?.[0]}
            </div>
            ${q.explanation ? `
              <div style="margin-top: 0.5rem; font-size: 0.88rem; color: #475569;">
                <strong>${isSci ? 'Scientific Explanation:' : 'التعليل والتوضيح:'}</strong> ${q.explanation}
              </div>
            ` : ''}
          </div>
        `;
      } else if (type === 'essay') {
        const res = evalObj || evaluateEssay(studentVal, q.keywords || [], q.modelAnswer, q.acceptableAnswers);
        feedbackCardHtml = `
          <div class="evaluation-result-card ${res.score >= 70 ? 'eval-correct' : (res.score >= 50 ? 'eval-partial' : 'eval-wrong')}">
            <div class="eval-status-row">
              <span>${res.score >= 70 ? '🌟' : (res.score >= 50 ? '👍' : '⚠️')}</span>
              <span>${isSci ? `Rubric Fulfillment: ${res.score}% — ${res.statusText}` : `درجة استيفاء المعايير: ${res.score}% — ${res.statusText}`}</span>
            </div>

            ${(res.matched?.length > 0 || res.missing?.length > 0) ? `
              <div class="keyword-chips-wrap">
                <span style="font-size:0.8rem; font-weight:700; align-self:center;">${isSci ? 'Concepts:' : 'المفاهيم:'}</span>
                ${(res.matched || []).map(m => `<span class="keyword-chip chip-found">✓ ${m}</span>`).join('')}
                ${(res.missing || []).map(m => `<span class="keyword-chip chip-missing">✗ ${m}</span>`).join('')}
              </div>
            ` : ''}

            <div class="model-answer-box">
              <strong>${isSci ? 'Approved Model Answer for Full Marks:' : 'الإجابة النموذجية المعتمدة لتقدير الدرجة:'}</strong><br>
              ${q.modelAnswer}
            </div>

            ${q.explanation ? `
              <div style="margin-top: 0.5rem; font-size: 0.88rem; color: #475569;">
                <strong>${isSci ? 'Grading Guidelines:' : 'إرشادات التصحيح:'}</strong> ${q.explanation}
              </div>
            ` : ''}

            ${(!evalObj?.selfConfirmed) ? `
              <div class="self-eval-box">
                <span class="self-eval-prompt">${isSci ? 'Did you phrase the concept correctly in your own words?' : 'هل كتبت المعنى والمفهوم العلمي بأسلوبك وصياغتك الخاصة؟'}</span>
                <button class="btn-self-confirm" onclick="confirmEssayFullMarks('${q.id}')">
                  ⭐ ${isSci ? 'Accept My Answer (Award Full Marks)' : 'إجابتي صحيحة بنفس المعنى (احتساب الدرجة كاملة)'}
                </button>
              </div>
            ` : `
              <div class="self-eval-confirmed">
                ✅ ${isSci ? 'Full marks awarded based on personal confirmation' : 'تم اعتماد الدرجة الكاملة بنجاح للتعبير السليم عن المفهوم'}
              </div>
            `}
          </div>
        `;
      }
    }

    return `
      <div class="question-card ${cardStatusClass}" id="card_${q.id}">
        <div class="q-top-row">
          <span class="q-number-pill">${isSci ? `Question ${idx + 1} of ${questions.length}` : `السؤال ${idx + 1} من ${questions.length}`}</span>
          <span class="badge-marks">⭐ ${marksBadgeText}</span>
          <span class="question-type-badge ${typeBadgeClass}">${typeBadgeText}</span>
          ${q.difficulty ? `<span class="q-category-tag" style="border: 1px solid ${diffColor}; color: ${diffColor};">${q.difficulty}</span>` : ''}
          ${q.category ? `<span class="q-category-tag">${q.category}</span>` : ''}
        </div>

        ${q.readingPassage ? `<div class="q-reading-passage">${q.readingPassage}</div>` : ''}

        ${q.imageUrl ? `
          <div class="q-image-container">
            <img src="${q.imageUrl}" class="q-attached-image" alt="شكل توضيحي للسؤال" onclick="openImageModal('${q.imageUrl}', '${escapeHtml(q.imageCaption || q.question)}')" title="${isSci ? 'Click to enlarge diagram' : 'انقر لتكبير الشكل / الخريطة'}" />
            ${q.imageCaption ? `<div class="q-image-caption"><span>🔍</span> ${q.imageCaption}</div>` : ''}
          </div>
        ` : ''}

        <div class="q-text">${q.question}</div>
        ${bodyHtml}
        ${feedbackCardHtml}
      </div>
    `;
  }).join('');

  // شريط التسليم في وضع الامتحان
  let submitBarHtml = '';
  if (isExamMode && !isSubmitted) {
    submitBarHtml = `
      <div class="exam-submit-bar">
        <div style="margin-bottom: 1rem; font-weight: 700; color: #475569;">
          ${isSci ? `You answered <strong>${answeredCount}</strong> of <strong>${questions.length}</strong> questions` : `أجبت عن <strong>${answeredCount}</strong> من أصل <strong>${questions.length}</strong> سؤالاً`}
        </div>
        <button class="btn-submit-exam" onclick="submitExamAction('${examKey}')">
          ✅ ${isSci ? 'Submit Exam & View Detailed Model Report' : 'تسليم وإنهاء الامتحان وعرض التقرير النموذجي'}
        </button>
      </div>
    `;
  }

  container.innerHTML = `
    <div class="quiz-header-bar">
      <div class="quiz-title-info">
        <h3>${title}</h3>
        <p>${subtitle}</p>
      </div>
      <div class="quiz-stats-group">
        <span class="stat-chip">
          <span>⚙️</span>
          ${isExamMode ? (isSci ? 'Exam Mode (Simulation)' : 'وضع الامتحان (محاكاة رسمية)') : (isSci ? 'Study Mode (Instant Feedback)' : 'وضع المذاكرة (فوري)')}
        </span>
        <span class="stat-chip">
          <span>📊</span>
          ${isSci ? `Questions: ${questions.length}` : `الأسئلة: ${questions.length} سؤالاً`}
        </span>
        <span class="stat-chip">
          <span>⭐</span>
          ${isSci ? `Total: ${totalPossibleMarks} Marks` : `المجموع: ${totalPossibleMarks} درجة`}
        </span>
      </div>
    </div>

    ${timerToolbarHtml}
    ${scoreCardHtml}
    ${questionsHtml}
    ${submitBarHtml}
  `;
}

// معالجات الإجابة التفاعلية
window.handleMcqSelect = function(qid, optIndex) {
  AppState.currentAnswers[qid] = optIndex;
  rerenderActiveQuiz();
};

window.handleTextInputChange = function(qid, val) {
  AppState.currentAnswers[qid] = val;
};

window.handleCheckTextAnswer = function(qid) {
  const inputEl = document.getElementById(`input_${qid}`);
  const val = inputEl ? inputEl.value : (AppState.currentAnswers[qid] || '');
  AppState.currentAnswers[qid] = val;

  const qObj = findQuestionById(qid);
  if (qObj) {
    if (qObj.type === 'extract_parse') {
      AppState.questionEvaluations[qid] = evaluateExtractParse(val, qObj.acceptableAnswers || []);
    } else {
      AppState.questionEvaluations[qid] = evaluateComplete(val, qObj.acceptableAnswers || []);
    }
  }
  rerenderActiveQuiz();
};

window.handleCheckEssayAnswer = function(qid) {
  const essayEl = document.getElementById(`essay_${qid}`);
  const val = essayEl ? essayEl.value : (AppState.currentAnswers[qid] || '');
  AppState.currentAnswers[qid] = val;

  const qObj = findQuestionById(qid);
  if (qObj) {
    AppState.questionEvaluations[qid] = evaluateEssay(val, qObj.keywords || [], qObj.modelAnswer, qObj.acceptableAnswers);
  }
  rerenderActiveQuiz();
};

window.submitExamAction = function(examKey) {
  AppState.examSubmitted = true;
  if (AppState.examTimerInterval) {
    clearInterval(AppState.examTimerInterval);
    AppState.examTimerInterval = null;
  }

  const allQs = getCurrentActiveQuestions();
  allQs.forEach(q => {
    const val = AppState.currentAnswers[q.id];
    if (q.type === 'complete') {
      AppState.questionEvaluations[q.id] = evaluateComplete(val, q.acceptableAnswers || []);
    } else if (q.type === 'extract_parse') {
      AppState.questionEvaluations[q.id] = evaluateExtractParse(val, q.acceptableAnswers || []);
    } else if (q.type === 'essay') {
      AppState.questionEvaluations[q.id] = evaluateEssay(val, q.keywords || [], q.modelAnswer, q.acceptableAnswers);
    }
  });

  rerenderActiveQuiz();
  window.scrollTo({ top: 120, behavior: 'smooth' });
};

window.resetQuiz = function() {
  AppState.currentAnswers = {};
  AppState.questionEvaluations = {};
  AppState.examSubmitted = false;
  if (AppState.examTimerMode !== 'off') {
    AppState.examTimerSecondsRemaining = parseInt(AppState.examTimerMode) * 60;
    startExamTimerCountdown();
  }
  rerenderActiveQuiz();
};

function rerenderActiveQuiz() {
  const mainView = document.getElementById('view-container');
  if (AppState.activeTab === 'lesson_quiz') {
    renderLessonQuizView(mainView);
  } else if (AppState.activeTab === 'unit_exams') {
    renderUnitExamsView(mainView);
  } else if (AppState.activeTab === 'ministry_exams') {
    renderMinistryExamsView(mainView);
  }
}

function findQuestionById(qid) {
  const curr = getActiveCurriculum();
  for (const u of curr.units) {
    for (const l of u.lessons) {
      for (const top of l.topics) {
        for (const q of top.questions) {
          if (q.id === qid) return q;
        }
      }
    }
    if (u.unitTest) {
      for (const q of u.unitTest.questions) {
        if (q.id === qid) return q;
      }
    }
  }
  for (const ex of curr.officialExams) {
    for (const q of ex.questions) {
      if (q.id === qid) return q;
    }
  }
  return null;
}

function getCurrentActiveQuestions() {
  const curr = getActiveCurriculum();
  if (AppState.activeTab === 'lesson_quiz') {
    const unit = curr.units.find(u => u.id === AppState.selectedUnitId);
    const lesson = unit ? unit.lessons.find(l => l.id === AppState.selectedLessonId) : null;
    if (!lesson) return [];
    if (AppState.selectedTopicId === 'all') {
      return lesson.lessonExam ? lesson.lessonExam.questions : [];
    } else {
      const top = lesson.topics.find(t => t.id === AppState.selectedTopicId);
      return top ? top.questions : [];
    }
  } else if (AppState.activeTab === 'unit_exams') {
    const unit = curr.units.find(u => u.unitTest && u.unitTest.id === AppState.selectedUnitExamId);
    return unit ? unit.unitTest.questions : [];
  } else if (AppState.activeTab === 'ministry_exams') {
    const ex = curr.officialExams.find(e => e.id === AppState.selectedMinistryExamId);
    return ex ? ex.questions : [];
  }
  return [];
}

function shuffleArray(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function escapeHtml(str) {
  if (!str && str !== 0) return '';
  return str.toString().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// ==========================================
// 10. لوحة إحصائيات التفوق وإرشادات الطالب
// ==========================================
function renderAnalyticsView(container) {
  const isSci = isEnglishSubject(AppState.currentSubject);
  const curr = getActiveCurriculum();
  let totalLessons = 0;
  let topicQuestionsCount = 0;
  let unitQuestionsCount = 0;
  let officialQuestionsCount = 0;

  curr.units.forEach(u => {
    totalLessons += u.lessons.length;
    u.lessons.forEach(l => {
      l.topics.forEach(top => {
        topicQuestionsCount += top.questions.length;
      });
    });
    if (u.unitTest) unitQuestionsCount += u.unitTest.questions.length;
  });

  curr.officialExams.forEach(ex => {
    officialQuestionsCount += ex.questions.length;
  });

  container.innerHTML = `
    <div style="background: #ffffff; border-radius: 20px; padding: 2rem; border: 1.5px solid #e2e8f0; box-shadow: var(--shadow);">
      <h2 style="color: #1e3a8a; font-size: 1.5rem; font-weight: 900; margin-bottom: 0.5rem;">
        📊 ${isSci ? 'Student Achievement & Excellence Analytics' : 'لوحة إنجازات وتفوق الطالب'}
      </h2>
      <p style="color: #64748b; margin-bottom: 1.75rem;">
        ${isSci 
          ? 'Track your comprehensive curriculum coverage and mastery metrics for Grade 3 Preparatory (First Term).' 
          : 'تتبع شمولية تغطيتك لمنهج اللغة العربية للصف الثالث الإعدادي (الفصل الدراسي الأول) بالأرقام والمؤشرات الدقيقة.'}
      </p>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
        <div style="background: #eff6ff; padding: 1.25rem; border-radius: 14px; border: 1.5px solid #bfdbfe;">
          <div style="color: #1e40af; font-size: 0.9rem; font-weight: 700;">${isSci ? 'Official Curriculum Units' : 'عدد الوحدات المقررة'}</div>
          <div style="font-size: 1.8rem; font-weight: 900; color: #1e3a8a;">${curr.units.length} ${isSci ? 'Units' : 'وحدات'}</div>
          <div style="font-size: 0.8rem; color: #3b82f6; margin-top: 0.25rem;">${isSci ? 'Chemistry, Physics, Biology, Geology' : 'شاملة الاستماع والقراءة والنصوص'}</div>
        </div>

        <div style="background: #ecfdf5; padding: 1.25rem; border-radius: 14px; border: 1.5px solid #a7f3d0;">
          <div style="color: #065f46; font-size: 0.9rem; font-weight: 700;">${isSci ? 'Two-Page Visual Cheat Sheets' : 'ملخصات الصفحتين البصريتين'}</div>
          <div style="font-size: 1.8rem; font-weight: 900; color: #047857;">${totalLessons * 2} ${isSci ? 'Cheat Sheet Pages' : 'صفحة ملخصة'}</div>
          <div style="font-size: 0.8rem; color: #10b981; margin-top: 0.25rem;">${isSci ? '2 high-density pages per lesson' : 'صفحتان منظمتان لكل درس بالكامل'}</div>
        </div>

        <div style="background: #fdf4ff; padding: 1.25rem; border-radius: 14px; border: 1.5px solid #f5d0fe;">
          <div style="color: #86198f; font-size: 0.9rem; font-weight: 700;">${isSci ? 'Practice & Sub-Topic Bank' : 'أسئلة التدريب والوحدات'}</div>
          <div style="font-size: 1.8rem; font-weight: 900; color: #a21caf;">${topicQuestionsCount + unitQuestionsCount} ${isSci ? 'Questions' : 'سؤالاً'}</div>
          <div style="font-size: 0.8rem; color: #c084fc; margin-top: 0.25rem;">${isSci ? 'MCQ, Complete, Problem & Reasoning' : 'اختياري وإكمال واستخراج ومقالي'}</div>
        </div>

        <div style="background: #fffbeb; padding: 1.25rem; border-radius: 14px; border: 1.5px solid #fde68a;">
          <div style="color: #92400e; font-size: 0.9rem; font-weight: 700;">${isSci ? 'Official Simulation Exams' : 'الامتحانات الوزارية الرسمية'}</div>
          <div style="font-size: 1.8rem; font-weight: 900; color: #b45309;">${curr.officialExams.length} ${isSci ? 'Full-Term Exams' : 'نماذج استرشادية'}</div>
          <div style="font-size: 0.8rem; color: #f59e0b; margin-top: 0.25rem;">${officialQuestionsCount} ${isSci ? 'Standardized Questions' : 'سؤالاً وزارياً شاملاً'}</div>
        </div>
      </div>

      <div style="background: #f8fafc; border-radius: 14px; padding: 1.5rem; border: 1px solid #e2e8f0;">
        <h3 style="color: #1e293b; font-size: 1.15rem; font-weight: 800; margin-bottom: 0.75rem;">
          💡 ${isSci ? 'Success Strategy for Maximum Marks in the Prep 3 Official Examination:' : 'استراتيجية التفوق لحصد الدرجة النهائية في امتحان الشهادة الإعدادية:'}
        </h3>
        <ul style="line-height: 2; padding-left: 1.5rem; color: #334155; font-size: 0.95rem;">
          ${isSci ? `
            <li><strong>Master the 2-Page Visual Cheat Sheets:</strong> Start with Page 1 to absorb core concepts, mind maps, and scientific terms. Then study Page 2 for mathematical problem-solving steps, circuit rules, and model answers to golden questions.</li>
            <li><strong>Isolate Sub-Topics During Study:</strong> Practice each topic individually (e.g. Current intensity first, then Ohm's law, then electromagnets) to eliminate confusion between concepts.</li>
            <li><strong>Test Yourself with the Shuffled Lesson Exam:</strong> Take the randomized end-of-lesson exam to train your brain to retrieve knowledge under exam-like conditions.</li>
            <li><strong>Simulate Official Ministry Exams Under Time Pressure:</strong> Switch to <em>(Exam Mode)</em> in the Official Ministry Exams tab to test yourself with timed multi-disciplinary assessments.</li>
          ` : `
            <li><strong>المذاكرة بالصفحتين البصريتين:</strong> ابدأ بالصفحة الأولى لحفظ المفردات وفهم الفكرة ومواطن الجمال، ثم انتقل للصفحة الثانية لضبط قواعد النحو والإملاء وحل السؤال الذهبي.</li>
            <li><strong>الفصل بين الفروع أثناء التدريب:</strong> تدرب على كل فرع وحده (القراءة وحدها، النحو وحده، الإملاء وحده) لمنع أي تشتت، وتأكد من فهم سبب الصواب والخطأ.</li>
            <li><strong>حل الاختبار الشامل للدرس بدون ترتيب:</strong> بعد الانتهاء من فروع الدرس، اختبر نفسك في (الاختبار الشامل المختلط) لاختبار قدرتك على التنقل السريع بين المهارات.</li>
            <li><strong>المحاكاة الزمنية لامتحانات الوزارة:</strong> انتقل إلى تبويب (امتحانات الوزارة) واضبط الوضع على <em>(وضع الامتحان)</em> لتعيش أجواء لجنة الامتحان الرسمية.</li>
          `}
        </ul>
      </div>
    </div>
  `;
}
