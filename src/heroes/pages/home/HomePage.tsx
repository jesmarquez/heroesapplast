
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { HeroStats } from "@/heroes/components/HeroStats"
import { HeroGrid } from "@/heroes/components/HeroGrid"
import { useState } from "react"
import { CustomPagination } from "@/components/custom/CustomPagination"
import { CustomBreadcrumb } from "@/components/custom/CustomBreadcrumb"

export const HomePage = () => {

  const [activeTab, setActiveTab] = useState<
    'all' | 'favorites' | 'heroes' |'villains'
  >('all');
 
  return (
      <>
        <CustomJumbotron 
          title="Universo de Superheroes"
          description="Descubre, explora y administra super héroes y villanos"/>

        <CustomBreadcrumb currentPage="Super heroes"/>
        {/* Stats Dashboard */}
        <HeroStats />
        {/* Controls */}

        {/* Tabs */}
        <Tabs value={ activeTab } className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all" onClick={ ()=> setActiveTab('all') }>All Characters (16)</TabsTrigger>
            <TabsTrigger value="favorites" onClick={ ()=> setActiveTab('favorites') } className="flex items-center gap-2">
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger value="heroes" onClick={ ()=> setActiveTab('heroes') }>Heroes (12)</TabsTrigger>
            <TabsTrigger value="villains" onClick={ ()=> setActiveTab('villains') }>Villains (2)</TabsTrigger>
          </TabsList>
          <TabsContent value="all"> 
            {/* Mostrar todos los personajes*/}
            <HeroGrid/>
          </TabsContent>
          <TabsContent value="favorites"> 
            {/* Mostrar los personajes favoritos */}
            <h1>Favoritos</h1>
            <HeroGrid/>
          </TabsContent>
          <TabsContent value="heroes">
            {/* Mostrar los heroes */}
            <h1>Heroes</h1>
            <HeroGrid/>
          </TabsContent>
          <TabsContent value="villains"> 
            {/* Mostrar los villanos*/}
            <h1>Villains</h1>
            <HeroGrid/>
          </TabsContent>
        </Tabs>

        <HeroGrid />
        
        {/* Pagination */}
        <CustomPagination totalPages={ 8 }/>
      </>
  )
}