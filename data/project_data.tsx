export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  tagColor:
    | "blue"
    | "purple"
    | "green"
    | "pink"
    | "indigo"
    | "orange"
    | "cyan"
    | "yellow";
  liveDemo: string;
  github: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with secure payment integration, product management, and an admin dashboard.",
    image: "/assets/projects/screencapture-mern-ecommerce.png",
    tags: ["React", "Node.js", "MongoDB"],
    tagColor: "blue",
    liveDemo: "https://mern-ecommerce-23.vercel.app/",
    github: "https://github.com/EmranRifat/next-ecommerce",
  },
  {
    id: 2,
    title: "Delivery Management App",
    description:
      "A comprehensive delivery management system for local and international shipments with weight-based cost calculation, order tracking, and automated parcel management.",
    image: "/assets/projects/Screenshot_2.png",
    tags: ["Next.js", "TypeScript", "Django","PostgreSQL"],
    tagColor: "purple",
    liveDemo: "https://booking.bpodms.gov.bd/",
    github: "https://github.com/EmranRifat/Booking-bpodms-Frontend.git",
  },
  {
    id: 3,
    title: "EMTS Dashboard - Express Money Transfer System",
    description:
      "A comprehensive admin panel for managing express money transfers with real-time transaction monitoring, revenue flow analytics, post office management, and detailed transaction reporting with sender/receiver tracking.",
    image:
      "/assets/projects/emts-ekdak.png",
    tags: ["Next.js", "TypeScript", "Django", " PostgreSQL"],
    tagColor: "green",
    liveDemo: "https://emts.ekdak.com/",
    github: "https://github.com/EmranRifat/emts-Frontend--latest.git",
    
  },
  {
    id: 4,
    title: "Social Media Dashboard",
    description:
      "An advanced analytics dashboard to manage multiple social media accounts with post scheduling and insights.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tags: ["Vue.js", "Firebase", "Tailwind"],
    tagColor: "pink",
    liveDemo: "#",
    github: "#",
  },
  {
    id: 5,
    title: "Real-time Chat Application",
    description:
      "A modern real-time chat application featuring group conversations, file sharing, and video calling support.",
    image:
      "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&q=80",
    tags: ["Socket.io", "React", "Node.js"],
    tagColor: "indigo",
    liveDemo: "#",
    github: "#",
  },
  {
    id: 6,
    title: "Fitness Tracker",
    description:
      "A fitness tracking application to monitor workouts, nutrition, and progress with personalized recommendations.",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
    tags: ["React Native", "MongoDB", "Express"],
    tagColor: "orange",
    liveDemo: "#",
    github: "#",
  },
  {
    id: 7,
    title: "Weather Forecast App",
    description:
      "A weather forecasting app providing accurate, location-based forecasts with a clean and responsive UI.",
    image:
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
    tags: ["Next.js", "TypeScript", "OpenWeather API"],
    tagColor: "cyan",
    liveDemo: "#",
    github: "#",
  },
  {
    id: 8,
    title: "Recipe Sharing Platform",
    description:
      "A community-driven recipe sharing platform with ratings, comments, and video-based cooking tutorials.",
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80",
    tags: ["React", "PostgreSQL", "AWS S3"],
    tagColor: "yellow",
    liveDemo: "#",
    github: "#",
  },
];
