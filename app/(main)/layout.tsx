import Navigation  from "@/components/navigation/navigation";

const MainLayout = async ({
  children
}: {
  children: React.ReactNode;
}) => {
  return ( 
    <div className="h-full">
      <main className="h-full">
        <div className="h-[100px] w-full z-30 fixed inset-y-0 flex justify-end">
          <Navigation />
        </div>
        {children}
      </main>
    </div>
   );
}
 
export default MainLayout;