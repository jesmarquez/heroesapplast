import { Link, useLocation } from "react-router"
import { NavigationMenu, NavigationMenuList, NavigationMenuItem , NavigationMenuLink} from "../ui/navigation-menu"
import { cn } from '@/lib/utils';


export const CustomMenu = () => {
  const { pathname } = useLocation();

  const isActive = (path:string) => {
    return pathname === path;
  }
  console.log(pathname);

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {/* Home */}
        <NavigationMenuItem>
            <NavigationMenuLink className={ cn( isActive('/') && "bg-slate-200","p-2 rounded-md")}>
              <Link to="/">Inicio</Link>
            </NavigationMenuLink>
         </NavigationMenuItem>
         {/* Search */}
        <NavigationMenuItem>
            <NavigationMenuLink className={ cn( isActive('/search') && "bg-slate-200","p-2 rounded-md")}>
              <Link to="/search">Search</Link>
            </NavigationMenuLink>
         </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
