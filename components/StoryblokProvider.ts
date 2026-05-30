"use client";

import { ReactNode } from "react";
import { getStoryblokApi } from "../lib/storyblok";

interface ProviderProps {
    children: ReactNode;
}

export default function StoryblokProvider({ children }: ProviderProps) {
    getStoryblokApi();
    return children;
}