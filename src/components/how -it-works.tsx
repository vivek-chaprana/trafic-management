import { AlertTriangle, BarChart2, Map } from "lucide-react";

export default function HowItWorksComponent() {
  return (
    <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6  max-w-screen-lg mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
          How It Works
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <Map className="h-12 w-12 mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-2">Real-time Monitoring</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Advanced sensors and cameras collect real-time traffic data.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <BarChart2 className="h-12 w-12 mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-2">AI Analysis</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Our AI algorithms analyze traffic patterns and predict potential
              congestion points.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <AlertTriangle className="h-12 w-12 mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-2">Smart Interventions</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Automated systems adjust traffic signals and provide real-time
              navigation suggestions .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
