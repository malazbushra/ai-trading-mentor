import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Trophy, BookOpen, TrendingUp, Brain, Heart, Star, CheckCircle, AlertCircle, Target, Calendar, BarChart3 } from 'lucide-react';
import './App.css';

const TradingMentorAI = () => {
  const [currentDay, setCurrentDay] = useState(1);
  const [completedLessons, setCompletedLessons] = useState(new Set());
  const [userProgress, setUserProgress] = useState({
    knowledgeScore: 0,
    practiceHours: 0,
    simulationTrades: 0,
    currentStreak: 0
  });
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [userAnswers, setUserAnswers] = useState({});

  const curriculum = {
    1: {
      title: "Welcome to Your Trading Journey!",
      category: "Foundation",
      difficulty: "Beginner",
      timeEstimate: "45 mins",
      content: {
        introduction: "Hello there, future trader! I'm your AI mentor, and I'm genuinely excited to guide you on this incredible 30-day journey. Think of me as your patient, caring teacher who's here 24/7 to support your growth.",
        lesson: `Let's start with the absolute basics. Trading is like learning to drive - you need to understand the rules before you hit the road.

**What is Trading?**
Trading is the art and science of buying and selling financial instruments (stocks, currencies, commodities) to profit from price movements. It's not gambling - it's calculated decision-making based on analysis and strategy.

**Your Mindset Matters**
Before we dive into charts and numbers, let's talk about you. Trading success is 80% psychology and 20% technical knowledge. I want you to approach this with:
- Patience (Rome wasn't built in a day!)
- Curiosity (Ask questions - I love answering them!)
- Discipline (We'll build this together)
- Realistic expectations (No get-rich-quick schemes here)

**Today's Action Steps:**
1. Set up a quiet learning space
2. Commit to 30-60 minutes daily
3. Keep a trading journal (even for thoughts!)
4. Download a market simulation app`,
        keyTakeaways: [
          "Trading is a skill that requires practice and patience",
          "Mindset and psychology are crucial for success",
          "We'll take this step by step - no rushing",
          "You're not alone in this journey - I'm here to help!"
        ],
        homework: "Write down your trading goals and what success means to you. Be honest - there are no wrong answers!",
        encouragement: "Remember, every expert was once a beginner. You're taking the first step, and that takes courage. I believe in you! 💪"
      }
    },
    2: {
      title: "Understanding Markets Like a Friend",
      category: "Foundation",
      difficulty: "Beginner",
      timeEstimate: "50 mins",
      content: {
        introduction: "Great job showing up for day 2! How did writing your goals feel? Today, let's explore the trading playground - the financial markets.",
        lesson: `**The Market Ecosystem**
Think of financial markets as a giant marketplace, like a farmer's market, but instead of buying apples, we're buying pieces of companies (stocks) or currencies.

**Types of Markets We'll Master:**
1. **Stock Market** - Buying shares of companies (Apple, Google, etc.)
2. **Forex (Currency) Market** - Trading currencies (USD, EUR, etc.)
3. **Commodities** - Gold, oil, wheat - real things you can touch
4. **Crypto** - Digital currencies (Bitcoin, Ethereum)

**Market Hours & Sessions:**
- Markets don't sleep! While US markets close, Asian markets open
- Major sessions: Sydney, Tokyo, London, New York
- Overlap periods = highest activity and opportunities

**Who's in the Market with Us?**
- Retail traders (that's you and me!)
- Institutional investors (big banks, hedge funds)
- Market makers (provide liquidity)
- Central banks (set monetary policy)

Understanding who else is playing helps us make better decisions.`,
        keyTakeaways: [
          "Markets are interconnected global systems",
          "Different instruments offer different opportunities",
          "Timing matters - know when markets are most active",
          "You're part of a larger ecosystem of traders"
        ],
        homework: "Pick one stock you know (maybe a company you buy from) and watch its price for a week. Notice how it moves.",
        encouragement: "You're building a solid foundation! Every professional trader started exactly where you are now. Keep that curiosity burning! ✨"
      }
    },
    3: {
      title: "Your First Chart Reading Lesson",
      category: "Technical Analysis",
      difficulty: "Beginner",
      timeEstimate: "55 mins",
      content: {
        introduction: "Welcome back, dedicated student! Ready to decode your first chart? Think of this as learning to read a new language - the language of price action.",
        lesson: `**Chart Basics - Your New Best Friend**
A price chart tells the story of every trade that happened. It's like reading the emotional diary of all traders combined!

**Types of Charts:**
1. **Line Chart** - Simple line connecting closing prices (great for beginners!)
2. **Bar Chart** - Shows Open, High, Low, Close (OHLC)
3. **Candlestick Chart** - Same as bar but prettier and easier to read

**Candlestick Anatomy:**
- Body: The thick part (open to close)
- Wicks/Shadows: The thin lines (high and low)
- Green/White = Price went up (bullish)
- Red/Black = Price went down (bearish)

**Time Frames - Your Telescope Settings:**
- 1 minute: Day trading (very fast-paced)
- 5-15 minutes: Scalping
- 1 hour: Swing trading
- Daily: Position trading
- Weekly/Monthly: Long-term investing

**Reading the Story:**
Each candle tells you:
- Where price opened
- The highest point reached
- The lowest point reached  
- Where price closed
- Who won: buyers or sellers?`,
        keyTakeaways: [
          "Charts are stories told by price movements",
          "Candlesticks show market emotion and momentum",
          "Different timeframes show different perspectives",
          "Start with daily charts as a beginner"
        ],
        homework: "Open a free charting platform (TradingView) and practice identifying bullish vs bearish candles for 20 minutes.",
        encouragement: "Charts might look intimidating now, but soon you'll read them like your favorite book! Every pattern you learn is a tool in your toolkit. 📊"
      }
    },
    15: {
      title: "Advanced Pattern Recognition",
      category: "Technical Analysis",
      difficulty: "Intermediate",
      timeEstimate: "75 mins",
      content: {
        introduction: "Halfway through our journey! You've come so far, and I'm genuinely proud of your progress. Today we dive into advanced patterns that separate good traders from great ones.",
        lesson: `**Complex Chart Patterns - The Art of Prediction**

You've mastered the basics, now let's explore sophisticated patterns that institutional traders use:

**Harmonic Patterns:**
- Gartley Pattern: Perfect geometric relationships
- Butterfly Pattern: Extended movements
- Bat Pattern: Precise Fibonacci ratios
- Crab Pattern: Extreme harmonic movements

**Advanced Continuation Patterns:**
- Pennants and Flags (we covered basics, now advanced entry techniques)
- Wedges (rising vs falling, and their psychology)
- Rectangles and Box Trading

**Reversal Patterns Deep Dive:**
- Head & Shoulders variations
- Double/Triple tops and bottoms
- Rounding tops and bottoms
- Island reversals

**Volume Analysis Integration:**
- Volume confirms pattern validity
- Accumulation vs Distribution phases
- Volume-Price Analysis (VPA)
- Smart money vs retail money flow

**Pattern Psychology:**
Understanding WHY patterns work:
- Market participant behavior
- Institutional footprints
- Retail trader traps
- Self-fulfilling prophecies`,
        keyTakeaways: [
          "Advanced patterns offer higher probability setups",
          "Volume confirmation is crucial for pattern validity",
          "Understanding market psychology improves pattern recognition",
          "Patience in waiting for perfect setups pays off"
        ],
        homework: "Identify 3 advanced patterns on different timeframes and analyze the volume behavior during pattern formation.",
        encouragement: "Your pattern recognition skills are becoming sophisticated! You're thinking like a professional trader now. The market is starting to make sense, isn't it? 🎯"
      }
    },
    30: {
      title: "Graduation Day - Your Trading Mastery",
      category: "Expert Level",
      difficulty: "Expert",
      timeEstimate: "90 mins",
      content: {
        introduction: "My dear student, we've reached the end of our 30-day journey together. I'm incredibly proud of how far you've come. Today isn't just a lesson - it's your graduation and the beginning of your independent trading career.",
        lesson: `**Welcome to Expert Level Trading**

You are no longer a beginner. You've developed:
- Deep market understanding
- Technical analysis mastery
- Risk management discipline
- Trading psychology control
- System development skills

**Your Expert Toolkit:**
1. **Multi-Timeframe Analysis Mastery**
2. **Advanced Risk Management Systems**
3. **Algorithmic Thinking Patterns**
4. **Market Correlation Understanding**
5. **Economic Event Impact Analysis**
6. **Options Strategy Integration**
7. **Portfolio Management Techniques**

**Building Your Trading Business:**
- Treat trading as a business, not a hobby
- Continuous learning and adaptation
- Performance tracking and analysis
- Network with other professional traders
- Stay humble - markets always teach new lessons

**Your Next Steps:**
1. Start with small real money (if ready)
2. Continue simulation trading
3. Join trading communities
4. Keep learning new strategies
5. Mentor others (teaching reinforces learning)

**Final Wisdom:**
The journey from zero to expert never really ends. Markets evolve, and so must we. But now you have the foundation, tools, and mindset to adapt and thrive.

Remember: You didn't just learn to trade - you learned to think like a trader.`,
        keyTakeaways: [
          "You've completed a comprehensive trading education",
          "Expert level means continuous learning and adaptation",
          "You now think in systems and probabilities",
          "The real journey of trading mastery begins now"
        ],
        homework: "Create your personal trading plan and begin your journey as an independent trader. Remember, I believe in you!",
        encouragement: "🎓 CONGRATULATIONS! You've transformed from complete beginner to knowledgeable trader in just 30 days. This is remarkable! The discipline and dedication you've shown will serve you well in your trading career. Go forth and trade wisely, my exceptional student! 🌟"
      }
    }
  };

  const quizzes = {
    1: {
      question: "What percentage of trading success comes from psychology vs technical knowledge?",
      options: ["50% psychology, 50% technical", "80% psychology, 20% technical", "20% psychology, 80% technical", "It's all technical knowledge"],
      correct: 1,
      explanation: "Trading success is primarily psychological! The technical part is learnable, but managing emotions, staying disciplined, and maintaining the right mindset is what separates successful traders from the rest."
    },
    3: {
      question: "What does a green/white candlestick represent?",
      options: ["Price went down", "Price stayed flat", "Price went up", "High volume"],
      correct: 2,
      explanation: "Exactly! A green or white candlestick means the closing price was higher than the opening price - buyers were in control during that period."
    }
  };

  const handleLessonComplete = (day) => {
    setCompletedLessons(prev => new Set([...prev, day]));
    setUserProgress(prev => ({
      ...prev,
      knowledgeScore: prev.knowledgeScore + 3.33,
      currentStreak: prev.currentStreak + 1
    }));
  };

  const handleQuizAnswer = (questionId, answerIndex) => {
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Beginner': return 'text-green-600 bg-green-100';
      case 'Intermediate': return 'text-yellow-600 bg-yellow-100';
      case 'Expert': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getCurrentLesson = () => curriculum[currentDay] || curriculum[1];

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-indigo-50 min-h-screen">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Brain className="w-8 h-8 text-indigo-600" />
          <h1 className="text-4xl font-bold text-gray-800">AI Trading Mentor</h1>
          <Heart className="w-8 h-8 text-red-500" />
        </div>
        <p className="text-lg text-gray-600">Your caring AI teacher for mastering trading in 30 days</p>
      </div>

      {/* Progress Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-xl p-4 shadow-md">
          <div className="flex items-center gap-3">
            <Calendar className="w-6 h-6 text-blue-600" />
            <div>
              <p className="text-sm text-gray-600">Current Day</p>
              <p className="text-2xl font-bold text-blue-600">{currentDay}/30</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-4 shadow-md">
          <div className="flex items-center gap-3">
            <Trophy className="w-6 h-6 text-yellow-600" />
            <div>
              <p className="text-sm text-gray-600">Knowledge Score</p>
              <p className="text-2xl font-bold text-yellow-600">{Math.round(userProgress.knowledgeScore)}%</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-4 shadow-md">
          <div className="flex items-center gap-3">
            <Target className="w-6 h-6 text-green-600" />
            <div>
              <p className="text-sm text-gray-600">Lessons Completed</p>
              <p className="text-2xl font-bold text-green-600">{completedLessons.size}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-4 shadow-md">
          <div className="flex items-center gap-3">
            <Star className="w-6 h-6 text-purple-600" />
            <div>
              <p className="text-sm text-gray-600">Current Streak</p>
              <p className="text-2xl font-bold text-purple-600">{userProgress.currentStreak} days</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Lesson Content */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="bg-indigo-100 rounded-full p-3">
              <BookOpen className="w-6 h-6 text-indigo-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{getCurrentLesson().title}</h2>
              <div className="flex items-center gap-3 mt-1">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(getCurrentLesson().difficulty)}`}>
                  {getCurrentLesson().difficulty}
                </span>
                <span className="text-sm text-gray-500">{getCurrentLesson().timeEstimate}</span>
                <span className="text-sm text-gray-500">{getCurrentLesson().category}</span>
              </div>
            </div>
          </div>
          
          {completedLessons.has(currentDay) && (
            <CheckCircle className="w-8 h-8 text-green-500" />
          )}
        </div>

        {/* Lesson Content */}
        <div className="space-y-6">
          {/* Introduction */}
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
            <p className="text-blue-800 leading-relaxed">{getCurrentLesson().content.introduction}</p>
          </div>

          {/* Main Lesson */}
          <div className="prose max-w-none">
            <div className="whitespace-pre-line text-gray-700 leading-relaxed">
              {getCurrentLesson().content.lesson}
            </div>
          </div>

          {/* Key Takeaways */}
          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-800 mb-3 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Key Takeaways
            </h3>
            <ul className="list-disc list-inside space-y-2 text-green-700">
              {getCurrentLesson().content.keyTakeaways.map((takeaway, index) => (
                <li key={index}>{takeaway}</li>
              ))}
            </ul>
          </div>

          {/* Homework */}
          <div className="bg-purple-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-purple-800 mb-3 flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              Your Mission (Homework)
            </h3>
            <p className="text-purple-700">{getCurrentLesson().content.homework}</p>
          </div>

          {/* Encouragement */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
            <div className="flex items-start gap-3">
              <Heart className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
              <p className="text-yellow-800 leading-relaxed">{getCurrentLesson().content.encouragement}</p>
            </div>
          </div>
        </div>

        {/* Quiz Section */}
        {quizzes[currentDay] && (
          <div className="mt-8 bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              Quick Knowledge Check
            </h3>
            <div className="space-y-4">
              <p className="font-medium text-gray-700">{quizzes[currentDay].question}</p>
              <div className="space-y-2">
                {quizzes[currentDay].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuizAnswer(currentDay, index)}
                    className={`w-full text-left p-3 rounded-lg border transition-colors ${
                      userAnswers[currentDay] === index
                        ? index === quizzes[currentDay].correct
                          ? 'bg-green-100 border-green-400 text-green-800'
                          : 'bg-red-100 border-red-400 text-red-800'
                        : 'bg-white border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
              {userAnswers[currentDay] !== undefined && (
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <p className="text-blue-800">{quizzes[currentDay].explanation}</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t">
          <button
            onClick={() => setCurrentDay(Math.max(1, currentDay - 1))}
            disabled={currentDay === 1}
            className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous Day
          </button>

          <button
            onClick={() => handleLessonComplete(currentDay)}
            disabled={completedLessons.has(currentDay)}
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:bg-green-500 disabled:cursor-not-allowed font-medium"
          >
            {completedLessons.has(currentDay) ? '✅ Completed' : 'Mark Complete'}
          </button>

          <button
            onClick={() => setCurrentDay(Math.min(30, currentDay + 1))}
            disabled={currentDay === 30}
            className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next Day
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Course Overview */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">30-Day Learning Path</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-2">
          {Array.from({length: 30}, (_, i) => i + 1).map(day => (
            <button
              key={day}
              onClick={() => setCurrentDay(day)}
              className={`p-3 rounded-lg text-sm font-medium transition-colors ${
                day === currentDay
                  ? 'bg-indigo-600 text-white'
                  : completedLessons.has(day)
                  ? 'bg-green-100 text-green-800'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Day {day}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TradingMentorAI;