import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        default: "Microsoft Entra Training | Identity & Access Management",
        template: "%s | Entra Training",
    },
    description:
        "Interactive training platform for Microsoft Entra - Learn Identity Management, Conditional Access, MFA, SSO, and Governance.",
    keywords: [
        "Microsoft Entra",
        "Entra ID",
        "Azure AD",
        "Identity Management",
        "Conditional Access",
        "MFA",
        "Single Sign-On",
        "Zero Trust",
        "SC-300",
        "Training",
    ],
    authors: [{ name: "Maheshwar" }],
    openGraph: {
        type: "website",
        locale: "en_US",
        title: "Microsoft Entra Training | Identity & Access Management",
        description:
            "Interactive training for Microsoft Entra ID, Conditional Access, and Identity Governance.",
        siteName: "Entra Training",
    },
    twitter: {
        card: "summary_large_image",
        title: "Microsoft Entra Training",
        description:
            "Interactive training for Microsoft Entra ID, Conditional Access, and Identity Governance.",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-950 text-gray-100 min-h-screen`}
            >
                {children}
            </body>
        </html>
    );
}
