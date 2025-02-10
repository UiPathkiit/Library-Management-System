import HeroSection from "@/app/LandingPage/HeroSection";
// import Borrowed from '@/app/Borrowed/page'
import Returned from '@/app/Returned/page'
// import ForgotPasswordForm from "@/app/AdminPages/ForgotPasswordForm.jsx";
import DashboardAdmin from "@/app/Dashboard-Admin/Dashboard";
import DashboardUser from "@/app/Dashboard-User/Main";
import Signin from "@/app/asignin/page"
import Sign from "@/app/usignin/page"
function Page() {
  return (
    <div>
    {/* <Signin/> */}
    {/* <Sign /> */}
      <DashboardUser />
      {/* <HeroSection /> */}
      {/* <Borrowed /> */}
      {/* <Returned /> */}
      {/* <ForgotPasswordForm /> */}
    </div>
  );
}

export default Page;
