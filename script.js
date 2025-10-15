// --------------------------------------
// 1️⃣ Daily Data (Each has clickable LeetCode links)
// --------------------------------------
const data = [
  { day: 1, python: [
      { name: "Reverse String (344)", link: "https://leetcode.com/problems/reverse-string/" },
      { name: "Two Sum (1)", link: "https://leetcode.com/problems/two-sum/" }
    ],
    sql: [
      { name: "Combine Two Tables", link: "https://leetcode.com/problems/combine-two-tables/" }
    ]
  },
  { day: 2, python: [
      { name: "Valid Palindrome (125)", link: "https://leetcode.com/problems/valid-palindrome/" },
      { name: "Remove Duplicates (26)", link: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/" }
    ],
    sql: [
      { name: "Customers Who Never Order", link: "https://leetcode.com/problems/customers-who-never-order/" }
    ]
  },
  { day: 3, python: [
      { name: "Longest Common Prefix (14)", link: "https://leetcode.com/problems/longest-common-prefix/" },
      { name: "Remove Element (27)", link: "https://leetcode.com/problems/remove-element/" }
    ],
    sql: [
      { name: "Employee Bonus", link: "https://leetcode.com/problems/employee-bonus/" }
    ]
  },
  // ... keep the remaining days (same as before)
  { day: 20, python: [
      { name: "Longest Substring Without Repeating Characters (3)", link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/" },
      { name: "Container With Most Water (11)", link: "https://leetcode.com/problems/container-with-most-water/" }
    ],
    sql: [
      { name: "Exchange Seats", link: "https://leetcode.com/problems/exchange-seats/" }
    ]
  }
];

// --------------------------------------
// 2️⃣ Tracker setup
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

  // Count fully completed days
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
// 5️⃣ Unlock + Date Save Logic
// --------------------------------------
function isDayUnlocked(day) {
  if (day === 1) return true;
  const prevDay = day - 1;
  const prevDayTasks = data.find(d => d.day === prevDay);
  if (!prevDayTasks) return true;

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
    // Save solved date if not already saved
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
// 🌙 7️⃣ Theme Toggle
// --------------------------------------
const toggleBtn = document.getElementById("toggle-btn");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
  toggleBtn.textContent = "☀️ Light Mode";
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    toggleBtn.textContent = "☀️ Light Mode";
    localStorage.setItem("theme", "dark");
  } else {
    toggleBtn.textContent = "🌙 Dark Mode";
    localStorage.setItem("theme", "light");
  }
});
