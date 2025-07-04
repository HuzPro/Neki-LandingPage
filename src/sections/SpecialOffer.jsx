import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import { useNavigate } from 'react-router-dom';
import Button from "../components/Button";

const SpecialOffer = () => {
  const navigate = useNavigate();
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} width={773} height={687} className="object-contain w-full" />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg ">
          <span className="text-coral-red">Special </span>
          Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button label="Shop Now" onClick={() => navigate('/products/')} />
          <Button 
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
            hoverBg="hover:bg-slate-gray"
            hoverText="hover:text-white"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          />
        </div>
      </div>
 
    </section>
  );
};

export default SpecialOffer;
