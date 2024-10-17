"use client";
import ReactPlayer from "react-player";

export default function VideoComponent() {
  return (
    <section
      id="video"
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
    >
      <div className="container px-4 md:px-6  max-w-screen-lg mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          See TrafficFlow AI in Action
        </h2>
        <div className="aspect-video overflow-hidden rounded-xl border bg-muted border-black">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=yDd7-KH2jxA&ab_channel=Vicky"
            width="100%"
            height="100%"
            controls
            light
          />
        </div>
      </div>
    </section>
  );
}
