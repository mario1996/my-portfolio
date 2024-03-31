import Skeleton from "../skeleton/layout";
import Link from "next/link";

const CV = () => {
  return (
    <Skeleton>
      <div className="flex flex-col md:flex-row w-8/12 content-center mx-auto">
        <div className="flex flex-col gap-y-5">
          <div className="font-bold text-xl sm:text-5xl mx-auto text-center">
            <p>My Professional Odyssey</p>
          </div>
          <div className="font-bold mx-auto hover:scale-110 underline">
            <Link
              href="/files/MarioBaldeCV2024.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download PDF
            </Link>
          </div>
          <div>
            <div className="flex items-center mb-3">
              <div className="flex-1 border-t-2 border-gray-200"></div>
              <span className="font-bold text-lg sm:text-2xl px-3 text-center">
                ABOUT ME
              </span>
              <div className="flex-1 border-t-2 border-gray-200"></div>
            </div>
            <div className="flex flex-row gap-x-5 my-3 justify-center">
              <p className="text-sm sm:text-base">
                <b>Date of birth:</b> 03/05/1996
              </p>
              <p className="text-sm sm:text-base">
                <b>Nationality:</b> Portuguese
              </p>
              <p className="text-sm sm:text-base">
                <b>Gender:</b> Male
              </p>
            </div>
            <p className="text-justify mb-3 text-sm sm:text-base">
              Graduate degree in Computer science. Always been interested in
              technologies, which motivated me to choose this course.
              Development experience in ReactJS, Typescript, GraphQL, .NET(C#),
              and MySQL and would like to continue to enhance the knowledge in
              front-end technologies like ReactJS, Typescript and GraphQL.
              Proficient in utilising Agile methodologies with hands-on
              experience in delivering software solutions using Scrum and
              Kanban.
            </p>
          </div>
          <div>
            <div className="flex items-center mb-3">
              <div className="flex-1 border-t-2 border-gray-200"></div>
              <span className="font-bold text-lg sm:text-2xl px-3 text-center">
                WORK EXPERIENCE
              </span>
              <div className="flex-1 border-t-2 border-gray-200"></div>
            </div>
            <p className="font-bold text-base sm:text-xl mb-3">
              2020 – 2024 Lisbon, Portugal
            </p>
            <p className="font-bold text-base sm:text-xl mb-3">
              Software engineer at Farfetch
            </p>
            <p className="font-bold text-sm sm:text-lg mb-3">2023 - 2024</p>
            <p className="text-justify mb-3 text-sm sm:text-base">
              Worked on Communications for final costumer initiatives in teams
              from around 5 to 10 elements. Had the purpose of building a
              back-office website for the internal clients to be able to build
              their own emails that would then be sent to the costumers
              subscribed to Farfetch, around 3.5 million emails were sent per
              day. Before it was a completely manual process. Some of the
              initiatives I’ve worked: • Built interchangeable modules that
              could make around 35 different combinations of emails that could
              then be manageable by the teams using the tool in order to fit a
              targeted audience. • Participation on build from scratch the email
              templates in a tool that interprets the templates by using a very
              specific language named RPL (Responsys Personalization Language)
              that would then be converted to HTML and CSS on the client side.
            </p>
            <p className="font-bold text-sm sm:text-lg mb-3">2020 - 2023</p>
            <p className="text-justify text-sm sm:text-base">
              Worked on Post purchase initiatives included the checkout page,
              the my account orders, account details, cancel orders, return
              orders and address book pages. Some of the initiatives I’ve
              worked:
            </p>
            <ul className="list-inside list-disc">
              <li className="text-justify text-sm sm:text-base">
                Paper free initiative where the objective was to remove invoices
                and returns instructions from the delivery boxes by allowing
                costumers to download that information on the Order information.
              </li>
              <li className="text-justify text-sm sm:text-base">
                Payback was an initiative that allowed German costumers to
                gather Payback points when they did a purchase on the Farfetch
                website that allowed them to use those points in any of the
                other Payback partners.
              </li>
              <li className="text-justify text-sm sm:text-base">
                Boleto and iDeal payment methods initiatives where we had to
                create new payment confirmation page for each one. In the Boleto
                case we had to created a payment page with all the necessary
                information for Boleto payments. In the iDeal case we had to
                create a payment page with a dropdown with all the banks that
                have agreement with iDeal.
              </li>
              <li className="text-justify text-sm sm:text-base">
                Worked on several emails initiatives where the objective was to
                create Transactional emails to seamlessly integrate with clients
                website journey.
              </li>
              <li className="text-justify text-sm sm:text-base">
                UI updates on all of the post purchase pages.
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-base sm:text-xl mb-3">
              Job related skills:
            </p>
            <ul className="list-inside list-disc text-sm sm:text-base">
              <li>React</li>
              <li>Typescript</li>
              <li>Unit tests in React Testing Library</li>
              <li>
                Integration tests in Playwright to assure the quality of
                developed code
              </li>
              <li>GraphQL</li>
              <li>Git as version control system for completing tasks</li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-base sm:text-xl mb-3">
              2018 – 2020 Lisbon, Portugal
            </p>
            <p className="font-bold text-base sm:text-xl mb-3">
              Software engineer at Tekever
            </p>
            <p className="text-justify mb-3 text-sm sm:text-base">
              Uses an agile methodology, more specifically the SCRUM framework,
              as the team sought to have a close relationship with the client
              and obtain information about the requirements whilst delivering
              functional software, being always willing to changes during the
              procedure. It was an opportunity to expand my social skills and
              get a better overview of the business. Worked in an ongoing
              Healthcare Systems Team. The project consisted in the development
              of an Interactive Kiosk Application for client admission and
              payment process in the facility.
            </p>
            <p className="font-bold text-base sm:text-xl mb-3">
              Job related skills:
            </p>
            <ul className="list-inside list-disc text-sm sm:text-base">
              <li>React using Visual Studio Code</li>
              <li>.NET(C#) using Visual Studio 2017</li>
              <li>Git as version control system for completing tasks</li>
            </ul>
          </div>
          <div>
            <div className="flex items-center mb-3">
              <div className="flex-1 border-t-2 border-gray-200"></div>
              <span className="font-bold text-lg sm:text-2xl px-3 text-center">
                EDUCATION AND TRAINING
              </span>
              <div className="flex-1 border-t-2 border-gray-200"></div>
            </div>
            <div>
              <p className="font-bold text-base sm:text-xl mb-3">
                2014 – 2018 Setúbal, Portugal
              </p>
              <p className="text-sm sm:text-base">
                Computer Science at Escola Superior de Tecnologia de Setúbal,
                Instituto Politécnico de Setúbal
              </p>
              <p className="text-sm sm:text-base">
                <b>Website</b> -{" "}
                <a
                  href="https://www.estsetubal.ips.pt"
                  target="_blank"
                  className="underline"
                >
                  https://www.estsetubal.ips.pt
                </a>
              </p>
            </div>
          </div>
          <div>
            <div className="flex items-center mb-3">
              <div className="flex-1 border-t-2 border-gray-200"></div>
              <span className="font-bold text-lg sm:text-2xl px-3 text-center">
                LANGUAGE SKILLS
              </span>
              <div className="flex-1 border-t-2 border-gray-200"></div>
            </div>
            <div>
              <ul className="list-inside list-disc mb-3 text-sm sm:text-base">
                <b>Mother tongue:</b>
                <li>Portuguese</li>
              </ul>
              <ul className="list-inside list-disc mb-3 text-sm sm:text-base">
                <b>Other languages:</b>
                <li>English - C1 (Proficient user)</li>
                <li>Russian - B1 (Independent user)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Skeleton>
  );
};

export default CV;
