import { Container, Filters, ProductCard, Title, TopBar } from "@/components/shared";
import ProductsGroupList from "@/components/shared/products-group-list";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold"/>
      </Container>
      <TopBar/>

      <Container className="pb-14 mt-10">
      <div className="flex gap-[80px]">
          <div className="w-[250px]">
            <Filters />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList title={"Пицца"} items={[{
                  id:1,
                  name:'Аррива!',
                  imageUrl:'https://media.dodostatic.net/image/r:292x292/11EE7D6134BC4150BDD8E792D866AB52.avif',
                  items: [{price: 579}]
                },
                {
                  id:1,
                  name:'Аррива!',
                  imageUrl:'https://media.dodostatic.net/image/r:292x292/11EE7D6134BC4150BDD8E792D866AB52.avif',
                  items: [{price: 579}]
                },
                {
                  id:1,
                  name:'Аррива!',
                  imageUrl:'https://media.dodostatic.net/image/r:292x292/11EE7D6134BC4150BDD8E792D866AB52.avif',
                  items: [{price: 579}]
                },
                {
                  id:1,
                  name:'Аррива!',
                  imageUrl:'https://media.dodostatic.net/image/r:292x292/11EE7D6134BC4150BDD8E792D866AB52.avif',
                  items: [{price: 579}]
                },
                {
                  id:1,
                  name:'Аррива!',
                  imageUrl:'https://media.dodostatic.net/image/r:292x292/11EE7D6134BC4150BDD8E792D866AB52.avif',
                  items: [{price: 579}]
                }
                ]} categotyId={1} 
              />
              <ProductsGroupList title={"Завтрак"} items={[{
                  id:1,
                  name:'Аррива!',
                  imageUrl:'https://media.dodostatic.net/image/r:292x292/11EE7D6134BC4150BDD8E792D866AB52.avif',
                  items: [{price: 579}]
                },
                {
                  id:1,
                  name:'Аррива!',
                  imageUrl:'https://media.dodostatic.net/image/r:292x292/11EE7D6134BC4150BDD8E792D866AB52.avif',
                  items: [{price: 579}]
                },
                {
                  id:1,
                  name:'Аррива!',
                  imageUrl:'https://media.dodostatic.net/image/r:292x292/11EE7D6134BC4150BDD8E792D866AB52.avif',
                  items: [{price: 579}]
                },
                {
                  id:1,
                  name:'Аррива!',
                  imageUrl:'https://media.dodostatic.net/image/r:292x292/11EE7D6134BC4150BDD8E792D866AB52.avif',
                  items: [{price: 579}]
                },
                {
                  id:1,
                  name:'Аррива!',
                  imageUrl:'https://media.dodostatic.net/image/r:292x292/11EE7D6134BC4150BDD8E792D866AB52.avif',
                  items: [{price: 579}]
                }
                ]} categotyId={1} 
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}