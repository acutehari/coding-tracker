// --------------------------------------
// 1️⃣ Daily Data (Each has clickable LeetCode links)
// --------------------------------------
const data = [
  { day: 1, python: [
      { name: "Reverse String (344)", link: "https://leetcode.com/problems/reverse-string/" },
      { name: "Two Sum (1)", link: "https://leetcode.com/problems/two-sum/" }
    ], sql: [
      { name: "Combine Two Tables", link: "https://leetcode.com/problems/combine-two-tables/" }
    ]
  },
  { day: 2, python: [
      { name: "Valid Palindrome (125)", link: "https://leetcode.com/problems/valid-palindrome/" },
      { name: "Remove Duplicates (26)", link: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/" }
    ], sql: [
      { name: "Customers Who Never Order", link: "https://leetcode.com/problems/customers-who-never-order/" }
    ]
  },
  { day: 3, python: [
      { name: "Longest Common Prefix (14)", link: "https://leetcode.com/problems/longest-common-prefix/" },
      { name: "Remove Element (27)", link: "https://leetcode.com/problems/remove-element/" }
    ], sql: [
      { name: "Employee Bonus", link: "https://leetcode.com/problems/employee-bonus/" }
    ]
  },
  { day: 4, python: [
      { name: "Find Index of First Occurrence (28)", link: "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/" },
      { name: "Merge Sorted Array (88)", link: "https://leetcode.com/problems/merge-sorted-array/" }
    ], sql: [
      { name: "Second Highest Salary", link: "https://leetcode.com/problems/second-highest-salary/" }
    ]
  },
  { day: 5, python: [
      { name: "First Unique Character (387)", link: "https://leetcode.com/problems/first-unique-character-in-a-string/" },
      { name: "Best Time to Buy/Sell Stock (121)", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/" }
    ], sql: [
      { name: "Employees Earning More Than Managers", link: "https://leetcode.com/problems/employees-earning-more-than-their-managers/" }
    ]
  },
  { day: 6, python: [
      { name: "Valid Anagram (242)", link: "https://leetcode.com/problems/valid-anagram/" },
      { name: "Move Zeroes (283)", link: "https://leetcode.com/problems/move-zeroes/" }
    ], sql: [
      { name: "Department Highest Salary", link: "https://leetcode.com/problems/department-highest-salary/" }
    ]
  },
  { day: 7, python: [
      { name: "Add Binary (67)", link: "https://leetcode.com/problems/add-binary/" },
      { name: "Plus One (66)", link: "https://leetcode.com/problems/plus-one/" }
    ], sql: [
      { name: "Rank Scores", link: "https://leetcode.com/problems/rank-scores/" }
    ]
  },
  { day: 8, python: [
      { name: "Length of Last Word (58)", link: "https://leetcode.com/problems/length-of-last-word/" },
      { name: "Contains Duplicate (217)", link: "https://leetcode.com/problems/contains-duplicate/" }
    ], sql: [
      { name: "Consecutive Numbers", link: "https://leetcode.com/problems/consecutive-numbers/" }
    ]
  },
  { day: 9, python: [
      { name: "Implement strStr() (28)", link: "https://leetcode.com/problems/implement-strstr/" },
      { name: "Valid Sudoku (36)", link: "https://leetcode.com/problems/valid-sudoku/" }
    ], sql: [
      { name: "Managers with At Least 5 Direct Reports", link: "https://leetcode.com/problems/managers-with-at-least-5-direct-reports/" }
    ]
  },
  { day: 10, python: [
      { name: "Roman to Integer (13)", link: "https://leetcode.com/problems/roman-to-integer/" },
      { name: "Intersection of Two Arrays II (350)", link: "https://leetcode.com/problems/intersection-of-two-arrays-ii/" }
    ], sql: [
      { name: "Trips and Users", link: "https://leetcode.com/problems/trips-and-users/" }
    ]
  },
  { day: 11, python: [
      { name: "Integer to Roman (12)", link: "https://leetcode.com/problems/integer-to-roman/" },
      { name: "Majority Element (169)", link: "https://leetcode.com/problems/majority-element/" }
    ], sql: [
      { name: "Rising Temperature", link: "https://leetcode.com/problems/rising-temperature/" }
    ]
  },
  { day: 12, python: [
      { name: "String to Integer (8)", link: "https://leetcode.com/problems/string-to-integer-atoi/" },
      { name: "Rotate Array (189)", link: "https://leetcode.com/problems/rotate-array/" }
    ], sql: [
      { name: "Classes More Than 5 Students", link: "https://leetcode.com/problems/classes-more-than-5-students/" }
    ]
  },
  { day: 13, python: [
      { name: "Zigzag Conversion (6)", link: "https://leetcode.com/problems/zigzag-conversion/" },
      { name: "Summary Ranges (228)", link: "https://leetcode.com/problems/summary-ranges/" }
    ], sql: [
      { name: "Not Boring Movies", link: "https://leetcode.com/problems/not-boring-movies/" }
    ]
  },
  { day: 14, python: [
      { name: "Longest Palindromic Substring (5)", link: "https://leetcode.com/problems/longest-palindromic-substring/" },
      { name: "Missing Number (268)", link: "https://leetcode.com/problems/missing-number/" }
    ], sql: [
      { name: "Average Salary: Departments vs Company", link: "https://leetcode.com/problems/average-salary-departments-vs-company/" }
    ]
  },
  { day: 15, python: [
      { name: "Group Anagrams (49)", link: "https://leetcode.com/problems/group-anagrams/" },
      { name: "Contains Duplicate II (219)", link: "https://leetcode.com/problems/contains-duplicate-ii/" }
    ], sql: [
      { name: "Project Employees I", link: "https://leetcode.com/problems/project-employees-i/" }
    ]
  },
  { day: 16, python: [
      { name: "Count and Say (38)", link: "https://leetcode.com/problems/count-and-say/" },
      { name: "Product of Array Except Self (238)", link: "https://leetcode.com/problems/product-of-array-except-self/" }
    ], sql: [
      { name: "Big Countries", link: "https://leetcode.com/problems/big-countries/" }
    ]
  },
  { day: 17, python: [
      { name: "Multiply Strings (43)", link: "https://leetcode.com/problems/multiply-strings/" },
      { name: "Maximum Subarray (53)", link: "https://leetcode.com/problems/maximum-subarray/" }
    ], sql: [
      { name: "Game Play Analysis I", link: "https://leetcode.com/problems/game-play-analysis-i/" }
    ]
  },
  { day: 18, python: [
      { name: "Simplify Path (71)", link: "https://leetcode.com/problems/simplify-path/" },
      { name: "Merge Intervals (56)", link: "https://leetcode.com/problems/merge-intervals/" }
    ], sql: [
      { name: "Customer Placing the Largest Number of Orders", link: "https://leetcode.com/problems/customer-placing-the-largest-number-of-orders/" }
    ]
  },
  { day: 19, python: [
      { name: "Valid Parentheses (20)", link: "https://leetcode.com/problems/valid-parentheses/" },
      { name: "3Sum (15)", link: "https://leetcode.com/problems/3sum/" }
    ], sql: [
      { name: "Department Top Three Salaries", link: "https://leetcode.com/problems/department-top-three-salaries/" }
    ]
  },
  { day: 20, python: [
      { name: "Longest Substring Without Repeating Characters (3)", link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/" },
      { name: "Container With Most Water (11)", link: "https://leetcode.com/problems/container-with-most-water/" }
    ], sql: [
      { name: "Exchange Seats", link: "https://leetcode.com/problems/exchange-seats/" }
    ]
  }
];

// --------------------------------------
// 2️⃣ Variables
// --------------------------------------
const savedProgress = JSON.parse(localStorage.getItem("trackerData")) || {};
const solvedDates = JSON.parse(localStorage.getItem("solvedDates")) || {};
const trackerDiv = document.getElementById("tracker");
const progressBar = document.getElementById("progress-bar");
const resetBtn = document.getElementById("reset-btn");
const daysCompletedSpan = document.getElementById("days-completed");
const problemsSolvedSpan = document.getElementById("problems-solved");
const totalTasks = data.length * 3;
let completedTasks = Object.values(savedProgress).filter(v => v).length;

// --------------------------------------
// 3️⃣ Render Tracker
// --------------------------------------
data.forEach((item) => {
  const dayDiv = document.createElement("div");
  dayDiv.className = "day";
  dayDiv.id = `day-${item.day}`;

  const dayLocked = !isDayUnlocked(item.day);
  const dateInfo = solvedDates[item.day]
    ? `<div class="solved-date">📅 Solved on: ${solvedDates[item.day]}</div>`
    : `<div class="solved-date">Not yet solved</div>`;

  dayDiv.innerHTML = `<h2>${dayLocked ? "🔒" : "📅"} Day ${item.day}</h2>${dateInfo}`;

  const problems = [
    ...item.python.map(p => ({ title: `🐍 ${p.name}`, key: `day${item.day}-py-${p.name}`, link: p.link })),
    ...item.sql.map(p => ({ title: `🧠 ${p.name}`, key: `day${item.day}-sql-${p.name}`, link: p.link }))
  ];

  problems.forEach((prob) => {
    const taskDiv = document.createElement("div");
    taskDiv.className = "task";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = savedProgress[prob.key] || false;
    checkbox.disabled = dayLocked;

    const link = document.createElement("a");
    link.textContent = prob.title;
    link.href = prob.link;
    link.target = "_blank";

    if (checkbox.checked) link.classList.add("done");

    checkbox.addEventListener("change", () => {
      savedProgress[prob.key] = checkbox.checked;
      localStorage.setItem("trackerData", JSON.stringify(savedProgress));

      if (checkbox.checked) {
        link.classList.add("done");
        completedTasks++;
      } else {
        link.classList.remove("done");
        completedTasks--;
      }

      updateProgress();
      unlockNextDayIfCompleted(item.day);
    });

    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(link);
    dayDiv.appendChild(taskDiv);
  });

  trackerDiv.appendChild(dayDiv);
});

// --------------------------------------
// 4️⃣ Progress bar + Summary
// --------------------------------------
function updateProgress() {
  const percent = Math.round((completedTasks / totalTasks) * 100);
  progressBar.style.width = percent + "%";
  progressBar.textContent = `${percent}%`;
  problemsSolvedSpan.textContent = completedTasks;

  const completedDays = data.filter(dayObj => {
    const allKeys = [
      ...dayObj.python.map(p => `day${dayObj.day}-py-${p.name}`),
      ...dayObj.sql.map(p => `day${dayObj.day}-sql-${p.name}`)
    ];
    return allKeys.every(k => savedProgress[k]);
  }).length;

  daysCompletedSpan.textContent = completedDays;
}
updateProgress();

// --------------------------------------
// 5️⃣ Unlock logic + Date Save
// --------------------------------------
function isDayUnlocked(day) {
  if (day === 1) return true;
  const prevDay = day - 1;
  const prevDayTasks = data.find(d => d.day === prevDay);
  const prevDayKeys = [
    ...prevDayTasks.python.map(p => `day${prevDay}-py-${p.name}`),
    ...prevDayTasks.sql.map(p => `day${prevDay}-sql-${p.name}`)
  ];
  return prevDayKeys.every(key => savedProgress[key]);
}

function unlockNextDayIfCompleted(day) {
  const thisDay = data.find(d => d.day === day);
  const thisDayKeys = [
    ...thisDay.python.map(p => `day${day}-py-${p.name}`),
    ...thisDay.sql.map(p => `day${day}-sql-${p.name}`)
  ];

  const isComplete = thisDayKeys.every(k => savedProgress[k]);

  if (isComplete) {
    if (!solvedDates[day]) {
      const today = new Date().toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
      solvedDates[day] = today;
      localStorage.setItem("solvedDates", JSON.stringify(solvedDates));

      const dayElement = document.getElementById(`day-${day}`);
      const dateElement = dayElement.querySelector(".solved-date");
      if (dateElement) dateElement.textContent = `📅 Solved on: ${today}`;
    }

    const nextDiv = document.getElementById(`day-${day + 1}`);
    if (nextDiv) {
      nextDiv.querySelectorAll("input").forEach(i => (i.disabled = false));
      nextDiv.querySelector("h2").innerHTML = `📅 Day ${day + 1}`;
    }
  }
  updateProgress();
}

// --------------------------------------
// 6️⃣ Reset progress
// --------------------------------------
resetBtn.addEventListener("click", () => {
  if (confirm("Reset all progress and dates?")) {
    localStorage.removeItem("trackerData");
    localStorage.removeItem("solvedDates");
    window.location.reload();
  }
});

// --------------------------------------
// 🌙 7️⃣ Dark/Light Theme + Toast
// --------------------------------------
const toggleBtn = document.getElementById("theme-toggle");
const toast = document.getElementById("toast");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
  toggleBtn.textContent = "☀️ Light Mode";
} else {
  toggleBtn.textContent = "🌙 Dark Mode";
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    toggleBtn.textContent = "☀️ Light Mode";
    localStorage.setItem("theme", "dark");
    showToast("🌙 Dark Mode Enabled");
  } else {
    toggleBtn.textContent = "🌙 Dark Mode";
    localStorage.setItem("theme", "light");
    showToast("☀️ Light Mode Enabled");
  }
});

