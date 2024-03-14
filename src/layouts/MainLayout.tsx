import Footer from "./components/Footer";
import TopBar from "./components/Topbar";

function MainLayout({ children }: any) {
  return (
    <>
      <div>
        <TopBar />
      </div>

      <main className="pt-28">{children}</main>

      <div>
        <Footer />
      </div>
    </>
  );
}

export default MainLayout;