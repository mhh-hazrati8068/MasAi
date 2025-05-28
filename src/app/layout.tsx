import { Inter } from "next/font/google";
import "./globals.css";
import BaseLayout from "@/components/layouts/base";
const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <head>
        {/* <script>self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;</script> */}
      </head>
      <body className={inter.className}>
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
}
