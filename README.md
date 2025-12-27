# Smart Land Registry - Frontend

This is the Next.js frontend for the **Secure Smart Land Registry System**. It provides a modern, responsive, and user-friendly interface for all stakeholders involved in the land registration and management process, including citizens, surveyors, land officers, and administrators.

## 🚀 Project Overview

This frontend application is a core component of a larger system designed to bring transparency, security, and efficiency to land registry. Built with cutting-edge technologies, it aims to solve critical issues like ownership disputes, fraudulent transactions, and cumbersome administrative processes.

## ✨ Key Features

The frontend implements several key modules of the system:

-   **🖥️ Admin Dashboard & Analytics:** A comprehensive dashboard displaying key metrics like total registered land, pending approvals, dispute hotspots, and fraud alerts.
-   **📝 Land Registration Workflow:** A guided, multi-step process for citizens to submit land registration applications and upload necessary documents.
-   **🔐 Ownership Management:** A secure interface to view, transfer, and verify land ownership records, with history tracked on the blockchain.
-   **⚖️ Advanced Dispute Resolution:** A dedicated module for filing, tracking, and resolving land-related disputes, complete with evidence upload and status tracking.
-   **📂 Document Management:** A secure portal for users to upload, view, and manage land titles, survey plans, and other legal documents.
-   **👤 Role-Based Access Control:** The interface dynamically adapts to different user roles (Citizen, Surveyor, Legal Officer, Admin), showing relevant information and actions.

## 🛠️ Tech Stack

-   **Framework:** [Next.js](https://nextjs.org/) (v14+)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **UI Components:** Custom-built components, leveraging [Lucide React](https://lucide.dev/) for icons.
-   **Data Visualization:** [Recharts](https://recharts.org/) for charts and analytics.
-   **Package Manager:** [pnpm](https://pnpm.io/)

##  Quick Start

To get the frontend development server running locally:

1.  **Navigate to the frontend directory:**
    ```bash
    cd frontend-nextjs
    ```

2.  **Install dependencies:**
    ```bash
    pnpm install
    ```

3.  **Run the development server:**
    ```bash
    pnpm run dev
    ```

4.  Open your browser and navigate to `http://localhost:3000`.

## 📂 Folder Structure

The project follows a standard Next.js App Router structure:

```
frontend-nextjs/
├── public/               # Static assets (images, fonts)
├── src/
│   ├── app/              # Application routes
│   │   ├── dashboard/    # Dashboard page
│   │   ├── dispute/      # Dispute resolution page
│   │   ├── documents/    # Document management page
│   │   ├── ownership/    # Ownership records page
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Main entry page (Login)
│   ├── components/       # Shared React components (e.g., AppShell, Modals)
│   └── globals.css       # Global styles for Tailwind CSS
├── next.config.mjs       # Next.js configuration
├── package.json
├── pnpm-lock.yaml
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## 📈 Future Enhancements

The current frontend provides a solid foundation. Future development could include:

-   **📱 Mobile-First Responsive App:** A dedicated mobile application for on-the-go access.
-   **🤖 AI-Powered Fraud Detection:** Integrating AI to flag suspicious activities in real-time.
-   **🤝 Government System Integration:** APIs to connect with existing government databases.
-   ** biometric Verification:** Adding a layer of security with biometric authentication.
