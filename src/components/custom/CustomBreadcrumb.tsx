import { Link } from "react-router";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "../ui/breadcrumb"

interface BreadCrumb {
  label: string;
  to: string;
}

interface Props {
  currentPage: string;
  breadcrumbs?: BreadCrumb[];
}

export const CustomBreadcrumb = ({ currentPage, breadcrumbs = [] } : Props) => {
  return (
    <Breadcrumb className="my-5">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/">Inicio</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {
          breadcrumbs.map(breadcrumb => (
            <div className="flex items-center">
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to={ breadcrumb.to }>{ breadcrumb.label }</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </div>
          ))
        }
        <BreadcrumbItem>
          <BreadcrumbLink className="text-black">
            { currentPage }
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
