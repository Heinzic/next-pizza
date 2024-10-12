import { cn } from "@/lib/utils"
import { ProductCard, Title } from "."

interface Props {
    title: string
    items: any[]
    categotyId: number
    className?: string
    listClassName?: string
}
 
const ProductsGroupList: React.FC<Props> = ({className, categotyId, items, title, listClassName}) => {
    return ( 
        <div className={className}>
            <Title text={title} size="lg" className="font-extrabold mb-5" />
            <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
            {items.map((item, i) => (
                <ProductCard
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    imageUrl={item.imageUrl}
                    price={item.items[0].price}
                />
            ))}
            </div>
        </div>
     );
}
 
export default ProductsGroupList;