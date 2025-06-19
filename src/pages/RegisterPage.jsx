import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import RegisterForm from "../components/RegisterForm.jsx"

const RegisterPage = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <Header />
        <RegisterForm/>
      <Footer />
    </div>
  );
};

export default RegisterPage;
