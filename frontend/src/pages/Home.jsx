import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <div className="bg-slate-200 scroll-smooth">
        <Navbar />
        <div className="relative">
          <img
            className="h-3/4 w-screen"
            src="https://149474751.v2.pressablecdn.com/wp-content/uploads/iStock-911672044_Banner-3-1920x890.jpg"
            alt="wallpaper"
          />
          <p className="text-5xl text-white mt-80 ml-56 font-bold bg-white bg-opacity-20 absolute top-8 left-0 p-4">
            Sport voor iedereen
          </p>
        </div>
      </div>
      <div id="missie" className="h-screen">
        <p className="text-bold w-1/2 mx-auto text-center text-5xl font-light mt-16 pb-8 border-b">
          Onze missie
        </p>
        <p className="text-bold w-1/2 mx-auto text-center text-4xl font-light italic mt-8">
          "Alle kinderen en jongeren in België moeten de kans krijgen om te
          sporten. Sport is goed voor de gezondheid en het sociale leven. Het
          versterkt de band tussen mensen en maakt je sterker. Daarom hebben wij
          een platform gemaakt waar mensen sportspullen kunnen <b>delen</b> en{" "}
          <b>lenen</b>"
        </p>
        <img
          src="https://www.aspeninstitute.org/wp-content/uploads/files/PP%202a_RGB_LowRes.jpg"
          alt="fotomissie"
          className="mt-8 w-1/2 mx-auto opacity-70"
        />
      </div>
      <div id="partners" className="h-screen">
        <p className="text-bold w-1/2 mx-auto text-center text-5xl font-light mt-16 pb-8 border-b">
          Onze partners
        </p>
        <p className="text-bold w-1/2 mx-auto text-center text-4xl font-light italic mt-8">
          "In samenwerking met volgende verenigingen kunnen wij kinderen een
          omgeving bieden die zij verdienen. In samenwerking met onze partners
          zorgen wij ervoor dat kinderen gratis kunnen deelnemen aan allerlei
          sportactiviteiten en competities. Op deze manier kunnen kinderen
          zorgeloos nieuwe vrienden maken en hun passie/talenten ontdekken."
        </p>
        <div className="flex justify-center mt-8 my-auto gap-16">
          <img
            src="https://cdn.discordapp.com/attachments/773527640094146570/1042063789182439424/8f8874_b0e514baf31742368f465744b10335fd.png"
            alt="klauwaerts"
            height="900"
            width="300"
          />
          <img
            src="https://cdn.discordapp.com/attachments/773527640094146570/1042063901371662467/Afbeelding3.png"
            alt="sintpauwels"
            height="900"
            width="350"
          />
        </div>
      </div>
      <div id="contact">
        <Footer />
      </div>
    </>
  );
}
