const sampleData = [
    {
        title: "Math Quiz",
        questions: [
            {
                questionText: "What is 2 + 2?",
                options: [
                    { optionText: "4", alternative: "a", isCorrect: true },
                    { optionText: "3", alternative: "b", isCorrect: false },
                    { optionText: "5", alternative: "c", isCorrect: false },
                    { optionText: "6", alternative: "d", isCorrect: false }
                ]
            },
            {
                questionText: "What is 10 * 5?",
                options: [
                    { optionText: "50", alternative: "a", isCorrect: true },
                    { optionText: "40", alternative: "b", isCorrect: false },
                    { optionText: "30", alternative: "c", isCorrect: false },
                    { optionText: "20", alternative: "d", isCorrect: false }
                ]
            }
        ]
    },
    {
        title: "Science Quiz",
        questions: [
            {
                questionText: "What is the chemical symbol for water?",
                options: [
                    { optionText: "H2O", alternative: "a", isCorrect: true },
                    { optionText: "CO2", alternative: "b", isCorrect: false },
                    { optionText: "NaCl", alternative: "c", isCorrect: false },
                    { optionText: "O2", alternative: "d", isCorrect: false }
                ]
            },
            {
                questionText: "Which planet is known as the Red Planet?",
                options: [
                    { optionText: "Mars", alternative: "a", isCorrect: true },
                    { optionText: "Venus", alternative: "b", isCorrect: false },
                    { optionText: "Jupiter", alternative: "c", isCorrect: false },
                    { optionText: "Saturn", alternative: "d", isCorrect: false }
                ]
            }
        ]
    },
    {
        title: "History Quiz",
        questions: [
            {
                questionText: "Who was the first President of the United States?",
                options: [
                    { optionText: "George Washington", alternative: "a", isCorrect: true },
                    { optionText: "Abraham Lincoln", alternative: "b", isCorrect: false },
                    { optionText: "Thomas Jefferson", alternative: "c", isCorrect: false },
                    { optionText: "John Adams", alternative: "d", isCorrect: false }
                ]
            },
            {
                questionText: "When did World War II end?",
                options: [
                    { optionText: "1945", alternative: "a", isCorrect: true },
                    { optionText: "1939", alternative: "b", isCorrect: false },
                    { optionText: "1941", alternative: "c", isCorrect: false },
                    { optionText: "1950", alternative: "d", isCorrect: false }
                ]
            }
        ]
    },
    {
        title: "Geography Quiz",
        questions: [
            {
                questionText: "Which is the largest ocean in the world?",
                options: [
                    { optionText: "Pacific Ocean", alternative: "a", isCorrect: true },
                    { optionText: "Atlantic Ocean", alternative: "b", isCorrect: false },
                    { optionText: "Indian Ocean", alternative: "c", isCorrect: false },
                    { optionText: "Arctic Ocean", alternative: "d", isCorrect: false }
                ]
            },
            {
                questionText: "What is the capital city of Japan?",
                options: [
                    { optionText: "Tokyo", alternative: "a", isCorrect: true },
                    { optionText: "Kyoto", alternative: "b", isCorrect: false },
                    { optionText: "Osaka", alternative: "c", isCorrect: false },
                    { optionText: "Seoul", alternative: "d", isCorrect: false }
                ]
            }
        ]
    },
    {
        title: "Literature Quiz",
        questions: [
            {
                questionText: "Who wrote 'Romeo and Juliet'?",
                options: [
                    { optionText: "William Shakespeare", alternative: "a", isCorrect: true },
                    { optionText: "Jane Austen", alternative: "b", isCorrect: false },
                    { optionText: "Charles Dickens", alternative: "c", isCorrect: false },
                    { optionText: "Mark Twain", alternative: "d", isCorrect: false }
                ]
            },
            {
                questionText: "In which novel would you find the character Atticus Finch?",
                options: [
                    { optionText: "To Kill a Mockingbird", alternative: "a", isCorrect: true },
                    { optionText: "Pride and Prejudice", alternative: "b", isCorrect: false },
                    { optionText: "1984", alternative: "c", isCorrect: false },
                    { optionText: "The Great Gatsby", alternative: "d", isCorrect: false }
                ]
            }
        ]
    },
    {
        title: "Music Quiz",
        questions: [
            {
                questionText: "Who is known as the 'King of Pop'?",
                options: [
                    { optionText: "Michael Jackson", alternative: "a", isCorrect: true },
                    { optionText: "Elvis Presley", alternative: "b", isCorrect: false },
                    { optionText: "Bob Dylan", alternative: "c", isCorrect: false },
                    { optionText: "David Bowie", alternative: "d", isCorrect: false }
                ]
            },
            {
                questionText: "What instrument does a percussionist play?",
                options: [
                    { optionText: "Drums", alternative: "a", isCorrect: true },
                    { optionText: "Guitar", alternative: "b", isCorrect: false },
                    { optionText: "Piano", alternative: "c", isCorrect: false },
                    { optionText: "Violin", alternative: "d", isCorrect: false }
                ]
            }
        ]
    },
    // Add more sample data as needed...
];

module.exports = sampleData;
