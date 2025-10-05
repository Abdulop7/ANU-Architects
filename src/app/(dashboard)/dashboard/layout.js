// app/dashboard/layout.js  (server component - NO "use client" here)

import DashboardShell from "./dashboardShell";

export const metadata = {
  title: "Dashboard - ANU Architects",
  description:
    "A&U Architects in Multan, Punjab, Pakistan – expert architect, interior designer & custom home builders. Quality construction & design near you.",
};



export default function DashboardLayout({ children }) {
  // server wrapper: can pass children down to the client shell
  return <DashboardShell>{children}</DashboardShell>;
}
