"use client";

import Header from "../components/Header";
import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Next Stop - Travel Planner",
    description: "AI-powered travel planning web app that generates personalized trip recommendations based on user preferences and budget.",
    githubUrl: "https://github.com/Euna-kim-1/hackathon-web",
    liveDemoUrl: "https://www.linkedin.com/posts/seunggyu-park_hackathon-yyctech-ai-activity-7290783337009295362-xn1H?utm_source=share&utm_medium=member_desktop&rcm=ACoAAENe8OoBCwblEIA7Cw3t1xnTwG3IywNw7rk",
    image: "/project1.png", 
  },
  {
    id: 2,
    title: "CaCart",
    description: "CaCart, the only e-commerce solutions you need to grow your business.",
    githubUrl: "https://github.com/Snow-Penguins/cacart",
    liveDemoUrl: "https://ca-cart-frontend.vercel.app/",
    image: "/project2.png", 
  },
  {
    id: 3,
    title: "Acupuncture Clinic Website",
    description: "A streamlined online booking application for a personal acupuncture clinic.",
    githubUrl: "https://github.com/ElleLeee/capstone",
    liveDemoUrl: "/videos/cliniclivedemo.mp4",
    isVideo: true,
    image: "/project1-1.png", 
  },
  {
    id: 4,
    title: "Study Tracking App",
    description: "A program that tracks the user's study progress and provides personalized recommendations for improvement.",
    githubUrl: "https://github.com/jw-noah-park/study-tracking-app",
    liveDemoUrl: "https://study-tracking-app-three.vercel.app/",
    image: "/project8.png", 
  },
  {
    id: 5,
    title: "Snake Game",
    description: "A program is a classic snake game where players control a growing snake to eat food while avoiding collisions with walls and themselves.",
    githubUrl: "https://github.com/Euna-kim-1/Snake_game.git",
    liveDemoUrl: "/videos/snake_game-1.mp4",
    image: "/project3.png", 
  },
  {
    id: 6,
    title: "US State Game",
    description: "Players guess the names of US states, and if they guess correctly, the corresponding state is displayed on the map.",
    githubUrl: "https://github.com/Euna-kim-1/us-state-game",
    liveDemoUrl: "/videos/us_state_game.mp4",
    image: "/project5.png", 
  },
];

export default function ProjectsPage() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const isVideoUrl = (url: string | null) => {
    if (!url) return false;
    return url.endsWith('.mp4') || url.endsWith('.webm') || url.endsWith('.mov') || url.includes('/videos/');
  };

  const handleLiveDemoClick = (url: string, isVideo?: boolean) => {
    if (isVideo || isVideoUrl(url)) {
      setSelectedVideo(url);
    }
  };

  return (
    <div className="bg-white relative min-h-screen">
      <Header />
      
      <main className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="mb-12 text-center">
          <p className="text-lg text-amber-700 mb-2">Browse My Recent</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Projects
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Here you will find a selection of projects I have worked on.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {/* First Row */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.slice(0, 2).map((project) => (
              <div key={project.id} className="bg-white/80 backdrop-blur-sm rounded-2xl border border-amber-100 shadow-lg overflow-hidden">
                <div className="relative w-full h-48 bg-amber-50">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h2>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 rounded-lg border-2 border-amber-800 text-amber-900 font-medium hover:bg-amber-800 hover:text-white transition-colors text-center"
                      >
                        GitHub
                      </a>
                    )}
                    {!project.githubUrl && (
                      <button
                        className="flex-1 px-4 py-2 rounded-lg border-2 border-amber-300 text-amber-700 font-medium bg-amber-50 cursor-not-allowed"
                        disabled
                      >
                        GitHub
                      </button>
                    )}
                    {project.liveDemoUrl && (isVideoUrl(project.liveDemoUrl) || (project as any).isVideo) ? (
                      <button
                        onClick={() => handleLiveDemoClick(project.liveDemoUrl!, (project as any).isVideo)}
                        className="flex-1 px-4 py-2 rounded-lg border-2 border-amber-800 text-amber-900 font-medium hover:bg-amber-800 hover:text-white transition-colors text-center"
                      >
                        Live Demo
                      </button>
                    ) : project.liveDemoUrl ? (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 rounded-lg border-2 border-amber-800 text-amber-900 font-medium hover:bg-amber-800 hover:text-white transition-colors text-center"
                      >
                        Live Demo
                      </a>
                    ) : null}
                    {!project.liveDemoUrl && (
                      <button
                        className="flex-1 px-4 py-2 rounded-lg border-2 border-amber-300 text-amber-700 font-medium bg-amber-50 cursor-not-allowed"
                        disabled
                      >
                        Live Demo
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.slice(2, 4).map((project) => (
              <div key={project.id} className="bg-white/80 backdrop-blur-sm rounded-2xl border border-amber-100 shadow-lg overflow-hidden">
                <div className="relative w-full h-48 bg-amber-50">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h2>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 rounded-lg border-2 border-amber-800 text-amber-900 font-medium hover:bg-amber-800 hover:text-white transition-colors text-center"
                      >
                        GitHub
                      </a>
                    )}
                    {!project.githubUrl && (
                      <button
                        className="flex-1 px-4 py-2 rounded-lg border-2 border-amber-300 text-amber-700 font-medium bg-amber-50 cursor-not-allowed"
                        disabled
                      >
                        GitHub
                      </button>
                    )}
                    {project.liveDemoUrl && (isVideoUrl(project.liveDemoUrl) || (project as any).isVideo) ? (
                      <button
                        onClick={() => handleLiveDemoClick(project.liveDemoUrl!, (project as any).isVideo)}
                        className="flex-1 px-4 py-2 rounded-lg border-2 border-amber-800 text-amber-900 font-medium hover:bg-amber-800 hover:text-white transition-colors text-center"
                      >
                        Live Demo
                      </button>
                    ) : project.liveDemoUrl ? (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 rounded-lg border-2 border-amber-800 text-amber-900 font-medium hover:bg-amber-800 hover:text-white transition-colors text-center"
                      >
                        Live Demo
                      </a>
                    ) : null}
                    {!project.liveDemoUrl && (
                      <button
                        className="flex-1 px-4 py-2 rounded-lg border-2 border-amber-300 text-amber-700 font-medium bg-amber-50 cursor-not-allowed"
                        disabled
                      >
                        Live Demo
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Third Row */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.slice(4, 6).map((project) => (
              <div key={project.id} className="bg-white/80 backdrop-blur-sm rounded-2xl border border-amber-100 shadow-lg overflow-hidden">
                <div className="relative w-full h-48 bg-amber-50">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h2>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 rounded-lg border-2 border-amber-800 text-amber-900 font-medium hover:bg-amber-800 hover:text-white transition-colors text-center"
                      >
                        GitHub
                      </a>
                    )}
                    {!project.githubUrl && (
                      <button
                        className="flex-1 px-4 py-2 rounded-lg border-2 border-amber-300 text-amber-700 font-medium bg-amber-50 cursor-not-allowed"
                        disabled
                      >
                        GitHub
                      </button>
                    )}
                    {project.liveDemoUrl && (isVideoUrl(project.liveDemoUrl) || (project as any).isVideo) ? (
                      <button
                        onClick={() => handleLiveDemoClick(project.liveDemoUrl!, (project as any).isVideo)}
                        className="flex-1 px-4 py-2 rounded-lg border-2 border-amber-800 text-amber-900 font-medium hover:bg-amber-800 hover:text-white transition-colors text-center"
                      >
                        Live Demo
                      </button>
                    ) : project.liveDemoUrl ? (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 rounded-lg border-2 border-amber-800 text-amber-900 font-medium hover:bg-amber-800 hover:text-white transition-colors text-center"
                      >
                        Live Demo
                      </a>
                    ) : null}
                    {!project.liveDemoUrl && (
                      <button
                        className="flex-1 px-4 py-2 rounded-lg border-2 border-amber-300 text-amber-700 font-medium bg-amber-50 cursor-not-allowed"
                        disabled
                      >
                        Live Demo
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={() => setSelectedVideo(null)}
        >
          <div 
            className="relative max-w-4xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-10 right-0 text-white hover:text-amber-300 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <video
              src={selectedVideo}
              controls
              autoPlay
              className="w-full rounded-lg"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
}
