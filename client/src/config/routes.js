//Layouts
import LayoutProfesor from "../layout/LayoutProfesor";
import LayoutEstudiante from "../layout/LayoutEstudiante";
import LayoutBasic from "../layout/LayoutBasic";
import LayoutAdmin from "../layout/LayoutAdmin";
//pages

import HomeEstudiante from "../pages/EstudiantePage/HomeEstudiante";
import HomeProfesor from "../pages/ProfesorPage/HomeProfesor";
//import MainLogin from "../pages/MainLogin";
import Error from "../pages/Error";
import Registro from "../components/RegistroPage/Registro";
import LogInForm from "../components/LogInForm/LogInForm";
import Perfil from "../components/PerfilEstudiante/PerfilEstudiante";
import Chat from "../pages/Chat/Chat";
import Paciente from "../components/Paciente/Paciente";
import User from "../components/User/User";
import Estudiante from "../components/Estudiante/Estudiante";
import ShowChat from "../components/ShowChat/ShowChat";
// import Admin Components
import HomeAdmin from "../pages/HomeAdmin/HomeAdmin";
import Profesor from "../components/Profesor/Profesor";
import LandingPage from "../pages/LandingPage/LandingPage";
import Consent from "../components/Consent/Consent";
const routes = [
  {
    path: "/profesor",
    component: LayoutProfesor,
    exact: false,
    routes: [
      {
        path: "/profesor",
        component: HomeProfesor,
        exact: true,
      },
      {
        path: "/profesor/solicitudes",
        component: User,
        exact: true,
      },
      {
        path: "/profesor/chat",
        component: Chat,
        exact: true,
      },
      {
        path: "/profesor/pacientes",
        component: Paciente,
        exact: true,
      },
      {
        path: "/profesor/perfil",
        component: Perfil,
        exact: true,
      },
      {
        path: "/profesor/estudiantes",
        component: Estudiante,
        exact: true,
      },
      {
        component: Error,
      },
    ],
  },
  {
    path: "/estudiante",
    component: LayoutEstudiante,
    exact: false,
    routes: [
      {
        path: "/estudiante",
        component: HomeEstudiante,
        exact: true,
      },
      {
        path: "/estudiante/perfil",
        component: Perfil,
        exact: true,
      },
      {
        path: "/estudiante/show-chat",
        component: ShowChat,
        exact: true,
      },
      {
        path: "/estudiante/chat",
        component: Chat,
        exact: true,
      },
      {
        component: Error,
      },
    ],
  },
  {
    path: "/admin",
    component: LayoutAdmin,
    exact: false,
    routes: [
      {
        path: "/admin",
        component: HomeAdmin,
        exact: true,
      },
      {
        path: "/admin/perfil",
        component: Perfil,
        exact: true,
      },
      {
        path: "/admin/pacientes",
        component: Paciente,
        exact: true,
      },
      {
        path: "/admin/estudiantes",
        component: Estudiante,
        exact: true,
      },
      {
        path: "/admin/profesores",
        component: Profesor,
        exact: true,
      },
      {
        path: "/admin/solicitudes",
        component: User,
        exact: true,
      },
      {
        component: Error,
      },
    ],
  },

  {
    path: "/",
    component: LayoutBasic,
    exact: false,
    routes: [
      {
        path: "/",
        component: LandingPage,
        exact: true,
      },
      {
        path: "/consent",
        component: Consent,
        exact: true,
      },
      {
        path: "/login",
        component: LogInForm,
        exact: true,
      },
      {
        path: "/registro",
        component: Registro,
        exact: true,
      },
      {
        component: Error,
      },
    ],
  },
];

export default routes;
