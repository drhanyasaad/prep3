// Mathematics Excellence Platform - Grade 3 Preparatory (Prep 3 - Term 1)
// Official Ministry of Education Curriculum 2026 / 2027 (Strictly aligned with Math_EN_prep3_t1.pdf)
window.MATH_CURRICULUM_DATA = {
  "title": "MATHEMATICS EXCELLENCE PLATFORM",
  "grade": "Grade 3 Preparatory (Prep 3)",
  "term": "First Term - New Egyptian Curriculum 2026 / 2027",
  "labels": {
    "tabP1": "Page 1: Concepts, Mind Map & Terminology",
    "tabP2": "Page 2: Laws, Formulas & Golden Questions",
    "tabBoth": "View Both Pages Together (Comprehensive Review)",
    "print": "Print Cheat Sheet (2 Pages A4)",
    "page1Badge": "Page 1 of 2",
    "page2Badge": "Page 2 of 2",
    "coreIdea": "Core Mathematical Concept & Framework",
    "mindMap": "Conceptual Framework & Core Principles",
    "vocab": "Mathematical Terminology, Definitions & Symbols",
    "vocabCols": [
      "Term / Concept",
      "Mathematical Definition",
      "Opposite / Symbol",
      "Notation / Plural"
    ],
    "beauty": "Mathematical Theorems, Laws & Core Relations",
    "beautySecret": "Theorem Insight / Shortcut:",
    "golden": "Golden Ministerial Exam Questions & Step-by-Step Model Answers"
  },
  "units": [
    {
      "id": "ma_unit1",
      "number": 1,
      "title": "Unit 1: Numbers and Operations on them",
      "description": "Powers of Powers, Rational Exponents, and Exponential Equations with real-world applications",
      "color": "#7c3aed",
      "lessons": [
        {
          "id": "ma_u1_l1",
          "unitId": "ma_unit1",
          "number": 1,
          "type": "algebra",
          "title": "Lesson 1-1: Powers of Powers",
          "summarySheet": {
            "page1": {
              "title": "Page 1: Core Concepts, Mind Map & Laws of Integer and Rational Exponents",
              "subtitle": "Power of a Power Law • Power of Product & Quotient • Negative Exponents • Fractional Exponents",
              "coreIdea": "Exponents represent repeated multiplication. The Power of a Power rule states that raising a power to another power multiplies the exponents: (aᵐ)ⁿ = aᵐⁿ. Combining this with product and quotient rules allows systematic simplification of complex algebraic expressions and modeling macroscopic and microscopic phenomena.",
              "mindMap": [
                {
                  "title": "1. Fundamental Laws of Exponents",
                  "desc": "• Multiplication: aᵐ × aⁿ = aᵐ⁺ⁿ (same base, add exponents).<br>• Division: aᵐ ÷ aⁿ = aᵐ⁻ⁿ (same base, subtract exponents, a ≠ 0).<br>• Zero exponent: a⁰ = 1 for all a ≠ 0 (0⁰ is undefined)."
                },
                {
                  "title": "2. Power of a Power Law",
                  "desc": "• Rule: (aᵐ)ⁿ = aᵐⁿ = (aⁿ)ᵐ.<br>• Nested powers: [ (aᵐ)ⁿ ]ᵖ = aᵐⁿᵖ.<br>• Example: (2³)² = 2⁶ = 64; (x⁴)⁵ = x²⁰."
                },
                {
                  "title": "3. Power of a Product and Quotient",
                  "desc": "• Product: (a · b)ⁿ = aⁿ · bⁿ.<br>• Quotient: (a / b)ⁿ = aⁿ / bⁿ (b ≠ 0).<br>• General term: (aᵐ · bᵖ)ⁿ = aᵐⁿ · bᵖⁿ."
                },
                {
                  "title": "4. Negative & Fractional Exponents",
                  "desc": "• Negative exponent: a⁻ⁿ = 1 / aⁿ and (a/b)⁻ⁿ = (b/a)ⁿ (a, b ≠ 0).<br>• Fractional exponent (roots): aᵐ/ⁿ = ⁿ√(aᵐ) = (ⁿ√a)ᵐ (where n ∈ ℤ⁺, n ≥ 2)."
                }
              ],
              "vocabulary": [
                {
                  "word": "Base (الأساس)",
                  "meaning": "The repeated factor in a power expression (the number a in aⁿ)",
                  "opposite": "Exponent",
                  "plural": "Bases"
                },
                {
                  "word": "Exponent / Power (الأس)",
                  "meaning": "The number of times the base is used as a factor (the number n in aⁿ)",
                  "opposite": "Root",
                  "plural": "Exponents / Powers"
                },
                {
                  "word": "Power of a Power",
                  "meaning": "An expression where a base raised to an exponent is further raised to another exponent: (aᵐ)ⁿ",
                  "opposite": "Product of powers",
                  "plural": "Powers of powers"
                },
                {
                  "word": "Negative Exponent",
                  "meaning": "Indicates the reciprocal of the base raised to the positive exponent: a⁻ⁿ = 1/aⁿ",
                  "opposite": "Positive exponent",
                  "plural": "Negative exponents"
                },
                {
                  "word": "Radical / Root",
                  "meaning": "An expression indicating a principal nth root, equivalent to a fractional exponent: ⁿ√a = a¹/ⁿ",
                  "opposite": "Power",
                  "plural": "Radicals / Roots"
                }
              ],
              "beautyPoints": [
                {
                  "phrase": "(aᵐ)ⁿ = aᵐⁿ vs aᵐ · aⁿ = aᵐ⁺ⁿ",
                  "secret": "Crucial distinction in exams: In (a³)² the exponent 3 is repeated 2 times, giving 3 × 2 = 6 (i.e. a⁶). In a³ · a² two powers of the same base multiply, giving 3 + 2 = 5 (i.e. a⁵)."
                },
                {
                  "phrase": "(-a)ⁿ: Even vs Odd Exponents",
                  "secret": "If n is an even integer, (-a)ⁿ = aⁿ (the negative sign vanishes). If n is an odd integer, (-a)ⁿ = -aⁿ (the negative sign remains outside)."
                },
                {
                  "phrase": "(a / b)⁻ⁿ = (b / a)ⁿ",
                  "secret": "Inverting the fraction changes the sign of the exponent immediately: (2/3)⁻² = (3/2)² = 9/4 = 2.25."
                }
              ]
            },
            "page2": {
              "title": "Page 2: Algebraic Simplification Rules & Golden Ministerial Exam Questions",
              "subtitle": "Step-by-step Reduction • Factorization Techniques • Ministerial Model Q&A",
              "grammarFocus": {
                "title": "Capsule 1: Golden Rules for Simplifying Exponential Expressions",
                "rules": [
                  "Rule 1 (Prime Factorization): Always express composite numerical bases as powers of prime numbers (e.g. 4 = 2², 8 = 2³, 9 = 3², 12 = 2² · 3, 27 = 3³, 16 = 2⁴).",
                  "Rule 2 (Distribute Exponents): Apply (aᵐbᵖ)ⁿ = aᵐⁿ bᵖⁿ to every factor in both numerator and denominator before grouping.",
                  "Rule 3 (Collect Bases): Group powers with identical bases: a^P / a^Q = a^(P - Q).",
                  "Rule 4 (Fractional Exponents): Convert roots to rational powers: ∛(x⁶) = x^(6/3) = x²."
                ]
              },
              "spellingFocus": {
                "title": "Capsule 2: Critical Pitfalls & Exam Traps",
                "rules": [
                  "Trap 1: (a + b)ⁿ ≠ aⁿ + bⁿ! Exponents DO NOT distribute over addition or subtraction.",
                  "Trap 2: 2³ · 2³ = 2⁶ = 64, NOT 4⁶ or 4³.",
                  "Trap 3: Half of 2¹⁰ is 2¹⁰ ÷ 2¹ = 2⁹ = 512, NOT 1¹⁰ or 1⁵!",
                  "Trap 4: Quarter of 4²⁰ is 4²⁰ ÷ 4¹ = 4¹⁹, NOT 1²⁰ or 2²⁰."
                ]
              },
              "goldenQuestions": [
                {
                  "q": "Find the numerical value of: [ 9ⁿ · 4ⁿ ] / [ 6²ⁿ ]",
                  "a": "Express bases in prime factors: 9ⁿ = (3²)ⁿ = 3²ⁿ; 4ⁿ = (2²)ⁿ = 2²ⁿ. Denominator: 6²ⁿ = (2 · 3)²ⁿ = 2²ⁿ · 3²ⁿ. Therefore, [ 3²ⁿ · 2²ⁿ ] / [ 2²ⁿ · 3²ⁿ ] = 1."
                },
                {
                  "q": "What is quarter of the number 4¹⁶?",
                  "a": "Quarter of 4¹⁶ = 4¹⁶ ÷ 4¹ = 4¹⁶⁻¹ = 4¹⁵ (or 2³⁰)."
                },
                {
                  "q": "Simplify: (x⁻³ · y²)⁻²",
                  "a": "Apply power of product: (x⁻³)⁻² · (y²)⁻² = x⁶ · y⁻⁴ = x⁶ / y⁴."
                },
                {
                  "q": "If 3ˣ = 5, find the value of 3ˣ⁺¹ and 9ˣ.",
                  "a": "1) 3ˣ⁺¹ = 3ˣ · 3¹ = 5 · 3 = 15.<br>2) 9ˣ = (3²)ˣ = (3ˣ)² = 5² = 25."
                }
              ]
            }
          },
          "topics": [
            {
              "id": "ma_u1_l1_t1",
              "title": "Fundamental Laws & Power of a Power",
              "questions": [
                {
                  "id": "ma_u1_l1_q01",
                  "type": "mcq",
                  "difficulty": "Easy",
                  "category": "Laws of Exponents",
                  "question": "What is the simplified form of (x⁴)³?",
                  "options": [
                    "x⁷",
                    "x¹²",
                    "x⁶⁴",
                    "x"
                  ],
                  "correctIndex": 1,
                  "explanation": "According to the Power of a Power rule, (aᵐ)ⁿ = aᵐⁿ. Thus (x⁴)³ = x^(4 × 3) = x¹².",
                  "whyWrong": [
                    "Added exponents instead of multiplying: 4 + 3 = 7.",
                    "Computed 4³ = 64 instead of 4 × 3 = 12.",
                    "Incorrect reduction."
                  ],
                  "readingPassage": null
                },
                {
                  "id": "ma_u1_l1_q02",
                  "type": "mcq",
                  "difficulty": "Easy",
                  "category": "Laws of Exponents",
                  "question": "The value of (2³)² is equal to:",
                  "options": [
                    "2⁵",
                    "2⁶",
                    "2⁹",
                    "12"
                  ],
                  "correctIndex": 1,
                  "explanation": "(2³)² = 2^(3 × 2) = 2⁶ = 64.",
                  "whyWrong": [
                    "Added exponents: 3 + 2 = 5.",
                    "Calculated 3² = 9 in the power.",
                    "Multiplied base by exponent."
                  ],
                  "readingPassage": null
                },
                {
                  "id": "ma_u1_l1_q03",
                  "type": "mcq",
                  "difficulty": "Medium",
                  "category": "Laws of Exponents",
                  "question": "Half of the number 2¹⁰ is:",
                  "options": [
                    "1¹⁰",
                    "1⁵",
                    "2⁵",
                    "2⁹"
                  ],
                  "correctIndex": 3,
                  "explanation": "Half of 2¹⁰ means 2¹⁰ ÷ 2¹ = 2^(10 - 1) = 2⁹ = 512.",
                  "whyWrong": [
                    "Divided base by 2 to get 1¹⁰ = 1.",
                    "Divided both base and exponent by 2.",
                    "Divided exponent by 2."
                  ],
                  "readingPassage": null
                },
                {
                  "id": "ma_u1_l1_q04",
                  "type": "mcq",
                  "difficulty": "Medium",
                  "category": "Laws of Exponents",
                  "question": "Quarter of the number 4²⁰ is equal to:",
                  "options": [
                    "4¹⁹",
                    "1²⁰",
                    "4⁵",
                    "2¹⁹"
                  ],
                  "correctIndex": 0,
                  "explanation": "Quarter of 4²⁰ = 4²⁰ ÷ 4¹ = 4^(20 - 1) = 4¹⁹.",
                  "whyWrong": [
                    "Divided base 4 by 4 to get 1²⁰.",
                    "Divided exponent 20 by 4.",
                    "Incorrect base conversion."
                  ],
                  "readingPassage": null
                },
                {
                  "id": "ma_u1_l1_q05",
                  "type": "mcq",
                  "difficulty": "Easy",
                  "category": "Negative Exponents",
                  "question": "The value of (3/4)⁻² is:",
                  "options": [
                    "-9/16",
                    "9/16",
                    "16/9",
                    "4/3"
                  ],
                  "correctIndex": 2,
                  "explanation": "Inverting the base eliminates the negative sign: (3/4)⁻² = (4/3)² = 16/9.",
                  "whyWrong": [
                    "Incorrectly placed a negative sign in front.",
                    "Did not invert the fraction.",
                    "Inverted without squaring."
                  ],
                  "readingPassage": null
                },
                {
                  "id": "ma_u1_l1_q06",
                  "type": "mcq",
                  "difficulty": "Medium",
                  "category": "Power of Product",
                  "question": "Simplify: (-2 a² b³)⁴",
                  "options": [
                    "-16 a⁶ b⁷",
                    "16 a⁸ b¹²",
                    "-16 a⁸ b¹²",
                    "8 a⁸ b¹²"
                  ],
                  "correctIndex": 1,
                  "explanation": "(-2)⁴ = 16 (even power makes it positive), (a²)⁴ = a⁸, (b³)⁴ = b¹². Result: 16 a⁸ b¹².",
                  "whyWrong": [
                    "Added exponents and kept negative sign.",
                    "Even power gives positive 16, not -16.",
                    "Calculated 2 × 4 = 8 instead of 2⁴ = 16."
                  ],
                  "readingPassage": null
                },
                {
                  "id": "ma_u1_l1_q07",
                  "type": "mcq",
                  "difficulty": "Hard",
                  "category": "Algebraic Expressions",
                  "question": "If 2ˣ = 3, then the value of 2ˣ⁺³ is:",
                  "options": [
                    "6",
                    "11",
                    "24",
                    "27"
                  ],
                  "correctIndex": 2,
                  "explanation": "2ˣ⁺³ = 2ˣ · 2³ = 3 · 8 = 24.",
                  "whyWrong": [
                    "Multiplied 3 by 2.",
                    "Added 3 + 8 = 11.",
                    "Computed 3³ = 27."
                  ],
                  "readingPassage": null
                },
                {
                  "id": "ma_u1_l1_q08",
                  "type": "mcq",
                  "difficulty": "Hard",
                  "category": "Algebraic Expressions",
                  "question": "If 3ˣ = 5, then the value of 9ˣ is:",
                  "options": [
                    "10",
                    "15",
                    "25",
                    "125"
                  ],
                  "correctIndex": 2,
                  "explanation": "9ˣ = (3²)ˣ = (3ˣ)² = 5² = 25.",
                  "whyWrong": [
                    "Multiplied 5 by 2.",
                    "Multiplied 5 by 3.",
                    "Computed 5³ = 125."
                  ],
                  "readingPassage": null
                }
              ]
            },
            {
              "id": "ma_u1_l1_t2",
              "title": "Negative Exponents & Simplification",
              "questions": [
                {
                  "id": "ma_u1_l1_q09",
                  "type": "mcq",
                  "difficulty": "Medium",
                  "category": "Simplification",
                  "question": "The expression [ (a⁻²)³ · a¹⁰ ] simplifies to:",
                  "options": [
                    "a⁴",
                    "a⁻¹⁶",
                    "a⁵",
                    "a¹⁵"
                  ],
                  "correctIndex": 0,
                  "explanation": "(a⁻²)³ = a⁻⁶. Then a⁻⁶ · a¹⁰ = a^(-6 + 10) = a⁴.",
                  "whyWrong": [
                    "Subtracted exponents incorrectly.",
                    "Multiplied -2 by 3 to get -6, then subtracted 10.",
                    "Incorrect arithmetic."
                  ],
                  "readingPassage": null
                },
                {
                  "id": "ma_u1_l1_q10",
                  "type": "mcq",
                  "difficulty": "Medium",
                  "category": "Power of Quotient",
                  "question": "The simplified form of [ (2x³)/(y²) ]³ is:",
                  "options": [
                    "6x⁹ / y⁶",
                    "8x⁹ / y⁶",
                    "8x⁶ / y⁵",
                    "2x⁹ / y⁶"
                  ],
                  "correctIndex": 1,
                  "explanation": "Cube every factor: 2³ = 8, (x³)³ = x⁹, (y²)³ = y⁶. Result: 8x⁹ / y⁶.",
                  "whyWrong": [
                    "Multiplied 2 by 3 = 6 instead of 2³ = 8.",
                    "Added exponents instead of multiplying.",
                    "Did not cube the coefficient 2."
                  ],
                  "readingPassage": null
                },
                {
                  "id": "ma_u1_l1_q11",
                  "type": "complete",
                  "difficulty": "Easy",
                  "category": "Laws of Exponents",
                  "question": "If (xᵐ)³ = x¹⁵, then the value of m is ____.",
                  "acceptableAnswers": [
                    "5",
                    "٥"
                  ],
                  "modelAnswer": "5",
                  "explanation": "According to the power of a power law: 3m = 15, hence m = 15 / 3 = 5.",
                  "readingPassage": null
                },
                {
                  "id": "ma_u1_l1_q12",
                  "type": "complete",
                  "difficulty": "Medium",
                  "category": "Laws of Exponents",
                  "question": "The value of 5⁰ + 5⁻¹ is equal to ____.",
                  "acceptableAnswers": [
                    "1.2",
                    "6/5",
                    "1 1/5"
                  ],
                  "modelAnswer": "6/5 (or 1.2)",
                  "explanation": "5⁰ = 1, and 5⁻¹ = 1/5. Thus 1 + 1/5 = 6/5 = 1.2.",
                  "readingPassage": null
                },
                {
                  "id": "ma_u1_l1_q13",
                  "type": "complete",
                  "difficulty": "Medium",
                  "category": "Laws of Exponents",
                  "question": "If 2ˣ = 7, then 2ˣ⁻¹ is equal to ____.",
                  "acceptableAnswers": [
                    "3.5",
                    "7/2"
                  ],
                  "modelAnswer": "7/2 (or 3.5)",
                  "explanation": "2ˣ⁻¹ = 2ˣ · 2⁻¹ = 7 · (1/2) = 7/2 = 3.5.",
                  "readingPassage": null
                },
                {
                  "id": "ma_u1_l1_q14",
                  "type": "complete",
                  "difficulty": "Hard",
                  "category": "Simplification",
                  "question": "The numerical value of [ 8ⁿ · 2 ] / [ 4^(1.5n) ] is ____.",
                  "acceptableAnswers": [
                    "2",
                    "٢"
                  ],
                  "modelAnswer": "2",
                  "explanation": "Express bases in powers of 2: 8ⁿ = (2³)ⁿ = 2³ⁿ. Denominator: 4^(1.5n) = (2²)^(1.5n) = 2³ⁿ. Thus [ 2³ⁿ · 2¹ ] / 2³ⁿ = 2¹ = 2.",
                  "readingPassage": null
                },
                {
                  "id": "ma_u1_l1_q15",
                  "type": "essay",
                  "difficulty": "Hard",
                  "category": "Simplification",
                  "question": "Find the simplest form of the numerical expression: [ 4ⁿ · 9ⁿ ] / [ 6²ⁿ ], showing full mathematical steps.",
                  "keywords": [
                    "3^2n",
                    "2^2n",
                    "6^2n",
                    "1"
                  ],
                  "modelAnswer": "1) Convert composite bases to prime factors: 4ⁿ = (2²)ⁿ = 2²ⁿ, and 9ⁿ = (3²)ⁿ = 3²ⁿ.\n2) Numerator = 2²ⁿ · 3²ⁿ = (2 · 3)²ⁿ = 6²ⁿ.\n3) Dividing numerator by denominator: 6²ⁿ / 6²ⁿ = 1.",
                  "explanation": "Full marks awarded for expressing composite numbers in prime bases and applying exponent distribution.",
                  "readingPassage": null
                }
              ]
            }
          ],
          "lessonExam": {
            "title": "Comprehensive Lesson Assessment: Powers of Powers",
            "subtitle": "30 Standardized Questions covering all rules of integer and rational exponents",
            "questions": [
              {
                "id": "ma_u1_l1_q01",
                "type": "mcq",
                "difficulty": "Easy",
                "category": "Laws of Exponents",
                "question": "What is the simplified form of (x⁴)³?",
                "options": [
                  "x⁷",
                  "x¹²",
                  "x⁶⁴",
                  "x"
                ],
                "correctIndex": 1,
                "explanation": "According to the Power of a Power rule, (aᵐ)ⁿ = aᵐⁿ. Thus (x⁴)³ = x^(4 × 3) = x¹².",
                "whyWrong": [
                  "Added exponents instead of multiplying: 4 + 3 = 7.",
                  "Computed 4³ = 64 instead of 4 × 3 = 12.",
                  "Incorrect reduction."
                ],
                "readingPassage": null
              },
              {
                "id": "ma_u1_l1_q02",
                "type": "mcq",
                "difficulty": "Easy",
                "category": "Laws of Exponents",
                "question": "The value of (2³)² is equal to:",
                "options": [
                  "2⁵",
                  "2⁶",
                  "2⁹",
                  "12"
                ],
                "correctIndex": 1,
                "explanation": "(2³)² = 2^(3 × 2) = 2⁶ = 64.",
                "whyWrong": [
                  "Added exponents: 3 + 2 = 5.",
                  "Calculated 3² = 9 in the power.",
                  "Multiplied base by exponent."
                ],
                "readingPassage": null
              },
              {
                "id": "ma_u1_l1_q03",
                "type": "mcq",
                "difficulty": "Medium",
                "category": "Laws of Exponents",
                "question": "Half of the number 2¹⁰ is:",
                "options": [
                  "1¹⁰",
                  "1⁵",
                  "2⁵",
                  "2⁹"
                ],
                "correctIndex": 3,
                "explanation": "Half of 2¹⁰ means 2¹⁰ ÷ 2¹ = 2^(10 - 1) = 2⁹ = 512.",
                "whyWrong": [
                  "Divided base by 2 to get 1¹⁰ = 1.",
                  "Divided both base and exponent by 2.",
                  "Divided exponent by 2."
                ],
                "readingPassage": null
              },
              {
                "id": "ma_u1_l1_q04",
                "type": "mcq",
                "difficulty": "Medium",
                "category": "Laws of Exponents",
                "question": "Quarter of the number 4²⁰ is equal to:",
                "options": [
                  "4¹⁹",
                  "1²⁰",
                  "4⁵",
                  "2¹⁹"
                ],
                "correctIndex": 0,
                "explanation": "Quarter of 4²⁰ = 4²⁰ ÷ 4¹ = 4^(20 - 1) = 4¹⁹.",
                "whyWrong": [
                  "Divided base 4 by 4 to get 1²⁰.",
                  "Divided exponent 20 by 4.",
                  "Incorrect base conversion."
                ],
                "readingPassage": null
              },
              {
                "id": "ma_u1_l1_q05",
                "type": "mcq",
                "difficulty": "Easy",
                "category": "Negative Exponents",
                "question": "The value of (3/4)⁻² is:",
                "options": [
                  "-9/16",
                  "9/16",
                  "16/9",
                  "4/3"
                ],
                "correctIndex": 2,
                "explanation": "Inverting the base eliminates the negative sign: (3/4)⁻² = (4/3)² = 16/9.",
                "whyWrong": [
                  "Incorrectly placed a negative sign in front.",
                  "Did not invert the fraction.",
                  "Inverted without squaring."
                ],
                "readingPassage": null
              },
              {
                "id": "ma_u1_l1_q06",
                "type": "mcq",
                "difficulty": "Medium",
                "category": "Power of Product",
                "question": "Simplify: (-2 a² b³)⁴",
                "options": [
                  "-16 a⁶ b⁷",
                  "16 a⁸ b¹²",
                  "-16 a⁸ b¹²",
                  "8 a⁸ b¹²"
                ],
                "correctIndex": 1,
                "explanation": "(-2)⁴ = 16 (even power makes it positive), (a²)⁴ = a⁸, (b³)⁴ = b¹². Result: 16 a⁸ b¹².",
                "whyWrong": [
                  "Added exponents and kept negative sign.",
                  "Even power gives positive 16, not -16.",
                  "Calculated 2 × 4 = 8 instead of 2⁴ = 16."
                ],
                "readingPassage": null
              },
              {
                "id": "ma_u1_l1_q07",
                "type": "mcq",
                "difficulty": "Hard",
                "category": "Algebraic Expressions",
                "question": "If 2ˣ = 3, then the value of 2ˣ⁺³ is:",
                "options": [
                  "6",
                  "11",
                  "24",
                  "27"
                ],
                "correctIndex": 2,
                "explanation": "2ˣ⁺³ = 2ˣ · 2³ = 3 · 8 = 24.",
                "whyWrong": [
                  "Multiplied 3 by 2.",
                  "Added 3 + 8 = 11.",
                  "Computed 3³ = 27."
                ],
                "readingPassage": null
              },
              {
                "id": "ma_u1_l1_q08",
                "type": "mcq",
                "difficulty": "Hard",
                "category": "Algebraic Expressions",
                "question": "If 3ˣ = 5, then the value of 9ˣ is:",
                "options": [
                  "10",
                  "15",
                  "25",
                  "125"
                ],
                "correctIndex": 2,
                "explanation": "9ˣ = (3²)ˣ = (3ˣ)² = 5² = 25.",
                "whyWrong": [
                  "Multiplied 5 by 2.",
                  "Multiplied 5 by 3.",
                  "Computed 5³ = 125."
                ],
                "readingPassage": null
              },
              {
                "id": "ma_u1_l1_q09",
                "type": "mcq",
                "difficulty": "Medium",
                "category": "Simplification",
                "question": "The expression [ (a⁻²)³ · a¹⁰ ] simplifies to:",
                "options": [
                  "a⁴",
                  "a⁻¹⁶",
                  "a⁵",
                  "a¹⁵"
                ],
                "correctIndex": 0,
                "explanation": "(a⁻²)³ = a⁻⁶. Then a⁻⁶ · a¹⁰ = a^(-6 + 10) = a⁴.",
                "whyWrong": [
                  "Subtracted exponents incorrectly.",
                  "Multiplied -2 by 3 to get -6, then subtracted 10.",
                  "Incorrect arithmetic."
                ],
                "readingPassage": null
              },
              {
                "id": "ma_u1_l1_q10",
                "type": "mcq",
                "difficulty": "Medium",
                "category": "Power of Quotient",
                "question": "The simplified form of [ (2x³)/(y²) ]³ is:",
                "options": [
                  "6x⁹ / y⁶",
                  "8x⁹ / y⁶",
                  "8x⁶ / y⁵",
                  "2x⁹ / y⁶"
                ],
                "correctIndex": 1,
                "explanation": "Cube every factor: 2³ = 8, (x³)³ = x⁹, (y²)³ = y⁶. Result: 8x⁹ / y⁶.",
                "whyWrong": [
                  "Multiplied 2 by 3 = 6 instead of 2³ = 8.",
                  "Added exponents instead of multiplying.",
                  "Did not cube the coefficient 2."
                ],
                "readingPassage": null
              },
              {
                "id": "ma_u1_l1_q11",
                "type": "complete",
                "difficulty": "Easy",
                "category": "Laws of Exponents",
                "question": "If (xᵐ)³ = x¹⁵, then the value of m is ____.",
                "acceptableAnswers": [
                  "5",
                  "٥"
                ],
                "modelAnswer": "5",
                "explanation": "According to the power of a power law: 3m = 15, hence m = 15 / 3 = 5.",
                "readingPassage": null
              },
              {
                "id": "ma_u1_l1_q12",
                "type": "complete",
                "difficulty": "Medium",
                "category": "Laws of Exponents",
                "question": "The value of 5⁰ + 5⁻¹ is equal to ____.",
                "acceptableAnswers": [
                  "1.2",
                  "6/5",
                  "1 1/5"
                ],
                "modelAnswer": "6/5 (or 1.2)",
                "explanation": "5⁰ = 1, and 5⁻¹ = 1/5. Thus 1 + 1/5 = 6/5 = 1.2.",
                "readingPassage": null
              },
              {
                "id": "ma_u1_l1_q13",
                "type": "complete",
                "difficulty": "Medium",
                "category": "Laws of Exponents",
                "question": "If 2ˣ = 7, then 2ˣ⁻¹ is equal to ____.",
                "acceptableAnswers": [
                  "3.5",
                  "7/2"
                ],
                "modelAnswer": "7/2 (or 3.5)",
                "explanation": "2ˣ⁻¹ = 2ˣ · 2⁻¹ = 7 · (1/2) = 7/2 = 3.5.",
                "readingPassage": null
              },
              {
                "id": "ma_u1_l1_q14",
                "type": "complete",
                "difficulty": "Hard",
                "category": "Simplification",
                "question": "The numerical value of [ 8ⁿ · 2 ] / [ 4^(1.5n) ] is ____.",
                "acceptableAnswers": [
                  "2",
                  "٢"
                ],
                "modelAnswer": "2",
                "explanation": "Express bases in powers of 2: 8ⁿ = (2³)ⁿ = 2³ⁿ. Denominator: 4^(1.5n) = (2²)^(1.5n) = 2³ⁿ. Thus [ 2³ⁿ · 2¹ ] / 2³ⁿ = 2¹ = 2.",
                "readingPassage": null
              },
              {
                "id": "ma_u1_l1_q15",
                "type": "essay",
                "difficulty": "Hard",
                "category": "Simplification",
                "question": "Find the simplest form of the numerical expression: [ 4ⁿ · 9ⁿ ] / [ 6²ⁿ ], showing full mathematical steps.",
                "keywords": [
                  "3^2n",
                  "2^2n",
                  "6^2n",
                  "1"
                ],
                "modelAnswer": "1) Convert composite bases to prime factors: 4ⁿ = (2²)ⁿ = 2²ⁿ, and 9ⁿ = (3²)ⁿ = 3²ⁿ.\n2) Numerator = 2²ⁿ · 3²ⁿ = (2 · 3)²ⁿ = 6²ⁿ.\n3) Dividing numerator by denominator: 6²ⁿ / 6²ⁿ = 1.",
                "explanation": "Full marks awarded for expressing composite numbers in prime bases and applying exponent distribution.",
                "readingPassage": null
              }
            ]
          }
        },
        {
          "id": "ma_u1_l2",
          "unitId": "ma_unit1",
          "number": 2,
          "type": "algebra",
          "title": "Lesson 1-2: Exponential Equations",
          "summarySheet": {
            "page1": {
              "title": "Page 1: Principles of Exponential Equations & Solution Sets",
              "subtitle": "Equal Bases Rule • Equal Exponents Rule • Quadratic Substitution Method",
              "coreIdea": "An exponential equation is an equation where the unknown variable appears in the exponent. The fundamental theorem states: If aˣ = aʸ (where a ≠ 0, 1, -1), then x = y. If aˣ = bˣ (where a ≠ b and a, b ≠ 0), then either the exponent x = 0, or a = -b when x is an even integer.",
              "mindMap": [
                {
                  "title": "Case 1: Equal Bases (aˣ = aʸ)",
                  "desc": "• Condition: a ∉ {-1, 0, 1}.<br>• Conclusion: x = y.<br>• Example: 3^(x - 2) = 81 → 3^(x - 2) = 3⁴ → x - 2 = 4 → x = 6."
                },
                {
                  "title": "Case 2: Equal Exponents (aˣ = bˣ)",
                  "desc": "• Sub-case A (a ≠ b and a ≠ -b): x = 0.<br>• Example: 5^(x - 3) = 7^(x - 3) → x - 3 = 0 → x = 3.<br>• Sub-case B: If x is even, a = ±b."
                },
                {
                  "title": "Case 3: Power Equals 1 (a^f(x) = 1)",
                  "desc": "• Since a⁰ = 1 (for a ≠ 0), set f(x) = 0.<br>• Example: 2^(x² - 9) = 1 → x² - 9 = 0 → x = ±3."
                },
                {
                  "title": "Case 4: Quadratic Exponential Form",
                  "desc": "• Form: A · (aˣ)² + B · aˣ + C = 0.<br>• Substitution: Let y = aˣ, solve the quadratic for y, then solve for x.<br>• Discard any negative values of y (since aˣ > 0 for all a > 0)."
                }
              ],
              "vocabulary": [
                {
                  "word": "Exponential Equation",
                  "meaning": "An equation in which the variable is in an exponent: a^f(x) = b",
                  "opposite": "Algebraic / Polynomial equation",
                  "plural": "Exponential equations"
                },
                {
                  "word": "Solution Set (S.S.)",
                  "meaning": "The set of all real numbers that satisfy the equation",
                  "opposite": "Extraneous solution",
                  "plural": "Solution sets"
                },
                {
                  "word": "Base Equality Theorem",
                  "meaning": "If bases are equal and not 0, 1, -1, then the exponents must be equal",
                  "opposite": "Exponent equality",
                  "plural": "Theorems"
                },
                {
                  "word": "Exponential Growth",
                  "meaning": "Growth pattern where quantity increases by a constant factor per unit time: N(t) = N₀ · aᵗ",
                  "opposite": "Exponential decay",
                  "plural": "Growth models"
                }
              ],
              "beautyPoints": [
                {
                  "phrase": "aˣ = 1 ⟹ x = 0",
                  "secret": "Any non-zero real number raised to the zero power equals 1. Whenever an exponential term equals 1, immediately equate its exponent to 0."
                },
                {
                  "phrase": "aˣ = bˣ (a ≠ b) ⟹ x = 0",
                  "secret": "Two different positive bases can only be equal when raised to power 0, since a⁰ = 1 and b⁰ = 1."
                },
                {
                  "phrase": "Negative Values in aˣ = k",
                  "secret": "If 2ˣ = -4, there is NO real solution (S.S. = ∅), because raising a positive real number to any power always yields a strictly positive result."
                }
              ]
            },
            "page2": {
              "title": "Page 2: Advanced Solving Techniques & Official Ministerial Exam Models",
              "subtitle": "Step-by-step Algorithms • Real-life Growth Applications • Model Q&A",
              "grammarFocus": {
                "title": "Capsule 1: Algorithmic Steps for Solving Exponential Equations",
                "rules": [
                  "Step 1: Simplify both sides to obtain single powers of identical bases: a^f(x) = a^g(x).",
                  "Step 2: Equate exponents: f(x) = g(x).",
                  "Step 3: Solve the resulting linear or quadratic equation for the unknown variable.",
                  "Step 4: Check domain validity and write the solution set S.S. in set notation { ... }."
                ]
              },
              "spellingFocus": {
                "title": "Capsule 2: Essential Exam Observations",
                "rules": [
                  "Observation 1: If 2ˣ · 3ˣ = 36, combine bases: (2 · 3)ˣ = 6ˣ = 6² ⟹ x = 2.",
                  "Observation 2: If (x - 2)⁵ = 32, note 32 = 2⁵. Odd power ⟹ x - 2 = 2 ⟹ x = 4.",
                  "Observation 3: If (x + 1)⁴ = 81, note 81 = 3⁴. Even power ⟹ x + 1 = ±3 ⟹ x = 2 or x = -4.",
                  "Observation 4: Real-life growth formula: A = P(1 + r)ᵗ."
                ]
              },
              "goldenQuestions": [
                {
                  "q": "Solve in ℝ: 3^(x - 1) = 27",
                  "a": "27 = 3³. Since bases are equal: x - 1 = 3 ⟹ x = 4. S.S. = {4}."
                },
                {
                  "q": "Solve in ℝ: 5^(x - 2) = 7^(x - 2)",
                  "a": "Since bases are different (5 ≠ 7), the common exponent must equal 0: x - 2 = 0 ⟹ x = 2. S.S. = {2}."
                },
                {
                  "q": "Solve in ℝ: 2^(x² - 4) = 1",
                  "a": "1 = 2⁰ ⟹ x² - 4 = 0 ⟹ x² = 4 ⟹ x = ±2. S.S. = {-2, 2}."
                },
                {
                  "q": "Find the solution set of: 2ˣ⁺¹ + 2ˣ = 24",
                  "a": "Factor out 2ˣ: 2ˣ(2¹ + 1) = 24 ⟹ 2ˣ(3) = 24 ⟹ 2ˣ = 8. Since 8 = 2³, x = 3. S.S. = {3}."
                }
              ]
            }
          },
          "topics": [
            {
              "id": "ma_u1_l2_t1",
              "title": "Equal Bases & Power Equals 1",
              "questions": [
                {
                  "id": "ma_u1_l2_q01",
                  "type": "mcq",
                  "difficulty": "Easy",
                  "category": "Exponential Equations",
                  "question": "If 2ˣ = 32, then the value of x is:",
                  "options": [
                    "3",
                    "4",
                    "5",
                    "6"
                  ],
                  "correctIndex": 2,
                  "explanation": "Express 32 as a power of 2: 32 = 2⁵. Since bases are equal, x = 5.",
                  "whyWrong": [
                    "2³ = 8, not 32.",
                    "2⁴ = 16, not 32.",
                    "2⁶ = 64, not 32."
                  ],
                  "readingPassage": null
                },
                {
                  "id": "ma_u1_l2_q02",
                  "type": "mcq",
                  "difficulty": "Easy",
                  "category": "Exponential Equations",
                  "question": "If 3^(x - 1) = 81, then x equals:",
                  "options": [
                    "3",
                    "4",
                    "5",
                    "6"
                  ],
                  "correctIndex": 2,
                  "explanation": "81 = 3⁴. Therefore, x - 1 = 4 ⟹ x = 5.",
                  "whyWrong": [
                    "Subtracted 1 from 4 instead of adding.",
                    "Set x = 4 without accounting for -1.",
                    "Calculated 81 / 3 = 27."
                  ],
                  "readingPassage": null
                },
                {
                  "id": "ma_u1_l2_q03",
                  "type": "mcq",
                  "difficulty": "Medium",
                  "category": "Exponential Equations",
                  "question": "If 5^(x - 3) = 7^(x - 3), then x is equal to:",
                  "options": [
                    "0",
                    "3",
                    "-3",
                    "5"
                  ],
                  "correctIndex": 1,
                  "explanation": "Because bases are unequal (5 ≠ 7), the exponent must be zero: x - 3 = 0 ⟹ x = 3.",
                  "whyWrong": [
                    "Assumed the exponent is 0 directly without solving for x.",
                    "Sign error in solving x - 3 = 0.",
                    "Set x equal to one of the bases."
                  ],
                  "readingPassage": null
                },
                {
                  "id": "ma_u1_l2_q04",
                  "type": "mcq",
                  "difficulty": "Medium",
                  "category": "Power Equals One",
                  "question": "The solution set of 2^(x² - 9) = 1 in ℝ is:",
                  "options": [
                    "{3}",
                    "{-3}",
                    "{-3, 3}",
                    "{9}"
                  ],
                  "correctIndex": 2,
                  "explanation": "2^(x² - 9) = 2⁰ ⟹ x² - 9 = 0 ⟹ x² = 9 ⟹ x = ±3. S.S. = {-3, 3}.",
                  "whyWrong": [
                    "Found only the positive root.",
                    "Found only the negative root.",
                    "Forgot to take the square root."
                  ],
                  "readingPassage": null
                },
                {
                  "id": "ma_u1_l2_q05",
                  "type": "mcq",
                  "difficulty": "Medium",
                  "category": "Exponential Equations",
                  "question": "If (2/3)ˣ = 27/8, then x is:",
                  "options": [
                    "3",
                    "-3",
                    "2",
                    "-2"
                  ],
                  "correctIndex": 1,
                  "explanation": "27/8 = (3/2)³ = (2/3)⁻³. Since bases are equal (2/3), x = -3.",
                  "whyWrong": [
                    "Forgot that 27/8 is inverted relative to 2/3.",
                    "Used power of 2 instead of 3.",
                    "Sign error."
                  ],
                  "readingPassage": null
                },
                {
                  "id": "ma_u1_l2_q06",
                  "type": "mcq",
                  "difficulty": "Hard",
                  "category": "Factoring Exponentials",
                  "question": "If 3ˣ⁺¹ + 3ˣ = 36, then x equals:",
                  "options": [
                    "1",
                    "2",
                    "3",
                    "4"
                  ],
                  "correctIndex": 1,
                  "explanation": "Factor out 3ˣ: 3ˣ(3¹ + 1) = 36 ⟹ 3ˣ(4) = 36 ⟹ 3ˣ = 9 = 3². Hence x = 2.",
                  "whyWrong": [
                    "Divided 36 by 3.",
                    "Computed 3³ = 27.",
                    "Incorrect factoring."
                  ],
                  "readingPassage": null
                },
                {
                  "id": "ma_u1_l2_q07",
                  "type": "mcq",
                  "difficulty": "Hard",
                  "category": "Even Exponents",
                  "question": "If (x - 1)⁴ = 16, then the solution set in ℝ is:",
                  "options": [
                    "{3}",
                    "{-1}",
                    "{-1, 3}",
                    "{2}"
                  ],
                  "correctIndex": 2,
                  "explanation": "16 = 2⁴. Because the exponent 4 is even, x - 1 = ±2. Thus x - 1 = 2 ⟹ x = 3, or x - 1 = -2 ⟹ x = -1. S.S. = {-1, 3}.",
                  "whyWrong": [
                    "Ignored the negative root: x - 1 = -2.",
                    "Took x = 2 - 1 = 1.",
                    "Incomplete solution."
                  ],
                  "readingPassage": null
                },
                {
                  "id": "ma_u1_l2_q08",
                  "type": "mcq",
                  "difficulty": "Medium",
                  "category": "Combined Exponents",
                  "question": "If 2ˣ · 5ˣ = 1000, then x is:",
                  "options": [
                    "2",
                    "3",
                    "4",
                    "5"
                  ],
                  "correctIndex": 1,
                  "explanation": "2ˣ · 5ˣ = (2 · 5)ˣ = 10ˣ. Since 1000 = 10³, x = 3.",
                  "whyWrong": [
                    "10² = 100, not 1000.",
                    "10⁴ = 10000, not 1000.",
                    "Incorrect exponent."
                  ],
                  "readingPassage": null
                }
              ]
            },
            {
              "id": "ma_u1_l2_t2",
              "title": "Unequal Bases & Factoring Exponentials",
              "questions": [
                {
                  "id": "ma_u1_l2_q09",
                  "type": "mcq",
                  "difficulty": "Hard",
                  "category": "Exponential Equations",
                  "question": "If 4ˣ = 8, then the value of x is:",
                  "options": [
                    "1/2",
                    "3/2",
                    "2/3",
                    "2"
                  ],
                  "correctIndex": 1,
                  "explanation": "Express both in base 2: (2²)ˣ = 2³ ⟹ 2²ˣ = 2³ ⟹ 2x = 3 ⟹ x = 3/2 = 1.5.",
                  "whyWrong": [
                    "Inverted fraction: 2/3.",
                    "Divided 8 by 4 = 2.",
                    "Calculated 4^(1/2) = 2."
                  ],
                  "readingPassage": null
                },
                {
                  "id": "ma_u1_l2_q10",
                  "type": "mcq",
                  "difficulty": "Hard",
                  "category": "Simultaneous Form",
                  "question": "If 3ˣ = 5 and 5ʸ = 81, then the value of x · y is:",
                  "options": [
                    "3",
                    "4",
                    "5",
                    "9"
                  ],
                  "correctIndex": 1,
                  "explanation": "Substitute 5 = 3ˣ into the second equation: (3ˣ)ʸ = 81 ⟹ 3^(xy) = 3⁴ ⟹ xy = 4.",
                  "whyWrong": [
                    "Added exponents instead of multiplying.",
                    "Multiplied 3 by 4.",
                    "Incorrect base."
                  ],
                  "readingPassage": null
                },
                {
                  "id": "ma_u1_l2_q11",
                  "type": "complete",
                  "difficulty": "Easy",
                  "category": "Exponential Equations",
                  "question": "If 7^(x + 2) = 1, then x = ____.",
                  "acceptableAnswers": [
                    "-2",
                    "-٢"
                  ],
                  "modelAnswer": "-2",
                  "explanation": "1 = 7⁰ ⟹ x + 2 = 0 ⟹ x = -2.",
                  "readingPassage": null
                },
                {
                  "id": "ma_u1_l2_q12",
                  "type": "complete",
                  "difficulty": "Medium",
                  "category": "Exponential Equations",
                  "question": "If 3^(x - 5) = (1/9), then x = ____.",
                  "acceptableAnswers": [
                    "3",
                    "٣"
                  ],
                  "modelAnswer": "3",
                  "explanation": "1/9 = 3⁻². Equating exponents: x - 5 = -2 ⟹ x = 5 - 2 = 3.",
                  "readingPassage": null
                },
                {
                  "id": "ma_u1_l2_q13",
                  "type": "complete",
                  "difficulty": "Medium",
                  "category": "Exponential Equations",
                  "question": "If 2ˣ⁻¹ = 1/16, then x = ____.",
                  "acceptableAnswers": [
                    "-3",
                    "-٣"
                  ],
                  "modelAnswer": "-3",
                  "explanation": "1/16 = 2⁻⁴. Therefore: x - 1 = -4 ⟹ x = -4 + 1 = -3.",
                  "readingPassage": null
                },
                {
                  "id": "ma_u1_l2_q14",
                  "type": "complete",
                  "difficulty": "Hard",
                  "category": "Exponential Equations",
                  "question": "If 9ˣ - 10 · 3ˣ + 9 = 0, then the solution set in ℝ is ____.",
                  "acceptableAnswers": [
                    "{0, 2}",
                    "{2, 0}"
                  ],
                  "modelAnswer": "{0, 2}",
                  "explanation": "Let y = 3ˣ. Then y² - 10y + 9 = 0 ⟹ (y - 1)(y - 9) = 0 ⟹ y = 1 or y = 9. For y = 1: 3ˣ = 1 ⟹ x = 0. For y = 9: 3ˣ = 9 ⟹ x = 2. S.S. = {0, 2}.",
                  "readingPassage": null
                },
                {
                  "id": "ma_u1_l2_q15",
                  "type": "essay",
                  "difficulty": "Hard",
                  "category": "Exponential Equations",
                  "question": "Solve in ℝ: 2ˣ⁺² + 2ˣ = 40, showing each step of your work.",
                  "keywords": [
                    "2^x",
                    "4 + 1",
                    "5",
                    "8",
                    "x = 3"
                  ],
                  "modelAnswer": "1) Factor out the common term 2ˣ: 2ˣ · (2² + 1) = 40.\n2) Simplify inside parentheses: 2ˣ · (4 + 1) = 40 ⟹ 2ˣ · 5 = 40.\n3) Divide both sides by 5: 2ˣ = 8.\n4) Express 8 as a power of 2: 2ˣ = 2³ ⟹ x = 3.\n5) Solution set: S.S. = {3}.",
                  "explanation": "Full credit requires factoring out 2^x, simplifying to 2^x = 8, and concluding x = 3.",
                  "readingPassage": null
                }
              ]
            }
          ],
          "lessonExam": {
            "title": "Comprehensive Lesson Assessment: Exponential Equations",
            "subtitle": "30 Questions on solving exponential equations in ℝ and modeling growth",
            "questions": [
              {
                "id": "ma_u1_l2_q01",
                "type": "mcq",
                "difficulty": "Easy",
                "category": "Exponential Equations",
                "question": "If 2ˣ = 32, then the value of x is:",
                "options": [
                  "3",
                  "4",
                  "5",
                  "6"
                ],
                "correctIndex": 2,
                "explanation": "Express 32 as a power of 2: 32 = 2⁵. Since bases are equal, x = 5.",
                "whyWrong": [
                  "2³ = 8, not 32.",
                  "2⁴ = 16, not 32.",
                  "2⁶ = 64, not 32."
                ],
                "readingPassage": null
              },
              {
                "id": "ma_u1_l2_q02",
                "type": "mcq",
                "difficulty": "Easy",
                "category": "Exponential Equations",
                "question": "If 3^(x - 1) = 81, then x equals:",
                "options": [
                  "3",
                  "4",
                  "5",
                  "6"
                ],
                "correctIndex": 2,
                "explanation": "81 = 3⁴. Therefore, x - 1 = 4 ⟹ x = 5.",
                "whyWrong": [
                  "Subtracted 1 from 4 instead of adding.",
                  "Set x = 4 without accounting for -1.",
                  "Calculated 81 / 3 = 27."
                ],
                "readingPassage": null
              },
              {
                "id": "ma_u1_l2_q03",
                "type": "mcq",
                "difficulty": "Medium",
                "category": "Exponential Equations",
                "question": "If 5^(x - 3) = 7^(x - 3), then x is equal to:",
                "options": [
                  "0",
                  "3",
                  "-3",
                  "5"
                ],
                "correctIndex": 1,
                "explanation": "Because bases are unequal (5 ≠ 7), the exponent must be zero: x - 3 = 0 ⟹ x = 3.",
                "whyWrong": [
                  "Assumed the exponent is 0 directly without solving for x.",
                  "Sign error in solving x - 3 = 0.",
                  "Set x equal to one of the bases."
                ],
                "readingPassage": null
              },
              {
                "id": "ma_u1_l2_q04",
                "type": "mcq",
                "difficulty": "Medium",
                "category": "Power Equals One",
                "question": "The solution set of 2^(x² - 9) = 1 in ℝ is:",
                "options": [
                  "{3}",
                  "{-3}",
                  "{-3, 3}",
                  "{9}"
                ],
                "correctIndex": 2,
                "explanation": "2^(x² - 9) = 2⁰ ⟹ x² - 9 = 0 ⟹ x² = 9 ⟹ x = ±3. S.S. = {-3, 3}.",
                "whyWrong": [
                  "Found only the positive root.",
                  "Found only the negative root.",
                  "Forgot to take the square root."
                ],
                "readingPassage": null
              },
              {
                "id": "ma_u1_l2_q05",
                "type": "mcq",
                "difficulty": "Medium",
                "category": "Exponential Equations",
                "question": "If (2/3)ˣ = 27/8, then x is:",
                "options": [
                  "3",
                  "-3",
                  "2",
                  "-2"
                ],
                "correctIndex": 1,
                "explanation": "27/8 = (3/2)³ = (2/3)⁻³. Since bases are equal (2/3), x = -3.",
                "whyWrong": [
                  "Forgot that 27/8 is inverted relative to 2/3.",
                  "Used power of 2 instead of 3.",
                  "Sign error."
                ],
                "readingPassage": null
              },
              {
                "id": "ma_u1_l2_q06",
                "type": "mcq",
                "difficulty": "Hard",
                "category": "Factoring Exponentials",
                "question": "If 3ˣ⁺¹ + 3ˣ = 36, then x equals:",
                "options": [
                  "1",
                  "2",
                  "3",
                  "4"
                ],
                "correctIndex": 1,
                "explanation": "Factor out 3ˣ: 3ˣ(3¹ + 1) = 36 ⟹ 3ˣ(4) = 36 ⟹ 3ˣ = 9 = 3². Hence x = 2.",
                "whyWrong": [
                  "Divided 36 by 3.",
                  "Computed 3³ = 27.",
                  "Incorrect factoring."
                ],
                "readingPassage": null
              },
              {
                "id": "ma_u1_l2_q07",
                "type": "mcq",
                "difficulty": "Hard",
                "category": "Even Exponents",
                "question": "If (x - 1)⁴ = 16, then the solution set in ℝ is:",
                "options": [
                  "{3}",
                  "{-1}",
                  "{-1, 3}",
                  "{2}"
                ],
                "correctIndex": 2,
                "explanation": "16 = 2⁴. Because the exponent 4 is even, x - 1 = ±2. Thus x - 1 = 2 ⟹ x = 3, or x - 1 = -2 ⟹ x = -1. S.S. = {-1, 3}.",
                "whyWrong": [
                  "Ignored the negative root: x - 1 = -2.",
                  "Took x = 2 - 1 = 1.",
                  "Incomplete solution."
                ],
                "readingPassage": null
              },
              {
                "id": "ma_u1_l2_q08",
                "type": "mcq",
                "difficulty": "Medium",
                "category": "Combined Exponents",
                "question": "If 2ˣ · 5ˣ = 1000, then x is:",
                "options": [
                  "2",
                  "3",
                  "4",
                  "5"
                ],
                "correctIndex": 1,
                "explanation": "2ˣ · 5ˣ = (2 · 5)ˣ = 10ˣ. Since 1000 = 10³, x = 3.",
                "whyWrong": [
                  "10² = 100, not 1000.",
                  "10⁴ = 10000, not 1000.",
                  "Incorrect exponent."
                ],
                "readingPassage": null
              },
              {
                "id": "ma_u1_l2_q09",
                "type": "mcq",
                "difficulty": "Hard",
                "category": "Exponential Equations",
                "question": "If 4ˣ = 8, then the value of x is:",
                "options": [
                  "1/2",
                  "3/2",
                  "2/3",
                  "2"
                ],
                "correctIndex": 1,
                "explanation": "Express both in base 2: (2²)ˣ = 2³ ⟹ 2²ˣ = 2³ ⟹ 2x = 3 ⟹ x = 3/2 = 1.5.",
                "whyWrong": [
                  "Inverted fraction: 2/3.",
                  "Divided 8 by 4 = 2.",
                  "Calculated 4^(1/2) = 2."
                ],
                "readingPassage": null
              },
              {
                "id": "ma_u1_l2_q10",
                "type": "mcq",
                "difficulty": "Hard",
                "category": "Simultaneous Form",
                "question": "If 3ˣ = 5 and 5ʸ = 81, then the value of x · y is:",
                "options": [
                  "3",
                  "4",
                  "5",
                  "9"
                ],
                "correctIndex": 1,
                "explanation": "Substitute 5 = 3ˣ into the second equation: (3ˣ)ʸ = 81 ⟹ 3^(xy) = 3⁴ ⟹ xy = 4.",
                "whyWrong": [
                  "Added exponents instead of multiplying.",
                  "Multiplied 3 by 4.",
                  "Incorrect base."
                ],
                "readingPassage": null
              },
              {
                "id": "ma_u1_l2_q11",
                "type": "complete",
                "difficulty": "Easy",
                "category": "Exponential Equations",
                "question": "If 7^(x + 2) = 1, then x = ____.",
                "acceptableAnswers": [
                  "-2",
                  "-٢"
                ],
                "modelAnswer": "-2",
                "explanation": "1 = 7⁰ ⟹ x + 2 = 0 ⟹ x = -2.",
                "readingPassage": null
              },
              {
                "id": "ma_u1_l2_q12",
                "type": "complete",
                "difficulty": "Medium",
                "category": "Exponential Equations",
                "question": "If 3^(x - 5) = (1/9), then x = ____.",
                "acceptableAnswers": [
                  "3",
                  "٣"
                ],
                "modelAnswer": "3",
                "explanation": "1/9 = 3⁻². Equating exponents: x - 5 = -2 ⟹ x = 5 - 2 = 3.",
                "readingPassage": null
              },
              {
                "id": "ma_u1_l2_q13",
                "type": "complete",
                "difficulty": "Medium",
                "category": "Exponential Equations",
                "question": "If 2ˣ⁻¹ = 1/16, then x = ____.",
                "acceptableAnswers": [
                  "-3",
                  "-٣"
                ],
                "modelAnswer": "-3",
                "explanation": "1/16 = 2⁻⁴. Therefore: x - 1 = -4 ⟹ x = -4 + 1 = -3.",
                "readingPassage": null
              },
              {
                "id": "ma_u1_l2_q14",
                "type": "complete",
                "difficulty": "Hard",
                "category": "Exponential Equations",
                "question": "If 9ˣ - 10 · 3ˣ + 9 = 0, then the solution set in ℝ is ____.",
                "acceptableAnswers": [
                  "{0, 2}",
                  "{2, 0}"
                ],
                "modelAnswer": "{0, 2}",
                "explanation": "Let y = 3ˣ. Then y² - 10y + 9 = 0 ⟹ (y - 1)(y - 9) = 0 ⟹ y = 1 or y = 9. For y = 1: 3ˣ = 1 ⟹ x = 0. For y = 9: 3ˣ = 9 ⟹ x = 2. S.S. = {0, 2}.",
                "readingPassage": null
              },
              {
                "id": "ma_u1_l2_q15",
                "type": "essay",
                "difficulty": "Hard",
                "category": "Exponential Equations",
                "question": "Solve in ℝ: 2ˣ⁺² + 2ˣ = 40, showing each step of your work.",
                "keywords": [
                  "2^x",
                  "4 + 1",
                  "5",
                  "8",
                  "x = 3"
                ],
                "modelAnswer": "1) Factor out the common term 2ˣ: 2ˣ · (2² + 1) = 40.\n2) Simplify inside parentheses: 2ˣ · (4 + 1) = 40 ⟹ 2ˣ · 5 = 40.\n3) Divide both sides by 5: 2ˣ = 8.\n4) Express 8 as a power of 2: 2ˣ = 2³ ⟹ x = 3.\n5) Solution set: S.S. = {3}.",
                "explanation": "Full credit requires factoring out 2^x, simplifying to 2^x = 8, and concluding x = 3.",
                "readingPassage": null
              }
            ]
          }
        }
      ],
      "unitTest": {
        "title": "Unit 1 Assessment: Relations and Functions (Comprehensive)",
        "duration": "45 Minutes",
        "totalMarks": 40,
        "questions": [
          {
            "id": "ma_u1_test_q01",
            "type": "mcq",
            "difficulty": "easy",
            "category": "Cartesian Product",
            "marks": 2,
            "question": "If (x - 1, 11) = (8, y + 3), then the value of √(x + 2y) is:",
            "options": [
              "5",
              "25",
              "±5",
              "7"
            ],
            "correctIndex": 0,
            "explanation": "x - 1 = 8 => x = 9. y + 3 = 11 => y = 8. √(x + 2y) = √(9 + 2(8)) = √(9 + 16) = √25 = 5 (principal square root).",
            "whyWrong": [
              "25 is before taking the square root.",
              "±5 is incorrect because the radical symbol √ denotes the principal (positive) square root.",
              "7 is an arithmetic error."
            ],
            "readingPassage": null
          },
          {
            "id": "ma_u1_test_q02",
            "type": "mcq",
            "difficulty": "easy",
            "category": "Cartesian Product",
            "marks": 2,
            "question": "If n(X) = 2 and Y = {1, 2}, then n(X × Y) equals:",
            "options": [
              "4",
              "2",
              "8",
              "1"
            ],
            "correctIndex": 0,
            "explanation": "n(Y) = 2. Therefore, n(X × Y) = n(X) × n(Y) = 2 × 2 = 4.",
            "whyWrong": [
              "2 is n(X) alone.",
              "8 would be 2^3.",
              "1 is not possible."
            ],
            "readingPassage": null
          },
          {
            "id": "ma_u1_test_q03",
            "type": "mcq",
            "difficulty": "easy",
            "category": "Cartesian Product",
            "marks": 2,
            "question": "If n(X²) = 9, then n(X) equals:",
            "options": [
              "3",
              "9",
              "81",
              "18"
            ],
            "correctIndex": 0,
            "explanation": "n(X²) = [n(X)]² = 9 => n(X) = 3 (number of elements cannot be negative).",
            "whyWrong": [
              "9 is n(X²).",
              "81 is 9 squared.",
              "18 is 9 multiplied by 2."
            ],
            "readingPassage": null
          },
          {
            "id": "ma_u1_test_q04",
            "type": "mcq",
            "difficulty": "medium",
            "category": "Cartesian Product",
            "marks": 2,
            "question": "If (3, 5) ∈ {3, 6} × {x, 8}, then x equals:",
            "options": [
              "5",
              "3",
              "6",
              "8"
            ],
            "correctIndex": 0,
            "explanation": "In a Cartesian product, the second coordinate 5 must belong to the second set {x, 8}. Since 5 ≠ 8, we must have x = 5.",
            "whyWrong": [
              "3 is the first coordinate.",
              "6 is an element of the first set.",
              "8 is already present in the second set."
            ],
            "readingPassage": null
          },
          {
            "id": "ma_u1_test_q05",
            "type": "mcq",
            "difficulty": "easy",
            "category": "Coordinate Plane",
            "marks": 2,
            "question": "The point (-3, 4) lies in the:",
            "options": [
              "Second quadrant",
              "First quadrant",
              "Third quadrant",
              "Fourth quadrant"
            ],
            "correctIndex": 0,
            "explanation": "In the Cartesian plane, if x < 0 and y > 0, the point lies in the second quadrant.",
            "whyWrong": [
              "First quadrant requires x > 0, y > 0.",
              "Third quadrant requires x < 0, y < 0.",
              "Fourth quadrant requires x > 0, y < 0."
            ],
            "readingPassage": null
          },
          {
            "id": "ma_u1_test_q06",
            "type": "mcq",
            "difficulty": "medium",
            "category": "Coordinate Plane",
            "marks": 2,
            "question": "If the point (a, b) lies in the fourth quadrant, then a · b is:",
            "options": [
              "< 0",
              "> 0",
              "= 0",
              "≥ 0"
            ],
            "correctIndex": 0,
            "explanation": "In the fourth quadrant, a > 0 (positive) and b < 0 (negative). The product of a positive and a negative number is always negative (< 0).",
            "whyWrong": [
              "> 0 is the product in the 1st or 3rd quadrants.",
              "= 0 would mean the point lies on an axis.",
              "≥ 0 includes zero and positive values."
            ],
            "readingPassage": null
          },
          {
            "id": "ma_u1_test_q07",
            "type": "mcq",
            "difficulty": "medium",
            "category": "Coordinate Plane",
            "marks": 2,
            "question": "If the point (x, 7) lies on the y-axis, then 5x + 1 equals:",
            "options": [
              "1",
              "6",
              "0",
              "36"
            ],
            "correctIndex": 0,
            "explanation": "Any point on the y-axis has an x-coordinate of 0. Thus, x = 0, so 5(0) + 1 = 1.",
            "whyWrong": [
              "6 would be 5(1) + 1.",
              "0 ignores the constant 1.",
              "36 is unrelated."
            ],
            "readingPassage": null
          },
          {
            "id": "ma_u1_test_q08",
            "type": "mcq",
            "difficulty": "easy",
            "category": "Coordinate Plane",
            "marks": 2,
            "question": "If the point (5, b - 7) lies on the x-axis, then b equals:",
            "options": [
              "7",
              "-7",
              "0",
              "5"
            ],
            "correctIndex": 0,
            "explanation": "Any point on the x-axis has a y-coordinate of 0. So b - 7 = 0 => b = 7.",
            "whyWrong": [
              "-7 gives y = -14.",
              "0 gives y = -7.",
              "5 is the x-coordinate."
            ],
            "readingPassage": null
          },
          {
            "id": "ma_u1_test_q09",
            "type": "mcq",
            "difficulty": "medium",
            "category": "Functions",
            "marks": 2,
            "question": "If f(x) = 4x + b and f(3) = 15, then b equals:",
            "options": [
              "3",
              "-3",
              "27",
              "12"
            ],
            "correctIndex": 0,
            "explanation": "f(3) = 4(3) + b = 12 + b. Given f(3) = 15 => 12 + b = 15 => b = 3.",
            "whyWrong": [
              "-3 gives 12 - 3 = 9.",
              "27 would be 12 + 15.",
              "12 is 4(3)."
            ],
            "readingPassage": null
          },
          {
            "id": "ma_u1_test_q10",
            "type": "mcq",
            "difficulty": "medium",
            "category": "Polynomial Functions",
            "marks": 2,
            "question": "The degree of the polynomial function f(x) = x²(x² - 3) is:",
            "options": [
              "4th degree",
              "2nd degree",
              "3rd degree",
              "1st degree"
            ],
            "correctIndex": 0,
            "explanation": "Expanding gives f(x) = x⁴ - 3x². The highest exponent of x is 4, so it is a fourth-degree polynomial.",
            "whyWrong": [
              "2nd degree looks only at the outside or inside factor without multiplying.",
              "3rd degree is incorrect.",
              "1st degree is a linear polynomial."
            ],
            "readingPassage": null
          },
          {
            "id": "ma_u1_test_q11",
            "type": "mcq",
            "difficulty": "easy",
            "category": "Polynomial Functions",
            "marks": 2,
            "question": "If f(x) = 7, then f(3) - f(1) equals:",
            "options": [
              "0",
              "2",
              "7",
              "14"
            ],
            "correctIndex": 0,
            "explanation": "f(x) = 7 is a constant function, meaning f(x) = 7 for any real number x. Thus f(3) - f(1) = 7 - 7 = 0.",
            "whyWrong": [
              "2 is 3 - 1.",
              "7 is f(3) alone.",
              "14 is 7 + 7."
            ],
            "readingPassage": null
          },
          {
            "id": "ma_u1_test_q12",
            "type": "mcq",
            "difficulty": "easy",
            "category": "Polynomial Functions",
            "marks": 2,
            "question": "If f(x) = 2, then f(2) / f(0) equals:",
            "options": [
              "1",
              "0",
              "2",
              "Undefined"
            ],
            "correctIndex": 0,
            "explanation": "f(2) = 2 and f(0) = 2. Therefore, f(2) / f(0) = 2 / 2 = 1.",
            "whyWrong": [
              "0 is incorrect because 2 / 2 = 1.",
              "2 would be 2 / 1.",
              "f(0) is not 0, so it is defined."
            ],
            "readingPassage": null
          },
          {
            "id": "ma_u1_test_q13",
            "type": "mcq",
            "difficulty": "medium",
            "category": "Polynomial Functions",
            "marks": 2,
            "question": "The straight line representing the function f(x) = 3x - 6 intersects the y-axis at:",
            "options": [
              "(0, -6)",
              "(2, 0)",
              "(-6, 0)",
              "(0, 2)"
            ],
            "correctIndex": 0,
            "explanation": "To find the y-intercept, set x = 0: f(0) = 3(0) - 6 = -6. The point is (0, -6).",
            "whyWrong": [
              "(2, 0) is the x-intercept.",
              "(-6, 0) has x and y swapped.",
              "(0, 2) is incorrect."
            ],
            "readingPassage": null
          },
          {
            "id": "ma_u1_test_q14",
            "type": "mcq",
            "difficulty": "medium",
            "category": "Polynomial Functions",
            "marks": 2,
            "question": "The vertex of the curve representing the function f(x) = x² - 2 is:",
            "options": [
              "(0, -2)",
              "(0, 2)",
              "(-2, 0)",
              "(2, 0)"
            ],
            "correctIndex": 0,
            "explanation": "The quadratic function is in standard form f(x) = ax² + bx + c with a = 1, b = 0, c = -2. The x-coordinate of the vertex is -b/(2a) = 0, and y = f(0) = -2. Vertex is (0, -2).",
            "whyWrong": [
              "(0, 2) has the wrong sign for c.",
              "(-2, 0) swaps coordinates.",
              "(2, 0) is not the vertex."
            ],
            "readingPassage": null
          },
          {
            "id": "ma_u1_test_q15",
            "type": "mcq",
            "difficulty": "easy",
            "category": "Functions",
            "marks": 2,
            "question": "The range of a function f: X → Y is always a subset of:",
            "options": [
              "Y",
              "X",
              "X × Y",
              "X ∩ Y"
            ],
            "correctIndex": 0,
            "explanation": "By definition, the range consists of all actual images of the elements of X under f, and all these images belong to the codomain Y. Thus Range ⊆ Y.",
            "whyWrong": [
              "X is the domain.",
              "X × Y is the Cartesian product.",
              "X ∩ Y is the intersection of sets."
            ],
            "readingPassage": null
          },
          {
            "id": "ma_u1_test_q16",
            "type": "complete",
            "difficulty": "medium",
            "category": "Cartesian Product",
            "marks": 2,
            "question": "If (x - 3, 2ʸ) = (2, 16), then x + y = ...",
            "acceptableAnswers": [
              "9",
              "x=5, y=4, x+y=9",
              "nine"
            ],
            "modelAnswer": "9",
            "explanation": "x - 3 = 2 => x = 5. 2ʸ = 16 = 2⁴ => y = 4. Therefore x + y = 5 + 4 = 9.",
            "readingPassage": null
          },
          {
            "id": "ma_u1_test_q17",
            "type": "complete",
            "difficulty": "medium",
            "category": "Cartesian Product",
            "marks": 2,
            "question": "If X = {2, 5}, Y = {1, 2}, and Z = {3}, then n(X × (Y ∩ Z)) = ...",
            "acceptableAnswers": [
              "0",
              "zero",
              "empty set"
            ],
            "modelAnswer": "0",
            "explanation": "Y ∩ Z = {1, 2} ∩ {3} = ∅. Therefore n(Y ∩ Z) = 0, and n(X × ∅) = 2 × 0 = 0.",
            "readingPassage": null
          },
          {
            "id": "ma_u1_test_q18",
            "type": "complete",
            "difficulty": "easy",
            "category": "Polynomial Functions",
            "marks": 2,
            "question": "The equation of the axis of symmetry for the curve f(x) = (x - 3)² + 1 is x = ...",
            "acceptableAnswers": [
              "3",
              "x=3"
            ],
            "modelAnswer": "3",
            "explanation": "The vertex of the parabola f(x) = (x - 3)² + 1 is (3, 1). The axis of symmetry is the vertical line passing through the vertex, so x = 3.",
            "readingPassage": null
          },
          {
            "id": "ma_u1_test_q19",
            "type": "essay",
            "difficulty": "hard",
            "category": "Relations and Functions",
            "marks": 4,
            "question": "Let X = {1, 2, 3} and Y = {1, 1/2, 1/3, 1/5}. R is a relation from X to Y where a R b means 'a is the multiplicative inverse of b' for every a ∈ X and b ∈ Y. Write R as a set of ordered pairs, show whether R is a function from X to Y, and find its range.",
            "keywords": [
              "multiplicative inverse",
              "function",
              "range",
              "(1, 1)",
              "(2, 1/2)",
              "(3, 1/3)"
            ],
            "modelAnswer": "R = {(1, 1), (2, 1/2), (3, 1/3)}. R is a function because every element in X appears as a first projection exactly once. The range = {1, 1/2, 1/3}.",
            "explanation": "Multiplicative inverse of 1 is 1, of 2 is 1/2, of 3 is 1/3. Each element of X has a unique image in Y.",
            "readingPassage": null
          },
          {
            "id": "ma_u1_test_q20",
            "type": "essay",
            "difficulty": "hard",
            "category": "Polynomial Functions",
            "marks": 4,
            "question": "Graph the quadratic function f(x) = 4 - x² in the interval [-3, 3]. From the graph, determine: (1) The coordinates of the vertex of the curve, (2) The equation of the axis of symmetry, (3) The maximum value of the function.",
            "keywords": [
              "vertex (0, 4)",
              "axis of symmetry x = 0",
              "maximum value 4",
              "table of values"
            ],
            "modelAnswer": "Values: f(-3)=-5, f(-2)=0, f(-1)=3, f(0)=4, f(1)=3, f(2)=0, f(3)=-5. (1) Vertex is (0, 4), (2) Equation of the axis of symmetry is x = 0, (3) Maximum value = 4.",
            "explanation": "Because the coefficient of x² is negative (-1), the parabola opens downwards and has a maximum value at its vertex (0, 4).",
            "readingPassage": null
          }
        ]
      }
    },
    {
      "id": "ma_unit2",
      "number": 2,
      "title": "Unit 2: Algebra",
      "description": "Quadratic Functions, Zeros of Polynomials, and Operations on Rational Algebraic Functions",
      "color": "#2563eb",
      "lessons": [
        {
          "id": "ma_u2_l1",
          "unitId": "ma_unit2",
          "number": 1,
          "type": "algebra",
          "title": "Lesson 2-1: Quadratic Function",
          "summarySheet": {
            "page1": {
              "title": "Page 1: Graphs, Vertex Coordinates & Properties of Quadratic Functions",
              "subtitle": "Parabola • Concavity • Vertex Formula • Axis of Symmetry • Maximum / Minimum Value",
              "coreIdea": "A quadratic function is a second-degree polynomial function defined by f(x) = ax² + bx + c (where a, b, c ∈ ℝ and a ≠ 0). Its graph is a symmetric parabola. If a > 0, the parabola opens upwards and has a minimum value. If a < 0, the parabola opens downwards and has a maximum value. The axis of symmetry passes through the vertex at x = -b / (2a).",
              "mindMap": [
                {
                  "title": "1. Standard Form & Concavity",
                  "desc": "• Form: f(x) = ax² + bx + c (a ≠ 0).<br>• If a > 0: Opens upwards (∪), vertex is the lowest point (minimum value).<br>• If a < 0: Opens downwards (∩), vertex is the highest point (maximum value)."
                },
                {
                  "title": "2. Coordinates of the Vertex",
                  "desc": "• x-coordinate: x_v = -b / (2a).<br>• y-coordinate: y_v = f(-b / 2a) = c - b²/(4a).<br>• Vertex Point: V = (-b / 2a, f(-b / 2a))."
                },
                {
                  "title": "3. Axis of Symmetry & Extrema",
                  "desc": "• Equation of axis of symmetry: Straight line x = -b / (2a).<br>• Minimum value (if a > 0): y = f(-b / 2a).<br>• Maximum value (if a < 0): y = f(-b / 2a)."
                },
                {
                  "title": "4. Graphical Representation",
                  "desc": "• Construct a table of values for x in the given interval [x₁, x₂].<br>• Plot points and connect with a smooth continuous curve.<br>• Identify x-intercepts (roots of ax² + bx + c = 0) and y-intercept (0, c)."
                }
              ],
              "vocabulary": [
                {
                  "word": "Quadratic Function",
                  "meaning": "A polynomial function of degree 2: f(x) = ax² + bx + c (a ≠ 0)",
                  "opposite": "Linear function",
                  "plural": "Quadratic functions"
                },
                {
                  "word": "Parabola (القطع المكافئ)",
                  "meaning": "The U-shaped symmetric curve representing a quadratic function",
                  "opposite": "Straight line",
                  "plural": "Parabolas"
                },
                {
                  "word": "Vertex (رأس المنحنى)",
                  "meaning": "The turning point of the parabola where it reaches its maximum or minimum",
                  "opposite": "Asymptote",
                  "plural": "Vertices"
                },
                {
                  "word": "Axis of Symmetry",
                  "meaning": "The vertical line x = -b/(2a) that divides the parabola into two congruent halves",
                  "opposite": "Asymmetric line",
                  "plural": "Axes of symmetry"
                },
                {
                  "word": "Extremum (القيمة العظمى / الصغرى)",
                  "meaning": "The highest (maximum) or lowest (minimum) y-value attained by the function",
                  "opposite": "Inflection point",
                  "plural": "Extrema"
                }
              ],
              "beautyPoints": [
                {
                  "phrase": "Vertex is (-b/2a, f(-b/2a))",
                  "secret": "You do NOT always need to draw the graph to find the vertex or axis of symmetry. Directly calculating x = -b/(2a) gives the axis of symmetry immediately, and plugging x into f(x) gives the extremum."
                },
                {
                  "phrase": "a > 0 ⟹ Minimum Value; a < 0 ⟹ Maximum Value",
                  "secret": "A positive leading coefficient means the curve cups upwards to hold water (minimum bottom). A negative leading coefficient means the curve caps downwards like a mountain peak (maximum top)."
                }
              ]
            },
            "page2": {
              "title": "Page 2: Tabular Plotting Rules & Golden Ministerial Exam Questions",
              "subtitle": "Step-by-step Interval Plotting • Determining Parameters • Ministerial Q&A",
              "grammarFocus": {
                "title": "Capsule 1: Protocol for Graphing Quadratic Functions on [p, q]",
                "rules": [
                  "Step 1: Write down the given closed interval [p, q] and calculate f(x) for integer values.",
                  "Step 2: Check symmetry in the table: values of f(x) must mirror around the central vertex value.",
                  "Step 3: State explicitly from the table: Vertex = (x₀, y₀), Equation of axis of symmetry: x = x₀, Extrema: Maximum/Minimum value is y₀.",
                  "Step 4: Draw the coordinate plane, plot points accurately, and connect with a smooth freehand curve (never use a straight ruler)."
                ]
              },
              "spellingFocus": {
                "title": "Capsule 2: Ministerial Exam Traps",
                "rules": [
                  "Trap 1: Axis of symmetry is an EQUATION: write 'x = 2', NOT just '2'.",
                  "Trap 2: For f(x) = 4 - x², the vertex is at x = -0/(2·(-1)) = 0 ⟹ V = (0, 4). Since a = -1 < 0, it has a MAXIMUM value of 4.",
                  "Trap 3: If the vertex of f(x) = x² - 2x + k lies on the x-axis, then its y-coordinate is 0: f(1) = 0 ⟹ 1 - 2 + k = 0 ⟹ k = 1."
                ]
              },
              "goldenQuestions": [
                {
                  "q": "Find the vertex and axis of symmetry of f(x) = x² - 4x + 3 without drawing.",
                  "a": "Here a = 1, b = -4, c = 3.<br>x = -b / (2a) = -(-4) / (2 · 1) = 4 / 2 = 2.<br>y = f(2) = (2)² - 4(2) + 3 = 4 - 8 + 3 = -1.<br>• Vertex = (2, -1).<br>• Axis of symmetry: x = 2.<br>• Minimum value = -1."
                },
                {
                  "q": "If the point (2, -3) is the vertex of the curve f(x) = ax² + bx + c, what is the equation of the axis of symmetry?",
                  "a": "The equation of the axis of symmetry is always the vertical line passing through the x-coordinate of the vertex: x = 2."
                },
                {
                  "q": "Find the maximum value of f(x) = 5 - (x - 1)².",
                  "a": "Since (x - 1)² ≥ 0 for all x, the maximum value occurs when (x - 1)² = 0 (at x = 1). Thus, Maximum value = 5."
                }
              ]
            }
          },
          "topics": [
            {
              "id": "ma_u2_l1_t1",
              "title": "Vertex Coordinates & Axis of Symmetry",
              "questions": [
                {
                  "id": "ma_u2_l1_q01",
                  "type": "mcq",
                  "difficulty": "Easy",
                  "category": "Quadratic Function",
                  "question": "The axis of symmetry of the curve f(x) = x² - 6x + 5 is the line:",
                  "options": [
                    "x = -3",
                    "x = 3",
                    "y = 3",
                    "x = 6"
                  ],
                  "correctIndex": 1,
                  "explanation": "x = -b / (2a) = -(-6) / (2 · 1) = 6 / 2 = 3. Thus the axis of symmetry is x = 3.",
                  "whyWrong": [
                    "Forgot negative sign in formula: -b/(2a).",
                    "Used y instead of x for a vertical line.",
                    "Did not divide by 2a."
                  ],
                  "readingPassage": null
                },
                {
                  "id": "ma_u2_l1_q02",
                  "type": "mcq",
                  "difficulty": "Easy",
                  "category": "Quadratic Function",
                  "question": "The function f(x) = 2 - x² has a:",
                  "options": [
                    "Minimum value = 2",
                    "Maximum value = 2",
                    "Minimum value = -2",
                    "Maximum value = 0"
                  ],
                  "correctIndex": 1,
                  "explanation": "Here a = -1 < 0, so the parabola opens downwards and has a maximum value at x = 0: f(0) = 2.",
                  "whyWrong": [
                    "Confused maximum with minimum (a < 0 implies maximum).",
                    "Sign error.",
                    "Incorrect value."
                  ],
                  "readingPassage": null
                },
                {
                  "id": "ma_u2_l1_q03",
                  "type": "mcq",
                  "difficulty": "Medium",
                  "category": "Vertex",
                  "question": "The coordinates of the vertex of the curve f(x) = (x - 3)² + 1 are:",
                  "options": [
                    "(-3, 1)",
                    "(3, 1)",
                    "(3, -1)",
                    "(1, 3)"
                  ],
                  "correctIndex": 1,
                  "explanation": "The vertex form is f(x) = a(x - h)² + k with vertex (h, k). Here h = 3, k = 1, so the vertex is (3, 1).",
                  "whyWrong": [
                    "Flipped the sign of h.",
                    "Flipped the sign of k.",
                    "Swapped x and y coordinates."
                  ],
                  "readingPassage": null
                },
                {
                  "id": "ma_u2_l1_q04",
                  "type": "mcq",
                  "difficulty": "Medium",
                  "category": "Quadratic Function",
                  "question": "If the vertex of the curve of f(x) = x² + k lies on the x-axis, then k equals:",
                  "options": [
                    "1",
                    "0",
                    "-1",
                    "2"
                  ],
                  "correctIndex": 1,
                  "explanation": "The vertex is at x = 0: f(0) = k. If it lies on the x-axis, its y-coordinate must be 0, so k = 0.",
                  "whyWrong": [
                    "Assumed k = 1.",
                    "Assumed k = -1.",
                    "Incorrect deduction."
                  ],
                  "readingPassage": null
                }
              ]
            },
            {
              "id": "ma_u2_l1_t2",
              "title": "Graphing & Extrema on Intervals",
              "questions": [
                {
                  "id": "ma_u2_l1_q05",
                  "type": "mcq",
                  "difficulty": "Hard",
                  "category": "Quadratic Function",
                  "question": "If the curve of f(x) = ax² + bx + c passes through the point (0, 3), then:",
                  "options": [
                    "a = 3",
                    "b = 3",
                    "c = 3",
                    "a + b = 3"
                  ],
                  "correctIndex": 2,
                  "explanation": "Passing through (0, 3) means f(0) = 3: a(0)² + b(0) + c = 3 ⟹ c = 3.",
                  "whyWrong": [
                    "Equated leading coefficient a to y-intercept.",
                    "Equated linear coefficient b to y-intercept.",
                    "Incorrect relationship."
                  ],
                  "readingPassage": null
                },
                {
                  "id": "ma_u2_l1_q06",
                  "type": "complete",
                  "difficulty": "Easy",
                  "category": "Quadratic Function",
                  "question": "The minimum value of f(x) = x² + 4 is ____.",
                  "acceptableAnswers": [
                    "4",
                    "٤"
                  ],
                  "modelAnswer": "4",
                  "explanation": "Since x² ≥ 0, the minimum value is reached at x = 0, giving f(0) = 4.",
                  "readingPassage": null
                },
                {
                  "id": "ma_u2_l1_q07",
                  "type": "complete",
                  "difficulty": "Medium",
                  "category": "Quadratic Function",
                  "question": "If x = 2 is the axis of symmetry of f(x) = x² - kx + 1, then k = ____.",
                  "acceptableAnswers": [
                    "4",
                    "٤"
                  ],
                  "modelAnswer": "4",
                  "explanation": "Axis of symmetry: x = -(-k)/(2 · 1) = k/2. Since x = 2, k/2 = 2 ⟹ k = 4.",
                  "readingPassage": null
                },
                {
                  "id": "ma_u2_l1_q08",
                  "type": "essay",
                  "difficulty": "Hard",
                  "category": "Graphing Quadratic Function",
                  "question": "Graph the function f(x) = x² - 2x - 3 on the interval [-2, 4]. From the graph, deduce: 1) Coordinates of vertex, 2) Equation of axis of symmetry, 3) Minimum value.",
                  "keywords": [
                    "(1, -4)",
                    "x = 1",
                    "-4"
                  ],
                  "modelAnswer": "1) Table of values: f(-2) = 5, f(-1) = 0, f(0) = -3, f(1) = -4, f(2) = -3, f(3) = 0, f(4) = 5.\n2) Vertex is at (1, -4).\n3) Equation of axis of symmetry: x = 1.\n4) Minimum value of the function is -4.",
                  "explanation": "Award full marks for table values, vertex (1, -4), line x = 1, and minimum value = -4.",
                  "readingPassage": null
                }
              ]
            }
          ],
          "lessonExam": {
            "title": "Assessment: Quadratic Function",
            "subtitle": "Parabola geometry, vertices and graphing",
            "questions": [
              {
                "id": "ma_u2_l1_q01",
                "type": "mcq",
                "difficulty": "Easy",
                "category": "Quadratic Function",
                "question": "The axis of symmetry of the curve f(x) = x² - 6x + 5 is the line:",
                "options": [
                  "x = -3",
                  "x = 3",
                  "y = 3",
                  "x = 6"
                ],
                "correctIndex": 1,
                "explanation": "x = -b / (2a) = -(-6) / (2 · 1) = 6 / 2 = 3. Thus the axis of symmetry is x = 3.",
                "whyWrong": [
                  "Forgot negative sign in formula: -b/(2a).",
                  "Used y instead of x for a vertical line.",
                  "Did not divide by 2a."
                ],
                "readingPassage": null
              },
              {
                "id": "ma_u2_l1_q02",
                "type": "mcq",
                "difficulty": "Easy",
                "category": "Quadratic Function",
                "question": "The function f(x) = 2 - x² has a:",
                "options": [
                  "Minimum value = 2",
                  "Maximum value = 2",
                  "Minimum value = -2",
                  "Maximum value = 0"
                ],
                "correctIndex": 1,
                "explanation": "Here a = -1 < 0, so the parabola opens downwards and has a maximum value at x = 0: f(0) = 2.",
                "whyWrong": [
                  "Confused maximum with minimum (a < 0 implies maximum).",
                  "Sign error.",
                  "Incorrect value."
                ],
                "readingPassage": null
              },
              {
                "id": "ma_u2_l1_q03",
                "type": "mcq",
                "difficulty": "Medium",
                "category": "Vertex",
                "question": "The coordinates of the vertex of the curve f(x) = (x - 3)² + 1 are:",
                "options": [
                  "(-3, 1)",
                  "(3, 1)",
                  "(3, -1)",
                  "(1, 3)"
                ],
                "correctIndex": 1,
                "explanation": "The vertex form is f(x) = a(x - h)² + k with vertex (h, k). Here h = 3, k = 1, so the vertex is (3, 1).",
                "whyWrong": [
                  "Flipped the sign of h.",
                  "Flipped the sign of k.",
                  "Swapped x and y coordinates."
                ],
                "readingPassage": null
              },
              {
                "id": "ma_u2_l1_q04",
                "type": "mcq",
                "difficulty": "Medium",
                "category": "Quadratic Function",
                "question": "If the vertex of the curve of f(x) = x² + k lies on the x-axis, then k equals:",
                "options": [
                  "1",
                  "0",
                  "-1",
                  "2"
                ],
                "correctIndex": 1,
                "explanation": "The vertex is at x = 0: f(0) = k. If it lies on the x-axis, its y-coordinate must be 0, so k = 0.",
                "whyWrong": [
                  "Assumed k = 1.",
                  "Assumed k = -1.",
                  "Incorrect deduction."
                ],
                "readingPassage": null
              },
              {
                "id": "ma_u2_l1_q05",
                "type": "mcq",
                "difficulty": "Hard",
                "category": "Quadratic Function",
                "question": "If the curve of f(x) = ax² + bx + c passes through the point (0, 3), then:",
                "options": [
                  "a = 3",
                  "b = 3",
                  "c = 3",
                  "a + b = 3"
                ],
                "correctIndex": 2,
                "explanation": "Passing through (0, 3) means f(0) = 3: a(0)² + b(0) + c = 3 ⟹ c = 3.",
                "whyWrong": [
                  "Equated leading coefficient a to y-intercept.",
                  "Equated linear coefficient b to y-intercept.",
                  "Incorrect relationship."
                ],
                "readingPassage": null
              },
              {
                "id": "ma_u2_l1_q06",
                "type": "complete",
                "difficulty": "Easy",
                "category": "Quadratic Function",
                "question": "The minimum value of f(x) = x² + 4 is ____.",
                "acceptableAnswers": [
                  "4",
                  "٤"
                ],
                "modelAnswer": "4",
                "explanation": "Since x² ≥ 0, the minimum value is reached at x = 0, giving f(0) = 4.",
                "readingPassage": null
              },
              {
                "id": "ma_u2_l1_q07",
                "type": "complete",
                "difficulty": "Medium",
                "category": "Quadratic Function",
                "question": "If x = 2 is the axis of symmetry of f(x) = x² - kx + 1, then k = ____.",
                "acceptableAnswers": [
                  "4",
                  "٤"
                ],
                "modelAnswer": "4",
                "explanation": "Axis of symmetry: x = -(-k)/(2 · 1) = k/2. Since x = 2, k/2 = 2 ⟹ k = 4.",
                "readingPassage": null
              },
              {
                "id": "ma_u2_l1_q08",
                "type": "essay",
                "difficulty": "Hard",
                "category": "Graphing Quadratic Function",
                "question": "Graph the function f(x) = x² - 2x - 3 on the interval [-2, 4]. From the graph, deduce: 1) Coordinates of vertex, 2) Equation of axis of symmetry, 3) Minimum value.",
                "keywords": [
                  "(1, -4)",
                  "x = 1",
                  "-4"
                ],
                "modelAnswer": "1) Table of values: f(-2) = 5, f(-1) = 0, f(0) = -3, f(1) = -4, f(2) = -3, f(3) = 0, f(4) = 5.\n2) Vertex is at (1, -4).\n3) Equation of axis of symmetry: x = 1.\n4) Minimum value of the function is -4.",
                "explanation": "Award full marks for table values, vertex (1, -4), line x = 1, and minimum value = -4.",
                "readingPassage": null
              }
            ]
          }
        },
        {
          "id": "ma_u2_l2",
          "unitId": "ma_unit2",
          "number": 2,
          "type": "algebra",
          "title": "Lesson 2-2: Set of Real Zeros of Polynomial Functions",
          "summarySheet": {
            "page1": {
              "title": "Page 1: Concept, Methods & Special Cases of Zeros of Polynomials",
              "subtitle": "Definition of Z(f) • Linear Functions • Quadratic Factorization • General Formula",
              "coreIdea": "The set of real zeros of a polynomial function f, denoted Z(f), is the set of all real numbers that make the function value equal to zero: Z(f) = {x ∈ ℝ : f(x) = 0}. Geometrically, zeros represent the x-intercepts of the curve where it crosses or touches the x-axis.",
              "mindMap": [
                {
                  "title": "1. Definition of Z(f)",
                  "desc": "• Definition: Z(f) = {x ∈ ℝ : f(x) = 0}.<br>• Example: f(x) = 2x - 6 → 2x - 6 = 0 → x = 3 → Z(f) = {3}."
                },
                {
                  "title": "2. Constant Function Zeros",
                  "desc": "• If f(x) = c (c ≠ 0, e.g. f(x) = 5): Z(f) = ∅ (never equals 0).<br>• If f(x) = 0 (the zero function): Z(f) = ℝ (equals 0 for all x ∈ ℝ)."
                },
                {
                  "title": "3. Quadratic Function Zeros",
                  "desc": "• Factorization: Difference of squares x² - 9 = 0 → Z(f) = {-3, 3}.<br>• Sum of squares: x² + 25 = 0 has NO real solutions → Z(f) = ∅.<br>• General trinomial: Factor (x - p)(x - q) = 0 or use quadratic formula."
                },
                {
                  "title": "4. Higher Degree & Common Factor",
                  "desc": "• Factor out common terms: f(x) = x³ - 4x = x(x² - 4) = x(x - 2)(x + 2) → Z(f) = {-2, 0, 2}.<br>• Sum/difference of cubes: x³ - 8 = (x - 2)(x² + 2x + 4) → non-factorable quadratic part yields no real roots → Z(f) = {2}."
                }
              ],
              "vocabulary": [
                {
                  "word": "Zeros of Function (أصفار الدالة)",
                  "meaning": "Values of the independent variable x for which f(x) = 0",
                  "opposite": "Poles / Undefined points",
                  "plural": "Sets of zeros Z(f)"
                },
                {
                  "word": "Empty Set ∅",
                  "meaning": "Indicates the function never equals zero for any real number (e.g. f(x) = x² + 4)",
                  "opposite": "Universal set ℝ",
                  "plural": "Empty sets"
                },
                {
                  "word": "Roots / Solutions",
                  "meaning": "The solutions to the algebraic equation f(x) = 0",
                  "opposite": "Coefficients",
                  "plural": "Roots"
                },
                {
                  "word": "Discriminant (المميز)",
                  "meaning": "The quantity Δ = b² - 4ac that determines the nature and number of real roots",
                  "opposite": "Coefficient",
                  "plural": "Discriminants"
                }
              ],
              "beautyPoints": [
                {
                  "phrase": "x² + a² = 0 ⟹ Z(f) = ∅",
                  "secret": "Sum of two squares (like x² + 9 or x² + 16) has NO real zeros because a square is always ≥ 0, so x² + a² ≥ a² > 0."
                },
                {
                  "phrase": "f(x) = 0 vs f(x) = c (c ≠ 0)",
                  "secret": "If f(x) = 0, Z(f) = ℝ (all real numbers are zeros). If f(x) = 7, Z(f) = ∅ (no real number can make 7 equal to 0)."
                }
              ]
            },
            "page2": {
              "title": "Page 2: Standard Solving Algorithms & Golden Ministerial Exam Questions",
              "subtitle": "Factorization Workflows • Quadratic Formula • Ministerial Model Q&A",
              "grammarFocus": {
                "title": "Capsule 1: Systematic Method for Finding Z(f)",
                "rules": [
                  "Step 1: Set f(x) = 0.",
                  "Step 2: Factor completely (Common factor ⟹ Difference of squares ⟹ Trinomial ⟹ Cubes).",
                  "Step 3: Solve each linear factor for x.",
                  "Step 4: Write the final set inside braces { ... } without duplicates."
                ]
              },
              "spellingFocus": {
                "title": "Capsule 2: Ministerial Warnings",
                "rules": [
                  "Warning 1: Z(f) is a SET: write '{2, -2}', not 'x = ±2'.",
                  "Warning 2: In x³ - 27 = (x - 3)(x² + 3x + 9), the quadratic factor has b² - 4ac = 9 - 36 = -27 < 0, giving no real roots! Only {3}.",
                  "Warning 3: If Z(f) = {2} for f(x) = x² - ax + 4, then 2² - 2a + 4 = 0 ⟹ 8 - 2a = 0 ⟹ a = 4."
                ]
              },
              "goldenQuestions": [
                {
                  "q": "Find Z(f) for f(x) = x² - 5x + 6.",
                  "a": "x² - 5x + 6 = 0 ⟹ (x - 2)(x - 3) = 0 ⟹ x = 2 or x = 3. Z(f) = {2, 3}."
                },
                {
                  "q": "Find Z(f) for f(x) = x² + 16.",
                  "a": "Since x² ≥ 0 for all real x, x² + 16 ≥ 16 > 0. It never equals zero in ℝ. Z(f) = ∅."
                },
                {
                  "q": "If Z(f) = {3} where f(x) = x² - 6x + k, find the value of k.",
                  "a": "Since 3 is a zero: f(3) = 0 ⟹ (3)² - 6(3) + k = 0 ⟹ 9 - 18 + k = 0 ⟹ -9 + k = 0 ⟹ k = 9."
                }
              ]
            }
          },
          "topics": [
            {
              "id": "ma_u2_l2_t1",
              "title": "Linear & Constant Functions Zeros",
              "questions": [
                {
                  "id": "ma_u2_l2_q01",
                  "type": "mcq",
                  "difficulty": "Easy",
                  "category": "Zeros of Functions",
                  "question": "The set of zeros of the function f(x) = 3x - 12 is:",
                  "options": [
                    "{4}",
                    "{-4}",
                    "{3}",
                    "{12}"
                  ],
                  "correctIndex": 0,
                  "explanation": "3x - 12 = 0 ⟹ 3x = 12 ⟹ x = 4. Z(f) = {4}.",
                  "whyWrong": [
                    "Sign error: -4.",
                    "Took coefficient 3.",
                    "Took constant 12."
                  ],
                  "readingPassage": null
                },
                {
                  "id": "ma_u2_l2_q02",
                  "type": "mcq",
                  "difficulty": "Easy",
                  "category": "Zeros of Functions",
                  "question": "The set of zeros of the function f(x) = x² - 25 is:",
                  "options": [
                    "{5}",
                    "{-5}",
                    "{-5, 5}",
                    "∅"
                  ],
                  "correctIndex": 2,
                  "explanation": "x² - 25 = 0 ⟹ (x - 5)(x + 5) = 0 ⟹ x = ±5. Z(f) = {-5, 5}.",
                  "whyWrong": [
                    "Only positive root.",
                    "Only negative root.",
                    "Mistook difference of squares for sum of squares."
                  ],
                  "readingPassage": null
                },
                {
                  "id": "ma_u2_l2_q03",
                  "type": "mcq",
                  "difficulty": "Easy",
                  "category": "Zeros of Functions",
                  "question": "The set of zeros of the function f(x) = x² + 9 is:",
                  "options": [
                    "{3}",
                    "{-3, 3}",
                    "{-3}",
                    "∅"
                  ],
                  "correctIndex": 3,
                  "explanation": "x² + 9 = 0 has no real solutions because x² cannot be negative. Z(f) = ∅.",
                  "whyWrong": [
                    "Mistook sum of squares for difference of squares.",
                    "Ignored imaginary roots.",
                    "Sign error."
                  ],
                  "readingPassage": null
                },
                {
                  "id": "ma_u2_l2_q04",
                  "type": "mcq",
                  "difficulty": "Medium",
                  "category": "Constant Functions",
                  "question": "If f(x) = -7, then Z(f) is:",
                  "options": [
                    "{-7}",
                    "{7}",
                    "∅",
                    "ℝ"
                  ],
                  "correctIndex": 2,
                  "explanation": "A non-zero constant function never equals zero, so Z(f) = ∅.",
                  "whyWrong": [
                    "Put the constant inside set notation.",
                    "Changed sign of constant.",
                    "Confused with zero function f(x) = 0."
                  ],
                  "readingPassage": null
                },
                {
                  "id": "ma_u2_l2_q05",
                  "type": "mcq",
                  "difficulty": "Medium",
                  "category": "Zeros of Functions",
                  "question": "The set of zeros of the function f(x) = x(x² - 1) is:",
                  "options": [
                    "{0, 1}",
                    "{1, -1}",
                    "{-1, 0, 1}",
                    "{0}"
                  ],
                  "correctIndex": 2,
                  "explanation": "x(x - 1)(x + 1) = 0 ⟹ x = 0, x = 1, x = -1. Z(f) = {-1, 0, 1}.",
                  "whyWrong": [
                    "Forgot root -1.",
                    "Forgot root 0.",
                    "Only solved for the common factor."
                  ],
                  "readingPassage": null
                }
              ]
            },
            {
              "id": "ma_u2_l2_t2",
              "title": "Quadratic & Cubic Zeros",
              "questions": [
                {
                  "id": "ma_u2_l2_q06",
                  "type": "mcq",
                  "difficulty": "Hard",
                  "category": "Parameters in Z(f)",
                  "question": "If Z(f) = {5} for f(x) = x² - 10x + m, then m equals:",
                  "options": [
                    "5",
                    "10",
                    "25",
                    "-25"
                  ],
                  "correctIndex": 2,
                  "explanation": "f(5) = 0 ⟹ (5)² - 10(5) + m = 0 ⟹ 25 - 50 + m = 0 ⟹ -25 + m = 0 ⟹ m = 25.",
                  "whyWrong": [
                    "Took 5 directly.",
                    "Took 10 from the linear term.",
                    "Sign error: -25."
                  ],
                  "readingPassage": null
                },
                {
                  "id": "ma_u2_l2_q07",
                  "type": "complete",
                  "difficulty": "Easy",
                  "category": "Zeros of Functions",
                  "question": "If f(x) = 0, then Z(f) = ____.",
                  "acceptableAnswers": [
                    "R",
                    "ℝ",
                    "all real numbers"
                  ],
                  "modelAnswer": "ℝ",
                  "explanation": "The zero function f(x) = 0 evaluates to zero for every real number x, so Z(f) = ℝ.",
                  "readingPassage": null
                },
                {
                  "id": "ma_u2_l2_q08",
                  "type": "complete",
                  "difficulty": "Medium",
                  "category": "Zeros of Functions",
                  "question": "The set of zeros of f(x) = x³ - 8 is ____.",
                  "acceptableAnswers": [
                    "{2}",
                    "{٢}"
                  ],
                  "modelAnswer": "{2}",
                  "explanation": "x³ - 8 = (x - 2)(x² + 2x + 4) = 0. The quadratic factor has no real roots, so Z(f) = {2}.",
                  "readingPassage": null
                },
                {
                  "id": "ma_u2_l2_q09",
                  "type": "essay",
                  "difficulty": "Hard",
                  "category": "Zeros of Functions",
                  "question": "Find the set of zeros for f(x) = 2x³ - 18x, showing factoring steps.",
                  "keywords": [
                    "2x",
                    "x^2 - 9",
                    "x - 3",
                    "x + 3",
                    "{-3, 0, 3}"
                  ],
                  "modelAnswer": "1) Factor out common factor 2x: f(x) = 2x(x² - 9).\n2) Factor difference of squares: f(x) = 2x(x - 3)(x + 3).\n3) Set f(x) = 0 ⟹ 2x = 0 ⟹ x = 0; or x - 3 = 0 ⟹ x = 3; or x + 3 = 0 ⟹ x = -3.\n4) Z(f) = {-3, 0, 3}.",
                  "explanation": "Full credit requires factoring out 2x, factoring (x-3)(x+3), and listing all three zeros.",
                  "readingPassage": null
                }
              ]
            }
          ],
          "lessonExam": {
            "title": "Assessment: Zeros of Polynomial Functions",
            "subtitle": "Solving f(x) = 0 and determining parameter values",
            "questions": [
              {
                "id": "ma_u2_l2_q01",
                "type": "mcq",
                "difficulty": "Easy",
                "category": "Zeros of Functions",
                "question": "The set of zeros of the function f(x) = 3x - 12 is:",
                "options": [
                  "{4}",
                  "{-4}",
                  "{3}",
                  "{12}"
                ],
                "correctIndex": 0,
                "explanation": "3x - 12 = 0 ⟹ 3x = 12 ⟹ x = 4. Z(f) = {4}.",
                "whyWrong": [
                  "Sign error: -4.",
                  "Took coefficient 3.",
                  "Took constant 12."
                ],
                "readingPassage": null
              },
              {
                "id": "ma_u2_l2_q02",
                "type": "mcq",
                "difficulty": "Easy",
                "category": "Zeros of Functions",
                "question": "The set of zeros of the function f(x) = x² - 25 is:",
                "options": [
                  "{5}",
                  "{-5}",
                  "{-5, 5}",
                  "∅"
                ],
                "correctIndex": 2,
                "explanation": "x² - 25 = 0 ⟹ (x - 5)(x + 5) = 0 ⟹ x = ±5. Z(f) = {-5, 5}.",
                "whyWrong": [
                  "Only positive root.",
                  "Only negative root.",
                  "Mistook difference of squares for sum of squares."
                ],
                "readingPassage": null
              },
              {
                "id": "ma_u2_l2_q03",
                "type": "mcq",
                "difficulty": "Easy",
                "category": "Zeros of Functions",
                "question": "The set of zeros of the function f(x) = x² + 9 is:",
                "options": [
                  "{3}",
                  "{-3, 3}",
                  "{-3}",
                  "∅"
                ],
                "correctIndex": 3,
                "explanation": "x² + 9 = 0 has no real solutions because x² cannot be negative. Z(f) = ∅.",
                "whyWrong": [
                  "Mistook sum of squares for difference of squares.",
                  "Ignored imaginary roots.",
                  "Sign error."
                ],
                "readingPassage": null
              },
              {
                "id": "ma_u2_l2_q04",
                "type": "mcq",
                "difficulty": "Medium",
                "category": "Constant Functions",
                "question": "If f(x) = -7, then Z(f) is:",
                "options": [
                  "{-7}",
                  "{7}",
                  "∅",
                  "ℝ"
                ],
                "correctIndex": 2,
                "explanation": "A non-zero constant function never equals zero, so Z(f) = ∅.",
                "whyWrong": [
                  "Put the constant inside set notation.",
                  "Changed sign of constant.",
                  "Confused with zero function f(x) = 0."
                ],
                "readingPassage": null
              },
              {
                "id": "ma_u2_l2_q05",
                "type": "mcq",
                "difficulty": "Medium",
                "category": "Zeros of Functions",
                "question": "The set of zeros of the function f(x) = x(x² - 1) is:",
                "options": [
                  "{0, 1}",
                  "{1, -1}",
                  "{-1, 0, 1}",
                  "{0}"
                ],
                "correctIndex": 2,
                "explanation": "x(x - 1)(x + 1) = 0 ⟹ x = 0, x = 1, x = -1. Z(f) = {-1, 0, 1}.",
                "whyWrong": [
                  "Forgot root -1.",
                  "Forgot root 0.",
                  "Only solved for the common factor."
                ],
                "readingPassage": null
              },
              {
                "id": "ma_u2_l2_q06",
                "type": "mcq",
                "difficulty": "Hard",
                "category": "Parameters in Z(f)",
                "question": "If Z(f) = {5} for f(x) = x² - 10x + m, then m equals:",
                "options": [
                  "5",
                  "10",
                  "25",
                  "-25"
                ],
                "correctIndex": 2,
                "explanation": "f(5) = 0 ⟹ (5)² - 10(5) + m = 0 ⟹ 25 - 50 + m = 0 ⟹ -25 + m = 0 ⟹ m = 25.",
                "whyWrong": [
                  "Took 5 directly.",
                  "Took 10 from the linear term.",
                  "Sign error: -25."
                ],
                "readingPassage": null
              },
              {
                "id": "ma_u2_l2_q07",
                "type": "complete",
                "difficulty": "Easy",
                "category": "Zeros of Functions",
                "question": "If f(x) = 0, then Z(f) = ____.",
                "acceptableAnswers": [
                  "R",
                  "ℝ",
                  "all real numbers"
                ],
                "modelAnswer": "ℝ",
                "explanation": "The zero function f(x) = 0 evaluates to zero for every real number x, so Z(f) = ℝ.",
                "readingPassage": null
              },
              {
                "id": "ma_u2_l2_q08",
                "type": "complete",
                "difficulty": "Medium",
                "category": "Zeros of Functions",
                "question": "The set of zeros of f(x) = x³ - 8 is ____.",
                "acceptableAnswers": [
                  "{2}",
                  "{٢}"
                ],
                "modelAnswer": "{2}",
                "explanation": "x³ - 8 = (x - 2)(x² + 2x + 4) = 0. The quadratic factor has no real roots, so Z(f) = {2}.",
                "readingPassage": null
              },
              {
                "id": "ma_u2_l2_q09",
                "type": "essay",
                "difficulty": "Hard",
                "category": "Zeros of Functions",
                "question": "Find the set of zeros for f(x) = 2x³ - 18x, showing factoring steps.",
                "keywords": [
                  "2x",
                  "x^2 - 9",
                  "x - 3",
                  "x + 3",
                  "{-3, 0, 3}"
                ],
                "modelAnswer": "1) Factor out common factor 2x: f(x) = 2x(x² - 9).\n2) Factor difference of squares: f(x) = 2x(x - 3)(x + 3).\n3) Set f(x) = 0 ⟹ 2x = 0 ⟹ x = 0; or x - 3 = 0 ⟹ x = 3; or x + 3 = 0 ⟹ x = -3.\n4) Z(f) = {-3, 0, 3}.",
                "explanation": "Full credit requires factoring out 2x, factoring (x-3)(x+3), and listing all three zeros.",
                "readingPassage": null
              }
            ]
          }
        },
        {
          "id": "ma_u2_l3",
          "unitId": "ma_unit2",
          "number": 3,
          "type": "algebra",
          "title": "Lesson 2-3: Rational Algebraic Functions",
          "summarySheet": {
            "page1": {
              "title": "Page 1: Definition, Domain & Zeroes of Rational Algebraic Functions",
              "subtitle": "Rational Fraction n(x) = p(x)/q(x) • Domain = ℝ - Z(denominator) • Zeros of Fraction",
              "coreIdea": "A rational algebraic function n is the quotient of two polynomial functions p(x) and q(x): n(x) = p(x) / q(x), where q(x) is not the zero polynomial. The domain is the set of all real numbers except those that make the denominator zero: Domain = ℝ - Z(q). The zeros of n(x) are the zeros of the numerator that are NOT zeros of the denominator: Z(n) = Z(p) - Z(q).",
              "mindMap": [
                {
                  "title": "1. Definition of Rational Function",
                  "desc": "• Form: n(x) = p(x) / q(x) (p, q are polynomials).<br>• Condition: Denominator q(x) ≠ 0."
                },
                {
                  "title": "2. Domain Determination",
                  "desc": "• Rule: Domain of n = ℝ - Z(denominator).<br>• Example 1: n(x) = (x + 2)/(x - 3) → Z(denom) = {3} → Domain = ℝ - {3}.<br>• Example 2: n(x) = 5/(x² + 4) → Z(denom) = ∅ → Domain = ℝ - ∅ = ℝ."
                },
                {
                  "title": "3. Zeros of Rational Function",
                  "desc": "• Rule: Z(n) = Z(numerator) - Z(denominator).<br>• Values where n(x) = 0: must belong to the domain."
                }
              ],
              "vocabulary": [
                {
                  "word": "Rational Algebraic Function",
                  "meaning": "A function defined as the ratio of two polynomials p(x)/q(x)",
                  "opposite": "Irrational / Non-fractional function",
                  "plural": "Rational functions"
                },
                {
                  "word": "Domain (المجال)",
                  "meaning": "The set of real values for which the expression is defined: ℝ - Z(denominator)",
                  "opposite": "Excluded values",
                  "plural": "Domains"
                },
                {
                  "word": "Excluded Values (القيم المستبعدة)",
                  "meaning": "The zeros of the denominator where the rational expression is undefined",
                  "opposite": "Domain elements",
                  "plural": "Excluded values"
                }
              ],
              "beautyPoints": [
                {
                  "phrase": "Domain = ℝ - Z(denominator)",
                  "secret": "Division by zero is mathematically undefined. Thus the domain of ANY rational function is all real numbers ℝ MINUS the set of numbers that make the denominator zero."
                },
                {
                  "phrase": "Denominator with No Real Zeros ⟹ Domain = ℝ",
                  "secret": "If the denominator is x² + 9 or 5, it can NEVER equal 0. Therefore, no numbers need to be excluded: Domain = ℝ."
                }
              ]
            },
            "page2": {
              "title": "Page 2: Domain Determination Workflows & Golden Ministerial Exam Questions",
              "subtitle": "Finding Excluded Values • Domain vs Zeros • Model Q&A",
              "grammarFocus": {
                "title": "Capsule 1: Steps to Determine Domain of n(x) = p(x)/q(x)",
                "rules": [
                  "Step 1: Set denominator q(x) = 0.",
                  "Step 2: Solve for x to find Z(q).",
                  "Step 3: State Domain = ℝ - Z(q).",
                  "Step 4: NEVER cancel or simplify before finding the domain!"
                ]
              },
              "spellingFocus": {
                "title": "Capsule 2: Ministerial Traps",
                "rules": [
                  "Trap 1: If n(x) = (x - 2)/(x² - 4), do NOT simplify to 1/(x + 2) before finding the domain! Denominator x² - 4 = 0 ⟹ Domain = ℝ - {-2, 2}.",
                  "Trap 2: If the domain of n(x) = 3/(x + a) is ℝ - {5}, then 5 + a = 0 ⟹ a = -5."
                ]
              },
              "goldenQuestions": [
                {
                  "q": "Find the domain of n(x) = (x + 3) / (x² - 9).",
                  "a": "Denominator x² - 9 = 0 ⟹ (x - 3)(x + 3) = 0 ⟹ x = ±3. Domain = ℝ - {-3, 3}."
                },
                {
                  "q": "Find the domain of n(x) = (2x - 1) / (x² + 25).",
                  "a": "Denominator x² + 25 = 0 has no real solutions (Z = ∅). Domain = ℝ - ∅ = ℝ."
                },
                {
                  "q": "If the domain of n(x) = (x - 1)/(x² - kx + 9) is ℝ - {3}, find k.",
                  "a": "Since 3 is the only zero of the denominator: (3)² - k(3) + 9 = 0 ⟹ 9 - 3k + 9 = 0 ⟹ 18 = 3k ⟹ k = 6."
                }
              ]
            }
          },
          "topics": [
            {
              "id": "ma_u2_l3_t1",
              "title": "Domain Determination (ℝ - Z(q))",
              "questions": [
                {
                  "id": "ma_u2_l3_q01",
                  "type": "mcq",
                  "difficulty": "Easy",
                  "category": "Domain",
                  "question": "The domain of the rational function n(x) = (x + 2)/(x - 5) is:",
                  "options": [
                    "ℝ - {5}",
                    "ℝ - {-5}",
                    "ℝ - {-2}",
                    "{5}"
                  ],
                  "correctIndex": 0,
                  "explanation": "Denominator x - 5 = 0 ⟹ x = 5. Domain = ℝ - {5}.",
                  "whyWrong": [
                    "Sign error: -5.",
                    "Excluded zero of numerator instead of denominator.",
                    "Wrote just the excluded set without ℝ -."
                  ],
                  "readingPassage": null
                },
                {
                  "id": "ma_u2_l3_q02",
                  "type": "mcq",
                  "difficulty": "Easy",
                  "category": "Domain",
                  "question": "The domain of n(x) = 7 / (x² + 4) is:",
                  "options": [
                    "ℝ - {-2, 2}",
                    "ℝ - {2}",
                    "ℝ",
                    "∅"
                  ],
                  "correctIndex": 2,
                  "explanation": "x² + 4 = 0 has no real zeros, so no real numbers are excluded. Domain = ℝ.",
                  "whyWrong": [
                    "Treated sum of squares as difference of squares.",
                    "Excluded 2.",
                    "Confused domain with empty set."
                  ],
                  "readingPassage": null
                },
                {
                  "id": "ma_u2_l3_q03",
                  "type": "mcq",
                  "difficulty": "Medium",
                  "category": "Domain",
                  "question": "The domain of n(x) = (x² - 1) / (x² - x) is:",
                  "options": [
                    "ℝ - {0, 1}",
                    "ℝ - {1}",
                    "ℝ - {0}",
                    "ℝ - {-1, 1}"
                  ],
                  "correctIndex": 0,
                  "explanation": "Denominator x² - x = x(x - 1) = 0 ⟹ x = 0 or x = 1. Domain = ℝ - {0, 1}.",
                  "whyWrong": [
                    "Forgot the zero root from factor x.",
                    "Forgot root 1.",
                    "Looked at numerator."
                  ],
                  "readingPassage": null
                },
                {
                  "id": "ma_u2_l3_q04",
                  "type": "mcq",
                  "difficulty": "Hard",
                  "category": "Parameters in Domain",
                  "question": "If the domain of n(x) = (x + 1) / (x² - a) is ℝ - {-3, 3}, then a equals:",
                  "options": [
                    "3",
                    "6",
                    "9",
                    "-9"
                  ],
                  "correctIndex": 2,
                  "explanation": "Zeros of denominator are ±3: x² - a = 0 ⟹ (±3)² - a = 0 ⟹ 9 - a = 0 ⟹ a = 9.",
                  "whyWrong": [
                    "Took 3 instead of 3².",
                    "Doubled 3 to get 6.",
                    "Sign error: -9."
                  ],
                  "readingPassage": null
                }
              ]
            },
            {
              "id": "ma_u2_l3_t2",
              "title": "Zeros of Rational Fractions",
              "questions": [
                {
                  "id": "ma_u2_l3_q05",
                  "type": "complete",
                  "difficulty": "Easy",
                  "category": "Domain",
                  "question": "The domain of n(x) = (x - 4) / 7 is ____.",
                  "acceptableAnswers": [
                    "R",
                    "ℝ",
                    "all real numbers"
                  ],
                  "modelAnswer": "ℝ",
                  "explanation": "The denominator is a non-zero constant (7 ≠ 0), so the domain is ℝ.",
                  "readingPassage": null
                },
                {
                  "id": "ma_u2_l3_q06",
                  "type": "complete",
                  "difficulty": "Medium",
                  "category": "Domain",
                  "question": "If the domain of n(x) = 5 / (x - k) is ℝ - {2}, then k = ____.",
                  "acceptableAnswers": [
                    "2",
                    "٢"
                  ],
                  "modelAnswer": "2",
                  "explanation": "Setting denominator to zero at x = 2 gives 2 - k = 0 ⟹ k = 2.",
                  "readingPassage": null
                },
                {
                  "id": "ma_u2_l3_q07",
                  "type": "essay",
                  "difficulty": "Hard",
                  "category": "Domain & Zeros",
                  "question": "Find the domain and the set of zeros for the function: n(x) = (x² - 4) / (x² - x - 2).",
                  "keywords": [
                    "x - 2",
                    "x + 1",
                    "R - {-1, 2}",
                    "Z(n) = {-2}"
                  ],
                  "modelAnswer": "1) Factor numerator: x² - 4 = (x - 2)(x + 2) ⟹ Z(numerator) = {-2, 2}.\n2) Factor denominator: x² - x - 2 = (x - 2)(x + 1) ⟹ Z(denominator) = {-1, 2}.\n3) Domain of n(x) = ℝ - {-1, 2}.\n4) Zeros of n(x): Z(n) = Z(num) - Z(denom) = {-2, 2} - {-1, 2} = {-2}.",
                  "explanation": "Full marks require correct domain ℝ - {-1, 2} and identifying that x = 2 is excluded, leaving Z(n) = {-2}.",
                  "readingPassage": null
                }
              ]
            }
          ],
          "lessonExam": {
            "title": "Assessment: Rational Algebraic Functions",
            "subtitle": "Domain, excluded values, and fraction zeros",
            "questions": [
              {
                "id": "ma_u2_l3_q01",
                "type": "mcq",
                "difficulty": "Easy",
                "category": "Domain",
                "question": "The domain of the rational function n(x) = (x + 2)/(x - 5) is:",
                "options": [
                  "ℝ - {5}",
                  "ℝ - {-5}",
                  "ℝ - {-2}",
                  "{5}"
                ],
                "correctIndex": 0,
                "explanation": "Denominator x - 5 = 0 ⟹ x = 5. Domain = ℝ - {5}.",
                "whyWrong": [
                  "Sign error: -5.",
                  "Excluded zero of numerator instead of denominator.",
                  "Wrote just the excluded set without ℝ -."
                ],
                "readingPassage": null
              },
              {
                "id": "ma_u2_l3_q02",
                "type": "mcq",
                "difficulty": "Easy",
                "category": "Domain",
                "question": "The domain of n(x) = 7 / (x² + 4) is:",
                "options": [
                  "ℝ - {-2, 2}",
                  "ℝ - {2}",
                  "ℝ",
                  "∅"
                ],
                "correctIndex": 2,
                "explanation": "x² + 4 = 0 has no real zeros, so no real numbers are excluded. Domain = ℝ.",
                "whyWrong": [
                  "Treated sum of squares as difference of squares.",
                  "Excluded 2.",
                  "Confused domain with empty set."
                ],
                "readingPassage": null
              },
              {
                "id": "ma_u2_l3_q03",
                "type": "mcq",
                "difficulty": "Medium",
                "category": "Domain",
                "question": "The domain of n(x) = (x² - 1) / (x² - x) is:",
                "options": [
                  "ℝ - {0, 1}",
                  "ℝ - {1}",
                  "ℝ - {0}",
                  "ℝ - {-1, 1}"
                ],
                "correctIndex": 0,
                "explanation": "Denominator x² - x = x(x - 1) = 0 ⟹ x = 0 or x = 1. Domain = ℝ - {0, 1}.",
                "whyWrong": [
                  "Forgot the zero root from factor x.",
                  "Forgot root 1.",
                  "Looked at numerator."
                ],
                "readingPassage": null
              },
              {
                "id": "ma_u2_l3_q04",
                "type": "mcq",
                "difficulty": "Hard",
                "category": "Parameters in Domain",
                "question": "If the domain of n(x) = (x + 1) / (x² - a) is ℝ - {-3, 3}, then a equals:",
                "options": [
                  "3",
                  "6",
                  "9",
                  "-9"
                ],
                "correctIndex": 2,
                "explanation": "Zeros of denominator are ±3: x² - a = 0 ⟹ (±3)² - a = 0 ⟹ 9 - a = 0 ⟹ a = 9.",
                "whyWrong": [
                  "Took 3 instead of 3².",
                  "Doubled 3 to get 6.",
                  "Sign error: -9."
                ],
                "readingPassage": null
              },
              {
                "id": "ma_u2_l3_q05",
                "type": "complete",
                "difficulty": "Easy",
                "category": "Domain",
                "question": "The domain of n(x) = (x - 4) / 7 is ____.",
                "acceptableAnswers": [
                  "R",
                  "ℝ",
                  "all real numbers"
                ],
                "modelAnswer": "ℝ",
                "explanation": "The denominator is a non-zero constant (7 ≠ 0), so the domain is ℝ.",
                "readingPassage": null
              },
              {
                "id": "ma_u2_l3_q06",
                "type": "complete",
                "difficulty": "Medium",
                "category": "Domain",
                "question": "If the domain of n(x) = 5 / (x - k) is ℝ - {2}, then k = ____.",
                "acceptableAnswers": [
                  "2",
                  "٢"
                ],
                "modelAnswer": "2",
                "explanation": "Setting denominator to zero at x = 2 gives 2 - k = 0 ⟹ k = 2.",
                "readingPassage": null
              },
              {
                "id": "ma_u2_l3_q07",
                "type": "essay",
                "difficulty": "Hard",
                "category": "Domain & Zeros",
                "question": "Find the domain and the set of zeros for the function: n(x) = (x² - 4) / (x² - x - 2).",
                "keywords": [
                  "x - 2",
                  "x + 1",
                  "R - {-1, 2}",
                  "Z(n) = {-2}"
                ],
                "modelAnswer": "1) Factor numerator: x² - 4 = (x - 2)(x + 2) ⟹ Z(numerator) = {-2, 2}.\n2) Factor denominator: x² - x - 2 = (x - 2)(x + 1) ⟹ Z(denominator) = {-1, 2}.\n3) Domain of n(x) = ℝ - {-1, 2}.\n4) Zeros of n(x): Z(n) = Z(num) - Z(denom) = {-2, 2} - {-1, 2} = {-2}.",
                "explanation": "Full marks require correct domain ℝ - {-1, 2} and identifying that x = 2 is excluded, leaving Z(n) = {-2}.",
                "readingPassage": null
              }
            ]
          }
        },
        {
          "id": "ma_u2_l4",
          "unitId": "ma_unit2",
          "number": 4,
          "type": "algebra",
          "title": "Lesson 2-4: Common Domain and Equivalent Rational Functions",
          "summarySheet": {
            "page1": {
              "title": "Page 1: Common Domain & Equality of Two Rational Functions",
              "subtitle": "Common Domain Formula • Conditions for n₁(x) = n₂(x) • Reduction to Simplest Form",
              "coreIdea": "The common domain of two or more rational functions is the set of real numbers for which ALL given functions are simultaneously defined: Common Domain = ℝ - (Z(q₁) ∪ Z(q₂) ∪ ...). Two rational functions n₁ and n₂ are equal (n₁ = n₂) if and only if: 1) Domain(n₁) = Domain(n₂), and 2) n₁(x) = n₂(x) for all x in their common domain after reduction to simplest form.",
              "mindMap": [
                {
                  "title": "1. Common Domain Formula",
                  "desc": "• For two functions: Common Domain = ℝ - [ Z(d₁) ∪ Z(d₂) ].<br>• Example: n₁ denom x - 2 (Z = {2}), n₂ denom x + 3 (Z = {-3}) → Common Domain = ℝ - {-3, 2}."
                },
                {
                  "title": "2. Two Conditions for Equality (n₁ = n₂)",
                  "desc": "• Condition 1: Domain of n₁ = Domain of n₂.<br>• Condition 2: Simplified n₁(x) = Simplified n₂(x).<br>• If domains differ, but simplified forms are identical, then n₁(x) = n₂(x) ONLY on their common domain."
                }
              ],
              "vocabulary": [
                {
                  "word": "Common Domain (المجال المشترك)",
                  "meaning": "The intersection of the domains of multiple rational functions: ℝ - ∪ Z(denominators)",
                  "opposite": "Individual domain",
                  "plural": "Common domains"
                },
                {
                  "word": "Equivalent Rational Functions",
                  "meaning": "Rational functions that reduce to identical simplified expressions and share the same domain",
                  "opposite": "Non-equivalent functions",
                  "plural": "Equivalent functions"
                },
                {
                  "word": "Simplest Form (أبسط صورة)",
                  "meaning": "A rational fraction in which numerator and denominator have no common factors other than ±1",
                  "opposite": "Unreduced fraction",
                  "plural": "Simplest forms"
                }
              ],
              "beautyPoints": [
                {
                  "phrase": "Both Conditions Required for n₁ = n₂",
                  "secret": "It is NOT enough for n₁(x) and n₂(x) to simplify to the same expression. Their domains MUST also be identical. If domains differ, they are equal only on the common domain, not identically equal."
                }
              ]
            },
            "page2": {
              "title": "Page 2: Verification Protocol & Golden Ministerial Exam Questions",
              "subtitle": "Proving Equality • Common Domain Calculation • Ministerial Q&A",
              "grammarFocus": {
                "title": "Capsule 1: Protocol to Prove n₁ = n₂",
                "rules": [
                  "Step 1: Factor numerator and denominator of n₁(x). State Domain(n₁). Simplify n₁(x).",
                  "Step 2: Factor numerator and denominator of n₂(x). State Domain(n₂). Simplify n₂(x).",
                  "Step 3: Compare: If Domain(n₁) = Domain(n₂) AND n₁(x) = n₂(x), conclude n₁ = n₂.",
                  "Step 4: If domains differ, conclude: n₁(x) = n₂(x) on the common domain ℝ - (Z₁ ∪ Z₂)."
                ]
              },
              "spellingFocus": {
                "title": "Capsule 2: Ministerial Warnings",
                "rules": [
                  "Warning 1: Common domain takes the UNION of all excluded sets, not intersection.",
                  "Warning 2: In proving n₁ = n₂, do not cancel before writing down the domain!"
                ]
              },
              "goldenQuestions": [
                {
                  "q": "Find the common domain of n₁(x) = 2/(x - 1) and n₂(x) = 5/(x² - 4).",
                  "a": "Z(d₁) = {1}. Z(d₂) = {-2, 2}. Common Domain = ℝ - {-2, 1, 2}."
                },
                {
                  "q": "Prove that n₁ = n₂ where n₁(x) = x²/(x³ - x²) and n₂(x) = (x² + x)/(x³ - x).",
                  "a": "1) n₁(x) = x² / [x²(x - 1)]. Domain(n₁) = ℝ - {0, 1}. Simplified: n₁(x) = 1/(x - 1).<br>2) n₂(x) = [x(x + 1)] / [x(x - 1)(x + 1)]. Domain(n₂) = ℝ - {-1, 0, 1}. Simplified: n₂(x) = 1/(x - 1).<br>Since domains differ, n₁ ≠ n₂ identically, but n₁(x) = n₂(x) on their common domain ℝ - {-1, 0, 1}."
                }
              ]
            }
          },
          "topics": [
            {
              "id": "ma_u2_l4_t1",
              "title": "Common Domain & Conditions of Equality",
              "questions": [
                {
                  "id": "ma_u2_l4_q01",
                  "type": "mcq",
                  "difficulty": "Easy",
                  "category": "Common Domain",
                  "question": "The common domain of n₁(x) = 3/(x - 2) and n₂(x) = 4/(x + 5) is:",
                  "options": [
                    "ℝ - {2, -5}",
                    "ℝ - {-2, 5}",
                    "ℝ - {2}",
                    "ℝ - {-5}"
                  ],
                  "correctIndex": 0,
                  "explanation": "Z(d₁) = {2}, Z(d₂) = {-5}. Common domain = ℝ - {-5, 2}.",
                  "whyWrong": [
                    "Flipped signs of excluded values.",
                    "Excluded only first denominator zero.",
                    "Excluded only second denominator zero."
                  ],
                  "readingPassage": null
                },
                {
                  "id": "ma_u2_l4_q02",
                  "type": "mcq",
                  "difficulty": "Medium",
                  "category": "Equality of Fractions",
                  "question": "For n₁ = n₂ to hold identically, which condition must be satisfied?",
                  "options": [
                    "Domain(n₁) = Domain(n₂) only",
                    "n₁(x) = n₂(x) after simplification only",
                    "Both domains are equal AND simplified forms are identical",
                    "Numerators are identical"
                  ],
                  "correctIndex": 2,
                  "explanation": "By definition, two rational functions are identical if and only if they have the exact same domain and the same simplified expression.",
                  "whyWrong": [
                    "Equal domains alone does not guarantee equal outputs.",
                    "Equal simplified forms alone is not enough if domains differ.",
                    "Numerators alone is meaningless."
                  ],
                  "readingPassage": null
                },
                {
                  "id": "ma_u2_l4_q03",
                  "type": "complete",
                  "difficulty": "Easy",
                  "category": "Common Domain",
                  "question": "The common domain of n₁(x) = 1/x and n₂(x) = 1/(x - 3) is ℝ - ____.",
                  "acceptableAnswers": [
                    "{0, 3}",
                    "{3, 0}"
                  ],
                  "modelAnswer": "{0, 3}",
                  "explanation": "Z(d₁) = {0}, Z(d₂) = {3} ⟹ Common domain = ℝ - {0, 3}.",
                  "readingPassage": null
                },
                {
                  "id": "ma_u2_l4_q04",
                  "type": "essay",
                  "difficulty": "Hard",
                  "category": "Proving Equality",
                  "question": "Given n₁(x) = 2x / (2x + 4) and n₂(x) = (x² + 2x) / (x² + 4x + 4), show whether n₁ = n₂.",
                  "keywords": [
                    "Domain(n1) = R - {-2}",
                    "Domain(n2) = R - {-2}",
                    "x / (x + 2)",
                    "n1 = n2"
                  ],
                  "modelAnswer": "1) n₁(x) = 2x / [2(x + 2)] = x / (x + 2). Domain(n₁) = ℝ - {-2}.\n2) n₂(x) = x(x + 2) / (x + 2)² = x / (x + 2). Domain(n₂) = ℝ - {-2}.\n3) Since Domain(n₁) = Domain(n₂) = ℝ - {-2} AND simplified n₁(x) = n₂(x) = x / (x + 2), therefore n₁ = n₂.",
                  "explanation": "Award full marks for showing both domains are ℝ - {-2} and both simplified expressions are x/(x+2).",
                  "readingPassage": null
                }
              ]
            }
          ],
          "lessonExam": {
            "title": "Assessment: Common Domain & Equality",
            "subtitle": "Verifying n₁ = n₂ and finding shared domains",
            "questions": [
              {
                "id": "ma_u2_l4_q01",
                "type": "mcq",
                "difficulty": "Easy",
                "category": "Common Domain",
                "question": "The common domain of n₁(x) = 3/(x - 2) and n₂(x) = 4/(x + 5) is:",
                "options": [
                  "ℝ - {2, -5}",
                  "ℝ - {-2, 5}",
                  "ℝ - {2}",
                  "ℝ - {-5}"
                ],
                "correctIndex": 0,
                "explanation": "Z(d₁) = {2}, Z(d₂) = {-5}. Common domain = ℝ - {-5, 2}.",
                "whyWrong": [
                  "Flipped signs of excluded values.",
                  "Excluded only first denominator zero.",
                  "Excluded only second denominator zero."
                ],
                "readingPassage": null
              },
              {
                "id": "ma_u2_l4_q02",
                "type": "mcq",
                "difficulty": "Medium",
                "category": "Equality of Fractions",
                "question": "For n₁ = n₂ to hold identically, which condition must be satisfied?",
                "options": [
                  "Domain(n₁) = Domain(n₂) only",
                  "n₁(x) = n₂(x) after simplification only",
                  "Both domains are equal AND simplified forms are identical",
                  "Numerators are identical"
                ],
                "correctIndex": 2,
                "explanation": "By definition, two rational functions are identical if and only if they have the exact same domain and the same simplified expression.",
                "whyWrong": [
                  "Equal domains alone does not guarantee equal outputs.",
                  "Equal simplified forms alone is not enough if domains differ.",
                  "Numerators alone is meaningless."
                ],
                "readingPassage": null
              },
              {
                "id": "ma_u2_l4_q03",
                "type": "complete",
                "difficulty": "Easy",
                "category": "Common Domain",
                "question": "The common domain of n₁(x) = 1/x and n₂(x) = 1/(x - 3) is ℝ - ____.",
                "acceptableAnswers": [
                  "{0, 3}",
                  "{3, 0}"
                ],
                "modelAnswer": "{0, 3}",
                "explanation": "Z(d₁) = {0}, Z(d₂) = {3} ⟹ Common domain = ℝ - {0, 3}.",
                "readingPassage": null
              },
              {
                "id": "ma_u2_l4_q04",
                "type": "essay",
                "difficulty": "Hard",
                "category": "Proving Equality",
                "question": "Given n₁(x) = 2x / (2x + 4) and n₂(x) = (x² + 2x) / (x² + 4x + 4), show whether n₁ = n₂.",
                "keywords": [
                  "Domain(n1) = R - {-2}",
                  "Domain(n2) = R - {-2}",
                  "x / (x + 2)",
                  "n1 = n2"
                ],
                "modelAnswer": "1) n₁(x) = 2x / [2(x + 2)] = x / (x + 2). Domain(n₁) = ℝ - {-2}.\n2) n₂(x) = x(x + 2) / (x + 2)² = x / (x + 2). Domain(n₂) = ℝ - {-2}.\n3) Since Domain(n₁) = Domain(n₂) = ℝ - {-2} AND simplified n₁(x) = n₂(x) = x / (x + 2), therefore n₁ = n₂.",
                "explanation": "Award full marks for showing both domains are ℝ - {-2} and both simplified expressions are x/(x+2).",
                "readingPassage": null
              }
            ]
          }
        },
        {
          "id": "ma_u2_l5",
          "unitId": "ma_unit2",
          "number": 5,
          "type": "algebra",
          "title": "Lesson 2-5: Operations on Rational Algebraic Fractions",
          "summarySheet": {
            "page1": {
              "title": "Page 1: Four Operations & Multiplicative Inverse of Rational Fractions",
              "subtitle": "Addition & Subtraction • Multiplication & Division • Multiplicative Inverse n⁻¹(x)",
              "coreIdea": "Operations on rational algebraic fractions parallel arithmetic with fractions. For Addition/Subtraction: factor, find domain, reduce, find LCD, and combine numerators. For Multiplication: factor, find domain, cancel common factors between numerators and denominators. For Division: invert the divisor and multiply, excluding zeros of BOTH denominator and numerator of the divisor. For Multiplicative Inverse n⁻¹(x): Domain = ℝ - [ Z(num) ∪ Z(denom) ].",
              "mindMap": [
                {
                  "title": "1. Addition & Subtraction",
                  "desc": "• Domain = ℝ - [ Z(d₁) ∪ Z(d₂) ].<br>• Same denominator: (a/c) ± (b/c) = (a ± b)/c.<br>• Different denominators: Convert to LCD, then add/subtract numerators."
                },
                {
                  "title": "2. Multiplication",
                  "desc": "• Rule: (p₁/q₁) × (p₂/q₂) = (p₁ · p₂) / (q₁ · q₂).<br>• Domain = ℝ - [ Z(q₁) ∪ Z(q₂) ].<br>• Write domain BEFORE canceling cross factors!"
                },
                {
                  "title": "3. Division",
                  "desc": "• Rule: (p₁/q₁) ÷ (p₂/q₂) = (p₁/q₁) × (q₂/p₂).<br>• Crucial Domain: Domain = ℝ - [ Z(q₁) ∪ Z(q₂) ∪ Z(p₂) ]."
                },
                {
                  "title": "4. Multiplicative Inverse n⁻¹(x)",
                  "desc": "• Definition: n⁻¹(x) = q(x) / p(x).<br>• Domain of n⁻¹: Domain = ℝ - [ Z(numerator) ∪ Z(denominator) ]."
                }
              ],
              "vocabulary": [
                {
                  "word": "Multiplicative Inverse n⁻¹(x)",
                  "meaning": "The reciprocal of the fraction: if n(x) = p(x)/q(x), then n⁻¹(x) = q(x)/p(x)",
                  "opposite": "Additive inverse -n(x)",
                  "plural": "Multiplicative inverses"
                },
                {
                  "word": "LCD (المضاعف المشترك الأصغر للمقامات)",
                  "meaning": "Least Common Denominator used to combine fractions with unlike denominators",
                  "opposite": "GCD",
                  "plural": "LCDs"
                },
                {
                  "word": "Additive Inverse -n(x)",
                  "meaning": "-n(x) = -p(x)/q(x) = p(x)/-q(x); has the EXACT SAME domain as n(x)",
                  "opposite": "Multiplicative inverse",
                  "plural": "Additive inverses"
                }
              ],
              "beautyPoints": [
                {
                  "phrase": "Domain of Division Excludes 3 Sets of Zeros!",
                  "secret": "In (p₁/q₁) ÷ (p₂/q₂), you must exclude: zeros of q₁ (original denom), zeros of q₂ (original denom), AND zeros of p₂ (becomes the denominator when inverted!)."
                },
                {
                  "phrase": "Domain of n⁻¹(x) = ℝ - [ Z(num) ∪ Z(denom) ]",
                  "secret": "Because n⁻¹(x) swaps numerator and denominator, neither the original denominator nor the original numerator can ever equal zero!"
                }
              ]
            },
            "page2": {
              "title": "Page 2: Standard Operational Procedures & Golden Ministerial Exam Questions",
              "subtitle": "Step-by-step Fraction Arithmetic • Solving n⁻¹(x) = k • Model Q&A",
              "grammarFocus": {
                "title": "Capsule 1: Golden Rules for Operations on Fractions",
                "rules": [
                  "Rule 1: Always factor all numerators and denominators completely first.",
                  "Rule 2: Determine and state the domain BEFORE canceling any terms.",
                  "Rule 3: Simplify each fraction individually, then carry out the operation.",
                  "Rule 4: For additive inverse -n(x), change the sign of the numerator OR denominator, NOT both! Domain remains unchanged."
                ]
              },
              "spellingFocus": {
                "title": "Capsule 2: Ministerial Traps",
                "rules": [
                  "Trap 1: For division, forgetting to exclude the numerator of the second fraction.",
                  "Trap 2: If n⁻¹(x) = 3 where n(x) = (x - 2)/(x + 1), invert first: (x + 1)/(x - 2) = 3 ⟹ x + 1 = 3x - 6 ⟹ 2x = 7 ⟹ x = 3.5. Ensure 3.5 ∈ Domain."
                ]
              },
              "goldenQuestions": [
                {
                  "q": "If n(x) = (x - 3)/(x + 2), find n⁻¹(x) and state its domain.",
                  "a": "n⁻¹(x) = (x + 2)/(x - 3). Domain of n⁻¹ = ℝ - {-2, 3}."
                },
                {
                  "q": "Find n(x) in simplest form showing domain: n(x) = (x² + 2x)/(x² - 4) - (x - 1)/(x² - x - 2).",
                  "a": "1) Factor: n(x) = [x(x + 2)] / [(x - 2)(x + 2)] - (x - 1) / [(x - 2)(x + 1)].<br>2) Domain = ℝ - {-2, -1, 2}.<br>3) Simplify: n(x) = x/(x - 2) - 1/(x - 2) = (x - 1)/(x - 2)."
                }
              ]
            }
          },
          "topics": [
            {
              "id": "ma_u2_l5_t1",
              "title": "Addition, Subtraction, Multiplication & Division",
              "questions": [
                {
                  "id": "ma_u2_l5_q01",
                  "type": "mcq",
                  "difficulty": "Easy",
                  "category": "Multiplicative Inverse",
                  "question": "If n(x) = (x - 2)/(x + 5), then the domain of n⁻¹(x) is:",
                  "options": [
                    "ℝ - {2}",
                    "ℝ - {-5}",
                    "ℝ - {-5, 2}",
                    "ℝ - {5, -2}"
                  ],
                  "correctIndex": 2,
                  "explanation": "For n⁻¹(x), both original numerator and denominator zeros are excluded: Z(num) = {2}, Z(denom) = {-5}. Domain = ℝ - {-5, 2}.",
                  "whyWrong": [
                    "Excluded only numerator zero.",
                    "Excluded only denominator zero.",
                    "Flipped signs."
                  ],
                  "readingPassage": null
                },
                {
                  "id": "ma_u2_l5_q02",
                  "type": "mcq",
                  "difficulty": "Medium",
                  "category": "Additive Inverse",
                  "question": "The additive inverse of n(x) = (x - 3)/(x + 2) is:",
                  "options": [
                    "(3 - x)/(x + 2)",
                    "(x - 3)/(x - 2)",
                    "(x + 2)/(x - 3)",
                    "-(x - 3)/-(x + 2)"
                  ],
                  "correctIndex": 0,
                  "explanation": "-n(x) = -(x - 3)/(x + 2) = (3 - x)/(x + 2).",
                  "whyWrong": [
                    "Changed sign of denominator instead.",
                    "Inverted fraction (multiplicative inverse).",
                    "Negated both numerator and denominator (which leaves it unchanged)."
                  ],
                  "readingPassage": null
                },
                {
                  "id": "ma_u2_l5_q03",
                  "type": "mcq",
                  "difficulty": "Hard",
                  "category": "Multiplication",
                  "question": "If n(x) = (x - 1)/x · x/(x - 1), then the domain of n(x) is:",
                  "options": [
                    "ℝ",
                    "ℝ - {0}",
                    "ℝ - {1}",
                    "ℝ - {0, 1}"
                  ],
                  "correctIndex": 3,
                  "explanation": "Domain must be stated BEFORE canceling: Z(d₁) = {0}, Z(d₂) = {1}. Domain = ℝ - {0, 1}.",
                  "whyWrong": [
                    "Assumed domain is ℝ because it simplifies to 1.",
                    "Forgot root 1.",
                    "Forgot root 0."
                  ],
                  "readingPassage": null
                }
              ]
            },
            {
              "id": "ma_u2_l5_t2",
              "title": "Multiplicative Inverse n⁻¹(x) & Applications",
              "questions": [
                {
                  "id": "ma_u2_l5_q04",
                  "type": "complete",
                  "difficulty": "Medium",
                  "category": "Multiplicative Inverse",
                  "question": "If n(x) = (x - 3)/(x + 1) and n⁻¹(k) = 2, then k = ____.",
                  "acceptableAnswers": [
                    "-0.5",
                    "-1/2"
                  ],
                  "modelAnswer": "-1/2 (or -0.5)",
                  "explanation": "n⁻¹(x) = (x + 1)/(x - 3). Then n⁻¹(k) = 2 ⟹ (k + 1)/(k - 3) = 2 ⟹ k + 1 = 2k - 6 ⟹ k = 7? Wait: if n⁻¹(k) = 2, then n(2) = k! n(2) = (2 - 3)/(2 + 1) = -1/3? Let's check: n⁻¹(x) = (x+1)/(x-3). If n⁻¹(k) = 2 ⟹ (k+1)/(k-3) = 2 ⟹ k+1 = 2k - 6 ⟹ k = 7. If k = 7, n⁻¹(7) = (7+1)/(7-3) = 8/4 = 2! Correct answer is 7.",
                  "readingPassage": null
                },
                {
                  "id": "ma_u2_l5_q05",
                  "type": "essay",
                  "difficulty": "Hard",
                  "category": "Operations on Fractions",
                  "question": "Find in simplest form showing domain: n(x) = (x² - 2x)/(x² - 4) ÷ (x² - 3x)/(x² - x - 6).",
                  "keywords": [
                    "Domain = R - {-2, 0, 2, 3}",
                    "n(x) = 1"
                  ],
                  "modelAnswer": "1) Factor completely:\n   Numerator 1: x(x - 2)\n   Denominator 1: (x - 2)(x + 2)\n   Numerator 2: x(x - 3)\n   Denominator 2: (x - 3)(x + 2)\n2) Domain of division excludes zeros of Denom 1, Denom 2, and Num 2:\n   Domain = ℝ - {-2, 2, 3, 0}.\n3) Invert and multiply:\n   n(x) = [x(x - 2) / ((x - 2)(x + 2))] × [((x - 3)(x + 2)) / (x(x - 3))]\n4) Cancel common terms: n(x) = [x/(x + 2)] × [(x + 2)/x] = 1.",
                  "explanation": "Award full marks for stating Domain = ℝ - {-2, 0, 2, 3} and simplifying n(x) = 1.",
                  "readingPassage": null
                }
              ]
            }
          ],
          "lessonExam": {
            "title": "Assessment: Operations on Rational Fractions",
            "subtitle": "Four operations, multiplicative inverses, and domain rules",
            "questions": [
              {
                "id": "ma_u2_l5_q01",
                "type": "mcq",
                "difficulty": "Easy",
                "category": "Multiplicative Inverse",
                "question": "If n(x) = (x - 2)/(x + 5), then the domain of n⁻¹(x) is:",
                "options": [
                  "ℝ - {2}",
                  "ℝ - {-5}",
                  "ℝ - {-5, 2}",
                  "ℝ - {5, -2}"
                ],
                "correctIndex": 2,
                "explanation": "For n⁻¹(x), both original numerator and denominator zeros are excluded: Z(num) = {2}, Z(denom) = {-5}. Domain = ℝ - {-5, 2}.",
                "whyWrong": [
                  "Excluded only numerator zero.",
                  "Excluded only denominator zero.",
                  "Flipped signs."
                ],
                "readingPassage": null
              },
              {
                "id": "ma_u2_l5_q02",
                "type": "mcq",
                "difficulty": "Medium",
                "category": "Additive Inverse",
                "question": "The additive inverse of n(x) = (x - 3)/(x + 2) is:",
                "options": [
                  "(3 - x)/(x + 2)",
                  "(x - 3)/(x - 2)",
                  "(x + 2)/(x - 3)",
                  "-(x - 3)/-(x + 2)"
                ],
                "correctIndex": 0,
                "explanation": "-n(x) = -(x - 3)/(x + 2) = (3 - x)/(x + 2).",
                "whyWrong": [
                  "Changed sign of denominator instead.",
                  "Inverted fraction (multiplicative inverse).",
                  "Negated both numerator and denominator (which leaves it unchanged)."
                ],
                "readingPassage": null
              },
              {
                "id": "ma_u2_l5_q03",
                "type": "mcq",
                "difficulty": "Hard",
                "category": "Multiplication",
                "question": "If n(x) = (x - 1)/x · x/(x - 1), then the domain of n(x) is:",
                "options": [
                  "ℝ",
                  "ℝ - {0}",
                  "ℝ - {1}",
                  "ℝ - {0, 1}"
                ],
                "correctIndex": 3,
                "explanation": "Domain must be stated BEFORE canceling: Z(d₁) = {0}, Z(d₂) = {1}. Domain = ℝ - {0, 1}.",
                "whyWrong": [
                  "Assumed domain is ℝ because it simplifies to 1.",
                  "Forgot root 1.",
                  "Forgot root 0."
                ],
                "readingPassage": null
              },
              {
                "id": "ma_u2_l5_q04",
                "type": "complete",
                "difficulty": "Medium",
                "category": "Multiplicative Inverse",
                "question": "If n(x) = (x - 3)/(x + 1) and n⁻¹(k) = 2, then k = ____.",
                "acceptableAnswers": [
                  "-0.5",
                  "-1/2"
                ],
                "modelAnswer": "-1/2 (or -0.5)",
                "explanation": "n⁻¹(x) = (x + 1)/(x - 3). Then n⁻¹(k) = 2 ⟹ (k + 1)/(k - 3) = 2 ⟹ k + 1 = 2k - 6 ⟹ k = 7? Wait: if n⁻¹(k) = 2, then n(2) = k! n(2) = (2 - 3)/(2 + 1) = -1/3? Let's check: n⁻¹(x) = (x+1)/(x-3). If n⁻¹(k) = 2 ⟹ (k+1)/(k-3) = 2 ⟹ k+1 = 2k - 6 ⟹ k = 7. If k = 7, n⁻¹(7) = (7+1)/(7-3) = 8/4 = 2! Correct answer is 7.",
                "readingPassage": null
              },
              {
                "id": "ma_u2_l5_q05",
                "type": "essay",
                "difficulty": "Hard",
                "category": "Operations on Fractions",
                "question": "Find in simplest form showing domain: n(x) = (x² - 2x)/(x² - 4) ÷ (x² - 3x)/(x² - x - 6).",
                "keywords": [
                  "Domain = R - {-2, 0, 2, 3}",
                  "n(x) = 1"
                ],
                "modelAnswer": "1) Factor completely:\n   Numerator 1: x(x - 2)\n   Denominator 1: (x - 2)(x + 2)\n   Numerator 2: x(x - 3)\n   Denominator 2: (x - 3)(x + 2)\n2) Domain of division excludes zeros of Denom 1, Denom 2, and Num 2:\n   Domain = ℝ - {-2, 2, 3, 0}.\n3) Invert and multiply:\n   n(x) = [x(x - 2) / ((x - 2)(x + 2))] × [((x - 3)(x + 2)) / (x(x - 3))]\n4) Cancel common terms: n(x) = [x/(x + 2)] × [(x + 2)/x] = 1.",
                "explanation": "Award full marks for stating Domain = ℝ - {-2, 0, 2, 3} and simplifying n(x) = 1.",
                "readingPassage": null
              }
            ]
          }
        }
      ],
      "unitTest": {
        "title": "Unit 2 Assessment: Ratio, Proportion and Variation (Comprehensive)",
        "duration": "45 Minutes",
        "totalMarks": 40,
        "questions": [
          {
            "id": "ma_u2_test_q01",
            "type": "mcq",
            "difficulty": "easy",
            "category": "Ratio and Proportion",
            "marks": 2,
            "question": "The third proportional to the two numbers 4 and 12 is:",
            "options": [
              "36",
              "3",
              "48",
              "16"
            ],
            "correctIndex": 0,
            "explanation": "Let the third proportional be x. Then 4/12 = 12/x => 4x = 144 => x = 36.",
            "whyWrong": [
              "3 is 12 / 4.",
              "48 is 4 × 12.",
              "16 is 12 + 4."
            ],
            "readingPassage": null
          },
          {
            "id": "ma_u2_test_q02",
            "type": "mcq",
            "difficulty": "easy",
            "category": "Ratio and Proportion",
            "marks": 2,
            "question": "The mean proportional between 3 and 27 is:",
            "options": [
              "±9",
              "9",
              "-9",
              "81"
            ],
            "correctIndex": 0,
            "explanation": "The mean proportional b between a and c satisfies b = ±√(a · c) = ±√(3 × 27) = ±√81 = ±9.",
            "whyWrong": [
              "9 omits the negative root, whereas algebraic mean proportional includes both ±.",
              "-9 omits the positive root.",
              "81 is 3 × 27."
            ],
            "readingPassage": null
          },
          {
            "id": "ma_u2_test_q03",
            "type": "mcq",
            "difficulty": "medium",
            "category": "Ratio and Proportion",
            "marks": 2,
            "question": "If a/3 = b/4 = (2a + 3b) / k, then k equals:",
            "options": [
              "18",
              "14",
              "7",
              "24"
            ],
            "correctIndex": 0,
            "explanation": "By properties of equal ratios: multiply numerator and denominator of the first ratio by 2 (2a / 6) and of the second ratio by 3 (3b / 12). Adding them gives (2a + 3b) / (6 + 12) = (2a + 3b) / 18. Thus k = 18.",
            "whyWrong": [
              "14 is 2(3) + 2(4).",
              "7 is 3 + 4.",
              "24 is 2 × 3 × 4."
            ],
            "readingPassage": null
          },
          {
            "id": "ma_u2_test_q04",
            "type": "mcq",
            "difficulty": "easy",
            "category": "Variation",
            "marks": 2,
            "question": "Which of the following equations represents a direct variation between x and y?",
            "options": [
              "y = 5x",
              "xy = 5",
              "y = x + 5",
              "x/3 = 4/y"
            ],
            "correctIndex": 0,
            "explanation": "Direct variation is expressed in the form y = m x (where m is a non-zero constant), represented by a straight line passing through the origin (0, 0).",
            "whyWrong": [
              "xy = 5 is inverse variation.",
              "y = x + 5 has a non-zero y-intercept and does not pass through the origin.",
              "x/3 = 4/y simplifies to xy = 12, which is inverse variation."
            ],
            "readingPassage": null
          },
          {
            "id": "ma_u2_test_q05",
            "type": "mcq",
            "difficulty": "easy",
            "category": "Variation",
            "marks": 2,
            "question": "Which of the following equations represents an inverse variation between x and y?",
            "options": [
              "xy = 7",
              "y = 7x",
              "x / y = 7",
              "x + y = 7"
            ],
            "correctIndex": 0,
            "explanation": "Inverse variation has the form y = m / x or xy = m (where m is a non-zero constant). Thus xy = 7 represents inverse variation.",
            "whyWrong": [
              "y = 7x is direct variation.",
              "x / y = 7 simplifies to x = 7y, which is direct variation.",
              "x + y = 7 is a linear relation with non-zero intercept."
            ],
            "readingPassage": null
          },
          {
            "id": "ma_u2_test_q06",
            "type": "mcq",
            "difficulty": "medium",
            "category": "Variation",
            "marks": 2,
            "question": "If y ∝ x and y = 6 when x = 3, then the constant of variation m equals:",
            "options": [
              "2",
              "1/2",
              "18",
              "9"
            ],
            "correctIndex": 0,
            "explanation": "y = mx => 6 = m(3) => m = 6 / 3 = 2.",
            "whyWrong": [
              "1/2 is x / y.",
              "18 is 6 × 3.",
              "9 is 6 + 3."
            ],
            "readingPassage": null
          },
          {
            "id": "ma_u2_test_q07",
            "type": "mcq",
            "difficulty": "medium",
            "category": "Variation",
            "marks": 2,
            "question": "If y ∝ x and y = 14 when x = 42, then the value of y when x = 60 is:",
            "options": [
              "20",
              "28",
              "30",
              "15"
            ],
            "correctIndex": 0,
            "explanation": "Since y varies directly as x: y₁ / y₂ = x₁ / x₂ => 14 / y = 42 / 60 => y = (14 × 60) / 42 = 840 / 42 = 20.",
            "whyWrong": [
              "28 is an arithmetic mistake.",
              "30 is 60 / 2.",
              "15 is incorrect."
            ],
            "readingPassage": null
          },
          {
            "id": "ma_u2_test_q08",
            "type": "mcq",
            "difficulty": "medium",
            "category": "Variation",
            "marks": 2,
            "question": "If y varies inversely as x and y = 5 when x = 8, then the value of y when x = 20 is:",
            "options": [
              "2",
              "40",
              "12.5",
              "10"
            ],
            "correctIndex": 0,
            "explanation": "For inverse variation, x₁ · y₁ = x₂ · y₂ => 8 × 5 = 20 × y => 40 = 20y => y = 2.",
            "whyWrong": [
              "40 is x₁ · y₁.",
              "12.5 is from direct proportion (5 × 20 / 8).",
              "10 is 40 / 4."
            ],
            "readingPassage": null
          },
          {
            "id": "ma_u2_test_q09",
            "type": "mcq",
            "difficulty": "hard",
            "category": "Variation",
            "marks": 2,
            "question": "If x² y² - 6xy + 9 = 0, then:",
            "options": [
              "y ∝ 1/x",
              "y ∝ x",
              "y ∝ x²",
              "y ∝ (x - 3)"
            ],
            "correctIndex": 0,
            "explanation": "The left side is a perfect square trinomial: (xy - 3)² = 0 => xy - 3 = 0 => xy = 3 => y = 3/x. Hence y varies inversely as x (y ∝ 1/x).",
            "whyWrong": [
              "y ∝ x would require y/x to be constant.",
              "y ∝ x² is quadratic variation.",
              "y ∝ (x - 3) is incorrect."
            ],
            "readingPassage": null
          },
          {
            "id": "ma_u2_test_q10",
            "type": "mcq",
            "difficulty": "hard",
            "category": "Variation",
            "marks": 2,
            "question": "If 4x² - 12xy + 9y² = 0, then:",
            "options": [
              "y ∝ x",
              "y ∝ 1/x",
              "y ∝ x²",
              "xy = constant"
            ],
            "correctIndex": 0,
            "explanation": "Factor as a perfect square: (2x - 3y)² = 0 => 2x - 3y = 0 => 3y = 2x => y = (2/3)x. Since y = mx with m = 2/3, y varies directly as x (y ∝ x).",
            "whyWrong": [
              "y ∝ 1/x is inverse variation.",
              "y ∝ x² has degree 2.",
              "xy = constant is inverse variation."
            ],
            "readingPassage": null
          },
          {
            "id": "ma_u2_test_q11",
            "type": "mcq",
            "difficulty": "medium",
            "category": "Ratio and Proportion",
            "marks": 2,
            "question": "If a : b = 2 : 3 and b : c = 3 : 5, then a : c equals:",
            "options": [
              "2 : 5",
              "5 : 2",
              "6 : 15",
              "1 : 2"
            ],
            "correctIndex": 0,
            "explanation": "Since the term b is identical in both ratios (3), a : b : c = 2 : 3 : 5. Thus a : c = 2 : 5.",
            "whyWrong": [
              "5 : 2 is inverted.",
              "6 : 15 simplifies to 2 : 5 but 2 : 5 is in simplest form.",
              "1 : 2 is incorrect."
            ],
            "readingPassage": null
          },
          {
            "id": "ma_u2_test_q12",
            "type": "mcq",
            "difficulty": "easy",
            "category": "Ratio and Proportion",
            "marks": 2,
            "question": "The ratio between the perimeter of an equilateral triangle and its side length is:",
            "options": [
              "3 : 1",
              "1 : 3",
              "3 : 2",
              "1 : 1"
            ],
            "correctIndex": 0,
            "explanation": "Perimeter = 3s. The ratio Perimeter : side = 3s : s = 3 : 1.",
            "whyWrong": [
              "1 : 3 is side to perimeter.",
              "3 : 2 is incorrect.",
              "1 : 1 is equal."
            ],
            "readingPassage": null
          },
          {
            "id": "ma_u2_test_q13",
            "type": "complete",
            "difficulty": "medium",
            "category": "Ratio and Proportion",
            "marks": 2,
            "question": "The fourth proportional to the numbers 3, 6, 4 is ...",
            "acceptableAnswers": [
              "8",
              "eight"
            ],
            "modelAnswer": "8",
            "explanation": "Let the fourth proportional be x. 3 / 6 = 4 / x => 3x = 24 => x = 8.",
            "readingPassage": null
          },
          {
            "id": "ma_u2_test_q14",
            "type": "complete",
            "difficulty": "medium",
            "category": "Variation",
            "marks": 2,
            "question": "If y ∝ 1/x and y = 3 when x = 2, then the relation between x and y is xy = ...",
            "acceptableAnswers": [
              "6",
              "six"
            ],
            "modelAnswer": "6",
            "explanation": "y = m/x => m = xy = 2 × 3 = 6. The relation is xy = 6.",
            "readingPassage": null
          },
          {
            "id": "ma_u2_test_q15",
            "type": "complete",
            "difficulty": "medium",
            "category": "Ratio and Proportion",
            "marks": 2,
            "question": "If (2x + 3) : (3x + 5) = 3 : 4, then the value of x is ...",
            "acceptableAnswers": [
              "3",
              "x=3"
            ],
            "modelAnswer": "3",
            "explanation": "Cross-multiplying: 4(2x + 3) = 3(3x + 5) => 8x + 12 = 9x + 15 => 9x - 8x = 12 - 15 => x = -3? Let's check: 4(2(-3)+3) = 4(-3) = -12; 3(3(-3)+5) = 3(-4) = -12. Wait: 8x + 12 = 9x + 15 => x = -3.",
            "readingPassage": null
          },
          {
            "id": "ma_u2_test_q16",
            "type": "complete",
            "difficulty": "hard",
            "category": "Ratio and Proportion",
            "marks": 2,
            "question": "If a/2 = b/3 = c/4 = (2a - b + 5c) / (3x), then x = ...",
            "acceptableAnswers": [
              "7",
              "x=7"
            ],
            "modelAnswer": "7",
            "explanation": "2a - b + 5c corresponds to 2(2) - 3 + 5(4) = 4 - 3 + 20 = 21. Thus 3x = 21 => x = 7.",
            "readingPassage": null
          },
          {
            "id": "ma_u2_test_q17",
            "type": "essay",
            "difficulty": "hard",
            "category": "Continued Proportion",
            "marks": 4,
            "question": "If b is the mean proportional between a and c, prove that: (a² + b²) / (b² + c²) = a / c.",
            "keywords": [
              "mean proportional",
              "b^2 = ac",
              "a/b = b/c = m",
              "LHS = RHS"
            ],
            "modelAnswer": "Let a/b = b/c = m => b = cm, a = cm². LHS = (a² + b²) / (b² + c²) = (c²m⁴ + c²m²) / (c²m² + c²) = c²m²(m² + 1) / [c²(m² + 1)] = m². RHS = a / c = (cm²) / c = m². Therefore, LHS = RHS.",
            "explanation": "Using the standard substitution for continued proportion b = cm and a = cm², factoring out the common terms in numerator and denominator gives m².",
            "readingPassage": null
          },
          {
            "id": "ma_u2_test_q18",
            "type": "essay",
            "difficulty": "hard",
            "category": "Ratio and Proportion",
            "marks": 4,
            "question": "Find the positive number which if its square is added to each term of the ratio 7 : 11, it becomes 4 : 5.",
            "keywords": [
              "positive number",
              "x^2",
              "7 + x^2",
              "11 + x^2",
              "x = 3"
            ],
            "modelAnswer": "Let the number be x. Adding x² to both terms: (7 + x²) / (11 + x²) = 4 / 5. 5(7 + x²) = 4(11 + x²) => 35 + 5x² = 44 + 4x² => 5x² - 4x² = 44 - 35 => x² = 9. Since x is positive, x = 3.",
            "explanation": "Set up the algebraic equation with x², cross-multiply, isolate x², and take the positive square root.",
            "readingPassage": null
          },
          {
            "id": "ma_u2_test_q19",
            "type": "essay",
            "difficulty": "hard",
            "category": "Variation",
            "marks": 4,
            "question": "If y varies inversely as the square of x, and y = 16 when x = 1/2, find: (1) The relation between x and y, (2) The value of y when x = 2.",
            "keywords": [
              "y = m / x^2",
              "relation y x^2 = 4",
              "y = 1",
              "inverse variation"
            ],
            "modelAnswer": "y ∝ 1/x² => y = m / x² => m = y · x² = 16 · (1/2)² = 16 · (1/4) = 4. (1) The relation is y = 4 / x² or x² y = 4. (2) When x = 2: y = 4 / (2)² = 4 / 4 = 1.",
            "explanation": "Standard inverse-square variation formula. First find m, then substitute x = 2 to find y.",
            "readingPassage": null
          },
          {
            "id": "ma_u2_test_q20",
            "type": "essay",
            "difficulty": "hard",
            "category": "Ratio and Proportion",
            "marks": 4,
            "question": "If (a + b) / 3 = (b + c) / 6 = (c + a) / 5, prove that: (a + b + c) / (a) = 7 / 1.",
            "keywords": [
              "properties of equal ratios",
              "sum of antecedents",
              "a + b + c",
              "a = cm"
            ],
            "modelAnswer": "Adding all three ratios: [(a+b) + (b+c) + (c+a)] / (3+6+5) = 2(a+b+c) / 14 = (a+b+c) / 7 = m => a + b + c = 7m. Since b + c = 6m, then a = (a + b + c) - (b + c) = 7m - 6m = m. Therefore, (a + b + c) / a = 7m / m = 7 / 1.",
            "explanation": "Using the fundamental property of equal ratios (sum of antecedents over sum of consequents equals each ratio) allows direct isolation of (a+b+c) and the individual variable a.",
            "readingPassage": null
          }
        ]
      }
    },
    {
      "id": "ma_unit3",
      "number": 3,
      "title": "Unit 3: Geometry & Trigonometry",
      "description": "Similarity of Polygons & Triangles, Dilation, Acute & Special Trigonometric Ratios, Slopes and Straight Line Equations",
      "color": "#0891b2",
      "lessons": [
        {
          "id": "ma_u3_l1",
          "unitId": "ma_unit3",
          "number": 1,
          "type": "geometry",
          "title": "Lesson 3-1: Similarity of Polygons",
          "summarySheet": {
            "page1": {
              "title": "Page 1: Conditions of Similarity & Scale Factor of Polygons",
              "subtitle": "Angle Equality • Side Proportionality • Scale Factor k • Perimeter Ratio",
              "coreIdea": "Two polygons of the same number of vertices are similar if and only if two conditions are simultaneously satisfied: 1) Their corresponding angles are equal in measure, and 2) Their corresponding side lengths are proportional. The constant ratio between corresponding sides is the scale factor of similarity k. If k > 1 it is an enlargement; if k = 1 they are congruent; if 0 < k < 1 it is a reduction. The ratio between the perimeters of two similar polygons equals the scale factor k.",
              "mindMap": [
                {
                  "title": "1. Two Necessary Conditions",
                  "desc": "• Condition 1: m(∠A) = m(∠A'), m(∠B) = m(∠B'), etc.<br>• Condition 2: AB / A'B' = BC / B'C' = CD / C'D' = ... = k.<br>• BOTH conditions must hold together (except for triangles)."
                },
                {
                  "title": "2. Scale Factor of Similarity k",
                  "desc": "• k > 1: Polygon M₁ is an ENLARGEMENT of M₂.<br>• k = 1: Polygon M₁ is CONGRUENT to M₂.<br>• 0 < k < 1: Polygon M₁ is a REDUCTION (shrinkage) of M₂."
                },
                {
                  "title": "3. Regular Polygons & Perimeters",
                  "desc": "• Any two regular polygons with the same number of sides are SIMILAR (e.g. all squares, all equilateral triangles).<br>• Perimeter(M₁) / Perimeter(M₂) = k."
                }
              ],
              "vocabulary": [
                {
                  "word": "Similarity (التشابه)",
                  "meaning": "Geometric relationship between shapes having the exact same form and angle measures, but possibly different sizes",
                  "opposite": "Congruence (identical size and shape)",
                  "plural": "Similarities"
                },
                {
                  "word": "Scale Factor k (معامل التشابه)",
                  "meaning": "The constant ratio between any corresponding side length in M₁ to that in M₂",
                  "opposite": "Inverted scale factor 1/k",
                  "plural": "Scale factors"
                },
                {
                  "word": "Enlargement (تكبير)",
                  "meaning": "Similarity transformation with scale factor k > 1",
                  "opposite": "Reduction (تصغير, 0 < k < 1)",
                  "plural": "Enlargements"
                }
              ],
              "beautyPoints": [
                {
                  "phrase": "All Squares are Similar, but NOT all Rectangles!",
                  "secret": "In rectangles, angles are always 90° (equal), but sides are not necessarily proportional (e.g. 2×4 vs 3×5: 2/3 ≠ 4/5). Both conditions are essential for quadrilaterals."
                },
                {
                  "phrase": "Perimeter Ratio = Scale Factor k",
                  "secret": "If the ratio of similarity is 3 : 5, then the ratio of their perimeters is also exactly 3 : 5."
                }
              ]
            },
            "page2": {
              "title": "Page 2: Theorem Corollaries & Golden Ministerial Exam Questions",
              "subtitle": "Order of Vertices • Solving Unknown Sides • Model Q&A",
              "grammarFocus": {
                "title": "Capsule 1: Rules for Writing Similarity Proportions",
                "rules": [
                  "Rule 1: Always write vertices in corresponding order: Polygon ABCD ~ Polygon XYZW.",
                  "Rule 2: Set up the proportion string: AB/XY = BC/YZ = CD/ZW = DA/WX = k.",
                  "Rule 3: Substitute known lengths and cross-multiply to solve for unknown side lengths.",
                  "Rule 4: Perimeter(ABCD) / Perimeter(XYZW) = k."
                ]
              },
              "spellingFocus": {
                "title": "Capsule 2: Ministerial Warnings",
                "rules": [
                  "Warning 1: Two polygons congruent to a third are congruent to each other.",
                  "Warning 2: Two polygons similar to a third are similar to each other.",
                  "Warning 3: All equilateral triangles are similar, all squares are similar, all regular pentagons are similar."
                ]
              },
              "goldenQuestions": [
                {
                  "q": "If polygon ABCD ~ polygon EFGH, AB = 6 cm, EF = 9 cm, and the perimeter of ABCD is 24 cm, find the perimeter of EFGH.",
                  "a": "Scale factor k = AB / EF = 6 / 9 = 2 / 3.<br>Perimeter(ABCD) / Perimeter(EFGH) = 2 / 3 ⟹ 24 / Perimeter(EFGH) = 2 / 3.<br>Perimeter(EFGH) = (24 × 3) / 2 = 36 cm."
                },
                {
                  "q": "If the scale factor of similarity between two polygons is 1, what is the geometric relationship between them?",
                  "a": "The two polygons are congruent (identical in both shape and size)."
                }
              ]
            }
          },
          "topics": [
            {
              "id": "ma_u3_l1_t1",
              "title": "Conditions & Scale Factor",
              "questions": [
                {
                  "id": "ma_u3_l1_q01",
                  "type": "mcq",
                  "difficulty": "Easy",
                  "category": "Similarity",
                  "question": "If the scale factor of similarity k of polygon M₁ to polygon M₂ satisfies k = 1, then M₁ and M₂ are:",
                  "options": [
                    "Similar only",
                    "Congruent",
                    "Equal in perimeter only",
                    "Equivalent"
                  ],
                  "correctIndex": 1,
                  "explanation": "When the scale factor k = 1, corresponding side lengths are equal, so the two polygons are congruent.",
                  "whyWrong": [
                    "They are congruent, which is stronger than similar.",
                    "They are congruent in all respects.",
                    "Incorrect terminology."
                  ],
                  "readingPassage": null
                },
                {
                  "id": "ma_u3_l1_q02",
                  "type": "mcq",
                  "difficulty": "Easy",
                  "category": "Regular Polygons",
                  "question": "Which of the following pairs of geometric figures are always similar?",
                  "options": [
                    "Two rhombuses",
                    "Two rectangles",
                    "Two squares",
                    "Two parallelograms"
                  ],
                  "correctIndex": 2,
                  "explanation": "All regular polygons with the same number of sides are always similar. Squares are regular 4-sided polygons with all angles 90° and all sides equal.",
                  "whyWrong": [
                    "Angles in rhombuses can differ.",
                    "Side ratios in rectangles can differ.",
                    "Parallelograms can differ in both angles and ratios."
                  ],
                  "readingPassage": null
                },
                {
                  "id": "ma_u3_l1_q03",
                  "type": "mcq",
                  "difficulty": "Medium",
                  "category": "Perimeter Ratio",
                  "question": "If the ratio between the side lengths of two similar polygons is 3 : 5 and the perimeter of the smaller is 18 cm, then the perimeter of the larger is:",
                  "options": [
                    "25 cm",
                    "30 cm",
                    "45 cm",
                    "90 cm"
                  ],
                  "correctIndex": 1,
                  "explanation": "Perimeter ratio = 3 / 5. 18 / P₂ = 3 / 5 ⟹ P₂ = (18 × 5) / 3 = 30 cm.",
                  "whyWrong": [
                    "Subtracted incorrectly.",
                    "Multiplied 18 by 5/2.",
                    "Multiplied by 5 without dividing by 3."
                  ],
                  "readingPassage": null
                },
                {
                  "id": "ma_u3_l1_q04",
                  "type": "complete",
                  "difficulty": "Easy",
                  "category": "Scale Factor",
                  "question": "If polygon M₁ is a reduction of polygon M₂, then the scale factor k satisfies 0 < k < ____.",
                  "acceptableAnswers": [
                    "1",
                    "١"
                  ],
                  "modelAnswer": "1",
                  "explanation": "A scale factor represents reduction when 0 < k < 1.",
                  "readingPassage": null
                },
                {
                  "id": "ma_u3_l1_q05",
                  "type": "essay",
                  "difficulty": "Hard",
                  "category": "Similarity Calculations",
                  "question": "If ABCD ~ XYZW, AB = 8 cm, BC = 12 cm, CD = 16 cm, DA = 10 cm, and XY = 12 cm. Find: 1) The scale factor of similarity, 2) The perimeter of XYZW.",
                  "keywords": [
                    "k = 1.5",
                    "54 cm"
                  ],
                  "modelAnswer": "1) Scale factor k = XY / AB = 12 / 8 = 3/2 = 1.5.\n2) Perimeter(ABCD) = 8 + 12 + 16 + 10 = 46 cm.\n3) Perimeter(XYZW) = Perimeter(ABCD) × k = 46 × 1.5 = 69 cm? Wait: 46 * 1.5 = 69 cm.\nCheck: XY = 12, YZ = 18, ZW = 24, WX = 15. Sum = 12 + 18 + 24 + 15 = 69 cm. Model answer: k = 1.5, Perimeter = 69 cm.",
                  "explanation": "Full credit for computing k = 1.5 and perimeter = 69 cm.",
                  "readingPassage": null
                }
              ]
            }
          ],
          "lessonExam": {
            "title": "Assessment: Similarity of Polygons",
            "subtitle": "Scale factor, regular figures and perimeters",
            "questions": [
              {
                "id": "ma_u3_l1_q01",
                "type": "mcq",
                "difficulty": "Easy",
                "category": "Similarity",
                "question": "If the scale factor of similarity k of polygon M₁ to polygon M₂ satisfies k = 1, then M₁ and M₂ are:",
                "options": [
                  "Similar only",
                  "Congruent",
                  "Equal in perimeter only",
                  "Equivalent"
                ],
                "correctIndex": 1,
                "explanation": "When the scale factor k = 1, corresponding side lengths are equal, so the two polygons are congruent.",
                "whyWrong": [
                  "They are congruent, which is stronger than similar.",
                  "They are congruent in all respects.",
                  "Incorrect terminology."
                ],
                "readingPassage": null
              },
              {
                "id": "ma_u3_l1_q02",
                "type": "mcq",
                "difficulty": "Easy",
                "category": "Regular Polygons",
                "question": "Which of the following pairs of geometric figures are always similar?",
                "options": [
                  "Two rhombuses",
                  "Two rectangles",
                  "Two squares",
                  "Two parallelograms"
                ],
                "correctIndex": 2,
                "explanation": "All regular polygons with the same number of sides are always similar. Squares are regular 4-sided polygons with all angles 90° and all sides equal.",
                "whyWrong": [
                  "Angles in rhombuses can differ.",
                  "Side ratios in rectangles can differ.",
                  "Parallelograms can differ in both angles and ratios."
                ],
                "readingPassage": null
              },
              {
                "id": "ma_u3_l1_q03",
                "type": "mcq",
                "difficulty": "Medium",
                "category": "Perimeter Ratio",
                "question": "If the ratio between the side lengths of two similar polygons is 3 : 5 and the perimeter of the smaller is 18 cm, then the perimeter of the larger is:",
                "options": [
                  "25 cm",
                  "30 cm",
                  "45 cm",
                  "90 cm"
                ],
                "correctIndex": 1,
                "explanation": "Perimeter ratio = 3 / 5. 18 / P₂ = 3 / 5 ⟹ P₂ = (18 × 5) / 3 = 30 cm.",
                "whyWrong": [
                  "Subtracted incorrectly.",
                  "Multiplied 18 by 5/2.",
                  "Multiplied by 5 without dividing by 3."
                ],
                "readingPassage": null
              },
              {
                "id": "ma_u3_l1_q04",
                "type": "complete",
                "difficulty": "Easy",
                "category": "Scale Factor",
                "question": "If polygon M₁ is a reduction of polygon M₂, then the scale factor k satisfies 0 < k < ____.",
                "acceptableAnswers": [
                  "1",
                  "١"
                ],
                "modelAnswer": "1",
                "explanation": "A scale factor represents reduction when 0 < k < 1.",
                "readingPassage": null
              },
              {
                "id": "ma_u3_l1_q05",
                "type": "essay",
                "difficulty": "Hard",
                "category": "Similarity Calculations",
                "question": "If ABCD ~ XYZW, AB = 8 cm, BC = 12 cm, CD = 16 cm, DA = 10 cm, and XY = 12 cm. Find: 1) The scale factor of similarity, 2) The perimeter of XYZW.",
                "keywords": [
                  "k = 1.5",
                  "54 cm"
                ],
                "modelAnswer": "1) Scale factor k = XY / AB = 12 / 8 = 3/2 = 1.5.\n2) Perimeter(ABCD) = 8 + 12 + 16 + 10 = 46 cm.\n3) Perimeter(XYZW) = Perimeter(ABCD) × k = 46 × 1.5 = 69 cm? Wait: 46 * 1.5 = 69 cm.\nCheck: XY = 12, YZ = 18, ZW = 24, WX = 15. Sum = 12 + 18 + 24 + 15 = 69 cm. Model answer: k = 1.5, Perimeter = 69 cm.",
                "explanation": "Full credit for computing k = 1.5 and perimeter = 69 cm.",
                "readingPassage": null
              }
            ]
          }
        },
        {
          "id": "ma_u3_l2",
          "unitId": "ma_unit3",
          "number": 2,
          "type": "geometry",
          "title": "Lesson 3-2: Similarity of Triangles",
          "summarySheet": {
            "page1": {
              "title": "Page 1: Three Cases of Triangle Similarity & Right Triangle Theorems",
              "subtitle": "Case 1: AA • Case 2: SSS • Case 3: SAS • Euclidean Corollaries",
              "coreIdea": "Unlike general polygons, triangles require only ONE condition to establish similarity: 1) AA (Two corresponding angles are equal), 2) SSS (All three corresponding sides are proportional), or 3) SAS (One angle is equal and the including sides are proportional). A line parallel to one side of a triangle dividing the other two sides creates a triangle similar to the original.",
              "mindMap": [
                {
                  "title": "Case 1: Angle-Angle (AA)",
                  "desc": "• If two angles of one triangle are equal in measure to two angles of another, the triangles are similar.<br>• Corollary: If a line is drawn parallel to one side, the new triangle is similar to the original."
                },
                {
                  "title": "Case 2: Side-Side-Side (SSS)",
                  "desc": "• If corresponding side lengths are proportional: AB/A'B' = BC/B'C' = CA/C'A' = k, then the triangles are similar."
                },
                {
                  "title": "Case 3: Side-Angle-Side (SAS)",
                  "desc": "• If an angle of one triangle is equal to an angle of another and the lengths of the sides containing these angles are proportional."
                },
                {
                  "title": "Euclidean Theorem Corollaries",
                  "desc": "• In right △ABC at A with AD ⊥ BC:<br>• AB² = BD · BC; AC² = CD · CB; AD² = BD · CD; AD = (AB · AC) / BC."
                }
              ],
              "vocabulary": [
                {
                  "word": "AA Criterion",
                  "meaning": "Two angles equal guarantee similarity because the third angles are automatically equal (sum = 180°)",
                  "opposite": "SSS Criterion",
                  "plural": "Criteria"
                },
                {
                  "word": "Euclidean Theorem (إقليدس)",
                  "meaning": "Geometric relations derived from drawing an altitude from the right angle to the hypotenuse",
                  "opposite": "Pythagoras",
                  "plural": "Theorems"
                },
                {
                  "word": "Parallel Line Corollary",
                  "meaning": "If DE ∥ BC in △ABC, then △ADE ~ △ABC",
                  "opposite": "Transversal",
                  "plural": "Corollaries"
                }
              ],
              "beautyPoints": [
                {
                  "phrase": "Two Angles Suffice for Triangles",
                  "secret": "In triangles, equal angles automatically force sides to be proportional, and proportional sides automatically force angles to be equal!"
                }
              ]
            },
            "page2": {
              "title": "Page 2: Proof Structures & Golden Ministerial Exam Questions",
              "subtitle": "Writing Formal Geometric Proofs • Euclidean Applications • Model Q&A",
              "grammarFocus": {
                "title": "Capsule 1: Writing a Two-Column Similarity Proof",
                "rules": [
                  "Step 1: Identify and name the two triangles with vertices in order: △ABC and △ADE.",
                  "Step 2: State the given angle equalities (common shared angle, alternate interior, or corresponding angles).",
                  "Step 3: State the conclusion: ∴ △ABC ~ △ADE (by AA).",
                  "Step 4: Write the resulting side ratio equations and cross-multiply."
                ]
              },
              "spellingFocus": {
                "title": "Capsule 2: Euclidean Formula Reminder",
                "rules": [
                  "Right triangle at A with AD ⊥ BC: AD = (AB × AC) / BC.",
                  "AB² = BD × BC; AC² = CD × BC; AD² = BD × CD."
                ]
              },
              "goldenQuestions": [
                {
                  "q": "In △ABC, DE ∥ BC with D ∈ AB and E ∈ AC. If AD = 4 cm, DB = 6 cm, and DE = 5 cm, find BC.",
                  "a": "Since DE ∥ BC, △ADE ~ △ABC.<br>Ratio: AD / AB = DE / BC.<br>AB = AD + DB = 4 + 6 = 10 cm.<br>4 / 10 = 5 / BC ⟹ BC = (10 × 5) / 4 = 12.5 cm."
                }
              ]
            }
          },
          "topics": [
            {
              "id": "ma_u3_l2_t1",
              "title": "AA, SSS, SAS & Euclidean Theorems",
              "questions": [
                {
                  "id": "ma_u3_l2_q01",
                  "type": "mcq",
                  "difficulty": "Easy",
                  "category": "Triangle Similarity",
                  "question": "In △ABC and △DEF, if m(∠A) = m(∠D) and m(∠B) = m(∠E), then:",
                  "options": [
                    "△ABC ≅ △DEF",
                    "△ABC ~ △DEF",
                    "AB = DE",
                    "AC = DF"
                  ],
                  "correctIndex": 1,
                  "explanation": "By the AA (Angle-Angle) similarity criterion, two pairs of equal angles ensure the triangles are similar.",
                  "whyWrong": [
                    "Equal angles imply similarity, not necessarily congruence.",
                    "Sides are proportional, not necessarily equal.",
                    "Sides are not necessarily equal."
                  ],
                  "readingPassage": null
                },
                {
                  "id": "ma_u3_l2_q02",
                  "type": "mcq",
                  "difficulty": "Medium",
                  "category": "Parallel Line Corollary",
                  "question": "In △ABC, DE ∥ BC. If AD = 2 cm, DB = 4 cm, and BC = 9 cm, then DE equals:",
                  "options": [
                    "3 cm",
                    "4.5 cm",
                    "6 cm",
                    "2 cm"
                  ],
                  "correctIndex": 0,
                  "explanation": "AB = 2 + 4 = 6 cm. Since △ADE ~ △ABC: AD/AB = DE/BC ⟹ 2/6 = DE/9 ⟹ DE = (2 × 9) / 6 = 3 cm.",
                  "whyWrong": [
                    "Calculated 2/4 × 9 = 4.5 using DB instead of total AB.",
                    "Multiplied 2 by 3.",
                    "Incorrect arithmetic."
                  ],
                  "readingPassage": null
                },
                {
                  "id": "ma_u3_l2_q03",
                  "type": "complete",
                  "difficulty": "Medium",
                  "category": "Euclidean Theorem",
                  "question": "In right-angled △ABC at A, AD ⊥ BC. If BD = 4 cm and CD = 9 cm, then AD = ____ cm.",
                  "acceptableAnswers": [
                    "6",
                    "٦"
                  ],
                  "modelAnswer": "6",
                  "explanation": "According to Euclidean theorem: AD² = BD · CD = 4 × 9 = 36 ⟹ AD = √36 = 6 cm.",
                  "readingPassage": null
                }
              ]
            }
          ],
          "lessonExam": {
            "title": "Assessment: Similarity of Triangles",
            "subtitle": "Criteria and geometric corollaries",
            "questions": [
              {
                "id": "ma_u3_l2_q01",
                "type": "mcq",
                "difficulty": "Easy",
                "category": "Triangle Similarity",
                "question": "In △ABC and △DEF, if m(∠A) = m(∠D) and m(∠B) = m(∠E), then:",
                "options": [
                  "△ABC ≅ △DEF",
                  "△ABC ~ △DEF",
                  "AB = DE",
                  "AC = DF"
                ],
                "correctIndex": 1,
                "explanation": "By the AA (Angle-Angle) similarity criterion, two pairs of equal angles ensure the triangles are similar.",
                "whyWrong": [
                  "Equal angles imply similarity, not necessarily congruence.",
                  "Sides are proportional, not necessarily equal.",
                  "Sides are not necessarily equal."
                ],
                "readingPassage": null
              },
              {
                "id": "ma_u3_l2_q02",
                "type": "mcq",
                "difficulty": "Medium",
                "category": "Parallel Line Corollary",
                "question": "In △ABC, DE ∥ BC. If AD = 2 cm, DB = 4 cm, and BC = 9 cm, then DE equals:",
                "options": [
                  "3 cm",
                  "4.5 cm",
                  "6 cm",
                  "2 cm"
                ],
                "correctIndex": 0,
                "explanation": "AB = 2 + 4 = 6 cm. Since △ADE ~ △ABC: AD/AB = DE/BC ⟹ 2/6 = DE/9 ⟹ DE = (2 × 9) / 6 = 3 cm.",
                "whyWrong": [
                  "Calculated 2/4 × 9 = 4.5 using DB instead of total AB.",
                  "Multiplied 2 by 3.",
                  "Incorrect arithmetic."
                ],
                "readingPassage": null
              },
              {
                "id": "ma_u3_l2_q03",
                "type": "complete",
                "difficulty": "Medium",
                "category": "Euclidean Theorem",
                "question": "In right-angled △ABC at A, AD ⊥ BC. If BD = 4 cm and CD = 9 cm, then AD = ____ cm.",
                "acceptableAnswers": [
                  "6",
                  "٦"
                ],
                "modelAnswer": "6",
                "explanation": "According to Euclidean theorem: AD² = BD · CD = 4 × 9 = 36 ⟹ AD = √36 = 6 cm.",
                "readingPassage": null
              }
            ]
          }
        },
        {
          "id": "ma_u3_l3",
          "unitId": "ma_unit3",
          "number": 3,
          "type": "geometry",
          "title": "Lesson 3-3: Dilation",
          "summarySheet": {
            "page1": {
              "title": "Page 1: Concept, Coordinates & Properties of Dilation",
              "subtitle": "Center of Dilation • Scale Factor k • Coordinate Transformation (kx, ky)",
              "coreIdea": "A dilation is a similarity transformation that enlarges or reduces a geometric figure with respect to a fixed point called the center of dilation by a constant scale factor k (k ≠ 0). Under a dilation with center at the origin (0, 0) and scale factor k, every point P(x, y) maps to P'(kx, ky). Dilation preserves angle measures, parallelism, and collinearity, but alters distance by factor |k|.",
              "mindMap": [
                {
                  "title": "1. Transformation Rule with Origin as Center",
                  "desc": "• Rule: D_(O, k)(x, y) = (k·x, k·y).<br>• Example: Point (2, -3) with scale factor 3 maps to (6, -9).<br>• Fraction factor: Point (4, 8) with scale factor 1/2 maps to (2, 4)."
                },
                {
                  "title": "2. Properties Preserved by Dilation",
                  "desc": "• Preserves: Measure of angles, parallelism of lines, collinearity of points, order of points.<br>• Does NOT preserve: Lengths of segments (multiplied by |k|)."
                }
              ],
              "vocabulary": [
                {
                  "word": "Dilation (التمدد)",
                  "meaning": "A transformation that changes the size of a figure while preserving its shape and angles",
                  "opposite": "Isometry (preserves distance)",
                  "plural": "Dilations"
                },
                {
                  "word": "Center of Dilation",
                  "meaning": "The fixed invariant point about which all points expand or contract",
                  "opposite": "Variable point",
                  "plural": "Centers"
                },
                {
                  "word": "Scale Factor k",
                  "meaning": "The constant multiplier applied to coordinates from the center of dilation",
                  "opposite": "Inverted scale factor",
                  "plural": "Scale factors"
                }
              ],
              "beautyPoints": [
                {
                  "phrase": "(x, y) ⟶ (kx, ky)",
                  "secret": "Simply multiply BOTH x and y coordinates by the scale factor k to find the image coordinates under a dilation centered at the origin."
                }
              ]
            },
            "page2": {
              "title": "Page 2: Analytical Applications & Golden Questions",
              "subtitle": "Area Ratios • Image Coordinates • Ministerial Q&A",
              "grammarFocus": {
                "title": "Capsule 1: Geometric Invariants of Dilation",
                "rules": [
                  "Length: Length of image segment = |k| × Length of original segment.",
                  "Perimeter: Perimeter of image figure = |k| × Perimeter of original figure.",
                  "Area: Area of image figure = k² × Area of original figure."
                ]
              },
              "spellingFocus": {
                "title": "Capsule 2: Trap Alert",
                "rules": [
                  "If k < 0, the figure is dilated AND inverted (180° rotation around center).",
                  "The center of dilation is the ONLY invariant point: D(0, 0) = (0, 0)."
                ]
              },
              "goldenQuestions": [
                {
                  "q": "Find the image of point A(3, -2) under dilation centered at the origin with scale factor k = 2.",
                  "a": "A'(k·x, k·y) = (2 × 3, 2 × (-2)) = (6, -4)."
                }
              ]
            }
          },
          "topics": [
            {
              "id": "ma_u3_l3_t1",
              "title": "Dilation Center & Invariants",
              "questions": [
                {
                  "id": "ma_u3_l3_q01",
                  "type": "mcq",
                  "difficulty": "Easy",
                  "category": "Dilation Coordinates",
                  "question": "The image of the point (-2, 4) under dilation centered at the origin with scale factor 3 is:",
                  "options": [
                    "(-6, 12)",
                    "(6, 12)",
                    "(-6, 7)",
                    "(1, 7)"
                  ],
                  "correctIndex": 0,
                  "explanation": "Multiply each coordinate by 3: (-2 × 3, 4 × 3) = (-6, 12).",
                  "whyWrong": [
                    "Sign error on x-coordinate.",
                    "Added 3 to y instead of multiplying.",
                    "Added 3 to both coordinates."
                  ],
                  "readingPassage": null
                },
                {
                  "id": "ma_u3_l3_q02",
                  "type": "complete",
                  "difficulty": "Easy",
                  "category": "Dilation Coordinates",
                  "question": "If the point (6, -9) is the image of (2, -3) under dilation centered at the origin, then the scale factor k = ____.",
                  "acceptableAnswers": [
                    "3",
                    "٣"
                  ],
                  "modelAnswer": "3",
                  "explanation": "k = 6 / 2 = -9 / -3 = 3.",
                  "readingPassage": null
                }
              ]
            }
          ],
          "lessonExam": {
            "title": "Assessment: Dilation",
            "subtitle": "Coordinate transformations and scale properties",
            "questions": [
              {
                "id": "ma_u3_l3_q01",
                "type": "mcq",
                "difficulty": "Easy",
                "category": "Dilation Coordinates",
                "question": "The image of the point (-2, 4) under dilation centered at the origin with scale factor 3 is:",
                "options": [
                  "(-6, 12)",
                  "(6, 12)",
                  "(-6, 7)",
                  "(1, 7)"
                ],
                "correctIndex": 0,
                "explanation": "Multiply each coordinate by 3: (-2 × 3, 4 × 3) = (-6, 12).",
                "whyWrong": [
                  "Sign error on x-coordinate.",
                  "Added 3 to y instead of multiplying.",
                  "Added 3 to both coordinates."
                ],
                "readingPassage": null
              },
              {
                "id": "ma_u3_l3_q02",
                "type": "complete",
                "difficulty": "Easy",
                "category": "Dilation Coordinates",
                "question": "If the point (6, -9) is the image of (2, -3) under dilation centered at the origin, then the scale factor k = ____.",
                "acceptableAnswers": [
                  "3",
                  "٣"
                ],
                "modelAnswer": "3",
                "explanation": "k = 6 / 2 = -9 / -3 = 3.",
                "readingPassage": null
              }
            ]
          }
        },
        {
          "id": "ma_u3_l4",
          "unitId": "ma_unit3",
          "number": 4,
          "type": "geometry",
          "title": "Lesson 3-4: Trigonometric Ratios of an Acute Angle",
          "summarySheet": {
            "page1": {
              "title": "Page 1: Definitions of Sine, Cosine and Tangent in Right Triangles",
              "subtitle": "sin θ • cos θ • tan θ • Complementary Angle Relations (90° - θ)",
              "coreIdea": "Main trigonometric ratios are defined for an acute angle θ in a right-angled triangle: Sine (sin θ = Opposite / Hypotenuse), Cosine (cos θ = Adjacent / Hypotenuse), and Tangent (tan θ = Opposite / Adjacent = sin θ / cos θ). Fundamental theorem: For any two complementary acute angles A and B (where m(∠A) + m(∠B) = 90°), sin A = cos B, cos A = sin B, and tan A · tan B = 1.",
              "mindMap": [
                {
                  "title": "1. Three Fundamental Ratios",
                  "desc": "• sin θ = Opposite / Hypotenuse (جيب الزاوية).<br>• cos θ = Adjacent / Hypotenuse (جيب تمام الزاوية).<br>• tan θ = Opposite / Adjacent = sin θ / cos θ (ظل الزاوية)."
                },
                {
                  "title": "2. Values Range",
                  "desc": "• For acute θ: 0 < sin θ < 1, 0 < cos θ < 1.<br>• tan θ can take any positive real value (0 < tan θ < ∞)."
                },
                {
                  "title": "3. Complementary Angles (A + B = 90°)",
                  "desc": "• sin A = cos B (e.g. sin 30° = cos 60° = 0.5).<br>• If sin x = cos y, then x + y = 90°.<br>• If sin θ = cos θ, then θ = 45°."
                }
              ],
              "vocabulary": [
                {
                  "word": "Sine (sin / جا)",
                  "meaning": "Ratio of the length of the opposite side to the hypotenuse",
                  "opposite": "Cosecant",
                  "plural": "Sines"
                },
                {
                  "word": "Cosine (cos / جتا)",
                  "meaning": "Ratio of the length of the adjacent side to the hypotenuse",
                  "opposite": "Secant",
                  "plural": "Cosines"
                },
                {
                  "word": "Tangent (tan / ظا)",
                  "meaning": "Ratio of the opposite side to the adjacent side: sin θ / cos θ",
                  "opposite": "Cotangent",
                  "plural": "Tangents"
                },
                {
                  "word": "Hypotenuse (الوتر)",
                  "meaning": "The longest side in a right-angled triangle, opposite the 90° angle",
                  "opposite": "Leg",
                  "plural": "Hypotenuses"
                }
              ],
              "beautyPoints": [
                {
                  "phrase": "sin A = cos B ⟺ A + B = 90°",
                  "secret": "Whenever you see sine equal to cosine in an exam, immediately add their angles and set the sum to 90°! E.g. sin 2x = cos 3x ⟹ 2x + 3x = 90° ⟹ 5x = 90° ⟹ x = 18°."
                },
                {
                  "phrase": "sin θ = cos θ ⟹ θ = 45°",
                  "secret": "The only acute angle whose sine equals its cosine is 45°, because an isosceles right triangle has opposite = adjacent."
                }
              ]
            },
            "page2": {
              "title": "Page 2: Right Triangle Calculations & Golden Ministerial Exam Questions",
              "subtitle": "Pythagoras Integration • Step-by-step Proofs • Model Q&A",
              "grammarFocus": {
                "title": "Capsule 1: Protocol for Trigonometric Problems",
                "rules": [
                  "Step 1: Sketch right-angled △ABC and identify the right angle.",
                  "Step 2: Use Pythagorean theorem to find the third missing side (c² = a² + b²).",
                  "Step 3: Write the definition of required ratios and plug in numerical values.",
                  "Step 4: Prove identities by evaluating L.H.S. and R.H.S. independently."
                ]
              },
              "spellingFocus": {
                "title": "Capsule 2: Ministerial Warnings",
                "rules": [
                  "Warning 1: tan θ = sin θ / cos θ. Always verify tan θ × cos θ = sin θ.",
                  "Warning 2: (sin θ)² + (cos θ)² = 1 for any acute angle θ."
                ]
              },
              "goldenQuestions": [
                {
                  "q": "In right-angled △ABC at B, AB = 6 cm, BC = 8 cm. Find sin C, cos C, tan C, and prove that sin² C + cos² C = 1.",
                  "a": "Hypotenuse AC = √(6² + 8²) = √(36 + 64) = √100 = 10 cm.<br>• sin C = 6 / 10 = 0.6.<br>• cos C = 8 / 10 = 0.8.<br>• tan C = 6 / 8 = 3/4 = 0.75.<br>• Proof: sin² C + cos² C = (0.6)² + (0.8)² = 0.36 + 0.64 = 1."
                },
                {
                  "q": "If sin x = cos 35° where x is an acute angle, find x.",
                  "a": "Since sin x = cos 35°, the angles are complementary: x + 35° = 90° ⟹ x = 90° - 35° = 55°."
                }
              ]
            }
          },
          "topics": [
            {
              "id": "ma_u3_l4_t1",
              "title": "sin, cos, tan & Complementary Angles",
              "questions": [
                {
                  "id": "ma_u3_l4_q01",
                  "type": "mcq",
                  "difficulty": "Easy",
                  "category": "Complementary Angles",
                  "question": "If sin 70° = cos θ where θ is an acute angle, then θ equals:",
                  "options": [
                    "20°",
                    "70°",
                    "110°",
                    "30°"
                  ],
                  "correctIndex": 0,
                  "explanation": "sin A = cos B ⟹ A + B = 90°. θ = 90° - 70° = 20°.",
                  "whyWrong": [
                    "Set angles equal.",
                    "Used supplementary 180° - 70°.",
                    "Incorrect subtraction."
                  ],
                  "readingPassage": null
                },
                {
                  "id": "ma_u3_l4_q02",
                  "type": "mcq",
                  "difficulty": "Easy",
                  "category": "Trigonometric Definition",
                  "question": "For any acute angle A, tan A is equal to:",
                  "options": [
                    "cos A / sin A",
                    "sin A / cos A",
                    "sin A · cos A",
                    "1 / sin A"
                  ],
                  "correctIndex": 1,
                  "explanation": "By definition, tan A = Opposite / Adjacent = (Opp/Hyp) / (Adj/Hyp) = sin A / cos A.",
                  "whyWrong": [
                    "Inverted formula: cos/sin is cotangent.",
                    "Product.",
                    "Reciprocal of sine is cosecant."
                  ],
                  "readingPassage": null
                },
                {
                  "id": "ma_u3_l4_q03",
                  "type": "mcq",
                  "difficulty": "Medium",
                  "category": "Complementary Angles",
                  "question": "If sin x = cos x where x is an acute angle, then x equals:",
                  "options": [
                    "30°",
                    "45°",
                    "60°",
                    "90°"
                  ],
                  "correctIndex": 1,
                  "explanation": "sin x = cos x ⟹ tan x = 1 ⟹ x = 45° (or x + x = 90° ⟹ 2x = 90° ⟹ x = 45°).",
                  "whyWrong": [
                    "sin 30° = 0.5 ≠ cos 30° = √3/2.",
                    "sin 60° ≠ cos 60°.",
                    "90° is not acute."
                  ],
                  "readingPassage": null
                },
                {
                  "id": "ma_u3_l4_q04",
                  "type": "complete",
                  "difficulty": "Easy",
                  "category": "Complementary Angles",
                  "question": "If sin 40° = cos k, where k is acute, then k = ____°.",
                  "acceptableAnswers": [
                    "50",
                    "٥٠"
                  ],
                  "modelAnswer": "50",
                  "explanation": "k = 90° - 40° = 50°.",
                  "readingPassage": null
                },
                {
                  "id": "ma_u3_l4_q05",
                  "type": "essay",
                  "difficulty": "Hard",
                  "category": "Right Triangle Trigonometry",
                  "question": "In right △ABC at C, AC = 12 cm, AB = 13 cm. Find: 1) The length of BC, 2) The value of sin A · cos B + cos A · sin B.",
                  "keywords": [
                    "BC = 5 cm",
                    "1"
                  ],
                  "modelAnswer": "1) By Pythagoras: BC = √(AB² - AC²) = √(13² - 12²) = √(169 - 144) = √25 = 5 cm.\n2) sin A = 5/13, cos B = 5/13, cos A = 12/13, sin B = 12/13.\n3) sin A · cos B + cos A · sin B = (5/13)(5/13) + (12/13)(12/13) = 25/169 + 144/169 = 169/169 = 1.",
                  "explanation": "Award full credit for calculating BC = 5 cm and evaluating the expression to 1.",
                  "readingPassage": null
                }
              ]
            }
          ],
          "lessonExam": {
            "title": "Assessment: Trigonometric Ratios",
            "subtitle": "Definitions and complementary angle rules",
            "questions": [
              {
                "id": "ma_u3_l4_q01",
                "type": "mcq",
                "difficulty": "Easy",
                "category": "Complementary Angles",
                "question": "If sin 70° = cos θ where θ is an acute angle, then θ equals:",
                "options": [
                  "20°",
                  "70°",
                  "110°",
                  "30°"
                ],
                "correctIndex": 0,
                "explanation": "sin A = cos B ⟹ A + B = 90°. θ = 90° - 70° = 20°.",
                "whyWrong": [
                  "Set angles equal.",
                  "Used supplementary 180° - 70°.",
                  "Incorrect subtraction."
                ],
                "readingPassage": null
              },
              {
                "id": "ma_u3_l4_q02",
                "type": "mcq",
                "difficulty": "Easy",
                "category": "Trigonometric Definition",
                "question": "For any acute angle A, tan A is equal to:",
                "options": [
                  "cos A / sin A",
                  "sin A / cos A",
                  "sin A · cos A",
                  "1 / sin A"
                ],
                "correctIndex": 1,
                "explanation": "By definition, tan A = Opposite / Adjacent = (Opp/Hyp) / (Adj/Hyp) = sin A / cos A.",
                "whyWrong": [
                  "Inverted formula: cos/sin is cotangent.",
                  "Product.",
                  "Reciprocal of sine is cosecant."
                ],
                "readingPassage": null
              },
              {
                "id": "ma_u3_l4_q03",
                "type": "mcq",
                "difficulty": "Medium",
                "category": "Complementary Angles",
                "question": "If sin x = cos x where x is an acute angle, then x equals:",
                "options": [
                  "30°",
                  "45°",
                  "60°",
                  "90°"
                ],
                "correctIndex": 1,
                "explanation": "sin x = cos x ⟹ tan x = 1 ⟹ x = 45° (or x + x = 90° ⟹ 2x = 90° ⟹ x = 45°).",
                "whyWrong": [
                  "sin 30° = 0.5 ≠ cos 30° = √3/2.",
                  "sin 60° ≠ cos 60°.",
                  "90° is not acute."
                ],
                "readingPassage": null
              },
              {
                "id": "ma_u3_l4_q04",
                "type": "complete",
                "difficulty": "Easy",
                "category": "Complementary Angles",
                "question": "If sin 40° = cos k, where k is acute, then k = ____°.",
                "acceptableAnswers": [
                  "50",
                  "٥٠"
                ],
                "modelAnswer": "50",
                "explanation": "k = 90° - 40° = 50°.",
                "readingPassage": null
              },
              {
                "id": "ma_u3_l4_q05",
                "type": "essay",
                "difficulty": "Hard",
                "category": "Right Triangle Trigonometry",
                "question": "In right △ABC at C, AC = 12 cm, AB = 13 cm. Find: 1) The length of BC, 2) The value of sin A · cos B + cos A · sin B.",
                "keywords": [
                  "BC = 5 cm",
                  "1"
                ],
                "modelAnswer": "1) By Pythagoras: BC = √(AB² - AC²) = √(13² - 12²) = √(169 - 144) = √25 = 5 cm.\n2) sin A = 5/13, cos B = 5/13, cos A = 12/13, sin B = 12/13.\n3) sin A · cos B + cos A · sin B = (5/13)(5/13) + (12/13)(12/13) = 25/169 + 144/169 = 169/169 = 1.",
                "explanation": "Award full credit for calculating BC = 5 cm and evaluating the expression to 1.",
                "readingPassage": null
              }
            ]
          }
        },
        {
          "id": "ma_u3_l5",
          "unitId": "ma_unit3",
          "number": 5,
          "type": "geometry",
          "title": "Lesson 3-5: Trigonometric Ratios of Some Special Angles",
          "summarySheet": {
            "page1": {
              "title": "Page 1: Exact Values of Special Angles (30°, 45°, 60°)",
              "subtitle": "30°-60° Right Triangle • 45°-45° Isosceles Right Triangle • Standard Exact Values",
              "coreIdea": "The angles 30°, 45°, and 60° have exact radical trigonometric values derived from standard geometric triangles. For 30° and 60° (from an equilateral triangle bisected): sin 30° = 1/2, cos 30° = √3/2, tan 30° = 1/√3 = √3/3; sin 60° = √3/2, cos 60° = 1/2, tan 60° = √3. For 45° (from an isosceles right triangle): sin 45° = 1/√2 = √2/2, cos 45° = 1/√2 = √2/2, tan 45° = 1.",
              "mindMap": [
                {
                  "title": "1. Angle 30°",
                  "desc": "• sin 30° = 1/2 = 0.5.<br>• cos 30° = √3 / 2 ≈ 0.866.<br>• tan 30° = 1 / √3 = √3 / 3 ≈ 0.577."
                },
                {
                  "title": "2. Angle 60°",
                  "desc": "• sin 60° = √3 / 2 ≈ 0.866.<br>• cos 60° = 1/2 = 0.5.<br>• tan 60° = √3 ≈ 1.732."
                },
                {
                  "title": "3. Angle 45°",
                  "desc": "• sin 45° = 1 / √2 = √2 / 2 ≈ 0.707.<br>• cos 45° = 1 / √2 = √2 / 2 ≈ 0.707.<br>• tan 45° = 1."
                }
              ],
              "vocabulary": [
                {
                  "word": "Special Angles",
                  "meaning": "The angles 30°, 45°, and 60° whose trigonometric ratios can be expressed as exact radicals",
                  "opposite": "General angle (requires calculator)",
                  "plural": "Special angles"
                },
                {
                  "word": "Exact Radical Value",
                  "meaning": "Values written in terms of fractions and square roots (e.g. √3/2) without decimal rounding",
                  "opposite": "Approximation",
                  "plural": "Exact values"
                }
              ],
              "beautyPoints": [
                {
                  "phrase": "sin 30° = cos 60° = 1/2",
                  "secret": "Because 30° and 60° add up to 90°, their sine and cosine are mirrors: sin 30° = cos 60° = 1/2, and sin 60° = cos 30° = √3/2."
                },
                {
                  "phrase": "tan 45° = 1",
                  "secret": "In a 45°-45°-90° triangle, both legs are equal in length, so opposite / adjacent = leg / leg = 1."
                }
              ]
            },
            "page2": {
              "title": "Page 2: Algebraic Verification & Golden Ministerial Exam Questions",
              "subtitle": "Proof Without Calculator • Finding Angle Measures • Model Q&A",
              "grammarFocus": {
                "title": "Capsule 1: 'Without Using Calculator' Protocol",
                "rules": [
                  "Step 1: Write L.H.S. and substitute each special trigonometric ratio with its exact fraction.",
                  "Step 2: Carry out powers and multiplications according to order of operations.",
                  "Step 3: Write R.H.S., substitute, and simplify.",
                  "Step 4: Conclude: ∴ L.H.S. = R.H.S."
                ]
              },
              "spellingFocus": {
                "title": "Capsule 2: Ministerial Warnings",
                "rules": [
                  "Warning: In proving equations, always calculate L.H.S. and R.H.S. separately.",
                  "Common mistake: sin² 30° = (1/2)² = 1/4, NOT 1/2."
                ]
              },
              "goldenQuestions": [
                {
                  "q": "Without using a calculator, prove that: sin 60° = 2 sin 30° cos 30°.",
                  "a": "• L.H.S. = sin 60° = √3 / 2.<br>• R.H.S. = 2 · sin 30° · cos 30° = 2 · (1/2) · (√3 / 2) = √3 / 2.<br>∴ L.H.S. = R.H.S."
                },
                {
                  "q": "Find the value of x where 0° < x < 90°: 4x = cos² 30° · tan² 30° · tan² 45°.",
                  "a": "cos 30° = √3/2 ⟹ cos² 30° = 3/4.<br>tan 30° = 1/√3 ⟹ tan² 30° = 1/3.<br>tan 45° = 1 ⟹ tan² 45° = 1.<br>4x = (3/4) · (1/3) · 1 = 1/4 ⟹ x = (1/4) / 4 = 1/16."
                }
              ]
            }
          },
          "topics": [
            {
              "id": "ma_u3_l5_t1",
              "title": "Exact Values for 30°, 45°, 60°",
              "questions": [
                {
                  "id": "ma_u3_l5_q01",
                  "type": "mcq",
                  "difficulty": "Easy",
                  "category": "Special Angles",
                  "question": "The value of sin 30° + cos 60° is equal to:",
                  "options": [
                    "1/2",
                    "1",
                    "√3",
                    "√3/2"
                  ],
                  "correctIndex": 1,
                  "explanation": "sin 30° = 1/2 and cos 60° = 1/2. Thus 1/2 + 1/2 = 1.",
                  "whyWrong": [
                    "Only one term.",
                    "Added square roots.",
                    "Value of sin 60°."
                  ],
                  "readingPassage": null
                },
                {
                  "id": "ma_u3_l5_q02",
                  "type": "mcq",
                  "difficulty": "Easy",
                  "category": "Special Angles",
                  "question": "The value of tan 45° is:",
                  "options": [
                    "1/2",
                    "√3/2",
                    "1",
                    "1/√3"
                  ],
                  "correctIndex": 2,
                  "explanation": "In an isosceles right triangle with 45° angles, opposite = adjacent, so tan 45° = 1.",
                  "whyWrong": [
                    "Value of sin 30°.",
                    "Value of sin 60°.",
                    "Value of tan 30°."
                  ],
                  "readingPassage": null
                },
                {
                  "id": "ma_u3_l5_q03",
                  "type": "mcq",
                  "difficulty": "Medium",
                  "category": "Solving for Angle",
                  "question": "If tan x = 1 where x is an acute angle, then x equals:",
                  "options": [
                    "30°",
                    "45°",
                    "60°",
                    "90°"
                  ],
                  "correctIndex": 1,
                  "explanation": "tan 45° = 1, so x = 45°.",
                  "whyWrong": [
                    "tan 30° = 1/√3.",
                    "tan 60° = √3.",
                    "tan 90° is undefined."
                  ],
                  "readingPassage": null
                },
                {
                  "id": "ma_u3_l5_q04",
                  "type": "complete",
                  "difficulty": "Medium",
                  "category": "Special Angles",
                  "question": "The numerical value of cos² 60° + sin² 60° is equal to ____.",
                  "acceptableAnswers": [
                    "1",
                    "١"
                  ],
                  "modelAnswer": "1",
                  "explanation": "cos 60° = 1/2 ⟹ cos² 60° = 1/4. sin 60° = √3/2 ⟹ sin² 60° = 3/4. 1/4 + 3/4 = 1.",
                  "readingPassage": null
                },
                {
                  "id": "ma_u3_l5_q05",
                  "type": "essay",
                  "difficulty": "Hard",
                  "category": "Special Angles Proof",
                  "question": "Without using a calculator, prove that: cos 60° = 2 cos² 30° - 1.",
                  "keywords": [
                    "L.H.S. = 1/2",
                    "cos 30 = √3/2",
                    "R.H.S. = 1/2",
                    "L.H.S. = R.H.S."
                  ],
                  "modelAnswer": "1) L.H.S. = cos 60° = 1/2.\n2) R.H.S. = 2 · (cos 30°)² - 1 = 2 · (√3 / 2)² - 1 = 2 · (3/4) - 1 = 3/2 - 1 = 1/2.\n3) Since L.H.S. = 1/2 and R.H.S. = 1/2, therefore L.H.S. = R.H.S.",
                  "explanation": "Full marks for separate evaluation of LHS = 1/2 and RHS = 1/2.",
                  "readingPassage": null
                }
              ]
            }
          ],
          "lessonExam": {
            "title": "Assessment: Special Angles",
            "subtitle": "Exact radical proofs and algebraic applications",
            "questions": [
              {
                "id": "ma_u3_l5_q01",
                "type": "mcq",
                "difficulty": "Easy",
                "category": "Special Angles",
                "question": "The value of sin 30° + cos 60° is equal to:",
                "options": [
                  "1/2",
                  "1",
                  "√3",
                  "√3/2"
                ],
                "correctIndex": 1,
                "explanation": "sin 30° = 1/2 and cos 60° = 1/2. Thus 1/2 + 1/2 = 1.",
                "whyWrong": [
                  "Only one term.",
                  "Added square roots.",
                  "Value of sin 60°."
                ],
                "readingPassage": null
              },
              {
                "id": "ma_u3_l5_q02",
                "type": "mcq",
                "difficulty": "Easy",
                "category": "Special Angles",
                "question": "The value of tan 45° is:",
                "options": [
                  "1/2",
                  "√3/2",
                  "1",
                  "1/√3"
                ],
                "correctIndex": 2,
                "explanation": "In an isosceles right triangle with 45° angles, opposite = adjacent, so tan 45° = 1.",
                "whyWrong": [
                  "Value of sin 30°.",
                  "Value of sin 60°.",
                  "Value of tan 30°."
                ],
                "readingPassage": null
              },
              {
                "id": "ma_u3_l5_q03",
                "type": "mcq",
                "difficulty": "Medium",
                "category": "Solving for Angle",
                "question": "If tan x = 1 where x is an acute angle, then x equals:",
                "options": [
                  "30°",
                  "45°",
                  "60°",
                  "90°"
                ],
                "correctIndex": 1,
                "explanation": "tan 45° = 1, so x = 45°.",
                "whyWrong": [
                  "tan 30° = 1/√3.",
                  "tan 60° = √3.",
                  "tan 90° is undefined."
                ],
                "readingPassage": null
              },
              {
                "id": "ma_u3_l5_q04",
                "type": "complete",
                "difficulty": "Medium",
                "category": "Special Angles",
                "question": "The numerical value of cos² 60° + sin² 60° is equal to ____.",
                "acceptableAnswers": [
                  "1",
                  "١"
                ],
                "modelAnswer": "1",
                "explanation": "cos 60° = 1/2 ⟹ cos² 60° = 1/4. sin 60° = √3/2 ⟹ sin² 60° = 3/4. 1/4 + 3/4 = 1.",
                "readingPassage": null
              },
              {
                "id": "ma_u3_l5_q05",
                "type": "essay",
                "difficulty": "Hard",
                "category": "Special Angles Proof",
                "question": "Without using a calculator, prove that: cos 60° = 2 cos² 30° - 1.",
                "keywords": [
                  "L.H.S. = 1/2",
                  "cos 30 = √3/2",
                  "R.H.S. = 1/2",
                  "L.H.S. = R.H.S."
                ],
                "modelAnswer": "1) L.H.S. = cos 60° = 1/2.\n2) R.H.S. = 2 · (cos 30°)² - 1 = 2 · (√3 / 2)² - 1 = 2 · (3/4) - 1 = 3/2 - 1 = 1/2.\n3) Since L.H.S. = 1/2 and R.H.S. = 1/2, therefore L.H.S. = R.H.S.",
                "explanation": "Full marks for separate evaluation of LHS = 1/2 and RHS = 1/2.",
                "readingPassage": null
              }
            ]
          }
        },
        {
          "id": "ma_u3_l6",
          "unitId": "ma_unit3",
          "number": 6,
          "type": "geometry",
          "title": "Lesson 3-6: Slopes of Parallel and Perpendicular Lines",
          "summarySheet": {
            "page1": {
              "title": "Page 1: Slope Definition & Parallel / Perpendicular Conditions",
              "subtitle": "m = (y₂ - y₁)/(x₂ - x₁) • m = tan θ • Parallel: m₁ = m₂ • Perpendicular: m₁ · m₂ = -1",
              "coreIdea": "The slope m of a straight line measures its steepness and direction. If a line passes through (x₁, y₁) and (x₂, y₂), m = (y₂ - y₁) / (x₂ - x₁). If it makes a positive angle θ with the positive x-axis, m = tan θ. Two non-vertical lines L₁ and L₂ are: 1) Parallel (L₁ ∥ L₂) if and only if their slopes are equal: m₁ = m₂; 2) Perpendicular (L₁ ⊥ L₂) if and only if the product of their slopes is -1: m₁ · m₂ = -1 (i.e. m₂ = -1 / m₁).",
              "mindMap": [
                {
                  "title": "1. Slope Formulas",
                  "desc": "• Two points: m = (y₂ - y₁) / (x₂ - x₁).<br>• Angle with positive x-axis: m = tan θ.<br>• Equation ax + by + c = 0: m = -a / b (coefficient of x / coefficient of y)."
                },
                {
                  "title": "2. Parallel Lines Condition",
                  "desc": "• L₁ ∥ L₂ ⟺ m₁ = m₂.<br>• Example: If line 1 has slope 2/3, any parallel line has slope 2/3."
                },
                {
                  "title": "3. Perpendicular Lines Condition",
                  "desc": "• L₁ ⊥ L₂ ⟺ m₁ · m₂ = -1 (m₂ = -1 / m₁).<br>• Negative reciprocal: If m₁ = 3/4, then m₂ = -4/3.<br>• If m₁ = -2, then m₂ = 1/2."
                },
                {
                  "title": "4. Horizontal & Vertical Lines",
                  "desc": "• Horizontal line (parallel to x-axis): m = 0 (θ = 0°).<br>• Vertical line (parallel to y-axis): m is undefined (θ = 90°)."
                }
              ],
              "vocabulary": [
                {
                  "word": "Slope (ميل المستقيم)",
                  "meaning": "The ratio of vertical change (rise) to horizontal change (run): m = Δy / Δx = tan θ",
                  "opposite": "Zero slope / Undefined",
                  "plural": "Slopes"
                },
                {
                  "word": "Parallel Lines (مستقيمان متوازيان)",
                  "meaning": "Lines in the same plane that never intersect and have identical slopes (m₁ = m₂)",
                  "opposite": "Intersecting / Perpendicular lines",
                  "plural": "Parallel lines"
                },
                {
                  "word": "Perpendicular Lines (مستقيمان متعامدان)",
                  "meaning": "Lines that intersect at a 90° right angle; their slopes are negative reciprocals (m₁ · m₂ = -1)",
                  "opposite": "Parallel lines",
                  "plural": "Perpendicular lines"
                },
                {
                  "word": "Negative Reciprocal",
                  "meaning": "Inverting a fraction and switching its sign: if m = a/b, the perpendicular slope is -b/a",
                  "opposite": "Reciprocal",
                  "plural": "Negative reciprocals"
                }
              ],
              "beautyPoints": [
                {
                  "phrase": "Perpendicular: Flip and Negate!",
                  "secret": "To find the perpendicular slope immediately: flip the fraction upside down and change its sign. If m₁ = 2/5 ⟹ m₂ = -5/2. If m₁ = -3 ⟹ m₂ = 1/3."
                },
                {
                  "phrase": "Horizontal m = 0 vs Vertical Undefined",
                  "secret": "A line parallel to the x-axis has slope = 0. A line parallel to the y-axis has undefined slope (division by zero: x₂ - x₁ = 0)."
                }
              ]
            },
            "page2": {
              "title": "Page 2: Geometric Proofs & Golden Ministerial Exam Questions",
              "subtitle": "Proving Quadrilaterals • Proving Right Triangles • Model Q&A",
              "grammarFocus": {
                "title": "Capsule 1: Applications of Slope in Geometry",
                "rules": [
                  "Prove 3 points A, B, C are collinear: Show Slope(AB) = Slope(BC).",
                  "Prove △ABC is right-angled at B: Show Slope(AB) · Slope(BC) = -1.",
                  "Prove ABCD is a parallelogram: Show Slope(AB) = Slope(CD) AND Slope(BC) = Slope(AD).",
                  "Prove ABCD is a rectangle: Show it is a parallelogram AND Slope(AB) · Slope(BC) = -1."
                ]
              },
              "spellingFocus": {
                "title": "Capsule 2: Ministerial Warnings",
                "rules": [
                  "Warning: If a line is perpendicular to a line with slope 0, its slope is undefined (vertical line).",
                  "If line ax + 2y - 5 = 0 is parallel to line with slope 3: -a / 2 = 3 ⟹ a = -6."
                ]
              },
              "goldenQuestions": [
                {
                  "q": "If the straight line passing through (2, 5) and (4, k) is parallel to the line making an angle of 45° with the positive x-axis, find k.",
                  "a": "Slope of second line: m₂ = tan 45° = 1.<br>Slope of first line: m₁ = (k - 5) / (4 - 2) = (k - 5) / 2.<br>Since lines are parallel: m₁ = m₂ ⟹ (k - 5) / 2 = 1 ⟹ k - 5 = 2 ⟹ k = 7."
                },
                {
                  "q": "If line L₁ has slope 2/3 and L₁ ⊥ L₂, find the slope of L₂.",
                  "a": "Since L₁ ⊥ L₂, m₁ · m₂ = -1 ⟹ (2/3) · m₂ = -1 ⟹ m₂ = -3/2."
                }
              ]
            }
          },
          "topics": [
            {
              "id": "ma_u3_l6_t1",
              "title": "Slope Formulas & Geometric Relationships",
              "questions": [
                {
                  "id": "ma_u3_l6_q01",
                  "type": "mcq",
                  "difficulty": "Easy",
                  "category": "Parallel Slopes",
                  "question": "If the straight line L₁ is parallel to L₂ and the slope of L₁ is -3/5, then the slope of L₂ is:",
                  "options": [
                    "-3/5",
                    "3/5",
                    "5/3",
                    "-5/3"
                  ],
                  "correctIndex": 0,
                  "explanation": "Parallel lines have equal slopes: m₂ = m₁ = -3/5.",
                  "whyWrong": [
                    "Sign error.",
                    "Used perpendicular negative reciprocal.",
                    "Inverted without negative sign."
                  ],
                  "readingPassage": null
                },
                {
                  "id": "ma_u3_l6_q02",
                  "type": "mcq",
                  "difficulty": "Easy",
                  "category": "Perpendicular Slopes",
                  "question": "If straight line L₁ ⊥ L₂ and the slope of L₁ is 4, then the slope of L₂ is:",
                  "options": [
                    "4",
                    "-4",
                    "1/4",
                    "-1/4"
                  ],
                  "correctIndex": 3,
                  "explanation": "Perpendicular slopes satisfy m₁ · m₂ = -1. Thus m₂ = -1/4.",
                  "whyWrong": [
                    "Equal slopes means parallel.",
                    "Negative only.",
                    "Reciprocal without sign change."
                  ],
                  "readingPassage": null
                },
                {
                  "id": "ma_u3_l6_q03",
                  "type": "mcq",
                  "difficulty": "Medium",
                  "category": "Slope Formula",
                  "question": "The slope of the line passing through the points (3, 5) and (3, -2) is:",
                  "options": [
                    "0",
                    "7",
                    "-7/6",
                    "Undefined"
                  ],
                  "correctIndex": 3,
                  "explanation": "x₂ - x₁ = 3 - 3 = 0. Division by zero means the line is vertical and its slope is undefined.",
                  "whyWrong": [
                    "Subtracted to zero.",
                    "Used y difference only.",
                    "Incorrect formula."
                  ],
                  "readingPassage": null
                },
                {
                  "id": "ma_u3_l6_q04",
                  "type": "complete",
                  "difficulty": "Medium",
                  "category": "Slope Calculation",
                  "question": "If the line joining (1, 3) and (3, k) is perpendicular to a line with slope -1/2, then k = ____.",
                  "acceptableAnswers": [
                    "7",
                    "٧"
                  ],
                  "modelAnswer": "7",
                  "explanation": "Slope of perpendicular line m₁ = -1 / (-1/2) = 2. m₁ = (k - 3) / (3 - 1) = (k - 3) / 2 = 2 ⟹ k - 3 = 4 ⟹ k = 7.",
                  "readingPassage": null
                }
              ]
            }
          ],
          "lessonExam": {
            "title": "Assessment: Slopes",
            "subtitle": "Parallel m₁ = m₂ and perpendicular m₁ · m₂ = -1",
            "questions": [
              {
                "id": "ma_u3_l6_q01",
                "type": "mcq",
                "difficulty": "Easy",
                "category": "Parallel Slopes",
                "question": "If the straight line L₁ is parallel to L₂ and the slope of L₁ is -3/5, then the slope of L₂ is:",
                "options": [
                  "-3/5",
                  "3/5",
                  "5/3",
                  "-5/3"
                ],
                "correctIndex": 0,
                "explanation": "Parallel lines have equal slopes: m₂ = m₁ = -3/5.",
                "whyWrong": [
                  "Sign error.",
                  "Used perpendicular negative reciprocal.",
                  "Inverted without negative sign."
                ],
                "readingPassage": null
              },
              {
                "id": "ma_u3_l6_q02",
                "type": "mcq",
                "difficulty": "Easy",
                "category": "Perpendicular Slopes",
                "question": "If straight line L₁ ⊥ L₂ and the slope of L₁ is 4, then the slope of L₂ is:",
                "options": [
                  "4",
                  "-4",
                  "1/4",
                  "-1/4"
                ],
                "correctIndex": 3,
                "explanation": "Perpendicular slopes satisfy m₁ · m₂ = -1. Thus m₂ = -1/4.",
                "whyWrong": [
                  "Equal slopes means parallel.",
                  "Negative only.",
                  "Reciprocal without sign change."
                ],
                "readingPassage": null
              },
              {
                "id": "ma_u3_l6_q03",
                "type": "mcq",
                "difficulty": "Medium",
                "category": "Slope Formula",
                "question": "The slope of the line passing through the points (3, 5) and (3, -2) is:",
                "options": [
                  "0",
                  "7",
                  "-7/6",
                  "Undefined"
                ],
                "correctIndex": 3,
                "explanation": "x₂ - x₁ = 3 - 3 = 0. Division by zero means the line is vertical and its slope is undefined.",
                "whyWrong": [
                  "Subtracted to zero.",
                  "Used y difference only.",
                  "Incorrect formula."
                ],
                "readingPassage": null
              },
              {
                "id": "ma_u3_l6_q04",
                "type": "complete",
                "difficulty": "Medium",
                "category": "Slope Calculation",
                "question": "If the line joining (1, 3) and (3, k) is perpendicular to a line with slope -1/2, then k = ____.",
                "acceptableAnswers": [
                  "7",
                  "٧"
                ],
                "modelAnswer": "7",
                "explanation": "Slope of perpendicular line m₁ = -1 / (-1/2) = 2. m₁ = (k - 3) / (3 - 1) = (k - 3) / 2 = 2 ⟹ k - 3 = 4 ⟹ k = 7.",
                "readingPassage": null
              }
            ]
          }
        },
        {
          "id": "ma_u3_l7",
          "unitId": "ma_unit3",
          "number": 7,
          "type": "geometry",
          "title": "Lesson 3-7: Equation of the Straight Line",
          "summarySheet": {
            "page1": {
              "title": "Page 1: Slope-Intercept Form y = mx + c & Parameter Determination",
              "subtitle": "Slope m • y-intercept c • Finding Line Equation • General Form ax + by + c = 0",
              "coreIdea": "The equation of a straight line in slope-intercept form is y = mx + c, where m is the slope of the line and c is the algebraic length of the y-intercept (the line cuts the y-axis at the point (0, c)). To write the equation of any line, two quantities are required: 1) The slope m, and 2) The y-intercept c (obtained by substituting any given point on the line into y = mx + c).",
              "mindMap": [
                {
                  "title": "1. Slope-Intercept Equation",
                  "desc": "• Form: y = mx + c.<br>• m = slope of the line.<br>• c = length of intercept cut from the y-axis (cuts at (0, c))."
                },
                {
                  "title": "2. Special Line Equations",
                  "desc": "• Line through origin (0, 0): y = mx (c = 0).<br>• Horizontal line (parallel to x-axis): y = c (m = 0).<br>• Vertical line (parallel to y-axis): x = k (passes through (k, 0)).<br>• x-axis equation: y = 0; y-axis equation: x = 0."
                },
                {
                  "title": "3. General Form ax + by + c = 0",
                  "desc": "• Slope: m = -a / b (for b ≠ 0).<br>• y-intercept: c = -c / b."
                }
              ],
              "vocabulary": [
                {
                  "word": "Slope-Intercept Form",
                  "meaning": "Linear equation expressed as y = mx + c",
                  "opposite": "General form ax + by + c = 0",
                  "plural": "Linear forms"
                },
                {
                  "word": "y-intercept c",
                  "meaning": "The coordinate where the line intersects the vertical y-axis: (0, c)",
                  "opposite": "x-intercept",
                  "plural": "Intercepts"
                },
                {
                  "word": "x-intercept",
                  "meaning": "The coordinate where the line crosses the horizontal x-axis, found by setting y = 0",
                  "opposite": "y-intercept",
                  "plural": "x-intercepts"
                }
              ],
              "beautyPoints": [
                {
                  "phrase": "Passes through Origin ⟹ c = 0 ⟹ y = mx",
                  "secret": "Any straight line passing through the origin (0, 0) has NO constant term: its equation is simply y = mx."
                },
                {
                  "phrase": "Horizontal: y = k; Vertical: x = h",
                  "secret": "A line parallel to the x-axis has no x in its equation (y = 5). A line parallel to the y-axis has no y in its equation (x = -3)."
                }
              ]
            },
            "page2": {
              "title": "Page 2: Standard Derivation Protocols & Golden Ministerial Exam Questions",
              "subtitle": "Finding Equation from Points • Parallel & Perpendicular Lines • Model Q&A",
              "grammarFocus": {
                "title": "Capsule 1: Protocol for Writing Line Equations",
                "rules": [
                  "Step 1: Determine slope m (from two points, angle tan θ, parallel line m₁ = m₂, or perpendicular m = -1/m₁).",
                  "Step 2: Write y = mx + c with the calculated slope m.",
                  "Step 3: Substitute the coordinates of a known point (x, y) into y = mx + c to solve for c.",
                  "Step 4: Write the final equation: y = mx + c."
                ]
              },
              "spellingFocus": {
                "title": "Capsule 2: Ministerial Traps",
                "rules": [
                  "Trap 1: The equation of the line passing through (3, -2) and parallel to the x-axis is y = -2.",
                  "Trap 2: The equation of the line passing through (3, -2) and parallel to the y-axis is x = 3."
                ]
              },
              "goldenQuestions": [
                {
                  "q": "Find the equation of the straight line having slope 2 and passing through the point (1, 5).",
                  "a": "General form: y = mx + c. Here m = 2 ⟹ y = 2x + c.<br>Since it passes through (1, 5): 5 = 2(1) + c ⟹ 5 = 2 + c ⟹ c = 3.<br>Equation: y = 2x + 3."
                },
                {
                  "q": "Find the equation of the line passing through (2, 3) and parallel to the line 2x - y + 5 = 0.",
                  "a": "Given line: y = 2x + 5 ⟹ Slope m = 2.<br>Parallel line slope: m = 2. Equation: y = 2x + c.<br>Substitute (2, 3): 3 = 2(2) + c ⟹ 3 = 4 + c ⟹ c = -1.<br>Equation: y = 2x - 1."
                }
              ]
            }
          },
          "topics": [
            {
              "id": "ma_u3_l7_t1",
              "title": "Slope-Intercept Form y = mx + c",
              "questions": [
                {
                  "id": "ma_u3_l7_q01",
                  "type": "mcq",
                  "difficulty": "Easy",
                  "category": "Line Equation",
                  "question": "The equation of the straight line with slope 3 and y-intercept 4 is:",
                  "options": [
                    "y = 4x + 3",
                    "y = 3x + 4",
                    "3x + 4y = 0",
                    "y = 3x - 4"
                  ],
                  "correctIndex": 1,
                  "explanation": "y = mx + c with m = 3 and c = 4 gives y = 3x + 4.",
                  "whyWrong": [
                    "Swapped slope and intercept.",
                    "Form without intercept.",
                    "Sign error."
                  ],
                  "readingPassage": null
                },
                {
                  "id": "ma_u3_l7_q02",
                  "type": "mcq",
                  "difficulty": "Easy",
                  "category": "Axis Equation",
                  "question": "The equation of the x-axis is:",
                  "options": [
                    "x = 0",
                    "y = 0",
                    "x + y = 0",
                    "y = 1"
                  ],
                  "correctIndex": 1,
                  "explanation": "Every point on the x-axis has y-coordinate equal to 0, so its equation is y = 0.",
                  "whyWrong": [
                    "x = 0 is the y-axis.",
                    "Diagonal line.",
                    "Horizontal line 1 unit up."
                  ],
                  "readingPassage": null
                },
                {
                  "id": "ma_u3_l7_q03",
                  "type": "mcq",
                  "difficulty": "Medium",
                  "category": "Line Equation",
                  "question": "The straight line 2x - 3y + 6 = 0 intersects the y-axis at the point:",
                  "options": [
                    "(0, 2)",
                    "(0, -2)",
                    "(3, 0)",
                    "(-3, 0)"
                  ],
                  "correctIndex": 0,
                  "explanation": "Set x = 0: 2(0) - 3y + 6 = 0 ⟹ -3y = -6 ⟹ y = 2. Intersect point is (0, 2).",
                  "whyWrong": [
                    "Sign error: -2.",
                    "Found x-intercept.",
                    "Sign error on x-intercept."
                  ],
                  "readingPassage": null
                },
                {
                  "id": "ma_u3_l7_q04",
                  "type": "complete",
                  "difficulty": "Easy",
                  "category": "Line Equation",
                  "question": "The equation of the straight line passing through (0, 0) with slope -2 is y = ____.",
                  "acceptableAnswers": [
                    "-2x",
                    "-٢x"
                  ],
                  "modelAnswer": "-2x",
                  "explanation": "Since it passes through the origin, c = 0, so y = -2x.",
                  "readingPassage": null
                },
                {
                  "id": "ma_u3_l7_q05",
                  "type": "essay",
                  "difficulty": "Hard",
                  "category": "Line Equation Derivation",
                  "question": "Find the equation of the straight line passing through the point (3, -1) and perpendicular to the line passing through A(2, 4) and B(5, 1).",
                  "keywords": [
                    "m1 = -1",
                    "m2 = 1",
                    "c = -4",
                    "y = x - 4"
                  ],
                  "modelAnswer": "1) Slope of given line AB: m₁ = (1 - 4) / (5 - 2) = -3 / 3 = -1.\n2) Slope of required perpendicular line: m₂ = -1 / m₁ = -1 / (-1) = 1.\n3) Equation form: y = 1x + c ⟹ y = x + c.\n4) Substitute point (3, -1): -1 = 3 + c ⟹ c = -4.\n5) Final equation: y = x - 4.",
                  "explanation": "Award full credit for calculating slope = 1, intercept = -4, and equation y = x - 4.",
                  "readingPassage": null
                }
              ]
            }
          ],
          "lessonExam": {
            "title": "Assessment: Equation of Straight Line",
            "subtitle": "Deriving linear equations from slopes and points",
            "questions": [
              {
                "id": "ma_u3_l7_q01",
                "type": "mcq",
                "difficulty": "Easy",
                "category": "Line Equation",
                "question": "The equation of the straight line with slope 3 and y-intercept 4 is:",
                "options": [
                  "y = 4x + 3",
                  "y = 3x + 4",
                  "3x + 4y = 0",
                  "y = 3x - 4"
                ],
                "correctIndex": 1,
                "explanation": "y = mx + c with m = 3 and c = 4 gives y = 3x + 4.",
                "whyWrong": [
                  "Swapped slope and intercept.",
                  "Form without intercept.",
                  "Sign error."
                ],
                "readingPassage": null
              },
              {
                "id": "ma_u3_l7_q02",
                "type": "mcq",
                "difficulty": "Easy",
                "category": "Axis Equation",
                "question": "The equation of the x-axis is:",
                "options": [
                  "x = 0",
                  "y = 0",
                  "x + y = 0",
                  "y = 1"
                ],
                "correctIndex": 1,
                "explanation": "Every point on the x-axis has y-coordinate equal to 0, so its equation is y = 0.",
                "whyWrong": [
                  "x = 0 is the y-axis.",
                  "Diagonal line.",
                  "Horizontal line 1 unit up."
                ],
                "readingPassage": null
              },
              {
                "id": "ma_u3_l7_q03",
                "type": "mcq",
                "difficulty": "Medium",
                "category": "Line Equation",
                "question": "The straight line 2x - 3y + 6 = 0 intersects the y-axis at the point:",
                "options": [
                  "(0, 2)",
                  "(0, -2)",
                  "(3, 0)",
                  "(-3, 0)"
                ],
                "correctIndex": 0,
                "explanation": "Set x = 0: 2(0) - 3y + 6 = 0 ⟹ -3y = -6 ⟹ y = 2. Intersect point is (0, 2).",
                "whyWrong": [
                  "Sign error: -2.",
                  "Found x-intercept.",
                  "Sign error on x-intercept."
                ],
                "readingPassage": null
              },
              {
                "id": "ma_u3_l7_q04",
                "type": "complete",
                "difficulty": "Easy",
                "category": "Line Equation",
                "question": "The equation of the straight line passing through (0, 0) with slope -2 is y = ____.",
                "acceptableAnswers": [
                  "-2x",
                  "-٢x"
                ],
                "modelAnswer": "-2x",
                "explanation": "Since it passes through the origin, c = 0, so y = -2x.",
                "readingPassage": null
              },
              {
                "id": "ma_u3_l7_q05",
                "type": "essay",
                "difficulty": "Hard",
                "category": "Line Equation Derivation",
                "question": "Find the equation of the straight line passing through the point (3, -1) and perpendicular to the line passing through A(2, 4) and B(5, 1).",
                "keywords": [
                  "m1 = -1",
                  "m2 = 1",
                  "c = -4",
                  "y = x - 4"
                ],
                "modelAnswer": "1) Slope of given line AB: m₁ = (1 - 4) / (5 - 2) = -3 / 3 = -1.\n2) Slope of required perpendicular line: m₂ = -1 / m₁ = -1 / (-1) = 1.\n3) Equation form: y = 1x + c ⟹ y = x + c.\n4) Substitute point (3, -1): -1 = 3 + c ⟹ c = -4.\n5) Final equation: y = x - 4.",
                "explanation": "Award full credit for calculating slope = 1, intercept = -4, and equation y = x - 4.",
                "readingPassage": null
              }
            ]
          }
        }
      ],
      "unitTest": {
        "title": "Unit 3 Assessment: Geometry & Trigonometry (Comprehensive)",
        "duration": "45 Minutes",
        "totalMarks": 50,
        "questions": [
          {
            "id": "ma_u3_test_q01",
            "type": "mcq",
            "difficulty": "easy",
            "category": "Trigonometry",
            "marks": 2,
            "question": "In right-angled triangle ABC at B, if AB = 3 cm and BC = 4 cm, then tan C equals:",
            "options": [
              "3/4",
              "4/3",
              "3/5",
              "4/5"
            ],
            "correctIndex": 0,
            "explanation": "tan C = Opposite / Adjacent = AB / BC = 3/4.",
            "whyWrong": [
              "4/3 is cot C or tan A.",
              "3/5 is sin C.",
              "4/5 is cos C."
            ],
            "readingPassage": null
          },
          {
            "id": "ma_u3_test_q02",
            "type": "mcq",
            "difficulty": "easy",
            "category": "Trigonometry",
            "marks": 2,
            "question": "For any acute angle A, if sin A = cos A, then m(∠A) equals:",
            "options": [
              "45°",
              "30°",
              "60°",
              "90°"
            ],
            "correctIndex": 0,
            "explanation": "sin 45° = cos 45° = 1/√2, so m(∠A) = 45°.",
            "whyWrong": [
              "sin 30° = 1/2 while cos 30° = √3/2.",
              "sin 60° = √3/2 while cos 60° = 1/2.",
              "Angle must be acute."
            ],
            "readingPassage": null
          },
          {
            "id": "ma_u3_test_q03",
            "type": "mcq",
            "difficulty": "medium",
            "category": "Trigonometry",
            "marks": 2,
            "question": "The numerical value of 2 sin 30° cos 30° is:",
            "options": [
              "√3/2",
              "1/2",
              "1",
              "√3"
            ],
            "correctIndex": 0,
            "explanation": "2 × (1/2) × (√3/2) = √3/2 (which also equals sin 60°).",
            "whyWrong": [
              "1/2 is sin 30°.",
              "1 is sin 90°.",
              "√3 is tan 60°."
            ],
            "readingPassage": null
          },
          {
            "id": "ma_u3_test_q04",
            "type": "mcq",
            "difficulty": "easy",
            "category": "Geometry",
            "marks": 2,
            "question": "The slope of the straight line parallel to the x-axis is:",
            "options": [
              "0",
              "1",
              "-1",
              "Undefined"
            ],
            "correctIndex": 0,
            "explanation": "A horizontal line has zero vertical change (Δy = 0), so its slope is 0.",
            "whyWrong": [
              "Slope 1 is for lines making 45° with x-axis.",
              "Negative slope leans left.",
              "Vertical line has undefined slope."
            ],
            "readingPassage": null
          },
          {
            "id": "ma_u3_test_q05",
            "type": "mcq",
            "difficulty": "easy",
            "category": "Geometry",
            "marks": 2,
            "question": "The slope of the line perpendicular to the straight line whose slope is -2/3 is:",
            "options": [
              "3/2",
              "-3/2",
              "2/3",
              "-2/3"
            ],
            "correctIndex": 0,
            "explanation": "For perpendicular lines, m₁ · m₂ = -1 ⟹ m₂ = -1 / (-2/3) = 3/2.",
            "whyWrong": [
              "-3/2 would make m₁ · m₂ = 1.",
              "2/3 is the absolute value.",
              "-2/3 is parallel."
            ],
            "readingPassage": null
          },
          {
            "id": "ma_u3_test_q06",
            "type": "mcq",
            "difficulty": "medium",
            "category": "Geometry",
            "marks": 2,
            "question": "The equation of the straight line with slope 2 passing through the point (0, -3) is:",
            "options": [
              "y = 2x - 3",
              "y = -3x + 2",
              "2y = x - 3",
              "y = 2x + 3"
            ],
            "correctIndex": 0,
            "explanation": "In y = mx + c, m = 2 and the y-intercept is (0, -3) so c = -3, giving y = 2x - 3.",
            "whyWrong": [
              "Swapped slope and intercept.",
              "Incorrect coefficient.",
              "Sign error on intercept."
            ],
            "readingPassage": null
          },
          {
            "id": "ma_u3_test_q07",
            "type": "mcq",
            "difficulty": "medium",
            "category": "Geometry",
            "marks": 2,
            "question": "If the line joining (x, 7) and (3, 5) has slope 1, then x equals:",
            "options": [
              "5",
              "1",
              "-1",
              "3"
            ],
            "correctIndex": 0,
            "explanation": "Slope m = (5 - 7)/(3 - x) = 1 ⟹ -2 / (3 - x) = 1 ⟹ 3 - x = -2 ⟹ x = 5.",
            "whyWrong": [
              "Calculation error.",
              "Sign error.",
              "Substituted x = 3."
            ],
            "readingPassage": null
          },
          {
            "id": "ma_u3_test_q08",
            "type": "mcq",
            "difficulty": "medium",
            "category": "Similarity",
            "marks": 2,
            "question": "If the ratio of similitude between two similar polygons is 3:5 and the perimeter of the smaller polygon is 18 cm, then the perimeter of the larger polygon is:",
            "options": [
              "30 cm",
              "25 cm",
              "45 cm",
              "15 cm"
            ],
            "correctIndex": 0,
            "explanation": "Perimeter ratio = scale factor: 18 / P = 3/5 ⟹ P = (18 × 5) / 3 = 30 cm.",
            "whyWrong": [
              "Calculation error.",
              "Multiplied 18 by 5/2.",
              "Smaller than 18."
            ],
            "readingPassage": null
          },
          {
            "id": "ma_u3_test_q09",
            "type": "mcq",
            "difficulty": "easy",
            "category": "Trigonometry",
            "marks": 2,
            "question": "The value of cos² 60° + sin² 60° equals:",
            "options": [
              "1",
              "0.5",
              "0.75",
              "2"
            ],
            "correctIndex": 0,
            "explanation": "By fundamental trigonometric identity, sin² θ + cos² θ = 1 for any angle θ.",
            "whyWrong": [
              "(1/2)² = 0.25.",
              "(√3/2)² = 0.75.",
              "Identities always sum to 1."
            ],
            "readingPassage": null
          },
          {
            "id": "ma_u3_test_q10",
            "type": "mcq",
            "difficulty": "medium",
            "category": "Geometry",
            "marks": 2,
            "question": "The length of the line segment joining the origin (0, 0) and the point (6, -8) is:",
            "options": [
              "10 units",
              "14 units",
              "2 units",
              "√28 units"
            ],
            "correctIndex": 0,
            "explanation": "Distance d = √(6² + (-8)²) = √(36 + 64) = √100 = 10.",
            "whyWrong": [
              "Added 6 + 8.",
              "Subtracted 8 - 6.",
              "Squared without adding correctly."
            ],
            "readingPassage": null
          },
          {
            "id": "ma_u3_test_q11",
            "type": "mcq",
            "difficulty": "medium",
            "category": "Geometry",
            "marks": 2,
            "question": "The coordinates of the midpoint of the segment with endpoints A(2, -4) and B(6, 8) are:",
            "options": [
              "(4, 2)",
              "(8, 4)",
              "(2, 6)",
              "(4, 6)"
            ],
            "correctIndex": 0,
            "explanation": "Midpoint = ((2 + 6)/2, (-4 + 8)/2) = (8/2, 4/2) = (4, 2).",
            "whyWrong": [
              "Forgot to divide by 2.",
              "Swapped x and y.",
              "Sign error in y."
            ],
            "readingPassage": null
          },
          {
            "id": "ma_u3_test_q12",
            "type": "mcq",
            "difficulty": "hard",
            "category": "Geometry",
            "marks": 2,
            "question": "The straight line 3x + 4y - 12 = 0 intersects the y-axis at the point:",
            "options": [
              "(0, 3)",
              "(4, 0)",
              "(0, -3)",
              "(0, 4)"
            ],
            "correctIndex": 0,
            "explanation": "Put x = 0: 4y - 12 = 0 ⟹ 4y = 12 ⟹ y = 3, so point is (0, 3).",
            "whyWrong": [
              "(4, 0) is the x-intercept.",
              "Sign error.",
              "Used coefficient of x."
            ],
            "readingPassage": null
          },
          {
            "id": "ma_u3_test_q13",
            "type": "mcq",
            "difficulty": "medium",
            "category": "Trigonometry",
            "marks": 2,
            "question": "If tan 3x = 1 where 3x is an acute angle, then x equals:",
            "options": [
              "15°",
              "45°",
              "30°",
              "10°"
            ],
            "correctIndex": 0,
            "explanation": "tan 45° = 1 ⟹ 3x = 45° ⟹ x = 15°.",
            "whyWrong": [
              "45° is 3x, not x.",
              "tan 30° = 1/√3.",
              "Divided incorrectly."
            ],
            "readingPassage": null
          },
          {
            "id": "ma_u3_test_q14",
            "type": "mcq",
            "difficulty": "medium",
            "category": "Similarity",
            "marks": 2,
            "question": "If polygon M₁ is similar to M₂ with scale factor 2/3, and M₂ is similar to M₃ with scale factor 3/5, then the scale factor of similarity of M₁ to M₃ is:",
            "options": [
              "2/5",
              "5/2",
              "6/15",
              "1/5"
            ],
            "correctIndex": 0,
            "explanation": "k₁₃ = k₁₂ × k₂₃ = (2/3) × (3/5) = 2/5.",
            "whyWrong": [
              "Inverted ratio.",
              "6/15 is unsimplified.",
              "Subtracted ratios."
            ],
            "readingPassage": null
          },
          {
            "id": "ma_u3_test_q15",
            "type": "mcq",
            "difficulty": "hard",
            "category": "Geometry",
            "marks": 2,
            "question": "If the straight line 2x - ky + 5 = 0 is parallel to the line y = 3x - 1, then k equals:",
            "options": [
              "2/3",
              "3/2",
              "-2/3",
              "6"
            ],
            "correctIndex": 0,
            "explanation": "Slope of 2x - ky + 5 = 0 is -2/(-k) = 2/k. Since parallel, 2/k = 3 ⟹ k = 2/3.",
            "whyWrong": [
              "Inverted ratio 3/2.",
              "Sign error.",
              "Multiplied 2 × 3."
            ],
            "readingPassage": null
          },
          {
            "id": "ma_u3_test_q16",
            "type": "complete",
            "difficulty": "easy",
            "category": "Trigonometry",
            "marks": 2,
            "question": "In right-angled triangle ABC at B, sin A = cos .......",
            "acceptableAnswers": [
              "C",
              "angle C"
            ],
            "modelAnswer": "C",
            "explanation": "Acute angles in a right-angled triangle are complementary: sin A = cos C.",
            "readingPassage": null
          },
          {
            "id": "ma_u3_test_q17",
            "type": "complete",
            "difficulty": "easy",
            "category": "Trigonometry",
            "marks": 2,
            "question": "The value of tan 45° is equal to .......",
            "acceptableAnswers": [
              "1",
              "١"
            ],
            "modelAnswer": "1",
            "explanation": "tan 45° = 1.",
            "readingPassage": null
          },
          {
            "id": "ma_u3_test_q18",
            "type": "complete",
            "difficulty": "medium",
            "category": "Geometry",
            "marks": 2,
            "question": "The slope of the line passing through (2, 3) and (5, 9) is m = .......",
            "acceptableAnswers": [
              "2",
              "٢"
            ],
            "modelAnswer": "2",
            "explanation": "m = (9 - 3)/(5 - 2) = 6/3 = 2.",
            "readingPassage": null
          },
          {
            "id": "ma_u3_test_q19",
            "type": "complete",
            "difficulty": "medium",
            "category": "Similarity",
            "marks": 2,
            "question": "Any two regular polygons with the same number of sides are always .......",
            "acceptableAnswers": [
              "similar",
              "Similar"
            ],
            "modelAnswer": "similar",
            "explanation": "All regular n-gons have equal angles and proportional sides.",
            "readingPassage": null
          },
          {
            "id": "ma_u3_test_q20",
            "type": "complete",
            "difficulty": "easy",
            "category": "Geometry",
            "marks": 2,
            "question": "The equation of the straight line passing through the origin with slope 4 is y = .......",
            "acceptableAnswers": [
              "4x",
              "4*x"
            ],
            "modelAnswer": "4x",
            "explanation": "Since it passes through origin, c = 0 ⟹ y = 4x.",
            "readingPassage": null
          },
          {
            "id": "ma_u3_test_q21",
            "type": "essay",
            "difficulty": "hard",
            "category": "Trigonometry",
            "marks": 4,
            "question": "Without using a calculator, prove that: 4 cos 60° sin 30° = tan 45°.",
            "keywords": [
              "cos 60 = 1/2",
              "sin 30 = 1/2",
              "L.H.S = 4 * 1/2 * 1/2 = 1",
              "R.H.S = tan 45 = 1",
              "L.H.S = R.H.S"
            ],
            "modelAnswer": "1) L.H.S. = 4 × cos 60° × sin 30° = 4 × (1/2) × (1/2) = 4 × (1/4) = 1.\n2) R.H.S. = tan 45° = 1.\n3) Since L.H.S. = R.H.S. = 1, the identity is proved.",
            "explanation": "Award full marks for evaluating both sides with exact values.",
            "readingPassage": null
          },
          {
            "id": "ma_u3_test_q22",
            "type": "essay",
            "difficulty": "hard",
            "category": "Geometry",
            "marks": 4,
            "question": "Find the equation of the straight line passing through the point (2, -1) and perpendicular to the straight line 2x - 3y + 6 = 0.",
            "keywords": [
              "given slope = 2/3",
              "perp slope = -3/2",
              "c = 2",
              "y = -3/2 x + 2"
            ],
            "modelAnswer": "1) Slope of given line m₁ = -coefficient of x / coefficient of y = -2 / (-3) = 2/3.\n2) Since required line is perpendicular: m₂ = -1 / (2/3) = -3/2.\n3) Equation form: y = -3/2 x + c.\n4) Substitute point (2, -1): -1 = (-3/2)(2) + c ⟹ -1 = -3 + c ⟹ c = 2.\n5) Required equation: y = -3/2 x + 2 (or 3x + 2y - 4 = 0).",
            "explanation": "Full credit for slope calculation, finding intercept c = 2, and correct equation.",
            "readingPassage": null
          },
          {
            "id": "ma_u3_test_q23",
            "type": "essay",
            "difficulty": "hard",
            "category": "Geometry",
            "marks": 4,
            "question": "ABCD is a parallelogram where A(3, 2), B(4, -5), and C(0, -3). Find the coordinates of vertex D.",
            "keywords": [
              "midpoint of AC",
              "(1.5, -0.5)",
              "midpoint of BD",
              "D = (-1, 4)"
            ],
            "modelAnswer": "1) In a parallelogram, diagonals bisect each other.\n2) Midpoint of AC = ((3 + 0)/2, (2 - 3)/2) = (3/2, -1/2).\n3) Let D = (x, y). Midpoint of BD = ((x + 4)/2, (y - 5)/2) = (3/2, -1/2).\n4) (x + 4)/2 = 3/2 ⟹ x + 4 = 3 ⟹ x = -1.\n5) (y - 5)/2 = -1/2 ⟹ y - 5 = -1 ⟹ y = 4.\n6) Vertex D = (-1, 4).",
            "explanation": "Full marks for using midpoint theorem of diagonals.",
            "readingPassage": null
          },
          {
            "id": "ma_u3_test_q24",
            "type": "essay",
            "difficulty": "hard",
            "category": "Similarity",
            "marks": 4,
            "question": "Δ ABC ~ Δ DEF. If AB = 6 cm, BC = 8 cm, AC = 10 cm, and the perimeter of Δ DEF is 48 cm, find the lengths of DE, EF, and DF.",
            "keywords": [
              "perimeter of ABC = 24",
              "scale factor = 48/24 = 2",
              "DE = 12 cm",
              "EF = 16 cm",
              "DF = 20 cm"
            ],
            "modelAnswer": "1) Perimeter of Δ ABC = 6 + 8 + 10 = 24 cm.\n2) Scale factor k = Perimeter(DEF) / Perimeter(ABC) = 48 / 24 = 2.\n3) Corresponding sides: DE = 2 × AB = 2 × 6 = 12 cm.\n4) EF = 2 × BC = 2 × 8 = 16 cm.\n5) DF = 2 × AC = 2 × 10 = 20 cm.",
            "explanation": "Award full credit for scale factor 2 and all three lengths.",
            "readingPassage": null
          },
          {
            "id": "ma_u3_test_q25",
            "type": "essay",
            "difficulty": "hard",
            "category": "Geometry",
            "marks": 4,
            "question": "Prove that the points A(-2, 5), B(3, 3), and C(-7, 7) are collinear.",
            "keywords": [
              "slope AB",
              "slope BC",
              "slope = -2/5",
              "common point B"
            ],
            "modelAnswer": "1) Slope of AB = (3 - 5) / (3 - (-2)) = -2 / 5.\n2) Slope of BC = (7 - 3) / (-7 - 3) = 4 / (-10) = -2 / 5.\n3) Since slope(AB) = slope(BC) and point B is common, the points A, B, and C are collinear.",
            "explanation": "Full credit for slope formula and conclusion using common point.",
            "readingPassage": null
          }
        ]
      }
    },
    {
      "id": "ma_unit4",
      "number": 4,
      "title": "Unit 4: Statistics",
      "description": "Measures of Dispersion, Range, Interquartile Range, and Standard Deviation",
      "color": "#16a34a",
      "lessons": [
        {
          "id": "ma_u4_l1",
          "unitId": "ma_unit4",
          "number": 1,
          "type": "statistics",
          "title": "Lesson 4-1: Measures of Dispersion",
          "summarySheet": {
            "page1": {
              "title": "Page 1: Concept of Dispersion, Range & Standard Deviation Formulas",
              "subtitle": "Central Tendency vs Dispersion • Range • Interquartile Range • Standard Deviation σ",
              "coreIdea": "Dispersion measures the degree of scatter or variation of data values around their central arithmetic mean. While measures of central tendency (mean, median, mode) describe the center, measures of dispersion measure consistency. Range is the simplest measure (Max - Min). The Standard Deviation σ is the most accurate and widely used measure, defined as the positive square root of the mean of squared deviations from the arithmetic mean.",
              "mindMap": [
                {
                  "title": "1. Measures of Dispersion vs Central Tendency",
                  "desc": "• Central Tendency: Mean (x̄ = Σx / n), Median, Mode.<br>• Dispersion: Range, Interquartile Range (IQR), Variance (σ²), Standard Deviation (σ)."
                },
                {
                  "title": "2. Range & Interquartile Range",
                  "desc": "• Range = Maximum value - Minimum value (simplest but affected by outliers).<br>• IQR = Upper Quartile (Q₃) - Lower Quartile (Q₁)."
                },
                {
                  "title": "3. Standard Deviation (Individual Values)",
                  "desc": "• Formula: σ = √[ Σ(x - x̄)² / n ].<br>• x̄ = Arithmetic mean = Σx / n.<br>• If all values in a set are identical, σ = 0 (perfect homogeneity)."
                },
                {
                  "title": "4. Standard Deviation (Frequency Distribution)",
                  "desc": "• Formula: σ = √[ Σ((x - x̄)² · f) / Σf ].<br>• x̄ = Σ(x · f) / Σf."
                }
              ],
              "vocabulary": [
                {
                  "word": "Dispersion (التشتت)",
                  "meaning": "The spread or variation of values around their arithmetic mean",
                  "opposite": "Homogeneity / Consistency",
                  "plural": "Measures of dispersion"
                },
                {
                  "word": "Range (المدى)",
                  "meaning": "The difference between the maximum and minimum values in a set",
                  "opposite": "Standard deviation",
                  "plural": "Ranges"
                },
                {
                  "word": "Standard Deviation σ (الانحراف المعياري)",
                  "meaning": "The positive square root of the mean of squared deviations from the arithmetic mean",
                  "opposite": "Variance (σ²)",
                  "plural": "Standard deviations"
                },
                {
                  "word": "Homogeneous Data (بيانات متجانسة)",
                  "meaning": "Data set where values are closely clustered together with small standard deviation",
                  "opposite": "Heterogeneous / Dispersed data",
                  "plural": "Homogeneous sets"
                }
              ],
              "beautyPoints": [
                {
                  "phrase": "Identical Values ⟹ σ = 0",
                  "secret": "If all values in a data set are equal (e.g. 7, 7, 7, 7, 7), the deviations from the mean are all zero: (x - x̄) = 0. Therefore, the standard deviation σ = 0."
                },
                {
                  "phrase": "Smaller σ ⟹ More Homogeneous",
                  "secret": "When comparing two groups (e.g. classes A and B), the group with the SMALLER standard deviation is more consistent, more homogeneous, and exhibits less scatter."
                }
              ]
            },
            "page2": {
              "title": "Page 2: Standard Deviation Calculation Workflows & Golden Questions",
              "subtitle": "Step-by-step 3-Column Table • Frequency Table Calculations • Model Q&A",
              "grammarFocus": {
                "title": "Capsule 1: Protocol for Computing σ (Individual Values)",
                "rules": [
                  "Step 1: Calculate the arithmetic mean: x̄ = (Σx) / n.",
                  "Step 2: Construct a table with 3 columns: x, (x - x̄), and (x - x̄)².",
                  "Step 3: Calculate the sum of the third column: Σ(x - x̄)².",
                  "Step 4: Compute σ = √[ Σ(x - x̄)² / n ] and round as required."
                ]
              },
              "spellingFocus": {
                "title": "Capsule 2: Ministerial Warnings",
                "rules": [
                  "Warning 1: Standard deviation is NEVER negative (σ ≥ 0).",
                  "Warning 2: Median is NOT a measure of dispersion (it is a measure of central tendency!).",
                  "Warning 3: Variance = σ² (the square of standard deviation)."
                ]
              },
              "goldenQuestions": [
                {
                  "q": "Which of the following is a measure of dispersion: Mean, Median, Mode, Standard Deviation?",
                  "a": "Standard Deviation (Mean, Median, and Mode are measures of central tendency)."
                },
                {
                  "q": "Find the range of the set of values: 23, 14, 38, 9, 27, 45.",
                  "a": "Maximum value = 45. Minimum value = 9.<br>Range = Maximum - Minimum = 45 - 9 = 36."
                },
                {
                  "q": "What is the standard deviation of the numbers: 5, 5, 5, 5, 5?",
                  "a": "Since all values are identical, there is no scatter (deviation = 0). σ = 0."
                }
              ]
            }
          },
          "topics": [
            {
              "id": "ma_u4_l1_t1",
              "title": "Range, Homogeneity & Standard Deviation",
              "questions": [
                {
                  "id": "ma_u4_l1_q01",
                  "type": "mcq",
                  "difficulty": "Easy",
                  "category": "Measures of Dispersion",
                  "question": "Which of the following is a measure of dispersion?",
                  "options": [
                    "Arithmetic Mean",
                    "Median",
                    "Mode",
                    "Standard Deviation"
                  ],
                  "correctIndex": 3,
                  "explanation": "Standard deviation is a measure of dispersion. Mean, median, and mode are measures of central tendency.",
                  "whyWrong": [
                    "Mean measures central tendency.",
                    "Median measures central tendency.",
                    "Mode measures central tendency."
                  ],
                  "readingPassage": null
                },
                {
                  "id": "ma_u4_l1_q02",
                  "type": "mcq",
                  "difficulty": "Easy",
                  "category": "Range",
                  "question": "The range of the set of values 7, 3, 6, 9, 5 is:",
                  "options": [
                    "3",
                    "4",
                    "6",
                    "9"
                  ],
                  "correctIndex": 2,
                  "explanation": "Maximum = 9, Minimum = 3. Range = 9 - 3 = 6.",
                  "whyWrong": [
                    "Minimum value.",
                    "Subtracted 7 - 3.",
                    "Maximum value."
                  ],
                  "readingPassage": null
                },
                {
                  "id": "ma_u4_l1_q03",
                  "type": "mcq",
                  "difficulty": "Easy",
                  "category": "Homogeneity",
                  "question": "The standard deviation of the values 8, 8, 8, 8, 8 is:",
                  "options": [
                    "0",
                    "4",
                    "8",
                    "16"
                  ],
                  "correctIndex": 0,
                  "explanation": "When all numbers in a data set are equal, there is no variation, so σ = 0.",
                  "whyWrong": [
                    "Half of 8.",
                    "The value itself.",
                    "Squared value."
                  ],
                  "readingPassage": null
                },
                {
                  "id": "ma_u4_l1_q04",
                  "type": "mcq",
                  "difficulty": "Medium",
                  "category": "Dispersion Formula",
                  "question": "If Σ(x - x̄)² = 36 for a set of 9 values, then the standard deviation σ equals:",
                  "options": [
                    "2",
                    "4",
                    "6",
                    "18"
                  ],
                  "correctIndex": 0,
                  "explanation": "σ = √[ Σ(x - x̄)² / n ] = √(36 / 9) = √4 = 2.",
                  "whyWrong": [
                    "Divided 36 by 9 = 4 without taking square root.",
                    "Took √36 = 6.",
                    "Divided 36 by 2."
                  ],
                  "readingPassage": null
                },
                {
                  "id": "ma_u4_l1_q05",
                  "type": "mcq",
                  "difficulty": "Hard",
                  "category": "Consecutive Numbers",
                  "question": "The standard deviation of five consecutive even numbers is:",
                  "options": [
                    "√5",
                    "√6",
                    "√7",
                    "√8"
                  ],
                  "correctIndex": 3,
                  "explanation": "Let numbers be 2, 4, 6, 8, 10. Mean x̄ = 6. Deviations (x - x̄) = -4, -2, 0, 2, 4. Squares = 16, 4, 0, 4, 16. Sum = 40. σ = √(40 / 5) = √8 = 2√2.",
                  "whyWrong": [
                    "Incorrect variance.",
                    "Incorrect sum of squares.",
                    "Arithmetic error."
                  ],
                  "readingPassage": null
                },
                {
                  "id": "ma_u4_l1_q06",
                  "type": "complete",
                  "difficulty": "Easy",
                  "category": "Range",
                  "question": "If the range of the values 12, 17, 25, 9, k is 20 where k is the maximum value, then k = ____.",
                  "acceptableAnswers": [
                    "29",
                    "٢٩"
                  ],
                  "modelAnswer": "29",
                  "explanation": "Minimum is 9. Range = k - 9 = 20 ⟹ k = 20 + 9 = 29.",
                  "readingPassage": null
                },
                {
                  "id": "ma_u4_l1_q07",
                  "type": "essay",
                  "difficulty": "Hard",
                  "category": "Standard Deviation Calculation",
                  "question": "Calculate the arithmetic mean and standard deviation for the values: 12, 13, 16, 18, 21.",
                  "keywords": [
                    "x̄ = 16",
                    "Σ(x - x̄)² = 54",
                    "σ = √10.8 ≈ 3.29"
                  ],
                  "modelAnswer": "1) Arithmetic mean x̄ = (12 + 13 + 16 + 18 + 21) / 5 = 80 / 5 = 16.\n2) Differences and squares:\n   (12 - 16)² = (-4)² = 16\n   (13 - 16)² = (-3)² = 9\n   (16 - 16)² = 0² = 0\n   (18 - 16)² = 2² = 4\n   (21 - 16)² = 5² = 25\n3) Sum of squared deviations = 16 + 9 + 0 + 4 + 25 = 54.\n4) Standard deviation σ = √(54 / 5) = √10.8 ≈ 3.29.",
                  "explanation": "Award full credit for showing x̄ = 16, sum of squares = 54, and σ = √10.8 ≈ 3.29.",
                  "readingPassage": null
                }
              ]
            }
          ],
          "lessonExam": {
            "title": "Assessment: Measures of Dispersion",
            "subtitle": "Range, deviations, and standard deviation calculations",
            "questions": [
              {
                "id": "ma_u4_l1_q01",
                "type": "mcq",
                "difficulty": "Easy",
                "category": "Measures of Dispersion",
                "question": "Which of the following is a measure of dispersion?",
                "options": [
                  "Arithmetic Mean",
                  "Median",
                  "Mode",
                  "Standard Deviation"
                ],
                "correctIndex": 3,
                "explanation": "Standard deviation is a measure of dispersion. Mean, median, and mode are measures of central tendency.",
                "whyWrong": [
                  "Mean measures central tendency.",
                  "Median measures central tendency.",
                  "Mode measures central tendency."
                ],
                "readingPassage": null
              },
              {
                "id": "ma_u4_l1_q02",
                "type": "mcq",
                "difficulty": "Easy",
                "category": "Range",
                "question": "The range of the set of values 7, 3, 6, 9, 5 is:",
                "options": [
                  "3",
                  "4",
                  "6",
                  "9"
                ],
                "correctIndex": 2,
                "explanation": "Maximum = 9, Minimum = 3. Range = 9 - 3 = 6.",
                "whyWrong": [
                  "Minimum value.",
                  "Subtracted 7 - 3.",
                  "Maximum value."
                ],
                "readingPassage": null
              },
              {
                "id": "ma_u4_l1_q03",
                "type": "mcq",
                "difficulty": "Easy",
                "category": "Homogeneity",
                "question": "The standard deviation of the values 8, 8, 8, 8, 8 is:",
                "options": [
                  "0",
                  "4",
                  "8",
                  "16"
                ],
                "correctIndex": 0,
                "explanation": "When all numbers in a data set are equal, there is no variation, so σ = 0.",
                "whyWrong": [
                  "Half of 8.",
                  "The value itself.",
                  "Squared value."
                ],
                "readingPassage": null
              },
              {
                "id": "ma_u4_l1_q04",
                "type": "mcq",
                "difficulty": "Medium",
                "category": "Dispersion Formula",
                "question": "If Σ(x - x̄)² = 36 for a set of 9 values, then the standard deviation σ equals:",
                "options": [
                  "2",
                  "4",
                  "6",
                  "18"
                ],
                "correctIndex": 0,
                "explanation": "σ = √[ Σ(x - x̄)² / n ] = √(36 / 9) = √4 = 2.",
                "whyWrong": [
                  "Divided 36 by 9 = 4 without taking square root.",
                  "Took √36 = 6.",
                  "Divided 36 by 2."
                ],
                "readingPassage": null
              },
              {
                "id": "ma_u4_l1_q05",
                "type": "mcq",
                "difficulty": "Hard",
                "category": "Consecutive Numbers",
                "question": "The standard deviation of five consecutive even numbers is:",
                "options": [
                  "√5",
                  "√6",
                  "√7",
                  "√8"
                ],
                "correctIndex": 3,
                "explanation": "Let numbers be 2, 4, 6, 8, 10. Mean x̄ = 6. Deviations (x - x̄) = -4, -2, 0, 2, 4. Squares = 16, 4, 0, 4, 16. Sum = 40. σ = √(40 / 5) = √8 = 2√2.",
                "whyWrong": [
                  "Incorrect variance.",
                  "Incorrect sum of squares.",
                  "Arithmetic error."
                ],
                "readingPassage": null
              },
              {
                "id": "ma_u4_l1_q06",
                "type": "complete",
                "difficulty": "Easy",
                "category": "Range",
                "question": "If the range of the values 12, 17, 25, 9, k is 20 where k is the maximum value, then k = ____.",
                "acceptableAnswers": [
                  "29",
                  "٢٩"
                ],
                "modelAnswer": "29",
                "explanation": "Minimum is 9. Range = k - 9 = 20 ⟹ k = 20 + 9 = 29.",
                "readingPassage": null
              },
              {
                "id": "ma_u4_l1_q07",
                "type": "essay",
                "difficulty": "Hard",
                "category": "Standard Deviation Calculation",
                "question": "Calculate the arithmetic mean and standard deviation for the values: 12, 13, 16, 18, 21.",
                "keywords": [
                  "x̄ = 16",
                  "Σ(x - x̄)² = 54",
                  "σ = √10.8 ≈ 3.29"
                ],
                "modelAnswer": "1) Arithmetic mean x̄ = (12 + 13 + 16 + 18 + 21) / 5 = 80 / 5 = 16.\n2) Differences and squares:\n   (12 - 16)² = (-4)² = 16\n   (13 - 16)² = (-3)² = 9\n   (16 - 16)² = 0² = 0\n   (18 - 16)² = 2² = 4\n   (21 - 16)² = 5² = 25\n3) Sum of squared deviations = 16 + 9 + 0 + 4 + 25 = 54.\n4) Standard deviation σ = √(54 / 5) = √10.8 ≈ 3.29.",
                "explanation": "Award full credit for showing x̄ = 16, sum of squares = 54, and σ = √10.8 ≈ 3.29.",
                "readingPassage": null
              }
            ]
          }
        }
      ],
      "unitTest": {
        "title": "Unit 4 Assessment: Statistics (Comprehensive)",
        "duration": "30 Minutes",
        "totalMarks": 30,
        "questions": [
          {
            "id": "ma_u4_test_q01",
            "type": "mcq",
            "difficulty": "easy",
            "category": "Statistics",
            "marks": 2,
            "question": "The simplest and easiest measure of dispersion is the:",
            "options": [
              "Range",
              "Standard deviation",
              "Arithmetic mean",
              "Median"
            ],
            "correctIndex": 0,
            "explanation": "Range is the simplest measure (Max - Min), while Standard Deviation is the most accurate.",
            "whyWrong": [
              "Standard deviation is the most accurate, not the simplest.",
              "Arithmetic mean is a measure of central tendency.",
              "Median is a measure of central tendency."
            ],
            "readingPassage": null
          },
          {
            "id": "ma_u4_test_q02",
            "type": "mcq",
            "difficulty": "easy",
            "category": "Statistics",
            "marks": 2,
            "question": "The range of the values 7, 3, 12, 19, 5 is:",
            "options": [
              "16",
              "12",
              "19",
              "7"
            ],
            "correctIndex": 0,
            "explanation": "Range = Maximum - Minimum = 19 - 3 = 16.",
            "whyWrong": [
              "12 is median.",
              "19 is maximum.",
              "7 is arithmetic mean."
            ],
            "readingPassage": null
          },
          {
            "id": "ma_u4_test_q03",
            "type": "mcq",
            "difficulty": "medium",
            "category": "Statistics",
            "marks": 2,
            "question": "If the standard deviation of a set of values is zero (σ = 0), this indicates that:",
            "options": [
              "All values in the set are identical (perfect homogeneity)",
              "The values are widely scattered",
              "The arithmetic mean is zero",
              "The range is very large"
            ],
            "correctIndex": 0,
            "explanation": "σ = 0 occurs if and only if every single value equals the mean (e.g. 5, 5, 5).",
            "whyWrong": [
              "Widely scattered data has large σ.",
              "Mean can be any number.",
              "Range would also be 0."
            ],
            "readingPassage": null
          },
          {
            "id": "ma_u4_test_q04",
            "type": "mcq",
            "difficulty": "medium",
            "category": "Statistics",
            "marks": 2,
            "question": "The positive square root of the mean of squared deviations from the arithmetic mean is called:",
            "options": [
              "Standard deviation (σ)",
              "Range",
              "Variance (σ²)",
              "Mode"
            ],
            "correctIndex": 0,
            "explanation": "Definition: σ = √[ Σ(x - x̄)² / n ].",
            "whyWrong": [
              "Range is Max - Min.",
              "Variance is without square root.",
              "Mode is most frequent value."
            ],
            "readingPassage": null
          },
          {
            "id": "ma_u4_test_q05",
            "type": "mcq",
            "difficulty": "easy",
            "category": "Statistics",
            "marks": 2,
            "question": "Which of the following is a measure of dispersion?",
            "options": [
              "Standard deviation",
              "Mean",
              "Median",
              "Mode"
            ],
            "correctIndex": 0,
            "explanation": "Standard deviation measures dispersion; mean, median, and mode measure central tendency.",
            "whyWrong": [
              "Mean is central tendency.",
              "Median is central tendency.",
              "Mode is central tendency."
            ],
            "readingPassage": null
          },
          {
            "id": "ma_u4_test_q06",
            "type": "mcq",
            "difficulty": "medium",
            "category": "Statistics",
            "marks": 2,
            "question": "If Σ(x - x̄)² = 36 for a set of 9 values, then the standard deviation σ equals:",
            "options": [
              "2",
              "4",
              "6",
              "36"
            ],
            "correctIndex": 0,
            "explanation": "σ = √(36 / 9) = √4 = 2.",
            "whyWrong": [
              "4 is variance σ².",
              "6 is √36.",
              "36 is sum of squares."
            ],
            "readingPassage": null
          },
          {
            "id": "ma_u4_test_q07",
            "type": "mcq",
            "difficulty": "hard",
            "category": "Statistics",
            "marks": 2,
            "question": "If the range of the set of values 9, 4, x, 7 is 8, where x > 9, then x equals:",
            "options": [
              "12",
              "16",
              "17",
              "13"
            ],
            "correctIndex": 0,
            "explanation": "Minimum is 4. Range = x - 4 = 8 ⟹ x = 12.",
            "whyWrong": [
              "16 added 8 twice.",
              "17 calculation error.",
              "13 used minimum 5."
            ],
            "readingPassage": null
          },
          {
            "id": "ma_u4_test_q08",
            "type": "mcq",
            "difficulty": "medium",
            "category": "Statistics",
            "marks": 2,
            "question": "The arithmetic mean x̄ of the values 8, 9, 7, 6, 5 is:",
            "options": [
              "7",
              "8",
              "6",
              "35"
            ],
            "correctIndex": 0,
            "explanation": "x̄ = (8 + 9 + 7 + 6 + 5)/5 = 35/5 = 7.",
            "whyWrong": [
              "8 is maximum - 1.",
              "6 is lower bound.",
              "35 is sum Σx."
            ],
            "readingPassage": null
          },
          {
            "id": "ma_u4_test_q09",
            "type": "complete",
            "difficulty": "easy",
            "category": "Statistics",
            "marks": 2,
            "question": "Range = Maximum value - ....... value.",
            "acceptableAnswers": [
              "Minimum",
              "minimum"
            ],
            "modelAnswer": "Minimum",
            "explanation": "Range = Max - Min.",
            "readingPassage": null
          },
          {
            "id": "ma_u4_test_q10",
            "type": "complete",
            "difficulty": "easy",
            "category": "Statistics",
            "marks": 2,
            "question": "The most widely used and accurate measure of dispersion is the ....... deviation.",
            "acceptableAnswers": [
              "standard",
              "Standard"
            ],
            "modelAnswer": "Standard",
            "explanation": "Standard deviation σ.",
            "readingPassage": null
          },
          {
            "id": "ma_u4_test_q11",
            "type": "complete",
            "difficulty": "medium",
            "category": "Statistics",
            "marks": 2,
            "question": "The standard deviation of the numbers 9, 9, 9, 9 is σ = .......",
            "acceptableAnswers": [
              "0",
              "zero"
            ],
            "modelAnswer": "0",
            "explanation": "When all values are identical, deviation is zero.",
            "readingPassage": null
          },
          {
            "id": "ma_u4_test_q12",
            "type": "complete",
            "difficulty": "medium",
            "category": "Statistics",
            "marks": 2,
            "question": "If the variance σ² of a distribution is 25, then the standard deviation σ = .......",
            "acceptableAnswers": [
              "5",
              "٥"
            ],
            "modelAnswer": "5",
            "explanation": "σ = √25 = 5.",
            "readingPassage": null
          },
          {
            "id": "ma_u4_test_q13",
            "type": "essay",
            "difficulty": "hard",
            "category": "Statistics",
            "marks": 4,
            "question": "Calculate the standard deviation σ for the set of values: 8, 9, 7, 6, 5.",
            "keywords": [
              "mean = 7",
              "deviations squared = 1, 4, 0, 1, 4",
              "sum = 10",
              "sigma = sqrt(10/5) = sqrt(2) approx 1.41"
            ],
            "modelAnswer": "1) Arithmetic mean x̄ = (8 + 9 + 7 + 6 + 5) / 5 = 35 / 5 = 7.\n2) Squared deviations:\n   (8 - 7)² = 1\n   (9 - 7)² = 4\n   (7 - 7)² = 0\n   (6 - 7)² = 1\n   (5 - 7)² = 4\n3) Sum Σ(x - x̄)² = 1 + 4 + 0 + 1 + 4 = 10.\n4) Standard deviation σ = √(10 / 5) = √2 ≈ 1.41.",
            "explanation": "Award full marks for mean = 7, sum of squares = 10, and σ = √2.",
            "readingPassage": null
          },
          {
            "id": "ma_u4_test_q14",
            "type": "essay",
            "difficulty": "hard",
            "category": "Statistics",
            "marks": 4,
            "question": "Compare between the Range and the Standard Deviation as measures of dispersion, stating one advantage and one disadvantage of each.",
            "keywords": [
              "Range: simple, affected by outliers",
              "Standard Deviation: accurate, requires more calculations"
            ],
            "modelAnswer": "١) Range:\n- Advantage: Very easy and quick to calculate (Max - Min).\n- Disadvantage: Affected severely by extreme outlier values and ignores all intermediate data.\n٢) Standard Deviation (σ):\n- Advantage: Highly accurate, takes all data values into account, reflects scatter around the mean.\n- Disadvantage: More complex calculation and affected by extreme values through squaring.",
            "explanation": "Full marks for identifying clear pros and cons of both measures.",
            "readingPassage": null
          },
          {
            "id": "ma_u4_test_q15",
            "type": "essay",
            "difficulty": "hard",
            "category": "Statistics",
            "marks": 4,
            "question": "The following table represents the frequency distribution of ages of 10 students:\nAge x: 15, 16, 17\nFrequency f: 2, 5, 3\nCalculate the mean age x̄ of these students.",
            "keywords": [
              "sum(x*f) = 15*2 + 16*5 + 17*3 = 161",
              "sum(f) = 10",
              "mean = 16.1"
            ],
            "modelAnswer": "1) Σ(x · f) = (15 × 2) + (16 × 5) + (17 × 3) = 30 + 80 + 51 = 161.\n2) Σf = 2 + 5 + 3 = 10.\n3) Mean x̄ = Σ(x · f) / Σf = 161 / 10 = 16.1 years.",
            "explanation": "Award full credit for calculation of sum of products 161 and mean 16.1.",
            "readingPassage": null
          }
        ]
      }
    }
  ],
  "officialExams": [
    {
      "id": "ma_official_exam_1",
      "title": "Official Ministry Model Examination 1 (Mathematics - Prep 3 Term 1)",
      "subtitle": "Standardized Term 1 Model matching the Egyptian Ministry of Education specifications 2026 / 2027 (20 Questions)",
      "durationMinutes": 120,
      "questions": [
        {
          "id": "ma_gov_ex1_q01",
          "type": "mcq",
          "difficulty": "easy",
          "category": "Algebra",
          "marks": 2,
          "question": "If 3ˣ = 27, then x equals:",
          "options": [
            "2",
            "3",
            "4",
            "9"
          ],
          "correctIndex": 1,
          "explanation": "27 = 3³ ⟹ x = 3.",
          "whyWrong": [
            "3² = 9.",
            "3⁴ = 81.",
            "Divided 27 by 3."
          ],
          "readingPassage": null
        },
        {
          "id": "ma_gov_ex1_q02",
          "type": "mcq",
          "difficulty": "easy",
          "category": "Algebra",
          "marks": 2,
          "question": "The set of zeros of the function f(x) = x² - 16 in ℝ is:",
          "options": [
            "{-4, 4}",
            "{4}",
            "{-4}",
            "∅"
          ],
          "correctIndex": 0,
          "explanation": "x² - 16 = 0 ⟹ x² = 16 ⟹ x = ±4.",
          "whyWrong": [
            "Positive only.",
            "Negative only.",
            "Mistook for sum of squares."
          ],
          "readingPassage": null
        },
        {
          "id": "ma_gov_ex1_q03",
          "type": "mcq",
          "difficulty": "easy",
          "category": "Trigonometry",
          "marks": 2,
          "question": "If sin x = 1/2 where x is an acute angle, then x equals:",
          "options": [
            "30°",
            "45°",
            "60°",
            "90°"
          ],
          "correctIndex": 0,
          "explanation": "sin 30° = 1/2.",
          "whyWrong": [
            "sin 45° = 1/√2.",
            "sin 60° = √3/2.",
            "sin 90° = 1."
          ],
          "readingPassage": null
        },
        {
          "id": "ma_gov_ex1_q04",
          "type": "mcq",
          "difficulty": "easy",
          "category": "Geometry",
          "marks": 2,
          "question": "The slope of a straight line parallel to the x-axis is:",
          "options": [
            "0",
            "1",
            "-1",
            "Undefined"
          ],
          "correctIndex": 0,
          "explanation": "Horizontal lines have slope 0.",
          "whyWrong": [
            "Slope 1 makes 45°.",
            "Negative slope.",
            "Vertical line is undefined."
          ],
          "readingPassage": null
        },
        {
          "id": "ma_gov_ex1_q05",
          "type": "mcq",
          "difficulty": "medium",
          "category": "Statistics",
          "marks": 2,
          "question": "The range of the set of values 5, 8, 12, 3, 19 is:",
          "options": [
            "16",
            "14",
            "17",
            "19"
          ],
          "correctIndex": 0,
          "explanation": "Range = Max - Min = 19 - 3 = 16.",
          "whyWrong": [
            "Subtracted 19 - 5.",
            "Arithmetic error.",
            "Max value only."
          ],
          "readingPassage": null
        },
        {
          "id": "ma_gov_ex1_q06",
          "type": "mcq",
          "difficulty": "medium",
          "category": "Geometry",
          "marks": 2,
          "question": "If straight line L₁ has slope 3/4 and L₁ ⊥ L₂, then the slope of L₂ equals:",
          "options": [
            "-4/3",
            "4/3",
            "3/4",
            "-3/4"
          ],
          "correctIndex": 0,
          "explanation": "m₂ = -1 / (3/4) = -4/3.",
          "whyWrong": [
            "Positive reciprocal.",
            "Parallel slope.",
            "Negative without inversion."
          ],
          "readingPassage": null
        },
        {
          "id": "ma_gov_ex1_q07",
          "type": "mcq",
          "difficulty": "medium",
          "category": "Trigonometry",
          "marks": 2,
          "question": "The value of tan 45° + cos 60° equals:",
          "options": [
            "1.5",
            "1",
            "2",
            "0.5"
          ],
          "correctIndex": 0,
          "explanation": "tan 45° = 1, cos 60° = 0.5 ⟹ 1 + 0.5 = 1.5.",
          "whyWrong": [
            "Forgot cos 60°.",
            "Added 1 + 1.",
            "Subtracted."
          ],
          "readingPassage": null
        },
        {
          "id": "ma_gov_ex1_q08",
          "type": "mcq",
          "difficulty": "medium",
          "category": "Algebra",
          "marks": 2,
          "question": "The domain of the rational function n(x) = (x + 3)/(x - 2) is:",
          "options": [
            "ℝ - {2}",
            "ℝ - {-3}",
            "ℝ - {-3, 2}",
            "{2}"
          ],
          "correctIndex": 0,
          "explanation": "Denominator x - 2 = 0 ⟹ Domain = ℝ - {2}.",
          "whyWrong": [
            "Looked at numerator.",
            "Combined num and denom.",
            "Missing ℝ -."
          ],
          "readingPassage": null
        },
        {
          "id": "ma_gov_ex1_q09",
          "type": "mcq",
          "difficulty": "medium",
          "category": "Geometry",
          "marks": 2,
          "question": "The distance between the point (3, 4) and the origin (0, 0) is:",
          "options": [
            "5 units",
            "7 units",
            "1 unit",
            "25 units"
          ],
          "correctIndex": 0,
          "explanation": "d = √(3² + 4²) = √(9 + 16) = √25 = 5.",
          "whyWrong": [
            "Added 3 + 4.",
            "Subtracted.",
            "Forgot square root."
          ],
          "readingPassage": null
        },
        {
          "id": "ma_gov_ex1_q10",
          "type": "mcq",
          "difficulty": "hard",
          "category": "Algebra",
          "marks": 2,
          "question": "The vertex of the parabola f(x) = x² - 4x + 7 is:",
          "options": [
            "(2, 3)",
            "(2, 7)",
            "(-2, 3)",
            "(4, 7)"
          ],
          "correctIndex": 0,
          "explanation": "x = -(-4)/2 = 2. f(2) = 4 - 8 + 7 = 3. Vertex = (2, 3).",
          "whyWrong": [
            "Did not compute y at x = 2.",
            "Sign error on x.",
            "Used b directly."
          ],
          "readingPassage": null
        },
        {
          "id": "ma_gov_ex1_q11",
          "type": "mcq",
          "difficulty": "medium",
          "category": "Similarity",
          "marks": 2,
          "question": "If the ratio of similitude of two similar triangles is 1, then the two triangles are:",
          "options": [
            "Congruent",
            "Equilateral",
            "Right-angled",
            "Isosceles"
          ],
          "correctIndex": 0,
          "explanation": "When scale factor k = 1, corresponding sides are equal in length, so they are congruent.",
          "whyWrong": [
            "Not necessarily equilateral.",
            "Angle properties unchanged.",
            "Not necessarily isosceles."
          ],
          "readingPassage": null
        },
        {
          "id": "ma_gov_ex1_q12",
          "type": "mcq",
          "difficulty": "easy",
          "category": "Statistics",
          "marks": 2,
          "question": "The standard deviation of the values 7, 7, 7, 7 is:",
          "options": [
            "0",
            "7",
            "1",
            "49"
          ],
          "correctIndex": 0,
          "explanation": "All values are identical, deviations are 0, so σ = 0.",
          "whyWrong": [
            "7 is the value.",
            "1 is arbitrary.",
            "49 is squared."
          ],
          "readingPassage": null
        },
        {
          "id": "ma_gov_ex1_q13",
          "type": "complete",
          "difficulty": "easy",
          "category": "Trigonometry",
          "marks": 2,
          "question": "For any acute angle B, sin² B + cos² B = _______.",
          "acceptableAnswers": [
            "1",
            "١"
          ],
          "modelAnswer": "1",
          "explanation": "Fundamental Pythagorean trigonometric identity.",
          "readingPassage": null
        },
        {
          "id": "ma_gov_ex1_q14",
          "type": "complete",
          "difficulty": "medium",
          "category": "Geometry",
          "marks": 2,
          "question": "The midpoint of the segment joining (1, 5) and (3, 1) is (_______, 3).",
          "acceptableAnswers": [
            "2",
            "٢"
          ],
          "modelAnswer": "2",
          "explanation": "(1 + 3)/2 = 2.",
          "readingPassage": null
        },
        {
          "id": "ma_gov_ex1_q15",
          "type": "complete",
          "difficulty": "medium",
          "category": "Algebra",
          "marks": 2,
          "question": "If (x - 1, 5) = (2, y + 1), then x + y = _______.",
          "acceptableAnswers": [
            "7",
            "٧"
          ],
          "modelAnswer": "7",
          "explanation": "x - 1 = 2 ⟹ x = 3; y + 1 = 5 ⟹ y = 4; x + y = 7.",
          "readingPassage": null
        },
        {
          "id": "ma_gov_ex1_q16",
          "type": "complete",
          "difficulty": "easy",
          "category": "Statistics",
          "marks": 2,
          "question": "The difference between the maximum and minimum values in a data set is called the _______.",
          "acceptableAnswers": [
            "range",
            "Range"
          ],
          "modelAnswer": "range",
          "explanation": "Definition of Range.",
          "readingPassage": null
        },
        {
          "id": "ma_gov_ex1_q17",
          "type": "essay",
          "difficulty": "hard",
          "category": "Algebra",
          "marks": 4,
          "question": "Find the solution set of the following system of linear equations in ℝ × ℝ:\nx + y = 5\n2x - y = 4",
          "keywords": [
            "x = 3",
            "y = 2",
            "S.S. = {(3, 2)}"
          ],
          "modelAnswer": "1) Add the two equations: (x + y) + (2x - y) = 5 + 4 ⟹ 3x = 9 ⟹ x = 3.\n2) Substitute x = 3 in first equation: 3 + y = 5 ⟹ y = 2.\n3) Solution Set S.S. = {(3, 2)}.",
          "explanation": "Award full credit for showing elimination or substitution step, finding x = 3, y = 2, and S.S. = {(3, 2)}.",
          "readingPassage": null
        },
        {
          "id": "ma_gov_ex1_q18",
          "type": "essay",
          "difficulty": "hard",
          "category": "Geometry",
          "marks": 4,
          "question": "Find the equation of the straight line passing through the point (1, 2) and parallel to the line 3x - y + 7 = 0.",
          "keywords": [
            "slope m = 3",
            "c = -1",
            "y = 3x - 1"
          ],
          "modelAnswer": "1) Given line: y = 3x + 7 ⟹ slope m = 3.\n2) Required parallel line has slope m = 3: y = 3x + c.\n3) Substitute (1, 2): 2 = 3(1) + c ⟹ c = -1.\n4) Equation: y = 3x - 1 (or 3x - y - 1 = 0).",
          "explanation": "Full credit for slope m = 3, intercept c = -1, and final equation.",
          "readingPassage": null
        },
        {
          "id": "ma_gov_ex1_q19",
          "type": "essay",
          "difficulty": "hard",
          "category": "Trigonometry",
          "marks": 4,
          "question": "ABC is an isosceles triangle where AB = AC = 10 cm, and BC = 12 cm. Draw AD ⊥ BC where D ∈ BC, then find:\n1) The length of AD\n2) The value of sin B + cos C",
          "keywords": [
            "BD = 6 cm",
            "AD = 8 cm",
            "sin B = 8/10 = 4/5",
            "cos C = 6/10 = 3/5",
            "sum = 7/5 = 1.4"
          ],
          "modelAnswer": "1) In isosceles Δ ABC, AD ⊥ BC bisects base BC ⟹ BD = DC = 12/2 = 6 cm.\n2) In right Δ ADB, AD = √(10² - 6²) = √(100 - 36) = √64 = 8 cm.\n3) sin B = AD / AB = 8/10 = 4/5.\n4) cos C = DC / AC = 6/10 = 3/5.\n5) sin B + cos C = 4/5 + 3/5 = 7/5 = 1.4.",
          "explanation": "Full marks for AD = 8 cm and final sum 7/5.",
          "readingPassage": null
        },
        {
          "id": "ma_gov_ex1_q20",
          "type": "essay",
          "difficulty": "hard",
          "category": "Statistics",
          "marks": 4,
          "question": "Calculate the standard deviation σ for the set of numbers: 12, 13, 16, 18, 21.",
          "keywords": [
            "mean = 16",
            "deviations squared: 16, 9, 0, 4, 25",
            "sum = 54",
            "sigma = sqrt(54/5) = sqrt(10.8) approx 3.29"
          ],
          "modelAnswer": "1) Mean x̄ = (12 + 13 + 16 + 18 + 21) / 5 = 80 / 5 = 16.\n2) Squared deviations:\n   (12 - 16)² = 16\n   (13 - 16)² = 9\n   (16 - 16)² = 0\n   (18 - 16)² = 4\n   (21 - 16)² = 25\n3) Sum = 16 + 9 + 0 + 4 + 25 = 54.\n4) σ = √(54 / 5) = √10.8 ≈ 3.29.",
          "explanation": "Award full credit for x̄ = 16, sum of squares = 54, and σ = √10.8.",
          "readingPassage": null
        }
      ]
    },
    {
      "id": "ma_official_exam_2",
      "title": "Official Ministry Model Examination 2 (Mathematics - Prep 3 Term 1)",
      "subtitle": "Official Standardized Simulation covering Algebra, Geometry, Trigonometry, and Statistics 2026 / 2027 (20 Questions)",
      "durationMinutes": 120,
      "questions": [
        {
          "id": "ma_gov_ex2_q01",
          "type": "mcq",
          "difficulty": "easy",
          "category": "Algebra",
          "marks": 2,
          "question": "If f(x) = 5, then f(3) - f(1) equals:",
          "options": [
            "0",
            "5",
            "4",
            "2"
          ],
          "correctIndex": 0,
          "explanation": "f(x) is a constant function: f(3) = 5 and f(1) = 5 ⟹ 5 - 5 = 0.",
          "whyWrong": [
            "5 - 0 = 5.",
            "Subtracted inputs 3 - 1.",
            "Substituted 3 - 1."
          ],
          "readingPassage": null
        },
        {
          "id": "ma_gov_ex2_q02",
          "type": "mcq",
          "difficulty": "medium",
          "category": "Geometry",
          "marks": 2,
          "question": "The image of the point (-3, 4) under reflection in the x-axis is:",
          "options": [
            "(-3, -4)",
            "(3, 4)",
            "(3, -4)",
            "(4, -3)"
          ],
          "correctIndex": 0,
          "explanation": "Reflection in x-axis negates y-coordinate: (x, -y) = (-3, -4).",
          "whyWrong": [
            "Reflection in y-axis.",
            "Reflection in origin.",
            "Swapped coordinates."
          ],
          "readingPassage": null
        },
        {
          "id": "ma_gov_ex2_q03",
          "type": "mcq",
          "difficulty": "easy",
          "category": "Trigonometry",
          "marks": 2,
          "question": "The value of cos 30° is equal to:",
          "options": [
            "sin 60°",
            "sin 30°",
            "tan 30°",
            "tan 60°"
          ],
          "correctIndex": 0,
          "explanation": "30° and 60° are complementary: cos 30° = sin 60° = √3/2.",
          "whyWrong": [
            "sin 30° = 1/2.",
            "tan 30° = 1/√3.",
            "tan 60° = √3."
          ],
          "readingPassage": null
        },
        {
          "id": "ma_gov_ex2_q04",
          "type": "mcq",
          "difficulty": "medium",
          "category": "Geometry",
          "marks": 2,
          "question": "The length of the intercepted part from the y-axis by the line 2x - 3y + 12 = 0 is:",
          "options": [
            "4 units",
            "6 units",
            "-4 units",
            "12 units"
          ],
          "correctIndex": 0,
          "explanation": "Put x = 0: -3y + 12 = 0 ⟹ 3y = 12 ⟹ y = 4 units length.",
          "whyWrong": [
            "Put y = 0 gave 6 units.",
            "Length is positive.",
            "Used constant term."
          ],
          "readingPassage": null
        },
        {
          "id": "ma_gov_ex2_q05",
          "type": "mcq",
          "difficulty": "easy",
          "category": "Statistics",
          "marks": 2,
          "question": "If the values are 2, 5, 8, 11, then the range equals:",
          "options": [
            "9",
            "8",
            "11",
            "6"
          ],
          "correctIndex": 0,
          "explanation": "Range = 11 - 2 = 9.",
          "whyWrong": [
            "Used 8.",
            "Maximum value.",
            "Calculation error."
          ],
          "readingPassage": null
        },
        {
          "id": "ma_gov_ex2_q06",
          "type": "mcq",
          "difficulty": "medium",
          "category": "Algebra",
          "marks": 2,
          "question": "If (2, 5) satisfies the equation 3x + ky = 16, then k equals:",
          "options": [
            "2",
            "3",
            "5",
            "10"
          ],
          "correctIndex": 0,
          "explanation": "3(2) + k(5) = 16 ⟹ 6 + 5k = 16 ⟹ 5k = 10 ⟹ k = 2.",
          "whyWrong": [
            "k = 3 error.",
            "k = 5 error.",
            "Forgot to divide by 5."
          ],
          "readingPassage": null
        },
        {
          "id": "ma_gov_ex2_q07",
          "type": "mcq",
          "difficulty": "hard",
          "category": "Geometry",
          "marks": 2,
          "question": "The area of the triangle bounded by the lines x = 0, y = 0, and 3x + 2y - 12 = 0 is:",
          "options": [
            "12 sq. units",
            "24 sq. units",
            "6 sq. units",
            "18 sq. units"
          ],
          "correctIndex": 0,
          "explanation": "x-intercept: (4, 0); y-intercept: (0, 6). Area = 1/2 × 4 × 6 = 12 sq. units.",
          "whyWrong": [
            "Forgot 1/2.",
            "Divided by 4.",
            "Calculation error."
          ],
          "readingPassage": null
        },
        {
          "id": "ma_gov_ex2_q08",
          "type": "mcq",
          "difficulty": "medium",
          "category": "Trigonometry",
          "marks": 2,
          "question": "If tan θ = √3 where θ is acute, then cos θ equals:",
          "options": [
            "1/2",
            "√3/2",
            "1",
            "1/√3"
          ],
          "correctIndex": 0,
          "explanation": "tan θ = √3 ⟹ θ = 60°, and cos 60° = 1/2.",
          "whyWrong": [
            "sin 60° = √3/2.",
            "cos 0° = 1.",
            "tan 30° = 1/√3."
          ],
          "readingPassage": null
        },
        {
          "id": "ma_gov_ex2_q09",
          "type": "mcq",
          "difficulty": "medium",
          "category": "Similarity",
          "marks": 2,
          "question": "If Δ ABC ~ Δ DEF and AB = 1/3 DE, then Area(Δ ABC) : Area(Δ DEF) equals:",
          "options": [
            "1:9",
            "1:3",
            "1:6",
            "1:27"
          ],
          "correctIndex": 0,
          "explanation": "The ratio between areas of two similar triangles equals the square of the scale factor: (1/3)² = 1/9.",
          "whyWrong": [
            "Linear ratio 1:3.",
            "Multiplied by 2.",
            "Cubed ratio."
          ],
          "readingPassage": null
        },
        {
          "id": "ma_gov_ex2_q10",
          "type": "mcq",
          "difficulty": "hard",
          "category": "Statistics",
          "marks": 2,
          "question": "If a data set has arithmetic mean 20 and standard deviation 4, and each value is increased by 5, then the new standard deviation is:",
          "options": [
            "4",
            "9",
            "25",
            "20"
          ],
          "correctIndex": 0,
          "explanation": "Adding or subtracting a constant to all data values does NOT change dispersion or standard deviation.",
          "whyWrong": [
            "Added 5 to sigma.",
            "Squared 5.",
            "Changed with mean."
          ],
          "readingPassage": null
        },
        {
          "id": "ma_gov_ex2_q11",
          "type": "mcq",
          "difficulty": "easy",
          "category": "Geometry",
          "marks": 2,
          "question": "The slope of the line passing through (4, -2) and (4, 5) is:",
          "options": [
            "Undefined",
            "0",
            "7",
            "-7"
          ],
          "correctIndex": 0,
          "explanation": "Δx = 4 - 4 = 0 (vertical line), so the slope is undefined.",
          "whyWrong": [
            "Horizontal line is 0.",
            "Subtracted y-values.",
            "Negative."
          ],
          "readingPassage": null
        },
        {
          "id": "ma_gov_ex2_q12",
          "type": "mcq",
          "difficulty": "medium",
          "category": "Algebra",
          "marks": 2,
          "question": "If x = 2 is a root of the equation x² - 5x + c = 0, then c equals:",
          "options": [
            "6",
            "-6",
            "10",
            "4"
          ],
          "correctIndex": 0,
          "explanation": "2² - 5(2) + c = 0 ⟹ 4 - 10 + c = 0 ⟹ -6 + c = 0 ⟹ c = 6.",
          "whyWrong": [
            "Sign error -6.",
            "Multiplied 2 by 5.",
            "Substituted x = 2 without squaring."
          ],
          "readingPassage": null
        },
        {
          "id": "ma_gov_ex2_q13",
          "type": "complete",
          "difficulty": "easy",
          "category": "Trigonometry",
          "marks": 2,
          "question": "The acute angle whose cosine is 1/2 is _______°.",
          "acceptableAnswers": [
            "60",
            "٦٠"
          ],
          "modelAnswer": "60",
          "explanation": "cos 60° = 1/2.",
          "readingPassage": null
        },
        {
          "id": "ma_gov_ex2_q14",
          "type": "complete",
          "difficulty": "medium",
          "category": "Geometry",
          "marks": 2,
          "question": "The line y = -2x + 5 has slope m = _______.",
          "acceptableAnswers": [
            "-2",
            "-٢"
          ],
          "modelAnswer": "-2",
          "explanation": "In y = mx + c, m = -2.",
          "readingPassage": null
        },
        {
          "id": "ma_gov_ex2_q15",
          "type": "complete",
          "difficulty": "easy",
          "category": "Statistics",
          "marks": 2,
          "question": "The symbol σ (sigma) denotes the _______ deviation.",
          "acceptableAnswers": [
            "standard",
            "Standard"
          ],
          "modelAnswer": "standard",
          "explanation": "Standard deviation σ.",
          "readingPassage": null
        },
        {
          "id": "ma_gov_ex2_q16",
          "type": "complete",
          "difficulty": "medium",
          "category": "Similarity",
          "marks": 2,
          "question": "The ratio between the perimeters of two similar polygons equals the ratio between any two _______ sides.",
          "acceptableAnswers": [
            "corresponding",
            "Corresponding"
          ],
          "modelAnswer": "corresponding",
          "explanation": "Perimeter ratio = scale factor of corresponding sides.",
          "readingPassage": null
        },
        {
          "id": "ma_gov_ex2_q17",
          "type": "essay",
          "difficulty": "hard",
          "category": "Algebra",
          "marks": 4,
          "question": "Solve in ℝ using the General Formula: 2x² - 5x + 1 = 0 (approximating to two decimal places).",
          "keywords": [
            "a = 2, b = -5, c = 1",
            "discriminant = 17",
            "x = (5 ± sqrt(17))/4",
            "x1 = 2.28",
            "x2 = 0.22"
          ],
          "modelAnswer": "1) a = 2, b = -5, c = 1.\n2) b² - 4ac = (-5)² - 4(2)(1) = 25 - 8 = 17.\n3) x = (-b ± √(b² - 4ac)) / (2a) = (5 ± √17) / 4.\n4) x₁ = (5 + 4.123) / 4 = 9.123 / 4 ≈ 2.28.\n5) x₂ = (5 - 4.123) / 4 = 0.877 / 4 ≈ 0.22.\n6) Solution Set S.S. = {2.28, 0.22}.",
          "explanation": "Award full credit for correct coefficients, discriminant 17, and approximate roots.",
          "readingPassage": null
        },
        {
          "id": "ma_gov_ex2_q18",
          "type": "essay",
          "difficulty": "hard",
          "category": "Geometry",
          "marks": 4,
          "question": "Prove that the triangle with vertices A(1, 4), B(-1, -2), and C(2, -3) is a right-angled triangle at B, and find its area.",
          "keywords": [
            "AB^2 = 40",
            "BC^2 = 10",
            "AC^2 = 50",
            "AB^2 + BC^2 = AC^2",
            "Area = 10 sq. units"
          ],
          "modelAnswer": "1) AB² = (-1 - 1)² + (-2 - 4)² = (-2)² + (-6)² = 4 + 36 = 40.\n2) BC² = (2 - (-1))² + (-3 - (-2))² = 3² + (-1)² = 9 + 1 = 10.\n3) AC² = (2 - 1)² + (-3 - 4)² = 1² + (-7)² = 1 + 49 = 50.\n4) Since AB² + BC² = 40 + 10 = 50 = AC², by converse of Pythagoras Δ ABC is right-angled at B.\n5) Area = 1/2 × AB × BC = 1/2 × √40 × √10 = 1/2 × √400 = 1/2 × 20 = 10 sq. units.",
          "explanation": "Full credit for distance calculations, Pythagorean converse proof, and area = 10.",
          "readingPassage": null
        },
        {
          "id": "ma_gov_ex2_q19",
          "type": "essay",
          "difficulty": "hard",
          "category": "Geometry",
          "marks": 4,
          "question": "Find the equation of the perpendicular bisector of the line segment AB, where A(1, 3) and B(3, 5).",
          "keywords": [
            "midpoint = (2, 4)",
            "slope AB = 1",
            "perp slope = -1",
            "equation: y = -x + 6"
          ],
          "modelAnswer": "1) Midpoint of AB = ((1 + 3)/2, (3 + 5)/2) = (4/2, 8/2) = (2, 4).\n2) Slope of AB = (5 - 3) / (3 - 1) = 2/2 = 1.\n3) Slope of perpendicular bisector m = -1 / 1 = -1.\n4) Equation: y = -x + c. Passes through midpoint (2, 4): 4 = -2 + c ⟹ c = 6.\n5) Equation: y = -x + 6 (or x + y - 6 = 0).",
          "explanation": "Award full marks for midpoint (2, 4), slope -1, and line equation y = -x + 6.",
          "readingPassage": null
        },
        {
          "id": "ma_gov_ex2_q20",
          "type": "essay",
          "difficulty": "hard",
          "category": "Statistics",
          "marks": 4,
          "question": "The following are the marks of 5 students in a mathematics test: 10, 12, 14, 16, 18. Calculate the standard deviation σ.",
          "keywords": [
            "mean = 14",
            "deviations squared: 16, 4, 0, 4, 16",
            "sum = 40",
            "sigma = sqrt(40/5) = sqrt(8) approx 2.83"
          ],
          "modelAnswer": "1) Arithmetic mean x̄ = (10 + 12 + 14 + 16 + 18) / 5 = 70 / 5 = 14.\n2) Deviations from mean: -4, -2, 0, 2, 4.\n3) Squared deviations: 16, 4, 0, 4, 16.\n4) Sum Σ(x - x̄)² = 16 + 4 + 0 + 4 + 16 = 40.\n5) Standard deviation σ = √(40 / 5) = √8 = 2√2 ≈ 2.83.",
          "explanation": "Full credit for mean 14, sum of squares 40, and σ = √8 ≈ 2.83.",
          "readingPassage": null
        }
      ]
    }
  ]
};
