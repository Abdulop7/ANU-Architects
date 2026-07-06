// app/dashboard/layout.js  (server component - NO "use client" here)

import DashboardShell from "./dashboardShell";
import Maintenance from "@/components/Maintenance";

export const metadata = {
  title: "Dashboard - ANU Architects",
  description:
    "A&U Architects in Multan, Punjab, Pakistan – expert architect, interior designer & custom home builders. Quality construction & design near you.",
};



export default function DashboardLayout({ children }) {
  if (process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true") {
    return (
      <html lang="en" className="dark">
        <body>
          <Maintenance />
        </body>
      </html>
    );
  }

  // server wrapper: can pass children down to the client shell
  return <DashboardShell>{children}</DashboardShell>;
}
