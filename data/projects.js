const projects = [
  {
    id: "bazar-dor",
    name: "Bazar Dor",
    tagline: "Bengali daily market price tracker",
    description:
      "A Bengali price-tracker app that shows today’s prices and price changes for everyday essentials, helping users check market rates quickly.",
    image: "/project-1.png",
    imageAlt: "Bazar Dor homepage showing Bengali market prices",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "HeroUI",
      "DaisyUI",
      "Better Auth",
      "MongoDB",
      "ESLint",
    ],
    liveUrl: "https://ph-assignment-7-lovat.vercel.app",
    githubUrl: "https://github.com/solaimanalideveloper/PH-Assignment-7",
    features: [
      "Secure email/password sign-up and login, plus Google and GitHub OAuth using Better Auth.",
      "Homepage displaying products with rising and falling prices, with category and product detail pages.",
      "Protected user profile with update functionality, form validation, and toast notifications.",
    ],
    challenges:
      "One of the main challenges was organizing product data, displaying price comparisons, handling category-based filtering, and creating a clean, responsive interface for a better user experience.",
    futurePlans:
      "I plan to integrate real-time market price APIs, add user location-based pricing, advanced search and filtering, price history charts, and an admin dashboard for better data management.",
  },
  {
    id: "booknook",
    name: "BookNook",
    tagline: "Neighborhood book sharing platform",
    description:
      "A full-stack neighborhood book-sharing app that helps people find and lend books locally without a library card. Members can list their own books and borrow books from others for seven days.",
    image: "/project-2.png",
    imageAlt: "BookNook neighborhood book-sharing application",
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "shadcn/ui",
      "Swiper.js",
      "React Toastify",
      "Better Auth",
      "Node.js",
      "Express 5",
      "MongoDB",
      "JWT (JOSE)",
      "Vercel",
    ],
    liveUrl: "https://book-nook-sigma-ten.vercel.app",
    githubUrl: "https://github.com/solaimanalideveloper/book-nook",
    githubServerUrl:
      "https://github.com/solaimanalideveloper/book-nook-server-side",
    features: [
      "Create, view, edit, and delete books with ownership checks; books currently on loan cannot be deleted.",
      "Borrow and return books with available-copy tracking, due dates, and protection against duplicate active borrows.",
      "Email/password and Google/GitHub login, protected routes, and a JWT-secured Express API.",
      "Responsive interface with light/dark themes, category-based browsing, and book-cover image uploads.",
    ],
    challenges:
      "One of the main challenges was implementing book borrowing and return functionality, managing available book copies, handling user authentication, and keeping book data synchronized with the database.",
    futurePlans:
      "I plan to add book reviews and ratings, advanced search and filtering, borrowing history, overdue notifications, and an admin dashboard to improve the overall library management experience.",
  },
  {
    id: "fitlog",
    name: "FitLog",
    tagline: "Workout library and gym companion",
    description:
      "A modern workout library and gym companion app that helps users explore exercises, learn workout techniques, organize workout plans, and stay consistent with their fitness goals.",
    image: "/project-3.png",
    imageAlt: "FitLog workout library and fitness progress interface",
    technologies: [
      "Next.js App Router",
      "React.js",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Context API",
      "REST API",
      "localStorage",
      "react-hot-toast",
      "Lucide React",
      "ESLint",
    ],
    liveUrl: "https://ph-assignment-6-tau.vercel.app/",
    githubUrl: "https://github.com/solaimanalideveloper/PH-Assignment-6",
    features: [
      "Workout library covering major muscle groups, including Chest, Back, Arms, Legs, Core, and Full Body.",
      "Detailed workout pages with exercise descriptions, equipment, difficulty levels, sets, reps, duration, and estimated calories.",
      "Step-by-step exercise instructions to help users perform workouts correctly.",
      "Add exercises to daily workout plans and save favorite exercises for later.",
    ],
    challenges:
      "TODO: Describe the development challenges faced while building FitLog.",
    futurePlans:
      "TODO: Describe potential improvements or future plans for FitLog.",
  },
];

export default projects;
