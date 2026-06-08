"use server"

import { Redis } from '@upstash/redis'

const redis = Redis.fromEnv()

export async function getDashboardData(id) {
    try {
        const cached = await redis.get(`dashboard_data=${id}`);
        if (cached) {
            console.log(`CACHE HIT: dashboard_data=${id}`);
            return cached;
        }
        console.log("CACHE MISS: dashboard_data");
    } catch (e) {
        console.error("Redis Read Error:", e);
    }
    return null;
}

export async function setDashboardData(data,id) {
    try {
        await redis.set(`dashboard_data=${id}`, data, { ex: 300 });
        console.log(`CACHE SET: dashboard_data=${id}`);
    } catch (e) {
        console.error("Redis Write Error:", e);
    }
}
