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

  const using = [
    {
      icon: "/images/about-us/protection.png",
      text: "We help all our clients in making a suitable choice of the car they would like"
    },
    {
      icon: "/images/about-us/file.png",
      text: "We take care of all the paperwork related to the legal implementation and documentation of the proceedings"
    },
    {
      icon: "/images/about-us/bid.png",
      text: "We provide access to a wide array of US auto auctions which will give you an extensive variety to choose from"
    },
    {
      icon: "/images/about-us/percent.png",
      text: "We provide discounts and other special offers to all our regular customers",
    },
    {
      icon: "/images/about-us/container.png",
      text: "We have resources to provide shipping from New York, Atlanta, Los Angeles, Seattle, Texas, Miami, Savannah and Canada"
    }
  ]
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
            <div>
              <h4>{a.title}</h4>
              <p>{a.text}</p>
            </div>
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
      <div className="tw-mt-[70px] tw-bg-[#F9F9F9] tw-py-[70px] tw-flex tw-flex-col tw-justify-center tw-items-center tw-text-center tw-m-auto">
        <p className="tw-text-center tw-text-[30px] tw-text-[#191919] max-laptop:tw-hidden">Advantages of using our service</p>
        <div className="tw-mt-[40px] tw-container tw-grid tw-grid-cols-5 tw-gap-[20px] tw-items-center tw-m-auto tw-text-center tw-px-[40px] max-laptop:tw-grid-cols-2 max-tablet:tw-grid-cols-1">
          {using.map((use) =>
            <div className="tw-max-w-[292px] tw-w-full tw-h-[257px] tw-bg-[#FFFFFF] tw-flex tw-items-center tw-justify-start tw-text-center tw-flex-col tw-py-[50px] max-laptop:last:tw-col-span-2 max-laptop:last:tw-max-w-[708px] max-tablet:last:tw-col-span-1 max-tablet:tw-max-w-[708px]">
                <img src={use.icon}/>
                <p className=" tw-max-w-[228px] tw-mt-[10px]">{use.text}</p>
              </div>
          )}
        </div>
        <p className="tw-mt-[80px] tw-max-w-[978px] tw-w-full tw-text-center max-laptop:tw-px-[50px] max-tablet:tw-px-[20px]">
            It is hard to find reliable partners who take care of your needs as their own. Auto4Export has an experience in vehicle purchasing as well as domestic and international transportation which is supported by an extensive list of satisfied customers and large number of referrals.
          </p>
      </div>
      {/* <Favour />
      <Partner />
      <Subscribe />
      <Blog blogPosts={posts} /> */}
    </>
  );
};

export default page;
