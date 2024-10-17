"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ActivitySquare,
  BarChart2,
  Camera,
  Cpu,
  Network,
  Server,
} from "lucide-react";

export function TechStackComponent() {
  const technologies = [
    {
      name: "YOLO Object Detection",
      icon: Camera,
      description:
        "Real-time vehicle and pedestrian detection using YOLO (You Only Look Once) algorithm with high-resolution traffic cameras",
    },
    {
      name: "Edge Computing",
      icon: Server,
      description:
        "Local processing using edge devices with GPUs for low-latency decision-making and real-time analysis",
    },
    {
      name: "Neural Networks",
      icon: Cpu,
      description:
        "Reinforcement learning algorithms for dynamic traffic signal optimization and pattern recognition",
    },
    {
      name: "Smart Controllers",
      icon: ActivitySquare,
      description:
        "AI-integrated traffic signal controllers for adaptive timing adjustments based on real-time conditions",
    },
    {
      name: "Data Processing",
      icon: Network,
      description:
        "Continuous data logging and processing for traffic density analysis and signal timing optimization",
    },
    {
      name: "Performance Monitoring",
      icon: BarChart2,
      description:
        "Real-time monitoring and visualization of traffic patterns, wait times, and system performance metrics",
    },
  ];
  return (
    <section
      id="tech-stack"
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container px-4 md:px-6  max-w-screen-lg mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
          Our Technology Stack
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((tech, index) => (
            <Card key={index} className="flex flex-col h-full">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <tech.icon className="h-6 w-6 text-primary" />
                  <span>{tech.name}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {tech.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
