"use client";

import { Suspense, useEffect, useState } from "react";
import { getDashboardData, setDashboardData } from "./actions";
import Sidebar from "../sidebar";
import { useSwipeable } from "react-swipeable";
import "../../globals.css";
import { RoleContext } from "@/lib/roleContext";
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
  const [reminders, setReminders] = useState([])
  const [leads, setLeads] = useState([])
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
        console.log(data);
        
        setRole(data.role);
        setData(data)

        let projects, tasks, activity, workLog, reminder, users, leads;

        try {
          const cachedData = await getDashboardData(data.userId);
          if (cachedData) {
            projects = cachedData.projects;
            tasks = cachedData.tasks;
            activity = cachedData.activity;
            workLog = cachedData.workLog;
            reminder = cachedData.reminder;
            users = cachedData.users;
            leads = cachedData.leads;
          }
        } catch (error) {
          console.error("Redis cache read error:", error);
        }

        if (!projects || !tasks) {

          console.log("Cache Miss");
          
          const [projRes, tasksRes, actvityRes, workLogsRes, reminderRes, usersRes, leadsRes] = await Promise.all([
            fetch("/api/projects"),
            fetch("/api/tasks"),
            fetch("/api/activity"),
            fetch("/api/work-logs"),
            fetch("/api/reminders"),
            fetch("/api/users"),
            fetch("/api/leads"),
          ]);

          [projects, tasks, activity, workLog, reminder, users, leads] = await Promise.all([
            projRes.json(),
            tasksRes.json(),
            actvityRes.json(),
            workLogsRes.json(),
            reminderRes.json(),
            usersRes.json(),
            leadsRes.json(),
          ]);

          try {
            await setDashboardData({ projects, tasks, activity, workLog, reminder, users, leads }, data.userId );
          } catch (error) {
            console.error("Redis cache write error:", error);
          }
        }

        setProjects(projects)
        setTasks(tasks)
        setActivity(activity)
        setWorkLog(workLog)
        setUsers(users)
        setReminders(reminder)
        setLeads(leads)
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
    <html lang="en" className="dark">
      <body {...handlers} className="h-screen bg-[#050505] text-white overflow-hidden selection:bg-accent selection:text-[#050505]">
        <RoleContext.Provider value={{ role: role, id: data.userId, projects: projects, workLog: workLog, tasks: tasks, activity: activity, contextLoading: loading, users: users, reminders: reminders, leads: leads, setReminders, setProjects }} >
          <div className="flex w-full h-full">
            {/* Sidebar */}
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} session={data} />
            {/* Page Content */}
            <div className="flex-1 overflow-y-auto w-full h-full relative scrollbar-none">
              <Suspense
                fallback={
                  <div className="flex items-center justify-center w-full h-full bg-[#050505] text-secondary tracking-[0.4em] text-[0.65rem] uppercase font-bold">
                    Initializing...
                  </div>
                }
              >
                <div className="px-6 py-10 md:px-12 md:py-16 max-w-[2000px] mx-auto min-h-full">
                  {children}
                </div>
              </Suspense>
            </div>
          </div>
        </RoleContext.Provider>
      </body>
    </html>
  );
}
