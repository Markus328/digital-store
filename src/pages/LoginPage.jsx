import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import LoginForm from "../components/LoginForm.jsx"

const RegisterPage = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <Header />
        <LoginForm/>
      <Footer />
    </div>
  );
};

export default RegisterPage;