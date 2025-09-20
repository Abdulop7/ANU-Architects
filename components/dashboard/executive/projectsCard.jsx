import { Card, CardContent } from "../card";

const projects = [
  { name: "Corporate HQ Design", progress: 75 },
  { name: "Luxury Villas", progress: 50 },
  { name: "Downtown Mall", progress: 30 },
  { name: "Smart Homes Phase II", progress: 90 },
];

export default function ProjectsCard() {
  return (
    <Card className="rounded-2xl shadow-md h-full flex flex-col">
      <CardContent className="p-6 flex-1 flex flex-col">
        <h2 className="text-xl font-semibold mb-4">Active Projects</h2>
        <div className="space-y-4 flex-1">
          {projects.map((project, idx) => (
            <div key={idx}>
              <div className="flex justify-between mb-1">
                <span className="font-medium">{project.name}</span>
                <span className="text-sm text-gray-500">{project.progress}%</span>
              </div>
              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
