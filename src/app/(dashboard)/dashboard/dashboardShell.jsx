"use client";

import { useEffect, useState } from "react";
import Sidebar from "../sidebar";
import { useSwipeable } from "react-swipeable";
import "../../globals.css";
import { RoleContext } from "../../../../lib/roleContext";
import { useRouter } from "next/navigation";

export const metadata = {
  title: "Dashboard - ANU Architects",
  description: "A&U Architects in Multan, Punjab, Pakistan – expert architect, interior designer & custom home builders. Quality construction & design near you.",
};

export default function DashboardShell({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [role, setRole] = useState(null);
  const [data, setData] = useState({})
  const [projects, setProjects] = useState([])
  const [tasks, setTasks] = useState([])
  const [activity, setActivity] = useState([])
  const [workLog, setWorkLog] = useState([])
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const res = await fetch("/api/session");
      const data = await res.json();

      console.log(data);


      if (!data.loggedIn) {
        router.replace("/login");
      } else {
        setRole(data.role);
        setData(data)

        const [projRes, tasksRes, actvityRes, workLogsRes, usersRes] = await Promise.all([
          fetch("/api/projects"),
          fetch("/api/tasks"),
          fetch("/api/activity"),
          fetch("/api/work-logs"),
          fetch("/api/users"),
        ]);

        const [projects, tasks, activity, workLog, users] = await Promise.all([
          projRes.json(),
          tasksRes.json(),
          actvityRes.json(),
          workLogsRes.json(),
          usersRes.json(),
        ]);

        setProjects(projects)
        setTasks(tasks)
        setActivity(activity)
        setWorkLog(workLog)
        setUsers(users)
        setLoading(false)
      }


    };

    checkSession();
  }, [router]);



  const handlers = useSwipeable({
    onSwipedLeft: () => setSidebarOpen(false),  // swipe left closes
    onSwipedRight: () => setSidebarOpen(true),  // swipe right opens
    preventScrollOnSwipe: true,
    trackMouse: true, // lets you test with mouse drag too
  });

  return (
    <html lang="en">
      <body {...handlers} className="h-screen ">
        <RoleContext.Provider value={{ role: role, id: data.userId, projects: projects, workLog: workLog, tasks: tasks, activity: activity, contextLoading: loading , users:users}} >
          <div className="flex w-full h-full">
            {/* Sidebar */}
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} session={data} />
            {/* Page Content */}
            {children}
          </div>
        </RoleContext.Provider>
      </body>
    </html>
  );
}
