"use client";

import { useAdminStore } from "@/lib/adminStore";
import { LoginForm } from "@/components/admin/LoginForm";
import { Dashboard } from "@/components/admin/Dashboard";

export default function AdminPage() {
  const { isAuthenticated } = useAdminStore();
  return isAuthenticated ? <Dashboard /> : <LoginForm />;
}
