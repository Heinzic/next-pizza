'use client'

import { cn } from "@/lib/utils";
import { useCategoryStore } from "../../../store/category";

interface Props {
    className?:string
}

const cats = [
    {
        name:'Пицца',
        id:1
    },
    {
        name:'Закуски',
        id:2
    },
    {
        name:'Коктейли',
        id:3
    },
    {
        name:'Кофе',
        id:4
    },
    {
        name:'Напитки',
        id:5
    },
    {
        name:'Десерты',
        id:6
    },
    {
        name:'Десерты',
        id:7
    },
];
 
export const Categories: React.FC<Props> = ({className}) => {

    const categoryActiveId = useCategoryStore((state) => state.activeId) 

    return ( 
        <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
            {
                cats.map(({id, name}, index) => (
                    <a key={index} href={`#${name}`}
                        className={cn('flex items-center font-bold h-11 rounded-2xl px-5', 
                        categoryActiveId === id && 'bg-white shadow-md shadow-gray-200 text-primary'
                    )}>
                        <button>
                            {name}
                        </button>
                    </a>
                ))
            }
        </div>
     );
}