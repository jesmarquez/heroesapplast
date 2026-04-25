import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";

export const SearchPage = () => {
  return (
    <>
      <CustomJumbotron
        title="Busqueda de superheroes"
        description="Descubre, explora y administra super heroes y villanos"
      />
      {/* Stats Dashboard */}
      <HeroStats />
    </>
  )
}

export default SearchPage;
