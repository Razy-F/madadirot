import { Plus_Jakarta_Sans, Cairo } from "next/font/google";

export const jakartaSans = Plus_Jakarta_Sans({
    subsets:['latin'],
    variable:"--jakarta-sans",
    display:"swap"
});

export const cairo = Cairo({
    subsets:['arabic'],
    variable:"--cairo-font",
    display:"swap"
});