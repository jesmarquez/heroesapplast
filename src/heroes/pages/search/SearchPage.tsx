import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";
import { Button } from "@/components/ui/button";
import { CustomBreadcrumb } from "@/components/custom/CustomBreadcrumb";

export const SearchPage = () => {
  return (
    <>
      <CustomJumbotron
        title="Busqueda de superheroes"
        description="Descubre, explora y administra super heroes y villanos"
      />
      
      <CustomBreadcrumb currentPage="Search"
        // breadcrumbs={[
        //   { label: 'Home1', to: '/'},
        //   { label: 'Home2', to: '/'},
        //   { label: 'Home3', to: '/'},
        // ]}
      />
      
      {/* Stats Dashboard */}
      <HeroStats />

      {/** Filter and Search */}
      <SearchControls/>

      {/* Advanced Filters */}
      <div className="bg-white rounded-lg p-6 mb-8 shadow-sm border">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Advanced Filters</h3>
          <Button variant="ghost">Clear All</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Team</label>
            <div className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
              All teams
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Category</label>
            <div className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
              All categories
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Universe</label>
            <div className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
              All universes
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Status</label>
            <div className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
              All statuses
            </div>
          </div>
        </div>
        <div className="mt-4">
          <label className="text-sm font-medium">Minimum Strength: 0/10</label>
          <div className="relative flex w-full touch-none select-none items-center mt-2">
            <div className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
              <div className="absolute h-full bg-primary" style={{ width: "0%" }} />
            </div>
            <div className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors" />
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchPage;
