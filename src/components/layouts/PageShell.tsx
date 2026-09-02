import Navbar from "@/components/layouts/navbar/Navbar";
import Footer from "@/components/layouts/footer/Footer";

export default function PageShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
