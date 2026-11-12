// All projects live here. To add one: copy a { ... } block, paste it, edit the values.
// Keep the comma after each closing }.
//
// category: "networking", "system-design" or "misc" (picks which section it shows in)
// date:     any text, e.g. "Fall 2025"
// github:   full link to the repo, or "" to hide the link
// images:   screenshot paths, put the files in images/ (first one is shown on the card)
// details:  the full write-up, written as HTML (<p>, <ul>, <li>, <b> ...)

const PROJECTS = [
  {
    title: "HTTP Server Benchmark",
    category: "networking",
    date: "2025",
    github: "",
    tech: "Python, C, Go, Rust",
    summary: "The same HTTPS server in four languages, load-tested on a Raspberry Pi 5.",
    images: ["headshot.jpg", "headshot.jpg"],
    details: `
      <p>Wrote the same HTTPS server four times, in Python, C, Go and Rust, ran it on a Raspberry Pi 5, and load-tested it with <code>wrk</code> at 10, 100 and 1,000 concurrent connections.</p>
      <p>Go, C and Rust all leveled off at about 56,500 requests per second, which works out to 99.4% of the Pi's 1 Gbps Ethernet. The bottleneck was the network hardware, not the code.</p>
    `,
  },
  {
    title: "Course Scheduler",
    category: "system-design",
    date: "2025",
    github: "",
    tech: "Java, SQL",
    summary: "Admin and student app for courses, enrollment and scheduling.",
    images: ["headshot.jpg"],
    details: `
      <p>A Java desktop app with admin and student views that handles courses, enrollment and scheduling in one place, replacing manual course-management work.</p>
    `,
  },
  {
    title: "Face Recognition Attendance",
    category: "misc",
    date: "2025",
    github: "",
    tech: "Python, OpenCV, NumPy",
    summary: "Takes attendance by recognizing faces from a live camera.",
    images: ["headshot.jpg"],
    details: `
      <p>A real-time attendance system that recognizes known faces from a live camera feed and logs each person's name and arrival time to a CSV file, so nobody has to take roll call.</p>
    `,
  },
  {
    title: "STM32 Pong",
    category: "misc",
    date: "2025",
    github: "",
    tech: "Embedded C, STM32",
    summary: "Pong on a microcontroller, wired and programmed from scratch.",
    images: ["headshot.jpg"],
    details: `
      <p>Programmed and wired an STM32 microcontroller from scratch to run a playable Pong game controlled with physical buttons. Built with IEEE at Penn State.</p>
    `,
  },
];
