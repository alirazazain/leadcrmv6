import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { DashboardLayout } from '../layouts/DashboardLayout';
import { LeadsPage } from '../pages/LeadsPage';
import { CreateLeadPage } from '../pages/CreateLeadPage';
import { LeadDetailsPage } from '../pages/LeadDetailsPage';
import { EditLeadPage } from '../pages/EditLeadPage';
import { CompaniesPage } from '../pages/CompaniesPage';
import { EmailVerifierPage } from '../pages/EmailVerifierPage';
import { AnalyticsPage } from '../pages/AnalyticsPage';
import { UsersListPage } from '../pages/UsersListPage';
import { TeamsPage } from '../pages/TeamsPage';
import { RolesPage } from '../pages/RolesPage';
import { EditRolePage } from '../pages/EditRolePage';
import { SettingsPage } from '../pages/SettingsPage';
import { ProtectedRoute } from './ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/login" replace />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: 'dashboard',
        element: <DashboardPage />,
      },
      {
        path: 'leads',
        element: <LeadsPage />,
      },
      {
        path: 'leads/create',
        element: <CreateLeadPage />,
      },
      {
        path: 'leads/:id',
        element: <LeadDetailsPage />,
      },
      {
        path: 'leads/:id/edit',
        element: <EditLeadPage />,
      },
      {
        path: 'companies',
        element: <CompaniesPage />,
      },
      {
        path: 'email-verifier',
        element: <EmailVerifierPage />,
      },
      {
        path: 'analytics',
        element: <AnalyticsPage />,
      },
      {
        path: 'users/list',
        element: <UsersListPage />,
      },
      {
        path: 'users/teams',
        element: <TeamsPage />,
      },
      {
        path: 'users/roles',
        element: <RolesPage />,
      },
      {
        path: 'users/roles/:id',
        element: <EditRolePage />,
      },
      {
        path: 'settings',
        element: <SettingsPage />,
      },
    ],
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}