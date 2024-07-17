import Shipping_Ship from "@/components/Shipping_Ship";
import Sustainability from "@/components/Sustainability";
import ShipHero from "@/components/ShipHero";
import Update from "@/components/Update";


export default function Ship_Now() {
  return (
    <>
      <ShipHero />
      <Shipping_Ship />
      <Sustainability />
      <Update />
    </>
  )
}