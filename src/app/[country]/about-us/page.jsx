import Blog from "@/containers/Blog";
import Favour from "@/containers/Favour";
import Partner from "@/containers/Partner";
import { Subscribe } from "@/containers/Subscribe";
import css from "./page.module.scss";
import VerifiedUserIcon from "./icons/VerifedUserIcon";
import CarIcon from "./icons/CarIcon";
import ShieldIcon from "./icons/ShieldIcon";
import ShippingIcon from "./icons/ShippingIcon";
import CalculatorIcon from "./icons/CalculatorIcon";
import ContainerIcon from "./icons/ContainerIcon";

import { getBlogPosts } from "@/actions/blog-posts";

const page = async () => {
  const { posts } = await getBlogPosts();
  const advantages = [
    {
      title: "Access to the Major US auto auctions",
      text: "Copart, IAAI, Manheim, Egde Pipeline, Adesa",
    },
    {
      title: "Fast shipping",
      text: "Fast and cheap to Klaipeda",
    },
    {
      title: "Low fees",
      text: "The lowest fees on the market will make your car purchase even more profitable",
    },
    {
      title: "No hidden fees",
      text: "We do not issue any additional payments after paying for the car",
    },
    {
      title: "Unlimited bids",
      text: "No charges applied for the lost auction",
    },
    {
      title: "Free Membership",
      text: "Registration on our platform is ABSOLUTELY FREE",
    },
  ];
  const offers = [
    {
      icon: <VerifiedUserIcon />,
      text: <>Access to All major US Auto <br/> Auctions at our website: Free <br/> Membership</>,
    },
    {
      icon: <CarIcon />,
      text: <>Used and damaged cars, heavy duty trucks, <br/> motorcycles, boats, ATVs, construction equipment <br/> from US auctions and dealerships</>,
    },
    {
      icon: <ShieldIcon />,
      text: "For regular customers we offer to open direct account at auto auctions under our license",
    },
    {
      icon: <ShippingIcon />,
      text: "Pick up your vehicle from US auto auctions or any places and export it to your country",
    },
    {
      icon: <CalculatorIcon />,
      text: "Instant shipping calculator at our website",
    },
    {
      icon: <ContainerIcon />,
      text: "Container and RoRo Shipping",
    },
  ];
  return (
    <>
      <div className={css.block}>
        <div className={css.container + " tw-container"}>
          <div className={css.breadcrumbs}>
            Home&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;About Us
          </div>
          <div className={css.text}>
            <h1>
              We are Best Company <br /> Importing Vehicles From US
            </h1>
            <p>Auto4Export is a trademark of Bid N Drive Inc</p>
          </div>
        </div>
      </div>
      <div className={css.about + " tw-container"}>
        <div className={css.content}>
          <h3 className={css.title}>Who we are?</h3>
          <div className={css.text}>
            Auto4Export offers thousands of vehicles for sale online for export directly from any wholesale USA Auto
            Auction: new, used, salvage cars, motorcycles, trucks, boats, jet skis, ATV's, and construction & industrial
            equipments. <br /> <br /> We have been a licensed used car dealer since 2009, thousands of vehicles sold and
            a lot of satisfied customers from all over the world: Africa, Middle-East, Europe.. etc
          </div>
        </div>
      </div>

      <div className={css.advantages + " tw-container"}>
        {advantages.map((a, idx) => (
          <div className={css.item}>
            <img src={`/images/advantages/0${idx + 1}.png`} alt="" />
            <h4>{a.title}</h4>
            <p>{a.text}</p>
          </div>
        ))}
      </div>
      <div className={css.offer + " tw-container"}>
        {offers && offers.map(offer => (
          <div className={css.item}>
            <div className={css.icon}>
              {offer.icon}
            </div>
            <div className={css.text}>{offer.text}</div>
          </div>
        ))}
      </div>
      <Favour />
      <Partner />
      <Subscribe />
      <Blog blogPosts={posts} />
    </>
  );
};

export default page;
