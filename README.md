# ⌨️ Typing Speed Test Website

A sleek and interactive typing speed test application built using modern web technologies. Users can test their typing skills, measure words per minute (WPM), accuracy, errors, and typed characters — all in real time!

![Typing Speed Test Demo](https://github.com/Prathvish-Shetty/typing-test/blob/main/src/assets/sample.png)

## 🚀 Features

- 🕒 30-second typing test  
- 📈 Live results: WPM, accuracy, errors, and characters typed  
- 🎯 WPM calculated using standard formula  
- 🎨 Smooth UI animations with Framer Motion  
- 🔥 Fully responsive and fast  

## 📊 Metrics Explained

- **WPM (Words Per Minute):** Number of correct characters typed divided by 5, normalized to 1 minute  
  `WPM = (correctChars / 5) * (60 / testDurationInSeconds)`
- **Accuracy:** `(Correct Characters / Total Typed Characters) × 100`
- **Errors:** Number of mismatches between typed and expected text

## 🛠️ Tech Stack

- **Frontend:** React + TypeScript  
- **Styling:** Tailwind CSS  
- **Animations:** Framer Motion  
- **State Management:** Custom React Hooks  

## 📦 Getting Started

```bash
git clone https://github.com/prathvish-shetty/typing-test.git
npm install
npm run dev
```

