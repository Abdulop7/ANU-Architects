
import { CheckCircle, User, FileText } from "lucide-react";
import { Card, CardContent } from "../card";

const activities = [
  { icon: CheckCircle, text: "Project 'Smart Homes' reached 90% completion", time: "2h ago" },
  { icon: User, text: "Manager Sarah onboarded 3 new employees", time: "5h ago" },
  { icon: FileText, text: "Quarterly Financial Report uploaded", time: "1d ago" },
  { icon: User, text: "CEO hosted company-wide meeting", time: "2d ago" },
];

export default function RecentActivity() {
  return (
    <Card className="rounded-2xl shadow-md">
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {activities.map((activity, idx) => {
            const Icon = activity.icon;
            return (
              <div key={idx} className="flex items-start gap-3">
                <div className="p-2 rounded-full bg-orange-100 text-orange-600">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-gray-800">{activity.text}</p>
                  <p className="text-sm text-gray-500">{activity.time}</p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
