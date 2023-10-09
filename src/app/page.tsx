import Home from "@/components/home/home";
import { MainLayout } from "@/layouts";

export default function Page() {
  console.log('MAIN PAGE');
  
  return (
    <MainLayout>
      <Home></Home>
    </MainLayout>
  )
}
