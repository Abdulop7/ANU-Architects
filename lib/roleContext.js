"use client";
import { createContext, useContext } from "react";

export const RoleContext = createContext(null);

export const useRole = () => useContext(RoleContext);
